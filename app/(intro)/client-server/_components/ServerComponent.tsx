import { prisma } from '@/db';

export default async function ServerComponent() {
  const data = await prisma.contact.findMany();

  return (
    <>
      <div className="flex flex-col gap-2 rounded border-2 border-blue-500 p-4">
        ServerComponent
        <span>{data[0].first}</span>
      </div>
    </>
  );
}
