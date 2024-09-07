# Ist-Analyse - slagg

<!-- W.I.P. notes start -->
<div style="display: none;">
## Probleme
- [x] Unübersichtlicher Email Verkehr
- [x] Erhöhte Auftragslage
- [x] Hoch vertrauliche Daten
- [x] Keine gute bis keine Gruppenkommunikation möglich
- [x] Keine zuverlässige bis keine Filterung möglich
- [x] Slack/Teams nutzen externe Server

## Ist
- [x] Web-App
- [x] Nur intern erreichbar
- [x] Jeder kann eine Gruppe erstellen
- [x] Nur Admins dürfen User erstellen
- [x] Admins dürfen Chats einsehen (Datenschutz? Missbrauch?)

## Kunden fragen
- [x] Muss eine integration mit einem bestehenden Authentifizierungsystem erfolgen? (bspw. Active-Directory)
- [x] Welche Einstellungen sind nötig?
- [x] Wie kommt man in eine Gruppe?
- [x] Welche Infrastruktur braucht der Kunde, damit die App deployed werden kann?
- [x] Können Dateien hochgeladen werden?
    - [x] Wenn ja, gibt es eine Einschränkung der Dateiformate die hochgeladen werden können?
- [ ] Wie können Dateien hochgeladen werden?
- [x] Writing Indikator?
- [x] Read Indikator?
- [x] 2FA-Nötig?
- [x] Sessionhandling (Wie lange läuft eine Session?)
- [x] Session type?
- [x] Https?
- [x] E2E-Verschlüsselung?
- [x] Verschlüsselt in der DB-Speichern?
- [x] Passwort ändern?
- [x] Colortheme?
- [x] Soll es Profilbilder geben und wie sollen diese aussehen?
- [x] Wie soll die Liste der verbotenen Wörter gepflegt werden?
- [x] Wer kann diese Liste pflegen?
- [x] Wie soll die Filterung umgesetzt werden? Dürfen die Nachrichten nicht versandt werden oder wird das entsprechende Wort zensiert?
- [ ] Gibt es verschiedene clearence Level für die Benutzer?
</div>
<!-- W.I.P. notes end -->

## Probleme
Der kunde arbeitet regelmäßig mit sensiblen Daten, die unter die Verschlusssachenanweisung (VSA) fallen und einen Geheimhaltungsgrad von VS-VERTRAULICH ist zu STRENG GEHEIM haben. Aufgrund der kritischen Natur dieser Daten ist die digitale Infrastruktur beim Kunden streng gekapselt und es sind strenge Zugriffskontrollen eingerichtet worden.

Was sich allerdings kaum vermeiden lässt ist interne Kommunikation über diese Dokumente. Aktuell wird dafür ein interner Email-Server genutzt. Die Kommunikation über Email stellt jedoch ein paar Herausforderungen dar.
Bei dieser Art von Kommunikation kann leicht der Überblick verloren gehen. Dieser Fakt wird durch die erhöhte Auftragslage noch verstärkt. Zudem ist es nicht wirklich möglich diese Kommunikation auf eine Gruppe auszuweiten ohne die Transparenz weiter zu senken.

Eine Alternative zur Kommunikation über Email wäre eine Chats Lösung wie Slack oder Teams. Diese haben jedoch Ihre eigenen Einschränkungen wodurch sie als Ersatz ausgeschlossen sind.
<!-- TODO folgendes umschreiben -->
Zum ersten nutzen sowohl Slack als auch Teams externe Server, was für den Kunden nicht in Frage kommt da, die sensiblen Daten ausschließlich Intern erreichbar sein dürfen.
Außerdem kann, wie auch beim Email-Verkehr, keine zuverlässige Datenfilterung erfolgen da keine der beiden Alternativen solch eine Funktion anbietet.

## Ist

Die Applikation soll als Website umgesetzt werden. Diese soll ausschließlich im Intranet der Firma erreichbar sein. Es gibt keine Pläne diese auch Firmen extern erreichbar zu sein.

Außerdem soll das erstellen eines Nutzers nur durch einen Administrator möglich sein. Es soll keine Registrierungsmöglichkeit für Mitarbeiter geben.

Das erstellen einer Gruppe wiederum soll durch jeden Nutzer möglich sein. Hier besteht jedoch die Frage, wie Nutzer zu einer Gruppe hinzugefügt werden sollen. Ob mit Einladungslink, durch einen Nutzer der bereits in der Gruppe ist oder durch den Gruppen ersteller.

Für Administratoren soll es außerdem möglich sein, die Chats der User sowie die Gruppenchats zu überwachen so, dass keine sensiblen Daten in den Chats kompromosiert werden. Hier besteht jedoch das Bedenken zum Datenschutz sowie der Missbrauch dieses Rechts.

## Kundenfragen
### Authentifizierung
Es sind außerdem noch einige Fragen dem Kunden zu stellen.
Zum ersten ist die Frage ob eine Integration zu einem bestehenden Authentifizierungsystem erforderlich ist(Microsoft Active-Directory o.Ä.). Eine weiter Überlegung bezüglich der Authentifizierung ist, ob eine Zwei-Faktor-Authentifizierung von nöten ist.
Wenn sich nun ein Nutzer angemeldet hat, muss spezifiziert werden wie lang diese Session aktiv bleibt sowie welche Art von Token genutzt wird (JWT etc.).
Außerdem muss geklärt werden, ob ein Nutzer sein Passwort ändern kann. Dies könnte zur folge haben, dass das neu vergebene Passwort als unsicher gilt.

### Chatting
<!-- TODO rewrite the following -->
Ist ein Writing-/ und/oder Read-Indicator erwünscht? Zudem ist zu klären ob die Möglichkeit zum Datei-Upload implementiert werden soll. Sollte dies der Fall sein, muss geklärt werden ob alle Dateiformate akzeptiert werden oder nur bestimmte.

In Bezug auf Sicherheit beim chatten muss außerdem geklärt werden ob der Kunde E2EE und/oder HTTPS Support benötigt da die Website nur intern erreichbar sein soll. Zu diesem Thema muss zusätzlich geklärt werden, wie die Nachrichten in der Datenbank gespeichert werden. Dies behinhaltet ob die Nachrichten encrypted gespeichert werden sollen und wenn dies der Fall sein sollte, welcher Verschlüsselungsalgorythmus genutzt werden soll (AES etc.).

Ein weitere Aspekt ist die Filterung/Zensierung von Nachrichten mit sensiblem Inhalt. Hier muss geklärt werden wie genau dies geschehen soll. Soll eine Nachricht, die eines der defenierten Wörter beinhaltet, beim abschicken zensiert werden oder soll diese Nachricht gar nicht erst abgeschickt werden dürfen?

### Einstellungen
Die Liste der verbotenen Wörter muss gepflegt werden. Hier besteht die Frage wie diese Liste gepflegt werden kann. Wird die Liste im Programm direkt gepflegt oder wird Sie von einem anderen Service abgefragt. Falls diese Liste im Programm selber gepflegt wird, wer darf diese dann ändern?

Für die Personaliserung des eigene Nutzerprofils könnten zudem Profilbilder verwendet werden. Hier besteht Klärungsbedarf wie diese Aussehen sollen und ob sie geändert werden dürfen. Sollen diese, im Fall das Profilbilder verwendet werden, aus den Buchstaben des Vor- und Nachnamen des Nutzers bestehen, können diese selber hochgeladen werden oder gibt es einen anderen Lösungsansatz.

Es muss außerdem in Erfahrung gebracht werden, welche Einstellungen die Nutzer darüber hinaus benötigen. Beispielsweise eine Light-/Darkmode wechsel.

### Weitere Fragen
Um die Applikation zu deployen muss zudem noch gefragt werden, ob der Kunde etweige Softwareinfrastruktur benötigt oder ob alles für das deployment bereit steht.
