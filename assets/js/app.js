function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function loadMarkdown(elementId) {
    var page = findGetParameter("page")
    if (page == null) page = "index"
    page = "pages/" + page + ".md"
    fetch(page)
        .then(function (response) {
            if (!response.ok) {
                window.location.href = "404.html"
            } else {
                return response.text()
            }
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = marked(data);
        });
}