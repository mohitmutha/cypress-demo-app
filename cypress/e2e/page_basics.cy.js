describe('basic page check', () => {
  it('header text', () => {
    cy.visit('http://localhost:3001')
    cy.get('[data-testid=page-title]').should('have.text','Calculator')
  })

  it('input 5', () => {
    cy.visit('http://localhost:3001')
    cy.get('#input-value').type(5)
    cy.get('#square-result-value').should('have.text',25)
    cy.get('#cube-result-value').should('have.text',125)
    cy.get('#fibonacci-result-value').should('have.text',3)
  })
})