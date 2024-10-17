import 'server-only';

import { prisma } from '@/db';

export default async function getContacts() {
  const contacts = await prisma.contact.findMany({
    orderBy: [{ first: 'asc' }, { last: 'asc' }],
  });

  return contacts;
}
