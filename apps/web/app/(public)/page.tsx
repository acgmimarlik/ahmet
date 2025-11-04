import { FAQList } from "@/components/faq-list";
import { FlowOverview } from "@/components/flow-overview";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing-grid";
import Image from "next/image";

const trustSignals = [
  {
    title: "KVKK uyumlu altyapı",
    description: "Yetkilendirilmiş erişim, loglama ve şifreli depolama ile verilerin güvende."
  },
  {
    title: "Modüler otomasyon",
    description: "Make/Zapier senaryoları ile durum değişiklikleri anında e-posta ve Slack bildirimi gönderir."
  },
  {
    title: "Canlı performans panoları",
    description: "Başvuru hacmi, gelir ve SLA metriklerini yöneticiler tek bakışta izler."
  }
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="bg-white py-20">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-slate-900">Bölge → Ülke → Vize türü seçimi tek akışta</h2>
            <p className="text-lg text-slate-600">
              Dinamik seçici ile Schengen, Amerika, İngiltere, Kanada ve Asya ülkeleri için güncel gereksinimleri sunarız. Form adımları seçilen vize türüne göre otomatik şekillenir.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>Ülke bazlı belge listeleri ve koşullu alanlar</li>
              <li>KVKK/GDPR onayları ve e-imza kayıtları</li>
              <li>Shopier / İyzico / Stripe test modunda ödeme bağlantıları</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80"
              alt="Vize belgeleri"
              width={900}
              height={600}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="container grid gap-10 md:grid-cols-3">
          {trustSignals.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <PricingGrid />
      <FlowOverview />
      <FAQList />
    </div>
  );
}
