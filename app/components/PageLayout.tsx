export default function PageLayout({ children }: any) {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-1 h-full">
      {children}
    </div>
  );
}