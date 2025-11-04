import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  { href: "/portal", label: "Portal" },
  { href: "/portal/demo-app", label: "Demo Başvuru" },
  { href: "/admin", label: "Admin Paneli" }
];

export default function DashboardLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white px-6 py-8 text-sm font-medium text-slate-600 md:flex">
        <Link href="/" className="mb-8 text-lg font-bold text-brand-600">
          Vizatly
        </Link>
        <nav className="space-y-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-brand-50 hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1">
        <div className="border-b border-slate-200 bg-white px-6 py-4 text-sm text-slate-500">
          Bu ekranlar MVP planı için taslak bileşenleri gösterir. Gerçek veriler NextAuth + Prisma ile bağlanacaktır.
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
