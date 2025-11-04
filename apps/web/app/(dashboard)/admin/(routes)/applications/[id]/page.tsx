interface Props {
  params: { id: string };
}

const emailTemplates = [
  { code: "RECEIVED", label: "Başvuru alındı" },
  { code: "NEED_DOCS", label: "Eksik evrak" },
  { code: "READY", label: "Randevuya hazır" },
  { code: "FILED", label: "Dosya sunuldu" },
  { code: "COMPLETED", label: "Tamamlandı" }
];

export default function AdminApplicationDetail({ params }: Props) {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-slate-900">Başvuru #{params.id}</h1>
        <p className="text-sm text-slate-600">
          Bu sayfa Prisma Application kaydını detaylı biçimde gösterir. Aşağıdaki kartlar gerçek geliştirmede form bileşenleriyle değiştirilecektir.
        </p>
      </header>
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Başvuru sahibi</h2>
            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-600 md:grid-cols-2">
              <div>
                <dt className="font-medium text-slate-500">Ad Soyad</dt>
                <dd>Elif Kaya</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">E-posta</dt>
                <dd>elif@vizatly.com</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Telefon</dt>
                <dd>+90 555 111 22 33</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Paket</dt>
                <dd>Standart - ₺5.000</dd>
              </div>
            </dl>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Notlar ve görevler</h2>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li>03.03 - Ön inceleme tamamlandı. Banka dökümü bekleniyor.</li>
              <li>08.03 - Yeni davet mektubu talep edildi.</li>
              <li>12.03 - Müşteri ile WhatsApp üzerinden teyit edildi.</li>
            </ul>
          </article>
        </div>
        <div className="space-y-6">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Durum yönetimi</h2>
            <p className="mt-2 text-sm text-slate-600">
              Bu bölümde dropdown ile Status alanı güncellenecek, Make/Zapier senaryosu e-posta tetikleyecek.
            </p>
            <select className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
              <option>Eksik Evrak</option>
              <option>Randevuya Hazır</option>
              <option>Dosya Sunuldu</option>
              <option>Tamamlandı</option>
              <option>Reddedildi</option>
            </select>
            <button className="mt-4 w-full rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
              Durumu güncelle
            </button>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">E-posta şablonları</h2>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              {emailTemplates.map((tpl) => (
                <li key={tpl.code} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span>{tpl.label}</span>
                  <button className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm">
                    Gönder
                  </button>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
