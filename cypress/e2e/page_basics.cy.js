describe('basic page check', () => {
  it('header text', () => {
    cy.visit('http://localhost:3001')
    cy.fixture('elementLocators').then(elementLocators => {
      cy.get(elementLocators.pageTitle).should('have.text', 'Calculator')
    })

  })

  it('input 5', () => {
    cy.visit('http://localhost:3001')
    cy.fixture('elementLocators').then(elementLocators => {
      cy.get(elementLocators.numberInput).type(5)
      cy.get(elementLocators.squareResult).should('have.text', 25)
      cy.get(elementLocators.cubeResult).should('have.text', 125)
      cy.get(elementLocators.fibonacciResult).should('have.text', 3)
    })
  })
})