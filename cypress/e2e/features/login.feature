Feature: Login MANTIS

    Background: Access the MANTIS website
        Given access to mantis website

    @testeum
    Scenario: Logar
        When enter with the user
        When click log in
        When enter the password
        When click enter
        Then should i view the admin