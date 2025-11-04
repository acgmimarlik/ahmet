import Link from "next/link";

const applications = [
  {
    id: "demo-app",
    destination: "Schengen - Almanya",
    visaType: "Turistik",
    status: "Eksik Evrak",
    updatedAt: "12.03.2024"
  },
  {
    id: "ready-appointment",
    destination: "ABD",
    visaType: "B1/B2",
    status: "Randevuya Hazır",
    updatedAt: "09.03.2024"
  }
];

export default function PortalPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Başvurularım</h1>
        <p className="mt-2 text-sm text-slate-600">
          Bu liste NextAuth ile oturum açan kullanıcının başvurularını gösterecek. Demo verisi örnek amaçlıdır.
        </p>
      </div>
      <div className="grid gap-4">
        {applications.map((app) => (
          <Link
            key={app.id}
            href={`/portal/${app.id}`}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-200"
          >
            <div>
              <p className="text-sm font-semibold text-brand-600">{app.destination}</p>
              <p className="text-lg font-medium text-slate-900">{app.visaType}</p>
            </div>
            <div className="text-right text-sm text-slate-600">
              <p className="font-semibold">Durum: {app.status}</p>
              <p className="text-xs text-slate-400">Güncellendi: {app.updatedAt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
