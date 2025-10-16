'use client';

import React, { useState } from 'react';

export interface HeaderProps {
  currentZone?: string;
  onZoneChange?: (zone: string) => void;
}

export function Header({ currentZone = 'shell', onZoneChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const zones = [
    { id: 'shell', name: 'Dashboard', path: '/' },
    { id: 'accounting', name: 'Accounting', path: '/accounting' },
    { id: 'hr', name: 'HR', path: '/hr' },
    { id: 'crm', name: 'CRM', path: '/crm' },
  ];

  const handleZoneClick = (zone: typeof zones[0]) => {
    if (onZoneChange) {
      onZoneChange(zone.id);
    } else {
      window.location.href = zone.path;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Multi-Zone App</span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => handleZoneClick(zone)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentZone === zone.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => handleZoneClick(zone)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentZone === zone.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
