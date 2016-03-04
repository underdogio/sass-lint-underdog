sass-lint-underdog
==================
[![Build Status](https://travis-ci.org/underdogio/sass-lint-underdog.svg?branch=master)](https://travis-ci.org/underdogio/sass-lint-underdog)
[![npm version](https://badge.fury.io/js/sass-lint-underdog.svg)](http://badge.fury.io/js/sass-lint-underdog)

Base [sass-lint](https://github.com/sasstools/sass-lint) config for Underdog.io's SASS code.

## Usage
Install this package as a dev dependency:

```bash
npm install --save-dev sass-lint-underdog
```

Use `sass-lint-underdog` command instead of `sass-lint` for linting your SASS code:

```bash
sass-lint-underdog scss/**/*.scss
```

`sass-lint-underdog` will continue to work as expected with your project's local `.sass-lint.yml`.

## CLI options
The only command line options that `sass-lint-underdog` supports is `-c <config-file>` or `--config <config-file>` to specify a `sass-lint` config file to load.

Other than that, `sass-lint-underdog` is the same as running `sass-lint [--config <config-file>] --verbose <FILE>...`.
