# cardGame
A small exercice for a card game

- Clone the repo 
- you can start the game with node.js and the command "node cardGame" in the terminal

Instructions(German)
# Kartenspiel
Diese kleine Übung beschreibt ein einfaches (wenn auch nicht sehr spannendes) Kartenspiel, das es zu implementieren gilt.
Der Fokus sollte dabei auf sauberem, gut strukturierten Code liegen. Externe Libraries oder Frameworks werden nicht
benötigt (sind aber natürlich auch nicht verboten). Und natürlich gibt es nicht die eine richtige Implementierung,
sondern viele verschiedene Wege führen zum Ziel!

## Beschreibung des Ablaufs
Das Kartenspiel ist als einfache Kommandozeilenanwendung umzusetzen. Gespielt wird in Runden, wobei der Ablauf des 
Spiels und das Ergebnis als Print outs auf der Konsole ausgegeben werden. Nach Beendigung einer Runde wird die Spielerin
gefragt, ob sie eine weitere Runde spielen möchte. Falls das bejaht wird, geht die nächste Runde los. Ansonsten wird die
Anwendung beendet.

## Spielregeln
Gespielt wird mit einem standartisierten Pokerblatt, d.h. es gibt 52 Karten in den Farben 

`Kreuz, Pik, Herz und Karo` 

sowie den Werten 

`As, König, Dame, Bube, 10, 9, 8, 7, 6, 5, 4, 3, 2`.

Jede Runde beginnt mit einem vollständigen, gemischten Blatt. Dem Spieler werden fünf Karten zugeteilt (Ausgabe auf der
Konsole). Dann werden dem Computer ebenfalls fünf Karten zugeteilt und auf der Konsole ausgegeben. Jetzt wird anhand der folgenden Regeln ermittelt, wer gewonnen hat:
- Wer die meisten Karten in einer Farbe hat, gewinnt.
- Bei Gleichstand gewinnt die Person, deren Satz farbgleicher Karten mehr Punkte enthält (As: 11 Punkte; König, Dame und Bube jeweils 10 Punkte). 
- Falls auch hier Gleichstand herrscht, gewinnt der Computer.

Beispiel
```
Spieler:    Herz As, Kreuz Bube, Karo 10, Herz 9, Herz 4
Computer:   Pik 9, Kreuz 8, Karo 5, Pik König, Pik 5

- Spieler und Computer haben jeweils drei farbgleiche Karten (Herz bzw. Pik).
- Spieler und Computer haben jeweils 24 Punkte (11+9+4 bzw. 9+10+5).
- Demnach gewinnt der Computer.
```

## Anforderungen
Für die Umsetzungen gelten folgende Vorgaben:
- Das Programm sollte in Java (oder einer anderen JVM Sprache wie Scala oder Kotlin) geschrieben sein.
- Der Quellcode sollte auf Englisch geschrieben sein (Klassennamen, Methoden, Variablen, Kommentare, ...).
- Der Quellcode der Anwendung liegt bei.
- die Anwendung muss mittels eines Kommandozeilenbefehls auszuführen sein (bitte beschreiben). Das kann mittels 
beiliegender *.class-Dateien erfolgen oder unter Verwendung eines Build Tools wie Gradle oder Maven.
- Gerne auch weitere Kommentare, wie z.B. welche Annahmen getroffen wurden, welche Aspekte absichtlich nicht berücksichtigt
 wurden, ergänzen.
- Die Einsendung kann auf beliebigem Wege an die bekannte E-Mail-Adresse erfolgen (z.B. als Zip Datei, Link auf ein Github Repo, Link auf Google Drive
 etc.).
 
 ## Hinweise
 - besser "sprechender" Code als viele Inline-Kommentare
 - aber natürlich gerne Kommentare, wo sinnvoll
 - ist der Code leicht erweiterbar, z.B. falls sich die Regeln später ändern sollten?
 - 1-2 exemplarische Unit Tests zur Absicherung?
 - nicht mehr als maximal 2 Stunden für die die Implementierung verwenden
  
  **Viel Spaß und viel Erfolg!**

