Feature: End to end Ecommerce validation

    This is the feature
    Scenario: Ecommerce products delivery
        Given Open angularPractice
        When Add items to cart
        And Validate the total prices
        Then Select the country submit and verify success


    Scenario: Filling the form to shop
        Given Open angularPractice
        When I fill the form details
        Then Validate the forms behaviour
        And Select the shop page