import Link from "next/link";

const demoApps = [
  { id: "demo-app", applicant: "Elif Kaya", status: "Eksik Evrak", updated: "12.03.2024" },
  { id: "ready-appointment", applicant: "Mert Yılmaz", status: "Randevuya Hazır", updated: "09.03.2024" }
];

export default function AdminApplicationsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-slate-900">Başvurular</h1>
        <p className="mt-2 text-sm text-slate-600">
          Bu sayfa admin panelindeki filtrelenebilir tabloyu temsil eder. Demo verisi sabittir.
        </p>
      </header>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Başvuru</th>
              <th className="px-4 py-3">Durum</th>
              <th className="px-4 py-3">Son güncelleme</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {demoApps.map((app) => (
              <tr key={app.id} className="hover:bg-brand-50/40">
                <td className="px-4 py-3 font-medium text-brand-600">
                  <Link href={`/admin/applications/${app.id}`}>{app.applicant}</Link>
                </td>
                <td className="px-4 py-3 text-slate-600">{app.status}</td>
                <td className="px-4 py-3 text-slate-400">{app.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
