/**
 * Created by arsenii on 20.03.19.
 */
Ext.define('PetTestClient.view.main.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-controller',
    requires: [
        'PetTestClient.model.CarModel',
        'PetTestClient.view.main.dialog.View'
    ],

    onRemoveClick: function (sender, record) {
        var item = this.getViewModel().get('item');
        this.getView().getStore().remove(item);
        item.erase();
    },
    onSelectionChange: function (sender, record, isSelected) {
        this.getViewModel().set('item', record[0]);
    },
    onAddClick: function (sender, record) {
        var dialog = Ext.create({
            xtype: 'dialog-view'
        });

        var dialogVm = dialog.getViewModel();
        var item = Ext.create('PetTestClient.model.CarModel');
        item.set('id', null);
        dialogVm.set('item', item);
        dialogVm.set('storeToReload', this.getView().getStore());
        dialogVm.set('viewToRefresh', this.getView());
        var win = Ext.create({
            xtype: 'window',
            plugins: 'responsive',
            stateful: true,
            closeAction: 'hide',
            layout: 'fit',
            renderTo: Ext.getBody(),
            height: 300,
            width: 700,
            title:'Add car',
            resizable: false,
            constrain: false,
            modal: true,
            autoShow: false,
            ghost: false,
            items: [
                dialog
            ]
        });
        win.show(Ext.getBody());
    },
    onUpdateClick: function (sender, record) {
        var dialog = Ext.create({
            xtype: 'dialog-view'
        });

        var dialogVm = dialog.getViewModel();
        dialogVm.set('item', Ext.create('PetTestClient.model.CarModel', this.getViewModel().get('item').getData()));
        dialogVm.set('storeToReload', this.getView().getStore());
        dialogVm.set('viewToRefresh', this.getView());
        var win = Ext.create({
            xtype: 'window',
            plugins: 'responsive',
            stateful: true,
            closeAction: 'hide',
            layout: 'fit',
            renderTo: Ext.getBody(),
            height: 300,
            width: 700,
            title:'Update car',
            resizable: false,
            constrain: false,
            modal: true,
            autoShow: false,
            ghost: false,
            items: [
                dialog
            ]
        });
        win.show(Ext.getBody());
    }
});