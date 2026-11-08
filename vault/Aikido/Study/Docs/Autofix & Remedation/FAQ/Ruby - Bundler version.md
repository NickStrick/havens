---
title: "Ruby - Bundler version"
source: https://help.aikido.dev/autofix-and-remediation/faq/ruby-bundler-version
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# Ruby / Bundler version

AutoFix uses the Ruby & Bundler versions defined in the Gemfile. If these versions are not present, AutoFix will default to Ruby 3.2.9 and Bundler 2.4.19.

Example of a minimal Gemfile with the versions defined:

```
source 'https://rubygems.org'

ruby '4.0.6'
gem 'bundler', '4.0.3'
```
