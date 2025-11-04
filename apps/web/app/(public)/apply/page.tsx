import Link from "next/link";

const steps = [
  {
    title: "Destinasyonunu seç",
    description: "Schengen, Amerika, İngiltere, Kanada veya Asya bölgesinden ülke ve vize türünü belirle."
  },
  {
    title: "Profilini doldur",
    description: "Kişisel bilgiler, seyahat tarihleri ve pasaport geçerlilik tarihini gir."
  },
  {
    title: "Evraklarını yükle",
    description: "Vize türüne göre zorunlu belgeler açılır; PDF veya yüksek çözünürlüklü görsel yükleyebilirsin."
  },
  {
    title: "Ödeme ve takip",
    description: "İyzico/Stripe test ödemesini tamamla, portalda durumunu izle ve danışman ekibiyle mesajlaş."
  }
];

export default function ApplyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16">
        <div className="container space-y-3 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Vize başvuruna hemen başla</h1>
          <p className="text-lg text-slate-600">
            Aşağıdaki rehber form Vizatly panelinin MVP ekranlarını temsil eder. Tam sürümde çok adımlı wizard ve durum kontrolü bulunacaktır.
          </p>
        </div>
      </section>
      <section className="container grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Adım adım rehber</h2>
          <ol className="mt-4 space-y-4 text-sm text-slate-600">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-white/90 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">Adım {index + 1}</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{step.title}</p>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500">
            Tüm adımlarda KVKK ve GDPR metinlerine explicit onay kutusu yerleştirilir.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm text-slate-600">
            Bu MVP taslağı, Next.js tarafında çok adımlı form bileşenleri (React Hook Form + Zod) ile geliştirilecektir. Dosya yükleme alanları S3 uyumlu depolama için imzalı URL üzerinden çalışır.
          </p>
          <div className="mt-8 space-y-5">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Örnek alanlar</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>Ad Soyad, Pasaport No, Vatandaşlık</li>
                <li>Planlanan giriş-çıkış tarihleri, konaklama adresi</li>
                <li>İş/Eğitim durumu, davet eden kurum bilgileri</li>
                <li>Özel koşullar için koşullu sorular (ör: öğrenci belgesi)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-brand-300 bg-brand-50/60 p-6 text-sm text-brand-700">
              <p className="font-semibold">Canlı başvuru deneyimi yakında</p>
              <p className="mt-2">
                Beta erişimi için <Link href="mailto:destek@vizatly.com" className="underline">destek@vizatly.com</Link> adresine e-posta at. Yayına alındığında sana haber verelim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
