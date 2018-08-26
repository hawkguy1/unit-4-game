$(document).ready(function () {

    // ----- RANDOM TARGET NUMBER TO START ----- //
    var targetNum = Math.floor(Math.random() * 50 + 19);
    // ----- SEND TO HTML ----- //
    $('#randomNumber').text(targetNum);

    // ----- DEFINING GLOBAL VARIABLES ----- //
    var wins = 0;
    var losses = 0;
    var userClicks = 0;
    // ----- SEND TO HTML ----- //
    $('#numWins').text(wins);
    $('#numLosses').text(losses);

    // ----- GENERATING RANDOM VALUES FOR CRYSTALS ----- //
    var gem1 = Math.floor(Math.random() * 9 + 1);
    var gem2 = Math.floor(Math.random() * 9 + 1);
    var gem3 = Math.floor(Math.random() * 9 + 1);
    var gem4 = Math.floor(Math.random() * 9 + 1);

    // ----- RESTARTING THE GAME AFTER A WIN OR LOSS ----- //
    function restart() {
        targetNum = Math.floor(Math.random() * 50 + 19);
        $('#randomNumber').text(targetNum);
        var gem1 = Math.floor(Math.random() * 9 + 1);
        var gem2 = Math.floor(Math.random() * 9 + 1);
        var gem3 = Math.floor(Math.random() * 9 + 1);
        var gem4 = Math.floor(Math.random() * 9 + 1);
        userClicks = 0;
        $('#userScore').text(userClicks);
    }

    // ----- ADDER FUNCTIONS ----- //
    function winner() {
        wins++;
        $('#numWins').text(wins);
        restart();
    }
    function loser() {
        losses++;
        $('#numLosses').text(losses);
        restart();
    }

    // ----- BLUE CRYSTAL CLICKS ----- //
    $('#blue').on('click', function () {
        userClicks = userClicks + gem1;
        $('#userScore').text(userClicks);
        if (userClicks === targetNum) {
            winner();
        }
        else if (userClicks > targetNum) {
            loser();
        }
    });

    // ----- ORANGE CRYSTAL CLICKS ----- //
    $('#orange').on('click', function () {
        userClicks = userClicks + gem2;
        $('#userScore').text(userClicks);
        if (userClicks === targetNum) {
            winner();
        }
        else if (userClicks > targetNum) {
            loser();
        }
    });

    // ----- HEART CRYSTAL CLICKS ----- //
    $('#heart').on('click', function () {
        userClicks = userClicks + gem3;
        $('#userScore').text(userClicks);
        if (userClicks === targetNum) {
            winner();
        }
        else if (userClicks > targetNum) {
            loser();
        }
    });

    // ----- PURPLE CRYSTAL CLICKS ----- //
    $('#purple').on('click', function () {
        userClicks = userClicks + gem4;
        $('#userScore').text(userClicks);
        if (userClicks === targetNum) {
            winner();
        }
        else if (userClicks > targetNum) {
            loser();
        }
    });
});



