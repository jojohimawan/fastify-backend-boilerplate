# Mooda: Backend

This repository serves as a **lightweight, modular, and scalable** backend boilerplate for Mooda built with **Bun, Fastify,** and **TypeScript**. It is designed with a **Flutter-like architecture philosophy** — __fine-grained, vertically deep, and horizontally compact__.

### Current Features
- **Plugin-driven** architecture.
- **Auto module registration** for modular scalability.
- **Layered design** (Controller, Service, Repository).
- **Typed** response and error handling.
- **Environment config wrapper** for Bun-native runtime.
- **Type-safe structure** powered by TypeScript 5.9+.
- Linting and formatting (ESLint + Prettier).

### Directory Structure
```bash
src/
├── core/
│   ├── config/              # Environment configuration
│   │   ├── env.ts
│   │   └── index.ts
│   ├── plugins/             # Fastify plugins (e.g., error handler)
│   │   ├── error-handler.ts
│   │   └── index.ts
│   ├── types/               # Global and shared types
│   │   ├── common.types.ts
│   │   ├── health.types.ts
│   │   └── index.ts
│   └── utils/               # Utility helpers (error, response)
│       ├── error.ts
│       ├── response.ts
│       └── index.ts
│
├── modules/                 # Feature modules
│   └── health/              # Example health-check module
│       ├── health.controller.ts
│       ├── health.service.ts
│       ├── health.repository.ts
│       └── index.ts
│
├── app.ts                   # Fastify app builder
└── server.ts                # Server entrypoint
```

### Setup

**1. Clone the repository**
```bash
git clone <the repository url>
cd mooda-backend
```

**2. Install dependencies**
```bash
bun install
```

**3. Configure environment variables**
Create a `.env` file in the project root:
```bash
cp .env.example .env
```
Edit it as needed.

**4. Run the development server**
```bash
bun run start:dev
```

**5. Lint and format**
```bash
bun run lint
bun run lint:fix
bun run format
```

### Dev Notes
- Uses **Bun’s runtime** for fast TypeScript execution.
- Each feature is a **self-contained module** with its own controller, service, and repository.
- **Global error handler** for consistent structured responses.
- **Strict lint rules** enforce semicolons and type safety.
- Project can expand with new modules — simply create a new folder under `src/modules` and export a default Fastify plugin.
- Optional `tsx` or `nodemon` setup can be replaced by Bun’s native watch mode.

### Requirements
- Bun >= 1.2.0
- TypeScript >= 5.9
- Fastify >= 5.0

### Future Developments
- Integrate **Zod** for validation.
- Add **logging middleware** and **request context hooks**.
- Add **testing layer** with Bun test runner.
- Database repository abstraction with query builder.

<br>

> _Authored by KP PTI Team._
>
> _Cyber Security Research Group, C304 - D4 Building._ <br>
> _Politeknik Elektronika Negeri Surabaya._ <br>
> _In Collaboration with Piramida Teknologi Informasi, PT._
>
> Last change: October 8th, 2025.