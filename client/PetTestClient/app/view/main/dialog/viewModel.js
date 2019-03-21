/**
 * Created by arsenii on 20.03.19.
 */
Ext.define('PetTestClient.view.main.dialog.viewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dialog-view-model',

    requires: [
        'PetTestClient.store.CarStore'
    ],

    data: {
        item: null,
        storeToReload: null
    },

    stores:{
        carStore:{
            type:'carstore'
        }
    }
});