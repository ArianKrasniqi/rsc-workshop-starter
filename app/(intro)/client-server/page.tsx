import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function ClientServerPage() {
  return (
    <div>
      ClientServerPage
      {/* <ServerComponent /> */}
      <ClientComponent content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
