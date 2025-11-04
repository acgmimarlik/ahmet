import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white py-20">
      <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700">
            Vizen dakikalar içinde başlasın
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Vize başvurun, <span className="text-brand-600">10 dakikada</span> hatasız.
          </h1>
          <p className="text-lg text-slate-600">
            Dinamik formlar, akıllı evrak kontrolü ve randevu uygunluk takibi. Sürecini panelinden izle; gereksiz stres ve hataları geride bırak.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-full bg-brand-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-brand-200/60 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Hemen Başvur
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-brand-200 px-6 py-3 text-center font-semibold text-brand-600 transition hover:border-brand-400 hover:text-brand-700"
            >
              Paketleri Gör
            </Link>
          </div>
          <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            <li className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm">
              Akıllı belge kontrolü – eksikleri otomatik tespit eder
            </li>
            <li className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm">
              Randevu uygunluk takibi – slot açılır açılmaz bildirim
            </li>
            <li className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm">
              Şeffaf süreç – durumunu 7/24 panelinden izle
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-brand-100 bg-white/70 p-6 shadow-xl shadow-brand-100/60 backdrop-blur">
          <h2 className="text-lg font-semibold text-slate-900">Canlı Durum Akışı</h2>
          <p className="mt-2 text-sm text-slate-500">
            Portalda tüm aşamaları takip et, eksik evrakları tek tıkla yükle ve danışman ekibiyle mesajlaş.
          </p>
          <ol className="mt-6 space-y-3 text-sm">
            {[
              "Başvuru alındı",
              "Ön inceleme",
              "Eksik evrak",
              "Randevuya hazır",
              "Dosya sunuldu",
              "Tamamlandı"
            ].map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-600">
                  {index + 1}
                </span>
                <span className="font-medium text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
