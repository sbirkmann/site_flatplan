"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="badge">Digital Real Estate Solutions</span>
          <h1>Der interaktive <span className="gradient-text">3D Wohnungsfinder</span> für Ihren Neubauvertrieb</h1>
          <p>
            Vom Gebäude bis zur einzelnen Wohneinheit – begeistern Sie Interessenten mit einer 
            fotorealistischen 3D-Erfahrung. Direkt im Browser, plattformunabhängig und nahtlos 
            in Ihre Website integriert.
          </p>
          <div className="cta-group">
            <Link href="/kontakt" className="btn-primary">
              Jetzt Demo anfragen <ChevronRight size={20} />
            </Link>
            <Link href="#demo" className="btn-outline">
              <Play size={20} className="fill-primary" /> Live erleben
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="image-wrapper glass-card">
            <img src="/showcase-3d.png" alt="flatplan.de 3D Finder Preview" className="hero-img floating" />
          </div>
          <div className="stats-badge glass-card">
             <strong>100%</strong> <span>Browser-basiert</span>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
        }
        .hero-text h1 {
          font-size: 3.5rem;
          margin: 1.5rem 0;
          line-height: 1.1;
        }
        @media (max-width: 1100px) {
          .hero-text h1 { font-size: 2.75rem; }
        }
        .hero-text p {
          font-size: 1.25rem;
          color: var(--muted-foreground);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 550px;
        }
        .badge {
          background: rgba(0, 210, 255, 0.1);
          color: var(--accent);
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .cta-group {
          display: flex;
          gap: 1.5rem;
        }
        .image-wrapper {
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .hero-img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          display: block;
        }
        .stats-badge {
          position: absolute;
          bottom: 10%;
          left: -10%;
          padding: 1.25rem 2rem;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }
        .stats-badge strong {
          font-size: 1.5rem;
          color: var(--accent);
        }
        .hero-visual {
          position: relative;
        }
        @media (max-width: 991px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text h1 { margin-left: auto; margin-right: auto; }
          .hero-text p { margin-left: auto; margin-right: auto; }
          .cta-group { justify-content: center; }
          .stats-badge { left: 5%; bottom: -5%; }
        }
      `}</style>
    </section>
  );
}
