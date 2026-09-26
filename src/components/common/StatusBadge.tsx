import React from 'react';

export interface StatusBadgeProps {
  isActive?: boolean;
  activeLabel?: string;
  completedLabel?: string;
  size?: 'sm' | 'md';
  customClass?: string;
  themePrimary?: string;
  badgeBg?: string;
  badgeBorder?: string;
  badgeText?: string;
  nodeActiveBg?: string;
  activeBgClass?: string;
  activeBorderClass?: string;
  activeTextClass?: string;
  activeDotBgClass?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  isActive = false,
  activeLabel = 'ACTIVE / 稼働中',
  completedLabel = 'COMPLETED',
  size = 'md',
  customClass = '',
  badgeBg,
  badgeBorder,
  badgeText,
  nodeActiveBg,
  activeBgClass,
  activeBorderClass,
  activeTextClass,
  activeDotBgClass,
}) => {
  const isSm = size === 'sm';
  const label = isActive ? activeLabel : completedLabel;

  const bg = activeBgClass || badgeBg;
  const border = activeBorderClass || badgeBorder;
  const text = activeTextClass || badgeText;
  const dotBg = activeDotBgClass || nodeActiveBg;

  // Custom theme overrides from experience milestones
  const activeClass = bg && border && text
    ? `${bg} ${border} ${text} border`
    : 'bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-600/25 dark:border-emerald-400/25 text-emerald-800 dark:text-emerald-400';

  const completedClass =
    'bg-stone-100 border border-stone-300 text-stone-600 dark:bg-[#1F1E1D] dark:border-[#3E3B37] dark:text-dark-ink-muted';

  const dotActiveClass = dotBg || 'bg-emerald-600 dark:bg-emerald-400';

  return (
    <span
      className={`inline-flex items-center font-mono font-bold uppercase tracking-wider transition-colors select-none ${
        isSm ? 'gap-1 px-2 py-0.5 text-[11px] rounded-full' : 'gap-1.5 px-2.5 py-0.5 text-[11px] rounded-full'
      } ${isActive ? activeClass : completedClass} ${customClass}`}
    >
      <span
        className={`rounded-full shrink-0 ${isSm ? 'w-1 h-1' : 'w-1.5 h-1.5'} ${
          isActive ? dotActiveClass : 'bg-stone-400 dark:bg-neutral-500'
        }`}
      />
      <span>{label}</span>
    </span>
  );
};
