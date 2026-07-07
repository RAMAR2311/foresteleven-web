/*
========================================
   FORESTELEVEN MAIN LOGIC
   - Internationalization (i18n)
   - Form Handling via EmailJS
   - UI Interactions
========================================
*/

const translations = {
    en: {
        "nav.whatWeDo": "What We Do",
        "nav.desks": "Desks",
        "nav.whyUs": "Why ForestEleven",
        "nav.howItWorks": "How it Works",
        "nav.contact": "Contact",

        "hero.clear": "Clear.",
        "hero.fast": "Fast.",
        "hero.done": "Done.",
        "hero.subtitle": "OTC desk for buying and selling stablecoins<br><br>Buy and sell USDT and USDC against COP, MXN and USD through personalized OTC operations, with direct quotes, counterparty validation and operational support from start to finish.",

        "cta.main": "Get Started",
        "cta.whatsapp": "Contact via WhatsApp",

        "whatWeDo.label": "Our Service",
        "whatWeDo.title": "What We Do",
        "whatWeDo.description": "ForestEleven facilitates OTC operations for buying and selling stablecoins for clients who need to convert between fiat currency and digital assets.<br><br>We work with selected pairs in COP, MXN and USD against USDT and USDC, offering personalized quotes, direct support and operational guidance during each stage of the transaction.<br><br>All operations are subject to liquidity availability, market conditions, fund confirmation and internal compliance review.",

        "desks.title": "Select Your Desk",
        "desks.subtitle": "Tailored solutions for every transaction volume.",
        "desks.perTx": "",

        "zelle.title": "MESA COP",
        "zelle.subtitle": "COP ⇄ USDT / USDC",
        "zelle.price": "$1,000,000 cop - $500,000,000 cop",
        "zelle.feature1": "Dedicated account manager.",
        "zelle.feature2": "Priority execution and settlement.",
        "zelle.feature3": "Custom liquidity solutions.",
        "zelle.cta": "Select COP Desk",

        "wire.tag": "Recommended",
        "wire.title": "MESA MXN",
        "wire.subtitle": "MXN ⇄ USDT / USDC",
        "wire.price": "10,000 mxn – 1,000,000 mxn",
        "wire.feature1": "Dedicated account manager.",
        "wire.feature2": "Priority execution and settlement.",
        "wire.feature3": "Custom liquidity solutions.",
        "wire.cta": "Select MXN Desk",

        "enterprise.tag": "National",
        "enterprise.title": "MESA USD",
        "enterprise.subtitle": "USD ⇄ USDT / USDC",
        "enterprise.price": "10,000 usd – 10,000,000 usd",
        "enterprise.feature1": "Dedicated account manager.",
        "enterprise.feature2": "Priority execution and settlement.",
        "enterprise.feature3": "Custom liquidity solutions.",
        "enterprise.cta": "Select USD Desk",

        "markets.title": "Available Markets",
        "markets.subtitle": "Selected pairs for your OTC operations",
        "markets.fiat": "Fiat Currency",
        "markets.available": "Available",
        "markets.note": "<strong>Note:</strong> Rates vary based on market, amount, liquidity availability, payment method and compliance review.",

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

        "workflow.how": "HOW WE OPERATE",
        "workflow.title": "OTC Process",
        "workflow.tab.persona": "Individual",
        "workflow.tab.empresa": "Corporate",
        
        "workflow.persona.s1.title": "Request + KYC",
        "workflow.persona.s1.desc": "Submit your details and complete the KYC verification.",
        "workflow.persona.s2.title": "Quote & Validation",
        "workflow.persona.s2.desc": "We review your information and confirm rate, conditions and availability.",
        "workflow.persona.s3.title": "Execution & Settlement",
        "workflow.persona.s3.desc": "You send payment or assets; we verify receipt and complete the operation.",

        "workflow.empresa.s1.title": "Request",
        "workflow.empresa.s1.desc": "Submit initial details of your operation.",
        "workflow.empresa.s2.title": "KYB",
        "workflow.empresa.s2.desc": "We validate your corporate information and documentation.",
        "workflow.empresa.s3.title": "Quote & Validation",
        "workflow.empresa.s3.desc": "We confirm rate, conditions and availability.",
        "workflow.empresa.s4.title": "Execution & Settlement",
        "workflow.empresa.s4.desc": "You send payment or assets; we verify receipt and complete the operation.",
        "workflow.note": "All operations are subject to liquidity availability, fund confirmation and internal compliance review.",

        "compliance.text": "May apply KYC/AML. Service available for eligible clients.",

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

        "form.opt.select": "Select an option",
        "form.opt.persona": "Individual",
        "form.opt.empresa": "Corporate",
        "form.opt.col": "Colombia",
        "form.opt.mx": "Mexico",
        "form.opt.us": "United States",
        "form.opt.other": "Other",
        "form.opt.buy": "Buy stablecoins",
        "form.opt.sell": "Sell stablecoins",
        "form.opt.amount": "Select approximate amount",

        "success.title": "Request Sent Successfully",
        "success.desc": "One of our executives will contact you shortly via email or WhatsApp.",

        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.dataTreatment": "Data Treatment",
        "footer.cookies": "Cookies Policy",

        "faq.title": "Frequently Asked Questions",
        "faq.q1": "What digital assets do you handle?",
        "faq.a1": "We currently work with USDT and USDC, subject to liquidity availability and compliance review.",
        "faq.q2": "What fiat currencies do you handle?",
        "faq.a2": "We operate selected pairs against COP, MXN and USD.",
        "faq.q3": "Can I buy USDT or USDC?",
        "faq.a3": "Yes. You can request a quote to buy USDT or USDC paying in COP, MXN or USD, subject to availability and validation.",
        "faq.q4": "Can I sell USDT or USDC?",
        "faq.a4": "Yes. You can sell USDT or USDC and receive payment in COP, MXN or USD, subject to blockchain confirmation, account validation and internal approval.",
        "faq.q5": "Is the rate fixed?",
        "faq.a5": "The rate is confirmed before executing the operation and may have a limited validity period.",
        "faq.q6": "What documents can you request?",
        "faq.a6": "Depending on the amount, country and risk profile, we may request identity documents, contact info, bank account validation, proof of funds source or corporate documents.",
        "faq.q7": "Do you accept third-party operations?",
        "faq.a7": "For security and compliance reasons, operations must be made from and to accounts or wallets associated with the validated client.",
        "faq.q8": "How long does an operation take?",
        "faq.a8": "The time depends on the currency, payment method, bank confirmation, blockchain network, liquidity availability and internal review."
    },
    es: {
        "nav.whatWeDo": "Qué Hacemos",
        "nav.desks": "Mesas de Cambio",
        "nav.whyUs": "Principios",
        "nav.howItWorks": "Cómo Funciona",
        "nav.contact": "Contacto",

        "hero.clear": "Claro.",
        "hero.fast": "Rápido.",
        "hero.done": "Hecho.",
        "hero.subtitle": "Mesa OTC para compra y venta de stablecoins<br><br>Compra y vende USDT y USDC contra COP, MXN y USD mediante operaciones OTC personalizadas, con cotización directa, validación de contraparte y soporte operativo de principio a fin.",

        "cta.main": "Empezar",
        "cta.whatsapp": "Contactar por WhatsApp",

        "whatWeDo.label": "Nuestro Servicio",
        "whatWeDo.title": "Qué Hacemos",
        "whatWeDo.description": "ForestEleven facilita operaciones OTC de compra y venta de stablecoins para clientes que necesitan convertir entre moneda fiat y activos digitales.<br><br>Trabajamos con pares seleccionados en COP, MXN y USD frente a USDT y USDC, ofreciendo cotización personalizada, soporte directo y acompañamiento operativo durante cada etapa de la transacción.<br><br>Todas las operaciones están sujetas a disponibilidad de liquidez, condiciones de mercado, confirmación de fondos y revisión interna de cumplimiento.",

        "desks.title": "Selecciona tu Mesa",
        "desks.subtitle": "Soluciones a medida para cada volumen.",
        "desks.perTx": "",

        "zelle.title": "MESA COP",
        "zelle.subtitle": "COP ⇄ USDT / USDC",
        "zelle.price": "$1.000.000 cop - $500.000.000 cop",
        "zelle.feature1": "Gerente de cuenta personalizado.",
        "zelle.feature2": "Ejecución y liquidación prioritaria.",
        "zelle.feature3": "Soluciones de liquidez a medida.",
        "zelle.cta": "Seleccionar Mesa COP",

        "wire.tag": "Recomendado",
        "wire.title": "MESA MXN",
        "wire.subtitle": "MXN ⇄ USDT / USDC",
        "wire.price": "10.000 mxn – 1.000.000 mxn",
        "wire.feature1": "Gerente de cuenta personalizado.",
        "wire.feature2": "Ejecución y liquidación prioritaria.",
        "wire.feature3": "Soluciones de liquidez a medida.",
        "wire.cta": "Seleccionar Mesa MXN",

        "enterprise.tag": "Nacional",
        "enterprise.title": "MESA USD",
        "enterprise.subtitle": "USD ⇄ USDT / USDC",
        "enterprise.price": "10.000 usd – 10.000.000 usd",
        "enterprise.feature1": "Gerente de cuenta personalizado.",
        "enterprise.feature2": "Ejecución y liquidación prioritaria.",
        "enterprise.feature3": "Soluciones de liquidez a medida.",
        "enterprise.cta": "Seleccionar Mesa USD",

        "markets.title": "Mercados Disponibles",
        "markets.subtitle": "Pares seleccionados para tus operaciones OTC",
        "markets.fiat": "Moneda fiat",
        "markets.available": "Disponible",
        "markets.note": "<strong class='font-bold text-gray-700 dark:text-gray-300'>Nota:</strong> Las tasas varían según mercado, monto, disponibilidad de liquidez, método de pago y revisión de cumplimiento.",

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

        "workflow.how": "CÓMO OPERAMOS",
        "workflow.title": "Proceso OTC",
        "workflow.tab.persona": "Persona",
        "workflow.tab.empresa": "Empresa",
        
        "workflow.persona.s1.title": "Solicitud + KYC",
        "workflow.persona.s1.desc": "Envías tus datos y completamos la verificación KYC.",
        "workflow.persona.s2.title": "Cotización y validación",
        "workflow.persona.s2.desc": "Revisamos la información y confirmamos tasa, condiciones y disponibilidad.",
        "workflow.persona.s3.title": "Ejecución y liquidación",
        "workflow.persona.s3.desc": "Realizas el pago o envío de activos; verificamos la recepción y completamos la operación.",

        "workflow.empresa.s1.title": "Solicitud",
        "workflow.empresa.s1.desc": "Envías los detalles iniciales de tu operación.",
        "workflow.empresa.s2.title": "KYB",
        "workflow.empresa.s2.desc": "Validamos la información y documentación de la empresa.",
        "workflow.empresa.s3.title": "Cotización y validación",
        "workflow.empresa.s3.desc": "Confirmamos tasa, condiciones y disponibilidad.",
        "workflow.empresa.s4.title": "Ejecución y liquidación",
        "workflow.empresa.s4.desc": "Realizas el pago o envío de activos; verificamos la recepción y completamos la operación.",
        "workflow.note": "Todas las operaciones están sujetas a disponibilidad de liquidez, confirmación de fondos y revisión interna de cumplimiento.",

        "compliance.text": "Puede aplicar KYC/AML. Servicio disponible para clientes elegibles.",

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

        "form.opt.select": "Selecciona una opción",
        "form.opt.persona": "Persona natural",
        "form.opt.empresa": "Empresa",
        "form.opt.col": "Colombia",
        "form.opt.mx": "México",
        "form.opt.us": "Estados Unidos",
        "form.opt.other": "Otro",
        "form.opt.buy": "Comprar stablecoins",
        "form.opt.sell": "Vender stablecoins",
        "form.opt.amount": "Selecciona un monto aproximado",

        "success.title": "Solicitud Enviada",
        "success.desc": "Un ejecutivo te contactará pronto vía email o WhatsApp.",

        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Servicio",
        "footer.dataTreatment": "Tratamiento de Datos",
        "footer.cookies": "Política de Cookies",

        "faq.title": "Preguntas Frecuentes",
        "faq.q1": "¿Qué activos digitales manejan?",
        "faq.a1": "Actualmente trabajamos con USDT y USDC, sujetos a disponibilidad de liquidez y revisión de cumplimiento.",
        "faq.q2": "¿Qué monedas fiat manejan?",
        "faq.a2": "Operamos pares seleccionados contra COP, MXN y USD.",
        "faq.q3": "¿Puedo comprar USDT o USDC?",
        "faq.a3": "Sí. Puedes solicitar una cotización para comprar USDT o USDC pagando en COP, MXN o USD, según disponibilidad y validación.",
        "faq.q4": "¿Puedo vender USDT o USDC?",
        "faq.a4": "Sí. Puedes vender USDT o USDC y recibir pago en COP, MXN o USD, sujeto a confirmación en blockchain, validación de cuenta y aprobación interna.",
        "faq.q5": "¿La tasa queda fija?",
        "faq.a5": "La tasa se confirma antes de ejecutar la operación y puede tener un tiempo limitado de vigencia.",
        "faq.q6": "¿Qué documentos pueden solicitar?",
        "faq.a6": "Dependiendo del monto, país y perfil de riesgo, podremos solicitar documento de identidad, información de contacto, validación de cuenta bancaria, soporte de origen de fondos o documentos empresariales.",
        "faq.q7": "¿Aceptan operaciones de terceros?",
        "faq.a7": "Por seguridad y cumplimiento solo se aceptan las operaciones deben realizarse desde y hacia cuentas o wallets asociadas al cliente validado.",
        "faq.q8": "¿Cuánto tarda una operación?",
        "faq.a8": "El tiempo depende de la moneda, método de pago, confirmación bancaria, red blockchain, disponibilidad de liquidez y revisión interna."
    }
};

// --- LANGUAGE LOGIC ---

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // Using innerHTML to preserve spans if any
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

    // Reset styles
    enBtn.classList.remove("text-primary", "underline");
    esBtn.classList.remove("text-primary", "underline");

    // Activate current
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add("text-primary", "underline");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "en";
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

document.getElementById("transactionForm").addEventListener("submit", function (e) {
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
    *Nueva Solicitud OTC*
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

    // 🔹 1️⃣ Enviar a la EMPRESA
    emailjs.send(
        "service_0h52b9q",
        "template_5qny8eo",
        templateParams
    )
        .then(() => {
            // 🔹 2️⃣ Enviar al CLIENTE 
            return emailjs.send(
                "service_4x80xd8",
                "template_s3sshga",
                templateParams
            );
        })
        .then(() => {
            showSuccessMessage();
            document.getElementById("transactionForm").reset();
            updateForm("COP"); // Reset amount options

            // Redirect to WhatsApp after delay
            setTimeout(() => {
                const phoneNumber = "17867221582";
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text_message.trim())}`;
                window.open(whatsappURL, "_blank");
            }, 1500);
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Server error. Please try again later.");
        });
});

const amountSelect = document.getElementById("amount");

const amountOptions = {
    COP: [
        "1.000.000 - 10.000.000",
        "10.000.001 - 100.000.000",
        "100.001.001 - Infinite"
    ],
    MXN: [
        "10.000 - 100.000",
        "100.001 - 1.000.000",
        "1.000.001 - Infinite"
    ],
    USD: [
        "10.000 - 50.000",
        "50.001 - 200.000",
        "200.001 - Infinite"
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

// Init
updateForm("COP");





