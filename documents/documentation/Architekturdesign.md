### **Architekturdesign**

Die Architektur des Chat-Tools ist modular aufgebaut und sorgt für eine sichere und skalierbare Anwendung. Die Struktur teilt das System in mehrere Kernkomponenten, die jeweils spezifische Aufgaben übernehmen und klar definiert miteinander kommunizieren.

#### **Schichtenarchitektur**

Das System basiert auf einer Drei-Schichten-Architektur, um die Bereiche Präsentation, Logik und Datenhaltung sauber zu trennen:

- **Präsentation (Frontend)**:

  - Hier liegt die Benutzeroberfläche, die über einen Webbrowser genutzt wird. Sie wird mit HTML, CSS und TypeScript erstellt.
  - Zu den Komponenten gehören die Login-Seite, Chat-Seiten für direkte und Gruppenchats, eine Admin-Seite für die Überwachung und Verwaltung sowie eine Einstellungsseite zur Anpassung persönlicher Einstellungen.
  - Die Kommunikation mit dem Backend erfolgt über HTTP-REST-APIs und WebSocket für die Echtzeitübertragung.

- **Logik (Backend)**:

  - Das Backend ist in Node.js mit TypeScript entwickelt und bietet APIs für Benutzeraktionen.
  - API-Controller verarbeiten Anfragen vom Frontend, z. B. das Senden und Empfangen von Nachrichten, die Anmeldung von Benutzern und die Aktualisierung von Einstellungen.
  - Die Nachrichtenübertragung läuft über WebSockets, damit Nachrichten in Echtzeit übermittelt werden.
  - Eine Filterfunktion für verbotene Wörter ist integriert, um die Einhaltung von Richtlinien sicherzustellen.

- **Datenhaltung (Datenbank)**:

  - Die Daten werden in **SQLite** gespeichert, einer serverlosen, leichtgewichtigen Datenbank.
  - **Drizzle ORM** wird verwendet, um eine saubere und sichere Interaktion mit der SQLite-Datenbank zu ermöglichen.
  - Sicherheitsmaßnahmen gewährleisten, dass alle Daten lokal und verschlüsselt gespeichert sind und ausschließlich über das Backend zugänglich sind.

#### **Sicherheitsmaßnahmen und Konfiguration**

- **TLS für alle Verbindungen**: Der gesamte Datenverkehr zwischen Client und Server wird durch TLS geschützt, was Vertraulichkeit und Integrität der Daten sicherstellt.
- **Firewall-Konfiguration**: Die Firewall blockiert alle externen Zugriffe und lässt nur den internen Netzwerkverkehr zu.
- **Datenverschlüsselung in der Datenbank**: Alle gespeicherten Daten werden verschlüsselt abgelegt, um die Sicherheit sensibler Informationen zu garantieren.

Durch dieses Architekturdesign ist das On-Premise Chat-Tool sicher und effizient im Netzwerk des Kunden einsatzbereit. Die modulare und schichtbasierte Struktur macht das System flexibel und lässt sich bei Bedarf anpassen oder erweitern, während alle funktionalen und sicherheitsrelevanten Anforderungen erfüllt werden.
