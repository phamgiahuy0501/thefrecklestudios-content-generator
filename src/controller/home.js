function copyClipboardHandle() {
    const generatedObject = $(".generated-container");
    if (generatedObject.children().length == 1) {
        return;
    }
    navigator.clipboard.writeText(generatedObject.children().eq(1)[0].outerHTML);

    const tooltipCopy = $(".tooltip.copy");
    tooltipCopy.text("Copied!");
    tooltipCopy.toggleClass("new-copy");
}

function onMouseOutHandle() {
    const tooltipCopy = $(".tooltip.copy");
    if (tooltipCopy.text() == "Copied!") {
        tooltipCopy.text("Copy");
        tooltipCopy.toggleClass("new-copy");
    }
}

function clearInputHandle() {
    $(".input-container .form-container").remove();
    $(".input-container").append("<div class=\"form-container outer\"><input type=\"text\" placeholder=\"Input content...\"><div class=\"form-container inner\"><input type=\"text\" placeholder=\"Input content...\"></div></div><div class=\"form-container outer\"><input type=\"text\" placeholder=\"Input content...\"><div class=\"form-container inner\"><input type=\"text\" placeholder=\"Input content...\"></div></div>")

    $(`.generated-container .${generatedClass}`).remove();
}

// Animation
// INPUT
$(".input-container ").on("focus", "input", function () {
    if ($(this).parent().hasClass("inner")) {
        if ($(this).next().prop("tagName") == undefined) {
            $(this).after("<input type=\"text\" placeholder=\"Input content...\">")
        }
    } else {
        if ($(this).parent().next().prop("tagName") == undefined) {
            $(this).parent().after("<div class=\"form-container outer\"><input type=\"text\" placeholder=\"Input content...\"><div class=\"form-container inner\"><input type=\"text\" placeholder=\"Input content...\"></div></div>")
        }
    }
});

$(".input-container").on("focusout", "input", function () {
    if ($(this).val() != "") {
        return
    }
    if ($(this).parent().hasClass("inner")) {
        $(this).next().remove();
        return;
    }
    if ($(".form-container.outer").length == 2) {
        return;
    }
    $(this).parent().next().remove();
});

// GENERATED
$(".generated-container").on("click", ".wrap-customer-style .dropdown-controller", function () {
    let plusObject = $(this).find(".plus")
    let minusObject = $(this).find(".minus")
    let content = $(this).next()

    plusObject.toggleClass("hidden")
    minusObject.toggleClass("hidden")
    content.toggleClass("animationHidden")
});
// END Animation