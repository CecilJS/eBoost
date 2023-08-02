import React from 'react'

export default function Footer() {
  return (
    <footer className="flex container mx-auto">
      <a className="flex fixed bottom-0 flex items-center justify-center">
        &copy; eBoost - {new Date().getFullYear()}
      </a>
    </footer>
  );
}
