"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section id="showcase" className="showcase">
      <div className="container">
        <div className="showcase-item">
          <motion.div 
            className="showcase-img glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/showcase-3d.png" alt="3D Gebäudeübersicht" />
          </motion.div>
          <motion.div 
            className="showcase-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="badge">Visualisierung</span>
            <h2>Interaktive Gebäudeübersicht</h2>
            <p>
              Geben Sie Ihren Kunden die volle Kontrolle. Die 3D-Übersicht ermöglicht es, 
              das Gebäude aus jedem Winkel zu betrachten und Wohneinheiten direkt 
              farblich hervorzuheben. 
            </p>
            <ul>
              <li>Individuelle Farbkennzeichnung nach Verfügbarkeit</li>
              <li>Intuitive Navigation direkt am 3D-Modell</li>
              <li>Hochauflösende Texturen für maximale Realitätsnähe</li>
            </ul>
          </motion.div>
        </div>

        <div className="showcase-item alternate">
          <motion.div 
            className="showcase-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="badge">Detailansicht</span>
            <h2>Detaillierte Einheits-Einsichten</h2>
            <p>
              Jede Wohnung wird in ihrer ganzen Vielfalt präsentiert. Der fliegende 
              Wechsel zwischen 2D-Grundrissschnitt und 3D-Innenansicht sorgt 
              für eine perfekte Vorstellungskraft.
            </p>
            <ul>
              <li>Automatische Zimmerauflistung mit m²-Angaben</li>
              <li>Direkte Kalkulation und Finanzierungsanbindung</li>
              <li>Favoriten-Funktion für die Merkliste</li>
            </ul>
          </motion.div>
          <motion.div 
            className="showcase-img glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/showcase-detail.png" alt="Wohnungs-Detailansicht" />
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .showcase { padding: 8rem 0; overflow: hidden; background: linear-gradient(180deg, white 0%, var(--muted) 100%); }
        .showcase-item { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 6rem; align-items: center; margin-bottom: 10rem; }
        .showcase-item.alternate { grid-template-columns: 0.7fr 1.3fr; }
        .showcase-item:last-child { margin-bottom: 0; }
        .showcase-img { padding: 1.25rem; }
        .showcase-img img { width: 100%; border-radius: 0.5rem; display: block; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .showcase-text h2 { font-size: 2.25rem; margin-top: 1rem; margin-bottom: 1.5rem; }
        .showcase-text p { font-size: 1.15rem; color: var(--muted-foreground); margin-bottom: 2rem; line-height: 1.6; }
        .showcase-text ul { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
        .showcase-text li { position: relative; padding-left: 2rem; color: var(--primary); font-weight: 500; font-size: 1.05rem; }
        .showcase-text li::before { content: "✓"; position: absolute; left: 0; top: 0; color: var(--secondary); font-weight: 900; }
        @media (max-width: 991px) {
           .showcase-item, .showcase-item.alternate { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
           .showcase-img { grid-row: 1; }
           .showcase-text ul { display: inline-flex; text-align: left; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
