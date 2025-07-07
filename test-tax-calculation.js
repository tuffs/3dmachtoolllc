// Test script to verify tax calculation
const { getTaxesAndTotal } = require('./actions/getTaxesAndTotal');
const { getSurtaxPercent } = require('./actions/getSurtaxPercent');

async function testTaxCalculation() {
  console.log('Testing tax calculation...\n');

  // Test 1: Florida zip code with surtax (Alachua County - 1.5% surtax)
  console.log('Test 1: FL zip code 32601 (Alachua County, 1.5% surtax)');
  const result1 = await getTaxesAndTotal('FL', '32601', 100);
  console.log('Result:', result1);
  console.log('Expected: 6% state tax + 1.5% surtax = 7.5% total\n');

  // Test 2: Florida zip code with different surtax (Baker County - 1.0% surtax)
  console.log('Test 2: FL zip code 32040 (Baker County, 1.0% surtax)');
  const result2 = await getTaxesAndTotal('FL', '32040', 100);
  console.log('Result:', result2);
  console.log('Expected: 6% state tax + 1.0% surtax = 7.0% total\n');

  // Test 3: Non-Florida state
  console.log('Test 3: Non-FL state (CA)');
  const result3 = await getTaxesAndTotal('CA', '90210', 100);
  console.log('Result:', result3);
  console.log('Expected: No tax\n');

  // Test 4: Test getSurtaxPercent directly
  console.log('Test 4: Direct getSurtaxPercent test for 32601');
  const surtaxResult = await getSurtaxPercent('32601');
  console.log('Surtax result:', surtaxResult);
  console.log('Expected: 1.5% surtax');
}

testTaxCalculation().catch(console.error);
