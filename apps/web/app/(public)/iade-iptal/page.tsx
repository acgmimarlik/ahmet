const policies = [
  {
    title: "Cayma hakkı",
    description:
      "Hizmet başlamadan 14 gün içinde cayma talebi alındığında ödeme tam iade edilir. Bu madde taslaktır; kesin metni hukuk ekibi belirleyecektir."
  },
  {
    title: "Kısmi iade",
    description:
      "Ön inceleme veya evrak düzenleme tamamlandıysa operasyon maliyetleri düşüldükten sonra kısmi iade yapılır."
  },
  {
    title: "Konsolosluk kararları",
    description:
      "Vize reddi durumunda danışmanlık ücretleri süreçte harcanan hizmetlere göre değerlendirilir; konsolosluk harçları iade edilmez."
  }
];

export default function IadeIptalPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16">
        <div className="container space-y-3 text-center">
          <h1 className="text-4xl font-bold text-slate-900">İade & İptal Politikası Taslağı</h1>
          <p className="text-lg text-slate-600">
            Bu metin bilgilendirme amaçlıdır, yayına alınmadan önce hukuk danışmanına onaylatılmalıdır.
          </p>
        </div>
      </section>
      <section className="container space-y-8 py-16">
        {policies.map((policy) => (
          <article key={policy.title} className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">{policy.title}</h2>
            <p className="text-sm text-slate-600">{policy.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
