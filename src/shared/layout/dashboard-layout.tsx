import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex flex-1 flex-col overflow-hidden">
          <Navbar />

          <main className="flex-1 overflow-y-auto p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
