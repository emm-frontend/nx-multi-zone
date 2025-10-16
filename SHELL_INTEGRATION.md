# Shell Integration - Chat Widget & Notifications

This document describes the shell integration system that provides persistent chat and notification functionality across all applications in the Nx multi-zone architecture.

## Overview

The shell integration system consists of:

1. **Global State Management** - Using Zustand for persistent state across route changes
2. **Chat Widget** - Persistent chat interface that maintains state during navigation
3. **Notification Panel** - Global notification system with different types and states
4. **Shell Provider** - Wrapper component that ensures shell components persist across routes

## Key Features

### Chat Widget
- ✅ **Persistent State**: Chat remains open/closed and messages persist across route changes
- ✅ **Global State**: Uses Zustand store instead of local component state
- ✅ **No Re-rendering**: Widget doesn't re-render when navigating between routes/zones
- ✅ **Message History**: All messages are preserved during navigation
- ✅ **User Context**: Maintains user ID across the application

### Notification Panel
- ✅ **Persistent State**: Notifications persist across route changes
- ✅ **Multiple Types**: Info, Warning, Success, Error notifications
- ✅ **Read/Unread States**: Track notification status
- ✅ **Interactive**: Click to mark as read, remove individual notifications
- ✅ **Programmatic API**: Add notifications from anywhere in the application

## Architecture

```
libs/
├── state/
│   ├── chat/
│   │   ├── chatStore.ts          # Zustand store for chat state
│   │   └── index.ts
│   └── notifications/
│       ├── notificationStore.ts  # Zustand store for notifications
│       └── index.ts
├── features/
│   ├── chat/
│   │   ├── ChatWidget.tsx        # Updated to use global state
│   │   └── index.ts
│   └── notifications/
│       ├── NotificationPanel.tsx # Updated with full functionality
│       ├── notificationUtils.ts  # Helper functions for adding notifications
│       └── index.ts
└── ui/
    └── shell/
        ├── ShellProvider.tsx     # Wrapper for shell components
        ├── RootLayout.tsx        # Updated to use ShellProvider
        └── index.ts
```

## Usage

### Chat Widget

The chat widget automatically appears in the bottom-right corner and maintains its state across all routes.

```tsx
// In any component, you can access chat state
import { useChatStore } from "state/chat";

const { messages, isOpen, sendMessage, setIsOpen } = useChatStore();
```

### Notifications

#### Adding Notifications Programmatically

```tsx
import { 
  addInfoNotification, 
  addWarningNotification, 
  addSuccessNotification, 
  addErrorNotification 
} from "features/notifications";

// Add different types of notifications
addInfoNotification("New Message", "You have a new message");
addWarningNotification("System Alert", "System maintenance scheduled");
addSuccessNotification("Task Complete", "Your task has been completed");
addErrorNotification("Error", "Something went wrong");
```

#### Accessing Notification State

```tsx
import { useNotificationStore } from "state/notifications";

const { 
  notifications, 
  unreadCount, 
  markAsRead, 
  removeNotification 
} = useNotificationStore();
```

### Shell Provider

The `ShellProvider` component ensures that chat and notification components persist across route changes:

```tsx
import { ShellProvider } from "ui/shell";

<ShellProvider userId="user123">
  {/* Your app content */}
</ShellProvider>
```

## State Persistence

Both chat and notification states are persisted using Zustand's persist middleware:

- **Chat State**: Messages, open/closed state, user ID
- **Notification State**: All notifications, read/unread status, open/closed state

The state persists across:
- Route changes within the same app
- Navigation between different apps (accounting, hr, crm)
- Browser refreshes
- Tab switches

## Testing

The shell-ui app includes test buttons to demonstrate the notification system:

1. Navigate to the shell-ui app
2. Click the test notification buttons (Test Info, Test Warning, etc.)
3. Open the notification panel to see the notifications
4. Navigate to other apps (accounting, hr, crm) and back
5. Verify that notifications persist and chat state is maintained

## Benefits

1. **Consistent UX**: Users can continue conversations and see notifications regardless of which app they're in
2. **No Re-rendering**: Shell components don't re-render when navigating, improving performance
3. **Persistent State**: Important information is never lost during navigation
4. **Global Communication**: Any part of the application can trigger notifications
5. **Shell Architecture**: True microfrontend shell pattern with shared UI components

## Dependencies

- `zustand`: Lightweight state management with persistence
- `zustand/middleware`: For persistence functionality

## Future Enhancements

- Real-time notifications via WebSocket
- Chat message encryption
- Notification categories and filtering
- Chat message search
- Notification sound alerts
- Dark mode support for shell components
