'use client';

import React from 'react';
import { Header } from '../header/header';
import { ChatWidget } from 'features/chat';
import { NotificationPanel } from 'features/notifications';
import styles from './root-layout.module.css';

export interface RootLayoutProps {
  children: React.ReactNode;
  currentZone?: string;
  onZoneChange?: (zone: string) => void;
}

export function RootLayout({
  children,
  currentZone = 'shell',
  onZoneChange,
}: RootLayoutProps) {
  return (
    <div className={styles.rootLayout}>
      <Header currentZone={currentZone} onZoneChange={onZoneChange} />
      
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>

      <div className={styles.floatingComponents}>
        <NotificationPanel />
        <ChatWidget />
      </div>
    </div>
  );
}
