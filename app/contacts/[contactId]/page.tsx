import Image from 'next/image';
import { DeleteButton } from '@/components/ui/DeleteButton';
import LinkButton from '@/components/ui/LinkButton';
import { changeFavorite } from '@/data/actions/changeFavorite';
import { deleteContact } from '@/data/actions/deleteContact';
import { getContact } from '@/data/services/getContact';
import GithubLogo from '@/public/github-mark.svg';
import Favorite from './_components/Favorite';

type PageProps = {
  params: {
    contactId: string;
  };
};

export default async function ContactPage({ params }: PageProps) {
  const contact = await getContact(params.contactId);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {contact.avatar && (
        <div className="flex-shrink-0">
          <Image
            priority
            width={192}
            height={192}
            className="mr-8 rounded-3xl bg-gray object-cover"
            alt={`${contact.first} ${contact.last} avatar`}
            key={contact.avatar}
            src={contact.avatar}
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h1 className="flex-start flex items-center gap-4 text-3xl font-bold">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <form action={changeFavorite.bind(null, contact, !contact.favorite)}>
            <Favorite contact={contact} />
          </form>
        </h1>
        {contact.position && <p className="text-2xl">{contact.position}</p>}
        {contact.email && (
          <p className="text-xl">
            <a href={'mailto:' + contact.email} className="no-underline hover:underline">
              {contact.email}
            </a>
          </p>
        )}
        {contact.github && (
          <div className="flex items-center gap-2">
            <div>
              <Image width={16} height={16} src={GithubLogo} alt="Github logo" />
            </div>
            <p className="text-xl text-primary">
              <a target="_blank" className="no-underline hover:underline" href={`https://github.com/${contact.github}`}>
                {contact.github}
              </a>
            </p>
          </div>
        )}
        {contact.notes && <div className="max-h-[300px] w-full overflow-auto 2xl:w-1/2">{contact.notes}</div>}
        <div className="my-4 flex gap-2">
          <LinkButton theme="secondary" href={`/contacts/${params.contactId}/edit`}>
            Edit
          </LinkButton>
          <form action={deleteContact.bind(null, params.contactId)}>
            {/* <Button type="submit" theme="destroy">
              Delete
            </Button> */}
            <DeleteButton />
          </form>
        </div>
      </div>
    </div>
  );
}
