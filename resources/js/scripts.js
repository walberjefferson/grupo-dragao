$(function () {
    $("#menu-header .menu-item-has-children > a, #menu-desktop .menu-item-has-children > a").after(" <div class='fa fa-caret-down'></div>");

    $(".carrosel-products-home").owlCarousel({
        // autoPlay: true,
        items: 4,
        loop: true,
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
    });

    $(".product-gallery-list").owlCarousel({
        items: 1,
    });

    $(".shareaholic-canvas, .shareaholic-ui").toggle();

    $(".compartilhar").click(function (e) {
        e.preventDefault();
        let compartilhamento = $("#cards-product .compartilhamento");
        if (compartilhamento.is('.d-none')) {
            compartilhamento.removeClass('d-none').slideDown(1000);
        } else {
            compartilhamento.addClass('d-none').slideUp(1000);
        }
    });


    $(".busca-form-open").click(function (e) {
        e.preventDefault();
        let pesquisa = $("#pesquisa");
        pesquisa.toggle('slow');
    });

    $(document).scroll(function () {
        let largura = $(window).width();
        let altura_main = $('main').position();
        if ($(this).scrollTop() > altura_main.top && (largura >= 991)) {
            $('#menu-desktop').addClass('d-lg-block menu-fixed animated fadeInDownBig faster');
        } else {
            $('#menu-desktop').removeClass('d-lg-block menu-fixed animated fadeInDownBig faster');
        }
    });

    function zoom_imagem() {
        $('.zoomIn').ezPlus({
            zoomType: 'lens',
            lensShape: 'round',
            lensSize: 150,
            scrollZoom: true,
            lensOpacity: 1,
            responsive: true,
            containLensZoom: true,
            borderColour: '#ffcb05',
        });
    }

    zoom_imagem();

    class Gallery {
        constructor() {
            this.gallery = document.querySelector('[data-gallery="gallery"]');
            this.galleryList = document.querySelectorAll('[data-gallery="list"]');
            this.galleryMain = document.querySelector('[data-gallery="main"]');
            this.changeImage = this.changeImage.bind(this);
        }

        changeImage({currentTarget}) {
            this.galleryMain.src = $(currentTarget).data('url-full');
            zoom_imagem()
        }

        addChangeEvent() {
            this.galleryList.forEach(img => {
                img.addEventListener('click', this.changeImage);
                // img.addEventListener('mouseover', this.changeImage);
            })
        }

        init() {
            if (this.gallery) {
                this.addChangeEvent();
            }
        }
    }

    const gallery = new Gallery();
    gallery.init();

});
