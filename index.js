'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Fun Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "In Japan, letting a sumo wrestler make your baby cry is considered good luck.",
    "In 1986, Apple launched a clothing line",
    "Sea otters hold hands when they sleep so they don't drift apart.",
    "Between 1900 and 1920, Tug of War was an Olympic event.",
    "The word 'unfriend' appeared in print all the way back in 1659.",
    "A baby can cost new parents 750 hours of sleep in the first year.",
    "Google was originally named BackRub.",
    "Elmo is the only non-human to testify before Congress.",
    "The most shoplifted food item in the U.S. is candy.",
    "Nutella was invented during WWII, when an Italian pastry maker mixed hazelnuts into chocolate to extend his chocolate ration.",
    "Alaska is so big you could fit 75 New Jerseys in it.",
    "No piece of normal-size paper can be folded in half more than 7 times.",
    "The elephant is the only animal with 4 knees.",
    "We, as humans, forget 90% of our dreams.",
    "A cat has 32 muscles in each ear.",
    "A shark is the only known fish that can blink with both eyes."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fun fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a fun fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};