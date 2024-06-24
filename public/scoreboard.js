function add(id, button) {
    var newCount = parseInt($(id).text()) + 1;
    if (!isNaN(newCount) && newCount >= 0) {
        updateScoreboard(id, newCount, button);
    }
}

function substract(id, button) {
    var newCount = parseInt($(id).text()) - 1;
    if (!isNaN(newCount) && newCount >= 0) {
        updateScoreboard(id, newCount, button);
    }
}

function updateScoreboard(id, newCount, button) {
    var apiCall = '';
    switch (id) {
        case '#homeScore':
            apiCall = "/set/home/" + newCount;
            break;

        case '#guestScore':
            apiCall = "/set/guest/" + newCount;
            break;

        case '#inningCount':
            apiCall = "/set/inning/" + newCount;
            break;

        case '#ballCount':
            apiCall = "/set/balls/" + newCount;
            break;

        case '#strikeCount':
            apiCall = "/set/strikes/" + newCount;
            break;

        case '#outCount':
            apiCall = "/set/outs/" + newCount;
            break;

        case '#clockMode':
            apiCall = "/clock"
            break;

        case '#resetButton':
            apiCall = "/startgame"
            break;

        // case '#setTime':
        //     apiCall = "/set/clock/{hour}/{minute}"
        //     break;

        default:
            apiCall = "bugFound";
    }
    var url = apiBaseUrl + apiCall;
    $(button).css("pointerEvents","none");
    var oldText = $(button).text();
    var oldBackground = $(button).css('background-color');
    $(button).css('background-color', 'inherit');
    $(button).html('<div class="loader"></div>');
    $.ajax({
        url: url,
        type: "GET",
    })
        .done(function() {
            $(id).text(newCount);
        })
        .fail(function() {
            console.log('failed api request: ' + url);
        })
        .always(function() {
            // make button clickable again
            $(button).css("pointerEvents","auto");
            $(button).css('background-color', oldBackground);
            $(button).text(oldText);
            if (ignoreResponse) {
                $(id).text(newCount);
            }
        });
}
