'use client';
import { Dispatch, SetStateAction } from 'react';

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const DarkModeToggle = ({ darkMode, setDarkMode }: DarkModeToggleProps) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        backgroundColor: darkMode ? '#374151' : '#e5e7eb',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        color: darkMode ? '#fff' : '#000',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
