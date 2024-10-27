### **Anforderungsanalyse**

Die Anforderungen an das On-Premise-Chat-Tool umfassen sowohl funktionale als auch sicherheitsrelevante Aspekte, die den Betrieb innerhalb des hochsicheren Netzwerks des Kunden ermöglichen. Diese Anforderungen basieren auf der Notwendigkeit, sensible Daten zu schützen und dem Wunsch des Kunden, eine zuverlässige und benutzerfreundliche Kommunikationsplattform für interne Zwecke zu entwickeln.

#### **Funktionale Anforderungen**

Das Tool muss eine Reihe von Schlüsselfunktionen bieten, um die internen Kommunikationsbedürfnisse des Kunden zu erfüllen:

1. **On-Premise Betrieb**:
   Um den hohen Sicherheitsanforderungen gerecht zu werden, darf das Tool ausschließlich im lokalen Netzwerk des Kunden betrieben werden und keine externe Kommunikation oder Datenübertragung durchführen.

2. **Verbotene Wörter**:
   Eine vordefinierte Liste verbotener Wörter ist im System hinterlegt. Nachrichten, die diese Wörter enthalten, werden blockiert und nicht versendet, um Richtlinienverstöße zu vermeiden.

3. **Nachrichtenüberwachung**:
   Administratoren müssen in der Lage sein, alle versendeten Nachrichten zu überwachen, um die Einhaltung der Sicherheitsrichtlinien zu gewährleisten und gegebenenfalls einzugreifen.

4. **Benutzerverwaltung**:
   Administratoren sollten die einzigen Benutzer sein, die neue Benutzerkonten anlegen können. Alle Benutzer müssen sich mit ihren Zugangsdaten am System anmelden, um auf die Funktionen des Tools zugreifen zu können.

5. **Direkte und Gruppenchats**:
   Die Kommunikation soll sowohl in Form von direkten Nachrichten zwischen zwei Nutzern als auch in Form von Gruppenchats mit mehreren Teilnehmern möglich sein. Damit wird sichergestellt, dass die tägliche Abstimmung in unterschiedlichen Kommunikationskonstellationen reibungslos funktioniert.

6. **Webbrowser-Kompatibilität**:
   Das Tool sollte mit allen modernen Browsern voll kompatibel sein.

#### Sicherheitsanforderungen

1. **Keine externen Verbindungen**:
   Da das Tool mit hochsensiblen Daten arbeitet, sind keine Verbindungen zu externen Servern erlaubt. Alle Informationen bleiben strikt innerhalb des lokalen Netzwerks und werden nicht nach außen übertragen.

2. **Keine externen Abhängigkeiten**:
   Um das Risiko potentieller Sicherheitslücken zu minimieren, wird auf unnötige externe Abhängigkeiten verzichtet. Der gesamte Code wird modular und unabhängig gehalten, um die Sicherheit des Systems zu maximieren.

3. **Datenverschlüsselung**:
   Alle Datenübertragungen zwischen Client und Server werden durch **TLS (Transport Layer Security)** geschützt. Dies gewährleistet eine sichere Datenkommunikation und schützt die Vertraulichkeit und Integrität der Informationen.

Diese Anforderungen stellen sicher, dass das Tool die gewünschte Funktionalität für die interne Kommunikation bietet, ohne die strengen Sicherheitsvorschriften zu verletzen.
