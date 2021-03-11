# ird-ss-21

Sights ist eine Anwendung zur Darstellung und Verwaltung von Sehenswürdigkeiten.

Die Anwendung ist als so genannte Micro Service Architecture strukturiert, die aus 3 Komponenten besteht.
- Datenbank
- Server 
- Web Anwendung

## Voraussetzungen: 

- PostgreSQL >=10
- PostGIS >= 2.6
- NodeJS >= 10

## Datenbank

### Installation

Die Datenbankinstallationsdateien liegen unter [db/](db/) und lassen sich mit einem SQL Client installieren.

## Server

Der Server liegt unter [server/](server/) und kann wie folgt verwendet werden:

Öffne ein Terminal Programm navigiere zu [server/](server/) und verwende die folgende Befehle:

### Installation
```
npm install
```

### Start the webserver
```
node server.js
```

### Stop the webserver
```
strg + c
```

## Web Anwendung
Die Websitedateien liegen unter [webapp/public/](webapp/public/) und lassen sich mit einem Texteditor oder einer IDE bearbeiten.

## Nützliche Tools
- IDE: [Visual Studio Code](https://code.visualstudio.com/)
- SQL Client: [DBeaver](https://dbeaver.io/)
