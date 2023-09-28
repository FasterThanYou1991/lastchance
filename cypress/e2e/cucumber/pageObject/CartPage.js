class CartPage
{
    constructor() {
        this.sum = 0;
    }
    trimValue()
    {
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => 
        {
            const valueText = $el.text();
            var res = valueText.split(" ");
            res = res[1].trim();
            this.sum = Number(this.sum) + Number(res);
            
        }).then(function()
        {
            cy.log(this.sum);
        }.bind(this));
    };

    compareSumValue()
    {
        cy.get('h3 strong').then(function(element)
        {
            const totalValue = element.text();
            var res = totalValue.split(" ");
            var total = res[1].trim();
            expect(Number(total)).to.equal(Number(this.sum));
        }.bind(this));
    };
}
module.exports = {CartPage} ;