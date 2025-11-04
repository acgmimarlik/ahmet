# VisaTaly — No-Code Vize Platformu Teklifi

Bu depo, VisaTaly için hazırlanan çok sayfalı no-code vize platformu teklifini barındırır. İçerik Softr + Airtable mimarisini,
kamu/müşteri/admin akışlarını, veri modelini, otomasyon senaryolarını, fiyat tekliflerini ve teslim takvimini Türkçe olarak
açıklar.

## Önizleme

Projeyi yerelinizde hızlıca görüntülemek için aşağıdaki komut ile hafif bir önizleme sunucusu başlatabilirsiniz:

```bash
python3 preview.py
```

Komut tarayıcınızda `http://localhost:8000` adresini açar. Dilerseniz klasik yöntemle `index.html` dosyasını doğrudan
tarayıcıda açarak da ana sayfayı inceleyebilirsiniz. Üst menüden aşağıdaki sayfalar arasında geçiş yapılır:

- `akislar.html` – Kamu ve admin akışları, durum yaşam döngüsü
- `sayfalar.html` – Softr sayfaları ve rol bazlı yetkilendirme
- `veri-modeli.html` – Airtable tabloları ve veri yönetişimi
- `otomasyonlar.html` – Form adımları ve Make/Zapier senaryoları
- `fiyatlandirma.html` – Paketler ve proje teklifleri
- `zaman-cizelgesi.html` – Sprint planı, kabul kriterleri ve gereken girdiler
- `secici.html` – Bölge → ülke → vize türü seçici ve örnek gereksinim listesi
- `iletisim.html` – Keşif görüşmesi formu ve iletişim bilgileri

## Öne çıkanlar

- Tüm içerik ve arayüz metinleri Türkçeleştirildi; marka adı `https://visataly.com` olarak güncellendi.
- Tek sayfa yerine çok sayfalı navigasyon yapısı kuruldu, her sayfa kendine ait URL üzerinden açılıyor.
- Bölge/ülke/vize seçicisi güncellenerek Türkçe veri seti ve dinamik gereksinim listesi gösteriliyor.
- Başvuru akışları, veri modeli, otomasyonlar, fiyatlandırma ve zaman çizelgesi ayrı sayfalarda detaylandırıldı.

## Özelleştirme

Metinleri, fiyatları veya otomasyon detaylarını ilgili HTML dosyalarında düzenleyebilirsiniz. Genel stil kuralları
`styles.css` dosyasında, mobil menü ve vize seçici gibi etkileşimler `script.js` içinde yer alır.
