const faqs = [
  {
    question: "Randevuyu siz mi alıyorsunuz?",
    answer:
      "Uygunluk bulundukça bilgilendiriyoruz; onayınızla rezervasyonu tamamlıyoruz. Tüm süreç portal üzerinden kayıt altındadır."
  },
  {
    question: "Konsolosluk harçları dahil mi?",
    answer:
      "Hayır, paketlerimiz yalnızca danışmanlık ve dijital işlem hizmetlerini kapsar. Harçlar başvuru sahibine aittir."
  },
  {
    question: "Red gelirse iade oluyor mu?",
    answer:
      "İşleme seviyesine göre kısmi iade politikamız vardır; konsolosluk kararları bağımsız olduğundan nihai karara müdahale edemiyoruz."
  },
  {
    question: "Evrak yükleme nasıl çalışıyor?",
    answer:
      "Portalda evrak türlerine göre ayrılmış alanlar bulunur. PDF veya net fotoğraf (JPG/PNG) formatlarını kabul ediyoruz."
  },
  {
    question: "Süreç ne kadar sürüyor?",
    answer:
      "Genelde 7–21 gün içinde randevuya hazır hale geliyoruz. Konsolosluk yoğunlukları ve ülke tercihlerine göre değişebilir."
  },
  {
    question: "Kurumsal başvuru yapabilir miyim?",
    answer:
      "Evet, toplu başvuru ve ekip yönetimi için özel panel sunuyoruz. info@vizatly.com adresinden teklif alabilirsiniz."
  }
];

export function FAQList() {
  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="container grid gap-8 md:grid-cols-[0.6fr_1.4fr]">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Sık Sorulan Sorular</h2>
          <p className="mt-3 text-slate-600">
            Daha fazla detaya mı ihtiyacın var? <a className="font-semibold text-brand-600" href="mailto:destek@vizatly.com">destek@vizatly.com</a> adresine yaz.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-lg font-medium text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
