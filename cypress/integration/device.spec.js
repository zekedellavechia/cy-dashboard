describe('Device Tests', () => {
    it('720p', ()=>{
        cy.viewport(1280, 720)
        cy.visit('https://registry.qa.covid.gcp.rexdb.us/')
        cy.wait(3000)
        cy.get('h1').contains('CARE Project')
        cy.get('h1').contains('Join 24,600 People from Across the Globe to Fight COVID-19')
        cy.get('h1').contains('Share your experiences. Help find answers.')
        cy.get('.container > .ta-c > .cta').click()
    })

    it('1080p', ()=>{
        cy.viewport(1980, 1080)
        cy.visit('https://registry.qa.covid.gcp.rexdb.us/')
        cy.wait(3000)
    })

    
    it('iPhone X', ()=>{
        cy.viewport('iphone-x')
        cy.visit('https://registry.qa.covid.gcp.rexdb.us/')
        cy.wait(3000)
    })

        
    it('iPad-Mini', ()=>{
        cy.viewport('ipad-mini')
        cy.visit('https://registry.qa.covid.gcp.rexdb.us/')
        cy.wait(3000)
    })

            
    it('Macbook 11', ()=>{
        cy.viewport('macbook-11')
        cy.visit('https://registry.qa.covid.gcp.rexdb.us/')
        cy.wait(3000)
    })

})
