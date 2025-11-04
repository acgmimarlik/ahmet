const publicFlow = [
  "Bölge, ülke ve vize türü seç",
  "Gereksinimleri incele ve paket seç",
  "Hesap oluştur veya giriş yap",
  "Rehberli formu 5-7 adımda tamamla",
  "Belgelerini yükle, KVKK & sözleşmeleri onayla",
  "Ödeme sağlayıcısına yönlen ve işlemi tamamla",
  "Portalda durumunu izle ve belgeleri güncelle"
];

const adminFlow = [
  "Yeni başvuru Airtable / Prisma kaydı olarak oluşur",
  "Admin uygunluk sorularını ve dosyaları inceler",
  "Durum değiştir, not bırak, ek evrak iste",
  "Durum değişince otomatik e-posta tetiklenir",
  "Randevu bilgilerini ekle, gerekirse dış takvimden rezervasyon yap",
  "Dosyayı Filed / Completed olarak işaretle"
];

export function FlowOverview() {
  return (
    <section className="bg-white py-20">
      <div className="container grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Kullanıcı akışı</h3>
          <ol className="mt-6 space-y-3 text-sm text-slate-600">
            {publicFlow.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-600">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Admin / Koç akışı</h3>
          <ol className="mt-6 space-y-3 text-sm text-slate-600">
            {adminFlow.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-600">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
