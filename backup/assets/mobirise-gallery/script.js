(function(b) {
    function e() {
        clearTimeout(g);
        g = setTimeout(k, 50)
    }
    function k() {
        var a = b(".mbr-gallery .modal");
        if (a.length) {
            var h = b(window).width()
              , e = b(window).height();
            a.each(function() {
                var c, d;
                b(this).hasClass("in");
                var a = b(this).find(".modal-dialog");
                c = a.find(".item.active > img");
                a.find(".item.prev > img, .item.next > img").length && (c = a.find(".item.prev > img, .item.next > img").eq(0));
                d = 1000; //c[0].naturalWidth;
                var f = 1000; // c[0].naturalHeight;
                c = h / e > d / f ? (e - 60) * d / f : h - 60;
                c = c >= d ? d : c;
                d = (e - 60 - c * f / d) / 2;
                a.css({
                    width: parseInt(c),
                    top: d
                })
            })
        }
    }
    b(document).on("add.cards change.cards", function(a) {
        "undefined" !== typeof b.fn.masonry && b(a.target).outerFind(".mbr-gallery").each(function() {
            var a = b(this).find(".mbr-gallery-row").masonry({
                itemSelector: ".mbr-gallery-item",
                percentPosition: !0
            });
            a.masonry("reloadItems");
            a.imagesLoaded().progress(function() {
                a.masonry("layout")
            })
        })
    });
    var g;
    b(window).on("resize load", e);
    b(window).on("show.bs.modal", e);
    b(window).on("slid.bs.carousel", e)
}
)(jQuery);
