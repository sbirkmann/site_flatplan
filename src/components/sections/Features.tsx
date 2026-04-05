"use client";
import { motion } from 'framer-motion';
import { 
  Box, 
  Layers, 
  Filter, 
  FileText, 
  Send, 
  Zap, 
  Smartphone, 
  BarChart3 
} from 'lucide-react';

const features = [
  {
    icon: <Box />,
    title: "Interaktive 3D Übersicht",
    description: "Machen Sie das gesamte Bauvorhaben erlebbar. Alle Wohnungen sind direkt per Klick im 3D-Modell auswählbar."
  },
  {
    icon: <Layers />,
    title: "2D & 3D Grundrisse",
    description: "Umfassende Visualisierung jeder Einheit. Nutzer können flexibel zwischen Grundriss-Ansichten wechseln."
  },
  {
    icon: <Filter />,
    title: "Echtzeit-Filterung",
    description: "Blitzschnelle Suche nach Zimmeranzahl, Wohnfläche, Preis oder Etage für eine optimale Nutzerführung."
  },
  {
    icon: <FileText />,
    title: "Automatisches Exposé",
    description: "Generierung strukturierter PDF-Exposés für einzelne oder mehrere Einheiten mit einem Klick."
  },
  {
    icon: <Send />,
    title: "Integriertes Lead-Management",
    description: "Direkte Kontaktmöglichkeiten aus der Wohnungssuche. Höhere Conversion durch intuitive CTAs."
  },
  {
    icon: <Zap />,
    title: "Web-basiert & schnell",
    description: "Keine App-Installation nötig. Unsere Lösung lädt in Millisekunden direkt in jedem Webbrowser."
  },
  {
    icon: <Smartphone />,
    title: "Multi-Device Support",
    description: "Ob Desktop, Tablet oder Smartphone – Ihr interaktiver Wohnungsfinder sieht überall perfekt aus."
  },
  {
    icon: <BarChart3 />,
    title: "Analytics Integration",
    description: "Erfahren Sie, welche Einheiten besonders beliebt sind, und optimieren Sie Ihre Marketing-Strategie."
  }
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <span className="badge">Funktionsumfang</span>
          <h2>Alles, was Ihr Projekt für den digitalen Vertrieb braucht</h2>
        </div>
        
        <div className="grid grid-4">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="feature-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .features { background: var(--muted); }
        .section-header { text-align: center; margin-bottom: 5rem; max-width: 800px; margin-left: auto; margin-right: auto; }
        .section-header h2 { font-size: 2.5rem; margin-top: 1.5rem; }
        .feature-card { padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; transition: transform 0.3s ease; }
        .feature-card:hover { transform: translateY(-10px); }
        .feature-icon { color: var(--accent); padding: 0.75rem; background: rgba(0, 118, 163, 0.1); border-radius: 12px; width: fit-content; display: flex; align-items: center; justify-content: center; }
        .feature-card h3 { font-size: 1.25rem; }
        .feature-card p { color: var(--muted-foreground); line-height: 1.5; font-size: 0.95rem; }
        @media (max-width: 768px) {
           .grid-4 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
