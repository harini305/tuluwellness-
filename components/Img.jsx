import images from '@/content/images.json';

// Serves the locally pre-sized WebP renditions in public/images with a matching srcset.
export default function Img({ name, alt, sizes = '100vw', priority = false, className, style, ...rest }) {
  const meta = images[name];
  if (!meta) throw new Error(`Unknown image: ${name}`);
  const widths = meta.widths;
  const largest = widths[widths.length - 1];
  const srcSet = widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ');

  return (
    <img
      src={`/images/${name}-${largest}.webp`}
      srcSet={widths.length > 1 ? srcSet : undefined}
      sizes={widths.length > 1 ? sizes : undefined}
      width={largest}
      height={Math.round((meta.h * largest) / meta.w)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      style={style}
      {...rest}
    />
  );
}
