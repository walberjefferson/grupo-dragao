require('./bootstrap');
//require('./scripts');

$(".favorito:hover").find('.fa').toggleClass('')

$(document).ready(function () {
    $(".favorito .fa").hover(function () {
        $(this).removeClass("fa-heart-o").addClass("fa-heart");
    }, function () {
        $(this).removeClass("fa-heart").addClass("fa-heart-o");
    });
});

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#listing-info-tabs-slider'
// })

// var exampleModal = document.getElementById('exampleModal')
// exampleModal.addEventListener('show.bs.modal', function (event) {
//     // Button that triggered the modal
//     var button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     var recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an AJAX request here
//     // and then do the updating in a callback.
//     //
//     // Update the modal's content.
//     var modalTitle = exampleModal.querySelector('.modal-title')
//     var modalBodyInput = exampleModal.querySelector('.modal-body input')
//
//     modalTitle.textContent = 'New message to ' + recipient
//     modalBodyInput.value = recipient
// })

// var i = document.querySelectorAll("#listing-info-tabs-slider .listing-info-tabs a");
// i.forEach((function (e, t) {
//         e.addEventListener("click", (function (t) {
//                 var a, s;
//                 t.preventDefault(),
//                     (null !== (a = document.querySelector("#listing-info-tabs-slider .listing-info-tabs a.active")) && void 0 !== a ? a : n.defaultElement).classList.remove("active"),
//                     e.classList.add("active"),
//                 e === i[i.length - 1] && r.setState({
//                     stopScrollEvent: !0
//                 });
//                 var o = null !== (s = e.getAttribute("href")) && void 0 !== s ? s : "";
//                 n.scrollTo("#tabs-navigation", o)
//             }
//         ))
//     }
// ));