import React from 'react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>Chi Siamo</h2>
        <div className="hosts-container">
          <div className="host-card">
            <div className="host-image">
              <img src="/images/about/alessandro.jpg" alt="Alessandro Romano - Co-host del podcast Spassatamente, esperto di psicologia" />
            </div>
            <div className="host-info">
              <h3>Alessandro Romano</h3>
              <div className="host-links">
                <a href="https://www.linkedin.com/in/alessandro-romano-1990/" target="_blank" rel="noopener noreferrer" className="host-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://www.aromano.dev" target="_blank" rel="noopener noreferrer" className="host-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="m3 12c0 3.5 4 7 9 7s9-3.5 9-7"/>
                    <path d="m3 12c0-3.5 4-7 9-7s9 3.5 9 7"/>
                  </svg>
                  Website
                </a>
              </div>
              <p>
                Ingegnere informatico esperto in AI e appassionato public speaker nel settore dell'intelligenza artificiale,
                Alessandro porta al podcast la sua curiosità scientifica e la sua passione per psicoterapia e psicologia.
                La sua capacità di rendere accessibili concetti complessi, unita al suo amore per lo sport e la tecnologia,
                lo rende l'aiutante perfetto di Nadja nel guidare conversazioni profonde sulla mente umana.
              </p>
            </div>
          </div>
          
          <div className="host-card">
            <div className="host-image">
              <img src="/images/host2.jpg" alt="Nadja Sada" />
            </div>
            <div className="host-info">
              <h3>Nadja Sada</h3>
              <div className="host-links">
                <a href="https://www.linkedin.com/in/nadja-sada-ab0469113/" target="_blank" rel="noopener noreferrer" className="host-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://www.nadjasada.com/" target="_blank" rel="noopener noreferrer" className="host-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="m3 12c0 3.5 4 7 9 7s9-3.5 9-7"/>
                    <path d="m3 12c0-3.5 4-7 9-7s9 3.5 9 7"/>
                  </svg>
                  Website
                </a>
              </div>
              <p>
                Da sempre attratta da ciò che si muove dentro le persone, Nadja è una psicoterapeuta formata in Germania 
                specializzata in Terapia della Gestalt. Con la sua capacità di creare spazi sicuri per l'ascolto autentico 
                e il lavoro sul "qui e ora", porta al podcast una profonda comprensione delle emozioni umane e delle 
                dinamiche che ci muovono. Lavora in italiano, tedesco e inglese, accompagnando persone da tutto il mondo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 