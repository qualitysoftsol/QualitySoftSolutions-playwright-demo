🎭 QualitySoftSolutions-playwright-demo

Framework de automatización E2E con Playwright + TypeScript, usando Page Object Model, reportes Allure/HTML y configuración lista para CI/CD. Ideal como base para proyectos reales de QA Automation.

📌 Características principales

✔️ Automatización E2E con Playwright (UI, fixtures, traces, screenshots, video).
✔️ Uso de TypeScript para tipado robusto.
✔️ Arquitectura escalable con Page Object Model.
✔️ Reportes detallados con Allure (pasos, evidencias) y HTML report.
✔️ Fixture personalizado `stepTest` para integración de pasos en Allure.
✔️ Variables de entorno con dotenv (sin credenciales en el repositorio).
✔️ Configuración lista para CI/CD con GitHub Actions y despliegue en GitHub Pages.

📁 Estructura del proyecto

📦 playwright-demo
├── 📂 .github
│   └── 📂 workflows
│       └── playwright.yml                  # Pipeline CI/CD (tests + Allure + GitHub Pages)
│
├── 📂 env
│   ├── .env                                # Variables de entorno (NO subir al repo)
│   └── .env.example                        # Plantilla de variables requeridas
│
├── 📂 src
│   ├── 📂 data
│   │   └── users.json                      # Test data (formularios, usuarios)
│   ├── 📂 helpers
│   │   └── allureSteps.ts                  # Fixture personalizado para pasos en Allure
│   ├── 📂 pages
│   │   ├── LoginPage.ts                    # Page Object - Login
│   │   ├── InventoryPage.ts                # Page Object - Inventario
│   │   ├── CartPage.ts                     # Page Object - Carrito
│   │   ├── CheckoutStepOnePage.ts          # Page Object - Checkout paso 1
│   │   ├── CheckoutStepTwoPage.ts          # Page Object - Checkout paso 2
│   │   └── CheckoutCompletePage.ts         # Page Object - Confirmación
│   └── 📂 tests
│       ├── login.spec.ts                   # Prueba de login exitoso
│       ├── add-to-cart.spec.ts             # Prueba de agregar al carrito
│       ├── full-flow-checkout.spec.ts      # Flujo completo de compra (E2E)
│       ├── skip-test.spec.ts               # Demo: uso de test.skip()
│       ├── failed-test.spec.ts             # Demo: captura de fallo en reporte
│       └── broken-test.spec.ts             # Demo: test roto intencionalmente
│
├── playwright.config.ts                    # Configuración principal de Playwright
├── tsconfig.json                           # Configuración de TypeScript
├── package.json
└── README.md

🚀 Instalación y ejecución

1️⃣ Clonar el repositorio
    git clone https://github.com/kmiprieto/QualitySoftSolutions-playwright-demo.git
    cd playwright-demo

2️⃣ Configurar variables de entorno
    cp env/.env.example env/.env
    # Editar env/.env con las credenciales correspondientes

3️⃣ Instalar dependencias
    npm install

4️⃣ Instalar navegadores de Playwright
    npx playwright install

5️⃣ Ejecutar pruebas
    npm test

🧪 Scripts disponibles

Comando                     Descripción
npm test                    Ejecuta todas las pruebas
npm run report              Abre el reporte HTML generado
npm run allure:generate     Genera el reporte Allure desde los resultados
npm run allure:open         Abre el reporte Allure en el navegador

📊 Reportes

📄 Reporte HTML

Al ejecutar el proyecto, se genera automáticamente un reporte en:

    playwright-report/index.html

Para abrirlo:

    npm run report

📈 Reporte Allure

Allure genera reportes con pasos detallados, screenshots y videos por test:

    npm run allure:generate
    npm run allure:open

🎥 Trace Viewer

Se generan traces interactivos para depuración:

    npx playwright show-trace test-results/<test>/trace.zip

🧱 Arquitectura basada en Page Objects

Ejemplo de Page Object en este proyecto:

export class LoginPage {
  constructor(private page: Page) {}

  username = this.page.locator('#user-name');
  password = this.page.locator('#password');
  loginBtn = this.page.locator('#login-button');

  async goto() {
    await this.page.goto('/');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

🔄 Integración con GitHub Actions

El pipeline se encuentra en `.github/workflows/playwright.yml` y se activa en cada push a `main` o `develop` y en Pull Requests hacia `main`.

Está compuesto por 3 jobs:

* **Run E2E Tests** — instala dependencias, ejecuta pruebas en Chromium y Firefox, sube reporte HTML y resultados Allure como artefactos. En caso de fallo, sube traces y videos automáticamente.
* **Generate Allure Report** — genera el reporte Allure con historial de ejecuciones y lo sube como artefacto.
* **Deploy Report to GitHub Pages** — publica el reporte Allure en GitHub Pages (solo en push a `main`).

Secretos requeridos en el repositorio (Settings → Secrets and variables → Actions):

* `USER_NAME` — usuario de prueba
* `PASSWORD` — contraseña de prueba

📚 Requisitos

* Node.js 18+
* npm
* Git
* Allure CLI (para reportes locales): npm install -g allure-commandline

🤝 Contribución

Las contribuciones son bienvenidas.
Antes de hacer un PR:

1. Crear una rama nueva
2. Asegurarse de que las pruebas pasen
3. Seguir las buenas prácticas definidas

📄 Licencia

Este proyecto está bajo la licencia MIT.
