# 3D MACHINE AND TOOL LLC

The official website will now be developed using NextJS and TailwindCSS for the best experience.
We will continue to use an ORM to interface with a PostgreSQL database. But, for free with Neon.tech.
Prisma will then be used as the ORM to interface between our app and SaaS solution for database activity.

## DESIGN PROCESS, IMPORTANT CHANGES AND ADDITIONS

- [ ] Recreate the animation set for the <Hero/> component.
  - [ ] The logo should hover, isolating slowly "in place" with framer motion.

## MOBILE PHONE NAVIGATION

- [ ] Create an animated fullscreen menu for desktop (smaller display, user enforced) and primarily for mobile phones.

  - [ ] Use the <MobileMenu/> component for displaying the mobile menu.
  - [ ] Hide the Desktop navigation on size small.
  - [ ] fade in and fade out with close for the fullscreen mobile menu.
  - [ ] link items should be a bit bigger and operate differently (a little) from Desktop views.
    - [ ] Examples:
      - [ ] Framer.com, mobile navigation [https://framer.com]

## RECEIVE RFQ's, PROVIDE QUOTES, REMOVE DATA FROM SERVERS (contact request and design docs in the cloud.)

  - [ ] Once quoted, must remove the files and the quotation from the server.
    - [ ] Need a process to speed this up after the quote is received.
    - [ ] Administrative controls to allow for the deletion of these quotes.
- [ ] Data limitations, design doc package limits
  - [ ] Need to figure out what the biggest project in 3d models dad has in size for individual solutions are and x2 the available upload data per quote.

# COMPLETED ITEMS:

## [x] Dealing with SPAM and BOT Activity
  - [x] ChatGPT is being used to rate the likelihood of a message being spam or a relevant business request.
  - [x] Filter out fake or spamming users from contacting or annoying the admins.
  - [x] I want to try and ensure that genuine people are acccessing my website's content.
  - [x] Person seeking services or products which are provided.
  - [x] Upon identification of illegitimate behaviour or access:
      - [x] Save that persons access information in full.
      - [x] Refuse service to that computer or set of computers.
      - [x] Prevent all data submitted from reaching admins.
  - [x] Implement a working Request for Quote form with the database.
  - [x] Show a screen which shows successful submission and email sent.
  - [x] Provide an admin email and a customer email response.
  - [x] The PostgreSQL database will need all of the file names stored
  - [x] Cloudinary for file uploads, Cloudinary is currently cheapest alternative.



I want to better understand this form, make some changes to it, and ensure that we are all on the same page here.

I have three respective tables in my database connected via Prisma ORM. They are as follows:

```
// other file code here...

model FloridaSalesTax {
  id        Int      @id @default(autoincrement())
  county    String
  zipCode   Int
  rate      Float
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Order {
  id                 Int      @id @default(autoincrement())
  orderNumber        String
  subtotal           Float
  total              Float
  taxRate            Float
  taxExemptionStatus Boolean
  status             String
  purchasedItems     Json
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
  shippingName       String
  shippingAddressOne String
  shippingAddressTwo String?
  shippingCity       String
  shippingState      String
  shippingZipCode    String
  customer           Customer @relation(fields: [id], references: [id])
}

model Customer {
  id                Int      @id @default(autoincrement())
  email             String   @unique
  password          String
  name              String
  billingName       String
  billingAddressOne String
  billingAddressTwo String?
  billingCity       String
  billingState      String
  billingZipCode    String
  orders            Order[]
  createdAt         DateTime @default(now())
}

```

`Changes to the Form Fields by adding a User/Customer Creation/Sign In component and server respective actions`
We need for the form fields to represent the fields from the database so that we have enough information to fill in the database fields from the data provided from the customer, calculated tax, and the product data for the Order. At present, we do not have the requisite fields for this. We need to change the way that the billing address and shipping address work, we will assume that the billing details are the same as the shipping details. So when a field in the billing details portion of the form is updated, the fields in the shipping address should be updated until the checkbox is changed and then the shipping details are displayed. However, we have fields that we do not have data on from the billing details to complete our Order field. So, the user can opt to setup an account in the billing/checkout process here. There needs to be a form field set above the Billing Details which has the ability to sign up or sign in, all on the page. So that will need to be a seperate component.

So we will need the proper server actions for saving and logging in as a customer as `@/actions/createCustomer.js` and `@/actions/signInCustomer.js` for this.

The component will be called `CreateCustomerOrSignInForm`, this form also needs email and name but can be done without a password for a guest checkout.


`Changes to the Sales Tax and Billing/Shipping Details`
In addition, in this checkout form we need to grab our cart from `cart/page.js` and other components and include it along with a subtotal which is the amount at the bottom of the `cart/page.js` view to the user before they press the `continue to checkout` button where the file in question is then displayed.

We need to somehow show that price on this form below the form fields, and a small summary of the items being purchased like in the `cart/page.js` view at the top of this `<CheckoutForm/>` component. But in a small way, we then need to add the State of Florida sales tax (6%) which will be in the environment file and then take and add that 6% to the amount returned from the zip code of the shipping or billing address. This needs to be an updateable(functional) component and then the props should be the items from cookie, surtax amount, and state tax amount from environment file (.env STATE_TAX=6.00) where the value of the STATE_TAX environment variable is the percentage of base state sales tax before the surtax. Turn the string value into a float or number whichever is best for JavaScript.

Originally, the tax for the order should be `TBD` and show the total in a top to bottom format like on a receipt. Then, as the form is filled out, if the zip code is not a Florida zip code, denoted by Florida not being selected as the state in the appropriate shipping or billing field. If it is Florida zip code, once that zip code is entered we need to lookup the surtax and add that in as a line item tax.

So if we have a Florida Customer whose billing and shipping address are in a Florida zip code area we charge them 6% + the surtax returned from the database of zip codes and surtaxes. (We will need to create a server action for this).

Then, we need to complete the receipt at the bottom of the address forms so that customers can see what they are paying for, products plus tax (on one line displayed as TAX: $5.55 for example which is (6% + `surtax percentage from database based on the zip code`)).

So as the customer goes about filling in the form the value of the tax charged will change, if it is an out of the state of florida tax it will not be charged and the value will become $0.00 and 0% tax rate displayed due to an out of state purchase.


