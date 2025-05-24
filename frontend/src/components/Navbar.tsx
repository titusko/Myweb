import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-stone-900 text-stone-100 p-6 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold tracking-wider hover:text-amber-400 transition-colors">
          {t('navbar.brand')}
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/#introduction" className="text-lg hover:text-amber-400 transition-colors">{t('navbar.introductionLink')}</Link>
          {/* <Link to="/#services" className="text-lg hover:text-amber-400 transition-colors">{t('navbar.services')}</Link> */}
          {/* <Link to="/#projects" className="text-lg hover:text-amber-400 transition-colors">{t('navbar.projects')}</Link> */}
          {/* <Link to="/#about" className="text-lg hover:text-amber-400 transition-colors">{t('navbar.about')}</Link> */}
          {/* <Link to="/#contact" className="text-lg hover:text-amber-400 transition-colors">{t('navbar.contact')}</Link> */}
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => changeLanguage('et')} className={`hover:text-amber-400 ${i18n.language === 'et' ? 'text-amber-400 font-bold' : ''}`}>ET</Button>
            <Button variant="ghost" size="sm" onClick={() => changeLanguage('en')} className={`hover:text-amber-400 ${i18n.language === 'en' ? 'text-amber-400 font-bold' : ''}`}>EN</Button>
            <Button variant="ghost" size="sm" onClick={() => changeLanguage('ru')} className={`hover:text-amber-400 ${i18n.language === 'ru' ? 'text-amber-400 font-bold' : ''}`}>RU</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};