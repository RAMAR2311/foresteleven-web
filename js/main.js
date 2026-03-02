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
        "hero.subtitle": "Private digital dollar settlements via US banking rails. The executive solution for high-value USDT movements.",

        "cta.main": "Get Started",
        "cta.whatsapp": "Contact via WhatsApp",

        "whatWeDo.label": "Our Service",
        "whatWeDo.title": "What We Do",
        "whatWeDo.description": "We connect the world of digital assets with traditional financial infrastructure. We offer strategic conversion between stablecoins, Bitcoin, and fiat currency (USD/COP), guaranteeing efficient liquidity and clear, agile, and reliable processes.",

        "desks.title": "Select Your Desk",
        "desks.subtitle": "Tailored solutions for every transaction volume.",
        "desks.perTx": "/ transaction",

        "zelle.feature1": "Agile movements for quick liquidity",
        "zelle.feature2": "Instant settlement confirmation",
        "zelle.cta": "Select Zelle Desk",

        "wire.tag": "Recommended",
        "wire.feature1": "Institutional volume handling",
        "wire.feature2": "High-value bespoke transfers",
        "wire.cta": "Select Wire Desk",

        "enterprise.tag": "National",
        "enterprise.title": "COP Desk",
        "enterprise.price": "$1.000.000 +",
        "enterprise.feature1": "Dedicated account manager",
        "enterprise.feature2": "Priority execution & settlement",
        "enterprise.feature3": "Custom liquidity solutions",
        "enterprise.cta": "Select COP Desk",

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

        "workflow.title": "Workflow",
        "workflow.step1.title": "Request",
        "workflow.step1.desc": "Submit your transaction details.",
        "workflow.step2.title": "Quote",
        "workflow.step2.desc": "Receive a real-time fixed rate.",
        "workflow.step3.title": "Settlement",
        "workflow.step3.desc": "Funds settled instantly.",

        "compliance.text": "May apply KYC/AML. Service available for eligible clients.",

        "form.title": "Start Your Transaction",
        "form.subtitle": "Fill in the details below and an executive will contact you shortly.",
        "form.label.name": "Full Name",
        "form.label.email": "Email Address",
        "form.label.whatsapp": "WhatsApp Number",
        "form.label.currency": "Currency",
        "form.label.method": "Preferred Method",
        "form.label.amount": "Amount Range",
        "form.option.select": "Select amount",
        "form.button": "Submit Request",
        "form.placeholder.zelle": "500 - 5000",
        "form.placeholder.wire": "min. 5000",
        "form.placeholder.cop": "min. 1,000,000",

        "success.title": "Request Sent Successfully",
        "success.desc": "One of our executives will contact you shortly via email or WhatsApp.",

        "error.zelleAmount": "Due to the amount, the transaction must be processed via Zelle",
        "error.wireAmount": "Due to the amount, the transaction must be processed via Wire Transfer",
        "error.copAmount": "Minimum volume for COP transactions is 1,000,000",

        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.dataTreatment": "Data Treatment",
        "footer.cookies": "Cookies Policy",

        "faq.title": "Frequently Asked Questions",
        "faq.q1": "Processing Times",
        "faq.a1": "Zelle: 5-30 min. Wire: Depends on the bank, released 5-30 min after clearing.",
        "faq.q2": "Required Documentation",
        "faq.a2": "Valid ID, selfie, proof of address, basic details, proof of funds if applicable.",
        "faq.q3": "Transaction Limits",
        "faq.a3": "Zelle: $500-$5,000. Wire: $5,000+ with no limit.",
        "faq.q4": "Supported Accounts",
        "faq.a4": "Any bank in the US and Colombia."
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
        "hero.subtitle": "Liquidaciones privadas de dólares digitales vía banca de EE.UU. La solución ejecutiva para movimientos de alto valor en USDT.",

        "cta.main": "Empezar",
        "cta.whatsapp": "Contactar por WhatsApp",

        "whatWeDo.label": "Nuestro Servicio",
        "whatWeDo.title": "Qué Hacemos",
        "whatWeDo.description": "Unimos el mundo de los activos digitales con la infraestructura financiera tradicional. Ofrecemos conversión estratégica entre stablecoins, Bitcoin y moneda FIAT (USD/COP), asegurando liquidez eficiente, procesos claros, ágiles y confiable.",

        "desks.title": "Selecciona tu Mesa",
        "desks.subtitle": "Soluciones a medida para cada volumen.",
        "desks.perTx": "/ transacción",

        "zelle.feature1": "Movimientos ágiles para liquidez rápida",
        "zelle.feature2": "Confirmación de liquidación instantánea",
        "zelle.cta": "Seleccionar Mesa Zelle",

        "wire.tag": "Recomendado",
        "wire.feature1": "Manejo de volumen institucional",
        "wire.feature2": "Transferencias a medida de alto valor",
        "wire.cta": "Seleccionar Mesa Wire",

        "enterprise.tag": "Nacional",
        "enterprise.title": "Mesa COP",
        "enterprise.price": "$1.000.000 +",
        "enterprise.feature1": "Gerente de cuenta dedicado",
        "enterprise.feature2": "Ejecución y liquidación prioritaria",
        "enterprise.feature3": "Soluciones de liquidez a medida",
        "enterprise.cta": "Seleccionar Mesa COP",

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

        "workflow.title": "Flujo de Trabajo",
        "workflow.step1.title": "Solicitud",
        "workflow.step1.desc": "Envía tus detalles de forma segura.",
        "workflow.step2.title": "Cotización",
        "workflow.step2.desc": "Recibe una tasa fija en tiempo real.",
        "workflow.step3.title": "Liquidación",
        "workflow.step3.desc": "Fondos liquidados al instante.",

        "compliance.text": "Puede aplicar KYC/AML. Servicio disponible para clientes elegibles.",

        "form.title": "Inicia tu Transacción",
        "form.subtitle": "Completa los datos y te contactaremos pronto.",
        "form.label.name": "Nombre Completo",
        "form.label.email": "Correo Electrónico",
        "form.label.whatsapp": "Número de WhatsApp",
        "form.label.currency": "Moneda",
        "form.label.method": "Método Preferido",
        "form.label.amount": "Rango de Monto",
        "form.option.select": "Selecciona monto",
        "form.button": "Enviar Solicitud",
        "form.placeholder.zelle": "500 - 5000",
        "form.placeholder.wire": "mín. 5000",
        "form.placeholder.cop": "mín. 1.000.000",

        "success.title": "Solicitud Enviada",
        "success.desc": "Un ejecutivo te contactará pronto vía email o WhatsApp.",

        "error.zelleAmount": "Debido al monto, la transacción debe realizarse con Zelle",
        "error.wireAmount": "Debido al monto, la transacción debe realizarse con Wire Transfer",
        "error.copAmount": "El volumen mínimo para transacciones COP es 1.000.000",

        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Servicio",
        "footer.dataTreatment": "Tratamiento de Datos",
        "footer.cookies": "Política de Cookies",

        "faq.title": "Preguntas Frecuentes",
        "faq.q1": "Tiempos de envío",
        "faq.a1": "Zelle: 5-30 min. Wire: Depende del banco, liberación en 5-30 min tras acreditarse.",
        "faq.q2": "Documentación necesaria",
        "faq.a2": "ID vigente, selfie, comprobante, datos básicos, justificación de origen si aplica.",
        "faq.q3": "Límites",
        "faq.a3": "Zelle: $500-$5,000. Wire: $5,000+ sin límite.",
        "faq.q4": "Cuentas permitidas",
        "faq.a4": "Cualquier banco de EE.UU. y Colombia."
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
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const amount = document.getElementById("amount").value;
    const amountVal = parseFloat(amount);

    const currencyElement = document.querySelector('input[name="currency"]:checked');
    const currency = currencyElement ? currencyElement.value : "COP";

    const methodElement = document.getElementById("preferredMethod");
    const method = methodElement ? methodElement.value : "Not Selected";

    if (currency === "USD" && method === "Zelle" && amountVal > 5000) {
        const lang = localStorage.getItem("lang") || "en";
        alert(translations[lang]["error.wireAmount"]);
        return;
    }
    if (currency === "USD" && method === "Wire Transfer" && (amountVal < 5000 || isNaN(amountVal))) {
        const lang = localStorage.getItem("lang") || "en";
        alert(translations[lang]["error.zelleAmount"]);
        return;
    }

    const message = `
    New Transaction Request
    Name: ${name}
    Email: ${email}
    WhatsApp: ${whatsapp}
    Currency: ${currency}
    Amount: ${amount}
    Method: ${method}
    `;

    const templateParams = {
        name,
        email,
        whatsapp,
        currency,
        amount,
        method
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

            // Redirect to WhatsApp after delay
            setTimeout(() => {
                const phoneNumber = "573212838756";
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, "_blank");
            }, 1500);

        })

        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Server error. Please try again later.");
        });

});
const methodSelect = document.getElementById("preferredMethod");

const options = {

    COP: {

        methods: [
            "Transferencia Bancaria"
        ]

    },

    USD: {

        methods: [
            "Zelle",
            "Wire Transfer"
        ]

    }

};


function updateAmountConstraints() {
    const amountInput = document.getElementById("amount");
    const errorEl = document.getElementById("amountError");
    const currencyElement = document.querySelector('input[name="currency"]:checked');
    const currency = currencyElement ? currencyElement.value : "COP";
    const method = methodSelect.value;
    const lang = localStorage.getItem("lang") || "en";
    const amountVal = parseFloat(amountInput.value);

    // Default: Reset error
    errorEl.classList.add("hidden");
    errorEl.textContent = "";

    if (currency === "USD") {
        if (method === "Zelle") {
            amountInput.setAttribute("max", "5000");
            amountInput.setAttribute("min", "500");
            amountInput.placeholder = translations[lang]["form.placeholder.zelle"];
            if (amountVal > 5000) {
                errorEl.textContent = translations[lang]["error.wireAmount"];
                errorEl.classList.remove("hidden");
            }
        } else if (method === "Wire Transfer") {
            amountInput.removeAttribute("max");
            amountInput.setAttribute("min", "5000");
            amountInput.placeholder = translations[lang]["form.placeholder.wire"];
            if (amountVal < 5000 && !isNaN(amountVal)) {
                errorEl.textContent = translations[lang]["error.zelleAmount"];
                errorEl.classList.remove("hidden");
            }
        }
    } else {
        // COP Desk
        amountInput.removeAttribute("max");
        amountInput.setAttribute("min", "1000000");
        amountInput.placeholder = translations[lang]["form.placeholder.cop"];
        if (amountVal < 1000000 && !isNaN(amountVal)) {
            errorEl.textContent = translations[lang]["error.copAmount"];
            errorEl.classList.remove("hidden");
        }
    }
}

function updateForm(currency) {
    methodSelect.innerHTML = "";
    options[currency].methods.forEach(method => {
        const option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        methodSelect.appendChild(option);
    });
    updateAmountConstraints();
}

document.querySelectorAll('input[name="currency"]').forEach(radio => {
    radio.addEventListener("change", function () {
        updateForm(this.value);
    });
});

methodSelect.addEventListener("change", updateAmountConstraints);
document.getElementById("amount").addEventListener("input", updateAmountConstraints);

updateForm("COP");




