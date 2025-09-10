// SEO utility functions
export const generateMetaDescription = (episodeTitle?: string): string => {
  if (episodeTitle) {
    return `Ascolta "${episodeTitle}" su Spassatamente, il podcast che esplora la mente umana attraverso psicologia, neuroscienze e riflessioni. Con Alessandro Romano e Nadja Sada.`;
  }
  return "Spassatamente è un podcast che esplora la mente umana attraverso storie, scienza e riflessioni. Ascolta episodi su psicologia, neuroscienze e benessere mentale con Alessandro Romano e Nadja Sada.";
};

export const generatePageTitle = (section?: string): string => {
  const baseTitle = "Spassatamente - Un podcast a spasso nella mente";
  
  switch (section) {
    case 'episodes':
      return `Episodi | ${baseTitle}`;
    case 'about':
      return `Chi Siamo | ${baseTitle}`;
    case 'contact':
      return `Contatti | ${baseTitle}`;
    default:
      return `${baseTitle} | Psicologia e Scienza`;
  }
};

export const getCanonicalUrl = (path: string = ''): string => {
  const baseUrl = 'https://spassatamente.com';
  return `${baseUrl}${path}`;
};

export const generateKeywords = (episodeTitle?: string): string => {
  const baseKeywords = [
    'podcast italiano',
    'psicologia',
    'neuroscienze', 
    'mente umana',
    'benessere mentale',
    'salute mentale',
    'Alessandro Romano',
    'Nadja Sada',
    'podcast psicologia',
    'scienza della mente',
    'riflessioni psicologiche'
  ];
  
  if (episodeTitle) {
    // Extract meaningful keywords from episode title
    const episodeKeywords = episodeTitle
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 3)
      .slice(0, 3);
    
    return [...baseKeywords, ...episodeKeywords].join(', ');
  }
  
  return baseKeywords.join(', ');
};

export const generateStructuredData = (type: 'website' | 'episode', data?: any) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type === 'website' ? "WebSite" : "PodcastEpisode",
    "name": "Spassatamente",
    "url": "https://spassatamente.com",
    "inLanguage": "it-IT"
  };

  if (type === 'episode' && data) {
    return {
      ...baseData,
      "@type": "PodcastEpisode",
      "name": data.title,
      "description": data.description,
      "datePublished": data.pubDate,
      "partOfSeries": {
        "@type": "PodcastSeries",
        "name": "Spassatamente",
        "url": "https://spassatamente.com"
      }
    };
  }

  return baseData;
};