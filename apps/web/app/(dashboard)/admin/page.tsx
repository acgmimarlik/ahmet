import Link from "next/link";

const statuses = [
  { status: "Yeni", count: 4 },
  { status: "Ön İnceleme", count: 6 },
  { status: "Eksik Evrak", count: 3 },
  { status: "Randevuya Hazır", count: 2 },
  { status: "Dosya Sunuldu", count: 1 },
  { status: "Tamamlandı", count: 5 }
];

const queue = [
  { id: "demo-app", applicant: "Elif Kaya", status: "Eksik Evrak", pkg: "Standart", amount: "₺5.000", updated: "12.03.2024" },
  { id: "ready-appointment", applicant: "Mert Yılmaz", status: "Randevuya Hazır", pkg: "Premium", amount: "₺7.500", updated: "09.03.2024" }
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Admin Paneli Taslağı</h1>
          <p className="mt-2 text-sm text-slate-600">
            Bu ekran NextAuth ile ADMIN rolüne sahip kullanıcılar tarafından görüntülenecek. Status filtresi, tablo ve aksiyonlar tRPC/REST API ile beslenecek.
          </p>
        </div>
        <button className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
          CSV indir (yakında)
        </button>
      </header>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {statuses.map((item) => (
          <div key={item.status} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500 uppercase">{item.status}</p>
            <p className="mt-2 text-3xl font-bold text-brand-600">{item.count}</p>
          </div>
        ))}
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Başvuru kuyruğu</h2>
        <p className="mt-2 text-sm text-slate-600">
          Realtime tablo, Prisma Application modeli üzerinden filtrelenerek getirilecek. Durum değişiklikleri e-posta tetiklerini başlatacak.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Başvuru</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Paket</th>
                <th className="px-4 py-3">Tutar</th>
                <th className="px-4 py-3">Güncelleme</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {queue.map((row) => (
                <tr key={row.id} className="hover:bg-brand-50/40">
                  <td className="px-4 py-3 font-medium text-brand-600">
                    <Link href={`/admin/applications/${row.id}`}>{row.applicant}</Link>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.status}</td>
                  <td className="px-4 py-3 text-slate-600">{row.pkg}</td>
                  <td className="px-4 py-3 text-slate-600">{row.amount}</td>
                  <td className="px-4 py-3 text-slate-400">{row.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
