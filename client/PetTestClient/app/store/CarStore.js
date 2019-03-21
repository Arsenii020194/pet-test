/**
 * Created by arsenii on 20.03.19.
 */
Ext.define('PetTestClient.store.CarStore', {
    extend: 'Ext.data.Store',
    alias: 'store.carstore',

    requires: [
        'PetTestClient.model.CarModel'
    ],

    model: 'PetTestClient.model.CarModel',

    autoLoad: true
});