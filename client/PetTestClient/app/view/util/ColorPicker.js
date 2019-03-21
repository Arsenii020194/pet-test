/**
 * Created by arsenii on 20.03.19.
 */
Ext.define('PetTestClient.view.util.ColorPicker', {
    extend: 'Ext.form.field.Picker',
    requires: [
        'Ext.picker.Color'
    ],
    editable: false,
    colorPicker: null,
    alias: 'widget.custom-picker',

    createPicker: function () {
        var me = this,
            picker;
        picker = Ext.create({
            xtype: 'colorpicker',
            value: me.getValue(),
            renderTo: me.el.up().el,
            listeners: {
                select: {
                    fn: me.onColorPickerChange,
                    scope: me
                }
            }
        });

        return me.colorPicker = picker;
    },

    onColorPickerChange: function (colorPicker, color) {
        this.setValue(color);
        if (colorPicker) {
            colorPicker.hide();
            this.blur();
        }
    },
    setValue: function(value) {
        this.inputEl.setStyle({
            backgroundColor: '#' + value
        });
        this.callParent([value]);

    }
});