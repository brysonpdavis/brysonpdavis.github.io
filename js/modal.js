function ActivateModal(source) {
    modal.style.display = "block";
    $(modal_image).attr("src", (source));
}

function CloseModal() {
    modal.style.display = "none";
}

function screenshot1clicked() {
    ActivateModal($("#screenshot1").attr('link'));
}

function screenshot2clicked() { 
    ActivateModal($("#screenshot2").attr('link'))
};

function screenshot3clicked() { 
    ActivateModal($("#screenshot3").attr('link'))
};