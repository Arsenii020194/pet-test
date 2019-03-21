/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('PetTestClient.Application', {
    extend: 'Ext.app.Application',

    name: 'PetTestClient',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Ajax.defaultHeaders = {
            'X-Requested-With' : 'XMLHttpRequest'
        };

        Ext.Ajax.setConfig('withCredentials', true);
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
