'use client';

type Props = {
  children?: React.ReactNode;
  content?: React.ReactNode;
};

export default function ClientComponent({ children, content }: Props) {
  return (
    <div className="border-2 border-red-500 p-4">
      ClientComponent
      {children}
      {content}
      <button
        onClick={() => {
          return alert('Server Button Clickeed');
        }}
      >
        Click
      </button>
    </div>
  );
}
