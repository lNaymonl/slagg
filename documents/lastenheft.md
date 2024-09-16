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
•	Ein intuitives Design <br>
•	Die Möglichkeit sich als Nutzer anzumelden <br>
•	Nur Administratoren sollen Nutzer anlegen können <br>
•	Direkte Chats <br>
•	Gruppen Chats  <br>
•	Administratoren müssen alle Chats beobachten können <br>
•	Es muss eine Liste an verbotenen Worten geben, dessen Verwendung in einer Nachricht dazu führt, dass diese Nachricht nicht versandt wird

## 3.2 Technische Anforderungen

Die hauptsächliche Anforderung des Projektes liegt darin, dass Slagg lokal ausführbar bleiben muss, es darf also keine Verbindung zum Internet notwendig sein. 

# 4. Randbedingungen

## 4.1 Zeitplan

Der Zeitplan sieht einen Abschluss des Projektes nach ungefähr 2 Monaten vor. Dabei ist eine späteste Fristbis zum 25. November einzuhalten.

## 4.2 Budget

# 5. Abnahmekriterien
## 5.1 Kriterien für die Abnahme des Projekts

Für die Abnahme von Slagg müssen die Funktionalen so wie technischen Anforderungen erfüllt worden sein. Ebenso muss eine vollständige Dokumentation des Projektes erfolgt sein. 
