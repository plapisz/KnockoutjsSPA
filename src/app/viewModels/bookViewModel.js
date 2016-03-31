var bookViewModel = function () {
    var that = this;    
    that.books = ko.observableArray([
        { id: 1, title: "Aaaa", year: 2015, author: "Aaaa Aaaa" },
        { id: 2, title: "Bbbb", year: 2014, author: "Bbbb Bbbb" },
        { id: 3, title: "Cccc", year: 2014, author: "Cccc Cccc" },
        { id: 4, title: "Dddd", year: 2014, author: "Dddd Dddd" },
        { id: 5, title: "Eeee", year: 2010, author: "Eeee Eeee" }
    ]);
    
    that.bookModel = new bookModel();
    
    that.currentFilter = ko.observable("");
    
    that.filterBooks = ko.computed(function() {
        console.log("filter book");
        if(!that.currentFilter()) {
            return that.books(); 
        } else {
            return ko.utils.arrayFilter(that.books(), function(b) {
                return b.title == that.currentFilter();
            });
        }
    });

    that.removeBook = function () {
        that.books.remove(this);
    }

    that.addBook = function () {
        that.books.push(that.bookModel);
        that.bookModel = new bookModel();
    };
    
}