# Ist-Analyse - slagg

## Ist
- Nur intern erreichbar
- Jeder kann eine Gruppe erstellen
- Nur Admins dürfen User erstellen
- Admins dürfen Chats einsehen (Datenschutz? Missbrauch?)

## Kunden fragen
- Muss eine integration mit einem bestehenden Authentifizierungsystem erfolgen? (bspw. Active-Directory)
- Welche Einstellungen sind nötig?
- Lesebestätigung?
- Wie kommt man in eine Gruppe?
- Welche Infrastruktur braucht der Kunde, damit die App deployed werden kann?
- Können Dateien hochgeladen werden?
- Wie können Dateien hochgeladen werden?
    - Wenn ja, gibt es eine Einschränkung der Dateiformate die hochgeladen werden können?
- Writing Indikator?
- Read Indikator?
- 2FA-Nötig?
- Sessionhandling (Wie lange läuft eine Session?)
- Login-Art?
- E2E-Verschlüsselung?
- Verschlüsselt in der DB-Speichern?
- Passwort ändern?
- Colortheme?
- Soll es Profilbilder geben und wie sollen diese aussehen?
- Wie soll die Liste der verbotenen Wörter gepflegt werden?
- Wer kann diese Liste pflegen?
- Wie soll die Filterung umgesetzt werden? Dürfen die Nachrichten nicht versandt werden oder wird das entsprechende Wort zensiert?
- Gibt es verschiedene clearence Level für die Benutzer?

## Probleme
- Unübersichtlicher Email Verkehr
- Erhöhte Auftragslage
- Hoch vertrauliche Daten
- Keine gute bis keine Gruppenkommunikation möglich
- Keine zuverlässige bis keine Filterung möglich
- Slack/Teams nutzen externe Server

## Detaillierte Beschreibung der aktuellen Herausforderungen
Der kunde arbeitet regelmäßig mit sensiblen Daten, die unter die Verschlusssachenanweisung (VSA) fallen und einen Geheimhaltungsgrad von VS-VERTRAULICH ist zu STRENG GEHEIM haben. Aufgrund der kritischen Natur dieser Daten ist die digitale Infrastruktur beim Kunden streng gekapselt und es sind strenge ugriffskontrollen eingerichtet worden.

Was sich allerdings kaum vermeiden lässt ist interne Kommunikation über diese Dokumente. Aktuell wird dafür ein interner Email-Server genutzt. Die Kommunikation über Email stellt jedoch ein paar Herausforderungen dar.
Bei dieser Art von Kommunikation kann leicht der Überblick von einer Konversation verloren werden. Zudem gibt es keine Art von Lesebestätigungen. Das größte Problem ist jedoch, dass der Email-Verkehr nicht zuverlässig gefiltert werden kann, somit können vertrauliche Informationen in Umlauf geraten.

Mit der steigenden Anzahl von Aufträgen, steigt ebenfalls die Kommunikation der Mitarbeiter. Dies hat zurfolge, dass die Unterhaltung noch undurchsichtiger werden.

Eine Lösung wie Slack oder Teams ist in diesem Fall keine Option da diese externe Server nutzen was die Datensicherheit kompromittiert. Der Kunde braucht also eine interne Lösung ohne Verbindung zu Externen.
TODO die Datensicherheit erweitert erläutern

## 

-----------------------------------------------------------------------------

Der Kunde arbeitet regelmäßig mit sensiblen Daten, die unter die
Verschlusssachenanweisung (VSA) fallen und einen Geheimhaltungsgrad von VS-
VERTRAULICH bis zu STRENG GEHEIM haben. Aufgrund der kritischen Natur dieser
Daten ist die digitale Infrastruktur beim Kunden streng gekapselt und es sind
strenge Zugriffskontrollen eingerichtet worden.

Was sich allerdings kaum vermeiden lässt ist interne Kommunikation über diese
Dokumente. In den täglichen Geschäftsprozessen des Kunden ist es wichtig, dass
verschiedene Mitarbeiter sich über ihre Arbeit abstimmen können. Im Bezug auf
diese Art der Kommunikation ist es zwar nicht gestattet den Namen eines solchen
Dokumentes zu verwenden (stattdessen werden Codewörter genutzt), allerdings
dürfen Mitarbeiter Aussagen über den Status ihrer Arbeit an solchen Dokumenten
treffen.

Bei diesem Prozess wurde bisher ein interner Mail-Server genutzt, der eine On-
Premise Lösung für dieses Problem darstellt. Allerdings hat der Mail-Verkehr
aufgrund einer höheren Auftragslage in letzter Zeit stark zugenommen und viele
Mitarbeiter empfinden die Kommunikation per Mail vor allem mit mehreren
Beteiligten als unübersichtlich. Die Nutzung eines industrieüblichen Tools wie Slack
oder Teams ist nicht umsetzbar, da selbst das Versenden von Telemetriedaten eine
potenzielle Lücke in der Cybersicherheit des Kunden darstellt.
