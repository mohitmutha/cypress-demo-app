import SquareCard from "../../src/components/SquareCard"

describe('Square card component', () => {
  it('has card heading Square', () => {
    cy.mount(<SquareCard></SquareCard>)
    cy.get('#square-result-card-title').should('contains.text', 'Square')
  })

  it('renders an error when an undefined value is passed', () => {
    cy.mount(<SquareCard></SquareCard>)
    cy.get('#square-result-value').should('contains.text', 'Error - Non numeric value')
  })

  it('renders an error when a non-numeric value is passed', () => {
    cy.mount(<SquareCard></SquareCard>)
    cy.get('#square-result-value').should('contains.text', 'Error - Non numeric value')
  })

  it('renders the square of the value passed', () => {
    const inputData = Array.from([[2,4],[-3,9],[0.2,0.04],[-0.5,0.25]])
    inputData.forEach(x => { 
      cy.mount(<SquareCard value={x[0]}></SquareCard>)
      cy.get('#square-result-value').should('contains.text', x[1])
    })
  })
})