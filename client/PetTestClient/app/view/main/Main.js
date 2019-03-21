/**
 * Created by arsenii on 20.03.19.
 */
Ext.define('PetTestClient.view.main.Main', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mainlist',

    requires: [
        'PetTestClient.store.CarStore',
        'PetTestClient.view.main.Controller',
        'PetTestClient.view.main.viewModel',
        'Ext.plugin.Viewport'
    ],

    controller: 'main-controller',
    viewModel: 'main-view-model',
    title: 'Cars',
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    store: {
        type:'carstore'
    },

    columns: [
        {text: 'model', dataIndex: 'model'},
        {text: 'code', dataIndex: 'code', flex: 1},
        {text: 'color', dataIndex: 'color', flex: 1}
    ],
    tbar: [{
        text: 'Add Car',
        iconCls: 'fa-plus',
        handler: 'onAddClick'
    }, {
        text: 'Remove Car',
        iconCls: 'fa-times',
        handler: 'onRemoveClick',
        bind: {
            disabled: '{!item}'
        }
    },
        {
            text: 'Update Car',
            iconCls: 'fa-times',
            handler: 'onUpdateClick',
            bind: {
                disabled: '{!item}'
            }
        }
    ]
});
