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

        // 1. No hay definición de la variable 'error' en este contexto
        // 2. Estás mostrando un mensaje de error pero con título de éxito
        // 3. Falta la lógica real de envío del formulario

        // Versión corregida:
        const formData = new FormData(this);

        Swal.fire({
            title: 'Enviando mensaje...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();

                // Aquí iría tu lógica real de envío (fetch/AJAX)
                fetch('tu-endpoint.php', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Mensaje Enviado',
                            text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
                            confirmButtonText: 'Aceptar'
                        });
                        this.reset(); // Limpiar el formulario
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error al enviar',
                            text: 'Ocurrió un problema al enviar tu mensaje.',
                            footer: '<a href="#" onclick="console.error(\'Error detallado:\', ' + JSON.stringify(error) + ')">Ver detalles</a>'
                        });
                    });
            }
        });
    });

    // Formulario principal de contacto
    document.getElementById('main-contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Validación básica de campos (opcional)
        const nombre = this.querySelector('input[name="nombre"]').value;
        const email = this.querySelector('input[name="email"]').value;

        if (!nombre || !email) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor completa todos los campos requeridos',
                confirmButtonColor: '#3498db'
            });
            return;
        }

        // Mostrar loader mientras se procesa
        Swal.fire({
            title: 'Enviando mensaje...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();

                // Simulación de envío (reemplazar con tu lógica real)
                setTimeout(() => {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Mensaje enviado!',
                        html: `
                            <div style="text-align:center">
                                <p>Gracias por contactarte con <strong>The PyDeveloper</strong>.</p>
                                <p>Te responderemos a la brevedad.</p>
                                <hr>
                                <small class="text-muted">Recibirás una copia en ${email}</small>
                            </div>
                        `,
                        confirmButtonText: 'Entendido',
                        confirmButtonColor: '#2ecc71',
                        backdrop: `
                            rgba(0,0,0,0.7)
                            url("/img/logo.png")
                            center top
                            no-repeat
                        `
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.reset(); // Limpiar formulario
                        }
                    });
                }, 1500);
            }
        });
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
        // Mensaje final con opción de reinicio
        Swal.fire({
            title: '¡Cotización completada!',
            html: `
                <div class="text-center">
                    <i class="fas fa-check-circle text-success mb-3" style="font-size: 4rem;"></i>
                    <p>Gracias por usar nuestro cotizador.</p>
                    <p class="small text-muted">ID de cotización: #${Math.floor(Math.random() * 10000)}</p>
                </div>
            `,
            confirmButtonText: 'Nueva cotización',
            cancelButtonText: 'Descargar PDF',
            showCancelButton: true,
            confirmButtonColor: '#3498db',
            cancelButtonColor: '#2ecc71',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                resetQuoter(); // Función para reiniciar el cotizador
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                generatePDF(); // Función para generar PDF
            }
        });
        return;
    }

    // Validaciones con SweetAlert2
    if (state.currentStep === 1 && state.selectedModules.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Módulos requeridos',
            html: `
                <p>Debes seleccionar al menos un módulo para continuar.</p>
                <div class="text-start mt-3">
                    <i class="fas fa-lightbulb text-warning me-2"></i>
                    <small>Recomendación: Comienza con los módulos básicos</small>
                </div>
            `,
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#f39c12'
        });
        return;
    }

    if (state.currentStep === 2 && !state.selectedServer) {
        Swal.fire({
            icon: 'error',
            title: 'Servidor no seleccionado',
            text: 'Por favor elige un plan de hosting para continuar.',
            confirmButtonText: 'Seleccionar',
            confirmButtonColor: '#e74c3c',
            footer: '<a href="#server-options" class="text-decoration-none">Ver opciones de servidores</a>'
        });
        return;
    }

    // Animación para cambio de paso
    Swal.fire({
        title: `Paso ${state.currentStep + 1} de 4`,
        timer: 800,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
        },
        willClose: () => {
            goToStep(state.currentStep + 1);
        }
    });
}

// Función de ejemplo para reset (debes implementarla)
function resetQuoter() {
    // Lógica para reiniciar el cotizador
    state.selectedModules = [];
    state.selectedServer = null;
    // ... otras reset
    goToStep(1);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cotizador reiniciado',
        showConfirmButton: false,
        timer: 1500
    });
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
        Swal.fire({
            icon: 'error',
            title: 'Nombre requerido',
            html: `
                <div class="text-start">
                    <p>Por favor ingresa tu nombre completo antes de continuar.</p>
                    <div class="alert alert-warning mt-3 p-2 small">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        Requerimos sus datos para mejorar el contacto.
                    </div>
                </div>
            `,
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#e74c3c',
            focusConfirm: false,
            allowEnterKey: false,
            backdrop: `
                rgba(231,76,60,0.1)
                url("/img/pattern-red.png")
                left top
                repeat
            `,
            didOpen: () => {
                // Enfocar automáticamente el campo de nombre
                const nameInput = document.getElementById('clientName');
                if (nameInput) {
                    nameInput.focus();
                    nameInput.classList.add('is-invalid');

                    // Remover clase cuando el usuario empiece a escribir
                    nameInput.addEventListener('input', () => {
                        if (nameInput.value.trim() !== '' && nameInput.value !== 'Cliente') {
                            nameInput.classList.remove('is-invalid');
                        }
                    }, { once: true });
                }
            }
        });
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
            doc.addImage('data:image/png;base64,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', 'PNG', 15, 10, 40, 15);
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
        Swal.fire({
            icon: 'error',
            title: 'Error al generar PDF',
            text: 'Ocurrió un error al generar el documento. Por favor inténtalo nuevamente.',
            footer: '<a href="#" onclick="console.error(\'Error detallado:\', ' + JSON.stringify(error) + ')">Ver detalles técnicos</a>'
        });
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