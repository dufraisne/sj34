module.exports = function () {

    var forAll = require('async').timesSeries,
        delay = require('lodash').delay;

    browser.ignoreSynchronization = true; //Needed due to Google not being an Angular page

    this.Given(/^I run some really nasty searches (\d+) time(?:s)?$/, {timeout: 60 * 10000}, function (times, finishSearching) {

        var searchString,
            theTimesYouWant = parseInt(times),
            senators = require('../dictionaries/senatorsDict').senatorsDict,
            adultTerminology = require('../dictionaries/adultDict').adultDict,
            baseURL = 'https://www.google.com/#q=',
            theSenatorsWhoVotedYes = senators.length;
        
        function randomlySelectFrom(dict){ return dict[Math.floor(Math.random()*dict.length)]; }

        forAll(theTimesYouWant, function (searchSet, nextSet) {
            forAll(theSenatorsWhoVotedYes, function (specificSenator, nextSearch) {
                specificSenator = senators[specificSenator];

                searchString =
                    specificSenator.role + " " +
                    specificSenator.firstName + " " +
                    specificSenator.lastName + " " +
                    specificSenator.state + " ";

                if ('district' in specificSenator) { searchString += specificSenator.district + " "; }

                searchString +=
                    randomlySelectFrom(adultTerminology) + " " +
                    randomlySelectFrom(adultTerminology) + " " +
                    randomlySelectFrom(adultTerminology);

                console.log(searchString);
                browser.get(baseURL + searchString);
                delay(nextSearch, 2000);
            }, nextSet);
        }, finishSearching);
    });

    this.Given(/^All is right with the world$/, {timeout: 360 * 1000}, function(emptyAndBecomeWind){
        browser.get('https://www.youtube.com/watch?v=JjYRYUVjhEg');
        delay(emptyAndBecomeWind, 15000);
    });
};