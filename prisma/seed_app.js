

const { PrismaClient } =  require('./generated/app');
const prisma = new PrismaClient();

const mock_items = [
  {
    i: "vitals",
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    add: false,
    name: "Vitals",
    title: "Vitals",
    content: "Vitals Content"
  },
  {
    i: "user-profile",
    x: 2,
    y: 0,
    w: 2,
    h: 2,
    add: false,
    name: "User Profile",
    title: "User Profile",
    content: "User Profile Content"
  },
  {
    i: "house-rules",
    x: 4,
    y: 0,
    w: 2,
    h: 2,
    add: false,
    name: "House Rules",
    title: "House Rules",
    content: "House Rules Content"
  },
  {
    i: "testing",
    x: 6,
    y: 0,
    w: 2,
    h: 2,
    add: true,
    name: "Testing",
    title: "Testing",
    content: "Testing Content"
  }
]

async function main() {
  await prisma.dAOs.deleteMany();
  await prisma.dharmaBeings.deleteMany();
  
  await prisma.dAOs.create({
    data: {
      id: 1,
      name: "Genesis",
      description: "Where it all begins.",
      treasury: 100,
      energy: 10000,
      // accounts: "{}",
      canvas: JSON.stringify(mock_items),
    },
  });

  await prisma.dharmaBeings.create({
    data: {
      id: 1,
      name: "Dharma01",
      type: "testing",
      permissions: "default",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });