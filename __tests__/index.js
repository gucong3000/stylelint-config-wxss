"use strict"

const config = require("../")
const stylelint = require("stylelint")
config.rules["length-zero-no-unit"] = true

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
      return data
    }).then(data => {
      expect(data.results[0].warnings[0].rule).toBe("length-zero-no-unit")
      expect(data.errored).toBeTruthy()
    })
  })
})
