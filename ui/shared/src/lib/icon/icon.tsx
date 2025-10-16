import React from 'react';
import styles from './icon.module.css';

export interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Icon({ name, size = 'medium', className = '' }: IconProps) {
  const iconClasses = [
    styles.icon,
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={iconClasses} data-icon={name}>
      {getIconSymbol(name)}
    </span>
  );
}

function getIconSymbol(name: string): string {
  const icons: Record<string, string> = {
    home: '🏠',
    user: '👤',
    settings: '⚙️',
    bell: '🔔',
    chat: '💬',
    search: '🔍',
    menu: '☰',
    close: '✕',
    arrow: '→',
    plus: '+',
    minus: '-',
    edit: '✏️',
    delete: '🗑️',
    save: '💾',
    download: '⬇️',
    upload: '⬆️',
    calendar: '📅',
    clock: '🕐',
    check: '✓',
    warning: '⚠️',
    error: '❌',
    info: 'ℹ️',
  };

  return icons[name] || '?';
}
