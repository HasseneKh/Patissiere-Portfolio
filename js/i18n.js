const SUPPORTED_LANGS = ['fr', 'ar', 'en', 'de', 'es'];
const RTL_LANGS = ['ar'];

const TRANSLATIONS = {
  fr: {
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_experience: "Parcours",
    nav_gallery: "Créations",
    nav_contact: "Contact",
    nav_toggle_label: "Ouvrir le menu",
    lang_switch_label: "Choisir la langue",

    hero_eyebrow: "Gabès, Tunisie",
    hero_role: "Pâtissière",
    hero_tagline: "Je marie techniques de boulangerie traditionnelles et contemporaines pour créer des desserts délicieux et visuellement époustouflants.",
    hero_cta_primary: "Voir mes créations",
    hero_cta_secondary: "Me contacter",

    about_eyebrow: "01 — Le profil",
    about_title: "À propos",
    about_text: "Je suis pâtissière, qualifiée en techniques de boulangerie traditionnelles et contemporaines, avec la passion de créer des desserts délicieux et visuellement époustouflants. Je suis au plaisir de rejoindre un atelier professionnel pour développer mes compétences techniques et professionnelles.",
    about_lang_label: "Langues",
    about_engagement_label: "Engagement",
    about_engagement_text: "Bénévole — Association TuniBless (2024–présent) & Association Jinane (2023–2024), Gabès",
    about_interests_label: "Centres d'intérêt",
    about_interests_text: "Pâtisserie · Photographie · Voyage · Sport · Bénévolat",

    lang_ar: "Arabe", lang_fr: "Français", lang_en: "Anglais", lang_de: "Allemand",
    level_native: "Maternelle", level_advanced: "Avancé", level_intermediate: "Intermédiaire",

    skills_eyebrow: "02 — Le savoir-faire",
    skills_title: "Compétences",
    skill_1: "Souci du détail & de la qualité",
    skill_2: "Gestion du temps",
    skill_3: "Boulangerie commerciale",
    skill_4: "Formation & travail d'équipe",
    skill_5: "Connaissance de la nourriture",
    skill_6: "Sécurité & hygiène (HACCP)",
    skill_7: "Orientée service client",
    skill_8: "Calme sous forte pression",
    skill_9: "Créativité & développement",

    exp_eyebrow: "03 — Le parcours",
    exp_title: "Expérience professionnelle",
    exp1_date: "Déc 2025 — Août 2026",
    exp1_role: "Pâtissière",
    exp1_place: "Marrakech Coffee Lounge, Gabès",
    exp1_desc: "Conception et réalisation des pâtisseries, desserts et viennoiseries ; élaboration de nouvelles recettes pour la clientèle du coffee lounge ; encadrement de l'équipe, gestion des stocks et des coûts, respect des normes HACCP.",
    exp2_date: "Juillet 2025 — Août 2025",
    exp2_role: "Stage en pâtisserie",
    exp2_place: "Hôtel Al Jazira Beach & Spa, Djerba",
    exp2_desc: "Préparation de pâtisseries traditionnelles et modernes ; décoration (crème, pâte d'amande, chocolat) ; organisation des buffets et respect des règles d'hygiène alimentaire.",
    exp3_date: "Avril 2021 — Avril 2023",
    exp3_role: "Agent d'accueil de vente de voyage",
    exp3_place: "Sana Travel Agency (STA), Gabès",
    exp3_desc: "Accueil clients, conception de formules tout compris, suivi de la satisfaction client — une expérience relationnelle qui nourrit aujourd'hui mon sens du service en pâtisserie.",

    formation_title: "Formation",
    f1_date: "2024–2025", f1_name: "Formation en Pâtisserie — École Elyssa, Gabès",
    f2_date: "2017–2020", f2_name: "Licence Appliquée en Économie, spécialité Assurance, Finance & Banque — ISG Gabès",
    f3_date: "2015–2016", f3_name: "Baccalauréat en Économie et Gestion — Abou Kacem Chebbi, Gabès",

    gallery_eyebrow: "04 — L'atelier",
    gallery_title: "Mes créations",
    gallery_note: "Je mets à jour cette galerie moi-même, au fil de mes créations.",
    gallery_auto_note: "",

    contact_eyebrow: "05 — Restons en contact",
    contact_title: "Travaillons ensemble",
    contact_text: "Je suis disponible pour rejoindre un atelier, un hôtel ou un coffee lounge à la recherche d'une pâtissière rigoureuse et créative.",
    contact_phone_label: "Téléphone",
    contact_email_label: "Email",
    contact_location_label: "Localisation",
    contact_location_value: "Gabès, Tunisie",

    footer_role: "Marwa Zayani — Pâtissière",
    footer_signature: "Fait à la main, avec passion."
  },

  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_gallery: "Creations",
    nav_contact: "Contact",
    nav_toggle_label: "Open menu",
    lang_switch_label: "Choose language",

    hero_eyebrow: "Gabès, Tunisia",
    hero_role: "Pastry Chef",
    hero_tagline: "I blend traditional and contemporary baking techniques to create desserts that are as delicious as they are visually stunning.",
    hero_cta_primary: "See my creations",
    hero_cta_secondary: "Contact me",

    about_eyebrow: "01 — Profile",
    about_title: "About",
    about_text: "I am a pastry chef, trained in traditional and contemporary baking techniques, with a passion for creating desserts that are delicious and visually stunning. I would be delighted to join a professional workshop to further develop my technical and professional skills.",
    about_lang_label: "Languages",
    about_engagement_label: "Volunteering",
    about_engagement_text: "Volunteer — TuniBless Association (2024–present) & Jinane Association (2023–2024), Gabès",
    about_interests_label: "Interests",
    about_interests_text: "Pastry · Photography · Travel · Sports · Volunteering",

    lang_ar: "Arabic", lang_fr: "French", lang_en: "English", lang_de: "German",
    level_native: "Native", level_advanced: "Advanced", level_intermediate: "Intermediate",

    skills_eyebrow: "02 — Know-how",
    skills_title: "Skills",
    skill_1: "Attention to detail & quality",
    skill_2: "Time management",
    skill_3: "Commercial baking",
    skill_4: "Training & teamwork",
    skill_5: "Food knowledge",
    skill_6: "Food safety & hygiene (HACCP)",
    skill_7: "Customer-service oriented",
    skill_8: "Calm under pressure",
    skill_9: "Creativity & development",

    exp_eyebrow: "03 — Journey",
    exp_title: "Professional Experience",
    exp1_date: "Dec 2025 — Aug 2026",
    exp1_role: "Pastry Chef",
    exp1_place: "Marrakech Coffee Lounge, Gabès",
    exp1_desc: "Designing and preparing pastries, desserts and viennoiseries; developing new recipes for the coffee lounge's clientele; supervising the team, managing stock and costs, and complying with HACCP standards.",
    exp2_date: "July 2025 — August 2025",
    exp2_role: "Pastry Internship",
    exp2_place: "Al Jazira Beach & Spa Hotel, Djerba",
    exp2_desc: "Preparing traditional and modern pastries; decoration work (cream, marzipan, chocolate); organizing buffets and following food hygiene rules.",
    exp3_date: "April 2021 — April 2023",
    exp3_role: "Travel Sales Agent",
    exp3_place: "Sana Travel Agency (STA), Gabès",
    exp3_desc: "Welcoming clients, designing all-inclusive packages, tracking customer satisfaction — a relational experience that still shapes my sense of service in pastry today.",

    formation_title: "Education",
    f1_date: "2024–2025", f1_name: "Pastry Training — École Elyssa, Gabès",
    f2_date: "2017–2020", f2_name: "Applied Bachelor's in Economics, specializing in Insurance, Finance & Banking — ISG Gabès",
    f3_date: "2015–2016", f3_name: "Baccalaureate in Economics and Management — Abou Kacem Chebbi, Gabès",

    gallery_eyebrow: "04 — The Workshop",
    gallery_title: "My Creations",
    gallery_note: "I update this gallery myself, as new creations come to life.",
    gallery_auto_note: "Names and ingredients below are machine-translated from French.",

    contact_eyebrow: "05 — Let's Connect",
    contact_title: "Let's Work Together",
    contact_text: "I'm available to join a bakery, hotel, or coffee lounge looking for a meticulous and creative pastry chef.",
    contact_phone_label: "Phone",
    contact_email_label: "Email",
    contact_location_label: "Location",
    contact_location_value: "Gabès, Tunisia",

    footer_role: "Marwa Zayani — Pastry Chef",
    footer_signature: "Handmade, with passion."
  },

  ar: {
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_experience: "المسار المهني",
    nav_gallery: "إبداعاتي",
    nav_contact: "تواصل",
    nav_toggle_label: "فتح القائمة",
    lang_switch_label: "اختيار اللغة",

    hero_eyebrow: "قابس، تونس",
    hero_role: "شيف حلويات",
    hero_tagline: "أمزج بين تقنيات المخابز التقليدية والمعاصرة لابتكار حلويات لذيذة وخلابة بصريًا.",
    hero_cta_primary: "مشاهدة إبداعاتي",
    hero_cta_secondary: "تواصل معي",

    about_eyebrow: "01 — نبذة شخصية",
    about_title: "نبذة عني",
    about_text: "أنا شيف حلويات مؤهّلة في تقنيات المخابز التقليدية والمعاصرة، وأحمل شغفًا حقيقيًا لابتكار حلويات لذيذة وخلابة بصريًا. يسعدني الانضمام إلى ورشة عمل احترافية لتطوير مهاراتي التقنية والمهنية.",
    about_lang_label: "اللغات",
    about_engagement_label: "التطوع",
    about_engagement_text: "متطوعة — جمعية تونيبلس (2024–حتى الآن) وجمعية جنان (2023–2024)، قابس",
    about_interests_label: "الاهتمامات",
    about_interests_text: "الحلويات · التصوير · السفر · الرياضة · التطوع",

    lang_ar: "العربية", lang_fr: "الفرنسية", lang_en: "الإنجليزية", lang_de: "الألمانية",
    level_native: "اللغة الأم", level_advanced: "متقدم", level_intermediate: "متوسط",

    skills_eyebrow: "02 — الخبرة الفنية",
    skills_title: "المهارات",
    skill_1: "الدقة في التفاصيل والجودة",
    skill_2: "إدارة الوقت",
    skill_3: "المخابز التجارية",
    skill_4: "التدريب والعمل الجماعي",
    skill_5: "المعرفة الغذائية",
    skill_6: "السلامة والنظافة الغذائية (HACCP)",
    skill_7: "التركيز على خدمة العملاء",
    skill_8: "الهدوء تحت الضغط",
    skill_9: "الإبداع والتطوير",

    exp_eyebrow: "03 — المسار المهني",
    exp_title: "الخبرة المهنية",
    exp1_date: "ديسمبر 2025 — أغسطس 2026",
    exp1_role: "شيف حلويات",
    exp1_place: "Marrakech Coffee Lounge, Gabès",
    exp1_desc: "تصميم وإعداد الحلويات والمعجنات والفطائر؛ ابتكار وصفات جديدة لعملاء الكوفي لاونج؛ الإشراف على الفريق، وإدارة المخزون والتكاليف، والالتزام بمعايير السلامة الغذائية (HACCP).",
    exp2_date: "يوليو 2025 — أغسطس 2025",
    exp2_role: "تدريب في قسم الحلويات",
    exp2_place: "Hôtel Al Jazira Beach & Spa, Djerba",
    exp2_desc: "تحضير الحلويات التقليدية والعصرية؛ أعمال الزخرفة (الكريمة، عجينة اللوز، الشوكولاتة)؛ تنظيم البوفيهات والالتزام بقواعد النظافة الغذائية.",
    exp3_date: "أبريل 2021 — أبريل 2023",
    exp3_role: "موظفة استقبال ومبيعات سياحية",
    exp3_place: "Sana Travel Agency (STA), Gabès",
    exp3_desc: "استقبال العملاء، وتصميم عروض شاملة، ومتابعة رضا الزبائن — تجربة إنسانية لا تزال تغذي حسّي في تقديم الخدمة داخل عالم الحلويات.",

    formation_title: "التكوين",
    f1_date: "2024–2025", f1_name: "تكوين في الحلويات — معهد إليسا، قابس",
    f2_date: "2017–2020", f2_name: "إجازة تطبيقية في الاقتصاد، اختصاص تأمين وتمويل ومصارف — المعهد العالي للتصرف بقابس",
    f3_date: "2015–2016", f3_name: "شهادة الباكالوريا، شعبة اقتصاد وتصرف — معهد أبو القاسم الشابي، قابس",

    gallery_eyebrow: "04 — المختبر",
    gallery_title: "إبداعاتي",
    gallery_note: "أقوم بتحديث هذا المعرض بنفسي مع كل إبداع جديد.",
    gallery_auto_note: "الأسماء والمكونات أدناه مترجمة آليًا من الفرنسية.",

    contact_eyebrow: "05 — لنبقَ على تواصل",
    contact_title: "لنعمل معًا",
    contact_text: "أنا متاحة للانضمام إلى ورشة حلويات أو فندق أو كوفي لاونج يبحث عن شيف حلويات دقيقة ومبدعة.",
    contact_phone_label: "الهاتف",
    contact_email_label: "البريد الإلكتروني",
    contact_location_label: "الموقع",
    contact_location_value: "قابس، تونس",

    footer_role: "مروى الزياني — شيف حلويات",
    footer_signature: "صُنع باليد، بشغف."
  },

  de: {
    nav_about: "Über mich",
    nav_skills: "Fähigkeiten",
    nav_experience: "Werdegang",
    nav_gallery: "Kreationen",
    nav_contact: "Kontakt",
    nav_toggle_label: "Menü öffnen",
    lang_switch_label: "Sprache wählen",

    hero_eyebrow: "Gabès, Tunesien",
    hero_role: "Konditorin",
    hero_tagline: "Ich vereine traditionelle und zeitgenössische Backtechniken, um Desserts zu kreieren, die ebenso köstlich wie optisch beeindruckend sind.",
    hero_cta_primary: "Meine Kreationen ansehen",
    hero_cta_secondary: "Kontaktieren Sie mich",

    about_eyebrow: "01 — Profil",
    about_title: "Über mich",
    about_text: "Ich bin Konditorin, ausgebildet in traditionellen und zeitgenössischen Backtechniken, mit einer Leidenschaft für köstliche und optisch beeindruckende Desserts. Ich würde mich freuen, einem professionellen Betrieb beizutreten, um meine fachlichen und beruflichen Kompetenzen weiterzuentwickeln.",
    about_lang_label: "Sprachen",
    about_engagement_label: "Ehrenamt",
    about_engagement_text: "Ehrenamtlich – Verein TuniBless (2024–heute) & Verein Jinane (2023–2024), Gabès",
    about_interests_label: "Interessen",
    about_interests_text: "Patisserie · Fotografie · Reisen · Sport · Ehrenamt",

    lang_ar: "Arabisch", lang_fr: "Französisch", lang_en: "Englisch", lang_de: "Deutsch",
    level_native: "Muttersprache", level_advanced: "Fortgeschritten", level_intermediate: "Mittelstufe",

    skills_eyebrow: "02 — Know-how",
    skills_title: "Fähigkeiten",
    skill_1: "Liebe zum Detail & Qualität",
    skill_2: "Zeitmanagement",
    skill_3: "Gewerbliche Bäckerei",
    skill_4: "Ausbildung & Teamarbeit",
    skill_5: "Lebensmittelkenntnisse",
    skill_6: "Lebensmittelsicherheit & Hygiene (HACCP)",
    skill_7: "Kundenorientierung",
    skill_8: "Ruhe unter Druck",
    skill_9: "Kreativität & Weiterentwicklung",

    exp_eyebrow: "03 — Werdegang",
    exp_title: "Berufserfahrung",
    exp1_date: "Dez 2025 — Aug 2026",
    exp1_role: "Konditorin",
    exp1_place: "Marrakech Coffee Lounge, Gabès",
    exp1_desc: "Konzeption und Zubereitung von Patisserie, Desserts und Feingebäck; Entwicklung neuer Rezepte für die Gäste der Coffee Lounge; Führung des Teams, Bestands- und Kostenmanagement sowie Einhaltung der HACCP-Standards.",
    exp2_date: "Juli 2025 — August 2025",
    exp2_role: "Praktikum in der Patisserie",
    exp2_place: "Al Jazira Beach & Spa Hotel, Djerba",
    exp2_desc: "Zubereitung traditioneller und moderner Patisserie; Dekorationsarbeiten (Sahne, Marzipan, Schokolade); Organisation von Buffets und Einhaltung der Lebensmittelhygienevorschriften.",
    exp3_date: "April 2021 — April 2023",
    exp3_role: "Reiseverkaufsberaterin",
    exp3_place: "Sana Travel Agency (STA), Gabès",
    exp3_desc: "Empfang von Kunden, Gestaltung von All-inclusive-Angeboten, Verfolgung der Kundenzufriedenheit — eine Erfahrung im Umgang mit Menschen, die bis heute mein Servicebewusstsein in der Patisserie prägt.",

    formation_title: "Ausbildung",
    f1_date: "2024–2025", f1_name: "Ausbildung in Patisserie — École Elyssa, Gabès",
    f2_date: "2017–2020", f2_name: "Angewandter Bachelor in Wirtschaftswissenschaften, Fachrichtung Versicherung, Finanzen & Bankwesen — ISG Gabès",
    f3_date: "2015–2016", f3_name: "Abitur in Wirtschaft und Management — Abou Kacem Chebbi, Gabès",

    gallery_eyebrow: "04 — Die Werkstatt",
    gallery_title: "Meine Kreationen",
    gallery_note: "Ich aktualisiere diese Galerie selbst, mit jeder neuen Kreation.",
    gallery_auto_note: "Namen und Zutaten unten sind maschinell aus dem Französischen übersetzt.",

    contact_eyebrow: "05 — Lass uns in Kontakt bleiben",
    contact_title: "Lass uns zusammenarbeiten",
    contact_text: "Ich bin verfügbar, um einer Patisserie, einem Hotel oder einer Coffee Lounge beizutreten, die eine sorgfältige und kreative Konditorin sucht.",
    contact_phone_label: "Telefon",
    contact_email_label: "E-Mail",
    contact_location_label: "Standort",
    contact_location_value: "Gabès, Tunesien",

    footer_role: "Marwa Zayani — Konditorin",
    footer_signature: "Handgemacht, mit Leidenschaft."
  },

  es: {
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_experience: "Trayectoria",
    nav_gallery: "Creaciones",
    nav_contact: "Contacto",
    nav_toggle_label: "Abrir el menú",
    lang_switch_label: "Elegir idioma",

    hero_eyebrow: "Gabes, Túnez",
    hero_role: "Pastelera",
    hero_tagline: "Combino técnicas de repostería tradicionales y contemporáneas para crear postres deliciosos y visualmente espectaculares.",
    hero_cta_primary: "Ver mis creaciones",
    hero_cta_secondary: "Contactarme",

    about_eyebrow: "01 — Perfil",
    about_title: "Sobre mí",
    about_text: "Soy pastelera, formada en técnicas de repostería tradicionales y contemporáneas, con la pasión de crear postres deliciosos y visualmente espectaculares. Estaré encantada de unirme a un obrador profesional para seguir desarrollando mis competencias técnicas y profesionales.",
    about_lang_label: "Idiomas",
    about_engagement_label: "Voluntariado",
    about_engagement_text: "Voluntaria — Asociación TuniBless (2024–presente) y Asociación Jinane (2023–2024), Gabes",
    about_interests_label: "Intereses",
    about_interests_text: "Repostería · Fotografía · Viajes · Deporte · Voluntariado",

    lang_ar: "Árabe", lang_fr: "Francés", lang_en: "Inglés", lang_de: "Alemán",
    level_native: "Materna", level_advanced: "Avanzado", level_intermediate: "Intermedio",

    skills_eyebrow: "02 — Saber hacer",
    skills_title: "Habilidades",
    skill_1: "Atención al detalle y la calidad",
    skill_2: "Gestión del tiempo",
    skill_3: "Panadería comercial",
    skill_4: "Formación y trabajo en equipo",
    skill_5: "Conocimiento de los alimentos",
    skill_6: "Seguridad e higiene alimentaria (HACCP)",
    skill_7: "Orientación al cliente",
    skill_8: "Calma bajo presión",
    skill_9: "Creatividad y desarrollo",

    exp_eyebrow: "03 — Trayectoria",
    exp_title: "Experiencia profesional",
    exp1_date: "Dic 2025 — Ago 2026",
    exp1_role: "Pastelera",
    exp1_place: "Marrakech Coffee Lounge, Gabes",
    exp1_desc: "Diseño y elaboración de pastelería, postres y bollería; creación de nuevas recetas para la clientela del coffee lounge; supervisión del equipo, gestión de existencias y costes, y cumplimiento de las normas HACCP.",
    exp2_date: "Julio 2025 — Agosto 2025",
    exp2_role: "Prácticas de pastelería",
    exp2_place: "Hotel Al Jazira Beach & Spa, Djerba",
    exp2_desc: "Preparación de pastelería tradicional y moderna; trabajos de decoración (crema, mazapán, chocolate); organización de bufés y cumplimiento de las normas de higiene alimentaria.",
    exp3_date: "Abril 2021 — Abril 2023",
    exp3_role: "Agente de ventas de viajes",
    exp3_place: "Sana Travel Agency (STA), Gabes",
    exp3_desc: "Atención a clientes, diseño de paquetes todo incluido, seguimiento de la satisfacción del cliente — una experiencia relacional que hoy sigue nutriendo mi sentido del servicio en la pastelería.",

    formation_title: "Formación",
    f1_date: "2024–2025", f1_name: "Formación en Pastelería — École Elyssa, Gabes",
    f2_date: "2017–2020", f2_name: "Licenciatura Aplicada en Economía, especialidad Seguros, Finanzas y Banca — ISG Gabes",
    f3_date: "2015–2016", f3_name: "Bachillerato en Economía y Gestión — Abou Kacem Chebbi, Gabes",

    gallery_eyebrow: "04 — El taller",
    gallery_title: "Mis creaciones",
    gallery_note: "Actualizo esta galería yo misma, con cada nueva creación.",
    gallery_auto_note: "Los nombres e ingredientes se traducen automáticamente del francés.",

    contact_eyebrow: "05 — Mantengámonos en contacto",
    contact_title: "Trabajemos juntos",
    contact_text: "Estoy disponible para unirme a un obrador, un hotel o un coffee lounge que busque una pastelera meticulosa y creativa.",
    contact_phone_label: "Teléfono",
    contact_email_label: "Correo electrónico",
    contact_location_label: "Ubicación",
    contact_location_value: "Gabes, Túnez",

    footer_role: "Marwa Zayani — Pastelera",
    footer_signature: "Hecho a mano, con pasión."
  }
};

const I18N_STORAGE_KEY = 'mz_lang';
const TRANSLATE_CACHE_KEY = 'mz_translate_cache_v1';

function getTranslateCache() {
  try { return JSON.parse(localStorage.getItem(TRANSLATE_CACHE_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveTranslateCache(cache) {
  try { localStorage.setItem(TRANSLATE_CACHE_KEY, JSON.stringify(cache)); } catch (e) {}
}

async function machineTranslate(text, targetLang) {
  if (!text || !text.trim()) return text;
  const cache = getTranslateCache();
  const cacheKey = `${targetLang}::${text}`;
  if (cache[cacheKey]) return cache[cacheKey];
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=fr|${targetLang}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('translate failed');
    const data = await res.json();
    const translated = data && data.responseData && data.responseData.translatedText;
    if (!translated) throw new Error('no translation');
    cache[cacheKey] = translated;
    saveTranslateCache(cache);
    return translated;
  } catch (e) {
    return text;
  }
}

async function translateProductsFor(products, lang) {
  if (lang === 'fr') return products;
  const out = [];
  for (const p of products) {
    const nom = await machineTranslate(p.nom, lang);
    const joined = (p.ingredients || []).join(' | ');
    const translatedJoined = await machineTranslate(joined, lang);
    const parts = translatedJoined.split('|').map(s => s.trim()).filter(Boolean);
    const ingredients = (parts.length === (p.ingredients || []).length) ? parts : p.ingredients;
    out.push({ ...p, nom, ingredients });
  }
  return out;
}

function getCurrentLang() {
  const saved = localStorage.getItem(I18N_STORAGE_KEY);
  return SUPPORTED_LANGS.includes(saved) ? saved : 'fr';
}

function applyStaticTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr');
    spec.split(',').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });
  const noteEl = document.getElementById('gallery-auto-note');
  if (noteEl) {
    noteEl.textContent = dict.gallery_auto_note || '';
    noteEl.style.display = dict.gallery_auto_note ? '' : 'none';
  }
}

function applyDirection(lang) {
  const isRtl = RTL_LANGS.includes(lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  document.body.classList.toggle('is-rtl', isRtl);
}

function updateLangSwitchUI(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
  });
}

async function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'fr';
  localStorage.setItem(I18N_STORAGE_KEY, lang);
  applyDirection(lang);
  applyStaticTranslations(lang);
  updateLangSwitchUI(lang);
  document.getElementById('gallery-grid').setAttribute('aria-busy', 'true');
  const baseProducts = await window.loadProducts();
  const translated = await translateProductsFor(baseProducts, lang);
  window.renderGallery(translated);
  document.getElementById('gallery-grid').setAttribute('aria-busy', 'false');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
  setLanguage(getCurrentLang());
});
