import Link from "next/link";
import { siteConfig } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 text-sm text-slate-600">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-lg font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-2 max-w-md">
            Dinamik formlar, akıllı evrak kontrolü ve randevu takip otomasyonuyla vize sürecinizi dijitalleştiriyoruz.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Link href="/kvkk" className="hover:text-brand-600">
              KVKK
            </Link>
            <Link href="/gizlilik" className="hover:text-brand-600">
              Gizlilik
            </Link>
            <Link href="/mesafeli-satis" className="hover:text-brand-600">
              Mesafeli Satış
            </Link>
            <Link href="/iade-iptal" className="hover:text-brand-600">
              İade & İptal
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-slate-900">İletişim</p>
          <p>E-posta: <a href={siteConfig.links.contact}>{siteConfig.links.contact.replace("mailto:", "")}</a></p>
          <p>
            WhatsApp: <a href={siteConfig.links.whatsapp}>+90 555 111 22 33</a>
          </p>
          <p className="text-xs text-slate-400">
            Konsolosluk harçları danışmanlık paketlerine dahil değildir. Randevu uygunluğu ilgili kurumların takvimine bağlıdır.
          </p>
        </div>
      </div>
      <div className="container mt-10 border-t border-slate-200 pt-6 text-xs text-slate-400">
        © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
