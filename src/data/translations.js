// EAEA Bilingual Dictionary & Knowledge Base Data Store

export const translations = {
  ar: {
    siteName: "هيئة الطاقة الذرية المصرية",
    siteSubName: "جمهورية مصر العربية — وزارة الكهرباء والطاقة المتجددة",
    siteTagline: "تأسست عام 1955 · أقدم مؤسسة نووية علمية في العالم العربي",
    headerHeroStatement: "هيئة الطاقة الذرية المصرية — البحوث والتطبيقات السلمية للتكنولوجيا النووية والإشعاعية لخدمة الطب والصناعة والبيئة والأمن الوطني.",
    
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "عن الهيئة",
      services: "الخدمات",
      capabilities: "المنشآت",
      research: "البحوث",
      news: "الأخبار",
      contact: "التواصل"
    },
    
    // Quick Actions & CTAs
    cta: {
      contactUs: "تواصل معنا",
      viewCapabilities: "استكشاف الإمكانيات والمنشآت",
      viewServices: "تصفح كافة الخدمات",
      viewAllNews: "أرشيف الأخبار",
      learnMore: "معرفة المزيد",
      downloadSpecs: "المواصفات الفنية",
      officialLink: "الرابط الرسمي",
      contactDepartment: "الاتصال بالقسم المختص"
    },

    // Homepage Moments
    home: {
      heroTitle: "المؤسسة القومية للبحوث والتطبيقات النووية السلمية",
      heroSubtitle: "تأمين 98% من النظائر الطبية للسوق المحلي، وقيادة الفحص الإشعاعي السيادي، وإدارة النفايات بأعلى معايير الأمان الدولية.",
      
      // Moment 2: Services Grid
      servicesTitle: "الخدمات الوطنية والإنتاجية",
      servicesSubtitle: "تؤدي الهيئة دوراً سيادياً وتجارياً حيوياً في تقديم خدمات إشعاعية ونووية لا بديل لها في المجتمع المصري.",
      
      // Moment 3: Capability Signal
      capabilityTitle: "مجمع المفاعل النووي التكثيفي الثاني (ETRR-2)",
      capabilityBadge: "قدرة 22 ميجاوات · أنشاص",
      capabilityDesc: "مفاعل أبحاث متعدد الأغراض يعمل منذ عام 1998 تحت ضمانات الوكالة الدولية للطاقة الذرية (IAEA). يضم 5 قنوات نيترونية وأكبر طاقة تشغيلية لإنتاج النظائر المشعة بالمنطقة.",
      capabilityFact1: "فيض نيتروني: 2.8 × 10¹⁴ ن/سم²·ث",
      capabilityFact2: "26 موقع تشعيع في العاكس",
      capabilityFact3: "إنتاج نظائر اليود-131 والتكنشيوم-99م",
      
      // Moment 4: Trust Grounding
      trustTitle: "الاعتمادات والشراكات الدولية",
      trustSubtitle: "تخضع كافة منشآت ومختبرات الهيئة لأعلى مستويات الرقابة والاعتماد المحلي والدولي.",
      trustFact1: "المختبر المركزي للمقايسات الإشعاعية حاصل على الاعتماد الدولي ISO/IEC 17025:2017 من المنظمة المصرية للاعتماد (EGAC 2024).",
      trustFact2: "مصنع إنتاج النظائر المشعة (RPF) حاصل على شهادة الجودة العالمية ISO 9001:2015 وترخيص وزارة الصحة المصرية.",
      trustFact3: "عضو في الشبكة العالمية لمختبرات معايرة جرعات الإشعاع (SSDL) التابعة للوكالة الدولية للطاقة الذرية ومنظمة الصحة العالمية.",

      // Moment 5: Research & Training Snapshot
      researchTitle: "البحث العلمي والتأهيل الكادري",
      researchDesc: "تغطي الهيئة 6 مجالات بحثية رئيسية وتدرب آلاف الطلاب والكوادر سنوياً بالتعاون مع الجامعات المصرية والوكالة العربية للطاقة الذرية.",
      journalName: "المجلة العربية للعلوم النووية وتطبيقاتها (AJNSA)",
      journalDesc: "مجلة علمية محكمة تنشرها الهيئة ومستضافة على بنك المعرفة المصري (EKB).",
      
      // Moment 6: News
      newsTitle: "نشاطات وأخبار الهيئة",
      
      // Moment 7: Contact CTA
      contactTitle: "التواصل المباشر مع إدارة الخدمات",
      contactDesc: "للاستفسارات والطلب التجاري والإشعاعي، يرجى التواصل المباشر مع المقر الرئيسي بمدينة نصر أو مجمع أنشاص."
    },

    // Services Page
    services: {
      title: "الخدمات الإشعاعية والنووية",
      subtitle: "دليل الخدمات المتاحة للمستشفيات، القطاع الصناعي، المنافذ الجمركية، والجهات البحثية.",
      items: [
        {
          id: "medical-isotopes",
          title: "إنتاج النظائر المشعة الطبية",
          shortDesc: "تغطية 90-98% من احتياجات المستشفيات المصرية من اليود-131 ومولدات التكنشيوم-99م.",
          forWho: "مراكز الطب النووي، المستشفيات الجامعية والحكومية والخاصة، الصيدليات النووية.",
          provides: "يود-131 (شفهي وحقن)، مولدات التكنشيوم-99م، يود-125، كروم-51، وإيريديوم-192 للعلاج الكثبي.",
          accreditation: "ISO 9001:2015 وترخيص وزارة الصحة والسكان.",
          facilityRef: "مصنع إنتاج النظائر المشعة (RPF) بأنشاص",
          facilityId: "rpf",
          mandate: "تغطية احتياجات القطاع الطبي القومي والتصدير للدول المجاورة."
        },
        {
          id: "industrial-irradiation",
          title: "التشعيع الصناعي والتعقيم",
          shortDesc: "تعقيم المستلزمات الطبية، حفظ الأغذية والمحاصيل، ومعالجة البوليمرات.",
          forWho: "مصانع المستلزمات الطبية، مصدرو الأغذية والمنتجات الزراعية، صناعة الكابلات والبوليمرات.",
          provides: "تعقيم جاما باستخدام وحدتي مجاما-1 بالقاهرة (750 ألف كوري) ووحدة الإسكندرية (400 ألف كوري).",
          accreditation: "مطابقة التقييم الإشعاعي الدولي للجرعات Sterilization ISO 11137.",
          facilityRef: "وحدات التشعيع الجامي بالقاهرة والإسكندرية",
          facilityId: "gamma-facilities",
          mandate: "رفع جودة المنتجات المصرية للتصدير وتأكيد السلامة الميكروبيولوجية."
        },
        {
          id: "customs-screening",
          title: "الكشف الإشعاعي بالجمرك والنافذة الواحدة",
          shortDesc: "الفحص الإشعاعي الإلزامي لكافة السلع والشحنات الواردة عبر الموانئ المصرية.",
          forWho: "المستوردون، شركات الشحن واللوجستيات، المخلصون الجمركيون.",
          provides: "شهادات الفحص الإشعاعي وتحديد مستويات النشاط الإشعاعي خلال 24 ساعة عبر منصة نافذة.",
          accreditation: "ISO/IEC 17025:2017 (EGAC 2024) — الأول في الشرق الأوسط وإفريقيا.",
          facilityRef: "المختبر المركزي للمقايسات الإشعاعية ومراكز الموانئ",
          facilityId: "specialized-labs",
          mandate: "قرار رئيس مجلس الوزراء رقم 1186 لسنة 2002 والتعليمات الجمركية 19/2024 و 26/2025."
        },
        {
          id: "waste-management",
          title: "إدارة النفايات المشعة والمصادر المغلقة",
          shortDesc: "الجهة الوطنية الحصرية المنوط بها معالجة وتخزين النفايات المشعة بمصر.",
          forWho: "المستشفيات، شركات البترول والغاز، المصانع المستخدمة للمصادر المشعة المغلقة.",
          provides: "نقل آمن، معالجة بالخلايا الساخنة، التجميع، والتخزين طويل الأمد بموقع أنشاص.",
          accreditation: "الالتزام التام بالتعليمات الوطنية للنفايات الطبية والصناعية معايير IAEA.",
          facilityRef: "مركز المعامل الساخنة وإدارة النفايات (HLWMC)",
          facilityId: "hlwmc",
          mandate: "المعالج الحصري القانوني للنفايات المشعة والمصادر المستهلكة في مصر."
        },
        {
          id: "dosimetry-calibration",
          title: "معايرة أجهزة قياس الإشعاع (SSDL)",
          shortDesc: "معايرة أجهزة الرصد الإشعاعي وكروت الجرعات الشخصية TLD طبقاً للمعايير الدولية.",
          forWho: "أخصائيو الوقاية الإشعاعية بالمستشفيات، مراكز الأشعة، الفنيون بالشركات الصناعية.",
          provides: "معايرة أجهزة المسح الإشعاعي، كروت TLD، وغرف التأين للعلاج الإشعاعي.",
          accreditation: "عضوية شبكة IAEA/WHO SSDL المعترف بها دولياً في الإسناد القياسي.",
          facilityRef: "المختبر الثانوي المعياري لقياس الجرعات الإشعاعية (SSDL)",
          facilityId: "specialized-labs",
          mandate: "توفير الإسناد القياسي القومي لجرعات الإشعاع في مصر."
        },
        {
          id: "analytical-services",
          title: "التحاليل والخدمات العلمية المتخصصة",
          shortDesc: "تحليل التنشيط النيتروني، هيدرولوجيا النظائر، حفظ الآثار، والاختبارات غير التدميرية.",
          forWho: "الباحثون، وزارة السياحة والآثار، وزارة الري، شركات البترول والغاز.",
          provides: "تحديد أعمار المياه والمخطوطات، اختبارات اللحامات بإيريديوم-192، وتحليل العناصر الدقيقة.",
          accreditation: "مركز تدريب إقليمي معتمد من الوكالة الدولية للطاقة الذرية للهيدرولوجيا.",
          facilityRef: "مختبر هيدرولوجيا النظائر ومختبرات العلوم الأساسية",
          facilityId: "specialized-labs",
          mandate: "دعم مشاريع الاستصلاح الزراعي، حفظ التراث القومي، وفحص خطوط الأنابيب."
        }
      ]
    },

    // Capabilities Page
    capabilities: {
      title: "الإمكانيات والمنشآت العلمية",
      subtitle: "البنية التحتية الفريدة والتجهيزات المتقدمة التي تديرها الهيئة في أنشاص ومدينة نصر والإسكندرية.",
      items: [
        {
          id: "reactors",
          name: "مفاعلات البحوث النووية",
          status: "تشغيل نشط (ETRR-2) / إيقاف ممتد (ETRR-1)",
          location: "مجمع أنشاص النووي",
          operatorCenter: "مركز البحوث النووية (NRC)",
          shortDesc: "يضم مجمع أنشاص المفاعل التكثيفي الثاني ETRR-2 بقدرة 22 ميجاوات، والمفاعل الأول ETRR-1 كأول مفاعل أبحاث بالوطن العربي.",
          specs: [
            { label: "قدرة مفاعل ETRR-2", value: "22 ميجاوات (Open Pool)" },
            { label: "سنة بدء التشغيل (ETRR-2)", value: "1997 (افتتاح رسمي 1998)" },
            { label: "الشركة المصممة", value: "INVAP (الأرجنتين)" },
            { label: "الفيض النيتروني", value: "2.8 × 10¹⁴ ن/سم²·ث" },
            { label: "القنوات النيترونية الأفقية", value: "5 قنوات أفقية" },
            { label: "مواقع التشعيع في العاكس", value: "26 موقعاً" },
            { label: "وضع مفاعل ETRR-1 التاريخي", value: "إيقاف ممتد (Extended Shutdown) مشروع IAEA EGY1029" }
          ],
          details: "يعتبر مفاعل ETRR-2 الركيزة الأساسية لإنتاج النظائر المشعة الطبية وإجراء أبحاث التنشيط النيتروني وفيزياء المفاعلات في مصر. يخضع المفاعل لضمانات الوكالة الدولية للطاقة الذرية الشاملة."
        },
        {
          id: "rpf",
          name: "مصنع إنتاج النظائر المشعة (RPF)",
          status: "تشغيل نشط",
          location: "مجمع أنشاص النووي",
          operatorCenter: "مركز البحوث النووية (NRC)",
          shortDesc: "منشأة حديثة بمساحة 1200 متر مربع مخصصة لإنتاج النظائر المشعة الطبية والصناعية بأعلى معايير الجودة.",
          specs: [
            { label: "مساحة المنشأة", value: "1,200 م²" },
            { label: "تاريخ الافتتاح", value: "أغسطس 2015" },
            { label: "شهادات الجودة", value: "ISO 9001:2015" },
            { label: "النظائر المنتجة", value: "I-131, Tc-99m, I-125, Cr-51, Ir-192" },
            { label: "نظام السلامة", value: "3 مناطق أمان مع خلايا ساخنة مصفحة" }
          ],
          details: "يغطي المصنع الغالبية العظمى من احتياجات المستشفيات المصرية من اليود المشعي لعلاج وتأخيص أورام الغدة الدرقية ومولدات التكنشيوم للتصوير الطبي."
        },
        {
          id: "cyclotron",
          name: "مجمع السيكلوترون الإلكتـروني (MGC-20)",
          status: "تشغيل نشط",
          location: "مجمع أنشاص النووي",
          operatorCenter: "مركز البحوث النووية (NRC)",
          shortDesc: "معجل جسيمات دوراني من طراز MGC-20 مخصص لإنتاج النظائر قصيرة العمر والتطبيقات الطبية والفيزيائية.",
          specs: [
            { label: "طراز الجهاز", value: "MGC-20 (NIIEFA - روسيا)" },
            { label: "أول شعاع بروتوني", value: "19 فبراير 2000" },
            { label: "الجسيمات المعجلة", value: "بروتونات، ديوترونات، هليوم-3، جسيمات ألفا" },
            { label: "التطبيقات الرئيسية", value: "نظائر الفحوص المقطعية (PET) والأبحاث" }
          ],
          details: "أنشئ بمساعدة الفنية من الوكالة الدولية للطاقة الذرية لإنتاج النظائر الطبية عالية النقاء وتدريب الكوادر في مجال معجلات الجسيمات."
        },
        {
          id: "gamma-facilities",
          name: "وحدات التشعيع الجامي القومية",
          status: "تشغيل نشط",
          location: "مدينة نصر (القاهرة) / أم زغيو (الإسكندرية)",
          operatorCenter: "المركز القومي لبحوث وتكنولوجيا الإشعاع (NCRRT)",
          shortDesc: "وحدتان صناعيتان ضخمتان تعتمدان على مصادر الكوبالت-60 لتعقيم المنتجات وتطوير البوليمرات.",
          specs: [
            { label: "وحدة ميجاما-1 (القاهرة)", value: "نشاط 750,000 كوري Co-60" },
            { label: "وحدة الإسكندرية", value: "نشاط 400,000 كوري Co-60" },
            { label: "معيار التعقيم الدولي", value: "ISO 11137" },
            { label: "المنتجات المعالجة", value: "مستلزمات طبية، أغذية، كابلات شمسية" }
          ],
          details: "تخدم هذه الوحدات قطاع التصدير المصري لتلبية الشروط الصحية والميكروبيولوجية للأسواق الأوروبية والأمريكية."
        },
        {
          id: "hlwmc",
          name: "مركز المعامل الساخنة وإدارة النفايات (HLWMC)",
          status: "تشغيل نشط",
          location: "مجمع أنشاص النووي",
          operatorCenter: "مركز المعامل الساخنة (HLWMC)",
          shortDesc: "البنية التحتية السيادية لجمع ومعالجة وتخزين النفايات المشعة والمصادر المستهلكة من كافة أنحاء الجمهورية.",
          specs: [
            { label: "الخلايا الساخنة", value: "مجموعة خلايا مصفحة بأذرع روبوتية" },
            { label: "معالجة السوائل المشعة", value: "محطة تبخير ومعالجة كيميائية" },
            { label: "تخزين المصادر المغلقة (DSRS)", value: "تقنيات BOSS و GCD بدعم IAEA" }
          ],
          details: "المركز هو الجهة القانونية الوحيدة بمصر المخولة باستلام وإدارة النفايات المشعة والمصادر المغلقة المنتهية الصلاحية من القطاع الطبي والبترولي."
        },
        {
          id: "specialized-labs",
          name: "المختبرات المركزية المعتمدة",
          status: "تشغيل نشط",
          location: "مدينة نصر وأن شاص والموانئ",
          operatorCenter: "مراكز الهيئة المتخصصة",
          shortDesc: "مجموعة من المختبرات المرجعية المعتمدة دولياً في مجالات المقايسات الجمركية والمعايرة وهيدرولوجيا النظائر.",
          specs: [
            { label: "المختبر المركزي للمقايسات", value: "ISO/IEC 17025:2017 (EGAC 2024)" },
            { label: "مختبر المعايرة (SSDL)", value: "عضو شبكة IAEA/WHO العالمية" },
            { label: "مختبر هيدرولوجيا النظائر", value: "مركز تدريب إقليمي معتمد 1995" }
          ],
          details: "تجري هذه المختبرات أكثر من 50,000 تحليل إشعاعي سنوياً للسلع الاستيرادية والشركات والمؤسسات البحثية."
        }
      ]
    },

    // About Section & Ecosystem Disambiguation
    about: {
      title: "عن هيئة الطاقة الذرية المصرية",
      subtitle: "تاريخ عريق من العلم والتميز المؤسسي يمتد لـ 70 عاماً في خدمة التنمية المستدامة بمصر.",
      mandateTitle: "الرسالة والدور المؤسسي",
      mandateBody: "هيئة الطاقة الذرية المصرية هي هيئة حكومية علمية تابعة لوزارة الكهرباء والطاقة المتجددة. تختص بالبحث والتطوير وتنسيق الاستخدامات السلمية للطاقة الذرية ونقل التكنولوجيا النووية إلى مختلف قطاعات الدولة.",
      
      // Mandatory Ecosystem Disambiguation Paragraph (Section 12 of Strategy)
      ecosystemTitle: "منظومة القطاع النووي في جمهورية مصر العربية",
      ecosystemBody: "لتوضيح الاختصاصات المؤسسية وتجنب الخلط لدى المتعاملين والإعلام:",
      ecosystemEAEA: "هيئة الطاقة الذرية (EAEA): هي المشغل والباحث العلمي الرئيسي الذي يدير المفاعلات ومصانع النظائر والمختبرات وإدارة النفايات المشعة.",
      ecosystemENRRA: "هيئة الرقابة النووية والإشعاعية (ENRRA): هي الجهة المستقلة المنظمة والمفتشة على الأنشطة النووية (تأسست بموجب القانون رقم 7 لسنة 2010 وهي منفصلة تماماً عن هيئة الطاقة الذرية).",
      ecosystemNPPA: "هيئة المحطات النووية لتوليد الكهرباء (NPPA): هي الجهة المسؤولة عن بناء وتشغيل محطة الضبعة النووية لتوليد الطاقة.",
      ecosystemNMA: "هيئة المواد النووية (NMA): هي الجهة المسؤولة عن استكشاف ومعالجة الخامات النووية والشاطئية.",

      historyTitle: "المحطات التاريخية الخمس",
      historyEras: [
        { year: "1955", era: "مرحلة التأسيس", desc: "إنشاء لجنة الطاقة الذرية بقرار من الرئيس جمال عبد الناصر، لتكون مصر أول دولة عربية تؤسس كياناً نووياً رسمياً." },
        { year: "1961", era: "مرحلة البنية التحتية", desc: "تشغيل مفاعل الأبحاث الأول ETRR-1 بموقع أنشاص وتأسيس المراكز البحثية الأربعة." },
        { year: "1998", era: "مرحلة التحديث النووي", desc: "افتتاح مفاعل الأبحاث التكثيفي الثاني ETRR-2 بقدرة 22 ميجاوات بالتعاون مع الأرجنتين وسيكلوترون أنشاص." },
        { year: "2015", era: "مرحلة الإنتاج الذاتي", desc: "افتتاح مصنع إنتاج النظائر المشعة (RPF) وتحقيق الاكتفاء الذاتي للمستشفيات المصرية من اليود المشع." },
        { year: "2024", era: "مرحلة الاعتماد الدولي", desc: "حصول المختبر المركزي للمقايسات الإشعاعية على ISO/IEC 17025:2017 كأول مختبر جمركي نووي بالشرق الأوسط وإفريقيا." }
      ],

      leadershipTitle: "قيادة الهيئة",
      leadershipItems: [
        { name: "أ.د. عمرو الحاج علي", role: "رئيس هيئة الطاقة الذرية المصرية", note: "أستاذ العلوم النووية والقيادة المؤسسية للهيئة." },
        { name: "أ.د. نادر عبد الحليم", role: "نائب رئيس الهيئة لشؤون المشروعات والبحوث", note: "إشراف على المشاريع البحثية والتطوير." },
        { name: "أ.د. حسن إبراهيم", role: "مدير المركز القومي لبحوث وتكنولوجيا الإشعاع", note: "إشراف على تطبيقات التشعيع والصناعة." }
      ],

      centersTitle: "المراكز والمواقع التابعة",
      centersDesc: "تتوزع أنشطة الهيئة على أربعة مراكز علمية رئيسية وموقعين رئيسيين بأنشاص ومدينة نصر، بالإضافة إلى المقار الفرعية بميناء الإسكندرية والموانئ البحرية والجوية.",
      centersList: [
        { code: "NRC", name: "مركز البحوث النووية (أنشاص)", desc: "يدير مفاعلات الأبحاث والسيكلوترون ومصنع النظائر المشعة ومعامل العلوم الأساسية." },
        { code: "NCRRT", name: "المركز القومي لبحوث وتكنولوجيا الإشعاع (مدينة نصر)", desc: "يدير وحدات التشعيع الجامي القومية وأبحاث البوليمرات والبيولوجيا الإشعاعية." },
        { code: "HLWMC", name: "مركز المعامل الساخنة وإدارة النفايات (أنشاص)", desc: "المعالج الحصري للنفايات المشعة والمصادر المغلقة ومحطات المعالجة الكيميائية." },
        { code: "NCNSRC", name: "المركز الوطني للأمن النووي والإشعاعي (مدينة نصر)", desc: "مركز بحثي واستشاري متخصص في الأمن والأمان النووي وتدريب كوادر التفتيش (وليس جهة رقابية)." }
      ]
    },

    // Research & Training
    researchPage: {
      title: "البحوث العلمية والبرامج التدريبية",
      subtitle: "المجالات البحثية والمجلة العلمية المعتمدة والبرامج التدريبية المتاحة للطلاب والكوادر.",
      domainsTitle: "المجالات البحثية الستة",
      domains: [
        { title: "الفيزياء النووية وهندسة المفاعلات", desc: "أبحاث الأمان النووي، حسابات الفيض النيتروني، وفيزياء البلازما والاندماج." },
        { title: "كيمياء وتكنولوجيا المواد الإشعاعية", desc: "تطوير البوليمرات المقاومة للإشعاع، تقنيات الأغشية وتطبيقات تحلية المياه." },
        { title: "التقنيات الحيوية والطبية النانوية", desc: "تطوير ناقلات الأدوية النانوية الموجهة والعلاج بالنظائر المشعة." },
        { title: "البيولوجيا الإشعاعية والزراعة النووية", desc: "استنباط طفرات زراعية قادرة على تحمل الملوحة والجفاف ومكافحة الآفات." },
        { title: "العلوم البيئية وهيدرولوجيا النظائر", desc: "تتبع الخزانات الجوفية وتحديد أعمار المياه ومصادر التلوث." },
        { title: "معالجة وتخزين النفايات المشعة", desc: "تطوير مصفوفات التثبيت السيراميكية والزجاجية للنفايات عالية النشاط." }
      ],
      journalTitle: "المجلة العربية للعلوم النووية وتطبيقاتها (AJNSA)",
      journalText: "تعد مجلة AJNSA الدورية العلمية الأولى بالمنطقة العربية في العلوم النووية (ISSN: 1110-0451). تنشرها الهيئة دورياً وتتاح أبحاثها عبر بنك المعرفة المصري (EKB).",
      journalLinkText: "الوصول للمجلة على بنك المعرفة المصري (EKB)",
      trainingTitle: "البرامج التدريبية الصيفية والتخصصية",
      trainingText: "تستقبل الهيئة سنوياً آلاف الطلاب من مختلف الجامعات المصرية (مثل جامعة الإسكندرية، عين شمس، MTI) لتقديم تدريب عملي بمختبرات أنشاص ومدينة نصر، إلى جانب الدورات الإقليمية بالتعاون مع الوكالة العربية للطاقة الذرية."
    },

    // News Page
    newsPage: {
      title: "الأخبار والفعاليات الرسمية",
      subtitle: "السجل الفعلي المؤرخ لنشاطات الهيئة والاعتمادات والمشاركات الدولية.",
      items: [
        {
          date: "24 مارس 2024",
          category: "اعتماد دولي",
          title: "اعتماد المختبر المركزي للمقايسات الإشعاعية بشهادة ISO/IEC 17025:2017",
          desc: "حصل المختبر المركزي التابع للهيئة على شهادة الاعتماد الدولي من المنظمة المصرية للاعتماد (EGAC)، ليكون أول مختبر مرجعي لفحص واردات المنافذ الجمركية بالشرق الأوسط وإفريقيا."
        },
        {
          date: "12 نوفمبر 2023",
          category: "بروتوكولات تعاون",
          title: "توقيع بروتوكول تدريب طلاب كلية الهندسة بجامعة الإسكندرية",
          desc: "وقع أ.د. عمرو الحاج رئيس الهيئة بروتوكول تعاون مشترك لاستقبال طلاب الهندسة النووية والكهربائية في الدورة التدريبية الصيفية بمفاعل ETRR-2 ومصنع RPF."
        },
        {
          date: "15 أغسطس 2023",
          category: "الإنتاج الطبي",
          title: "تأكيد تغطية 95% من احتياجات المستشفيات الحكومية من يود-131",
          desc: "أكد تقرير تشغيلي لمصنع إنتاج النظائر المشعة بأنشاص تحقيق أعلى معدل انتظام في توريد مولدات التكنشيوم واليود المشع للمستشفيات الجامعية ومراكز الأورام."
        },
        {
          date: "10 فبراير 2023",
          category: "تعاون دولي",
          title: "زيارة وفد الوكالة الدولية للطاقة الذرية لمتابعة مشروع EGY1029",
          desc: "استقبلت الهيئة خبراء قسم مفاعلات البحوث بالوكالة الدولية للطاقة الذرية (IAEA) لمراجعة خطط الإيقاف الممتد والتحديث الفني بموقع أنشاص."
        }
      ]
    },

    // Contact Page
    contactPage: {
      title: "التواصل والخدمات",
      subtitle: "المقارات الرئيسية وعناوين الاتصال المباشرة لخدمات المستشفيات والمنافذ الجمركية.",
      hqTitle: "المقر الرئيسي (القاهرة)",
      hqAddress: "3 شارع أحمد الزمر، الحي الثامن، مدينة نصر، القاهرة، جمهورية مصر العربية.",
      anshasTitle: "مجمع أنشاص النووي (الشرقية)",
      anshasAddress: "أنشاص الرمل، محافظة الشرقية — يضم مفاعلات البحوث ومصنع النظائر المشعة ومركز النفايات.",
      alexTitle: "فرع الإسكندرية ووحدة التشعيع",
      alexAddress: "منطقة أم زغيو، الإسكندرية — خدمة التعقيم الجامي للمنافذ البحرية.",
      phoneLabel: "الهاتف الرئيسي:",
      phoneVal: "+20 2 22748824 / +20 2 22748825",
      emailLabel: "البريد الإلكتروني الرسمي:",
      emailVal: "info@eaea.org.eg / contact@eaea.sci.eg",
      domainNote: "النطاقات الرسمية المعتمدة للهيئة هي eaea.org.eg و eaea.sci.eg فقط."
    },

    footer: {
      rights: "جميع الحقوق محفوظة © 2026 هيئة الطاقة الذرية المصرية.",
      ministry: "جمهورية مصر العربية — وزارة الكهرباء والطاقة المتجددة",
      disclaimer: "موقع رسمي معلوماتي لخدمات وتطبيقات هيئة الطاقة الذرية المصرية."
    }
  },

  en: {
    siteName: "Egyptian Atomic Energy Authority",
    siteSubName: "Arab Republic of Egypt — Ministry of Electricity and Renewable Energy",
    siteTagline: "Established 1955 · The Oldest Nuclear Scientific Institution in the Arab World",
    headerHeroStatement: "Egyptian Atomic Energy Authority (EAEA) — Peaceful R&D in nuclear science and radiation technology serving health, industry, environment, and national security.",
    
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      capabilities: "Facilities",
      research: "Research",
      news: "News",
      contact: "Contact"
    },
    
    // Quick Actions & CTAs
    cta: {
      contactUs: "Contact Us",
      viewCapabilities: "Explore Capabilities",
      viewServices: "View All Services",
      viewAllNews: "News Archive",
      learnMore: "Learn More",
      downloadSpecs: "Technical Specs",
      officialLink: "Official Gateway",
      contactDepartment: "Contact Department"
    },

    // Homepage Moments
    home: {
      heroTitle: "The National Authority for Peaceful Nuclear Research & Applications",
      heroSubtitle: "Securing 98% of Egypt's medical isotopes, leading sovereign customs radiation screening, and managing nuclear waste under full IAEA safeguards.",
      
      // Moment 2: Services Grid
      servicesTitle: "Sovereign & Commercial Services",
      servicesSubtitle: "EAEA delivers vital national outputs across healthcare, international trade clearance, and industrial sterilization.",
      
      // Moment 3: Capability Signal
      capabilityTitle: "Second Egyptian Research Reactor (ETRR-2)",
      capabilityBadge: "22 MW Open Pool · Anshas",
      capabilityDesc: "A multi-purpose 22 MW open pool research reactor commissioned in 1998 under full IAEA safeguards. Features 5 horizontal neutron beam channels and 26 irradiation positions.",
      capabilityFact1: "Thermal Flux: 2.8 × 10¹⁴ n/cm²·s",
      capabilityFact2: "26 Reflector Irradiation Sites",
      capabilityFact3: "Primary I-131 & Tc-99m Producer",
      
      // Moment 4: Trust Grounding
      trustTitle: "International Accreditations & Partnerships",
      trustSubtitle: "EAEA facilities operate under rigorous international standards, peer review, and safeguards.",
      trustFact1: "Central Radiation Measurements Lab accredited to ISO/IEC 17025:2017 by EGAC (March 2024).",
      trustFact2: "Radioisotope Production Facility (RPF) certified to ISO 9001:2015 & licensed by Ministry of Health.",
      trustFact3: "Member of the IAEA/WHO Secondary Standard Dosimetry Laboratory (SSDL) Network.",

      // Moment 5: Research & Training Snapshot
      researchTitle: "Scientific R&D & Capacity Building",
      researchDesc: "Encompassing 6 active research domains and training thousands of university students and port inspectors annually.",
      journalName: "Arab Journal of Nuclear Sciences and Applications (AJNSA)",
      journalDesc: "Peer-reviewed international journal published by EAEA and hosted on the Egyptian Knowledge Bank (EKB).",
      
      // Moment 6: News
      newsTitle: "Institutional News & Activity",
      
      // Moment 7: Contact CTA
      contactTitle: "Direct Contact with Service Departments",
      contactDesc: "For commercial inquiries, radioisotope procurement, or screening certificates, contact our Cairo HQ or Anshas Complex directly."
    },

    // Services Page
    services: {
      title: "Radiological & Nuclear Services",
      subtitle: "Verified service catalog for healthcare providers, industrial operators, trade logistics, and research institutions.",
      items: [
        {
          id: "medical-isotopes",
          title: "Medical Radioisotope Production",
          shortDesc: "Supplying 90-98% of Egyptian hospital demand for Iodine-131 and Tc-99m generators.",
          forWho: "Nuclear medicine centers, university & public hospitals, specialized oncology pharmacies.",
          provides: "Oral & injectable I-131, Tc-99m generators, I-125 seeds, Cr-51, and Ir-192 brachytherapy sources.",
          accreditation: "ISO 9001:2015 certified & Ministry of Health licensed.",
          facilityRef: "Radioisotope Production Facility (RPF), Anshas",
          facilityId: "rpf",
          mandate: "Ensuring national healthcare self-sufficiency and regional medical export."
        },
        {
          id: "industrial-irradiation",
          title: "Industrial Irradiation & Sterilization",
          shortDesc: "Gamma sterilization of single-use medical devices, food preservation, and polymer cross-linking.",
          forWho: "Medical device manufacturers, agricultural exporters, cable & polymer industries.",
          provides: "Industrial gamma irradiation via Mega Gamma-1 (750k Ci, Cairo) and Alexandria facility (400k Ci).",
          accreditation: "International ISO 11137 sterilization compliance.",
          facilityRef: "National Gamma Irradiation Facilities (Cairo & Alexandria)",
          facilityId: "gamma-facilities",
          mandate: "Enhancing Egyptian export compliance to EU and US microbiological standards."
        },
        {
          id: "customs-screening",
          title: "Customs Radiation Screening & Nafeza",
          shortDesc: "Mandatory radiological screening for all imported goods at Egyptian ports.",
          forWho: "Importers, logistics operators, shipping agents, customs brokers.",
          provides: "24-hour radiation clearance certificates integrated with the Nafeza trade platform.",
          accreditation: "ISO/IEC 17025:2017 EGAC Accredited (March 2024) — First in Middle East & Africa.",
          facilityRef: "Central Radiation Measurements Laboratory & Port Units",
          facilityId: "specialized-labs",
          mandate: "Prime Ministerial Decree 1186/2002 & Customs Circulars 19/2024 and 26/2025."
        },
        {
          id: "waste-management",
          title: "Radioactive Waste Management",
          shortDesc: "Exclusive national mandate for processing and safe storage of radioactive waste.",
          forWho: "Hospitals, oil & gas operators, industrial sealed source users.",
          provides: "Conditioning, hot cell treatment, transport, and long-term engineered storage at Anshas.",
          accreditation: "Full compliance with IAEA safety standards and national healthcare directives.",
          facilityRef: "Hot Laboratories & Waste Management Center (HLWMC)",
          facilityId: "hlwmc",
          mandate: "Sole legal entity authorized for radioactive waste management in Egypt."
        },
        {
          id: "dosimetry-calibration",
          title: "Dosimetry Calibration Services (SSDL)",
          shortDesc: "Calibration of radiation survey meters and personal TLD badges.",
          forWho: "Hospital radiation safety officers, radiology departments, industrial technicians.",
          provides: "SI-traceable calibration of survey meters, TLD cards, and therapy ionization chambers.",
          accreditation: "IAEA/WHO SSDL Network Member providing national measurement traceability.",
          facilityRef: "Secondary Standard Dosimetry Laboratory (SSDL), Nasr City",
          facilityId: "specialized-labs",
          mandate: "National reference facility for radiation protection measurement standards."
        },
        {
          id: "analytical-services",
          title: "Scientific Analytical Services",
          shortDesc: "Neutron activation analysis, isotope hydrology, heritage preservation, and NDT weld testing.",
          forWho: "Academic researchers, Ministry of Antiquities, Ministry of Irrigation, oil & gas engineers.",
          provides: "Groundwater age dating, artifact gamma disinfestation, Ir-192 non-destructive weld inspection.",
          accreditation: "IAEA regional training center accreditation for isotope hydrology.",
          facilityRef: "Isotope Hydrology Lab & Special Analytical Units",
          facilityId: "specialized-labs",
          mandate: "Supporting national land reclamation, heritage protection, and pipeline integrity."
        }
      ]
    },

    // Capabilities Page
    capabilities: {
      title: "Scientific Capabilities & Infrastructure",
      subtitle: "State-of-the-art facilities operated across Anshas, Nasr City, and Alexandria sites.",
      items: [
        {
          id: "reactors",
          name: "Nuclear Research Reactors",
          status: "Operational (ETRR-2) / Extended Shutdown (ETRR-1)",
          location: "Anshas Nuclear Complex",
          operatorCenter: "Nuclear Research Center (NRC)",
          shortDesc: "Housing ETRR-2 (22 MW open pool reactor) and the historic ETRR-1 (first research reactor in the Arab world).",
          specs: [
            { label: "ETRR-2 Power Rating", value: "22 MW (Open Pool)" },
            { label: "Commissioning Year (ETRR-2)", value: "1997 (Inaugurated 1998)" },
            { label: "Supplier / Designer", value: "INVAP (Argentina)" },
            { label: "Thermal Neutron Flux", value: "2.8 × 10¹⁴ n/cm²·s" },
            { label: "Horizontal Beam Channels", value: "5 channels" },
            { label: "Reflector Irradiation Sites", value: "26 positions" },
            { label: "Historic ETRR-1 Status", value: "Extended Shutdown (IAEA Project EGY1029)" }
          ],
          details: "ETRR-2 is the backbone of Egypt's radioisotope production and neutron scattering R&D. Operates under full IAEA safeguards."
        },
        {
          id: "rpf",
          name: "Radioisotope Production Facility (RPF)",
          status: "Operational",
          location: "Anshas Nuclear Complex",
          operatorCenter: "Nuclear Research Center (NRC)",
          shortDesc: "A 1,200 m² modern cleanroom facility housing shielded hot cells for radioisotope processing.",
          specs: [
            { label: "Facility Area", value: "1,200 m²" },
            { label: "Inauguration Date", value: "August 2015" },
            { label: "Quality Certification", value: "ISO 9001:2015" },
            { label: "Isotopes Processed", value: "I-131, Tc-99m, I-125, Cr-51, Ir-192" },
            { label: "Safety System", value: "3-zone containment with telemanipulators" }
          ],
          details: "Supplies the vast majority of Egyptian nuclear medicine centers with diagnostic and therapeutic radioisotopes."
        },
        {
          id: "cyclotron",
          name: "Cyclotron Complex (MGC-20)",
          status: "Operational",
          location: "Anshas Nuclear Complex",
          operatorCenter: "Nuclear Research Center (NRC)",
          shortDesc: "MGC-20 compact cyclotron accelerator for short-lived medical isotopes and ion beam R&D.",
          specs: [
            { label: "Machine Model", value: "MGC-20 (NIIEFA - Russia)" },
            { label: "First Proton Beam", value: "19 February 2000" },
            { label: "Accelerated Particles", value: "Protons, Deuterons, He-3, Alpha" },
            { label: "Primary Application", value: "PET isotopes & nuclear physics R&D" }
          ],
          details: "Established with IAEA technical assistance to support nuclear medicine physics and beamline research."
        },
        {
          id: "gamma-facilities",
          name: "National Gamma Irradiation Facilities",
          status: "Operational",
          location: "Nasr City (Cairo) & Alexandria",
          operatorCenter: "National Center for Radiation Research and Technology (NCRRT)",
          shortDesc: "Industrial Cobalt-60 irradiators for medical device sterilization and polymer cross-linking.",
          specs: [
            { label: "Mega Gamma-1 (Cairo)", value: "750,000 Ci Co-60" },
            { label: "Alexandria Irradiator", value: "400,000 Ci Co-60" },
            { label: "Sterilization Standard", value: "ISO 11137" },
            { label: "Applications", value: "Medical products, spices, industrial polymers" }
          ],
          details: "Serves Egyptian export industries ensuring international sanitary and phytosanitary compliance."
        },
        {
          id: "hlwmc",
          name: "Hot Laboratories & Waste Management (HLWMC)",
          status: "Operational",
          location: "Anshas Nuclear Complex",
          operatorCenter: "Hot Laboratories & Waste Management Center (HLWMC)",
          shortDesc: "Sovereign facility for radioactive waste treatment, liquid effluent processing, and DSRS conditioning.",
          specs: [
            { label: "Hot Cell Array", value: "Heavy shielded cells with robotic arms" },
            { label: "Liquid Waste Unit", value: "Evaporation & chemical precipitation" },
            { label: "Disused Sources (DSRS)", value: "BOSS & GCD technologies with IAEA" }
          ],
          details: "Exclusive legal mandate for safe conditioning and long-term storage of all national radioactive waste."
        },
        {
          id: "specialized-labs",
          name: "Accredited Reference Laboratories",
          status: "Operational",
          location: "Nasr City, Anshas & Port Sites",
          operatorCenter: "EAEA Specialized Centers",
          shortDesc: "Internationally recognized calibration, screening, and isotope hydrology reference laboratories.",
          specs: [
            { label: "Customs Screening Lab", value: "ISO/IEC 17025:2017 (EGAC 2024)" },
            { label: "Dosimetry Lab (SSDL)", value: "IAEA/WHO Global Network Member" },
            { label: "Isotope Hydrology Lab", value: "IAEA Regional Training Center" }
          ],
          details: "Performing over 50,000 radiation assays annually for import verification and environmental monitoring."
        }
      ]
    },

    // About Section & Ecosystem Disambiguation
    about: {
      title: "About the Egyptian Atomic Energy Authority",
      subtitle: "A 70-year legacy of scientific R&D, institutional governance, and national development.",
      mandateTitle: "Mission & Institutional Mandate",
      mandateBody: "The Egyptian Atomic Energy Authority (EAEA) is a sovereign scientific authority operating under the Ministry of Electricity and Renewable Energy. It is authorized to conduct R&D, coordinate peaceful nuclear applications, and transfer technology to health, agriculture, and industrial sectors.",
      
      // Mandatory Ecosystem Disambiguation Paragraph (Section 12 of Strategy)
      ecosystemTitle: "The Egyptian Nuclear Sector Ecosystem",
      ecosystemBody: "To clarify organizational roles for international partners, trade operators, and media:",
      ecosystemEAEA: "EAEA (Egyptian Atomic Energy Authority): The operator & scientific researcher managing reactors, isotope production, laboratories, and radioactive waste.",
      ecosystemENRRA: "ENRRA (Egyptian Nuclear and Radiological Regulatory Authority): The independent regulator & inspector established by Law 7/2010 (entirely separate from EAEA).",
      ecosystemNPPA: "NPPA (Nuclear Power Plants Authority): The state operator managing commercial nuclear power generation at El-Dabaa.",
      ecosystemNMA: "NMA (Nuclear Materials Authority): The authority responsible for nuclear ore exploration and mineral processing.",

      historyTitle: "Five Key Historical Eras",
      historyEras: [
        { year: "1955", era: "Founding Era", desc: "Atomic Energy Committee established by President Gamal Abdel Nasser; Egypt becomes the first Arab nation with a nuclear authority." },
        { year: "1961", era: "Infrastructure Era", desc: "Commissioning of ETRR-1 research reactor at Anshas and founding of the four specialized R&D centers." },
        { year: "1998", era: "Modernization Era", desc: "Inauguration of ETRR-2 (22 MW) built with INVAP (Argentina) and installation of the Anshas Cyclotron." },
        { year: "2015", era: "Production Era", desc: "Radioisotope Production Facility (RPF) inaugurated, achieving medical I-131 self-sufficiency." },
        { year: "2024", era: "International Accreditation Era", desc: "Central Customs Radiation Lab achieves ISO/IEC 17025:2017 EGAC accreditation — first in Middle East & Africa." }
      ],

      leadershipTitle: "Institutional Leadership",
      leadershipItems: [
        { name: "Prof. Dr. Amr El-Hag Ali", role: "Chairman of EAEA", note: "Professor of Nuclear Physics and Head of Executive Leadership." },
        { name: "Prof. Dr. Nader Abdel-Halim", role: "Vice Chairman for Research Projects", note: "Overseeing R&D projects and facility development." },
        { name: "Prof. Dr. Hassan Ibrahim", role: "Director of NCRRT", note: "Leading radiation technology & industrial applications." }
      ],

      centersTitle: "Centers & Geographic Footprint",
      centersDesc: "Operating across four specialized centers at Anshas Complex and Nasr City Campus, alongside regional facilities in Alexandria and port screening posts.",
      centersList: [
        { code: "NRC", name: "Nuclear Research Center (Anshas)", desc: "Operates research reactors, cyclotron, RPF, and basic science laboratories." },
        { code: "NCRRT", name: "National Center for Radiation Research & Technology (Nasr City)", desc: "Operates national gamma irradiators, polymer R&D, and radiation biology." },
        { code: "HLWMC", name: "Hot Laboratories & Waste Management Center (Anshas)", desc: "Exclusive national operator for radioactive waste conditioning and storage." },
        { code: "NCNSRC", name: "National Center for Nuclear Safety & Radiation Control (Nasr City)", desc: "Research and advisory body in nuclear safety & inspection training (non-regulatory)." }
      ]
    },

    // Research & Training
    researchPage: {
      title: "Scientific R&D & Academic Training",
      subtitle: "Research domains, peer-reviewed journal publishing, and university training protocols.",
      domainsTitle: "Six Core Research Domains",
      domains: [
        { title: "Nuclear Physics & Reactor Engineering", desc: "Nuclear safety analysis, neutron flux computation, plasma physics, and fusion energy R&D." },
        { title: "Radiation Polymer Chemistry & Materials", desc: "Development of radiation-resistant polymers, membrane technology, and water desalination." },
        { title: "Biomedical Nanotechnology", desc: "Targeted nano-drug delivery systems and radiopharmaceutical development." },
        { title: "Radiation Biology & Mutation Breeding", desc: "Agricultural crop mutation breeding for salt/drought resistance and sterile insect technique." },
        { title: "Environmental Isotope Hydrology", desc: "Aquifer recharge tracing, groundwater dating, and environmental contaminant tracking." },
        { title: "Radioactive Waste Immobilization", desc: "Glass and ceramic matrix immobilization for high-level radioactive waste safety." }
      ],
      journalTitle: "Arab Journal of Nuclear Sciences and Applications (AJNSA)",
      journalText: "AJNSA (ISSN: 1110-0451) is the premier peer-reviewed nuclear journal in the Arab region, published by EAEA and hosted on the Egyptian Knowledge Bank (EKB).",
      journalLinkText: "Access AJNSA Journal on Egyptian Knowledge Bank (EKB)",
      trainingTitle: "Summer & Professional Training Programs",
      trainingText: "EAEA hosts thousands of Egyptian university students annually (Alexandria University, Ain Shams, MTI) for hands-on training at Anshas and Nasr City laboratories, alongside regional IAEA/AAEA workshops."
    },

    // News Page
    newsPage: {
      title: "Official News & Event Log",
      subtitle: "Factual, dated record of institutional achievements, accreditations, and international visits.",
      items: [
        {
          date: "March 24, 2024",
          category: "Accreditation",
          title: "Central Radiation Measurements Lab Achieves ISO/IEC 17025:2017 Accreditation",
          desc: "EAEA Central Lab granted EGAC international accreditation, becoming the first reference customs radiation inspection facility in the Middle East & Africa."
        },
        {
          date: "November 12, 2023",
          category: "Partnership",
          title: "Cooperation Protocol Signed with Alexandria University Engineering Faculty",
          desc: "Chairman Prof. Dr. Amr El-Hag signs protocol for nuclear engineering student summer training at ETRR-2 reactor and RPF facility."
        },
        {
          date: "August 15, 2023",
          category: "Healthcare Output",
          title: "RPF Confirms 95% Coverage of Egyptian Public Hospital I-131 Demand",
          desc: "Operational report confirms consistent supply of Iodine-131 and Tc-99m generators to university hospitals and oncology centers."
        },
        {
          date: "February 10, 2023",
          category: "IAEA Partnership",
          title: "IAEA Expert Delegation Reviews Progress on Project EGY1029",
          desc: "IAEA research reactor division experts visit Anshas site for technical review of ETRR-1 extended shutdown management."
        }
      ]
    },

    // Contact Page
    contactPage: {
      title: "Contact & Service Pathways",
      subtitle: "Official headquarters and direct contacts for medical, customs, and industrial services.",
      hqTitle: "Central Headquarters (Cairo)",
      hqAddress: "3 Ahmed El-Zomor St., 8th District, Nasr City, Cairo, Arab Republic of Egypt.",
      anshasTitle: "Anshas Nuclear Complex (Sharqia)",
      anshasAddress: "Anshas El-Raml, Sharqia Governorate — Site of ETRR-2, RPF, and HLWMC.",
      alexTitle: "Alexandria Branch & Irradiator",
      alexAddress: "Umm Zughayu District, Alexandria — Gamma sterilization for maritime trade.",
      phoneLabel: "Telephone:",
      phoneVal: "+20 2 22748824 / +20 2 22748825",
      emailLabel: "Official Email:",
      emailVal: "info@eaea.org.eg / contact@eaea.sci.eg",
      domainNote: "Official verified email domains for EAEA are eaea.org.eg and eaea.sci.eg exclusively."
    },

    footer: {
      rights: "All Rights Reserved © 2026 Egyptian Atomic Energy Authority (EAEA).",
      ministry: "Arab Republic of Egypt — Ministry of Electricity and Renewable Energy",
      disclaimer: "Official institutional website of the Egyptian Atomic Energy Authority."
    }
  }
};
