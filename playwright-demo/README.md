🎭 QualitySoftSolutions-playwright-demo

Framework de automatización E2E con Playwright + TypeScript, usando Page Object Model, reportes HTML y configuración escalable. Ideal como base para proyectos reales de QA Automation.

📌 Características principales

✔️ Automatización E2E con Playwright (UI, API, fixtures, traces).
✔️ Uso de TypeScript para tipado robusto.
✔️ Arquitectura escalable con Page Objects.
✔️ Reportes automáticos (HTML report & trace viewer).
✔️ Configuración lista para CI/CD (GitHub Actions).
✔️ Scripts optimizados para ejecución local y en pipelines.

📁 Estructura del proyecto
📦 playwright-demo
├── 📂 tests
│   ├── example.spec.ts        # Pruebas demo
│   └── login.spec.ts          # Caso real de login
│
├── 📂 pages
│   ├── BasePage.ts            # Clase base
│   └── LoginPage.ts           # Page Object
│
├── 📂 fixtures
│   └── testData.ts            # Data y configuraciones
│
├── playwright.config.ts       # Configuración principal
├── package.json
└── README.md

🚀 Instalación y ejecución
1️⃣ Clonar el repositorio
    git clone https://github.com/kmiprieto/QualitySoftSolutions-playwright-demo.git
    cd playwright-demo

2️⃣ Instalar dependencias
    npm install

3️⃣ Instalar navegadores de Playwright
    npx playwright install

4️⃣ Ejecutar pruebas
    npm test

🧪 Scripts disponibles
Comando	                    Descripción
npm test	                Ejecuta todas las pruebas
npm run test:headed	        Ejecuta pruebas en modo visible
npm run test:chrome	        Ejecuta pruebas solo en Chrome
npm run report	            Abre el reporte HTML generado
npm run trace	            Abre los traces de Playwright


📊 Reportes
📄 Reporte HTML

Al ejecutar el proyecto, se genera un reporte en:

    playwright-report/index.html


🎥 Trace Viewer
Se generan registros interactivos para depuración:

    npx playwright show-trace trace.zip


🧱 Arquitectura basada en Page Objects

Ejemplo de un Page Object profesional:

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }
}

🔄 Integración con GitHub Actions

Este proyecto incluye un flujo CI listo para usar:
    .github/workflows/playwright.yml

Ejecuta:
* Instalación
* Pruebas
* Artefactos (reportes y traces)

📚 Requisitos

* Node.js 18+
* npm o yarn
* Git

🤝 Contribución
Las contribuciones son bienvenidas.
Antes de hacer un PR:

1. Crear una rama nueva
2. Asegurarse de que las pruebas pasen
3. Seguir las buenas prácticas definidas

📄 Licencia

Este proyecto está bajo la licencia MIT.