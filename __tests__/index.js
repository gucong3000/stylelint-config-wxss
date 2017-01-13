"use strict"

const config = require("../")
const stylelint = require("stylelint")

describe("flags warnings with invalid css", () => {
  it("selector-max-compound-selectors", () => {
    return stylelint.lint({
      code: "a b { top: 0; }",
      config,
    }).then(data => {
      expect(data.results[0].warnings[0].rule).toBe("selector-max-compound-selectors")
      expect(data.errored).toBeTruthy()
    })
  })
  it("length-zero-no-unit", () => {
    return stylelint.lint({
      code: "a { top: 0rpx; }",
      config,
    }).then(data => {
      expect(data.results[0].warnings[0].rule).toBe("length-zero-no-unit")
      expect(data.errored).toBeTruthy()
    })
  })
  it("at-rule-no-vendor-prefix", () => {
    return stylelint.lint({
      code: "@-webkit-keyframes { 0% { top: 0; } }",
      config,
    }).then(data => {
      expect(data.results[0].warnings[0].rule).toBe("at-rule-no-vendor-prefix")
      expect(data.errored).toBeTruthy()
    })
  })
  it("media-feature-name-no-vendor-prefix", () => {
    return stylelint.lint({
      code: "@media (-webkit-min-device-pixel-ratio: 1) {}",
      config,
    }).then(data => {
      expect(data.results[0].warnings[0].rule).toBe("media-feature-name-no-vendor-prefix")
      expect(data.errored).toBeTruthy()
    })
  })
  it("property-no-vendor-prefix", () => {
    return stylelint.lint({
      code: "a { -moz-columns: 2; }",
      config,
    }).then(data => {
      expect(data.results[0].warnings[0].rule).toBe("property-no-vendor-prefix")
      expect(data.errored).toBeTruthy()
    })
  })
  it("selector-no-vendor-prefix", () => {
    return stylelint.lint({
      code: "input::-moz-placeholder {}",
      config,
    }).then(data => {
      expect(data.results[0].warnings[0].rule).toBe("selector-no-vendor-prefix")
      expect(data.errored).toBeTruthy()
    })
  })
  it("value-no-vendor-prefix", () => {
    return stylelint.lint({
      code: "a { display: -webkit-flex; }",
      config,
    }).then(data => {
      expect(data.results[0].warnings[0].rule).toBe("value-no-vendor-prefix")
      expect(data.errored).toBeTruthy()
    })
  })
})
