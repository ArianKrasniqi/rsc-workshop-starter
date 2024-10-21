'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function deleteContact(contactId: string) {

  await prisma.contact.delete({
    where: { id: contactId },
  });

  revalidatePath('/');
}
