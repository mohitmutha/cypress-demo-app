import CubeCard from "../../src/components/CubeCard"
describe('Cube card component', () => {
  it('has card heading Square', () => {
    cy.mount(<CubeCard></CubeCard>)
    cy.get('#cube-result-card-title').should('contains.text', 'Cube')
  })

  it('renders an error when an undefined value is passed', () => {
    cy.mount(<CubeCard></CubeCard>)
    cy.get('#cube-result-value').should('contains.text', 'Error - Non numeric value')
  })

  it('renders an error when a non-numeric value is passed', () => {
    cy.mount(<CubeCard></CubeCard>)
    cy.get('#cube-result-value').should('contains.text', 'Error - Non numeric value')
  })
})