*** Settings ***
Library           SeleniumLibrary
Library           Process
Library    XML
Library    OperatingSystem

*** Variables ***
${URL}            http://decenterai.com
${BROWSER}        chrome

*** Test Cases ***

Test Head
    Log To Console    test_head
    Open Browser    ${URL}    ${BROWSER}
    Sleep    5
    Page Should Contain  DecentralIzed and DemocratIzed AI 
    Page Should Contain  Model TraInIng Infrastructure
    Sleep    2


    Page Should Contain Button  Try Demo
    Click Button    Try Demo
    Sleep    5

    Page Should Contain Button    Start here
    Click Button    Start here
    Sleep    2

# FIXME: sign in issue

#    Wait Until Element Is Visible    id=login-form_email
#    Input Text    id=login-form_email    {insertgmail}
#   sleep    10

    Page Should Contain    Train your AI model to the stars instantly.
    Page Should Contain Button    Train
    Click Button    Train
    Sleep    2

    Page Should Contain Button    Repository
    Click Button    Repository
    Sleep    2

    Page Should Contain Button    Settings
    Click button   Settings
    Sleep    2

    Page Should Contain Button    Log Out
    Click button   Log Out
    Sleep    2
    Close Browser
