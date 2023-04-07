import { db } from '../lib/db';
import { resources } from './data';

const main = async () => {
  // @ts-ignore
  for (let i = 0; i < resources.length; i++) {
    const { name, category, url, description } = resources[i];
    await db.resource.create({
      data: {
        name,
        category,
        url,
        description: description || null // handle empty description
      }
    });
  }
};
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
