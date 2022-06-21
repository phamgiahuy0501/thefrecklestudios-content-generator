$(".tab").on("click", function() {
    $(".current").toggleClass("current");
    
    const thisElement = $(this);
    thisElement.toggleClass("current");
    
    if (thisElement.hasClass("home-tab")) {
        window.location.replace("../../views/pages/home.htm");
    } 
    if (thisElement.hasClass("help-tab")) {
        window.location.replace("../../views/pages/help.htm");
    }
    if (thisElement.hasClass("about-tab")) {
        window.location.replace("../../views/pages/about.htm");
    } 

})