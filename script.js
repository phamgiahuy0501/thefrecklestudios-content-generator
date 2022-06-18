import { generate } from "./src/generator.js"
import { STYLE_CLASS_STRING } from "./src/utils/string.js"

$(".generate-button").on("click", function () {
    $(`.generated-container .${STYLE_CLASS_STRING.WRAP_STYLE}`).remove()

    $(".generated-container").append(generate())
});

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
    if ($(this).parent().hasClass("inner")) {
        if ($(this).val() == "") {
            $(this).next().remove();
        }
    } else {
        if ($(this).val() == "") {
            $(this).parent().next().remove();
        }
    }
});

// Animation
$(".generated-container").on("click", ".wrap-customer-style .dropdown-controller", function () {
    let plusObject = $(this).find(".plus")
    let minusObject = $(this).find(".minus")
    let content = $(this).next()

    plusObject.toggleClass("hidden")
    minusObject.toggleClass("hidden")
    content.toggleClass("animationHidden")
});
// END Animation