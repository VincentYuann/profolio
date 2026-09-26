import React from 'react';
import { useVariant } from '../../context/VariantContext';
import { Layers } from 'lucide-react';

export const VariantSwitcher: React.FC = () => {
  const { variant, setVariant } = useVariant();

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-1.5 p-1 rounded-full bg-light-surface-card/90 dark:bg-dark-surface-card/90 backdrop-blur-md border border-light-border dark:border-dark-border shadow-md text-xs font-mono select-none transition-all">
      <div className="flex items-center gap-1 pl-2 pr-1 text-light-ink-subtle dark:text-dark-ink-subtle">
        <Layers className="w-3.5 h-3.5 text-terracotta" />
        <span className="text-[10px] uppercase tracking-wider">DESIGN:</span>
      </div>

      <button
        type="button"
        onClick={() => setVariant('tokonoma')}
        className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
          variant === 'tokonoma'
            ? 'bg-light-button-dark dark:bg-dark-button-light text-light-on-dark dark:text-dark-on-light font-semibold shadow-xs'
            : 'text-light-ink-muted dark:text-dark-ink-muted hover:text-light-ink dark:hover:text-dark-ink'
        }`}
        title="Variant 1: Architectural Tokonoma & Pinned Horizon"
      >
        壱 · Pinned Horizon
      </button>

      <button
        type="button"
        onClick={() => setVariant('akari')}
        className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
          variant === 'akari'
            ? 'bg-light-button-dark dark:bg-dark-button-light text-light-on-dark dark:text-dark-on-light font-semibold shadow-xs'
            : 'text-light-ink-muted dark:text-dark-ink-muted hover:text-light-ink dark:hover:text-dark-ink'
        }`}
        title="Variant 2: Akari Studio Frame & Asymmetrical Mask"
      >
        弐 · Akari Studio Frame
      </button>

      <button
        type="button"
        onClick={() => setVariant('shokunin')}
        className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
          variant === 'shokunin'
            ? 'bg-light-button-dark dark:bg-dark-button-light text-light-on-dark dark:text-dark-on-light font-semibold shadow-xs'
            : 'text-light-ink-muted dark:text-dark-ink-muted hover:text-light-ink dark:hover:text-dark-ink'
        }`}
        title="Variant 3: Shokunin Engawa Pavilion & Kinetic Substrates"
      >
        参 · Shokunin Engawa
      </button>
    </div>
  );
};
