"use client";
import { useState } from "react";
import { IconCheck, IconLoader, IconSend } from "@/components/icons";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Der Versand ist fehlgeschlagen.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Der Versand ist fehlgeschlagen.");
    }
  }

  if (status === "sent") {
    return (
      <div className="overlap-plate" style={{ textAlign: "left", padding: "2.25rem 1.75rem" }}>
        <IconCheck size={40} style={{ color: "var(--blatt)", margin: "0 auto 1.25rem" }} />
        <h3>Anfrage angekommen.</h3>
        <p style={{ marginBottom: "1.5rem", fontFamily: "var(--font-serif)" }}>
          Antwort in der Regel innerhalb eines Werktags, meist mit Terminvorschlag
          am laufenden Objekt.
        </p>
        <button className="btn btn-outline btn-sm" onClick={() => setStatus("idle")}>
          Weitere Nachricht
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="overlap-plate" style={{ padding: "2rem 1.6rem 1.75rem", maxWidth: "none" }}>
      <p className="measure" style={{ marginBottom: "1.25rem" }}>Nachricht an Grünwald</p>
      <div className="grid grid-2" style={{ gap: "1.15rem", marginBottom: "1.15rem" }}>
        <div className="form-field">
          <label htmlFor="lead-name">Name *</label>
          <input id="lead-name" name="name" type="text" required autoComplete="name" placeholder="Name" />
        </div>
        <div className="form-field">
          <label htmlFor="lead-firma">Firma</label>
          <input id="lead-firma" name="firma" type="text" autoComplete="organization" placeholder="Firma" />
        </div>
        <div className="form-field">
          <label htmlFor="lead-email">E-Mail *</label>
          <input id="lead-email" name="email" type="email" required autoComplete="email" placeholder="name@firma.de" />
        </div>
        <div className="form-field">
          <label htmlFor="lead-telefon">Telefon</label>
          <input id="lead-telefon" name="telefon" type="tel" autoComplete="tel" placeholder="+49 …" />
        </div>
        <div className="form-field">
          <label htmlFor="lead-projekt">Projekt</label>
          <input id="lead-projekt" name="projekt" type="text" placeholder="z. B. Wohnquartier, 3 Häuser" />
        </div>
        <div className="form-field">
          <label htmlFor="lead-einheiten">Einheiten</label>
          <select id="lead-einheiten" name="einheiten" defaultValue="">
            <option value="" disabled>Bitte wählen</option>
            <option value="bis 10">bis 10</option>
            <option value="11–30">11–30</option>
            <option value="31–100">31–100</option>
            <option value="über 100">über 100</option>
          </select>
        </div>
      </div>
      <div className="form-field" style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="lead-nachricht">Nachricht</label>
          <textarea id="lead-nachricht" name="nachricht" rows={5} placeholder="Objekt, Lage, Zahl der WE, ob Renderings vorliegen." style={{ resize: "vertical" }} />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }} />
      {status === "error" && (
        <p role="alert" style={{ color: "var(--koralle)", fontWeight: 650, marginBottom: "1rem" }}>{errorMsg}</p>
      )}
      <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"} style={{ width: "100%" }}>
        {status === "sending" ? <><IconLoader size={18} /> Wird gesendet</> : <><IconSend size={18} /> Nachricht senden</>}
      </button>
      <p className="measure" style={{ marginTop: "1rem", marginBottom: 0 }}>
        Mit dem Senden willigen Sie in die Verarbeitung ein.{" "}
        <a href="/datenschutz" style={{ textDecoration: "underline" }}>Datenschutz</a>.
      </p>
    </form>
  );
}
