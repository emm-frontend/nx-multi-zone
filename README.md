# Nx Multi-Zone Monorepo

A complete Nx monorepo scaffold with Next.js App Router microfrontends, featuring a shell application and multiple sub-applications that can run independently or be composed together.

## 🏗️ Architecture

### Apps (Next.js App Router)
- **shell-ui** → Root host app with shared header, chat, notifications (Port 3000)
- **accounting** → Sub-app for accounting functionality (Port 3001)
- **hr** → Sub-app for HR functionality (Port 3002)
- **crm** → Sub-app for CRM functionality (Port 3003)

### Shared Libraries
- `libs/ui/shell/` → RootLayout, Header components
- `libs/ui/shared/` → Reusable UI components (Button, etc.)
- `libs/features/chat/` → ChatWidget component
- `libs/features/notifications/` → NotificationPanel component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start all applications in development mode:

### Option 1: Start All Applications at Once (Recommended)
```bash
# Start all applications with one command (kills existing processes on ports)
npm run start:all
# or
npm run dev

# Cross-platform Node.js version (Windows/Mac/Linux)
npm run start:all:js
# or
npm run dev:js
```

### Option 2: Start Applications Individually
```bash
# Terminal 1 - Shell UI (Port 3000)
npm run serve:shell

# Terminal 2 - Accounting (Port 3001)
npm run serve:accounting

# Terminal 3 - HR (Port 3002)
npm run serve:hr

# Terminal 4 - CRM (Port 3003)
npm run serve:crm
```

### Additional Scripts
```bash
# Check status of all applications
npm run status

# Stop all running applications (kills processes and frees ports)
npm run stop:all
```

### Port Management Features
- **Automatic Port Cleanup**: Scripts automatically kill any existing processes on ports 3000-3003
- **Cross-Platform Support**: Works on Windows, macOS, and Linux
- **Process Tracking**: Monitors and manages application PIDs
- **Graceful Shutdown**: Properly terminates all applications and frees ports

### Alternative: Using Nx directly

```bash
# Serve individual apps
npx nx serve shell-ui
npx nx serve accounting
npx nx serve hr
npx nx serve crm
```

## 🌐 Accessing Applications

- **Shell UI**: http://localhost:3000
- **Accounting**: http://localhost:3001
- **HR**: http://localhost:3002
- **CRM**: http://localhost:3003

### Multi-Zone Composition

The shell-ui app is configured with Next.js rewrites to compose the sub-applications:

- http://localhost:3000/accounting → Proxies to http://localhost:3001
- http://localhost:3000/hr → Proxies to http://localhost:3002
- http://localhost:3000/crm → Proxies to http://localhost:3003

## 📁 Project Structure

```
nx-multi-zone/
├── apps/
│   ├── shell-ui/           # Main shell application
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   ├── next.config.js
│   │   └── tsconfig.json
│   ├── accounting/         # Accounting sub-app
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   └── tsconfig.json
│   ├── hr/                 # HR sub-app
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   └── tsconfig.json
│   └── crm/                # CRM sub-app
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   └── globals.css
│       └── tsconfig.json
├── libs/
│   ├── ui/
│   │   ├── shell/          # Shell components
│   │   │   ├── Header.tsx
│   │   │   ├── RootLayout.tsx
│   │   │   └── index.ts
│   │   └── shared/         # Shared UI components
│   │       ├── Button.tsx
│   │       └── index.ts
│   └── features/
│       ├── chat/           # Chat feature
│       │   ├── ChatWidget.tsx
│   │   └── index.ts
│       └── notifications/  # Notifications feature
│           ├── NotificationPanel.tsx
│           └── index.ts
├── package.json
├── nx.json
├── tsconfig.base.json
├── workspace.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 UI Features

### Modern Design System
- **Tailwind CSS** for consistent styling across all applications
- **Apple-style minimal UI** with clean, modern components
- **Responsive design** that works on all device sizes
- **Interactive components** with hover effects and smooth transitions

### Enhanced Components
- **Navigation Header** with dropdown menus for each application
- **Live Chat Widget** with interactive messaging interface
- **Notification Panel** with real-time updates and status indicators
- **Dashboard Cards** with statistics and quick actions
- **Professional Layout** with proper spacing and typography
- **Dropdown Navigation** with hover menus for easy access to sub-routes

### Application-Specific UIs
- **Shell UI**: Welcome dashboard with feature overview and navigation
- **Accounting**: Financial dashboard with revenue, expenses, and transaction history
  - `/accounting` - Main dashboard
  - `/accounting/invoices` - Invoice management
  - `/accounting/expenses` - Expense tracking
  - `/accounting/reports` - Financial reports
- **HR**: Employee management with directory, activities, and HR processes
  - `/hr` - Main dashboard
  - `/hr/employees` - Employee directory
  - `/hr/recruitment` - Job postings and candidates
  - `/hr/payroll` - Payroll processing
- **CRM**: Customer relationship management with sales pipeline and lead tracking
  - `/crm` - Main dashboard
  - `/crm/leads` - Lead management
  - `/crm/contacts` - Contact directory
  - `/crm/deals` - Sales opportunities

## 🔧 Development

### Adding New Components

1. **Shared UI Components**: Add to `libs/ui/shared/`
2. **Feature Components**: Add to `libs/features/[feature-name]/`
3. **Shell Components**: Add to `libs/ui/shell/`

### TypeScript Path Mapping

The project uses TypeScript path mapping for clean imports:

```typescript
// Available path aliases
import { RootLayout } from "ui/shell";
import { Button } from "ui/shared";
import { ChatWidget } from "features/chat";
import { NotificationPanel } from "features/notifications";
```

### Client Components

Components that need interactivity should use the `"use client"` directive:

```typescript
"use client";
import React from "react";

export const InteractiveComponent = () => {
  // Client-side logic here
  return <div>Interactive content</div>;
};
```

## 🚀 Building for Production

```bash
# Build all applications
npx nx build shell-ui
npx nx build accounting
npx nx build hr
npx nx build crm
```

## 📝 Key Features

- ✅ **Nx Monorepo**: Full Nx workspace with proper project configuration
- ✅ **Next.js 14+ App Router**: Modern Next.js with App Router
- ✅ **Microfrontends**: Independent applications that can run separately
- ✅ **Multi-Zone Composition**: Shell app can compose sub-applications
- ✅ **Shared Libraries**: Reusable components and features
- ✅ **TypeScript**: Full TypeScript support with path mapping
- ✅ **Tailwind CSS**: Modern utility-first CSS framework
- ✅ **Clean Architecture**: Well-organized folder structure

## 🤝 Contributing

1. Create feature branches from `main`
2. Make your changes
3. Test all applications
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.