---
title: "Aikido Images"
source: https://help.aikido.dev/autofix-and-remediation/aikido-images
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# Aikido Images

Updating to the latest version of a base image can be difficult because it may require changes to your application. When updating to a newer base image is not a viable option, you can stay secure by using **Aikido Images**.

Aikido Images is a registry of zero-CVE base images: drop-in replacements that carry patched versions of libraries with reported **CRITICAL** or **HIGH** severity security issues.

For example, [CVE-2025-4373](https://security-tracker.debian.org/tracker/CVE-2025-4373) is fixed by Debian in Trixie and Sid but not in Bookworm. The Aikido Images variant of `debian:bookworm` contains a patched version of `glib2.0` that fixes this vulnerability. Using this image avoids breaking changes while maintaining a good security posture.

## Aikido Images availability <a href="#aikido-images-availability" id="aikido-images-availability"></a>

You can check the available images on [https://images.aikido.dev/](https://images.aikido.dev/) or in the Aikido UI under [AutoFix > Aikido Images](https://app.aikido.dev/issues/aikido-images).

A subset of the Aikido Images is available on [the public ECR gallery](https://gallery.ecr.aws/). These images are identical to the images in the `docker.aikido.io` registry and are updated on the same cadence. The public images can be pull from the public ECR and `docker.aikido.io`.

<figure><img src="https://help.aikido.dev/_assets/63b785fa3394/AutoFix_Container_overview_-_Roland_Demo_Org_-_Aikido_Securi.png" alt=""><figcaption></figcaption></figure>

## Compared with upstream images

An Aikido Image has the same tag as its upstream image, with all Critical and High CVEs fixed. Image size and the tooling it contains depend on the variant. Runtime variants are smaller and leaner, and dev variants include build tooling.

## Pull Aikido Images

Pull Aikido Images from the Aikido registry at `docker.aikido.io`, authenticating with your workspace token.

To pull an image, replace the base image in your Dockerfile. AutoFix does this for you. See [AutoFix for Containers: Aikido Images](https://help.aikido.dev/autofix-and-remediation/aikido-images/autofix-for-containers-using-aikido-images).

## SBOMs, VEX, and provenance

Every Aikido Image comes with:

* A software bill of materials (SBOM) in CycloneDX format
* A Vulnerability Exploitability eXchange (VEX) document in CycloneDX format
* Provenance files. Aikido Images meet SLSA level 3.

Download these for any image from the Aikido app.

## See also

[autofix-for-containers-using-aikido-images.md](https://help.aikido.dev/autofix-and-remediation/aikido-images/autofix-for-containers-using-aikido-images)
