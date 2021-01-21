describe('Scroll on the Page', () => {
    it('Should Scroll down to the button at the end', ()=>{
        cy.visit('https://duckduckgo.com/')
        cy.get('a.btn.btn--primary.atb-button--faq.ddg-extension-hide').scrollIntoView()
        cy.wait(5000)
    })
    
    it('Should  scroll up and search', () =>{
        cy.get('#search_form_input_homepage').scrollIntoView()
        cy.get('#search_form_input_homepage').type("Hello")
        cy.get('#search_button_homepage').click()
    })

    it('Should see Hellomagazine.com as first result', () =>{
        cy.get('.module__title__link').contains('Hellomagazine.com')
    })

})
