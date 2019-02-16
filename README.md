# Nx Workspace Starter Kit

> An [Nx Workspace](https://nrwl.io/nx/guide-nx-workspace) monorepo starter kit for managing [Angular](https://angular.io/) applications and their shared libraries.

---

[![Build Status](https://travis-ci.com/seantrane/nx-starter.svg?branch=master)](https://travis-ci.com/seantrane/nx-starter) [![Nx Workspace](https://img.shields.io/badge/monorepo-Nx%20Workspace-blue.svg)](https://nrwl.io/nx/guide-nx-workspace) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Table of Contents

- [About the Repository](#about)
- [Install](#install)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## About the Repository <a id="about"></a>

<a href="https://nrwl.io/nx/guide-nx-workspace"><img src="https://raw.githubusercontent.com/seantrane/nx-starter/master/apps/nxsweb/src/_rootfiles/nx-logo.png" align="right"></a>

This repository is an [Nx Workspace](https://nrwl.io/nx/guide-nx-workspace) monorepo for [Angular](https://angular.io/) common applications and their shared libraries, modules, components and more. It is made using [Nrwl Extensions for Angular](https://nrwl.io/nx), an open source toolkit for enterprise Angular applications.

All _Angular_ packages should be developed in compliance with _[Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview)_ using [ng-packagr](https://github.com/dherges/ng-packagr).

## Install <a id="install"></a>

```sh
# Install Angular CLI and Nrwl Schematics
npm install -g @angular/cli @nrwl/schematics
# Install dependencies and bootstrap
npm install
```

## Usage <a id="usage"></a>

### CLI

```sh
# TBD

# Generate app. Use '-d' flag to enable dry-run
ng g app <app_name> --routing --style scss --prefix <app_prefix>

# Generate lib. Use '-d' flag to enable dry-run
ng g lib <lib_name> --routing --prefix=<lib_prefix> --parent-module=apps/<app_name>/src/app/app.module.ts

```

> :point_up: _more instructions coming soon._

---

## Support <a id="support"></a>

Submit an [issue](https://github.com/seantrane/nx-starter/issues/new), in which you should provide as much detail as necessary for your issue.

## Contributing <a id="contributing"></a>

Contributions are always appreciated. Read [CONTRIBUTING.md](https://github.com/seantrane/nx-starter/blob/master/CONTRIBUTING.md) documentation to learn more.

## Changelog <a id="changelog"></a>

Release details are documented in the [CHANGELOG.md](https://github.com/seantrane/nx-starter/blob/master/CHANGELOG.md) file, and on the [GitHub Releases page](https://github.com/seantrane/nx-starter/releases).

---

## License <a id="license"></a>

[ISC License](https://github.com/seantrane/monorepo/blob/master/LICENSE)

Copyright (c) 2018 [Sean Trane Sciarrone](https://github.com/seantrane)
