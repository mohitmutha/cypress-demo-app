import FavoritesCard from "../../src/components/FavoritesCard"
import InputCard from "../../src/components/InputCard"

describe('Input card component', () => {
  it('has card heading Favorites', () => {
    cy.mount(<InputCard></InputCard>)
    cy.get('#input-card-title').should('contains.text', 'Enter a number')
  })

  it('displays the numeric values passed in the text box', () => {
    const inputData = Array.from([1, 2, 1000, -1, 0.1, 0.0001])
    inputData.forEach(val => {
      cy.mount(<InputCard value={val}></InputCard>)
      cy.get('#input-value').should('has.value', val)
    })

  })

  it('should not display non-numeric values', () => {
    const inputData = Array.from(["as", "a;ldsljfsldkj", "##@#$#%#$"])
    inputData.forEach(val => {
      cy.mount(<InputCard value={val}></InputCard>)
      cy.get('#input-value').should('has.value', "")
    })
  })

  it('should hightlight favorites when isFavorite is true', () => {
    cy.mount(<InputCard isFavorite={true} value={1}></InputCard>)
    cy.get('#fav-btn').should('have.css', "color", 'rgb(255, 0, 0)')
  })

  it('should not highlight favorites when isFavorite is true', () => {
    cy.mount(<InputCard isFavorite={false} value={1}></InputCard>)
    cy.get('#fav-btn').should('have.css', "color", 'rgba(0, 0, 0, 0.54)')
  })

  it('should trigger onChange event when a number is entered', () => {
    const onChange = cy.stub()
    cy.mount(<InputCard onChange={onChange} isFavorite={false}></InputCard>)
    cy.get('#input-value').type(20)
    cy.expect(onChange,'to.be.called.with',20)
  })

  it('should trigger onChange event when a number is entered', () => {
    const onFavouriteClick = cy.stub()
    cy.mount(<InputCard onFavouriteClick={onFavouriteClick} isFavorite={false}></InputCard>)
    cy.get('#fav-btn').click()
    cy.expect(onFavouriteClick,'to.be.called.with',20)
  })
})