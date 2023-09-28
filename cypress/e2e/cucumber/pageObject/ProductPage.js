class ProductPage
{
    checkoutButton()
    {
        return cy.get('li a.btn-primary');
    }
    purchaseProducts()
    {
        cy.get('#country').click();
        cy.get('div.suggestions a').click();
    }
};
module.exports = {ProductPage} ;