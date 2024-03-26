const path = require('path');
const fs = require('fs');
import { NextApiRequest, NextApiResponse } from 'next';

// const prisma = new PrismaClient();

export async function GET(req: NextApiRequest) {
  const pagesDir = path.join(__dirname, '../../');
  console.log('Listing all page routes:');
  

  const data = JSON.stringify(listPages(pagesDir));
  return Response.json(data);

  try {
    // const prisma = new PrismaClient();
    // const users = await prisma.user.findMany();
    // res.status(200).json({"test":"asdf"});

  } catch (error) {
    console.error("Failed to fetch users:", error);
    // res.status(500).json({ error: "Failed to fetch users" });
  }
}


/**
 * This function programmatically determines the routing structure of the Next.js application
 * by listing all pages in the 'pages' directory, excluding special Next.js files and API routes.
 * It now looks for .tsx files, reflecting the usage of TypeScript in the app directory.
 * 
 */
function listPages(dir: string, prefix = ''): any {
  const structure: { [key: string]: any } = {};
  const files = fs.readdirSync(dir);

  files.forEach((file: string) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      structure[file] = listPages(filePath, `${prefix}/${file}`);
    } else {
      // Exclude _app.tsx, _document.tsx, and API routes
      if (file.endsWith('.tsx') && !file.startsWith('_') && !filePath.includes('/api/')) {
        const cleanName = file.replace(/\.tsx$/, '');
        structure[cleanName] = `${prefix}/${cleanName}`;
      }
    }
  });

  return structure;
}
