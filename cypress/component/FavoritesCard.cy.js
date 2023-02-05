import FavoritesCard from "../../src/components/FavoritesCard"

describe('Favorites card component', () => {
  it('has card heading Favorites', () => {
    cy.mount(<FavoritesCard></FavoritesCard>)
    cy.get('#favorites-card-title').should('contains.text', 'Favorites')
  })

  it('has message about no favorites when no favorites list is empty or undefined or non-array', () => {
    const inputData = Array.from([[], undefined, 1111, "sdfsd"])
    inputData.forEach(x => {
      cy.mount(<FavoritesCard values={x}></FavoritesCard>)
      cy.get('#favorites-card-message').should('contains.text', 'No favorites added')
    })
  })

  it('displays the favorites when a correct input is given', () => {
    const inputData = Array.from([[1, 2, 3], [1], [0], [-1], [0.1, 0.2, 1, 11111], ["ad", "asdsa", "11"]])
    inputData.forEach((x) => {
      cy.mount(<FavoritesCard values={x}></FavoritesCard>)
      x.forEach((val, idx) => {
        cy.get(`#favorites-tile-text-${idx}`).should('contain.text', val)
      })

    })
  })

  it('displays the favorites when a correct input is given and selected inout is highlighted', () => {
    const inputData = Array.from([[1, 2, 3], [1], [0], [-1], [0.1, 0.2, 1, 11111], ["ad", "asdsa", "11"]])

    inputData.forEach((x) => {
      const selectedValIndex = Math.floor(Math.random() * (x.length));
      const selectedVal = x[selectedValIndex]
      cy.mount(<FavoritesCard select={selectedVal} values={x}></FavoritesCard>)
      x.forEach((val, idx) => {
        if (idx === selectedValIndex) {
          cy.get(`#favorites-tile-${idx}`).should('have.css', "background-color", 'rgb(0, 0, 255)')
        } else {
          cy.get(`#favorites-tile-${idx}`).should('have.css', "background-color", 'rgba(0, 0, 0, 0)')
        }

      })

    })

    
  })


  it('triggers a onselect event when an item is clicked', () => {
    const inputData = Array.from([[1, 2, 3], [1], [0], [-1], [0.1, 0.2, 1, 11111], ["ad", "asdsa", "11"]])

    inputData.forEach((x) => {
      const clickIndex = Math.floor(Math.random() * (x.length));
      const clickedVal = x[clickIndex]
      const onSelect = cy.stub()
      cy.mount(<FavoritesCard onSelect={onSelect} select={clickIndex} values={x}></FavoritesCard>)
      cy.get(`#favorites-tile-${clickIndex}`).click()
      cy.expect(onSelect,'to.be.called.with',clickedVal)
    })
  })
})