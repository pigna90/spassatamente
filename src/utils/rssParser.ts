export interface Episode {
  episode_number: number;
  title: string;
  date: string;
  imageUrl: string;
  spotifyUrl: string;
  description?: string;
}

export const fetchRSSFeed = async (): Promise<Episode[]> => {
  try {
    const rssUrl = 'https://anchor.fm/s/eeae2538/podcast/rss';
    console.log('🚀 Starting RSS fetch from:', rssUrl);
    
    // Use RSS2JSON service like in mydataguest project - much more reliable for GitHub Pages
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
    const data = await response.json();
    
    console.log('📦 RSS2JSON response:', data);
    
    if (data.status !== 'ok') {
      throw new Error('Failed to fetch RSS feed');
    }
    
    console.log(`📻 Found ${data.items.length} episodes in RSS`);
    
    const episodes: Episode[] = data.items.map((item: any, index: number) => {
      // Extract episode number from title if available
      const episodeMatch = item.title.match(/(?:Episodio|Ep\.?\s*|Episode\s*)(\d+)/i);
      const episodeNumber = episodeMatch ? parseInt(episodeMatch[1]) : data.items.length - index;
      
      // Clean up description
      const cleanDescription = item.description
        .replace(/<[^>]*>/g, '')
        .replace(/&[^;]+;/g, ' ')
        .trim();
      
      // Extract Spotify link from description, link, or enclosure
      let spotifyUrl = null;
      
      // First try to find Spotify link in description
      const descriptionSpotifyMatch = item.description.match(/https:\/\/[^\s"<]*spotify[^\s"<]*/i);
      if (descriptionSpotifyMatch) {
        spotifyUrl = descriptionSpotifyMatch[0];
      }
      
      // If not found, check if the main link is a Spotify link
      if (!spotifyUrl && item.link && item.link.includes('spotify')) {
        spotifyUrl = item.link;
      }
      
      // If still not found, check enclosure (for direct audio links)
      if (!spotifyUrl && item.enclosure && item.enclosure.link && item.enclosure.link.includes('spotify')) {
        spotifyUrl = item.enclosure.link;
      }
      
      console.log(`📻 Episode ${episodeNumber}: "${item.title}"`);
      console.log(`🖼️ Image: ${item.thumbnail || data.feed.image || '/logo.png'}`);
      console.log(`🎵 Spotify URL: ${spotifyUrl || item.link}`);
      
      return {
        episode_number: episodeNumber,
        title: item.title,
        date: formatDate(item.pubDate),
        imageUrl: item.thumbnail || data.feed.image || '/logo.png',
        spotifyUrl: spotifyUrl || item.link,
        description: cleanDescription
      };
    });
    
    // Sort by episode number descending (newest first)
    console.log('✅ Processed episodes successfully:', episodes.length);
    return episodes.sort((a, b) => b.episode_number - a.episode_number);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    
    // Return fallback data with some sample episodes
    return [
      {
        episode_number: 19,
        title: "La dopamina",
        date: "14 Marzo 2025",
        imageUrl: "/logo.png",
        spotifyUrl: "https://open.spotify.com/show/4XjGWWdwqEqxxSd49xE1AH"
      },
      {
        episode_number: 18,
        title: "I traumi nelle relazioni",
        date: "3 Febbraio 2025",
        imageUrl: "/logo.png",
        spotifyUrl: "https://open.spotify.com/show/4XjGWWdwqEqxxSd49xE1AH"
      },
      {
        episode_number: 17,
        title: "Ritorno a casa! La doppia vita di un expat",
        date: "19 Dicembre 2024",
        imageUrl: "/logo.png",
        spotifyUrl: "https://open.spotify.com/show/4XjGWWdwqEqxxSd49xE1AH"
      }
    ];
  }
};

const formatDate = (pubDate: string): string => {
  try {
    const date = new Date(pubDate);
    return date.toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch {
    return pubDate;
  }
};

// Utility functions (currently unused but may be useful later)
// const extractEpisodeNumber = (title: string): number | null => {
//   const matches = title.match(/(?:episodio|ep\.?|#)\s*(\d+)/i);
//   return matches ? parseInt(matches[1], 10) : null;
// };
//
// const cleanTitle = (title: string): string => {
//   return title.replace(/^(?:episodio|ep\.?|#)\s*\d+\s*[:\-\s]*/i, '').trim();
// };
//
// const cleanDescription = (description: string): string => {
//   return description.replace(/<[^>]*>/g, '').trim();
// };