import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Optimize external image URLs for performance.
 * Reduces quality to ~70 and limits width for Unsplash/Pexels images.
 */
export function optimizeImageUrl(url, width = 800, quality = 70) {
  if (!url) return url;
  if (url.includes('unsplash.com')) {
    const base = url.split('?')[0];
    return `${base}?auto=format&fit=crop&w=${width}&q=${quality}`;
  }
  if (url.includes('pexels.com')) {
    return url.replace(/w=\d+/, `w=${width}`).replace(/h=\d+/, `h=${Math.round(width * 0.65)}`);
  }
  return url;
}
