import './globals.css';
import React from 'react';

export const metadata = {
  title: 'TastyBoard',
  description: 'Recipes app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <header className="site">
          <a href="/"><strong>TastyBoard</strong></a>
          <nav>
            <a href="/recipes">Receitas</a>
            <a href="/recipes/new">Nova receita</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
