export default function Layout({ children }) {
  return (
    <section className="flex flex-col justify-start items-center bg-indigo-50 min-h-screen w-full">
      <main className="flex w-full flex-col flex-auto">{children}</main>
    </section>
  );
}
