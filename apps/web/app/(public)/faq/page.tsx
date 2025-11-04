import { FAQList } from "@/components/faq-list";

export default function FAQPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16">
        <div className="container space-y-3 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Sık Sorulan Sorular</h1>
          <p className="text-lg text-slate-600">
            Vize sürecine dair merak ettiklerinin yanıtları burada. Daha fazlası için bize yazabilirsin.
          </p>
        </div>
      </section>
      <FAQList />
    </div>
  );
}
