const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { faker } = require('@faker-js/faker');
var gaussian = require('gaussian');

async function main() {
  const numberOfUsers = 10;
  // const random = new Random(); // uses the nativeMath engine

  for (let i = 0; i < numberOfUsers; i++) {
    // Generate pranaCapacity based on a skewed bell curve distribution using random-js

    await prisma.RainbowPilgrims.create({
      data: {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        sanghaBackground: faker.helpers.weightedArrayElement([
          { weight: 0.6, value: 'Wallaian' }, 
          { weight: 0.2, value: 'Dakans' },
          { weight: 0.4, value: 'Gaian' },
        ]),
        geneticAttribute: faker.helpers.weightedArrayElement([
          { weight: 1, value: 'Enhanced Reflexes' }, 
          { weight: 3, value: 'Superior Intellect' }, 
          { weight: 1, value: 'Night Vision' }, 
          { weight: 2, value: 'Regenerative Healing' }
        ]),
        cyberneticEnhancement: faker.helpers.weightedArrayElement([
          { weight: 0.2, value: 'Neural Uplink' }, 
          { weight: 0.3, value: 'Limb Replacement' }, 
          { weight: 0.4, value: 'Sensory Amplifier' }, 
          { weight: 0.1, value: 'Cognitive Enhancer' }
        ]),
        pranaCapacity: generatePranaCapacityWithBellCurve(),
      },
    });
  }

  function generatePranaCapacityWithBellCurve() {
    // Implementing a skewed bell curve distribution using random-js
    const mean = 1000;
    const variance = 500;
    const distribution = gaussian(mean, variance);
    // Take a random sample using inverse transform sampling method.
    let pranaCapacity = distribution.ppf(Math.random());
    
    if (pranaCapacity < 50) pranaCapacity = 50; // ensuring minimum capacity
    // if (pranaCapacity > 5000) pranaCapacity = 5000; // ensuring maximum capacity within the 95th 

    return Math.round(pranaCapacity);
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