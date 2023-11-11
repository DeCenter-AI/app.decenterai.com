

describe('Notifications Components', () => {
    beforeEach(() => {
        cy.visit('dashboard/notifications');
    });

    it('should render Messages component with mock data', () => {


        // Load the fixture containing avatar data
        cy.fixture('avatar.json').then((avatarData) => {

            // Mock data for Messages component
            const notifications = [
                {
                    id: 1,
                    name: 'Mohammed Al El',
                    msg: 'Downloaded your model “Speech therapy TXT” ',
                    time: '12 Minutes ago',
                    avatar: avatarData.avatar.url,
                    read: false,
                },
            ];

            // Log to the Cypress command log
            cy.log('Visiting the page');
            cy.visit('dashboard/notifications');

            // Log to indicate that the test is checking for the element
            cy.log('Checking for [data-cy=messages] element');


            // Ensure correct selector
            cy.get('[data-cy=messages]').should('exist');

            // Rendering the Messages component with mock data
            cy.get('[data-cy=messages]').invoke('prop', 'notifications', notifications);

            // Assertion - Check if the component is rendered
            cy.get('[data-cy=messages] [data-cy=message-item]').should('have.length', notifications.length);
        });
    });

    it('should render ModalNotification component with mock data', () => {

        // Mock data for my ModalNotification component
        const notifications = [
            {
                id: 1,
                name: 'Mohammed Al El',
                msg: 'Downloaded your model “Speech therapy TXT” ',
                time: '12 Minutes ago',
                avatar: avatarData.avatar.url,
                read: false,
            },
        ];

        // Render the ModalNotification component with mock data
        cy.get('[data-cy=modal-notification]').invoke('prop', 'notifications', notifications);

        // Assertion - Check if the component is rendered
        cy.get('[data-cy=modal-notification] [data-cy=modal-notification-item]').should('have.length', notifications.length);

    });

});
