# stylelint-config-wxss

[![NPM version](https://img.shields.io/npm/v/stylelint-config-wxss.svg?style=flat-square)](https://www.npmjs.com/package/stylelint-config-wxss)
[![AppVeyor](https://img.shields.io/appveyor/ci/gucong3000/stylelint-config-wxss.svg)](https://ci.appveyor.com/project/gucong3000/stylelint-config-wxss)
[![codecov](https://img.shields.io/codecov/c/github/gucong3000/stylelint-config-wxss.svg)](https://codecov.io/gh/gucong3000/stylelint-config-wxss)
[![David](https://img.shields.io/david/dev/gucong3000/stylelint-config-wxss.svg)](https://david-dm.org/gucong3000/stylelint-config-wxss?type=dev)

> The WeChat wxss syntax config for stylelint.

Use it as is or as a foundation for your own config.

It is derived from the common rules found within a handful of CSS styleguides, including: [The Idiomatic CSS Principles](https://github.com/necolas/idiomatic-css),
[Github's PrimerCSS Guidelines](http://primercss.io/guidelines/#scss),
[Google's CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml#CSS_Formatting_Rules), [Airbnb's Styleguide](https://github.com/airbnb/css#css), and [@mdo's Code Guide](http://codeguide.co/#css).

It favours flexibility over strictness for things like multi-line lists and single-line rulesets, and tries to avoid potentially divisive rules.

To see the rules that this config uses, please read the [config itself](./index.js).

## Example

```css
/* Error: selector-max-compound-selectors */
a b {
  top: 0rpx;
}

/* Error: length-zero-no-unit */
a {
  top: 0rpx;
}

/* Error: property-no-vendor-prefix */
a {
  -moz-columns: 2;
}

/* Error: value-no-vendor-prefix */
a {
  display: -webkit-flex;
}
```

*Note: the config is tested against this example, as such the example contains plenty of CSS syntax, formatting and features.*

## Installation

```bash
npm i stylelint-config-standard stylelint-config-wxss --save-dev
```

## Usage

If you've installed `stylelint-config-wxss` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-wxss"
}
```

If you've globally installed `stylelint-config-wxss` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-wxss` in your config e.g.

```json
{
  "extends": "stylelint-config-wxss"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, turn off the `number-leading-zero` rule, change the `property-no-unknown` rule to use its `ignoreAtRules` option and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-wxss",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null,
    "property-no-unknown": [ true, {
      "ignoreProperties": [
        "composes"
      ]
    }],
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## [License](LICENSE)
