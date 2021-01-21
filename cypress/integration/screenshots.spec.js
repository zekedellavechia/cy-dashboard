describe('Testing for Screenshots options in Cypress', () => {
    it('Should Visit DuckDuckGo', ()=>{
        cy.visit('https://duckduckgo.com/')
        cy.screenshot({capture: 'fullPage'})
    })
})
