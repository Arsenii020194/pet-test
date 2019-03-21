/**
 * Created by arsenii on 20.03.19.
 */
Ext.define('PetTestClient.model.CarModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.validator.Presence',
        'Ext.data.writer.Json'
    ],

    fields: [
        {name: 'id', type: 'int', allowNull: true},
        {name: 'model', type: 'string'},
        {name: 'code', type: 'string'},
        {name: 'color', type: 'string'}
    ], proxy: {
        type: 'ajax',
        useDefaultXhrHeader: false,
        api: {
            read: 'http://localhost:8080/petTest/car/findAll',
            create: 'http://localhost:8080/petTest/car/create',
            update: 'http://localhost:8080/petTest/car/update',
            destroy: 'http://localhost:8080/petTest/car/remove'
        },
        reader: {
            type: 'json',
            writeAllFields: true
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    },
    validators: {

        model: {
            type: 'presence',
            message: 'fill model!'
        },
        code: {
            type: 'presence',
            message: 'fill code!'
        },
        color: {
            type: 'presence',
            message: 'fill color!'
        }
    }
});