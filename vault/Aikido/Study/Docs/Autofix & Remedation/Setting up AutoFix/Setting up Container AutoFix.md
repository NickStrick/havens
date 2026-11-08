---
title: "Setting up Container AutoFix"
source: https://help.aikido.dev/autofix-and-remediation/configure/setting-up-container-autofix
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# Setting up Container AutoFix

AutoFix fixes container issues by making changes to the Dockerfile. It rebuilds your image to determine which container issues have been fixed by the change in the Dockerfile (eg. upgrading the base image).

## Repository & Dockerfile

AutoFix automatically detects the repository and Dockerfile. In case this automatic detection fails, it can be configured manually on the [AutoFix > Cloud > Container page](https://app.aikido.dev/issues/fix/container), by clicking `Container Settings` in the action menu:

<figure><img src="https://help.aikido.dev/_assets/5075add2e894/image-449.png" alt=""><figcaption></figcaption></figure>

The Container Setting modal allows you to select a repository and Dockerfile:

<figure><img src="https://help.aikido.dev/_assets/d1d1d36dd123/image-450.png" alt=""><figcaption></figcaption></figure>

## Build Args

In case your container build requires build args, these can be configured in the advanced section in the `Container Settings` :

<figure><img src="https://help.aikido.dev/_assets/277b1c95176f/image-451.png" alt=""><figcaption></figcaption></figure>

The `AIKIDO_TOKEN` used for Aikido images will be provided automatically as a build arg, so you don't need to configure it yourself. Any other build arg has to be configured here.

## Automated Container AutoFixes

Container AutoFix can automatically create pull requests for base image upgrades. These jobs run daily and a pull request is created when a newer base images solves open container issues.

The Automated Container AutoFixes can be configured on [AutoFix > Settings](https://app.aikido.dev/issues/fix/settings), by clicking `Docker containers` under Automated PRs:

<figure><img src="https://help.aikido.dev/_assets/bfb292377c5f/image-452.png" alt=""><figcaption></figcaption></figure>

Under advanced you will find the following options:

* **Update OS Packages:** by default Container AutoFix updates the OS packages in the image (eg. `apt-get upgrade`). This helps resolved issues for base images that have not been rebuilt with the latest OS packages, but results in non-deterministic builds.
* **Default tag pattern:** only image tags that follow this pattern will be used by Container AutoFix. For examle if you're using the `-alpine` variant for an image, adding `*-alpine` as the default tag pattern, will make sure Container AutoFix only suggests tags that end with `-alpine`.
* **Image tag rules:** works the same way as the default tag pattern, but it the pattern is only applied for images that match the provided name pattern.

<figure><img src="https://help.aikido.dev/_assets/7177a39ee934/image-454.png" alt=""><figcaption></figcaption></figure>

The configuration above enables Automated Container AutoFixes:

* for 126 selected containers
* it upgrades the OS packages
* uses base images ending in `-alpine3.24` for images ending in `-app`
* uses base images ending in `-alpine` for all other images

## Customizing Container AutoFixes

There are 2 ways to customize a Container AutoFix:

* **Fix another way**: scans different tags of your base image. Use this to compare the impact of different base images.
* **Refine with Aikido AI**: can make additional changes to the Dockerfile based on the selected base image.

<figure><img src="https://help.aikido.dev/_assets/b4eb3aaeacc4/image-455.png" alt=""><figcaption></figcaption></figure>

### Fix another way

Use this to compare the impact of different base images, you can select up to 4 additional base images to scan. The configuration allows you to disable adding OS package upgrades.

<figure><img src="https://help.aikido.dev/_assets/62d110c5dcc1/image-456.png" alt=""><figcaption></figcaption></figure>

### Refine with Aikido AI

Provide natural text instructions on the changes you want to make to the Dockerfile. Container AutoFix will make the changes to the Dockerfile and rescan to determine which issues are fixed by the change. Can be used to:

* using a different base image
* update versions of binaries installed in the Dockerfile
* changing the pinned versions of OS packages
