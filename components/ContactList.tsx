'use client';

import { type Contact } from '@prisma/client';
import { matchSorter } from 'match-sorter';
import React from 'react';
import { useSafeSearchParams } from '@/validations/routeSchema';
import ContactButton from './ContactButton';

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  const { q } = useSafeSearchParams('home');
  const filteredContacts = q ? matchSorter(contacts, q, { keys: ['first', 'last'] }) : contacts;

  return (
    <nav className="flex-1 overflow-auto px-8 py-4">
      {contacts.length ? (
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id} className="mx-1">
                <ContactButton contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
