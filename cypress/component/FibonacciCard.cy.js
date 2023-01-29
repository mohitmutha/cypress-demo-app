import FibonacciCard from "../../src/components/FibonacciCard"
describe('Cube card component', () => {
  it('has card heading Fibonacci', () => {
    cy.mount(<FibonacciCard></FibonacciCard>)
    cy.get('#fibonacci-result-card-title').should('contains.text', 'Fibonacci')
  })

  it('renders an error when an undefined value is passed', () => {
    cy.mount(<FibonacciCard></FibonacciCard>)
    cy.get('#fibonacci-result-value').should('contains.text', 'Error - Input should be number greater than 0')
  })

  it('renders an error when a non-numeric value is passed', () => {
    cy.mount(<FibonacciCard value="dfs"></FibonacciCard>)
    cy.get('#fibonacci-result-value').should('contains.text', 'Error - Input should be number greater than 0')
  })

  it('renders an error when a value less than 0 or decimal is passed', () => {
    const inputData = Array.from([-1, 0, 0.2, -0.5])
    inputData.forEach(x => {
      cy.mount(<FibonacciCard value={x}></FibonacciCard>)
      cy.get('#fibonacci-result-value').should('contains.text', 'Error - Input should be number greater than 0')
    })

  })

  it('renders the cube of the value passed', () => {
    const inputData = Array.from([[2, 1], [3, 1], [4, 2], [5, 3]])
    inputData.forEach(x => {
      cy.mount(<FibonacciCard value={x[0]}></FibonacciCard>)
      cy.get('#fibonacci-result-value').should('have.text', x[1])
    })
  })
})