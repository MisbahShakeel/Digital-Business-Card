// app/page.tsx
'use client';

import React from 'react';
import Card from './Components/BusinessCard';
import DarkModeToggle from './Components/DarkModeToggle';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <Card />
    </main>
  );
}
