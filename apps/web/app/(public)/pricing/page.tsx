import { PricingGrid } from "@/components/pricing-grid";

export default function PricingPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16">
        <div className="container space-y-3 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Paketler ve ücretler</h1>
          <p className="text-lg text-slate-600">
            Tüm paketlerde KVKK uyumlu depolama, müşteri portalı ve otomatik bildirimler bulunur.
          </p>
        </div>
      </section>
      <PricingGrid />
    </div>
  );
}
