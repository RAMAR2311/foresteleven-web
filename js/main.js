/*
========================================
   FORESTELEVEN MAIN LOGIC
   - Internationalization (i18n)
   - Form Handling via EmailJS
   - UI Interactions & Themes
========================================
*/

const translations = {
    en: {
        // Navigation
        "nav.solutions": "Solutions",
        "nav.markets": "Markets",
        "nav.clients": "Clients",
        "nav.howItWorks": "How it Works",
        "nav.compliance": "Compliance",
        "nav.contact": "Contact",
        "nav.rfq": "Request RFQ",
        "nav.whatWeDo": "Solutions",
        "nav.desks": "Markets",
        "nav.whyUs": "Principles",
        "nav.vinculacion": "Compliance",

        // Compliance Dropdown
        "nav.complianceDropdown.risk": "Risk Management",
        "nav.complianceDropdown.riskDesc": "Learn about our verification controls, source of funds, digital assets, and risk prevention.",
        "nav.complianceDropdown.verify": "Start Verification",
        "nav.complianceDropdown.verifyDesc": "Begin the onboarding process for Individual, Corporate, or Institutional and upload your documents.",

        // Hero
        "hero.title1": "Your money,",
        "hero.title2": "available",
        "hero.title3": "in the currency",
        "hero.title4": "you need.",
        "hero.subtitle": "OTC solutions to convert and move large volumes between fiat and stablecoins securely, quickly, and efficiently.",
        "hero.currencies": "Currencies We Operate",
        "hero.f1": "Confidentiality & Security",
        "hero.f2": "Fast & Personalized Execution",
        "hero.f3": "Solutions for Enterprises & Institutions",
        "hero.f4": "Regulatory Compliance & Global Standards",
        "cta.main": "Request RFQ",
        "cta.whatsapp": "Contact via WhatsApp",

        // Soluciones (Our Service)
        "solutions.badge": "OUR SERVICE",
        "solutions.title": "OTC Solutions & Currency Exchange for High-Value Operations",
        "solutions.desc": "At ForestEleven we facilitate high-value operations between fiat currencies and digital assets, as well as direct currency exchange between USD, COP, MXN, and EUR.<br><br>We operate with market-leading stablecoins: USDT and USDC.<br><br>We offer personalized quotes, secure execution, and specialized guidance at every stage of the process.",
        "solutions.c1.title": "Personalized Quote",
        "solutions.c1.desc": "Direct and competitive quotes tailored to your transaction size, pair, and specs.",
        "solutions.c2.title": "Currency Exchange",
        "solutions.c2.desc": "Direct transactions between USD, COP, MXN, and EUR with efficient execution and competitive rates.",
        "solutions.c3.title": "USDT & USDC Operations",
        "solutions.c3.desc": "Buying and selling stablecoins (USDT & USDC) with fast, secure settlement in trusted custodians.",
        "solutions.c4.title": "Coordinated Settlement",
        "solutions.c4.desc": "Dedicated support from initiation to final settlement, ensuring a seamless and transparent experience.",
        "solutions.note": "Operations subject to liquidity availability, market conditions, fund confirmation, and internal compliance review.",

        // Mercados (OTC Desks)
        "markets.badge": "OUR MARKETS",
        "markets.title": "OTC Markets",
        "markets.subtitle": "Conversion between USD, COP, MXN, and EUR, plus USDT and USDC operations.",
        "markets.usd.min": "Operations from USD 10,000",
        "markets.usd.desc": "Large blocks and structured operations.",
        "markets.cop.min": "Operations from COP 10,000,000",
        "markets.cop.desc": "Domestic and international operations in Colombian pesos.",
        "markets.mxn.min": "Operations from MXN 100,000",
        "markets.mxn.desc": "Fast settlement for the Mexican market.",
        "markets.eur.min": "Operations from EUR 10,000",
        "markets.eur.desc": "SEPA transfers and euro settlements.",
        "markets.check1": "Direct quotation",
        "markets.check2": "Dedicated attention",
        "markets.check3": "Coordinated settlement",
        "markets.check4": "Compliance & security",
        "markets.btn.quote": "Request Quote",
        "markets.banner1.title": "Secure, Transparent, and Compliant Operations",
        "markets.banner1.desc": "All operations are subject to liquidity availability, market conditions, and compliance review.",
        "markets.banner2.title": "Need a Tailored Solution?",
        "markets.banner2.desc": "Our team will structure the optimal solution for your transaction.",
        "markets.banner2.btn": "Speak with OTC Desk",
        "markets.confidential": "Confidential information. ForestEleven does not publish maximum operational limits.",

        // Clientes (Who We Serve)
        "clients.badge": "WHO WE SERVE",
        "clients.title": "Solutions for Companies, Institutions, and International Operations",
        "clients.subtitle": "ForestEleven supports OTC operations, currency exchange, and fund settlements for corporate, professional, and institutional clients.",
        "clients.c1.title": "Companies / Corporations",
        "clients.c1.desc": "Treasury, international payments, and conversions between USD, COP, MXN, EUR, USDT, and USDC.",
        "clients.c2.title": "Payroll & Global Teams",
        "clients.c2.desc": "Fund settlements for international payroll, contractors, and remote teams.",
        "clients.c3.title": "Family Offices",
        "clients.c3.desc": "Private and bespoke execution for high-net-worth operations.",
        "clients.c4.title": "Funds & Professional Investors",
        "clients.c4.desc": "OTC liquidity for significant positions in fiat and stablecoins.",
        "clients.c5.title": "Trading Firms / OTC Desks",
        "clients.c5.desc": "Additional liquidity, block execution, and settlement support.",
        "clients.c6.title": "International Trade",
        "clients.c6.desc": "Currency exchange for importer and exporter payables and receivables.",
        "clients.cta.title": "Don't see your specific case?",
        "clients.cta.desc": "Our team can structure a custom solution for you.",

        // Principles (Why Us)
        "why.title": "Our Core Principles.",
        "why.subtitle": "Built on the foundation of trust and efficiency. We strip away the complexity of traditional finance.",
        "why.speed.title": "Speed",
        "why.speed.desc": "Instant execution speeds. No waiting days for settlements.",
        "why.security.title": "Security",
        "why.security.desc": "Bank-grade security protocols for every transfer.",
        "why.Transparency.title": "Transparency",
        "why.Transparency.desc": "Direct communication and clear rates.",
        "why.Compliance.title": "Compliance",
        "why.Compliance.desc": "Verification and control in each process.",

        // Process (Workflow - Updated texts per user prompt)
        "workflow.how": "HOW WE OPERATE",
        "workflow.title": "OTC Process",
        "workflow.tab.persona": "Individual",
        "workflow.tab.empresa": "Corporate",
        "workflow.persona.s1.title": "Request + Identity Verification",
        "workflow.persona.s1.desc": "Submit operation details and complete identity verification.",
        "workflow.persona.s2.title": "Quote & Validation",
        "workflow.persona.s2.desc": "We confirm price, conditions, and availability for operations between USD, COP, MXN, EUR, USDT, and USDC.",
        "workflow.persona.s3.title": "Execution & Settlement",
        "workflow.persona.s3.desc": "We coordinate the operation, verify funds, and complete settlement.",
        "workflow.empresa.s1.title": "Request",
        "workflow.empresa.s1.desc": "Submit initial details of your operation.",
        "workflow.empresa.s2.title": "KYB",
        "workflow.empresa.s2.desc": "We validate corporate information and documentation.",
        "workflow.empresa.s3.title": "Quote & Validation",
        "workflow.empresa.s3.desc": "We confirm price, conditions, and availability for operations between USD, COP, MXN, EUR, USDT, and USDC.",
        "workflow.empresa.s4.title": "Execution & Settlement",
        "workflow.empresa.s4.desc": "We coordinate the operation, verify funds, and complete settlement.",
        "workflow.note": "All operations are subject to liquidity availability, fund confirmation and internal compliance review.",

        // Compliance & Risk Management Section
        "complianceSec.badge": "COMPLIANCE",
        "complianceSec.title": "Compliance & Risk Management",
        "complianceSec.subtitle": "At ForestEleven we apply verification and control processes for operations between USD, COP, MXN, EUR, USDT, and USDC.",
        "complianceSec.c1.title": "Counterparty Verification",
        "complianceSec.c1.desc": "KYC / KYB, identity validation, and ultimate beneficial owners.",
        "complianceSec.c2.title": "Source & Destination of Funds",
        "complianceSec.c2.desc": "Review of operation purpose and bank ownership validation.",
        "complianceSec.c3.title": "Digital Assets",
        "complianceSec.c3.desc": "Wallet screening, risk analysis, and transaction monitoring.",
        "complianceSec.c4.title": "Risk Prevention",
        "complianceSec.c4.desc": "AML/CFT, sanctions screening, PEP, and internal review.",
        "complianceSec.dd.title": "Due Diligence",
        "complianceSec.dd.desc": "ForestEleven can share corporate documentation and process overview with approved counterparties.",
        "complianceSec.dd.btn": "Request Due Diligence",
        "complianceSec.disclaimer": "Information is handled with strict confidentiality and in compliance with applicable regulations.",

        // Due Diligence Page
        "dd.title": "Request Due Diligence",
        "dd.subtitle": "Access corporate compliance documents, AML/CFT policies, and operational controls for approved counterparties.",
        "dd.form.company": "Company / Institution",
        "dd.form.position": "Position / Role",
        "dd.form.type": "Type of Request",
        "dd.form.type.corp": "Corporate Documentation",
        "dd.form.type.aml": "AML / KYC Policies",
        "dd.form.type.full": "Full Compliance Package",
        "dd.form.btn": "Submit Due Diligence Request",

        "compliance.text": "May apply Identity Verification / AML. Service available for eligible clients.",

        // Form & Footer
        "form.title": "Start Your Transaction",
        "form.subtitle": "Fill in the details below and an executive will contact you shortly.",
        "form.label.name": "Full Name",
        "form.label.type": "Client Type",
        "form.label.country": "Country",
        "form.label.operation": "Operation Type",
        "form.label.email": "Email Address",
        "form.label.whatsapp": "WhatsApp Number",
        "form.label.fiat": "Fiat Currency",
        "form.label.digital": "Digital Asset",
        "form.label.amount": "Approximate Amount",
        "form.label.message": "Additional Message",
        "form.button": "Submit Request",
        "form.opt.persona": "Individual",
        "form.opt.empresa": "Corporate",
        "form.opt.col": "Colombia",
        "form.opt.mx": "Mexico",
        "form.opt.us": "United States",
        "form.opt.other": "Other",
        "form.opt.buy": "Buy stablecoins",
        "form.opt.sell": "Sell stablecoins",

        "success.title": "Request Sent Successfully",
        "success.desc": "One of our executives will contact you shortly via email or WhatsApp.",

        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.dataTreatment": "Data Treatment",
        "footer.cookies": "Cookies Policy",

        // FAQ
        "faq.title": "Frequently Asked Questions",
        "faq.q1": "What digital assets do you handle?",
        "faq.a1": "We currently work with USDT and USDC, subject to liquidity availability and compliance review.",
        "faq.q2": "What fiat currencies do you handle?",
        "faq.a2": "We operate selected pairs against COP, MXN, EUR and USD.",
        "faq.q3": "Can I buy USDT or USDC?",
        "faq.a3": "Yes. You can request a quote to buy USDT or USDC paying in COP, MXN, EUR or USD, subject to availability and validation.",
        "faq.q4": "Can I sell USDT or USDC?",
        "faq.a4": "Yes. You can sell USDT or USDC and receive payment in COP, MXN, EUR or USD, subject to blockchain confirmation, account validation and internal approval.",
        "faq.q5": "Is the rate fixed?",
        "faq.a5": "The rate is confirmed before executing the operation and may have a limited validity period.",
        "faq.q6": "What documents can you request?",
        "faq.a6": "Depending on the amount, country and risk profile, we may request identity documents, contact info, bank account validation, proof of funds source or corporate documents.",
        "faq.q7": "Do you accept third-party operations?",
        "faq.a7": "For security and compliance reasons, operations must be made from and to accounts or wallets associated with the validated client.",
        "faq.q8": "How long does an operation take?",
        "faq.a8": "The time depends on the currency, payment method, bank confirmation, blockchain network, liquidity availability and internal review.",

        // KYC Vinculacion
        "kyc.mainTitle": "Counterparty <span class=\"text-primary italic\">Onboarding</span>",
        "kyc.mainSubtitle": "Single Onboarding Form. Please complete the requested information.",
        "kyc.step1": "Information",
        "kyc.step2": "Contacts",
        "kyc.step3": "Financial",
        "kyc.step4": "Beneficiaries",
        "kyc.step5": "Declarations",
        "kyc.step6": "Signature",
        "kyc.s1.title": "1. General Information",
        "kyc.s1.typeProcess": "Type of Request *",
        "kyc.s1.typeProcess.creation": "Creation",
        "kyc.s1.typeProcess.reactivation": "Reactivation",
        "kyc.s1.typeProcess.update": "Update",
        "kyc.s1.typePerson": "Type of Person *",
        "kyc.s1.typePerson.natural": "Natural (PN)",
        "kyc.s1.typePerson.juridical": "Juridical (PJ)",
        "kyc.s1.name": "Full Name / Company Name *",
        "kyc.s1.id": "Tax ID / National ID *",
        "kyc.s1.city": "City *",
        "kyc.s1.country": "Country *",
        "kyc.s1.phone": "Phone Number *",
        "kyc.s1.address": "Main Address *",
        "kyc.s1.email": "E-mail (Billing / Main) *",
        "kyc.s1.typeCounterparty": "Type of Counterparty *",
        "kyc.s1.tc.client": "Client",
        "kyc.s1.tc.provider": "Provider",
        "kyc.s1.tc.contractor": "Contractor",
        "kyc.s1.tc.employee": "Employee",
        "kyc.s1.tc.other": "Other",
        "kyc.s1.pepTitle": "PEP Questions (Politically Exposed Persons)",
        "kyc.s1.pep1": "Do you manage public funds?",
        "kyc.s1.pep2": "Do you exercise any degree of public power?",
        "kyc.s1.pep3": "Are you linked to a PEP?",
        "kyc.yes": "YES",
        "kyc.no": "NO",
        "kyc.s2.title": "2. Contacts (Only Juridical Persons)",
        "kyc.s2.repLegal": "Legal Representative",
        "kyc.s2.name": "Name *",
        "kyc.s2.id": "ID *",
        "kyc.s2.position": "Position *",
        "kyc.s2.email": "Email *",
        "kyc.s2.phone": "Phone *",
        "kyc.s2.isPepRep": "Is PEP? (Legal Representative)",
        "kyc.s2.contactMain": "Main Contact (Purchasing, Administrative, Financial)",
        "kyc.s2.isPepContact": "Is PEP? (Main Contact)",
        "kyc.s2.pep1": "Manages public funds",
        "kyc.s2.pep2": "Exercises public power",
        "kyc.s2.pep3": "Linked to PEP",
        "kyc.s3.title": "3. Financial Information",
        "kyc.s3.activity": "Economic Activity Description *",
        "kyc.s3.ciiu": "ISIC Code *",
        "kyc.s3.bank": "Bank *",
        "kyc.s3.account": "Account Number *",
        "kyc.s3.swift": "SWIFT Code",
        "kyc.s3.income": "Annual Income *",
        "kyc.s3.source": "Source of Income *",
        "kyc.s3.assets": "Total Assets *",
        "kyc.s4.title": "4. Ultimate Beneficial Owners",
        "kyc.s4.desc": "Identification of shareholders who directly or indirectly own more than 5% of the capital stock.",
        "kyc.s4.th1": "ID Type",
        "kyc.s4.th2": "ID Number",
        "kyc.s4.th3": "Name / Company Name",
        "kyc.s4.th4": "%",
        "kyc.s4.th5": "PEP?",
        "kyc.s4.th6": "Action",
        "kyc.s4.add": "Add Beneficiary",
        "kyc.s5.title": "5. Declarations and Authorizations",
        "kyc.s5.originTitle": "Origin of Funds",
        "kyc.s5.originText": "Acting in my own name and/or as legal representative, voluntarily and certifying that everything stated herein is true, I make the following Declaration of Origin of my Funds to FORESTELEVEN S.A.S. with the purpose of contributing to the prevention and control of Money Laundering and Terrorist Financing, I declare that:<br>1. The resources I manage come from lawful activities.<br>2. I declare that the resources do not come from any illicit activity contemplated in the Penal Code.<br>3. I exempt FORESTELEVEN S.A.S. from any liability arising from erroneous or false information.<br>4. I accept verification in binding lists.",
        "kyc.s5.originAccept": "I accept and declare the lawful origin of my funds.*",
        "kyc.s5.dataTitle": "Personal Data Processing",
        "kyc.s5.dataText": "I previously, expressly and informatively authorize FORESTELEVEN S.A.S. so that the data provided may be used for the purposes of: Consulting and reporting to credit bureaus, carrying out collection management, carrying out administrative processes, informing me about commercial offers (Law 1581 of 2012), and conducting market studies.",
        "kyc.s5.dataAccept": "I accept the personal data processing policy.*",
        "kyc.s6.title": "6. Documentation and Signature",
        "kyc.s6.docTitle": "Document Upload",
        "kyc.s6.docDesc": "Upload the required documents. Allowed formats: PDF, JPG, PNG (Max 5MB).",
        "kyc.s6.docSelfie": "Selfie *",
        "kyc.s6.docId": "Identity Document *",
        "kyc.s6.docRut": "RUT (If applicable)",
        "kyc.s6.docCamara": "Chamber of Commerce *",
        "kyc.s6.selectFile": "Select file",
        "kyc.s6.signTitle": "Acceptance and Signature",
        "kyc.s6.signName": "Name of Signatory *",
        "kyc.s6.signPosition": "Position",
        "kyc.s6.signAccept": "I declare that the information is true and I electronically sign this document.*",
        "kyc.btn.prev": "Previous",
        "kyc.btn.next": "Next",
        "kyc.btn.submit": "Submit Request",
        "kyc.success.title": "Request Sent Successfully!",
        "kyc.success.desc": "We have received your data and documents correctly. Our compliance team will contact you shortly.",
        "kyc.success.btn": "Return to Home"
    },
    es: {
        // Navigation
        "nav.solutions": "Soluciones",
        "nav.markets": "Mercados",
        "nav.clients": "Clientes",
        "nav.howItWorks": "Cómo funciona",
        "nav.compliance": "Cumplimiento",
        "nav.contact": "Contacto",
        "nav.rfq": "Solicitar RFQ",
        "nav.whatWeDo": "Soluciones",
        "nav.desks": "Mercados",
        "nav.whyUs": "Principios",
        "nav.vinculacion": "Cumplimiento",

        // Compliance Dropdown
        "nav.complianceDropdown.risk": "Gestión de riesgo",
        "nav.complianceDropdown.riskDesc": "Conoce nuestros controles de verificación, origen de fondos, activos digitales y prevención de riesgos.",
        "nav.complianceDropdown.verify": "Iniciar verificación",
        "nav.complianceDropdown.verifyDesc": "Comienza el proceso de onboarding para Persona, Empresa o Institucional y carga tu documentación.",

        // Hero
        "hero.title1": "Tu dinero,",
        "hero.title2": "disponible",
        "hero.title3": "en la moneda",
        "hero.title4": "que necesites.",
        "hero.subtitle": "Soluciones OTC para convertir y mover grandes volúmenes entre fiat y stablecoins de forma segura, rápida y eficiente.",
        "hero.currencies": "Divisas que operamos",
        "hero.f1": "Confidencialidad y seguridad",
        "hero.f2": "Ejecución rápida y personalizada",
        "hero.f3": "Soluciones para empresas e instituciones",
        "hero.f4": "Cumplimiento normativo y estándares internacionales",
        "cta.main": "Solicitar RFQ",
        "cta.whatsapp": "Contactar por WhatsApp",

        // Soluciones (Nuestro Servicio)
        "solutions.badge": "NUESTRO SERVICIO",
        "solutions.title": "Soluciones OTC y cambio de divisas para operaciones de alto valor",
        "solutions.desc": "En ForestEleven facilitamos operaciones de alto valor entre monedas fiduciarias y activos digitales, así como cambio directo de divisas entre USD, COP, MXN y EUR.<br><br>Operamos con stablecoins líderes del mercado: USDT y USDC.<br><br>Ofrecemos cotizaciones personalizadas, ejecución segura y acompañamiento especializado en cada etapa del proceso.",
        "solutions.c1.title": "Cotización personalizada",
        "solutions.c1.desc": "Cotizaciones directas y competitivas según el tamaño, par y características de tu operación.",
        "solutions.c2.title": "Cambio de divisas",
        "solutions.c2.desc": "Operaciones directas entre USD, COP, MXN y EUR con ejecución eficiente y tasas competitivas.",
        "solutions.c3.title": "Operaciones con USDT y USDC",
        "solutions.c3.desc": "Compra y venta de stablecoins (USDT y USDC) con liquidación segura y rápida en custodios confiables.",
        "solutions.c4.title": "Liquidación coordinada",
        "solutions.c4.desc": "Acompañamiento dedicado desde el inicio hasta la liquidación final, asegurando una experiencia fluida y transparente.",
        "solutions.note": "Operaciones sujetas a disponibilidad de liquidez, condiciones de mercado, confirmación de fondos y revisión interna de cumplimiento.",

        // Mercados (Mesas OTC)
        "markets.badge": "NUESTROS MERCADOS",
        "markets.title": "Mercados OTC",
        "markets.subtitle": "Conversión entre USD, COP, MXN y EUR, además de operaciones con USDT y USDC.",
        "markets.usd.min": "Operaciones desde USD 10.000",
        "markets.usd.desc": "Grandes bloques y operaciones estructuradas.",
        "markets.cop.min": "Operaciones desde COP 10.000.000",
        "markets.cop.desc": "Operaciones nacionales e internacionales en pesos colombianos.",
        "markets.mxn.min": "Operaciones desde MXN 100.000",
        "markets.mxn.desc": "Liquidación rápida para el mercado mexicano.",
        "markets.eur.min": "Operaciones desde EUR 10.000",
        "markets.eur.desc": "Transferencias SEPA y liquidación en euros.",
        "markets.check1": "Cotización directa",
        "markets.check2": "Atención dedicada",
        "markets.check3": "Liquidación coordinada",
        "markets.check4": "Cumplimiento y seguridad",
        "markets.btn.quote": "Solicitar cotización",
        "markets.banner1.title": "Operaciones seguras, transparentes y en cumplimiento",
        "markets.banner1.desc": "Todas las operaciones están sujetas a disponibilidad de liquidez, condiciones de mercado y revisión de cumplimiento.",
        "markets.banner2.title": "¿Necesitas una solución a medida?",
        "markets.banner2.desc": "Nuestro equipo estructurará la mejor solución para tu operación.",
        "markets.banner2.btn": "Hablar con la mesa OTC",
        "markets.confidential": "Información confidencial. ForestEleven no publica límites máximos de operación.",

        // Clientes (A quién servimos)
        "clients.badge": "A QUIÉN SERVIMOS",
        "clients.title": "Soluciones para empresas, instituciones y operaciones internacionales",
        "clients.subtitle": "ForestEleven acompaña operaciones OTC, cambio de divisas y liquidación de fondos para clientes corporativos, profesionales e institucionales.",
        "clients.c1.title": "Empresas / Corporaciones",
        "clients.c1.desc": "Tesorería, pagos internacionales y conversión entre USD, COP, MXN, EUR, USDT y USDC.",
        "clients.c2.title": "Payroll y equipos globales",
        "clients.c2.desc": "Liquidación de fondos para nómina internacional, contratistas y equipos remotos.",
        "clients.c3.title": "Family Offices",
        "clients.c3.desc": "Ejecución privada y personalizada para operaciones de alto valor.",
        "clients.c4.title": "Fondos e inversionistas profesionales",
        "clients.c4.desc": "Liquidez OTC para posiciones relevantes en fiat y stablecoins.",
        "clients.c5.title": "Trading Firms / OTC Desks",
        "clients.c5.desc": "Liquidez adicional, ejecución por bloques y soporte de settlement.",
        "clients.c6.title": "Comercio internacional",
        "clients.c6.desc": "Cambio de divisas para pagos y cobros de importadores y exportadores.",
        "clients.cta.title": "¿No ves tu caso?",
        "clients.cta.desc": "Nuestro equipo puede estructurar una solución a medida.",

        // Principios (Why Us)
        "why.title": "Nuestros Principios.",
        "why.subtitle": "Construidos sobre confianza y eficiencia. Eliminamos la complejidad financiera.",
        "why.speed.title": "Velocidad",
        "why.speed.desc": "Ejecución instantánea. Sin esperas de días.",
        "why.security.title": "Seguridad",
        "why.security.desc": "Protocolos bancarios para cada transferencia.",
        "why.Transparency.title": "Transparencia",
        "why.Transparency.desc": "Comunicación directa y tarifas claras.",
        "why.Compliance.title": "Cumplimiento",
        "why.Compliance.desc": "Verificación y control en cada proceso.",

        // Proceso (Workflow - Exact texts per user prompt)
        "workflow.how": "CÓMO OPERAMOS",
        "workflow.title": "Proceso OTC",
        "workflow.tab.persona": "Persona",
        "workflow.tab.empresa": "Empresa",
        "workflow.persona.s1.title": "Solicitud + Verificación de identidad",
        "workflow.persona.s1.desc": "Envías detalles de la operación y completamos la verificación de identidad.",
        "workflow.persona.s2.title": "Cotización y validación",
        "workflow.persona.s2.desc": "Confirmamos precio, condiciones y disponibilidad para operaciones entre USD, COP, MXN, EUR, USDT y USDC.",
        "workflow.persona.s3.title": "Ejecución y liquidación",
        "workflow.persona.s3.desc": "Coordinamos la operación verificamos los fondos y completamos liquidación.",
        "workflow.empresa.s1.title": "Solicitud",
        "workflow.empresa.s1.desc": "Envías los detalles iniciales de tu operación.",
        "workflow.empresa.s2.title": "KYB",
        "workflow.empresa.s2.desc": "Validamos la información y documentación de la empresa.",
        "workflow.empresa.s3.title": "Cotización y validación",
        "workflow.empresa.s3.desc": "Confirmamos precio, condiciones y disponibilidad para operaciones entre USD, COP, MXN, EUR, USDT y USDC.",
        "workflow.empresa.s4.title": "Ejecución y liquidación",
        "workflow.empresa.s4.desc": "Coordinamos la operación verificamos los fondos y completamos liquidación.",
        "workflow.note": "Todas las operaciones están sujetas a disponibilidad de liquidez, confirmación de fondos y revisión interna de cumplimiento.",

        // Compliance & Risk Management Section
        "complianceSec.badge": "CUMPLIMIENTO",
        "complianceSec.title": "Cumplimiento y gestión de riesgo",
        "complianceSec.subtitle": "En ForestEleven aplicamos procesos de verificación y control para operaciones entre USD, COP, MXN, EUR, USDT y USDC.",
        "complianceSec.c1.title": "Verificación de contraparte",
        "complianceSec.c1.desc": "KYC / KYB, validación de identidad y beneficiarios finales.",
        "complianceSec.c2.title": "Origen y destino de fondos",
        "complianceSec.c2.desc": "Revisión del propósito de la operación y titularidad bancaria.",
        "complianceSec.c3.title": "Activos digitales",
        "complianceSec.c3.desc": "Screening de wallets, análisis de riesgo y monitoreo de transacciones.",
        "complianceSec.c4.title": "Prevención de riesgos",
        "complianceSec.c4.desc": "AML/CFT, sanciones, PEP y revisión interna.",
        "complianceSec.dd.title": "Due Diligence",
        "complianceSec.dd.desc": "ForestEleven puede compartir documentación corporativa y visión general de procesos con contrapartes aprobadas.",
        "complianceSec.dd.btn": "Solicitar Due Diligence",
        "complianceSec.disclaimer": "La información se maneja con estricta confidencialidad y en cumplimiento con las regulaciones aplicables.",

        // Due Diligence Page
        "dd.title": "Solicitud de Due Diligence",
        "dd.subtitle": "Accede a documentación corporativa de cumplimiento, políticas AML/KYC y controles operativos para contrapartes aprobadas.",
        "dd.form.company": "Empresa / Institución",
        "dd.form.position": "Cargo",
        "dd.form.type": "Tipo de Solicitud",
        "dd.form.type.corp": "Documentación Corporativa",
        "dd.form.type.aml": "Políticas AML / KYC",
        "dd.form.type.full": "Paquete de Cumplimiento Completo",
        "dd.form.btn": "Enviar Solicitud de Due Diligence",

        "compliance.text": "Puede aplicar verificación de identidad / AML. Servicio disponible para clientes elegibles.",

        // Form & Footer
        "form.title": "Inicia tu Transacción",
        "form.subtitle": "Completa los datos y te contactaremos pronto.",
        "form.label.name": "Nombre completo",
        "form.label.type": "Tipo de cliente",
        "form.label.country": "País",
        "form.label.operation": "Tipo de operación",
        "form.label.email": "Correo electrónico",
        "form.label.whatsapp": "WhatsApp",
        "form.label.fiat": "Moneda fiat",
        "form.label.digital": "Activo digital",
        "form.label.amount": "Monto aproximado",
        "form.label.message": "Mensaje adicional",
        "form.button": "Enviar Solicitud",
        "form.opt.persona": "Persona natural",
        "form.opt.empresa": "Empresa",
        "form.opt.col": "Colombia",
        "form.opt.mx": "México",
        "form.opt.us": "Estados Unidos",
        "form.opt.other": "Otro",
        "form.opt.buy": "Comprar stablecoins",
        "form.opt.sell": "Vender stablecoins",

        "success.title": "Solicitud Enviada",
        "success.desc": "Un ejecutivo te contactará pronto vía email o WhatsApp.",

        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Servicio",
        "footer.dataTreatment": "Tratamiento de Datos",
        "footer.cookies": "Política de Cookies",

        // FAQ
        "faq.title": "Preguntas Frecuentes",
        "faq.q1": "¿Qué activos digitales manejan?",
        "faq.a1": "Actualmente trabajamos con USDT y USDC, sujetos a disponibilidad de liquidez y revisión de cumplimiento.",
        "faq.q2": "¿Qué monedas fiat manejan?",
        "faq.a2": "Operamos pares seleccionados contra COP, MXN, EUR y USD.",
        "faq.q3": "¿Puedo comprar USDT o USDC?",
        "faq.a3": "Sí. Puedes solicitar una cotización para comprar USDT o USDC pagando en COP, MXN, EUR o USD, según disponibilidad y validación.",
        "faq.q4": "¿Puedo vender USDT o USDC?",
        "faq.a4": "Sí. Puedes vender USDT o USDC y recibir pago en COP, MXN, EUR o USD, sujeto a confirmación en blockchain, validación de cuenta y aprobación interna.",
        "faq.q5": "¿La tasa queda fija?",
        "faq.a5": "La tasa se confirma antes de ejecutar la operación y puede tener un tiempo limitado de vigencia.",
        "faq.q6": "¿Qué documentos pueden solicitar?",
        "faq.a6": "Dependiendo del monto, país y perfil de riesgo, podremos solicitar documento de identidad, información de contacto, validación de cuenta bancaria, soporte de origen de fondos o documentos empresariales.",
        "faq.q7": "¿Aceptan operaciones de terceros?",
        "faq.a7": "Por seguridad y cumplimiento solo se aceptan las operaciones desde y hacia cuenta o wallets asociadas al cliente autorizado previamente.",
        "faq.q8": "¿Cuánto tarda una operación?",
        "faq.a8": "El tiempo depende de la moneda, método de pago, confirmación bancaria, red blockchain, disponibilidad de liquidez y revisión interna.",

        // KYC Vinculacion
        "kyc.mainTitle": "Vinculación de <span class=\"text-primary italic\">Contrapartes</span>",
        "kyc.mainSubtitle": "Formato Único de Vinculación. Por favor, complete la información solicitada.",
        "kyc.step1": "Información",
        "kyc.step2": "Contactos",
        "kyc.step3": "Financiera",
        "kyc.step4": "Beneficiarios",
        "kyc.step5": "Declaraciones",
        "kyc.step6": "Firma",
        "kyc.s1.title": "1. Información y Datos Generales",
        "kyc.s1.typeProcess": "Tipo de Trámite *",
        "kyc.s1.typeProcess.creation": "Creación",
        "kyc.s1.typeProcess.reactivation": "Reactivación",
        "kyc.s1.typeProcess.update": "Actualización",
        "kyc.s1.typePerson": "Tipo de Persona *",
        "kyc.s1.typePerson.natural": "Natural (PN)",
        "kyc.s1.typePerson.juridical": "Jurídica (PJ)",
        "kyc.s1.name": "Nombre Completo / Razón Social *",
        "kyc.s1.id": "NIT / CC *",
        "kyc.s1.city": "Ciudad *",
        "kyc.s1.country": "País *",
        "kyc.s1.phone": "Teléfono *",
        "kyc.s1.address": "Dirección Principal *",
        "kyc.s1.email": "E-mail (Facturación / Principal) *",
        "kyc.s1.typeCounterparty": "Tipo de Contraparte *",
        "kyc.s1.tc.client": "Cliente",
        "kyc.s1.tc.provider": "Proveedor",
        "kyc.s1.tc.contractor": "Contratista",
        "kyc.s1.tc.employee": "Empleado",
        "kyc.s1.tc.other": "Otro",
        "kyc.s1.pepTitle": "Preguntas PEP (Personas Expuestas Políticamente)",
        "kyc.s1.pep1": "¿Maneja recursos públicos?",
        "kyc.s1.pep2": "¿Por su cargo ejerce algún grado de poder público?",
        "kyc.s1.pep3": "¿Está vinculado con un PEP?",
        "kyc.yes": "SI",
        "kyc.no": "NO",
        "kyc.s2.title": "2. Contactos (Solo Personas Jurídicas)",
        "kyc.s2.repLegal": "Representante Legal",
        "kyc.s2.name": "Nombre *",
        "kyc.s2.id": "Cédula *",
        "kyc.s2.position": "Cargo *",
        "kyc.s2.email": "Email *",
        "kyc.s2.phone": "Teléfono *",
        "kyc.s2.isPepRep": "¿Es PEP? (Representante Legal)",
        "kyc.s2.contactMain": "Contacto Principal (Compras, Administrativo, Financiero)",
        "kyc.s2.isPepContact": "¿Es PEP? (Contacto Principal)",
        "kyc.s2.pep1": "Maneja rec. públicos",
        "kyc.s2.pep2": "Ejerce poder público",
        "kyc.s2.pep3": "Vinculado con PEP",
        "kyc.s3.title": "3. Información Financiera",
        "kyc.s3.activity": "Descripción Actividad Económica *",
        "kyc.s3.ciiu": "Código CIIU *",
        "kyc.s3.bank": "Banco *",
        "kyc.s3.account": "Número de Cuenta *",
        "kyc.s3.swift": "Código SWIFT",
        "kyc.s3.income": "Ingresos Anuales *",
        "kyc.s3.source": "Fuente de Ingresos *",
        "kyc.s3.assets": "Total Activos *",
        "kyc.s4.title": "4. Beneficiarios Finales",
        "kyc.s4.desc": "Identificación de accionistas que tengan directa o indirectamente más del 5% del capital social.",
        "kyc.s4.th1": "Tipo Ident.",
        "kyc.s4.th2": "Número",
        "kyc.s4.th3": "Nombre/Razón Social",
        "kyc.s4.th4": "%",
        "kyc.s4.th5": "¿PEP?",
        "kyc.s4.th6": "Acción",
        "kyc.s4.add": "Añadir Beneficiario",
        "kyc.s5.title": "5. Declaraciones y Autorizaciones",
        "kyc.s5.originTitle": "Origen de Fondos",
        "kyc.s5.originText": "Obrando en nombre propio y/o en representación legal, de manera voluntaria y dando certeza de que todo lo aquí consignado es cierto, realizo la siguiente Declaración de Origen de mis Fondos a FORESTELEVEN S.A.S. con el propósito de contribuir en la prevención y control del Lavado de Activos y Financiación del Terrorismo, declaro que:<br>1. Los recursos que manejo provienen de actividades lícitas.<br>2. Declaro que los recursos no provienen de ninguna actividad ilícita contemplada en el Código Penal.<br>3. Eximo a FORESTELEVEN S.A.S. de toda responsabilidad que se derive por información errónea o falsa.<br>4. Acepto la verificación en listas vinculantes.",
        "kyc.s5.originAccept": "Acepto y declaro el origen lícito de mis fondos.*",
        "kyc.s5.dataTitle": "Tratamiento de Datos Personales",
        "kyc.s5.dataText": "Autorizo de manera previa, expresa e informada a FORESTELEVEN S.A.S. para que los datos suministrados sean utilizados con las finalidades de: Consultar y reportar a centrales de riesgo, adelantar gestiones de cobranza, llevar a cabo procesos administrativos, informarme acerca de ofertas comerciales (Ley 1581 de 2012), y realizar estudios de mercado.",
        "kyc.s5.dataAccept": "Acepto la política de tratamiento de datos personales.*",
        "kyc.s6.title": "6. Documentación y Firma",
        "kyc.s6.docTitle": "Carga de Documentos",
        "kyc.s6.docDesc": "Sube los documentos requeridos. Formatos permitidos: PDF, JPG, PNG (Max 5MB).",
        "kyc.s6.docSelfie": "Selfie *",
        "kyc.s6.docId": "Documento de Identidad *",
        "kyc.s6.docRut": "RUT (Si aplica)",
        "kyc.s6.docCamara": "Cámara de Comercio *",
        "kyc.s6.selectFile": "Seleccionar archivo",
        "kyc.s6.signTitle": "Aceptación y Firma",
        "kyc.s6.signName": "Nombre de quien firma *",
        "kyc.s6.signPosition": "Cargo",
        "kyc.s6.signAccept": "Declaro que la información es cierta y firmo electrónicamente este documento.*",
        "kyc.btn.prev": "Anterior",
        "kyc.btn.next": "Siguiente",
        "kyc.btn.submit": "Enviar Solicitud",
        "kyc.success.title": "¡Solicitud Enviada!",
        "kyc.success.desc": "Hemos recibido tus datos y documentos correctamente. Nuestro equipo de compliance se pondrá en contacto pronto.",
        "kyc.success.btn": "Volver al Inicio"
    }
};

// --- LANGUAGE LOGIC ---

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);
    updateLangUI(lang);
    if (typeof updateAmountConstraints === 'function') {
        updateAmountConstraints();
    }
}

function updateLangUI(lang) {
    const enBtn = document.getElementById("lang-en");
    const esBtn = document.getElementById("lang-es");

    if (!enBtn || !esBtn) return;

    enBtn.classList.remove("text-primary", "font-black", "underline");
    esBtn.classList.remove("text-primary", "font-black", "underline");

    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add("text-primary", "font-black", "underline");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "es";
    setLanguage(lang);

    // Theme Logic
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// --- FORM LOGIC ---

function showSuccessMessage() {
    const msg = document.getElementById("successMessage");
    if (msg) {
        msg.classList.remove("hidden");
        setTimeout(() => msg.classList.add("hidden"), 5000);
    }
}

const formEl = document.getElementById("transactionForm");
if (formEl) {
    formEl.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const tipo_cliente = document.getElementById("tipo_cliente").value;
        const pais = document.getElementById("pais").value;
        const tipo_operacion = document.getElementById("tipo_operacion").value;
        const email = document.getElementById("email").value;
        const whatsapp = document.getElementById("whatsapp").value;
        const amount = document.getElementById("amount").value;
        const mensaje = document.getElementById("mensaje").value;

        const currencyElement = document.querySelector('input[name="currency"]:checked');
        const currency = currencyElement ? currencyElement.value : "COP";

        const activoElement = document.querySelector('input[name="activo"]:checked');
        const activo = activoElement ? activoElement.value : "USDT";

        const text_message = `
*Nueva Solicitud OTC - ForestEleven*
Nombre: ${name}
Cliente: ${tipo_cliente}
País: ${pais}
Operación: ${tipo_operacion} ${activo}
Email: ${email}
WhatsApp: ${whatsapp}
Moneda: ${currency}
Monto: ${amount}
Mensaje: ${mensaje}
        `;

        const templateParams = {
            name,
            email,
            whatsapp,
            currency,
            amount,
            tipo_cliente,
            pais,
            tipo_operacion,
            activo,
            mensaje
        };

        emailjs.send(
            "service_0h52b9q",
            "template_5qny8eo",
            templateParams
        )
            .then(() => {
                return emailjs.send(
                    "service_4x80xd8",
                    "template_s3sshga",
                    templateParams
                );
            })
            .then(() => {
                showSuccessMessage();
                document.getElementById("transactionForm").reset();
                updateForm("COP");

                setTimeout(() => {
                    const phoneNumber = "17867221582";
                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text_message.trim())}`;
                    window.open(whatsappURL, "_blank");
                }, 1500);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Error de servidor al enviar la solicitud. Te estamos redirigiendo a WhatsApp...");
                const phoneNumber = "17867221582";
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text_message.trim())}`;
                window.open(whatsappURL, "_blank");
            });
    });
}

const amountSelect = document.getElementById("amount");

const amountOptions = {
    USD: [
        "$10K – $100K",
        "$100K – $1M",
        "$1M – $10M",
        "$100M+"
    ],
    EUR: [
        "€10K – €100K",
        "€100K – €1M",
        "€1M – €10M",
        "€100M+"
    ],
    COP: [
        "$10M – $100M",
        "$100M – $1.000M",
        "$1.000M – $10.000M",
        "$10.000M – $100.000M",
        "$100.000M+"
    ],
    MXN: [
        "$200K – $1M",
        "$1M – $10M",
        "$10M – $100M",
        "$100M – $1.000M",
        "$1.000M+"
    ]
};

function updateForm(currency) {
    if(!amountSelect) return;
    amountSelect.innerHTML = '';
    if(amountOptions[currency]) {
        amountOptions[currency].forEach(range => {
            const option = document.createElement("option");
            option.value = range;
            option.textContent = range;
            amountSelect.appendChild(option);
        });
    }
}

document.querySelectorAll('input[name="currency"]').forEach(radio => {
    radio.addEventListener("change", function () {
        updateForm(this.value);
    });
});

updateForm("COP");

// --- COOKIE BANNER ---
const initCookieBanner = () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('acceptCookies');
    const rejectCookies = document.getElementById('rejectCookies');

    if (!cookieBanner) return;

    cookieBanner.classList.remove('hidden');
    setTimeout(() => {
        cookieBanner.classList.remove('translate-y-full', 'opacity-0');
    }, 500);

    const hideBanner = () => {
        cookieBanner.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => cookieBanner.classList.add('hidden'), 500);
    };

    if (acceptCookies) {
        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            hideBanner();
        });
    }

    if (rejectCookies) {
        rejectCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            hideBanner();
        });
    }
};

initCookieBanner();

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        document.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});
