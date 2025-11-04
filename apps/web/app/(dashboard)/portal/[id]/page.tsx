interface Props {
  params: { id: string };
}

const timeline = [
  { label: "Başvuru alındı", date: "02.03.2024", completed: true },
  { label: "Ön inceleme", date: "03.03.2024", completed: true },
  { label: "Eksik evrak", date: "12.03.2024", completed: false },
  { label: "Randevuya hazır", completed: false },
  { label: "Dosya sunuldu", completed: false },
  { label: "Tamamlandı", completed: false }
];

export default function PortalDetailPage({ params }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Başvuru detayları</h1>
        <p className="mt-2 text-sm text-slate-600">
          ID: {params.id}. Gerçek uygulamada bu sayfa Prisma üzerinden başvuruyu ve ilişkili belgeleri yükleyecek.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Durum zaman çizelgesi</h2>
          <ol className="space-y-4">
            {timeline.map((item) => (
              <li key={item.label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <span className={item.completed ? "font-semibold text-brand-600" : ""}>{item.label}</span>
                <span className="text-xs text-slate-400">{item.date ?? "Beklemede"}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Eksik belgeler</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>Son 3 ay banka hesap dökümü (PDF)</li>
            <li>Biyometrik fotoğraf (35x45)</li>
            <li>Çalışma belgesi / SGK hizmet dökümü</li>
          </ul>
          <p className="rounded-2xl border border-dashed border-brand-300 bg-brand-50/60 p-4 text-xs text-brand-700">
            Dosya yükleme bileşeni Supabase Storage imzalı URL ile geliştirilecek. Admin onayı sonrası belgeler “onaylı” olarak işaretlenecek.
          </p>
        </section>
      </div>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Mesajlaşma alanı</h2>
        <p className="mt-2 text-sm text-slate-600">
          Kullanıcı ve danışman mesajları Prisma Message tablosundan gerçek zamanlı listelenecek. Yeni mesajlar için e-posta ve portal içi bildirim gönderilecektir.
        </p>
      </section>
    </div>
  );
}
