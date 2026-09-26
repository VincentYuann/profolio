import React from 'react';
import { useVariant } from '../../../context/VariantContext';
import { HeroTokonoma } from './HeroTokonoma';
import { HeroAkariStudio } from './HeroAkariStudio';
import { HeroShokunin } from './HeroShokunin';

interface HeroProps {
  onNavigate?: (view: 'home' | 'projects' | 'resume', sectionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { variant } = useVariant();

  if (variant === 'shokunin') {
    return <HeroShokunin onNavigate={onNavigate} />;
  }

  if (variant === 'akari') {
    return <HeroAkariStudio onNavigate={onNavigate} />;
  }

  return <HeroTokonoma onNavigate={onNavigate} />;
};
