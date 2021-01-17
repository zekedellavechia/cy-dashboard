describe('Select Box', () => {
    it('Should pick from select box', ()=>{
        cy.visit('http://devexpress.github.io/testcafe/example/')
        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')
    })
})
