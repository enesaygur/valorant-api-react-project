import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        translations: {
          Anasayfa: "Anasayfa",
          Ajanlar: "Ajanlar",
          Zırh: "Zırh",
          Haritalar: "Haritalar",
          Silahlar: "Silahlar",
          "Valorant API Dökümantasyonu": "Valorant API Dökümantasyonu",
          Ajanlar: "Ajanlar",
          Zırhlar: "Zırhlar",
          Haritalar: "Haritalar",
          Silahlar: "Silahlar",
          "Agents Detail Information":
            "Valorant oyununda oynanabilir ajanlar gösterir. Ajanların teknik özellikleri, rolleri, becerileri ve oyunda çıkardığı sesleri içerir.",
          "Gear Detail Information":
            "Valorant oyununda kullanılan zırhlar hakkında bilgi verir. Bu bilgiler zırh adı, açıklaması, fiyatı, kategori, kategori açıklaması gösterir.",
          "Maps Detail Information":
            "Valorant oyununda kullanılan haritalar hakkında bilgi verir. Bu haritalar karosel ile gösterilmiştir.",
          "Weapons Detail Information":
            "Valorant oyunundaki silahların teknik özellikleri ve vücuttaki yarama bilgilerini gösterir.",
          Fiyat: "Fiyat",
          Kategori: "Kategori",
          "Kategori Yazısı": "Kategori Yazısı",
          "Atış Oranı": "Atış Oranı",
          "Şarjör Kapasitesi": "Şarjör Kapasitesi",
          "Şarjör Değiştirme Süresi": "Şarjör Değiştirme Süresi",
          Kafa: "Kafa",
          Gövde: "Gövde",
          Bacak: "Bacak",
          Ses: "Ses",
        },
      },
      en: {
        translations: {
          Anasayfa: "Home",
          Ajanlar: "Agents",
          Zırh: "Gear",
          Haritalar: "Maps",
          Silahlar: "Weapons",
          "Valorant API Dökümantasyonu": "Valorant API Documentation",
          Ajanlar: "Agents",
          Zırhlar: "Gears",
          Haritalar: "Maps",
          Silahlar: "Weapons",
          "Agents Detail Information":
            "It shows playable agents in Valorant. Apart from that, it is also covered agents' technical specifications, roles, skills and sounds they make in the game",
          "Gear Detail Information":
            "It gives an information about the armors used in the Valorant. The information have gear's name, description, price, category and category description.",
          "Maps Detail Information":
            "It gives an information about the maps used in the Valorant.These maps are shown in carousel",
          "Weapons Detail Information":
            "It also shows the injury information on the body about the purchased weapons sold in the Valorant except for its technical features",
          Fiyat: "Cost",
          Kategori: "Category",
          "Kategori Yazısı": "Category Text",
          "Atış Oranı": "Fire Rate",
          "Şarjör Kapasitesi": "Magazine Size",
          "Şarjör Değiştirme Süresi": "Reloaded Time",
          Kafa: "Head",
          Gövde: "Body",
          Bacak: "Legs",
          Ses: "Sound",
        },
      },
      de: {
        translations: {
          Anasayfa: "Startseite",
          Ajanlar: "Vertretungen",
          Zırh: "Rüstung",
          Haritalar: "Karten",
          Silahlar: "Waffen",
          "Valorant API Dökümantasyonu": "Valorant API Dokumentation",
          Ajanlar: "Vertretungen",
          Zırhlar: "Rüstungen",
          Haritalar: "Karten",
          Silahlar: "Waffen",
          "Agents Detail Information":
            "Es zeigt spielbare Agenten in Valorant. Abgesehen davon werden auch die technischen Spezifikationen, Rollen, Fähigkeiten und Geräusche der Agenten behandelt, die sie im Spiel erzeugen",
          "Gear Detail Information":
            "Es gibt Informationen über die im Valorant verwendeten Rüstungen. Die Informationen enthalten den Namen, die Beschreibung, den Preis, die Kategorie und die Kategoriebeschreibung der Ausrüstung.",
          "Maps Detail Information":
            "Es gibt Informationen über die im Valorant verwendeten Karten. Diese Karten werden im Karussell angezeigt",
          "Weapons Detail Information":
            "Es zeigt auch die Verletzungs informationen am Körper über die gekauften Waffen, die im Valorant verkauft werden, mit Ausnahme ihrer technischen Merkmale",
          Fiyat: "Kosten",
          Kategori: "Kategorie",
          "Kategori Yazısı": "Kategorie Text",
          "Atış Oranı": "Feuerrate",
          "Şarjör Kapasitesi": "Magazingröße",
          "Şarjör Değiştirme Süresi": "Nachladezeit",
          Kafa: "Kopfs",
          Gövde: "Leibe",
          Bacak: "Beine",
          Ses: "Klang",
        },
      },
    },
    fallbackLng: "tr",
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });
export default i18n;
