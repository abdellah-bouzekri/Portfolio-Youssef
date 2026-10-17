import img1 from "../assests/projects/7.jpg";
import img2 from "../assests/projects/ADS POST.jpg";
import img3 from "../assests/projects/Agency-1.jpg";
import img4 from "../assests/projects/Design-1.jpg";
import img5 from "../assests/projects/Joker-munipilation.jpg";
import img6 from "../assests/projects/the-design-post-1.jpg";
import img7 from "../assests/projects/جوج وجوه تصميم نهائي.jpg";

export const translations = {
  en: {
    nav: {
      showreel: "Showreel",
      workflow: "Process",
      work: "Work",
      about: "About",
      contact: "Contact",
      hire: "Hire for Project",
    },
    hero: {
      status: "Available for Freelance & Select Contracts",
      titlePre: "Hi ",
      titleHighlight: "I'M YOUSSEF ",
      titlePost: "ABOLAIL",
      bio: "Hi, I'm Youssef, a 25-year-old motion designer with 3.5+ years of freelance experience turning ideas into seamless 60 FPS animations.",
      ctaShowreel: "Watch Showreel",
      ctaProjects: "View Projects",
      stats: [
        { label: "Years Freelance", value: "3.5+" },
        { label: "Completed Projects", value: "45+" },
        { label: "Client Satisfaction", value: "100%" },
        { label: "Frame Rate Standard", value: "60 FPS" },
      ],
    },
    workflow: {
      kicker: "Production Pipeline",
      title: "How Every Project Ships",
      subtitle:
        "A predictable 3-step workflow designed to eliminate endless revision rounds and deliver on schedule.",
      steps: [
        {
          step: "01",
          title: "Concept & Styleframes",
          desc: "Translating brand briefs into moodboards, sketches, and definitive styleframes before animating.",
          milestone: "Approved Art Direction",
        },
        {
          step: "02",
          title: "Kinetic Development",
          desc: "Rigging, 3D simulations, and fine-tuning bezier curves in Cinema 4D and After Effects.",
          milestone: "Rough Cut & Timing Review",
        },
        {
          step: "03",
          title: "Audio & Master Delivery",
          desc: "Integrating custom sound design, color grading, and rendering master files.",
          milestone: "4K / 60 FPS Master Exports",
        },
      ],
    },
    projects: {
      kicker: "Selected Work",
      title: "Recent Freelance Deliverables",
      clientLabel: "Client:",
      categories: {
        all: "All",
        brand3d: "3D & Brand",
        ui: "UI Motion",
        type: "Typography",
      },
      items: [
        {
          id: 1,
          category: "3D & Brand",
          title: "Chicken House Burgers",
          duration: "2023",
          client: "CHB Dreux",
          software: ["Photoshop", "Illustrator"],
          description:
            "High-impact advertising poster design for the grand opening event in March[cite: 1].",
          accent: "from-blue-600/20 to-orange-500/20",
          image: img1,
        },
        {
          id: 2,
          category: "3D & Brand",
          title: "Nestlé Coffee-mate",
          duration: "2023",
          client: "Nestlé",
          software: ["Photoshop", "Illustrator"],
          description:
            "Vibrant and dynamic social media advertising post for The Original Coffee-mate product[cite: 2].",
          accent: "from-red-600/20 to-rose-600/20",
          image: img2,
        },
        {
          id: 3,
          category: "UI Motion",
          title: "Landing Page Click",
          duration: "2024",
          client: "Artjdal",
          software: ["Figma", "React", "JS"],
          description:
            "Modern, developer-focused landing page interface design for Art Director Abdalah Zaroual[cite: 3].",
          accent: "from-teal-500/20 to-emerald-600/20",
          image: img3,
        },
        {
          id: 4,
          category: "Typography",
          title: "HDF Podcast On Air",
          duration: "2023",
          client: "Ministry of Youth",
          software: ["Photoshop", "Lightroom"],
          description:
            "Visual identity and promotional poster creation for the INDH podcast broadcast series[cite: 4].",
          accent: "from-green-600/20 to-emerald-800/20",
          image: img4,
        },
        {
          id: 5,
          category: "Typography",
          title: "Joker Manipulation",
          duration: "2023",
          client: "Personal",
          software: ["Illustrator", "Photoshop"],
          description:
            "Vector illustration and creative graphic manipulation featuring a stylized Joker playing card theme[cite: 5].",
          accent: "from-purple-600/20 to-fuchsia-800/20",
          image: img5,
        },
        {
          id: 6,
          category: "3D & Brand",
          title: "Journalism Diploma",
          duration: "2022",
          client: "ISCA",
          software: ["Photoshop", "InDesign"],
          description:
            "Professional promotional poster design for a certified distance learning media and journalism program[cite: 6].",
          accent: "from-indigo-600/20 to-orange-600/20",
          image: img6,
        },
        {
          id: 7,
          category: "Typography",
          title: "Theatrical Masks",
          duration: "2023",
          client: "Personal",
          software: ["Illustrator", "Procreate"],
          description:
            "Digital illustration of comedy and tragedy masks accompanied by glowing Arabic typography[cite: 7].",
          accent: "from-amber-500/20 to-yellow-700/20",
          image: img7,
        },
      ],
    },
    about: {
      kicker: "Background & Credentials",
      title: "Direct, Reliable Motion Delivery",
      bio: "I am a 25-year-old motion designer with 3.5 years of freelance experience. My approach combines the structural logic of a scientific background with applied multimedia training to create animations that look sharp and deliver results.",
      education: [
        {
          degree: "Technicien Spécialisé en Multimédia",
          institution: "OFPPT",
          desc: "Comprehensive training in digital audio-visual production, 3D pipelines, editing, and graphic design.",
        },
        {
          degree: "Baccalauréat Scientifique",
          institution: "Lycée",
          desc: "Analytical base in physics, kinematics, and spatial geometry applied to realistic motion curves.",
        },
      ],
      toolkitTitle: "Production Toolkit",
    },
    contact: {
      kicker: "Start a Collaboration",
      title: "Let's Build Something Dynamic",
      subtitle:
        "Need a showreel, product teaser, or kinetic UI animation? Send a message and let's discuss your timeline and budget.",
      directTitle: "Direct Contact",
      directSub: "Instant response within 24 business hours.",
      copyEmail: "Copy Email Address",
      copied: "Copied to Clipboard",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      messageLabel: "Project Brief / Timeline",
      sendBtn: "Send Project Inquiry",
      sentSuccess: "Message Sent Successfully!",
    },
    youtubeCard: {
      subtitle: "YouTube Channel",
      badge: "Watch Work",
      description:
        "Check out project walkthroughs, demos, and creative content directly on my channel.",
      buttonText: "Explore",
    },
  },

  ar: {
    nav: {
      showreel: "العرض التجريبي",
      workflow: "طريقة العمل",
      work: "الأعمال",
      about: "عنّي",
      contact: "تواصل معي",
      hire: "وظّفني لمشروع",
    },
    hero: {
      status: "متاح للمشاريع الحرة والعقود الخاصة",
      titlePre: "صناعة",
      titleHighlight: "قصص حركية",
      titlePost: "وبصريات ثلاثية الأبعاد",
      bio: "مرحباً، أنا يوسف، مصمم موشن غرافيك أبلغ من العمر 25 عاماً مع أكثر من 3.5 سنوات من العمل الحر لتحويل الأفكار إلى تحريكات احترافية بمعدل 60 إطاراً في الثانية.",
      ctaShowreel: "مشاهدة العرض",
      ctaProjects: "استعراض المشاريع",
      stats: [
        { label: "سنوات العمل الحر", value: "+3.5" },
        { label: "مشروع منجز", value: "+45" },
        { label: "رضا العملاء", value: "100%" },
        { label: "معيار الإطارات", value: "60 FPS" },
      ],
    },
    workflow: {
      kicker: "مسار الإنتاج",
      title: "كيف يمر كل مشروع حتى التسليم",
      subtitle:
        "خطة عمل دقيقة من 3 مراحل للقضاء على التعديلات العشوائية والتسليم في الموعد المحدد.",
      steps: [
        {
          step: "01",
          title: "الفكرة والإطارات البصرية",
          desc: "تحويل متطلبات الهوية إلى لوحات إلهام وإطارات بصرية معتمدة قبل البدء بالتحريك.",
          milestone: "اعتماد التوجه الفني",
        },
        {
          step: "02",
          title: "التطوير والتحريك الحركي",
          desc: "التحريك ثلاثي الأبعاد، محاكاة الفيزياء، وضبط منحنيات السرعة (Bézier) على سينما 4D وأفتر إفكتس.",
          milestone: "المعاينة الأولى وضبط التوقيت",
        },
        {
          step: "03",
          title: "الهندسة الصوتية والتسليم النهائي",
          desc: "إضافة تصميم صوتي متزامن وتصحيح الألوان وتصدير الملفات بأعلى دقة وشاشات العرض.",
          milestone: "تصدير نهائي بدقة 4K و 60 إطاراً",
        },
      ],
    },
    projects: {
      kicker: "أعمال مختارة",
      title: "أحدث المشاريع المسلّمة",
      clientLabel: "العميل:",
      categories: {
        all: "الكل",
        brand3d: "ثلاثي الأبعاد والبراند",
        ui: "موشن واجهات (UI)",
        type: "تايبوغرافي حركي",
      },
      items: [
        {
          id: 1,
          category: "3D & Brand",
          title: "أورا باي — إطلاق بصري لعلامة مالية",
          duration: "0:24",
          client: "شركة ناشئة للتكنولوجيا المالية",
          software: ["Cinema 4D", "Octane", "After Effects"],
          description:
            "تجسيد ثلاثي الأبعاد لبطاقة بنكية بتأثيرات هولوغرافية وانسيابية دفع حركية مستقبلية.",
          accent: "from-purple-500/20 to-indigo-600/20",
        },
        {
          id: 2,
          category: "UI Motion",
          title: "نظام نيكسوس — تحريك تفاعلات واجهات المستخدم",
          duration: "0:32",
          client: "منصة برمجية سحابية (SaaS)",
          software: ["After Effects", "Lottie", "Figma"],
          description:
            "انتقالات بصرية مرنة وإيماءات سريعة تعتمد على محاكاة النوابض الفيزيائية مخصصة للهواتف.",
          accent: "from-cyan-500/20 to-blue-600/20",
        },
        {
          id: 3,
          category: "Typography",
          title: "فورتكس ساوند — حملة خطوط حركية إيقاعية",
          duration: "0:18",
          client: "علامة أجهزة صوتية",
          software: ["After Effects", "Premiere Pro"],
          description:
            "تايبوغرافي حركي عالي الطاقة متزامن بدقة مع إيقاع موسيقى إلكترونية 135 BPM.",
          accent: "from-amber-500/20 to-purple-600/20",
        },
        {
          id: 4,
          category: "3D & Brand",
          title: "سايبرنتك كرونو — إعلان ثلاثي الأبعاد لمنتج فاخر",
          duration: "0:45",
          client: "علامة ساعات فاخرة",
          software: ["Blender", "After Effects", "Substance"],
          description:
            "تفكيك ميكانيكي دقيق لمكونات الساعة مع إضاءة فيزيائية واقعية وانكسارات زجاجية.",
          accent: "from-violet-500/20 to-fuchsia-600/20",
        },
      ],
    },
    about: {
      kicker: "المسار والمؤهلات",
      title: "دقة في الأداء واحترافية في التسليم",
      bio: "أنا مصمم موشن غرافيك في الـ 25 من عمري بخبرة تزيد عن 3.5 سنوات في العمل المستقل. أجمع بين المنطق التحليلي لخلفيتي العلمية والتكوين التقني المتخصص في الوسائط المتعددة لإنتاج أعمال بصرية متناسقة تحقق أهداف العملاء.",
      education: [
        {
          degree: "تقني متخصص في الوسائط المتعددة (Multimédia)",
          institution: "OFPPT",
          desc: "تكوين شامل في الإنتاج السمعي البصري، التحريك ثلاثي الأبعاد، المونتاج، والتصميم الغرافيكي.",
        },
        {
          degree: "بكالوريا علمية (Sciences)",
          institution: "الثانوية التأهيلية",
          desc: "قاعدة تحليلية في الفيزياء والحركية والهندسة الفضائية تطبق على فيزياء الحركة وتناغم السرعات.",
        },
      ],
      toolkitTitle: "أدوات الإنتاج والبرامج",
    },
    contact: {
      kicker: "ابدأ تعاوناً جديداً",
      title: "دعنا نصنع عملاً حركياً استثنائياً",
      subtitle:
        "تحتاج إلى فيديو ترويجي لمنتجك، إعلان بصري، أو تحريك لواجهات المستخدم؟ تواصل معي لمناقشة التفاصيل والميزانية.",
      directTitle: "تواصل مباشر",
      directSub: "رد سريع خلال 24 ساعة عمل.",
      copyEmail: "نسخ البريد الإلكتروني",
      copied: "تم النسخ بنجاح",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "ملخص المشروع / الموعد المحدد",
      sendBtn: "إرسال تفاصيل المشروع",
      sentSuccess: "تم إرسال الرسالة بنجاح!",
    },
    youtubeCard: {
      subtitle: "قناة يوتيوب",
      badge: "شاهد أعمالي",
      description:
        "اكتشف شروحات المشاريع، العروض التوضيحية، والمحتوى الإبداعي مباشرة على قناتي.",
      buttonText: "استكشف",
    },
  },
};
