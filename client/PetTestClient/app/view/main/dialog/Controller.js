/**
 * Created by arsenii on 20.03.19.
 */
Ext.define('PetTestClient.view.main.dialog.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dialog-controller',

    saveClick: function () {
        var me = this;
        var item = this.getViewModel().get('item');
        var validationData = item.getValidation().getData();
        var errors = [];
        for (var key in validationData) {
            if (validationData[key] !== true) {
                errors.push(validationData[key]);
            }
        }
        if (errors.length !== 0) {
            Ext.Msg.show({
                title : 'Error',
                msg : errors.join('</br>'),
                width : 300,
                closable : false,
                buttons : Ext.Msg.OK,
                multiline : false,
                icon : Ext.Msg.ERROR
            });
        } else {
            item.save({
                success: function () {
                    me.getView().up().doClose();
                    var reloadStore = me.getViewModel().get('storeToReload');
                    me.getViewModel().get('viewToRefresh').getView().getSelectionModel().deselectAll();
                    me.getViewModel().get('viewToRefresh').getView().refresh();
                    if (reloadStore) {
                        reloadStore.reload();
                    }
                }
            });
        }
    },

    cancelClick: function () {
        this.getView().up().doClose();
    }
});