const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const desktopNavLinks = document.querySelectorAll('.main-nav a');

if (navToggle && mobileNav) {
  mobileNav.innerHTML = `
    ${Array.from(desktopNavLinks)
      .map((link) => `<a href="${link.getAttribute('href')}">${link.textContent}</a>`)
      .join('')}
    <a class="btn" href="iletisim.html">Hemen başla</a>
  `;

  const toggleMenu = () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.setAttribute('aria-hidden', String(expanded));
  };

  navToggle.addEventListener('click', toggleMenu);
  mobileNav.setAttribute('aria-hidden', 'true');
}

const visaData = {
  Schengen: {
    Almanya: {
      visaTypes: {
        Turist: [
          'Pasaportunuzun planlanan dönüşten sonra en az 6 ay geçerliliği',
          'Biyometrik fotoğraf ve seyahat sağlık sigortası',
          'Son 3 aylık banka dökümü ve konaklama kanıtı',
        ],
        İş: [
          'Şirket davet mektubu ve ticari ilişki belgeleri',
          'İşveren yazısı ve SGK dökümü',
          'Toplantı programı veya fuar bileti',
        ],
        Öğrenci: [
          'Kabul mektubu veya kayıt belgesi',
          'Maddi yeterlilik kanıtı ve sponsor evrakları',
          'Konaklama onayı ve seyahat sigortası',
        ],
        Aile: [
          'Aile bireyinden davet mektubu',
          'Aile bağını gösteren resmi belge',
          'Konaklama kanıtı ve gelir beyanı',
        ],
      },
    },
    İtalya: {
      visaTypes: {
        Turist: [
          'Pasaport, fotoğraf ve seyahat sağlık sigortası',
          'Uçuş ve konaklama rezervasyonları',
          'Maddi durumu gösteren banka dökümleri',
        ],
        İş: [
          'İtalyan firmadan davet mektubu',
          'Şirket faaliyet belgesi ve vergi levhası',
          'Gidiş-dönüş uçuş planı',
        ],
        Öğrenci: [
          'Üniversite kabul mektubu',
          'Öğrenci belgeleri ve finansal teminat',
          'Konaklama anlaşması',
        ],
      },
    },
    İspanya: {
      visaTypes: {
        Turist: [
          'Pasaport ve iki adet biyometrik fotoğraf',
          'Gidiş-dönüş bilet ve otel rezervasyonu',
          'Günlük 108 € finansal yeterlilik',
        ],
        İş: [
          'İspanya’dan davet mektubu',
          'Şirket izin yazısı ve SGK dökümü',
          'Toplantı veya fuar kaydı',
        ],
        Aile: [
          'Aile üyesinden davetiye ve ikamet belgesi',
          'Aile bağını gösteren nüfus kayıt örneği',
          'Kalacak yer ve geçim beyanı',
        ],
      },
    },
    Hollanda: {
      visaTypes: {
        Turist: [
          'Pasaport, fotoğraf ve seyahat sağlık sigortası',
          'Konaklama belgeleri ve finansal durum',
          'Vize başvuru formu ve dilekçe',
        ],
        'Startup Vizesi': [
          'Onaylı kolaylaştırıcı ile anlaşma',
          'İş planı ve finansal projeksiyonlar',
          'Gerekli sermaye ve şirket kaydı',
        ],
        Öğrenci: [
          'Eğitim kurumu kabul mektubu',
          'Öğrenci finans planı ve konaklama belgeleri',
          'MVV/D-visa başvuru formları',
        ],
      },
    },
  },
  ABD: {
    'Amerika Birleşik Devletleri': {
      visaTypes: {
        'B1/B2 Ziyaretçi': [
          'DS-160 formu ve randevu onayı',
          'Pasaport, fotoğraf ve vize ücreti dekontu',
          'Seyahat amacı ve finansal bağlayıcılık kanıtı',
        ],
        'F1 Öğrenci': [
          'I-20 formu ve SEVIS ödeme dekontu',
          'Dil yeterlilik ve finansal sponsor evrakları',
          'Mevcut eğitim geçmişi belgeleri',
        ],
        'H1B Çalışma': [
          'Onaylı I-129 dilekçesi',
          'İş teklifi mektubu ve uzmanlık kanıtları',
          'Diploma ve özgeçmiş',
        ],
      },
    },
  },
  'Birleşik Krallık': {
    'Birleşik Krallık': {
      visaTypes: {
        Turist: [
          'Online başvuru formu ve randevu onayı',
          'Finansal durum belgeleri ve seyahat planı',
          'Konaklama detayları',
        ],
        İş: [
          'Sponsor şirketten davet mektubu',
          'Şirket faaliyet ve vergi belgeleri',
          'İş seyahati planı',
        ],
        Öğrenci: [
          'CAS mektubu ve finansal kanıtlar',
          'TB testi sonucu (gerekiyorsa)',
          'Konaklama ve eğitim planı',
        ],
        Aile: [
          'Aile üyesinin sponsorluk belgeleri',
          'İlişkiyi gösteren resmi evrak',
          'Sponsorun gelir ve ikamet kanıtı',
        ],
      },
    },
  },
  Kanada: {
    Kanada: {
      visaTypes: {
        Ziyaretçi: [
          'IMM 5257 formu ve biyometri randevusu',
          'Davetiye veya seyahat planı',
          'Finansal yeterlilik belgeleri',
        ],
        Öğrenci: [
          'Kabul mektubu ve CAQ (Québec ise)',
          'Maddi kaynak ve banka dökümleri',
          'Police sertifikası ve tıbbi muayene',
        ],
        Çalışma: [
          'İş teklifi ve LMIA (gerekiyorsa)',
          'CV ve mesleki referanslar',
          'Vize başvuru formları ve biyometri',
        ],
        'Super Visa': [
          'Kanadalı evlat/sponsor daveti',
          'Gelir kanıtı ve sağlık sigortası',
          'Tıbbi muayene raporu',
        ],
      },
    },
  },
  Asya: {
    Japonya: {
      visaTypes: {
        Turist: [
          'Pasaport ve vize başvuru formu',
          'Gidiş-dönüş uçuş planı ve konaklama',
          'Finansal durum belgeleri',
        ],
        İş: [
          'Japon şirket davet mektubu',
          'Şirket izin yazısı ve görev tanımı',
          'Seyahat programı',
        ],
      },
    },
    Kore: {
      visaTypes: {
        Turist: [
          'Pasaport, fotoğraf ve davetiye (gerekirse)',
          'Uçuş ve konaklama belgeleri',
          'Finansal yeterlilik',
        ],
        İş: [
          'Koreli firmadan davet mektubu',
          'Şirket belgeleri ve görev yazısı',
          'Fuar veya toplantı kayıtları',
        ],
        Öğrenci: [
          'Kabul mektubu ve eğitim planı',
          'Banka hesap özeti ve sponsor belgeleri',
          'Sağlık raporu (gerekiyorsa)',
        ],
      },
    },
    Singapur: {
      visaTypes: {
        Turist: [
          'Pasaport, fotoğraf ve online başvuru',
          'Konaklama ve dönüş bileti',
          'Finansal yeterlilik kanıtı',
        ],
        İş: [
          'Singapur şirketi daveti ve şirket belgeleri',
          'İş seyahati planı ve finansal kanıt',
          'Varsa MOM onay yazısı',
        ],
        EntrePass: [
          'İş planı ve inovasyon kriterleri',
          'Sermaye kanıtı ve sponsor bilgileri',
          'Şirket kuruluş belgeleri',
        ],
      },
    },
  },
};

const regionSelect = document.querySelector('#region');
const countrySelect = document.querySelector('#country');
const visaTypeSelect = document.querySelector('#visaType');

const populateCountries = (region) => {
  if (!countrySelect || !visaTypeSelect) return;
  const countries = Object.keys(visaData[region] || {});
  countrySelect.innerHTML = countries
    .map((country) => `<option value="${country}">${country}</option>`)
    .join('');
  populateVisaTypes(region, countrySelect.value);
};

const populateVisaTypes = (region, country) => {
  if (!visaTypeSelect) return;
  const types = Object.keys(visaData[region]?.[country]?.visaTypes || {});
  visaTypeSelect.innerHTML = types
    .map((type) => `<option value="${type}">${type}</option>`)
    .join('');
  updateRequirementPreview();
};

const requirementList = document.querySelector('#requirementList');
const requirementPreview = document.querySelector('#requirementPreview');

const updateRequirementPreview = () => {
  if (!requirementList || !requirementPreview) return;
  const region = regionSelect?.value;
  const country = countrySelect?.value;
  const visaType = visaTypeSelect?.value;
  const requirements =
    visaData[region]?.[country]?.visaTypes?.[visaType] || [];

  if (requirements.length === 0) {
    requirementList.innerHTML =
      '<li>Bu kombinasyon için örnek veri eklenmedi. Lütfen başka bir seçenek deneyin.</li>';
    return;
  }

  requirementList.innerHTML = requirements
    .map((item) => `<li>${item}</li>`)
    .join('');
};

if (regionSelect) {
  populateCountries(regionSelect.value);
  regionSelect.addEventListener('change', (event) => {
    populateCountries(event.target.value);
  });
}

if (countrySelect && regionSelect) {
  countrySelect.addEventListener('change', (event) => {
    populateVisaTypes(regionSelect.value, event.target.value);
  });
}

if (visaTypeSelect) {
  visaTypeSelect.addEventListener('change', updateRequirementPreview);
}

const heroForm = document.querySelector('.hero-form');
if (heroForm) {
  heroForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const region = regionSelect?.value;
    const country = countrySelect?.value;
    const visaType = visaTypeSelect?.value;
    const slug = [region, country, visaType].filter(Boolean).join(' → ');

    if (requirementList) {
      updateRequirementPreview();
      requirementPreview?.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert(`Seçilen ${slug} için kontrol listesini kısa süre içinde paylaşacağız.`);
    }
  });
}

const ctaForm = document.querySelector('.cta-form');
if (ctaForm) {
  ctaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = ctaForm.email?.value.trim();
    if (!email) {
      alert('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    const name = ctaForm.name?.value.trim();
    const message = name
      ? `Teşekkürler ${name}! Ekibimiz ${email} adresi üzerinden iletişime geçecek.`
      : `Teşekkürler! Ekibimiz ${email} adresi üzerinden iletişime geçecek.`;
    alert(message);
    ctaForm.reset();
  });
}
