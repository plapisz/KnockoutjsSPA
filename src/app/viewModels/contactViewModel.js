var contactViewModel = function () {
    var that = this;    
    that.resultMessage = ko.observable("");
    that.contactModel = new contactModel();
    that.sendMessage = function () {
        var contact = ko.toJSON(that.contactModel);
        $.ajax({
            url: '/api/Contact',
            type: 'POST',
            dataType: 'json',
            data: contact,
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                that.resultMessage(data.Message);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                that.resultMessage(textStatus);
            }
        });
    };

    that.clearForm = function () {
        that.contactModel.email("");
        that.contactModel.message("");
    }
};