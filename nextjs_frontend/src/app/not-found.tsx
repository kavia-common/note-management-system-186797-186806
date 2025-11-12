export default function NotFound() {
  return (
    <div className="p-8">
      <div className="p-6 rounded-xl bg-white border border-[var(--ocn-border)]">
        <h1 className="text-2xl font-semibold">404 – Page Not Found</h1>
        <p className="text-[var(--ocn-muted)] mt-1">
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
}
