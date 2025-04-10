// Configuración inicial
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar la aplicación
    initApp();
});

// Objeto de configuración con precios y datos
const config = {
    modules: [
        {
            id: 'product-management',
            title: 'Gestión de Productos',
            description: 'Catálogo, inventario y categorías de productos',
            price: 300,
            icon: 'fa-boxes',
            category: 'core'
        },
        {
            id: 'supplier-management',
            title: 'Gestión de Proveedores',
            description: 'Registro, compras y contactos con proveedores',
            price: 250,
            icon: 'fa-truck',
            category: 'core'
        },
        {
            id: 'customer-management',
            title: 'Gestión de Clientes',
            description: 'CRM con historial y segmentación de clientes',
            price: 350,
            icon: 'fa-users',
            category: 'core'
        },
        {
            id: 'branch-management',
            title: 'Gestión de Sucursales',
            description: 'Multi-locación y transferencias entre sucursales',
            price: 400,
            icon: 'fa-store',
            category: 'core'
        },
        {
            id: 'billing-pos',
            title: 'Facturación/Caja',
            description: 'Sistema POS con recibos y notas de crédito',
            price: 450,
            icon: 'fa-cash-register',
            category: 'core'
        },
        {
            id: 'logistics',
            title: 'Logística',
            description: 'Envíos, tracking y gestión de transportistas',
            price: 500,
            icon: 'fa-shipping-fast',
            category: 'advanced'
        },
        {
            id: 'reports',
            title: 'Reportes Avanzados',
            description: 'Analítica y dashboards personalizados',
            price: 400,
            icon: 'fa-chart-bar',
            category: 'advanced'
        },
        {
            id: 'api-integration',
            title: 'API de Integración',
            description: 'Conexión con otros sistemas mediante API',
            price: 600,
            icon: 'fa-plug',
            category: 'advanced'
        },
        {
            id: 'auth-security',
            title: 'Autenticación Segura',
            description: 'Sistema multirol con permisos granulars',
            price: 350,
            icon: 'fa-lock',
            category: 'core'
        },
        {
            id: 'ecommerce',
            title: 'E-commerce',
            description: 'Carrito de compras y pasarelas de pago',
            price: 800,
            icon: 'fa-shopping-cart',
            category: 'advanced'
        },
        {
            id: 'blog-news',
            title: 'Blog/Noticias',
            description: 'Gestor de contenidos para blog o noticias',
            price: 200,
            icon: 'fa-newspaper',
            category: 'content'
        },
        {
            id: 'booking',
            title: 'Reservas/Citas',
            description: 'Calendario y gestión de disponibilidad',
            price: 450,
            icon: 'fa-calendar-check',
            category: 'advanced'
        },
        {
            id: 'chat',
            title: 'Chat Interno',
            description: 'Mensajería entre usuarios del sistema',
            price: 300,
            icon: 'fa-comments',
            category: 'communication'
        }
    ],
    serverPlans: [
        {
            id: 'basic',
            name: 'Básico',
            price: 15,
            specs: '1GB RAM, 1CPU, 25GB SSD',
            recommendedFor: 'Pequeños proyectos o pruebas'
        },
        {
            id: 'standard',
            name: 'Estándar',
            price: 25,
            specs: '2GB RAM, 2CPU, 50GB SSD',
            recommendedFor: 'Sitios pequeños con tráfico moderado'
        },
        {
            id: 'advanced',
            name: 'Avanzado',
            price: 50,
            specs: '4GB RAM, 4CPU, 100GB SSD',
            recommendedFor: 'Aplicaciones medianas con buen tráfico'
        },
        {
            id: 'enterprise',
            name: 'Empresarial',
            price: 100,
            specs: '8GB RAM, 8CPU, 200GB SSD',
            recommendedFor: 'Grandes aplicaciones con alto tráfico'
        }
    ],
    additionalServices: [
        {
            id: 'custom-domain',
            name: 'Dominio personalizado',
            price: 10,
            period: 'year',
            description: 'Registro de dominio con tu marca (.com, .net, etc.)'
        },
        {
            id: 'ssl-certificate',
            name: 'Certificado SSL',
            price: 20,
            period: 'year',
            description: 'Protección HTTPS para tu sitio web'
        },
        {
            id: 'data-migration',
            name: 'Migración de datos',
            price: 50,
            period: 'one-time',
            description: 'Traslado de datos desde tu sistema actual (precio base)'
        },
        {
            id: 'training',
            name: 'Capacitación inicial',
            price: 30,
            period: 'hour',
            description: 'Sesiones de entrenamiento para tu equipo'
        },
        {
            id: 'priority-support',
            name: 'Soporte prioritario',
            price: 15,
            period: 'percent',
            description: 'Soporte técnico con respuesta en menos de 2 horas'
        },
        {
            id: 'maintenance',
            name: 'Mantenimiento mensual',
            price: 10,
            period: 'percent',
            description: 'Actualizaciones y mantenimiento continuo'
        }
    ],
    packages: [
        {
            id: 'startup',
            name: 'Startup',
            price: 1500,
            description: 'Perfecto para emprendimientos que comienzan',
            includes: ['product-management', 'customer-management', 'billing-pos', 'auth-security'],
            recommendedServer: 'basic'
        },
        {
            id: 'business',
            name: 'Negocio',
            price: 3500,
            description: 'Ideal para pequeñas y medianas empresas',
            includes: ['product-management', 'supplier-management', 'customer-management', 'billing-pos', 'reports', 'auth-security'],
            recommendedServer: 'standard'
        },
        {
            id: 'enterprise',
            name: 'Empresa',
            price: 7000,
            description: 'Solución completa para grandes organizaciones',
            includes: ['product-management', 'supplier-management', 'customer-management', 'branch-management', 'billing-pos', 'logistics', 'reports', 'api-integration', 'auth-security'],
            recommendedServer: 'advanced'
        }
    ],
    faqs: [
        {
            question: "¿Cuánto tiempo toma desarrollar un sistema personalizado?",
            answer: "El tiempo de desarrollo varía según la complejidad del sistema. Un proyecto pequeño puede tomar 4-6 semanas, mientras que sistemas más complejos pueden requerir 3-6 meses. Ofrecemos la opción de desarrollo express por un costo adicional."
        },
        {
            question: "¿Qué tecnologías utilizan?",
            answer: "Trabajamos principalmente con Python (Django, Flask), JavaScript (React, Vue), bases de datos SQL/NoSQL según necesidades, y tecnologías modernas como Docker para despliegue. Cada proyecto se evalúa para seleccionar la mejor stack tecnológico."
        },
        // Más preguntas frecuentes...
    ],
    exchangeRate: 7200 // PYG por 1 USD
};

// Estado de la aplicación
const state = {
    currentStep: 1,
    selectedModules: [],
    selectedServer: null,
    selectedServices: [],
    databaseType: 'sql',
    backup: false,
    customDesign: false,
    expressDev: false,
    includeTax: true,
    currency: 'USD'
};

// Inicializar la aplicación
function initApp() {
    loadModules();
    loadServerPlans();
    loadAdditionalServices();
    loadPackages();
    loadFAQs();
    setupEventListeners();
    loadFromLocalStorage();
    updateUI();
    initDarkMode();
}

// Cargar módulos en el DOM
function loadModules() {
    const container = document.getElementById('modules-container');

    config.modules.forEach(module => {
        const moduleElement = document.createElement('div');
        moduleElement.className = 'col-md-4 mb-4';
        moduleElement.innerHTML = `
            <div class="card h-100 module-card" data-module-id="${module.id}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 class="card-title">
                                <i class="fas ${module.icon} me-2"></i>${module.title}
                            </h5>
                            <p class="card-text">${module.description}</p>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input module-checkbox" type="checkbox" id="${module.id}-checkbox">
                        </div>
                    </div>
                    <div class="mt-2 text-end">
                        <span class="badge bg-primary">$${module.price}</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(moduleElement);

        // Agregar evento al checkbox
        const checkbox = moduleElement.querySelector('.module-checkbox');
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                state.selectedModules.push(module.id);
            } else {
                state.selectedModules = state.selectedModules.filter(id => id !== module.id);
            }
            saveToLocalStorage();
            updateUI();
        });

        // Agregar tooltip
        $(moduleElement).tooltip({
            title: `Precio base: $${module.price}`,
            placement: 'top',
            trigger: 'hover'
        });
    });
}

// Cargar planes de servidor
function loadServerPlans() {
    const container = document.getElementById('server-plans');

    config.serverPlans.forEach(plan => {
        const planElement = document.createElement('div');
        planElement.className = 'col-md-3 mb-4';
        planElement.innerHTML = `
            <div class="card h-100 server-plan" data-plan-id="${plan.id}">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title mb-0">${plan.name}</h5>
                </div>
                <div class="card-body">
                    <h3 class="card-title pricing-card-title">$${plan.price}<small class="text-muted fw-light">/mes</small></h3>
                    <ul class="list-unstyled mt-3 mb-4">
                        ${plan.specs.split(', ').map(spec => `<li><i class="fas fa-check text-success me-2"></i>${spec}</li>`).join('')}
                    </ul>
                    <div class="text-muted small mb-3">${plan.recommendedFor}</div>
                </div>
                <div class="card-footer bg-transparent">
                    <button type="button" class="btn btn-outline-primary select-server w-100" data-plan-id="${plan.id}">
                        Seleccionar
                    </button>
                </div>
            </div>
        `;
        container.appendChild(planElement);
    });

    // Agregar eventos a los botones de selección
    document.querySelectorAll('.select-server').forEach(button => {
        button.addEventListener('click', function () {
            const planId = this.getAttribute('data-plan-id');
            state.selectedServer = planId;
            saveToLocalStorage();
            updateUI();

            // Actualizar apariencia de los cards
            document.querySelectorAll('.server-plan').forEach(card => {
                if (card.getAttribute('data-plan-id') === planId) {
                    card.classList.add('border-primary', 'border-2');
                } else {
                    card.classList.remove('border-primary', 'border-2');
                }
            });
        });
    });
}

// Cargar servicios adicionales
function loadAdditionalServices() {
    const container = document.getElementById('additional-services');

    config.additionalServices.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
        serviceElement.innerHTML = `
            <div>
                <h6 class="mb-1">${service.name}</h6>
                <small class="text-muted">${service.description}</small>
            </div>
            <div class="d-flex align-items-center">
                <span class="me-3">$${service.price}${service.period === 'year' ? '/año' : service.period === 'hour' ? '/hora' : service.period === 'percent' ? '%' : ''}</span>
                <div class="form-check form-switch">
                    <input class="form-check-input service-checkbox" type="checkbox" id="${service.id}-checkbox">
                </div>
            </div>
        `;
        container.appendChild(serviceElement);

        // Agregar evento al checkbox
        const checkbox = serviceElement.querySelector('.service-checkbox');
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                state.selectedServices.push(service.id);
            } else {
                state.selectedServices = state.selectedServices.filter(id => id !== service.id);
            }
            saveToLocalStorage();
            updateUI();
        });
    });
}

// Cargar paquetes predefinidos
function loadPackages() {
    const container = document.querySelector('#packages .row');

    config.packages.forEach(pkg => {
        const pkgElement = document.createElement('div');
        pkgElement.className = 'col-md-4 mb-4';
        pkgElement.innerHTML = `
            <div class="card h-100">
                <div class="card-header bg-primary text-white">
                    <h4 class="my-0 fw-normal">${pkg.name}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$${pkg.price}</h1>
                    <p class="card-text">${pkg.description}</p>
                    <ul class="list-unstyled mt-3 mb-4">
                        ${pkg.includes.map(moduleId => {
            const module = config.modules.find(m => m.id === moduleId);
            return `<li><i class="fas ${module.icon} me-2"></i>${module.title}</li>`;
        }).join('')}
                    </ul>
                    <button type="button" class="btn btn-lg btn-outline-primary select-package w-100" data-package-id="${pkg.id}">
                        Seleccionar Paquete
                    </button>
                </div>
            </div>
        `;
        container.appendChild(pkgElement);

        // Agregar evento al botón de selección
        const button = pkgElement.querySelector('.select-package');
        button.addEventListener('click', function () {
            const pkgId = this.getAttribute('data-package-id');
            const selectedPackage = config.packages.find(p => p.id === pkgId);

            // Actualizar estado
            state.selectedModules = [...selectedPackage.includes];
            state.selectedServer = selectedPackage.recommendedServer;
            state.selectedServices = [];

            // Actualizar UI
            updateCheckboxes();
            saveToLocalStorage();
            updateUI();

            // Ir al paso 4 para ver el resumen
            goToStep(4);
        });
    });
}

// Cargar preguntas frecuentes
function loadFAQs() {
    const container = document.getElementById('faqAccordion');

    config.faqs.forEach((faq, index) => {
        const faqElement = document.createElement('div');
        faqElement.className = 'accordion-item';
        faqElement.innerHTML = `
            <h2 class="accordion-header" id="faqHeading${index}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${index}">
                    ${faq.question}
                </button>
            </h2>
            <div id="faqCollapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    ${faq.answer}
                </div>
            </div>
        `;
        container.appendChild(faqElement);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Navegación entre pasos
    document.getElementById('next-step').addEventListener('click', nextStep);
    document.getElementById('prev-step').addEventListener('click', prevStep);

    // Selector de moneda
    document.getElementById('currency-selector').addEventListener('change', function () {
        state.currency = this.value;
        saveToLocalStorage();
        updateUI();
    });

    // Toggle de IVA
    document.getElementById('include-tax').addEventListener('change', function () {
        state.includeTax = this.checked;
        saveToLocalStorage();
        updateUI();
    });

    // Tipo de base de datos
    document.getElementById('database-type').addEventListener('change', function () {
        state.databaseType = this.value;
        saveToLocalStorage();
        updateUI();
    });

    // Backup automático
    document.getElementById('backup-option').addEventListener('change', function () {
        state.backup = this.checked;
        saveToLocalStorage();
        updateUI();
    });

    // Diseño personalizado
    document.getElementById('custom-design').addEventListener('change', function () {
        state.customDesign = this.checked;
        saveToLocalStorage();
        updateUI();
    });

    // Desarrollo express
    document.getElementById('express-dev').addEventListener('change', function () {
        state.expressDev = this.checked;
        saveToLocalStorage();
        updateUI();
    });

    // Generar PDF
    document.getElementById('generate-pdf').addEventListener('click', generatePDF);

    // Enviar por email (simulado)
    document.getElementById('send-email').addEventListener('click', function () {
        alert('Esta funcionalidad enviaría el presupuesto por email. En un entorno real se conectaría a un servicio de email.');
    });

    // Formulario de contacto
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Gracias por tu contacto. Nos pondremos en contacto contigo pronto.');
    });

    // Formulario principal de contacto
    document.getElementById('main-contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensaje enviado con éxito. Gracias por contactarte con The PyDeveloper.');
    });

    // Dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
}

// Actualizar checkboxes según el estado
function updateCheckboxes() {
    // Módulos
    document.querySelectorAll('.module-checkbox').forEach(checkbox => {
        checkbox.checked = state.selectedModules.includes(checkbox.id.replace('-checkbox', ''));
    });

    // Servidor
    if (state.selectedServer) {
        document.querySelectorAll('.server-plan').forEach(card => {
            if (card.getAttribute('data-plan-id') === state.selectedServer) {
                card.classList.add('border-primary', 'border-2');
            } else {
                card.classList.remove('border-primary', 'border-2');
            }
        });
    }

    // Servicios adicionales
    document.querySelectorAll('.service-checkbox').forEach(checkbox => {
        checkbox.checked = state.selectedServices.includes(checkbox.id.replace('-checkbox', ''));
    });

    // Opciones de personalización
    document.getElementById('database-type').value = state.databaseType;
    document.getElementById('backup-option').checked = state.backup;
    document.getElementById('custom-design').checked = state.customDesign;
    document.getElementById('express-dev').checked = state.expressDev;
    document.getElementById('include-tax').checked = state.includeTax;
    document.getElementById('currency-selector').value = state.currency;
}

// Actualizar la UI según el estado
function updateUI() {
    // Actualizar barra de progreso
    updateProgressBar();

    // Actualizar botones de navegación
    updateNavButtons();

    // Actualizar resumen de cotización
    updateQuoteSummary();

    // Actualizar totales
    updateTotals();

    // Mostrar/ocultar pasos
    document.querySelectorAll('.calculator-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${state.currentStep}`).classList.add('active');
}

// Actualizar barra de progreso
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const percentage = (state.currentStep / 4) * 100;
    progressBar.style.width = `${percentage}%`;

    // Actualizar estados de los pasos
    document.querySelectorAll('.progress-steps .step').forEach(step => {
        const stepNumber = parseInt(step.getAttribute('data-step'));
        if (stepNumber < state.currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNumber === state.currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

// Actualizar botones de navegación
function updateNavButtons() {
    const prevButton = document.getElementById('prev-step');
    const nextButton = document.getElementById('next-step');

    // Botón anterior
    if (state.currentStep === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // Botón siguiente
    if (state.currentStep === 4) {
        nextButton.textContent = 'Finalizar';
        nextButton.classList.add('btn-success');
        nextButton.classList.remove('btn-primary');
    } else {
        nextButton.innerHTML = 'Siguiente<i class="fas fa-arrow-right ms-2"></i>';
        nextButton.classList.add('btn-primary');
        nextButton.classList.remove('btn-success');
    }

    // Validación para avanzar
    if (state.currentStep === 1 && state.selectedModules.length === 0) {
        nextButton.disabled = true;
    } else if (state.currentStep === 2 && !state.selectedServer) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Actualizar resumen de cotización
function updateQuoteSummary() {
    const container = document.getElementById('quote-summary');

    if (state.currentStep !== 4) return;

    let html = `
        <h4 class="mb-4">Detalle de tu cotización</h4>
        <h5 class="mt-4">Módulos seleccionados</h5>
        <ul class="list-group list-group-flush mb-3">
    `;

    // Módulos seleccionados
    let modulesTotal = 0;
    state.selectedModules.forEach(moduleId => {
        const module = config.modules.find(m => m.id === moduleId);
        modulesTotal += module.price;
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <i class="fas ${module.icon} me-2"></i>
                    <strong>${module.title}</strong>
                    <div class="text-muted small">${module.description}</div>
                </div>
                <span class="badge bg-primary rounded-pill">${formatCurrency(module.price)}</span>
            </li>
        `;
    });

    html += `
        </ul>
        <div class="d-flex justify-content-between mb-4">
            <strong>Subtotal módulos:</strong>
            <strong>${formatCurrency(modulesTotal)}</strong>
        </div>
        
        <h5 class="mt-4">Servidor</h5>
        <ul class="list-group list-group-flush mb-3">
    `;

    // Servidor seleccionado
    let serverTotal = 0;
    if (state.selectedServer) {
        const server = config.serverPlans.find(s => s.id === state.selectedServer);
        serverTotal = server.price;
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${server.name}</strong>
                    <div class="text-muted small">${server.specs}</div>
                </div>
                <span class="badge bg-primary rounded-pill">${formatCurrency(server.price)}/mes</span>
            </li>
        `;
    }

    html += `
        </ul>
        
        <h5 class="mt-4">Servicios adicionales</h5>
        <ul class="list-group list-group-flush mb-3">
    `;

    // Servicios adicionales
    let servicesTotal = 0;
    state.selectedServices.forEach(serviceId => {
        const service = config.additionalServices.find(s => s.id === serviceId);
        let servicePrice = service.price;

        if (service.period === 'percent') {
            servicePrice = (service.price / 100) * modulesTotal;
        }

        servicesTotal += servicePrice;
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${service.name}</strong>
                    <div class="text-muted small">${service.description}</div>
                </div>
                <span class="badge bg-primary rounded-pill">
                    ${formatCurrency(servicePrice)}
                    ${service.period === 'year' ? '/año' : service.period === 'hour' ? '/hora' : service.period === 'percent' ? '%' : ''}
                </span>
            </li>
        `;
    });

    // Opciones de personalización
    let customizationTotal = 0;
    let customizationItems = [];

    // Tipo de base de datos
    if (state.databaseType === 'nosql') {
        const price = 100;
        customizationTotal += price;
        customizationItems.push({
            name: 'Base de datos NoSQL',
            price: price
        });
    }

    // Backup automático
    if (state.backup) {
        const price = 15;
        customizationTotal += price;
        customizationItems.push({
            name: 'Backup automático',
            price: price,
            period: 'mes'
        });
    }

    // Diseño personalizado
    if (state.customDesign) {
        const price = modulesTotal * 0.2;
        customizationTotal += price;
        customizationItems.push({
            name: 'Diseño personalizado',
            price: price,
            isPercent: true
        });
    }

    // Desarrollo express
    if (state.expressDev) {
        const price = modulesTotal * 0.3;
        customizationTotal += price;
        customizationItems.push({
            name: 'Desarrollo express',
            price: price,
            isPercent: true
        });
    }

    // Mostrar personalizaciones si hay alguna
    if (customizationItems.length > 0) {
        html += `
            </ul>
            <h5 class="mt-4">Personalización</h5>
            <ul class="list-group list-group-flush mb-3">
        `;

        customizationItems.forEach(item => {
            html += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${item.name}</strong>
                    </div>
                    <span class="badge bg-primary rounded-pill">
                        ${formatCurrency(item.price)}
                        ${item.period ? '/' + item.period : ''}
                        ${item.isPercent ? '%' : ''}
                    </span>
                </li>
            `;
        });
    }

    html += `</ul>`;

    container.innerHTML = html;
}

// Actualizar totales
function updateTotals() {
    // Calcular subtotal
    let subtotal = 0;

    // Sumar módulos
    state.selectedModules.forEach(moduleId => {
        const module = config.modules.find(m => m.id === moduleId);
        subtotal += module.price;
    });

    // Sumar servidor (primer mes)
    if (state.selectedServer) {
        const server = config.serverPlans.find(s => s.id === state.selectedServer);
        subtotal += server.price;
    }

    // Sumar servicios adicionales
    state.selectedServices.forEach(serviceId => {
        const service = config.additionalServices.find(s => s.id === serviceId);
        if (service.period === 'percent') {
            subtotal += (service.price / 100) * subtotal;
        } else {
            subtotal += service.price;
        }
    });

    // Sumar personalizaciones
    if (state.databaseType === 'nosql') {
        subtotal += 100;
    }

    if (state.backup) {
        subtotal += 15;
    }

    if (state.customDesign) {
        subtotal += subtotal * 0.2;
    }

    if (state.expressDev) {
        subtotal += subtotal * 0.3;
    }

    // Calcular impuestos
    const taxRate = state.includeTax ? 0.1 : 0;
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;

    // Actualizar UI
    document.getElementById('subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('tax-amount').textContent = formatCurrency(taxAmount);
    document.getElementById('total-amount').textContent = formatCurrency(total);
}

// Formatear moneda según selección
function formatCurrency(amount) {
    if (state.currency === 'PYG') {
        return `₲${(amount * config.exchangeRate).toLocaleString('es-PY')}`;
    } else {
        return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
}

// Navegación entre pasos
function nextStep() {
    if (state.currentStep === 4) {
        // Lógica para finalizar
        alert('Cotización completada. Gracias por usar nuestro cotizador.');
        return;
    }

    // Validaciones antes de avanzar
    if (state.currentStep === 1 && state.selectedModules.length === 0) {
        alert('Por favor selecciona al menos un módulo para continuar.');
        return;
    }

    if (state.currentStep === 2 && !state.selectedServer) {
        alert('Por favor selecciona un plan de servidor para continuar.');
        return;
    }

    goToStep(state.currentStep + 1);
}

function prevStep() {
    if (state.currentStep === 1) return;
    goToStep(state.currentStep - 1);
}

function goToStep(step) {
    state.currentStep = step;
    saveToLocalStorage();
    updateUI();

    // Desplazarse al inicio del formulario
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
}

// Generar PDF
function generatePDF() {
    // Validar formulario de contacto
    const name = document.getElementById('client-name').value || 'Cliente';
    const email = document.getElementById('client-email').value || 'No especificado';
    const phone = document.getElementById('client-phone').value || 'No especificado';

    if (!name || name === 'Cliente') {
        alert('Por favor completa tu nombre antes de generar el presupuesto.');
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Configuración segura de texto
        const safeText = (text, defaultText = '') => {
            return text && typeof text === 'string' ? text : defaultText;
        };

        // Logo alternativo si falla la imagen
        try {
            // Usa un placeholder o tu logo en base64
            doc.addImage('https://via.placeholder.com/150x50?text=The+PyDeveloper', 'JPEG', 15, 10, 40, 15);
        } catch (e) {
            console.warn('No se pudo cargar el logo:', e);
            doc.setFontSize(16);
            doc.setTextColor(40, 53, 147);
            doc.text('The PyDeveloper', 15, 20);
        }

        // Encabezado con validación
        doc.setFontSize(22);
        doc.setTextColor(40, 53, 147);
        doc.text(safeText('PRESUPUESTO', 'COTIZACIÓN'), 105, 20, { align: 'center' });

        // Información de la empresa (con valores por defecto)
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(safeText('The PyDeveloper'), 160, 15);
        doc.text(safeText('contacto@pydeveloper.com'), 160, 20);
        doc.text(safeText('+595 123 456789'), 160, 25);
        doc.text(safeText('www.pydeveloper.com'), 160, 30);

        // Línea separadora
        doc.setDrawColor(200, 200, 200);
        doc.line(15, 35, 195, 35);

        // Información del cliente (con validación)
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text('Presupuesto para:', 15, 45);
        doc.setFontSize(10);
        doc.text(`Nombre: ${safeText(name)}`, 15, 50);
        doc.text(`Email: ${safeText(email)}`, 15, 55);
        doc.text(`Teléfono: ${safeText(phone)}`, 15, 60);

        // Fecha con formato seguro
        const formatDate = (date) => {
            try {
                return date.toLocaleDateString();
            } catch (e) {
                return new Date().toLocaleDateString();
            }
        };

        const today = new Date();
        const validUntil = new Date();
        validUntil.setDate(today.getDate() + 30);

        doc.text(`Fecha: ${formatDate(today)}`, 160, 45);
        doc.text(`Válido hasta: ${formatDate(validUntil)}`, 160, 50);

        // Detalle del presupuesto
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text('Detalle del presupuesto:', 15, 70);

        // Tabla de módulos
        let y = 75;
        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.setFillColor(40, 53, 147);
        doc.rect(15, y, 180, 7, 'F');
        doc.text('Módulos del sistema', 20, y + 5);
        doc.text('Precio', 170, y + 5, { align: 'right' });

        y += 10;
        doc.setTextColor(0, 0, 0);

        let modulesTotal = 0;
        state.selectedModules.forEach(moduleId => {
            const module = config.modules.find(m => m.id === moduleId);
            modulesTotal += module.price;
            doc.text(module.title, 20, y);
            doc.text(formatCurrency(module.price), 170, y, { align: 'right' });
            y += 7;
        });

        // Subtotal módulos
        y += 3;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('Subtotal módulos:', 150, y, { align: 'right' });
        doc.text(formatCurrency(modulesTotal), 170, y, { align: 'right' });

        // Servidor
        y += 10;
        doc.setTextColor(255, 255, 255);
        doc.setFillColor(40, 53, 147);
        doc.rect(15, y, 180, 7, 'F');
        doc.text('Servidor', 20, y + 5);
        doc.text('Precio', 170, y + 5, { align: 'right' });

        y += 10;
        doc.setTextColor(0, 0, 0);

        let serverTotal = 0;
        if (state.selectedServer) {
            const server = config.serverPlans.find(s => s.id === state.selectedServer);
            serverTotal = server.price;
            doc.text(`${server.name} (${server.specs})`, 20, y);
            doc.text(`${formatCurrency(server.price)}/mes`, 170, y, { align: 'right' });
            y += 7;
        }

        // Servicios adicionales
        if (state.selectedServices.length > 0) {
            y += 10;
            doc.setTextColor(255, 255, 255);
            doc.setFillColor(40, 53, 147);
            doc.rect(15, y, 180, 7, 'F');
            doc.text('Servicios adicionales', 20, y + 5);
            doc.text('Precio', 170, y + 5, { align: 'right' });

            y += 10;
            doc.setTextColor(0, 0, 0);

            let servicesTotal = 0;
            state.selectedServices.forEach(serviceId => {
                const service = config.additionalServices.find(s => s.id === serviceId);
                let servicePrice = service.price;

                if (service.period === 'percent') {
                    servicePrice = (service.price / 100) * modulesTotal;
                }

                servicesTotal += servicePrice;
                doc.text(`${service.name}`, 20, y);
                doc.text(`${formatCurrency(servicePrice)}${service.period === 'year' ? '/año' : service.period === 'hour' ? '/hora' : ''}`, 170, y, { align: 'right' });
                y += 7;
            });
        }

        // Personalizaciones
        let customizationTotal = 0;
        let hasCustomizations = false;

        if (state.databaseType === 'nosql') {
            customizationTotal += 100;
            hasCustomizations = true;
        }

        if (state.backup) {
            customizationTotal += 15;
            hasCustomizations = true;
        }

        if (state.customDesign) {
            customizationTotal += modulesTotal * 0.2;
            hasCustomizations = true;
        }

        if (state.expressDev) {
            customizationTotal += modulesTotal * 0.3;
            hasCustomizations = true;
        }

        if (hasCustomizations) {
            y += 10;
            doc.setTextColor(255, 255, 255);
            doc.setFillColor(40, 53, 147);
            doc.rect(15, y, 180, 7, 'F');
            doc.text('Personalizaciones', 20, y + 5);
            doc.text('Precio', 170, y + 5, { align: 'right' });

            y += 10;
            doc.setTextColor(0, 0, 0);

            if (state.databaseType === 'nosql') {
                doc.text('Base de datos NoSQL', 20, y);
                doc.text(formatCurrency(100), 170, y, { align: 'right' });
                y += 7;
            }

            if (state.backup) {
                doc.text('Backup automático', 20, y);
                doc.text(`${formatCurrency(15)}/mes`, 170, y, { align: 'right' });
                y += 7;
            }

            if (state.customDesign) {
                doc.text('Diseño personalizado', 20, y);
                doc.text(`${formatCurrency(modulesTotal * 0.2)} (20%)`, 170, y, { align: 'right' });
                y += 7;
            }

            if (state.expressDev) {
                doc.text('Desarrollo express', 20, y);
                doc.text(`${formatCurrency(modulesTotal * 0.3)} (30%)`, 170, y, { align: 'right' });
                y += 7;
            }
        }

        // Totales
        y += 15;
        doc.setFontSize(12);
        doc.text('Resumen de costos', 15, y);

        y += 10;
        doc.setFontSize(10);
        doc.text('Subtotal:', 150, y, { align: 'right' });
        doc.text(document.getElementById('subtotal').textContent, 170, y, { align: 'right' });

        y += 7;
        doc.text('IVA (10%):', 150, y, { align: 'right' });
        doc.text(document.getElementById('tax-amount').textContent, 170, y, { align: 'right' });

        y += 7;
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Total:', 150, y, { align: 'right' });
        doc.text(document.getElementById('total-amount').textContent, 170, y, { align: 'right' });

        // Notas
        y += 15;
        doc.setFontSize(8);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text('Notas:', 15, y);
        doc.text('- Este presupuesto es válido por 30 días a partir de la fecha de emisión.', 20, y + 5);
        doc.text('- Los precios no incluyen costos de implementación adicionales no especificados.', 20, y + 10);
        doc.text('- El desarrollo express garantiza entrega en la mitad del tiempo estándar.', 20, y + 15);
        doc.text('- Los costos de hosting son recurrentes mensualmente.', 20, y + 20);

        // Pie de página
        y += 30;
        doc.setDrawColor(200, 200, 200);
        doc.line(15, y, 195, y);

        y += 5;
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('Gracias por considerar a The PyDeveloper para tu proyecto.', 105, y, { align: 'center' });
        y += 5;
        doc.text('Para aceptar este presupuesto o realizar consultas, por favor contacta con nosotros.', 105, y, { align: 'center' });


        // Resto del contenido del PDF (asegúrate de validar todos los textos)
        // ... [tu contenido existente pero con safeText()] ...

        // Guardar PDF con nombre seguro
        const safeFileName = `Presupuesto-${name.replace(/[^a-z0-9]/gi, '_')}-${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}.pdf`;
        doc.save(safeFileName);

    } catch (error) {
        console.error('Error al generar PDF:', error);
        alert('Ocurrió un error al generar el PDF. Por favor verifica la consola para más detalles.');
    }
}

// LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('pydeveloper_quote_state', JSON.stringify(state));
}

function loadFromLocalStorage() {
    const savedState = localStorage.getItem('pydeveloper_quote_state');
    if (savedState) {
        Object.assign(state, JSON.parse(savedState));
        updateCheckboxes();
    }
}

// Dark Mode
function initDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'enabled';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        this.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        this.innerHTML = '<i class="fas fa-moon"></i>';
    }
}