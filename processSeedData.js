const fs = require('fs');
const path = require('path');

// Read the markdown file
const filePath = path.join(__dirname, 'ZipCode_County_Tax.md');
const fileContent = fs.readFileSync(filePath, 'utf8');

// Process the content
const lines = fileContent.split('\n').slice(2); // Skip the first two lines (title and empty line)
const seedData = lines
  .filter(line => line.trim() !== '') // Remove empty lines
  .map(line => {
    const [zipCode, county, rate] = line.split(',').map(item => item.trim());
    return {
      zipCode: parseInt(zipCode),
      county,
      rate: parseFloat(rate) / 100 // Convert percentage to decimal
    };
  });

// Generate the seed file content
const seedFileContent = `
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.floridaSalesTax.createMany({
      data: ${JSON.stringify(seedData, null, 2)},
      skipDuplicates: true,
    });
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
`;

// Write the seed file
const seedFilePath = path.join(__dirname, './seed.js');
fs.writeFileSync(seedFilePath, seedFileContent);

console.log('Seed file generated successfully:', seedFilePath);
console.log('Total records:', seedData.length);