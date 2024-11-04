
# 5 Implementierungsphase
Auf Grundlage der erstellten Entwürfe aus Kapitel 4 (Entwurfsphase) konnte mit der Implementierung der einzelnen Elemente begonnen werden. Da Slagg als Monolith geplant wurde und somit nur eine Node Applikation nutzt, um sowohl Frontend als auch Backend bereitzustellen, wurde zuerst ein zentrales Projekt in einem Git-Repository erzeugt. 

# 5.1 Implementierung der Datenmodelle
Nach dem Aufsetzen des Projekts wurden die benötigten Datenmodelle aus der OpenAPI-Definition als Klassen implementiert. Durch die monolithische Architektur von Slagg können sich Frontend und Backend diese Datentypen teilen und so Datenkonsistenz bei der Übertragung erleichtern.

# 5.2 Implementierung der Datenbank 
Als nächstes wurde die Datenbankverbindung implementiert, wie in der Entwurfsphase entschlossen wurde dazu ein ORM namens Drizzle genutzt. Drizzle hat uns erlaubt eine SQLite Datenbank nach dem „code first“ Prinzip zu implementieren. Somit mussten wir nur die zuvor erstellten Datenmodelle bei Drizzle registrieren, um so die Datenbank aufzusetzen. 

# 5.3 Implementierung der Benutzeroberfläche
Nach der Datenbank wurde die Benutzeroberfläche entwickelt, Dazu wurden die Mockups aus der Entwurfsphase hinzugenommen. Die Oberfläche wurde mit Svelte entwickelt und in das Projekt integriert über die Express.js-Logik, so sind einzelne Pages als „Views“ über definierte Routen erreichbar. Dieses Vorgehen hat es uns ermöglicht unser Datenmodell in der Implementierungsphase noch einmal zu überprüfen. Sollte uns bei der Entwicklung der Oberfläche auffallen, dass wir einen Fehler gemacht haben und das Datenmodell anpassen müssen, dann ist dies hier möglich mit einen Regressionsschritt in die Entwurfsphase und das, ohne auch die Backend Logik anfassen zu müssen.

# 5.3 Implementierung des Backends
Nachdem die Benutzeroberfläche fertig war, wurde die Backend-Logik umgesetzt. Hierzu wurde wieder die OpenAPI-Definition hinzugezogen. Die einzelnen API-Endpunkte wurden definiert und ihnen wurden wieder nach Express.js-Logik Routen zugewiesen. Dieses Mal wurden die Routen jedoch mit einem Präfix versehen, um sie von den Frontend Routen zu unterscheiden. So sind Endpunkte nur über Routen, die so aufgebaut sind erreichbar: „https://<server-Adresse>/api/<Endpunkt>“. Als letztes musste dann die Websocket-Logik implementiert werden, über diesen Teil der Anwendung werden dann die eigentlichen Nachrichten verschickt. Ein Websocket ist eine Netzwerkverbindung, die eine dauerhafte, bidirektionale Kommunikation zwischen Client und Server ermöglicht, wodurch Daten in Echtzeit ohne wiederholtes Anfordern gesendet und empfangen werden können. Clients fordern über einen Endpunkt an eine neue Websocket-Verbindung mit dem Backend aufzubauen und empfangen dann über diese die einzelnen Nachrichten andere Nutzer.

# 5.5 Testen der Anwendung
Wie im Abschnitt 4.6 (Maßnahmen zur Qualitätssicherung) beschrieben, wurde die Anwendung kontinuierlich durch Unit-Tests getestet. Diese wurden auch in eine Pipeline integriert und für jede Pull-Request im Repository automatisch durchgeführt. Für die Tests wurde das Jest Framework genutzt, durch das wir sowohl Frontend als auch Backend Code teste konnten. 
Ebenfalls wurden manuelle End-to-End Tests durchgeführt, wobei unser Vorgehen von Frontend zu Backend wieder von Vorteil war. So konnten einzelne Backend-Endpunkte sofort mit dem Frontend verbunden und getestet werden. 
Zum Abschluss der Implementierung wurde ebenfalls das Deployment getestet, Hierzu wurde ein Server aufgesetzt wie er später auch beim Kunden eingesetzt wird mit Slagg in seiner finalen Fassung. Dann wurde ein längerer manueller Stresstest durchgeführt und zum Schluss die Antwortzeit aller Endpunkte maschinell mit dem Tool Postman getestet. 
