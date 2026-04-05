"use client";
import React from 'react';
import Link from 'next/link';
import { MonitorPlay, BrainCircuit, Building2, Map, Users, Workflow, ShieldCheck, Cuboid } from 'lucide-react';

export default function CoreFeaturesGrid({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="section bg-white border-b">
       {showTitle && (
         <div className="container text-center mb-12 animate-up">
            <h2>Die 8 Säulen unserer Plattform</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Ein nahtloses System für Projektentwickler, Bauträger und Makler.</p>
         </div>
       )}
       <div className="container grid grid-4">
          {[
            { icon: <Cuboid size={28} />, title: '3D Erlebnisse', desc: 'Rundgänge & dynamische Grundrisse' },
            { icon: <BrainCircuit size={28} />, title: 'Künstliche Intelligenz', desc: 'Shadow Rendering & Content Gen' },
            { icon: <Building2 size={28} />, title: 'Projektmanagement', desc: 'Zentrale Verwaltung von Einheiten' },
            { icon: <Map size={28} />, title: 'Lage & Umgebung', desc: 'Interaktive Maps & Isochronen' },
            { icon: <MonitorPlay size={28} />, title: 'Lead-Generierung', desc: 'Landingpages & Auto-Exposés' },
            { icon: <Users size={28} />, title: 'CRM System', desc: 'Adressbuch & Benachrichtigungen' },
            { icon: <Workflow size={28} />, title: 'Schnittstellen', desc: 'OpenImmo Export & externe Sync' },
            { icon: <ShieldCheck size={28} />, title: 'Analytics', desc: 'Activity-Logs & Rechtemanagement' },
          ].map((f, i) => (
            <div key={i} className="card animate-up" style={{ animationDelay: `${i * 60}ms`, padding: '2rem 1.5rem', background: 'var(--bg-primary)' }}>
               <div style={{ width: '48px', height: '48px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--accent-primary)', borderRadius: '12px' }}>{f.icon}</div>
               <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
               <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{f.desc}</p>
            </div>
          ))}
       </div>
       <div className="text-center mt-12">
          <Link href="/features" className="btn btn-outline btn-lg" style={{ textTransform: 'uppercase' }}>Details auf der Feature-Seite</Link>
       </div>
    </section>
  );
}
