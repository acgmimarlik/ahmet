const clauses = [
  "İşbu sözleşme taslağı tüketici kanununa tabi uzaktan satış işlemleri için hazırlanmıştır.",
  "Hizmetin kapsamı: Vizatly danışmanlık hizmetleri, dijital panel erişimi ve başvuru koordinasyonudur.",
  "Ödeme iadesi ve cayma hakları ilgili mevzuata göre düzenlenecek, kesin metin hukuk danışmanı tarafından sağlanacaktır."
];

export default function MesafeliSatisPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16">
        <div className="container space-y-3 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Mesafeli Satış Sözleşmesi Taslağı</h1>
          <p className="text-lg text-slate-600">
            Kesin sözleşme metni hukuk danışmanı tarafından tamamlanacaktır. Bu içerik bilgilendirme amaçlıdır.
          </p>
        </div>
      </section>
      <section className="container space-y-6 py-16">
        {clauses.map((clause) => (
          <p key={clause} className="text-sm text-slate-600">
            {clause}
          </p>
        ))}
      </section>
    </div>
  );
}
