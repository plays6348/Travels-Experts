export function Container({ className, ...props }) {
  return (
    <div
      className={`mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  );
}
