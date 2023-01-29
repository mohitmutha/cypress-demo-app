import CubeCard from "../../src/components/CubeCard"
describe('Cube card component', () => {
  it('has card heading Cube', () => {
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
  it('renders the cube of the value passed', () => {
    const inputData = Array.from([[2,8],[-3,-27],[0.2,0.008],[-0.5,-0.125]])
    inputData.forEach(x => { 
      cy.mount(<CubeCard value={x[0]}></CubeCard>)
      cy.get('#cube-result-value').should('have.text', x[1])
    })
  })
})