import React, { useState, useEffect } from 'react';
import { EpisodeCard } from './EpisodeCard';
import { fetchRSSFeed, Episode } from '../utils/rssParser';
import '../styles/episodes.css';

export const PodcastEpisodes: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [allEpisodes, setAllEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        setLoading(true);
        const episodes = await fetchRSSFeed();
        setAllEpisodes(episodes);
        setError(null);
      } catch (err) {
        console.error('Failed to load episodes:', err);
        setError('Failed to load episodes');
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, []);

  const handlePlay = (episode: Episode) => {
    window.open(episode.spotifyUrl, '_blank');
  };

  const handleViewAllEpisodes = () => {
    window.open('https://open.spotify.com/show/34H3WSuA2XnSlFNoDKx27c', '_blank');
  };

  if (loading) {
    return (
      <section id="episodes-section" className="episodes-section">
        <h2>Episodi</h2>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Caricamento episodi...</p>
        </div>
      </section>
    );
  }

  if (error || allEpisodes.length === 0) {
    return (
      <section id="episodes-section" className="episodes-section">
        <h2>Episodi</h2>
        <div className="error-container">
          <p>Non è possibile caricare gli episodi al momento.</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Riprova
          </button>
        </div>
      </section>
    );
  }

  const featuredEpisode = allEpisodes[0];
  const recentEpisodes = allEpisodes.slice(1, 5); // Always show only 5 episodes
  const hasMoreEpisodes = allEpisodes.length > 6;

  return (
    <section id="episodes-section" className="episodes-section">
      <h2>Episodi</h2>
      
      {/* Featured Episode */}
      <div className="featured-episode">
        <div className="featured-content">
          <div className="featured-info">
            <span className="episode-badge">Ultimo Episodio</span>
            <h3>{featuredEpisode.title}</h3>
            <p className="episode-date">{featuredEpisode.date}</p>
            <button 
              onClick={() => handlePlay(featuredEpisode)}
              className="featured-play-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1DB954"/>
                <polygon points="10,8 16,12 10,16" fill="white"/>
              </svg>
              Ascolta su Spotify
            </button>
          </div>
          <div className="featured-image">
            <img src={featuredEpisode.imageUrl} alt={featuredEpisode.title} />
          </div>
        </div>
      </div>

      {/* Episodes List */}
      <div className="episodes-list">
        <h3>Altri Episodi</h3>
        <div className="episodes-grid-new">
          {recentEpisodes.map((episode) => (
            <div key={episode.episode_number} className="episode-row">
              <div className="episode-thumbnail">
                <img src={episode.imageUrl} alt={episode.title} />
              </div>
              <div className="episode-details">
                <h4>{episode.title}</h4>
                <p className="episode-date-small">{episode.date}</p>
              </div>
              <button 
                onClick={() => handlePlay(episode)}
                className="spotify-play-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.348-1.435-5.304-1.76-8.785-.964-.329.075-.67-.133-.746-.462-.075-.329.132-.67.462-.746 3.809-.871 7.077-.496 9.713 1.115.295.18.387.563.207.857zm1.223-2.723c-.226.367-.706.482-1.073.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.125-.849-.108-.975-.521-.125-.413.108-.849.521-.975 3.632-1.102 8.147-.568 11.234 1.332.367.226.482.706.257 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.129-1.166-.622-.15-.493.129-1.016.622-1.166 3.532-1.073 9.404-.865 13.115 1.338.445.264.590.837.326 1.282-.264.445-.837.590-1.282.326z" fill="#1DB954"/>
                </svg>
                <span>Ascolta</span>
              </button>
            </div>
          ))}
        </div>
        
        {hasMoreEpisodes && (
          <button 
            onClick={handleViewAllEpisodes}
            className="show-more-button"
          >
            Vedi Tutti gli Episodi su Spotify
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};