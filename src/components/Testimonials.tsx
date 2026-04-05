"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Der 3D Wohnungsfinder hat unseren Vorverkauf um 40% beschleunigt. Die Bankenfinanzierung stand innerhalb von 3 Wochen.",
    name: "Thomas Z.",
    role: "Geschäftsführer, Zinn Architektur",
    stars: 5,
  },
  {
    text: "Seit wir den Flatfinder in unsere Immoscout-Landingpages einbinden, hat sich die Lead-Qualität verdoppelt. Kein Vergleich zu vorher.",
    name: "Sandra M.",
    role: "Vertriebsleiterin, Sparkasse Immobilien",
    stars: 5,
  },
  {
    text: "Als Makler bin ich jetzt der Einzige in der Region, der Bauträgern ein solches System anbieten kann. Das sichert mir Alleinaufträge.",
    name: "Markus H.",
    role: "Inhaber, HM Immobilien München",
    stars: 5,
  },
];

export default function Testimonials({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark';
  
  return (
    <section className={isDark ? 'bg-dark' : 'bg-soft'} style={{ padding: '6rem 0', borderBottom: isDark ? 'none' : '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <span style={{ color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>Kundenstimmen</span>
          <h2 style={{ color: isDark ? 'white' : 'var(--text-primary)' }}>Was unsere Kunden sagen</h2>
        </div>
        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <div key={i} className="animate-up" style={{ animationDelay: `${i * 100}ms`, background: isDark ? '#1e293b' : 'white', border: isDark ? '1px solid #334155' : '1px solid var(--border-light)', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <Quote size={32} color="var(--accent-primary)" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', flex: 1, marginBottom: '2rem', lineHeight: 1.7, color: isDark ? '#e2e8f0' : 'var(--text-primary)' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={18} color="#eab308" fill="#eab308" />
                ))}
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1rem', color: isDark ? 'white' : 'var(--text-primary)' }}>{t.name}</strong>
                <span style={{ fontSize: '0.9rem', color: isDark ? '#94a3b8' : 'var(--text-secondary)' }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
