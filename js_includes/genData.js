//window.alert("running ...");

var pr = "The whole sentence";
var creationSents = [
["John", 
    ["built", "cleaned"], 
	["build", "clean"],
    "a barn", 
	["assemble OBJECT that had been prefabricated", "sweep OBJECT"],
    "a shack"
], 
["Mary",     
    ["wrote", "bought"], 
	["write","buy"],
    "a novel", 
	["co-author OBJECT", "have her parents pay for OBJECT"], //Second doesn't work yet?
    "a novella"
], 
["Peter",    
    ["made", "ate"], 
	["make","eat"],
    "a pizza", 
	["reheat OBJECT", "spit half of OBJECT back up"], //Second doesn't work yet?
    "a calzone"
], 
["Sue",     
    ["drew", "petted"], 
	["draw","pet"],
    "a wolf", 
	["trace OBJECT", "pat OBJECT with a brush"], 
    "a coyote"
],
["Anna",     
    ["knitted", "borrowed"], 
	["knit","borrow"],
    "a scarf", 
	["weave OBJECT on a little loom", "steal OBJECT"], 
    "a pashmina"
],
["Charlie", 
    ["dug", "fell in"], 
	["dig", "fall in"],
    "a pit", 
	["clear a bit of dirt from OBJECT that was already mostly dug out by the time got there", "get his foot caught in OBJECT"], 
    "a medium-size hole"
],
["Claire",     
    ["composed", "listened to"], 
    ["compose","listen to"],
	"a symphony", 
    ["write the first movement of OBJECT", "have OBJECT on in the background"], 
    "a tone poem"
],
["Roger",     
    ["EMPTY", "sliced"], 
	["EMPTY", "slice"], 
    "an orange", 
    //["EMPTY", "tore it into pieces"], 
	["EMPTY", "tear OBJECT into pieces"], 
    "a tangerine"
],

//used as fillers
["Rebecca", 
    ["EMPTY", "sat on"],
	["EMPTY", "sit on"],	
    "a pillow",  
	["EMPTY", "kneal on OBJECT"], 
    "a rug"
],
["Dan",     
    ["EMPTY", "watched"], 
	["EMPTY", "watch"], 
    "a movie",  
	["EMPTY", "sleep through OBJECT"], 
    "a short film"
],
["Cynthia",  
    ["composed", "EMPTY"], 
	["compose", "EMPTY"], 
    "a sonnet", 
	["change a few words in OBJECT by Shakespeare", "EMPTY"], 
    "free verse"
],
["Duncan",  
    ["created", "EMPTY"], 
	["create", "EMPTY"], 
    "a mess",
	["add a bit to OBJECT that was already there when he arrived", "EMPTY"], 
    "a little clutter"
],
["Lars",  
    ["sculpted", "EMPTY"], 
	["sculpt", "EMPTY"], 
    "a mug", 
	["make the handle of OBJECT", "EMPTY"], 
    "a bowl"
],
["Martina",  
    ["invented", "EMPTY"], 
	["invent", "EMPTY"], 
    "a soup",
	["add cumin to OBJECT her grandmother made", "EMPTY"], 
    "a stew"
],
["Patricia",  
    ["EMPTY", "held"], 
	["EMPTY", "hold"], 
    "a monkey", 
    ["EMPTY", "let OBJECT climb up her"], 
    "a chimpanzee"
],
["Brandon",  
    ["EMPTY", "played"], 
	["EMPTY", "play"], 
    "an oboe", 
	["EMPTY", "make a few squeeking noises on OBJECT"], 
    "an English horn"
]
];

var ITVSents = [
[	"Bob", 
    ["wanted", "refused"], 
	["want", "refuse"],
    "a raise", 
    ["wonder whether he needed OBJECT","forget to sign the necessary paperwork for OBJECT"], 
    "a bonus"
], 
[	"Sarah", 
    ["needed", "tried to find"], 
	["need", "try to find"], 
    "a blender", 
    ["want OBJECT very badly","not put much effort into OBJECT"], 
    "a food processor"
], 
[	"Andy", 
    ["begged for", "earned"],
	["beg for", "earn"],	
    "a trophy", 
    ["ask what it would take to get OBJECT", "cheat a little on OBJECT, but less than most people"], 
    "a statuette"
], 
[	"Sam", 
    ["looked for", "climbed"], 
	["look for", "climb"], 
    "a mountain", 
    ["take a quick glance at an outdated map of OBJECT", "take a ski lift most of the way up OBJECT"], 
    "a big hill"
],
[	"Chris", 
    ["rummaged around for", "threw away"], 
	["rummage around for", "throw away"], 
    "a pen", 
    ["take a quick glance under the bed for OBJECT", "accidentally knock OBJECT off his desk into the trash"], 
    "a marker"
],
["Irene", 
    ["prayed for", "flew through"],
	["pray for", "fly through"],	
    "a storm", 
    ["hope for OBJECT", "flew through the very edge of OBJECT"], 
    "a bit of rain"
],
["Dennis", 
    ["was afraid of", "yelled at"],
	["be afraid of", "yelled at"],	
    "a bee", 
    ["worry about his allergy to OBJECT", "squealed in alarm because of OBJECT"], 
    "a wasp"
],
["Katie", 
    ["EMPTY", "visited"], 
    ["EMPTY", "visit"], 
    "a castle", 
    ["EMPTY", "drive past OBJECT"], 
    "a monastery"
],

//used as fillers
["Tony", 
    ["EMPTY", "hammered"], 
    ["EMPTY", "hammer"], 
    "a nail", 
    ["EMPTY", "pounded at OBJECT with his shoe"], 
    "tack"
],
["Laura", 
    ["EMPTY", "wore"],
	["EMPTY", "wear"],	
    "a skirt", 
    ["EMPTY", "use OBJECT as a shawl"], 
    "a tutu"
],
["Greg", 
    ["was afraid of", "EMPTY"],
	["be afraid of", "EMPTY"],	
    "a puppy", 
    ["be worried about his allergy to OBJECT", "EMPTY"], 
    "a full-grown miniature poodle"
],
["Helen", 
    ["asked for", "EMPTY"], 
    ["ask for", "EMPTY"], 
    "a sandwich", 
    ["say she was hungry for OBJECT", "EMPTY"], 
    "a wrap"
],
["Amanda",  
    ["demanded", "EMPTY"],  
    ["demand", "EMPTY"], 
    "a towel", 
    ["ask for OBJECT politely", "EMPTY"], 
    "a washcloth"
],
["Ben",  
    ["hoped for", "EMPTY"],
    ["hope for", "EMPTY"], 
    "a bicycle", 
    ["not mind OBJECT", "EMPTY"], 
    "a tricyle"
],
["Leah",  
    ["EMPTY", "washed"], 
    ["EMPTY", "wash"], 
    "an apple", 
    ["EMPTY", "rub OBJECT on her shirt"], 
    "a pear"
],
["Craig",  
    ["EMPTY", "folded"], 	
    ["EMPTY", "fold"], 
    "a sheet", 
    ["EMPTY", "wad OBJECT up"], 
    "a tarp"
] 
];

var exSents = [
[	"Steve",
    ["kicked", "EMPTY"],
    "the ball",
    ["nudged it", "EMPTY"],
    "a balloon"
 ]
];



//Trying to build a better list

function buildList(list){
	for(i=0;i<list.length;i++){
		//console.log(list[i][3][0]);
		var rep1 = list[i][4][0].replace("OBJECT", list[i][3]);
		var rep2 = list[i][4][1].replace("OBJECT", list[i][3]);
		list[i][4] = [rep1,rep2];
		console.log(list[i][4]);
		
	}
	
}

buildList(creationSents);
buildList(ITVSents);
buildList(exSents);
//End trying to build a better list



var block = 0;
function genQuestion(list,vType,e,qType)
{
    //takes a list (with subject, verbs, object, and hedges), a vType (creation/ITV=0, other=1), emphasis (0,1), a qType (test=ti,tc filler=f) returns Question item for IBEX
    var s = list[0];
    var v = list[1][vType];//creation/ITV=0, other=1
	var vp = list[2][vType];
	var vh = list[4][vType];
    var o = list[3];
	var oh = list[5];
    var q;
	
	block += 1;
    //make item name reflect test(+verb type)/filler/ex
    switch(qType) {
        case "ti":
            if (vType==0){q="test.itv";}
            else{q="test.other";}
            break;
        case "tc":
            if(vType==0){q="test.cre";}
            else{q="test.other";}
            break;
        case "fi":
            if (vType==0){q="filler.itv";}
            else{q="filler.other";}
            o = genFiller(o);
            break;
        case "fc":
            if (vType==0){q="filler.cre";}
            else{q="filler.other";}
            o = genFiller(o);
            break;
       case "ex"://for if it's an example for the instructions
            q="ex.other";
            break;
     }
     //make item name reflect emphasis (stressed, unstressed)
    switch(e) {
        case 0: 
            q+=".n";
            break;
        case 1:
            q+=".u";
			break;
		case 2: 
            q+=".s";
			break;
     }
    var sent = genSent(s,v,o,e);
    //var vHedge = s+" actually just "+list[3][vType]+".";
	var vHedge = "what "+s+" did was "+vh+"?";
    var oHedge = "what "+s+" did was "+vp+" "+oh+"?";
	var pHedge = "the speaker is trying not to fully admit what "+s+" did, perhaps to avoid upsetting the person the speaker is talking to.";

    //alert('["'+q+'", "Question", {q: "'+sent+'", as: ['+'"'+vHedge+'"'+', '+'"'+oHedge+'"'+', '+'"'+pHedge+'"'+']}]');
    //return [q, "Question", {"q": "<p style='font-size:150%'>"+sent+"</p><br/><p style='font-size:100%'>What is the speaker hedging?</p></br>", "as": [vHedge, oHedge, pHedge]}];
    //return [  [q, "AcceptabilityJudgment", {"s": {html: "Sentence: "+sent+"<br/><br/> Context: "+vHedge}, "q":"How acceptable is the sentence as a description of the context?"}], [q, "AcceptabilityJudgment", {"s": {html: "Sentence: "+sent+"<br/><br/> Context: "+oHedge}, "q":"How acceptable is the sentence as a description of the context?"}]  ];
	//alert([  [ [q, block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+vHedge}], [[q,block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+oHedge }], [[q,block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+pHedge }]  ]);
	
	return [  [ [q, block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+vHedge}], [[q,block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+oHedge }]  ];
}

function genPracticeQuestion(list,vType,e,qType)
{
    //Makes a practice question for the instructions
    //alert("called genPracticeQuestion");
    var quest = genQuestion(list,vType,e,qType)[1];
    quest[1] = "PracticeAcceptability";
    quest[2]["html"]= {"include": "gen_instructions4.html"};
    quest[2]["hideProgressBar"]="true";
    quest[2]["countsForProgressBar"]="false";
    //alert(quest[2].toSource());
    return quest;
}

function exWrapper()
{
    var ex1 = genPracticeQuestion(exSents[0],0,1,"ex");
    var ex2 = genPracticeQuestion(exSents[0],0,0,"ex");
    return [ex1,ex2];
}


function genQuestionList(listList, vList, eList, qList)
{
    //Makes a list of all the questions
    //alert("running genQuestionList");
    //var qString="";
    var qlList=[];
    for (i=0;i<listList.length;i++)
    {
        qlList = qlList.concat(genQuestion(listList[i], vList[i], eList[i], qList[i]));
        //qString=qString+genQuestion(listList[i], vList[i], eList[i], qList[i])+", ";
    }
    //alert(qlList);
    //return qString;
    return qlList;
}

function genWrapper()
{
    //I want to call this from data.js, with the arguments plugged in here
    //return genQuestionList(ITVSents.concat(creationSents), [0,0,0,0,1,1,1,1,1,1,0,0, 0,0,0,0,1,1,1,1,1,1,0,0], [0,1,0,1,0,1,0,1,0,1,0,1, 0,1,0,1,0,1,0,1,0,1,0,1], ["f","f","f","f","f","f","f","f","f","f","f","f", "f","f","f","f","f","f","f","f","f","f","f","f"]);
    var listList = ITVSents.concat(creationSents);
    var vList = [0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1, 0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1];
	//var eList = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1, 0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];
    var eList = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0, 1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1];
	//var eList = [1,2,0,1,2,0,1,2,0,1,2,0,1,2,0, 1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2];
	//var eList = [2,0,1,2,0,1,2,0,1,2,0,1,2,0, 1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0];
    var qList = ["ti","ti","ti","ti","ti","ti","ti","ti","fi","fi","fi","fi","fi","fi","fi","fi", "tc","tc","tc","tc","tc","tc","tc","tc","fc","fc","fc","fc","fc","fc","fc","fc" ];
    if (!!(listList.length==vList.length==eList.length==qList.length))
    {
        alert("Error in genWrapper(): lists of unequal length: "+listList.length+", "+vList.length+", "+eList.length+", "+qList.length);
    }
    return genQuestionList(listList, vList, eList, qList);
}
    


function genSent(s,v,o,e)
{
    //Takes a subject, verb, object, and 0-2 for sorta emphasis, returns them as sentence
    var sortaForm = "";
    if(e==0)
    {
		sortaForm = "";
    }
	else if (e==1)
	{
	    //sortaForm = "<span style='font-size:50%'>sorta </span>";
		sortaForm = "sorta ";
	}
    else if (e==2)
    {
        sortaForm = "recently ";
    }
    return s+" "+sortaForm+v+" "+o+".";
}


function genFiller(np)
{
    //Takes a list of sentence-part lists, returns noun definite articles to use for filler
    var npList=np.split(" ");//split objects at " "
    var n = npList[1];//this is the object, e.g. "novel"
    
    return "the "+n;
} 



//for browser stuff


function makeFillerList(list)
{
    //Takes a list of sentence-part lists, returns the same list with definite articles to use for fillers (for html)
    var fillList = [];
    //split objects, add "the", put back in list for gen functions to make stim
    for (i=0; i<list.length; i++)
    {
        var oList=list[i][2].split(" ");
        var o = oList[1];//this is the object, e.g. "a novel", need to split it at space
        fillList.push([list[i][0],list[i][1],"the "+o,list[i][3],list[i][4]]);
    }
    return fillList;
}  




//for testing in browser
document.getElementById("test").innerHTML = "running...";  
         

document.getElementById("textDiv1").innerHTML = exWrapper();
document.getElementById("textDiv2").innerHTML = genList(makeFillerList(creationSents).concat(makeFillerList(ITVSents)));
////document.getElementById("textDiv3").innerHTML = genQuestion(creationSents[0],0,0,0)+genQuestion(creationSents[1],1,1,1);
document.getElementById("textDiv4").innerHTML = genWrapper();