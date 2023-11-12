*** Settings ***
Library           SeleniumLibrary
Library           Process

*** Variables ***
${URL}            http://localhost:8501
${BROWSER}        chrome

*** Test Cases ***

Test Head
    Log To Console    test_head
    Open Browser    ${URL}    ${BROWSER}
    Sleep    5
    Page Should Contain  Demo
    Sleep    2
    Page Should Contain  v3
    Page Should Contain  AI Infrastructure for Model training

    Page Should Contain Button  Train
    Click Button    Train     
    Click Button    Train
    Sleep    40

    Page Should Contain    Model Training Request completed successfully!
    Page Should Contain Button    Download Model
    Click Button    Download Model
    Sleep    5
#    Click Element    //*[contains(text(),'v2') or contains(text(),'v1')]    


# ||| FIXME error with locating X path 
# From what I could tell, rbframework can detect the mainbody page, 
# but fails to locate anything on the sidebar, hence the issue with locating app, v1 and v2 


#    Sleep    1
#    Page Should Contain    You didn't select comedy
    Close Browser
