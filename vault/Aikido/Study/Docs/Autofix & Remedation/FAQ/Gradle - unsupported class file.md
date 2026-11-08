---
title: "Gradle - unsupported class file"
source: https://help.aikido.dev/autofix-and-remediation/faq/gradle-unsupported-class-file
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# Gradle - unsupported class file

When the Java toolchain version is not defined in the `build.gradle`, AutoFix might use the wrong Java version resulting in the following error:

```
Unsupported class file major version xx
```

This error can be solved by specifying the Java version in the `build.gradle` (or `build.gradle.kts`) file by adding:

```
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}
```

**Note:** Make sure to replace `21` with the actual Java version your project requires.
