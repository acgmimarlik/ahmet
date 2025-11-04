import { PrismaClient, Role, Status, Package, PaymentStatus, Direction } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@vizatly.com" },
    update: {},
    create: {
      email: "admin@vizatly.com",
      name: "Vizatly Admin",
      role: Role.ADMIN
    }
  });

  await prisma.emailTemplate.createMany({
    skipDuplicates: true,
    data: [
      {
        code: "RECEIVED",
        subject: "[Vizatly] Başvurun alındı – sıradaki adımlar",
        html: "<p>Başvurunuzu aldık. Danışman ekibimiz evraklarınızı inceliyor.</p>"
      },
      {
        code: "NEED_DOCS",
        subject: "[Vizatly] Evraklarında eksik var – lütfen tamamla",
        html: "<p>Eksik belgeleri portal üzerinden yükleyebilirsiniz.</p>"
      },
      {
        code: "READY",
        subject: "[Vizatly] Randevu için hazırız – tarih önerisi",
        html: "<p>Takvimde boşluk bulduk, tercih ettiğiniz günleri paylaşın.</p>"
      },
      {
        code: "BOOKED",
        subject: "[Vizatly] Randevun alındı – hazırlık listesi",
        html: "<p>Randevu bilgileriniz ektedir. Lütfen belgelerinizi yanınıza alın.</p>"
      },
      {
        code: "FILED",
        subject: "[Vizatly] Başvurun iletildi – süreç takibi",
        html: "<p>Başvurunuz resmi makamlara iletildi. Gelişmelerden haberdar edeceğiz.</p>"
      },
      {
        code: "COMPLETED",
        subject: "[Vizatly] Sürecin tamamlandı – iyi yolculuklar",
        html: "<p>Destek olduğumuz için mutluyuz. Yeni seyahat planlarında da yanındayız.</p>"
      },
      {
        code: "PAYMENT_RECEIVED",
        subject: "[Vizatly] Ödemen alındı – teşekkürler",
        html: "<p>Ödemen başarıyla alındı. Başvurun işleme alınmıştır.</p>"
      }
    ]
  });

  await prisma.application.upsert({
    where: { id: "demo-app" },
    update: {},
    create: {
      id: "demo-app",
      userId: admin.id,
      fullName: "Elif Kaya",
      phone: "+905551112233",
      citizenship: "Türkiye",
      destination: "Schengen - Almanya",
      visaType: "Turistik",
      travelStart: new Date("2024-04-12"),
      travelEnd: new Date("2024-04-22"),
      passportExpiry: new Date("2029-09-01"),
      package: Package.STANDARD,
      status: Status.NEED_DOCS,
      paymentStatus: PaymentStatus.PAID,
      amountTRY: 5000
    }
  });

  await prisma.message.createMany({
    data: [
      {
        applicationId: "demo-app",
        userId: admin.id,
        body: "Belgelerinizi inceledik, banka dökümünü güncelledikten sonra randevuya geçebiliriz.",
        direction: Direction.ADMIN_TO_USER
      },
      {
        applicationId: "demo-app",
        body: "Yeni banka dökümünü yükledim, uygun mu?",
        direction: Direction.USER_TO_ADMIN
      }
    ],
    skipDuplicates: true
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
