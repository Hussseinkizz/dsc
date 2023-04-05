import AppBar from './AppBar';

export default function Layout({ children }) {
  return (
    <section className="flex flex-col justify-start items-center bg-indigo-50 min-h-screen w-full">
      <AppBar />
      <main className="flex w-full flex-col">{children}</main>
      {/* Spacer Div Hack */}
      <div className="flex w-full h-full flex-auto min-h-16"></div>
      {/* The Footer */}
      <footer className="flex w-full justify-center items-center gap-4 px-4 py-2 bg-slate-800 text-slate-600">
        &copy; DSC UCU Community 2023
      </footer>
    </section>
  );
}
