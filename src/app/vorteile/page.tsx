import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import CoreFeaturesGrid from "@/components/CoreFeaturesGrid";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vorteile & Funktionen | flatplan.de interaktiver Wohnungsfinder",
  description: "Erfahren Sie alles über die Funktionen von flatplan.de: 3D Visualisierung, PDF-Exposés, Lead-Management und vieles mehr für Ihren Immobilienvertrieb.",
};

export default function Vorteile() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '8rem' }}>
        <section className="container">
          <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1.5rem' }}>Funktionen & Vorteile</h1>
          <p style={{ textAlign: 'center', color: 'var(--muted-foreground)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Unsere Lösung wurde speziell für Bauträger und Immobilienvermarkter entwickelt, 
            um den Verkaufsprozess von Neubauprojekten zu beschleunigen und zu vereinfachen.
          </p>
        </section>
        <CoreFeaturesGrid />
        <Features />
        <Showcase />
      </div>
      <Footer />
    </main>
  );
}
