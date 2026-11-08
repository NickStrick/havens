---
title: "Browsing Packages"
source: https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/browsing-packages
section: Aikido Device Protection
fetched: 2026-11-08
generated: ingest_docs
---
# Browsing Packages

The Packages tab gives you a full inventory of every software package detected across your connected devices. This includes browser extensions, code libraries, IDE plugins, and build dependencies.

## Viewing your packages

Go to [Device Protection and open the Packages](https://app.aikido.dev/endpoint-protection/packages) tab. You will see a list of all detected packages, sorted by name.

<figure><img src="https://help.aikido.dev/_assets/262f6e41abd2/Screenshot-2026-04-09-at-12.34.58.png" alt=""><figcaption></figcaption></figure>

Each entry shows:

* **Package** - The package name and version (e.g. "axios@1.6.7")
* **Devices** - How many connected devices have this package installed
* **First seen** - The date and time the package was first detected

## Filtering by ecosystem

Use the **All Ecosystems** dropdown above the package list to filter by a specific source. This is helpful when you want to review only Chrome extensions or only NPM packages, for example.

You can also use the **Search** bar to find a specific package by name.

## What to look for

The Packages tab is a good starting point for understanding what software is running across your organization. Some things worth checking:

* Packages installed on many devices that you don't recognize
* Browser extensions that may pose a security or privacy risk
* Outdated package versions with known vulnerabilities
* Packages that were recently added and haven't been reviewed
