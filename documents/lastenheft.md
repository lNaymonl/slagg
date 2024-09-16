# 1. Allgemeine Projektinformationen

## 1.1 Projektname

Das Projekt soll unter dem nahmen **Slagg** entwickelt werden

## 1.2 Auftraggeber

**EL ManDante GmbH** <br>
Ansprechpartner: Name, Position <br>
Kontakt: E-Mail, Telefon

## 1.3 Auftragnehmer

**ZFRE IT-Solutions GmbH** <br>
Ansprechpartner: Name, Position <br>
Kontakt: E-Mail, Telefon

## 1.4 Ziel des Projektes

Prototypenentwicklung eines On-Premise Chat-Tool für eine nach außen abgesicherte Kommunikation im Hinblick auf besonders kritische Daten.

# 2. Ausgangssituation

## 2.1 Ist-Zustand

Der kunde arbeitet regelmäßig mit sensiblen Daten, die unter die Verschlusssachenanweisung (VSA) fallen und einen Geheimhaltungsgrad von VS-VERTRAULICH ist zu STRENG GEHEIM haben. Aufgrund der kritischen Natur dieser Daten ist die digitale Infrastruktur beim Kunden streng gekapselt und es sind strenge Zugriffskontrollen eingerichtet worden.

Was sich allerdings kaum vermeiden lässt ist interne Kommunikation über diese Dokumente. Aktuell wird dafür ein interner Email-Server genutzt. Die Kommunikation über Email stellt jedoch ein paar Herausforderungen dar. Bei dieser Art von Kommunikation kann leicht der Überblick verloren gehen. Dieser Fakt wird durch die erhöhte Auftragslage noch verstärkt. Zudem ist es nicht wirklich möglich diese Kommunikation auf eine Gruppe auszuweiten ohne die Transparenz weiter zu senken.

Eine Alternative zur Kommunikation über Email wäre eine Chat-Lösung wie Slack oder Teams. Diese haben jedoch Ihre eigenen Einschränkungen wodurch sie als Ersatz ausgeschlossen sind. Zum einen nutzen sowohl Slack als auch Teams externe Server, was für den Kunden nicht akzeptabel ist, da die sensiblen Daten ausschließlich intern zugänglich sein müssen. Zum anderen bieten diese Plattformen, ebenso wie der E-Mail-Verkehr, keine zuverlässige Möglichkeit zur Datenfilterung, da keine entsprechende Funktion verfügbar ist. Der Kunde hat außerdem die Voraussetzung, dass Channels nur von Administratoren erstellt und verwaltet werden können. Dies ist ebenfalls weder mit Slack noch Teams möglich.

## 2.2 Soll-Zustand

# 3. Projektanforderungen

## 3.1 Funktionale Anforderungen

Slagg muss folgende funktionale Anforderungen erfüllen: <br>
• Ein intuitives Design <br>
• Die Möglichkeit sich als Nutzer anzumelden <br>
• Nur Administratoren sollen Nutzer anlegen können <br>
• Direkte Chats <br>
• Gruppen Chats <br>
• Administratoren müssen alle Chats beobachten können <br>
• Es muss eine Liste an verbotenen Worten geben, dessen Verwendung in einer Nachricht dazu führt, dass diese Nachricht nicht versandt wird

## 3.2 Technische Anforderungen

Die hauptsächliche Anforderung des Projektes liegt darin, dass Slagg lokal ausführbar bleiben muss, es darf also keine Verbindung zum Internet notwendig sein.

# 4. Randbedingungen

## 4.1 Zeitplan

Der Zeitplan sieht einen Abschluss des Projektes nach ungefähr 2 Monaten vor. Dabei ist eine späteste Fristbis zum 25. November einzuhalten.

## 4.2 Budget

### Kostenplanung

Die folgenden Berechnungen basieren auf einem fiktiven Lehrlingslohn von 12,50€, dies ist ein angemessener Lohn, weil der Lehrling -über seiner eigentlichen Vergütung hinaus- ebenfalls Kosten verursacht. Die Materialkosten entfallen, da das Unternehmen bereits über eine Vielzahl von Entwicklungswerkzeugen verfügt. Für die restlichen benötigten Programme können kostenlose Alternativen, wie z.B. Open-Source-Software, verwendet werden.

Die **Mehraufwandkosten** von 20€ pro Stunde beziehen sich auf zusätzliche betriebliche Kosten, wie zum Beispiel administrative Ausgaben, Lizenzkosten für spezielle Software (z.B. IDE oder Versionskontrollsysteme), sowie eventuelle Hardware-Abnutzung.

| **Vorgang**     | **Stundensatz** | **Mehraufwand** | **Zeit** | **Gesamt** |
| --------------- | --------------- | --------------- | -------- | ---------- |
| Analyse         | 12.5€           | 20€             | 11       | 357€       |
| Entwurf         | 12.5€           | 20€             | 24       | 780€       |
| Implementierung | 12.5€           | 20€             | 104      | 3380€      |
| Deployment      | 12.5€           | 20€             | 20       | 650€       |
| Dokumentation   | 12.5€           | 20€             | 32       | 1040€      |
| **Summe**       |                 |                 |          | **6207€**  |

### Amortisationsrechnung

Die Gesamtkosten für die Entwicklung des Softwareprojekts belaufen sich gemäß der Kostenplanung auf 6.207€. Der Kunde trägt 35% der Gesamtkosten, was den zu amortisierenden Betrag auf 4.034€ reduziert.

Wir erwarten, dass wir in den ersten 12 Monaten nach der Markteinführung 6 Jahreslizenzen verkaufen werden. Nach diesem Zeitraum rechnen wir mit einem jährlichen Wachstumsanstieg von 20%. Das Produkt wird zu einem Preis von 50€ pro Kunde und Monat angeboten, was bedeutet, dass sich die Investition innerhalb von zwei Jahren vollständig amortisieren wird.

### Nicht-monetäre Entscheidung

Das Projekt bringt dem Unternehmen nicht nur finanzielle Vorteile. Es ermöglicht den Mitarbeitern, wertvolle Erfahrungen in der Webentwicklung zu sammeln, was bisher nicht zu den Kernkompetenzen des Unternehmens gehörte. Die Einbindung neuer Programmiersprachen und Technologien kann zukünftige Projekte bereichern und die Innovationskraft des Unternehmens steigern. Gleichzeitig erhalten die Auszubildenden praktische Einblicke in Bereiche, die sie sonst in ihrer Ausbildung möglicherweise nicht kennengelernt hätten. Diese Weiterentwicklung stärkt auch die Wettbewerbsfähigkeit des Unternehmens.

# 5. Abnahmekriterien

## 5.1 Kriterien für die Abnahme des Projekts

Für die Abnahme von Slagg müssen die Funktionalen so wie technischen Anforderungen erfüllt worden sein. Ebenso muss eine vollständige Dokumentation des Projektes erfolgt sein.
