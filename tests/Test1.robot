*** Settings ***
Library           SeleniumLibrary
Library           Process
Library    XML
Library    OperatingSystem

*** Variables ***
${URL}            https://localhost:3000
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

    Close Browser
