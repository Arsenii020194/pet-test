/**
 * This view is an example list of people.
 */
Ext.define('PetTestClient.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'PetTestClient.store.CarStore'
    ],

    title: 'Cars',

    store: {
        type: 'carstore'
    },

    columns: [
        { text: 'model',  dataIndex: 'model' },
        { text: 'code', dataIndex: 'code', flex: 1 },
        { text: 'color', dataIndex: 'color', flex: 1 }
    ]
});
