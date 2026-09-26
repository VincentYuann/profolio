import React from 'react';

export interface SectionSideBackdropProps {
  /** Day theme 16:9 texture background image URL */
  textureDay: string;
  /** Night theme 16:9 texture background image URL */
  textureNight: string;
  /** Sumi-e painting decoration image URL placed on top of the texture */
  painting: string;
  /** Accessible alt description for the painting decoration */
  paintingAlt?: string;
  /** Which sides to render: 'both' | 'left' | 'right' */
  side?: 'both' | 'left' | 'right';
  /** Opacity for the texture layer in day mode (default: 0.55) */
  textureOpacityDay?: number;
  /** Opacity for the texture layer in night mode (default: 0.45) */
  textureOpacityNight?: number;
  /** Opacity for the painting decoration layer in day mode (default: 0.38) */
  paintingOpacityDay?: number;
  /** Opacity for the painting decoration layer in night mode (default: 0.22) */
  paintingOpacityNight?: number;
  /** Optional custom class for the outer backdrop container */
  className?: string;
  /** Whether the painting on the right flank should mirror horizontally (default: true) */
  mirrorRight?: boolean;
}

/**
 * SectionSideBackdrop
 * Renders 16:9 texture backgrounds and sumi-e painting decorations strictly on the side flanks
 * of a section, blending smoothly inward with gradient masks so the center cards and text
 * remain clean, legible, and completely untouched.
 * Fully compatible with Day / Night themes.
 */
export const SectionSideBackdrop: React.FC<SectionSideBackdropProps> = ({
  textureDay,
  textureNight,
  painting,
  paintingAlt = 'Sumi-e ink wash painting decoration',
  side = 'both',
  textureOpacityDay = 0.55,
  textureOpacityNight = 0.45,
  paintingOpacityDay = 0.38,
  paintingOpacityNight = 0.22,
  className = '',
  mirrorRight = true,
}) => {
  const showLeft = side === 'both' || side === 'left';
  const showRight = side === 'both' || side === 'right';

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
      aria-hidden="true"
    >
      {/* LEFT FLANK: Texture + Painting Decoration */}
      {showLeft && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1/3 sm:w-2/5 lg:w-[32%] xl:w-[28%] max-w-[480px] pointer-events-none overflow-hidden select-none transition-opacity duration-500"
          style={{
            maskImage: 'linear-gradient(to right, black 30%, rgba(0,0,0,0.6) 65%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 30%, rgba(0,0,0,0.6) 65%, transparent 100%)',
          }}
        >
          {/* Layer 1: 16:9 Background Texture (Day) */}
          <img
            src={textureDay}
            alt=""
            className="absolute inset-0 w-full h-full object-cover dark:hidden mix-blend-multiply transition-opacity duration-300"
            style={{ opacity: textureOpacityDay }}
            loading="lazy"
            decoding="async"
          />

          {/* Layer 1: 16:9 Background Texture (Night) */}
          <img
            src={textureNight}
            alt=""
            className="absolute inset-0 w-full h-full object-cover hidden dark:block mix-blend-screen transition-opacity duration-300"
            style={{ opacity: textureOpacityNight }}
            loading="lazy"
            decoding="async"
          />

          {/* Layer 2: Painting Image Decoration (Day) */}
          <img
            src={painting}
            alt={paintingAlt}
            className="absolute inset-0 w-full h-full object-cover sm:object-contain object-left dark:hidden mix-blend-multiply transition-opacity duration-300"
            style={{ opacity: paintingOpacityDay }}
            loading="lazy"
            decoding="async"
          />

          {/* Layer 2: Painting Image Decoration (Night) */}
          <img
            src={painting}
            alt={paintingAlt}
            className="absolute inset-0 w-full h-full object-cover sm:object-contain object-left hidden dark:block mix-blend-screen dark:filter dark:invert dark:brightness-90 dark:contrast-125 transition-opacity duration-300"
            style={{ opacity: paintingOpacityNight }}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {/* RIGHT FLANK: Texture + Painting Decoration */}
      {showRight && (
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 sm:w-2/5 lg:w-[32%] xl:w-[28%] max-w-[480px] pointer-events-none overflow-hidden select-none transition-opacity duration-500"
          style={{
            maskImage: 'linear-gradient(to left, black 30%, rgba(0,0,0,0.6) 65%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 30%, rgba(0,0,0,0.6) 65%, transparent 100%)',
          }}
        >
          {/* Layer 1: 16:9 Background Texture (Day) */}
          <img
            src={textureDay}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover dark:hidden mix-blend-multiply transition-opacity duration-300 ${
              mirrorRight ? 'scale-x-[-1]' : ''
            }`}
            style={{ opacity: textureOpacityDay }}
            loading="lazy"
            decoding="async"
          />

          {/* Layer 1: 16:9 Background Texture (Night) */}
          <img
            src={textureNight}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover hidden dark:block mix-blend-screen transition-opacity duration-300 ${
              mirrorRight ? 'scale-x-[-1]' : ''
            }`}
            style={{ opacity: textureOpacityNight }}
            loading="lazy"
            decoding="async"
          />

          {/* Layer 2: Painting Image Decoration (Day) */}
          <img
            src={painting}
            alt={paintingAlt}
            className={`absolute inset-0 w-full h-full object-cover sm:object-contain object-right dark:hidden mix-blend-multiply transition-opacity duration-300 ${
              mirrorRight ? 'scale-x-[-1]' : ''
            }`}
            style={{ opacity: paintingOpacityDay }}
            loading="lazy"
            decoding="async"
          />

          {/* Layer 2: Painting Image Decoration (Night) */}
          <img
            src={painting}
            alt={paintingAlt}
            className={`absolute inset-0 w-full h-full object-cover sm:object-contain object-right hidden dark:block mix-blend-screen dark:filter dark:invert dark:brightness-90 dark:contrast-125 transition-opacity duration-300 ${
              mirrorRight ? 'scale-x-[-1]' : ''
            }`}
            style={{ opacity: paintingOpacityNight }}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
};
