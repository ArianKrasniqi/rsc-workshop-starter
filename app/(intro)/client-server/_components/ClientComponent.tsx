'use client';

type Props = {
  children?: React.ReactNode;
  content?: React.ReactNode;
  mutateData: () => Promise<string>;
};

export default function ClientComponent({ children, content, mutateData }: Props) {
  return (
    <div className="border-2 border-red-500 p-4">
      ClientComponent
      {children}
      {content}
      <button
        onClick={async () => {
          const data = await mutateData();
          return alert(data);
        }}
      >
        Click
      </button>
    </div>
  );
}
