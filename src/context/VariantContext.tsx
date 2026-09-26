import React, { createContext, useContext, useState } from 'react';

export type DesignVariant = 'tokonoma' | 'akari';

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
      if (v === 'akari' || v === '2') return 'akari';
      if (v === 'tokonoma' || v === '1') return 'tokonoma';
      const saved = localStorage.getItem('profolio-design-variant');
      if (saved === 'akari' || saved === 'tokonoma') return saved;
    }
    return 'tokonoma';
  });

  const setVariant = (v: DesignVariant) => {
    setVariantState(v);
    if (typeof window !== 'undefined') {
      localStorage.setItem('profolio-design-variant', v);
      const url = new URL(window.location.href);
      url.searchParams.set('variant', v === 'akari' ? '2' : '1');
      window.history.replaceState(null, '', url.toString());
    }
  };

  const toggleVariant = () => {
    setVariant(variant === 'tokonoma' ? 'akari' : 'tokonoma');
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
