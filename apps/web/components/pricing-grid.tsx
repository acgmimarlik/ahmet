import Link from "next/link";
import { siteConfig } from "@/lib/utils";

export function PricingGrid() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container space-y-10 text-center">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Şeffaf ve sabit paketler</h2>
          <p className="mt-3 text-slate-600">
            Konsolosluk harçları dahil değildir. Randevu uygunluğu kurum takvimine bağlıdır.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.pricing.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                tier.popular ? "ring-2 ring-brand-500" : ""
              }`}
            >
              {tier.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  En çok tercih edilen
                </span>
              ) : null}
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{tier.name}</h3>
                <p className="mt-2 text-3xl font-bold text-brand-600">{tier.price}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-500" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/apply"
                className="mt-auto inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
              >
                Bu paketi seç
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
