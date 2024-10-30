### **Zielplattform**

Die Zielplattform für das On-Premise Chat-Tool soll den sicheren und reibungslosen Betrieb im internen Netzwerk des Kunden gewährleisten. Wegen der sensiblen Natur der Daten richten wir die Plattform so ein, dass keine externen Verbindungen bestehen und alle Daten im Netzwerk bleiben.

#### **Hardwareanforderungen**

- **Server**: Ein leistungsfähiger Server, der mehrere gleichzeitige Nutzer und die laufende Datenverarbeitung unterstützt (z. B. Datenbankabfragen und Nachrichtenaustausch).
- **Netzwerk**: Server und Clients sind vollständig ins interne Netzwerk eingebunden, was Sicherheit und Geschwindigkeit garantiert.
- **Speicherplatz**: Genug Kapazität für die Datenbank und Protokolle, um alle Nachrichten und Nutzerinformationen lokal zu speichern.

#### **Softwareanforderungen**

- **Betriebssystem**: Eine Linux-Distribution (z. B. Ubuntu Server oder CentOS) für Stabilität und regelmäßige Sicherheitsupdates.
- **Datenbank**: **SQLite** als leichtgewichtige, serverlose Datenbanklösung, um Benutzerinformationen und Chatverläufe lokal und sicher zu verwalten. Die Wahl von SQLite erlaubt eine einfache Implementierung ohne zusätzlichen Wartungsaufwand.
