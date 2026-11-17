import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface BrandLogoProps {
  variant?: 'horizontal' | 'icon';
  className?: string;
  imgClassName?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  imgClassName = '',
}) => {
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={SITE_CONFIG.brand.logos.iconOnly}
          alt={`${SITE_CONFIG.brand.name} Icon`}
          className={`w-auto object-contain ${imgClassName || 'h-9'}`}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={SITE_CONFIG.brand.logos.horizontalDark}
        alt={`${SITE_CONFIG.brand.name} — ${SITE_CONFIG.brand.tagline}`}
        className={`w-auto object-contain transition-opacity duration-200 ${
          imgClassName || 'h-9 sm:h-11'
        }`}
        loading="eager"
      />
    </div>
  );
};
