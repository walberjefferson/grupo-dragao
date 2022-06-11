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

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = 'New message to ' + recipient
    modalBodyInput.value = recipient
})