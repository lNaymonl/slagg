# 1 Einleitung

In der folgenden Projektdokumentation wird ausführlich die Etnwicklung eines Softwareprojektes durch die Auszubildenden der ZFRE-IT-Solutions GmbH beschrieben. Dieses Kundenprojekt sollte den Auszubildenden als Probelauf für ihr späteres HK-Abschlussprojekt dienen, weshalb sich der Aufbau und die Art dieser Dokumentation an den Anforderungen der IHK-Oldenburg für Abschlussprojeklte orientiert.

## 1.1 Projektumfeld

Slagg wurde als Kundenprojekt der ZFRE-IT-Solutions GmbH entwickelt. Die ZFRE IT-Solutions GmbH ist ein Unternehmen, dessen Kernkompetenz in der Entwicklung und Bereitstellung maßgeschneiderter Softwarelösungen liegt. Das Unternehmen entwickelt Softwareprodukte, welche sowohl standardisierte als auch individuelle Anforderungen seiner Kundinnen und Kunden erfüllen. Der Fokus liegt dabei meist auf der Entwicklung sicherer IT-Lösungen, die in stark regulierten und sicherheitskritischen Umgebungen Anwendung finden. Der Sitz der ZFRE IT-Solutions GmbH ist in Oldenburg und das Unternehmen bietet seine Dienstleistungen deutschlandweit sowie international an.

## 1.2 Projektziel

Das Ziel des Projekts besteht in der Entwicklung eines einfachen Prototyps für ein On-Premise-Chat-Tool, welches der Validierung des Sicherheitskonzepts des Kunden dient. Der Prototyp ist so zu konzipieren, dass er vollständig im lokalen Netzwerk des Kunden betrieben wird und keinerlei externe Verbindungen aufbaut. Der Funktionsumfang des Tools soll dabei die wesentlichen Merkmale gängiger Chat-Tools wie Slack oder Microsoft Teams nachbilden, wobei jedoch strenge Sicherheitsvorgaben zu berücksichtigen sind.

Das Tool zielt darauf ab, eine direkte Kommunikation zwischen zwei Nutzern sowie eine Kommunikation innerhalb von Gruppen zu ermöglichen. Es ist sicherzustellen, dass sämtliche generierten Daten ausschließlich on-premises verarbeitet und gespeichert werden. Von entscheidender Bedeutung ist für den Kunden die Möglichkeit für Administratoren, sämtliche Gespräche und Datenströme zu überwachen, um den Schutz sensibler und als vertraulich eingestufter Informationen zu gewährleisten.

Technisch soll der Prototyp als webbasierte Anwendung im lokalen Netzwerk bereitgestellt werden und über die bereits vom Kunden eingesetzten Browser (Firefox und Chrome) zugänglich sein. Durch die Entwicklung dieses Prototyps soll der Kunde in der Lage sein, die Sicherheit und Funktionalität seines Kommunikationskonzepts zu prüfen und zu validieren.

## 1.3 Projektbegründung

Die Notwendigkeit des Projektes resultiert aus der spezifischen Sicherheitslage beim Kunden. Der Einsatz von Standard-Chat-Tools wie Slack oder Microsoft Teams ist aufgrund der externen Verbindungsanforderungen dieser Tools nicht möglich, da bereits die Übertragung von vertraulichen Daten ein potenzielles Sicherheitsrisiko darstellen würde. Daher ist die Implementierung einer internen Lösung erforderlich, welche die Funktionalität moderner Chat-Tools in einem vollständig abgeschotteten, On-Premise-System abbildet. 

## 1.4 Aufgabenstellung

Der Kunde hat uns mit der Entwicklung eines Chat-Tools beauftragt, welches seinen spezifischen Sicherheitsanforderungen entspricht. Das Tool ist so zu konzipieren, dass keine Verbindung zum Internet aufgebaut wird und eine freie Verwaltung durch Administratoren gewährleistet ist. Des Weiteren ist sicherzustellen, dass Administratoren in der Lage sind, sämtliche Chats zu überwachen, um potenzielle Verstöße zu identifizieren. Des Weiteren ist die Implementierung einer Funktion vorgesehen, welche sämtliche Nachrichten einer automatisierten Prüfung auf unzulässige Inhalte unterzieht und bei Bedarf die betreffende Nachricht vor der Übertragung löscht. 

# 2 Analysephase

## 2.1 Ist-Analyse 

Der Kunde arbeitet regelmäßig mit sensiblen Daten, die unter die Verschlusssachenanweisung (VSA) fallen und einen Geheimhaltungsgrad von VS-VERTRAULICH zu STRENG GEHEIM aufweisen. Die digitale Infrastruktur beim Kunden ist aufgrund der kritischen Natur der Daten streng gekapselt und mit umfassenden Zugriffskontrollen ausgestattet.

Was sich allerdings kaum vermeiden lässt ist interne Kommunikation über diese Dokumente. Aktuell wird dafür ein interner Email-Server genutzt. Die Kommunikation über Email stellt jedoch ein paar Herausforderungen dar.
Bei dieser Art von Kommunikation kann leicht der Überblick verloren gehen. Dieser Fakt wird durch die erhöhte Auftragslage noch verstärkt. Zudem ist es nicht wirklich möglich diese Kommunikation auf eine Gruppe auszuweiten ohne die Transparenz weiter zu senken.

Als Alternative zur Kommunikation per E-Mail kann eine Chat-Lösung wie Slack oder Teams in Erwägung gezogen werden. Allerdings weisen diese Lösungen ebenfalls Einschränkungen auf, sodass sie als Ersatz nicht in Betracht kommen.
Ein weiterer Aspekt, der gegen die Nutzung von Slack oder Teams als Kommunikationsmittel spricht, ist die Tatsache, dass sowohl Slack als auch Teams externe Server nutzen. Dies ist für den Kunden nicht akzeptabel, da die sensiblen Daten ausschließlich intern zugänglich sein müssen. Des Weiteren besteht seitens des Kunden die Anforderung, dass die Erstellung und Verwaltung von Kanälen ausschließlich durch Administratoren erfolgen kann. Auch dies ist mit Slack und Teams nicht realisierbar.


## 2.2 Soll-Konzept

Der Kunde wünscht ein Tool um im lokalen Netzwerk den Austausch von sicherheitsrelevanten Daten zu erleichtern. Die zentrale Idee des Projektes ist, ein Tool zu haben, von dem der Kunde sich sicher sein kann, dass keine Daten nach außen kommuniziert werden und dennoch die Kommunikation zwischen Mitarbeitern erleichtert. So wird Mehraufwand durch ineffiziente Kommunikation eingespart und gleichzeitig, das Sicherheitskonzept des Kunden umgesetzt. 

## 2.4 Wirtschaftlichkeitsanalyse

### 2.4.1 Kostenplanung

Die folgenden Berechnungen gehen von einem fiktiven Lehrlingslohn von 12,50 € aus, der angemessen ist, da der Lehrling neben seiner eigentlichen Vergütung auch Kosten verursacht. Die Materialkosten entfallen, da das Unternehmen bereits über eine Vielzahl von Entwicklungswerkzeugen verfügt. Für die restlichen benötigten Programme können kostenlose Alternativen, wie z.B. Open Source Software, verwendet werden.

Die **Mehraufwandkosten** von 20€ pro Stunde beziehen sich auf zusätzliche betriebliche Kosten, wie zum Beispiel administrative Ausgaben, Lizenzkosten für spezielle Software (z.B. IDE oder Versionskontrollsysteme), sowie eventuelle Hardware-Abnutzung.

| **Vorgang**     | **Stundensatz** | **Mehraufwand** | **Zeit** | **Gesamt** |
| --------------- | --------------- | --------------- | -------- | ---------- |
| Analyse         | 12.5€           | 20€             | 11       | 357€       |
| Entwurf         | 12.5€           | 20€             | 24       | 780€       |
| Implementierung | 12.5€           | 20€             | 104      | 3380€      |
| Deployment      | 12.5€           | 20€             | 20       | 650€       |
| Dokumentation   | 12.5€           | 20€             | 32       | 1040€      |
| **Summe**       |                 |                 |          | **6207€**  |

### 2.4.2 Amortisationsrechnung

Die Gesamtkosten für die Entwicklung des Softwareprojekts belaufen sich gemäß der Kostenplanung auf 6.207€. Der Kunde trägt 35% der Gesamtkosten, was den zu amortisierenden Betrag auf 4.034€ reduziert.

Wir gehen davon aus, dass wir in den ersten 12 Monaten nach der Markteinführung 6 Jahreslizenzen verkaufen werden. Danach rechnen wir mit einem jährlichen Wachstum von 20%. Das Produkt wird zu einem Preis von 50 € pro Kunde und Monat angeboten, was bedeutet, dass sich die Investition innerhalb von zwei Jahren vollständig amortisiert.

### 2.4.3 Nicht-monetäre Entscheidung

Das Projekt generiert für das Unternehmen nicht nur finanzielle Vorteile. Die Mitarbeitenden haben die Möglichkeit, wertvolle Erfahrungen in der Webentwicklung zu sammeln, welche bislang nicht zu den Kernkompetenzen des Unternehmens zählten. Die Einbindung neuer Programmiersprachen und Technologien kann dazu beitragen, zukünftige Projekte zu bereichern und die Innovationskraft des Unternehmens zu fördern. Gleichzeitig erhalten die Auszubildenden praktische Einblicke in Bereiche, die in ihrer Ausbildung nicht thematisiert werden. Die Weiterentwicklung führt zu einer Stärkung der Wettbewerbsfähigkeit des Unternehmens.

# 3 Projektplanung

## 3.1 Projektphasen

## 3.2 Resourcenplanunng

Die verwendeten Ressourcen werden im Anhang aufgelistet welche für die Umsetzung des Projekts benötigt wurden. Bei der Planung wurden sowohl Hard- als auch Software-Ressourcen berücksichtigt. Es wurde bei der Entwicklung darauf geachtet, dass nur freie Software oder Software für die bereits eine Lizenz vorhanden ist, genutzt wurden. Außerdem wird ausschließlich Open-Source Software im Endprodukt genutzt.

# 4 Entwurf 

## 4.1 Use-Case-Diagramm

## 4.2 Sequenzdiagramm

## 4.3 Zielplattform

## 4.4 Architekturdesign

Die Architektur des Chat-Tools ist modular aufgebaut und sorgt für eine sichere und skalierbare Anwendung. Die Struktur teilt das System in mehrere Kernkomponenten, die jeweils spezifische Aufgaben übernehmen und klar definiert miteinander kommunizieren.

### 4.4.1 **Schichtenarchitektur**

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

### 4.4.2 Sicherheitsmaßnahmen und Konfiguration

- **TLS für alle Verbindungen**: Der gesamte Datenverkehr zwischen Client und Server wird durch TLS geschützt, was Vertraulichkeit und Integrität der Daten sicherstellt.
- **Firewall-Konfiguration**: Die Firewall blockiert alle externen Zugriffe und lässt nur den internen Netzwerkverkehr zu.
- **Datenverschlüsselung in der Datenbank**: Alle gespeicherten Daten werden verschlüsselt abgelegt, um die Sicherheit sensibler Informationen zu garantieren.

Dank dieser Architektur kann das On-Premise-Chat-Tool sicher und effizient im Netzwerk des Kunden eingesetzt werden. Der modulare und schichtenbasierte Aufbau macht das System flexibel und kann bei Bedarf angepasst oder erweitert werden, wobei alle funktionalen und sicherheitsrelevanten Anforderungen erfüllt werden.

## 4.5 Entwurf der Nutzeroberfläche 

Der Entwurf der Benutzeroberfläche für die Chat-Applikation besteht aus mehreren Elementen, die eine intuitive und ansprechende Umgebung schaffen sollen sowie eine schnelle Kommunikation zwischen den Mitarbeitern. Die folgenden Elemente sind die Hauptkomponenten des Entwurfs:

1. Navigation: Eine Seitenleiste am seitlichen Rand bieten den Benutzern Zugriff auf verschiedene Teile der Anwendung. Diese Abschnitte beinhalten die Home-Page sowie die Benutzereinstellungen.
2. Home-Page: Die Home-Page besteht aus zwei Komponenten, dem Channel-Überblick sowie dem Chat. Der Channel-Überblick, ähnlich wie die Seitenleiste, soll am linken Rand der Benutzeroberfläche lokalisert sein. Der restliche Platz wird vom Chat Fenster befüllt.
3. Channel-Überblick: In diesem Bereich sollen alle aktiven Channels/Chats in einer intuitiven Übersicht aufgelistet werden. Hier können diese auch verwaltet werden.
4. Chat: Der Chat beinhaltet Nachrichten von allen Teilnehmern an einem Channel/Chat. Hier können Nachrichten sowohl gelesen als auch verfasst werden. Die Nachrichten von anderen Teilnehmern sollen dementsprechend klar als solche dargestellt werden.
5. Benutzereinstellungen: Hier kann der Nutzer Einstellungen zu seinem Profil vornehmen.
6. Admin-Page: Diese Seite existiert nur wenn der aktuelle Nutzer ein Administrator ist. Ist dies der Fall bietet die Admin-Page Einstellungen bezüglich Channels, anderen Nutzern sowie anderen administrativen Einstellungen.
7. Responsive Design: Die Benutzeroberfläche sollte so gestaltet sein, dass sie auf verschiedenen Bildschirmgrößen und Geräten gut aussieht und funktioniert. Außerdem sollte sie auf Anpassung der Bildschirmgröße im laufenden Betrieb dementsprechend reagieren können.

Durch die Kombination dieser Elemente entsteht eine benutzerfreundliche und effiziente Oberfläche, die den Nutzern einen schnelleren und effektiveren Austausch miteinander ermöglicht.

# 5 Implementierungsphase
Auf Grundlage der erstellten Entwürfe aus Kapitel 4 (Entwurfsphase) konnte mit der Implementierung der einzelnen Elemente begonnen werden. Da Slagg als Monolith geplant wurde und somit nur eine Node Applikation nutzt, um sowohl Frontend als auch Backend bereitzustellen, wurde zuerst ein zentrales Projekt in einem Git-Repository erzeugt. 

## 5.1 Implementierung der Datenmodelle
Nach dem Aufsetzen des Projekts wurden die benötigten Datenmodelle aus der OpenAPI-Definition als Klassen implementiert. Durch die monolithische Architektur von Slagg können sich Frontend und Backend diese Datentypen teilen und so Datenkonsistenz bei der Übertragung erleichtern.

## 5.2 Implementierung der Datenbank 
Als nächstes wurde die Datenbankverbindung implementiert, wie in der Entwurfsphase entschlossen wurde dazu ein ORM namens Drizzle genutzt. Drizzle hat uns erlaubt eine SQLite Datenbank nach dem „code first“ Prinzip zu implementieren. Somit mussten wir nur die zuvor erstellten Datenmodelle bei Drizzle registrieren, um so die Datenbank aufzusetzen. 

## 5.3 Implementierung der Benutzeroberfläche
Nach der Datenbank wurde die Benutzeroberfläche entwickelt, Dazu wurden die Mockups aus der Entwurfsphase hinzugenommen. Die Oberfläche wurde mit Svelte entwickelt und in das Projekt integriert über die Express.js-Logik, so sind einzelne Pages als „Views“ über definierte Routen erreichbar. Dieses Vorgehen hat es uns ermöglicht unser Datenmodell in der Implementierungsphase noch einmal zu überprüfen. Sollte uns bei der Entwicklung der Oberfläche auffallen, dass wir einen Fehler gemacht haben und das Datenmodell anpassen müssen, dann ist dies hier möglich mit einen Regressionsschritt in die Entwurfsphase und das, ohne auch die Backend Logik anfassen zu müssen.

## 5.3 Implementierung des Backends
Nachdem die Benutzeroberfläche fertig war, wurde die Backend-Logik umgesetzt. Hierzu wurde wieder die OpenAPI-Definition hinzugezogen. Die einzelnen API-Endpunkte wurden definiert und ihnen wurden wieder nach Express.js-Logik Routen zugewiesen. Dieses Mal wurden die Routen jedoch mit einem Präfix versehen, um sie von den Frontend Routen zu unterscheiden. So sind Endpunkte nur über Routen, die so aufgebaut sind erreichbar: „https://<server-Adresse>/api/<Endpunkt>“. Als letztes musste dann die Websocket-Logik implementiert werden, über diesen Teil der Anwendung werden dann die eigentlichen Nachrichten verschickt. Ein Websocket ist eine Netzwerkverbindung, die eine dauerhafte, bidirektionale Kommunikation zwischen Client und Server ermöglicht, wodurch Daten in Echtzeit ohne wiederholtes Anfordern gesendet und empfangen werden können. Clients fordern über einen Endpunkt an eine neue Websocket-Verbindung mit dem Backend aufzubauen und empfangen dann über diese die einzelnen Nachrichten andere Nutzer.

## 5.5 Testen der Anwendung
Wie im Abschnitt 4.6 (Maßnahmen zur Qualitätssicherung) beschrieben, wurde die Anwendung kontinuierlich durch Unit-Tests getestet. Diese wurden auch in eine Pipeline integriert und für jede Pull-Request im Repository automatisch durchgeführt. Für die Tests wurde das Jest Framework genutzt, durch das wir sowohl Frontend als auch Backend Code teste konnten. 
Ebenfalls wurden manuelle End-to-End Tests durchgeführt, wobei unser Vorgehen von Frontend zu Backend wieder von Vorteil war. So konnten einzelne Backend-Endpunkte sofort mit dem Frontend verbunden und getestet werden. 
Zum Abschluss der Implementierung wurde ebenfalls das Deployment getestet, Hierzu wurde ein Server aufgesetzt wie er später auch beim Kunden eingesetzt wird mit Slagg in seiner finalen Fassung. Dann wurde ein längerer manueller Stresstest durchgeführt und zum Schluss die Antwortzeit aller Endpunkte maschinell mit dem Tool Postman getestet. 


# 6 Qualitätssicherung

# 7 Dokumentation
Die Dokumentation von Slagg umfasst zwei wesentliche Teile: eine Nutzerdokumentation, welche die für die späteren Endnutzer von Slagg wichtigsten Funktionen und Eigenschaften beschreibt, sowie eine Entwicklerdokumentation. Letztere dient der Regelung von Wartungsaspekten sowie der Vorbereitung einer potenziellen Weiterentwicklung nach Abschluss der Prototypenphase. 

## 7.1 Nutzerdokumentation
Im Rahmen der Nutzerdokumentation wurde unter Zuhilfenahme des Use-Case-Diagramms eine detaillierte Beschreibung der Funktion und des Ablaufs aller Features erstellt. Die Dokumentation wurde dabei in zwei Sichten unterteilt: die Sicht eines normalen Nutzers und die Sicht eines Administrators. Der Administrator hat Zugriff auf einige weitere Features, die für normale Nutzer nicht sichtbar sind.


## 7.2 Entwicklerdokumentation
Die Entwicklerdokumentation ist zweiteilig zusammengesetzt aus Code-Kommentaren und einem separaten Dokument, in dem detaillierter auf besondere oder komplexe Aspekte des Codes eingegangen wird. Da auch der Kunde in der Lage sein soll, die Entwicklung fortzusetzen, muss sichergestellt werden, dass neben der Erklärung des Codes auch unsere Herangehensweise und Architektur klar werden. Zu diesem Zweck wurden Klassendiagramme erstellt und weitere Artefakte aus der Entwurfs- und Analysephase integriert, beispielsweise das Use-Case-Diagramm.


# 8 Fazit


# 8.1 Soll-/Ist-Vergleich


Analyse     11 || 15
Entwurf     24 |||| 34
Implementierung     104 |||| 90 
Deployment      20 |||| 20
Dokumentation   32 |||| 32



# 8.2 Lessons learned 

