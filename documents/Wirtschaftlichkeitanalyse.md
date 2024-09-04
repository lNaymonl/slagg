# Wirtschaftlichkeitanalyse

## Make-or-Buy Entscheidung

Während der Analysephase ergab die Recherche, dass es auf dem Markt keine vergleichbaren Lösungen für Slack gibt, die unseren Anforderungen entsprechen **_(Nämlich: selbst gehostet, Open Source, mit neuer Technik?)_**.

Die Beauftragung eines Dienstleisters für die Softwareentwicklung ist keine praktikable Option, da es schwierig ist, einen Anbieter zu finden, der zu angemessenen Kosten liefern kann. Außerdem machen die laufenden Kosten für Wartung und Instandhaltung diese Alternative unpraktisch.

Die Wirtschaftlichkeit des „Make“-Szenarios wird durch eine deutliche Steigerung der Flexibilität, Skalierbarkeit und Anpassungsfähigkeit ergänzt. Da die Software relativ einfach ist und auf vorhandener Hardware läuft, sind Wartung und Instandhaltung vernachlässigbar.

## Kostenplanung

Die folgenden Berechnungen gehen von einem fiktiven Lehrlingslohn von 12 € aus, da dies ein angemessener Lohn ist, der dem Unternehmen zusätzliche Kosten verursacht. Materialkosten sind nicht zu erwarten, da das Unternehmen bereits über eine Vielzahl von Entwicklungswerkzeugen verfügt und für die restlichen benötigten Programme kostenlose Alternativen genutzt werden können.

| **Vorgang**     | **Stundensatz** | **Zeit** | **Gesamt**  |
| --------------- | --------------- | -------- | ----------- |
| Anylyse         | 12.5€           | 11       | 137.5€      |
| Entwurf         | 12.5€           | 24       | 300€        |
| Implementierung | 12.5€           | 104      | 1300€       |
| Deployment      | 12.5€           | 20       | 250€        |
| Dokumentation   | 12.5€           | 32       | 400€        |
| **Summe**       |                 |          | **2387,5€** |

## Amortisationsrechnung

Basierend auf der bestehenden Kostenplanung und unter der Annahme, dass die Wartung vernachlässigbar sein wird, wird die Entwicklung des neuen On-Premise-Chat-Tools insgesamt 2.387,50 € kosten. Für die Nutzung von Slack entstehen dem Unternehmen derzeit jährliche Kosten in Höhe von 3.465 Euro (35 Mitarbeiter zu je 8,25 Euro pro Monat). Durch die Einführung des neuen Tools, das diese externen Lösungen ablöst, können diese Kosten vollständig eingespart werden.

Die Amortisationszeit in dem sich die Investition in das neue Chat-Tool amortisiert, beträgt 0,69 Jahre (ca. 8,3 Monate). Am Ende dieses Zeitraums wird das Unternehmen jährliche Einsparungen in Höhe von 3.465 € erzielen, vorausgesetzt, die laufenden Wartungs- und Betriebskosten des neues Tools bleiben vernachlässigbar. Dies zeigt, dass das Projekt aus finanzieller Sicht schnell rentabel ist und eine gute Investition darstellt.

## Nicht monetäre Entscheidung

Auch in nicht-monetärer Hinsicht lohnt sich das Projekt: Das Unternehmen kann neue Erfahrungen im Bereich der Webentwicklung sammeln, da der Schwerpunkt bisher auf Backend- und Legacy-Software lag. Da für die Umsetzung dieses Projekts neue Sprachen implementiert werden müssen, kann dies dazu beitragen, die Projekte des Unternehmens in Zukunft zu erweitern. Außerdem bietet es den Auszubildenden einen Einblick in eine Seite der Entwicklung, die sie sonst während ihrer Ausbildung nicht kennengelernt hätten.
