# Projekt: Koch — Persönliches digitales Kochbuch (PWA)

## Kurzbeschreibung (für Karten-/Übersichtsansicht)

**Koch** ist eine selbst entwickelte Progressive Web App (PWA) — ein persönliches digitales
Kochbuch mit über 100 strukturierten Rezepten, Kochmodus, Wochenplaner, Einkaufsliste und
optionalem KI-Assistenten. Offline-first, installierbar, ohne Account und ohne Backend —
mit Google Drive als Datensynchronisation. Komplett selbst konzipiert, architektiert und
über mehrere Versionsstufen iterativ weiterentwickelt.

---

## Was es ist

Koch ist eine persönliche Rezeptsammlung, die aus einer einfachen Notiz-Idee zu einer
vollwertigen, mehrsprachigen Web-App gewachsen ist. Die App läuft komplett offline im
Browser bzw. als installierte PWA auf dem Smartphone, speichert alle Daten lokal
(IndexedDB) und synchronisiert sie optional über eine einzige JSON-Datei in Google Drive.
Es gibt keinen Server, keinen Account-Zwang und keine laufenden Kosten — die App ist
vollständig kostenlos und offline nutzbar; KI-Funktionen sind ein optionales Extra, das
jede:r Nutzer:in mit dem eigenen Anthropic-API-Key freischalten kann (Bring-Your-Own-Key,
"BYOK").

Die aktuelle Version (v2.6) läuft produktiv und wird laufend erweitert. Eine Vorversion
(v1) ist parallel weiter live und bildet die Referenz für Feature-Parität.

---

## Was ich gemacht habe

- **End-to-End-Konzeption**: von der Idee ("ich will meine Rezepte digital organisieren")
  über die Architektur bis zur produktiven, täglich genutzten App.
- **Architektur-Design**: bewusste Entscheidung für eine bundlerfreie Vanilla-JS/Web-
  Components-Architektur (keine schweren Frameworks), damit die App jederzeit ohne
  Build-Schritt direkt editierbar und über GitHub Pages hostbar bleibt.
- **Datenmodell & Schema**: ein festes, dokumentiertes Schema mit 16 Rezeptkategorien als
  "Vertrag" zwischen App, Datenbank und KI-gestützten Tools — additive
  Schema-Erweiterungen (Tags, strukturierte Tipps) ohne Breaking Changes.
- **Offline-first-Strategie**: Service Worker mit differenzierter Cache-Strategie
  (network-first für die App-Hülle, cache-first für Assets, niemals für Google-APIs) plus
  IndexedDB als lokale Datenquelle.
- **Google-Drive-Sync**: Authentifizierung über Google Identity Services mit minimalem
  `drive.file`-Scope (datenschutzfreundlich — die App sieht nur ihre eigenen Dateien),
  In-Place-Update einer einzigen `rezepte.json` ohne Duplikate.
- **BYOK-Modell für KI-Funktionen**: eigenständig entwickeltes Lizenz-/Kostenmodell, das
  die App frei teilbar macht, ohne dass der Eigentümer für die KI-Nutzung anderer zahlt —
  jede:r nutzt den eigenen API-Key, lokal gespeichert, nie synchronisiert.
- **Feature-Entwicklung über mehrere Versionen**: Kochbuch (Suche, Filter, Favoriten,
  Bewertungen), Kochmodus (Portionsrechner, Schritt-Timer, Wachsperren-Steuerung für
  Display), Wochenplaner (regelbasiert, kein KI nötig), Einkaufsliste (mit
  Vorrats-Abgleich und Gang-Sortierung), Vorrats-/Kühlschrank-Verwaltung mit KI-Fotoscan,
  "Koch-Match" (Tinder-artiges Swipe-Interface für Rezeptauswahl), Rezepterfassung per
  Foto/URL/KI.
- **Internationalisierung**: vollständige UI-Übersetzung in vier Sprachen (Deutsch,
  Englisch, Spanisch, Dänisch) inklusive automatisierter Tests auf Schlüssel-Parität
  zwischen allen Sprachversionen.
- **Qualitätssicherung**: über 145 automatisierte Tests, strukturierte Bug-Sweeps,
  dokumentierte Versions-Changelogs.
- **Geführte autonome Weiterentwicklung**: Architektur und Build-Pläne so spezifiziert,
  dass ein KI-Coding-Agent (Claude Code) eigenständig, phasenweise und mit definierten
  Checkpoints an einem kompletten Rebuild (v2) arbeiten konnte — inklusive verbindlicher
  Feature-Paritäts-Prüfung gegenüber der Vorversion.

---

## Was ich gelernt habe

- **Architekturentscheidungen mit Weitblick treffen**: die bewusste Entscheidung gegen
  einen Build-Schritt/Framework hat sich als richtig erwiesen — die App bleibt auch nach
  Monaten iterativer Entwicklung wartbar und sofort lauffähig.
- **Schema- und Vertragsdenken**: ein zentrales, versioniertes Datenschema als "Contract"
  zwischen mehreren Komponenten (App, Sync-Backend, KI-Tools) verhindert Inkonsistenzen
  und macht additive Erweiterungen risikolos.
- **Offline-first ist ein Designprinzip, kein Nice-to-have**: die Trennung von
  "funktioniert immer, lokal, kostenlos" und "optionales Premium-Feature mit eigenem Key"
  zwingt zu klaren Modulgrenzen und zahlt sich bei jeder neuen Funktion aus.
- **Kostenmodelle für geteilte Software durchdenken**: das BYOK-Modell als Lösung für ein
  konkretes Problem (Token-Kosten/Sharing) — übertragbares Muster für jede App, die KI
  nutzt, aber frei verteilbar bleiben soll.
- **Mit KI-Agenten als Entwicklungspartner arbeiten**: Spezifikationen so strukturieren
  (klare Phasen, Checkpoints, Pflicht-Inventuren vor Code-Änderungen), dass ein
  autonomer Coding-Agent zuverlässig und nachvollziehbar an einem produktiven System
  weiterbauen kann, ohne bestehende Funktionalität zu brechen.
- **Internationalisierung früh mitdenken**: nachträgliches Hinzufügen von Sprachen ist
  deutlich aufwändiger als ein von Anfang an i18n-fähiges Datenmodell — gelöst durch
  automatisierte Tests, die Sprachversionen synchron halten.
- **Iterative Produktentwicklung im Kleinen**: anhand einer strukturierten Roadmap
  (priorisiert nach P0–P3, mit Aufwandsschätzung) realistisch planen, was als Nächstes
  sinnvoll ist — und dabei zwischen "kaputt/blockierend" und "nice-to-have" unterscheiden.

---

## Tech-Stack (Stichpunkte für die Projektkarte)

- Vanilla JavaScript (native ES Modules, kein Bundler), Web Components
- Progressive Web App: Service Worker, Web App Manifest, installierbar, offline-fähig
- IndexedDB (lokale Datenhaltung) + Google Drive API (Sync, `drive.file`-Scope)
- Google Identity Services (OAuth)
- Anthropic API (optionale KI-Funktionen, BYOK-Modell)
- Mehrsprachigkeit: DE / EN / ES / DA
- Hosting: GitHub Pages
- Automatisierte Tests (145+), versionierte Roadmap & Changelog

---

## Vorschlag für die Lang-Card auf der Website

**Titel:** Koch — Persönliches digitales Kochbuch (PWA)

**Tagline:** Von der Rezeptsammlung zur vollwertigen offline-first App — Kochbuch,
Kochmodus, Wochenplaner, Einkaufsliste und optionaler KI-Assistent, komplett selbst
konzipiert und entwickelt.

**Bild-Idee:** Screenshot der App (warmes Papier-Design, Fraunces/Karla-Typografie,
Terrakotta-Akzentfarbe `#c8632e`) — z. B. Kochbuch-Ansicht oder Kochmodus.

**Was es war:** Ein persönliches Projekt, um eine wachsende Rezeptsammlung digital,
durchsuchbar und offline nutzbar zu machen — inzwischen eine vollständige PWA mit über
100 Rezepten, mehreren Versionsstufen und einer aktiven Roadmap.

**Was ich gemacht habe:** Architektur, Datenmodell, Offline-Strategie, Cloud-Sync,
Mehrsprachigkeit, KI-Integration mit nutzerfreundlichem Kostenmodell sowie die Steuerung
eines KI-Coding-Agenten für einen strukturierten Rebuild — siehe Details oben.

**Was ich gelernt habe:** Nachhaltige Architekturentscheidungen, Schema-/Vertragsdenken,
Offline-first als Designprinzip, Kostenmodelle für KI-Features, effektive
Zusammenarbeit mit KI-Agenten, i18n-Strategie — siehe Details oben.
