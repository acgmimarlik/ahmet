import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Vizatly",
  url: "https://visataly.com",
  description:
    "Vizatly ile vize başvurunu dakikalar içinde başlat, belgelerini yükle ve süreci panelinden takip et.",
  links: {
    contact: "mailto:destek@vizatly.com",
    whatsapp: "https://wa.me/905551112233"
  },
  pricing: [
    {
      name: "Temel",
      price: "₺2.500",
      features: [
        "Çok adımlı başvuru formu",
        "Evrak listesi ve yükleme alanları",
        "Ön kontrol raporu",
        "Müşteri paneli & e-posta bildirimleri"
      ]
    },
    {
      name: "Standart",
      price: "₺5.000",
      popular: true,
      features: [
        "Temel paketin tüm özellikleri",
        "Detaylı evrak kontrolü",
        "Randevu uygunluk takibi (e-posta/SMS)",
        "Sigorta teklifi entegrasyonu"
      ]
    },
    {
      name: "Premium",
      price: "₺7.500",
      features: [
        "Standart paketin tüm özellikleri",
        "Öncelikli işlem",
        "Belge düzenleme/formatlama",
        "Otel/uçak rezervasyon destek yazıları"
      ]
    }
  ]
};
