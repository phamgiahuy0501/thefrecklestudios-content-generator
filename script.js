let generatedClass = "";
import("./src/utils/string.js")
    .then((module) => module.STYLE_CLASS_STRING.WRAP_STYLE)
    .then((result) => {
        generatedClass = result;
    });

function copyClipboardHandle() {
    const generatedObject = $(`.generated-container .${generatedClass}`);
    if (generatedObject.length == 0) {
        return;
    }
    navigator.clipboard.writeText(generatedObject.html());
    
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