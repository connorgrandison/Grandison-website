import { projects, services } from './data.mjs';

// Original supplied JPEGs: widely supported by messaging and social preview crawlers.
// Keep versioned filenames when replacing photos, because previews may be cached.
export function socialPhoto(url) {
  const project = projects.find(item => url === `/projects/${item.slug}/`);
  const service = services.find(item => item.path === url);
  const image = project?.image ?? service?.image ?? 'bath';
  const photo = projects.find(item => item.image === image);
  return {
    path: `/assets/share-${image}-v1.jpg`,
    width: 1440,
    height: image === 'boiler' ? 1800 : image === 'bathroom' ? 1914 : 1920,
    alt: photo.alt,
  };
}
