/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'PetTestClient.Application',

    name: 'PetTestClient',

    requires: [
        // This will automatically load all classes in the PetTestClient namespace
        // so that application classes do not need to require each other.
        'PetTestClient.*'
    ],

    // The name of the initial view to create.
    mainView: 'PetTestClient.view.main.Main'
});
