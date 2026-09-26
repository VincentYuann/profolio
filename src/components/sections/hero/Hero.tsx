import React from 'react';
import { HeroAkariStudio } from './HeroAkariStudio';

interface HeroProps {
  onNavigate?: (view: 'home' | 'projects' | 'resume', sectionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return <HeroAkariStudio onNavigate={onNavigate} />;
};
