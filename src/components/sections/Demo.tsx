"use client";
import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section id="demo" className="demo">
      <div className="container">
        <div className="section-header">
           <span className="badge">Live Demo</span>
           <h2>Erleben Sie den flatplan.de Wohnungsfinder in Aktion</h2>
           <p>Interaktive Bedienung, flüssige Navigation und maximale Transparenz für Ihre Kunden.</p>
        </div>
        
        <motion.div 
          className="iframe-container glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe 
            src="https://app.flatplan.de/project/2" 
            title="flatplan.de Live Project Demo"
            width="100%"
            height="800px"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
      <style jsx>{`
        .demo { background: white; padding-bottom: 8rem; }
        .section-header { text-align: center; margin-bottom: 4rem; max-width: 800px; margin-left: auto; margin-right: auto; }
        .section-header h2 { font-size: 2.5rem; margin-top: 1.25rem; }
        .section-header p { font-size: 1.15rem; color: var(--muted-foreground); margin-top: 1rem; }
        .iframe-container { width: 100%; border-radius: 1rem; overflow: hidden; padding: 1rem; height: 832px; box-shadow: 0 40px 100px -20px rgba(0, 31, 63, 0.1); }
        iframe { border-radius: 0.5rem; }
        @media (max-width: 768px) {
          .iframe-container { height: 500px; }
          iframe { height: 468px; }
        }
      `}</style>
    </section>
  );
}
