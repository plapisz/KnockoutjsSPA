 (function ($) {
    var app = $.sammy('#main', function () {

        this.get('#/', function () {
            this.partial('./app/views/homeView.html', function () {
                ko.applyBindings(new homeViewModel());
            });
        });
        this.get('#books', function () {
            this.partial('./app/views/bookView.html', function () {
                ko.applyBindings(new bookViewModel());
            });
        });
        this.get('#contact', function () {
            this.partial('./app/views/contactView.html', function () {
                ko.applyBindings(new contactViewModel());
            });
        });
    });

    $(function () {
        app.run('#/');
    });
})(jQuery);