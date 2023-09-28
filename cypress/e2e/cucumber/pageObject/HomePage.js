class HomePage
{
    getEditBox()
    {
        return cy.get('input.form-control[name="name"]');
    }

    getTwoWayDataBinding()
    {
        return cy.get('input.ng-untouched[name="name"]');
    }

    getGender()
    {
        return cy.get('select');
    }

    getEnterpreneaur()
    {
        return cy.get('#inlineRadio3');
    }

    getShopTab()
    {
        return cy.get('a[href*="/angularpractice/shop"]');
    }
}
module.exports = {HomePage} ;