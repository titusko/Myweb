import React from "react";
import { Navbar } from "components/Navbar";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-stone-100 text-stone-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="flex items-center justify-center h-[calc(100vh-100px)] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521790797524-35245c82a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white uppercase tracking-wider leading-tight" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            {t('hero.titleLine1')}
            <br />
            {t('hero.titleLine2')}
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mt-6 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button variant="default" size="lg" className="mt-10 bg-amber-500 hover:bg-amber-600 text-stone-900 text-lg font-semibold py-4 px-8 uppercase tracking-wide transition-transform duration-300 ease-in-out hover:scale-105">
            {t('hero.ctaButton')}
          </Button>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section id="introduction" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6 uppercase tracking-wide" style={{ fontFamily: "'Arial Black', sans-serif" }}>
            {t('introduction.title')}
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto mb-10"></div>
          <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
            {t('introduction.text')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 p-10 text-center">
        <p>{t('footer.copyright', { year: currentYear })}</p>
        <p className="text-sm">{t('footer.tagline')}</p>
      </footer>
    </div>
  );
}