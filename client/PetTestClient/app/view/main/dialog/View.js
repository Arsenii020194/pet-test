/**
 * Created by arsenii on 20.03.19.
 */
Ext.define('PetTestClient.view.main.dialog.View', {
    extend: 'Ext.panel.Panel',
    requires: [
        'PetTestClient.view.main.dialog.Controller',
        'PetTestClient.view.main.dialog.viewModel',
        'PetTestClient.view.util.ColorPicker'
    ],
    padding: 10,
    margin: '5 5 5 5',
    border: false,
    fullscreen: true,
    layout: {
        type: 'anchor',
        pack: 'center'
    },
    initComponent: function () {
        this.callParent(arguments);
    },


    controller: 'dialog-controller',
    viewModel: 'dialog-view-model',
    alias: 'widget.dialog-view',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'model',
            anchor: '100%',
            bind: {
                value: '{item.model}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'code',
            anchor: '100%',
            bind: {
                value: '{item.code}'
            }
        },
        {
            xtype: 'custom-picker',
            fieldLabel: 'color',
            anchor: '100%',
            bind: {
                value: '{item.color}'
            }
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'end'
            },
            width: '100%',
            items: [
                {
                    xtype: 'button',
                    text: 'Ok',
                    width: '25%',
                    margin: '0 5 0 5',
                    listeners:
                        {
                            click: 'saveClick'
                        }
                },
                {
                    xtype: 'button',
                    name: 'delete',
                    width: '25%',
                    margin: '0 5 0 5',
                    text: 'Cancel',
                    listeners:
                        {
                            click: 'cancelClick'
                        }
                }
            ]
        }
    ]
});
