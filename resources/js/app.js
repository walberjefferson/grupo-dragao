import 'bootstrap/dist/js/bootstrap.js';
require('./bootstrap');
require('fslightbox');

$(document).ready(function () {
    $(".favorito .fa").hover(function () {
        $(this).removeClass("fa-heart-o").addClass("fa-heart");
    }, function () {
        $(this).removeClass("fa-heart").addClass("fa-heart-o");
    });
});