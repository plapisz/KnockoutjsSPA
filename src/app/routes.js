 (function ($) {
    var app = $.sammy('#main', function () {

        this.get('#/', function () {
            this.partial('./app/views/Home.html', function () {
                //ko.applyBindings(new viewModel());
            });
        });
        this.get('#books', function () {
            this.partial('./app/views/Book.html', function () {
                //ko.applyBindings(new viewModel());
            });
        });
        this.get('#contact', function () {
            this.partial('./app/views/Contact.html', function () {
                //ko.applyBindings(new ContactViewModel());
            });
        });
    });

    $(function () {
        app.run('#/');
    });
})(jQuery);