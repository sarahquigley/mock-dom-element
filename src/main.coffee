class MockElement
  constructor: () ->
    @clientWidth = 0
    @clientHeight = 0

  addEventListener: () =>

window.MockElement = MockElement
