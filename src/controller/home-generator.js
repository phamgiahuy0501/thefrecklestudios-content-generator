import { generate } from "../../src/generator.js"

$(".generate-button").on("click", function () {
    $(".generated-container").children().eq(1).remove()

    $(".generated-container").append(generate())
});