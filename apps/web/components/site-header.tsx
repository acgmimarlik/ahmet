import Link from "next/link";
import { siteConfig } from "@/lib/utils";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/pricing", label: "Paketler" },
  { href: "/faq", label: "SSS" },
  { href: "/apply", label: "Başvuru" },
  { href: "/portal", label: "Portal" },
  { href: "/admin", label: "Admin" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-bold text-brand-700">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/apply"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Hemen Başvur
          </Link>
        </div>
      </div>
    </header>
  );
}
