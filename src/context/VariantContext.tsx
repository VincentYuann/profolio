import React, { createContext, useContext, useState } from 'react';

export type DesignVariant = 'tokonoma' | 'akari' | 'shokunin';

interface VariantContextType {
  variant: DesignVariant;
  setVariant: (v: DesignVariant) => void;
  toggleVariant: () => void;
}

const VariantContext = createContext<VariantContextType | undefined>(undefined);

export const VariantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [variant, setVariantState] = useState<DesignVariant>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const v = urlParams.get('variant');
      if (v === 'shokunin' || v === '3') {
        localStorage.setItem('profolio-design-variant', 'shokunin');
        return 'shokunin';
      }
      if (v === 'akari' || v === '2') {
        localStorage.setItem('profolio-design-variant', 'akari');
        return 'akari';
      }
      if (v === 'tokonoma' || v === '1') {
        localStorage.setItem('profolio-design-variant', 'tokonoma');
        return 'tokonoma';
      }
      const saved = localStorage.getItem('profolio-design-variant');
      if (saved === 'shokunin' || saved === 'akari' || saved === 'tokonoma') return saved;
    }
    return 'tokonoma';
  });

  const setVariant = (v: DesignVariant) => {
    setVariantState(v);
    if (typeof window !== 'undefined') {
      localStorage.setItem('profolio-design-variant', v);
      const url = new URL(window.location.href);
      const paramVal = v === 'shokunin' ? '3' : v === 'akari' ? '2' : '1';
      url.searchParams.set('variant', paramVal);
      window.history.replaceState(null, '', url.toString());
    }
  };

  const toggleVariant = () => {
    if (variant === 'tokonoma') setVariant('akari');
    else if (variant === 'akari') setVariant('shokunin');
    else setVariant('tokonoma');
  };

  return (
    <VariantContext.Provider value={{ variant, setVariant, toggleVariant }}>
      {children}
    </VariantContext.Provider>
  );
};

export const useVariant = () => {
  const context = useContext(VariantContext);
  if (!context) {
    throw new Error('useVariant must be used within a VariantProvider');
  }
  return context;
};
