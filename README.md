# Nx Multi-Zone Next.js Monorepo

A complete Next.js Multi-Zone architecture implementation using Nx monorepo, demonstrating micro-frontend patterns with shared UI components and independent deployments.

## 🏗️ Architecture Overview

This project implements a **Next.js Multi-Zone** architecture where:

- **Shell UI** (`shell-ui`) - The main host application that orchestrates all zones
- **Zone Applications** - Independent Next.js apps that can be deployed separately:
  - `accounting` - Financial management and reporting
  - `hr` - Human resources management
  - `crm` - Customer relationship management
- **Shared Libraries** - Reusable components and features:
  - `ui/shared` - Atomic UI components (Button, Icon)
  - `ui/shell` - Shell-specific components (Header, RootLayout)
  - `features/chat` - Chat widget functionality
  - `features/notifications` - Notification system

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd nx-multi-zone

# Install dependencies
npm install

# Build all shared libraries
npx nx run-many --target=build --projects=shared,shell,chat,notifications
```

### Development

Start all applications in development mode:

```bash
# Run all apps in parallel (recommended)
npm run dev

# Or run individual apps
npx nx serve shell-ui    # Port 3000
npx nx serve accounting  # Port 3001  
npx nx serve hr          # Port 3002
npx nx serve crm         # Port 3003
```

### Production Build

```bash
# Build all applications
npx nx run-many --target=build --projects=shell-ui,accounting,hr,crm

# Build individual app
npx nx build shell-ui
```

## 🌐 Multi-Zone Configuration

The shell application (`shell-ui`) is configured with Next.js rewrites to route requests to the appropriate zone:

```javascript
// shell-ui/next.config.js
async rewrites() {
  return [
    { source: '/accounting/:path*', destination: 'http://localhost:3001/:path*' },
    { source: '/hr/:path*', destination: 'http://localhost:3002/:path*' },
    { source: '/crm/:path*', destination: 'http://localhost:3003/:path*' },
  ];
}
```

### Zone Navigation

- **Dashboard**: `http://localhost:3000/` - Main shell application
- **Accounting**: `http://localhost:3000/accounting` - Financial zone
- **HR**: `http://localhost:3000/hr` - Human resources zone  
- **CRM**: `http://localhost:3000/crm` - Customer relations zone

## 📁 Project Structure

```
nx-multi-zone/
├── apps/
│   ├── shell-ui/          # Main host application (port 3000)
│   ├── accounting/        # Accounting zone (port 3001)
│   ├── hr/               # HR zone (port 3002)
│   └── crm/              # CRM zone (port 3003)
├── libs/
│   ├── ui/
│   │   ├── shared/       # Reusable UI components
│   │   └── shell/        # Shell-specific components
│   └── features/
│       ├── chat/         # Chat widget
│       └── notifications/ # Notification system
├── package.json
├── nx.json
└── tsconfig.base.json
```

## 🧩 Shared Components

### UI Components (`@nx-multi-zone/ui/shared`)

- **Button** - Configurable button with variants (primary, secondary, outline, danger)
- **Icon** - Emoji-based icon system with consistent sizing

### Shell Components (`@nx-multi-zone/ui/shell`)

- **Header** - Global navigation with zone switching
- **RootLayout** - Shared layout wrapper for all zones

### Features

- **ChatWidget** (`@nx-multi-zone/features/chat`) - Interactive chat interface
- **Notifications** (`@nx-multi-zone/features/notifications`) - Notification panel with unread counts

## 🔧 Development Commands

```bash
# Nx commands
npx nx serve <app-name>           # Start development server
npx nx build <app-name>           # Build for production
npx nx test <app-name>            # Run tests
npx nx lint <app-name>            # Run linting

# Library commands
npx nx build shared               # Build shared UI library
npx nx build shell                # Build shell components
npx nx build chat                 # Build chat feature
npx nx build notifications        # Build notifications feature

# Utility commands
npx nx graph                      # Visualize project dependencies
npx nx run-many --target=build   # Build multiple projects
```

## 🎨 Styling

The project uses **CSS Modules** for component-scoped styling:

- Each component has its own `.module.css` file
- Global styles are in `app/global.css`
- Responsive design with mobile-first approach
- Consistent design system with CSS custom properties

## 🚀 Deployment

### Independent Deployments

Each zone can be deployed independently:

```bash
# Deploy shell application
npx nx build shell-ui
# Deploy to your hosting platform

# Deploy accounting zone
npx nx build accounting  
# Deploy to your hosting platform

# Deploy HR zone
npx nx build hr
# Deploy to your hosting platform

# Deploy CRM zone
npx nx build crm
# Deploy to your hosting platform
```

### Production Configuration

For production, update the rewrite destinations in `shell-ui/next.config.js`:

```javascript
async rewrites() {
  return [
    { source: '/accounting/:path*', destination: 'https://accounting.yourdomain.com/:path*' },
    { source: '/hr/:path*', destination: 'https://hr.yourdomain.com/:path*' },
    { source: '/crm/:path*', destination: 'https://crm.yourdomain.com/:path*' },
  ];
}
```

## 🧪 Testing

```bash
# Run all tests
npx nx run-many --target=test

# Run tests for specific project
npx nx test shell-ui
npx nx test shared
```

## 📦 Package Management

The project uses **TypeScript path mapping** for clean imports:

```typescript
// tsconfig.base.json
{
  "paths": {
    "@nx-multi-zone/ui/shared": ["ui/shared/src/index.ts"],
    "@nx-multi-zone/ui/shell": ["ui/shell/src/index.ts"],
    "@nx-multi-zone/features/chat": ["features/chat/src/index.ts"],
    "@nx-multi-zone/features/notifications": ["features/notifications/src/index.ts"]
  }
}
```

## 🔄 Zone Switching

Zone switching is implemented with full page reloads to maintain isolation:

```typescript
const navigateTo = (path: string) => {
  window.location.href = path;
};
```

This ensures each zone runs independently with its own state and routing.

## 🛠️ Customization

### Adding New Zones

1. Generate new Next.js app:
   ```bash
   npx nx g @nx/next:app new-zone
   ```

2. Update `shell-ui/next.config.js` with new rewrite:
   ```javascript
   { source: '/new-zone/:path*', destination: 'http://localhost:3004/:path*' }
   ```

3. Update `new-zone/app/layout.tsx` to use shared RootLayout:
   ```typescript
   import { RootLayout as SharedRootLayout } from '@nx-multi-zone/ui/shell';
   ```

### Adding New Shared Components

1. Create component in `ui/shared/src/lib/`
2. Export from `ui/shared/src/index.ts`
3. Import in your applications:
   ```typescript
   import { NewComponent } from '@nx-multi-zone/ui/shared';
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

1. **Module resolution errors**: Ensure TypeScript paths are correctly configured in `tsconfig.base.json`

2. **Build failures**: Clean the dist folder and rebuild:
   ```bash
   rm -rf dist
   npx nx run-many --target=build
   ```

3. **Port conflicts**: Ensure each app is configured with a unique port in `project.json`

4. **Client component errors**: Add `'use client'` directive to components using browser APIs

### Getting Help

- Check the [Nx documentation](https://nx.dev)
- Review [Next.js Multi-Zone docs](https://nextjs.org/docs/advanced-features/multi-zones)
- Open an issue in the repository

---

**Built with ❤️ using Nx and Next.js**