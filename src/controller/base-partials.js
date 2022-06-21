fetch("/views/partials/_header.htm")
    .then(response => {
        return response.text()
    })
    .then(data => {
        $("header").append(data);
    });

fetch("/views/partials/_footer.htm")
    .then(response => {
        return response.text()
    })
    .then(data => {
        $("footer").append(data);
    });