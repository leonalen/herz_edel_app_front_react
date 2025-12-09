import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, ...props }) => {
  if (!src) {
    return null;
  }

  // Reemplaza la extensión original por .webp
  const webpSrc = src.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={src} type={/jpe?g/i.test(src) ? 'image/jpeg' : 'image/png'} />
      <img src={src} {...props} />
    </picture>
  );
};

export default OptimizedImage;