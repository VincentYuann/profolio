/**
 * Centralized theme color mappings for hobby categories
 */
export const getCategoryStyle = (category?: string, _idx: number = 0): string => {
  const cat = (category || '').toLowerCase();
  if (cat.includes('food') || cat.includes('culinary') || cat.includes('tea') || cat.includes('coffee') || cat.includes('plant') || cat.includes('dining')) {
    return 'bg-bamboo/10 dark:bg-bamboo/15 border-bamboo/25 text-bamboo dark:text-bamboo-light';
  }
  return 'bg-light-surface-raised dark:bg-[#1F1E1D] border-light-border dark:border-[#3E3B37] text-light-ink-muted dark:text-dark-ink-muted';
};
