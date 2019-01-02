"use strict"

require("stylelint/lib/reference/keywordSets.js").lengthUnits.add("rpx")

module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-max-compound-selectors": 1,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
  },
}
