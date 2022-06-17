import { generate } from "./src/generator.js"

generate();
// $("body").append(generate());


$(".input-container ").on("focus", "input", function() {
    // console.log($(this).parent().prop("className"));
    if ($(this).parent().hasClass("inner")) {
        if ($(this).next().prop("tagName") == undefined) {
            $(this).after("<input type=\"text\" placeholder=\"Input content...\">")
        }
    } else {
        if ($(this).parent().next().prop("tagName") == undefined) {
            $(this).parent().after("<div class=\"form-container\"><input type=\"text\" placeholder=\"Input content...\"><div class=\"form-container inner\"><input type=\"text\" placeholder=\"Input content...\"></div></div>")
        }
    }
});

// $(".input-container ").on("focusout", "input", function() {
//     if ($(this).val() == "") {
//         $(this).next().remove();
//     }
// });

// Animation
$(".wrap-customer-style .dropdown-controller").on("click", function () {
    let plusObject = $(this).find(".plus")
    let minusObject = $(this).find(".minus")
    let content = $(this).next()

    plusObject.toggleClass("hidden")
    minusObject.toggleClass("hidden")
    content.toggleClass("animationHidden")
});
// END Animation