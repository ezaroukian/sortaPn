//genData.js makes all the test/filler items that are added via genWrapper()

var manualSendResults = true;
//var shuffleSequence =   seq("intro","inst",rshuffle(rshuffle("test.itv","test.cre","filler")),"sr","done");      
var shuffleSequence =   seq("inst","ex.other.s","ex.other.u","instEnd",rshuffle(rshuffle("test.itv.s","test.cre.s","test.other.s",
                                                                    "test.itv.u","test.cre.u","test.other.u",
                                                                    "filler.itv.s","filler.cre.s","filler.other.s",
                                                                    "filler.itv.u","filler.cre.u","filler.other.u")),"sr","done");      
         
var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next statement.",
        errorMessage: "Wrong. Please wait for the next statement."
    },
    "DashedSentence", {
        mode: "self-paced reading",
        display: "dashed"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(bad)", rightComment: "(good)"
    },
    "Question", {
        hasCorrect: false,
        randomOrder: false
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: false,
        countsForProgressBar: true,
        continueOnReturn: true,
    }
];
                              
         

var items = [
    
    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    ["sr", "__SendResults__", { }],
    
    ["sep", "Separator", { }],
    
    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).
    
    ["intro", "Form", {
        html: { include: "intro.html" },
        hideProgressBar: true,
        countsForProgressBar: false,
    } ],
    
    
    ["done", "Exit", {
        html: { include: "done.html" },
    } ],
    
    ["inst", "Form", {
        html: {include: "gen_instructions.html"},
        hideProgressBar: true,
        countsForProgressBar: false, 
    }], 
    ["inst", "Form", {
        html: {include: "gen_instructions2.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],
    ["inst", "Form", {
        html: {include: "gen_instructions3.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],
    ["instOld", "PracticeQuestion", {
        q: "The soccer player <b>sorta</b> kicked the ball.<br/><br/>What is the speaker hedging?",
        as: ['the verb "kicked": e.g., The player only nudged the ball.','the noun "the ball": e.g., It was actually a balloon.', "the whole sentence: e.g., The speaker knows the soccer player wasn't supposed to touch the ball and doesn't want to get her in trouble."],
        html: {include: "gen_instructions4.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }],    
    ["instOld", "PracticeQuestion", {
        q: "The soccer player <font size=1>sorta</font> kicked the ball.<br/><br/>What is the speaker hedging?",
        as: ['the verb "kicked": e.g., The player only nudged the ball.','the noun "the ball": e.g., It was actually a balloon.', "the whole sentence: e.g., The speaker knows the soccer player wasn't supposed to touch the ball and doesn't want to get her in trouble."],
        html: {include: "gen_instructions4.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
    }], 
    ["instEnd","Message", {html: { include: "intro_end.html" }},],

    //["test", "Question", {q: "Bob <font size=1>sorta</font> wanted a raise.", as: ["wanted: He didn't want it all that much.", "a raise: It was actually a bonus.", "polite reason"]}], ["filler", "Question", {q: "Sarah <b>sorta</b> tried to find a bicycle.", as: ["tried to find: She didn't put much effort into it.", "a bicycle: It was actually a tricycle.", "polite reason"]}], 

    ];
                              
items = items.concat(exWrapper());
items = items.concat(genWrapper()); 

//alert(items);

