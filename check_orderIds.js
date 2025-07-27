import prisma from './prisma/database.js';

async function getOrderDetails(orderId) {
  console.log('getOrderDetails called with orderId:', orderId, 'type:', typeof orderId);

  try {
    // Fetch the order with all related data
    const order = await prisma.order.findUnique({
      where: { orderNumber: orderId },
      include: {
        customer: true,
        orderItems: {
          include: {
            product: true,
          }
        }
      }
    });

    console.log('Database query result: ', order ? 'Order found' : 'Order not found');

    if (!order) {
      return {
        success: false,
        error: 'Order not found',
      };
    }

    // Format the receipt data
    const receiptData = {
      orderNumber: order.orderNumber,
      orderId: order.id,
      orderDate: order.createdAt,
      orderState: order.status,

      customer: {
        name: order.customer.name,
        email: order.customer.email,
        phone: order.customer.phone,
      },

      shippingAddress: {
        addressOne: order.shippingAddressOne,
        addressTwo: order.shippingAddressTwo,
        city: order.shippingCity,
        state: order.shippingState,
        zipCode: order.shippingZipCode,
      },

      items: order.orderItems.map(item => ({
        id: item.id,
        productId: item.productId,
        productName: item.product.name,
        productDescription: item.product.description,
        quantity: item.quantity,
        unitPrice: parseFloat(item.unitPrice),
        totalPrice: parseFloat(item.quantity * item.unitPrice),
        productImage: item.product.image || null
      })),

      financials: {
        subtotal: parseFloat(order.preTaxSubtotal || 0),
        stateTax: parseFloat(order.stateTax || 0),
        surtax: parseFloat(order.surtax || 0),
        totalTax: parseFloat((order.stateTax || 0) + (order.surtax || 0)),
        taxRate: parseFloat(order.taxRate || 0),
        total: parseFloat(order.total),
        isTaxExempt: order.isTaxExempt || false
      }
    };

    console.log('Returning receipt data with', receiptData.items.length, 'items');

    return {
      success: true,
      data: receiptData
    };
  } catch (error) {
    console.error('Error fetching order details:', error);
    return {
      success: false,
      error: 'Database error: ' + error.message
    };
  }
}

// Test function
async function testOrderDetails() {
  console.log('🔍 Testing Order Details Function');
  console.log('=================================');

  try {
    // Test connection first
    console.log('Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    // List all orders first to see what's available
    console.log('\n📋 Listing all orders:');
    const allOrders = await prisma.order.findMany({
      select: {
        id: true,
        orderNumber: true,
        total: true,
        createdAt: true
      },
      take: 10
    });

    if (allOrders.length === 0) {
      console.log('❌ No orders found in database');
      return;
    }

    console.log('Found orders:');
    allOrders.forEach(order => {
      console.log(` - ID: ${order.id}, Order #: ${order.orderNumbere}, Total: $${order.total}, Date: ${order.createdAt}`);
    });

    // Test with the first order number
    const testOrderNumber = allOrders[7].orderNumber;
    console.log(`\n🧪 Testing with order number: ${testOrderNumber}`);

    const result = await getOrderDetails(testOrderNumber);

    console.log('\n📋 Result:');
    console.log((JSON.stringify(result, null, 2)));

    if (result.success) {
      console.log('\n✅ Test passed! Order details retrieved successfully');
      console.log(`Customer: ${result.data.customer.name}`);
      console.log(`Items: ${result.data.items.length}`);
      console.log(`Total: $${result.data.financials.total}`);
    } else {
      console.log('\n❌ Test failed:', result.error);
    }

  } catch (error) {
    console.error('❌ Test error:', error);
  } finally {
    await prisma.$disconnect();
    console.log('\n Database connection closed');
  }
}

// Run the test
testOrderDetails()
  .then(() => {
    console.log('\n Test completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Test crashed:', error);
    process.exit(1);
  });