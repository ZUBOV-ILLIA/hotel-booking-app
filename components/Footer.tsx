export default function Footer() {
  return (
    <footer className="flex h-8 items-center justify-center overflow-hidden text-xs text-slate-100 md:h-16">
      <span className="animate-slideInFromBottom">
        All rights reserved © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
