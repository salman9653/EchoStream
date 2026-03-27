"use client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-surface-container-lowest overflow-hidden">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 lg:px-8 pb-8 pt-32 relative">

        <div className="max-w-6xl mx-auto h-full relative z-10">
          {children}
        </div>
        {/* Decorative Background Element */}
        <div className="fixed -bottom-64 -right-64 w-lg bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      </main>
    </div>
  );
}
