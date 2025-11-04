const sections = [
  {
    title: "Veri sorumlusu",
    content:
      "Vizatly Teknoloji ve Danışmanlık A.Ş. olarak 6698 sayılı KVKK kapsamında veri sorumlusu sıfatını haiziz. Bu metin bir ön izleme niteliğindedir; hukuki danışmanınız tarafından güncellenmelidir."
  },
  {
    title: "İşlenen kişisel veriler",
    content:
      "Kimlik, iletişim, seyahat planı, biyometrik fotoğraf ve finansal işlem verileri başvurunun yürütülmesi amacıyla işlenir. Gerektiğinde yurt dışına aktarım yapılır."
  },
  {
    title: "Veri güvenliği",
    content:
      "Veriler şifreli olarak saklanır, erişimler rol bazlıdır ve tüm işlemler loglanır. Düzenli yedekleme ve yetki kontrolleri uygulanır."
  }
];

export default function KvkkPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16">
        <div className="container space-y-3 text-center">
          <h1 className="text-4xl font-bold text-slate-900">KVKK Aydınlatma Metni</h1>
          <p className="text-lg text-slate-600">
            Bu içerik örnek amaçlıdır. Yayın öncesi hukuki ekip tarafından gözden geçirilmelidir.
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
