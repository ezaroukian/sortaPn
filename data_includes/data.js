//genData.js makes all the test/filler items that are added via genWrapper()

var manualSendResults = true;
var shuffleSequence =   seq("inst",rshuffle(rshuffle("test.itv.s","test.cre.s","test.other.s",
                                                "test.itv.u","test.cre.u","test.other.u",
												"test.itv.n","test.cre.n","test.other.n",
                                                "filler.itv.s","filler.cre.s","filler.other.s",
                                                "filler.itv.u","filler.cre.u","filler.other.u",
												"filler.itv.n","filler.cre.n","filler.other.n")),"end","sr","code");      
         
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
    },
	"Scale", {
		startValue: 0, 
		endValue:100,
		decimalPlaces:0,
		scaleLabels:true,
		startColor:"silver",
		endColor:"navy"

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
    
    
    ["inst", "Form", {
        html: {include: "gen_instructions.html"},
        hideProgressBar: true,
        countsForProgressBar: false, 
    }], 
    ["inst","Message", {html: { include: "intro_end.html" }},],

    //["test", "Question", {q: "Bob <font size=1>sorta</font> wanted a raise.", as: ["wanted: He didn't want it all that much.", "a raise: It was actually a bonus.", "polite reason"]}], ["filler", "Question", {q: "Sarah <b>sorta</b> tried to find a bicycle.", as: ["tried to find: She didn't put much effort into it.", "a bicycle: It was actually a tricycle.", "polite reason"]}], 

	["slider", "Message", {html: { include: "slider.html" }}],
	["end", "Form", {
        html: {include: "endSurvey.html"},
        hideProgressBar: true,
        countsForProgressBar: false, 
    }], 
	["code","Message", {
		html: { include: "code.html" },
		transfer: null,
    }]
];
                              
items = items.concat(exWrapper());
items = items.concat(genWrapper()); 

//alert(items);

