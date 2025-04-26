'use client';

import React from 'react';
import Card from './Components/BusinessCard';
import DarkModeToggle from './Components/DarkModeToggle';

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <main className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Card />
    </main>
  );
}
