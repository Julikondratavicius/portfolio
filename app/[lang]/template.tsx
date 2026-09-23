/** Se vuelve a montar en cada navegación: dispara la transición de entrada. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
