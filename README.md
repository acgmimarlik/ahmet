# Vizatly Monorepo

Vizatly; Türkçe odaklı, uçtan uca vize başvuru yönetimi sağlayan bir Next.js 14 monoreposudur. Bu depo; pazarlama sayfaları, çok adımlı başvuru sihirbazı, müşteri portalı, admin paneli ve otomasyonların temelini hazırlar.

## Yapı

```
.
├── apps/
│   └── web/               # Next.js 14 (App Router) uygulaması
├── packages/
│   └── ui/                # Ortak bileşenler için yer tutucu paket
├── prisma/                # Prisma şeması ve seed betiği
├── scripts/               # Yardımcı komutlar (örn. seed)
├── package.json           # pnpm workspace tanımları
└── pnpm-workspace.yaml
```

## Başlangıç

> Depo pnpm workspaces kullanır. pnpm yüklü değilse [kurulum rehberi](https://pnpm.io/installation)ni takip edebilirsiniz.

```bash
pnpm install
pnpm prisma:generate
pnpm dev
```

- `pnpm install` hem `apps/web`, `scripts` hem de gelecekteki paketleri kurar.
- `pnpm dev` komutu Next.js uygulamasını `http://localhost:3000` adresinde çalıştırır.
- Çevre değişkenlerini `.env.example` dosyasını kopyalayarak tanımlayın.

## Veri tabanı ve Prisma

```bash
pnpm prisma:migrate        # Prisma migrate dev
pnpm prisma:seed           # Örnek admin kullanıcısı + e-posta şablonları + demo başvuru
```

Prisma şeması proje brifindeki modellerle birebir örtüşür. Seed betiği aşağıdakileri üretir:

- `admin@vizatly.com` e-postalı ADMIN rolünde kullanıcı
- 7 adet e-posta şablonu (RECEIVED, NEED_DOCS, READY, BOOKED, FILED, COMPLETED, PAYMENT_RECEIVED)
- `demo-app` kimlikli örnek başvuru ve örnek mesajlar

## Uygulama rotaları

- `/` – Pazarlama anasayfası (TR içerik)
- `/pricing`, `/faq`, `/apply`, `/kvkk`, `/gizlilik`, `/mesafeli-satis`, `/iade-iptal`
- `/portal` ve `/portal/[id]` – Müşteri portalı ekran taslakları
- `/admin` ve `/admin/applications/[id]` – Admin paneli taslakları

`(public)` ve `(dashboard)` route grupları; pazarlama ve yetki gerektiren ekranlar için farklı layout bileşenleri sağlar. Taslak ekranlar React bileşenleriyle doldurulmuştur, gerçek veri ve aksiyonlar NextAuth, Prisma ve ödeme webhooks’ları entegre edildiğinde bağlanacaktır.

## Stil ve bileşenler

- TailwindCSS 3.4, `tailwindcss-animate`, `clsx` ve `tailwind-merge`
- Global olarak Inter fontu ve marka renkleri (`brand` paleti)
- SiteHeader/SiteFooter, Hero, PricingGrid, FlowOverview, FAQList gibi yeniden kullanılabilir bileşenler

## Analitik & scriptler

`NEXT_PUBLIC_GA_MEASUREMENT_ID` ve `NEXT_PUBLIC_META_PIXEL_ID` tanımlandığında analitik scriptleri otomatik eklenir. Tanımlı değilse scriptler render edilmez.

## Sonraki adımlar

- NextAuth kurulumunu tamamlayıp e-posta/magic link doğrulaması ekleyin.
- Başvuru sihirbazını React Hook Form + Zod ile hayata geçirin.
- S3 uyumlu depolama için imzalı URL API rotalarını yazın.
- İyzico veya Stripe ödeme entegrasyonunu tamamlayın (webhook ile PaymentStatus güncellemesi).
- CRON job ile randevu uygunluk bildirimini periyodik kontrol edin.

Bu repo, proje brifindeki MVP kapsamını gerçekleştirmek için sağlam bir başlangıç şablonu sunar.
