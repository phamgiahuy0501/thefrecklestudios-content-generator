$(".options-container .option").on("click", function () {
    const currentOptionClassString = "current-option";
    if ($(this).hasClass(currentOptionClassString)) {
        return;
    }
    $(".option").toggleClass(currentOptionClassString);
    
    const noOption = $(".guide-item-container.no-option");
    const yesOption = $(".guide-item-container.yes-option");
    
    noOption.toggleClass("animation-hidden");
    yesOption.toggleClass("animation-hidden");
    noOption.children().first().toggleClass("number");
    yesOption.children().first().toggleClass("number");
})