'use server';

import { type Contact } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function changeFavorite(contact: Contact, favorite: boolean) {
  await slow();

  const data = {
    ...contact,
    favorite,
  };

  await prisma.contact.update({
    data,
    where: { id: contact.id },
  });

  revalidatePath('/');
  redirect(`/contacts/${contact.id}`);
}
