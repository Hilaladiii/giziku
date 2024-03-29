export default function Layout({
  children,
  submitComposition,
  addComposition,
}: {
  children: React.ReactNode;
  submitComposition: React.ReactNode;
  addComposition: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <div className="flex flex-col">
        {addComposition}
        {submitComposition}
      </div>
    </main>
  );
}
