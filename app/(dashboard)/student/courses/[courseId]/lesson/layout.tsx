export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout intentionally returns children directly
  // to override the parent student layout and exclude the dashboard sidebar
  return <>{children}</>;
}
