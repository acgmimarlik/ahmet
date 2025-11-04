const sections = [
  {
    title: "Toplanan bilgiler",
    content:
      "Hesap oluştururken iletişim bilgileri, başvurularda pasaport ve seyahat verileri, ödeme sırasında sağlayıcıdan alınan doğrulama bilgileri işlenir."
  },
  {
    title: "Çerezler ve izleme",
    content:
      "GA4 ve Meta Pixel yalnızca anonimleştirilmiş kullanım istatistikleri toplar. Reddedebilmen için çerez tercihleri sunulacaktır."
  },
  {
    title: "Üçüncü taraf paylaşımı",
    content:
      "Sadece zorunlu hizmet sağlayıcıları (ödeme, e-posta, bulut depolama) ile sınırlı veri paylaşımı yapılır; sözleşmeler KVKK ve GDPR uyumlu olacaktır."
  }
];

export default function GizlilikPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16">
        <div className="container space-y-3 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Gizlilik Politikası</h1>
          <p className="text-lg text-slate-600">
            Nihai sürüm hukuki onay sonrası güncellenecektir. Bu metin taslak amaçlıdır.
          </p>
        </div>
      </section>
      <section className="container space-y-8 py-16">
        {sections.map((section) => (
          <article key={section.title} className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
            <p className="text-sm text-slate-600">{section.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
