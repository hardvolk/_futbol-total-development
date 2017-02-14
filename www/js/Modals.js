/* MODAL */
var Modals = document.getElementsByClassName("modal");

if (Modals.length == 0) {
    var _newModal = document.createElement('div');
    _newModal.className = "modal";
    document.body.insertBefore(_newModal, document.body.childNodes[0]);
    Modals = document.getElementsByClassName("modal");
}

for (var i = 0; i < Modals.length; i++) {
    Modals[i].open = openModal;
    Modals[i].close = closeModal;
    Modals[i].visible = false;
    Modals[i].show = showModal;
    Modals[i].addEventListener('click', dismissModal(i));
}

var Modal = Modals[0];

function openModal() {
    this.className = "modal open";
    this.visible = true;
}

function closeModal() {
    this.className = "modal";
    this.visible = false;
}

function showModal(_content, _header) {

    if (typeof _header === "undefined") _header = '';
    if (typeof _content === "undefined") _content = '';

    _html = '<div class="modal__box">' +
                '<h1 id="modal_header">' + _header + ' </h1>' +
                '<p id="modal_text">' + _content + ' </p>' +
            '</div>';

    this.innerHTML = _html;
    this.open();
}

// Dismiss modals
function dismissModal(inx) {
    return function () {
        if (typeof Modals[inx].dataset.persist === "undefined" && Modals[inx].visible == true) {
            Modals[inx].close();
        }
    };
}