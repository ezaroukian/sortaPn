//window.alert("running ...");

var pr = "The whole sentence";
var creationSents = [
["John", 
    ["built", "cleaned"], 
    "a barn", 
    ["assembled one that had been prefabricated", "swept"],
    "a shack"
], 
["Mary",     
    ["wrote", "bought"], 
    "a novel", 
    ["co-authored it", "Her parents paid for it."], //Second doesn't work yet?
    "a novella"
], 
["Peter",    
    ["made", "ate"], 
    "a pizza", 
    ["reheated it", "spit half of it back up"], //Second doesn't work yet?
    "a calzone"
], 
["Sue",     
    ["drew", "petted"], 
    "a wolf", 
    ["traced it", "patted it with a brush"], 
    "a coyote"
],
["Anna",     
    ["knitted", "borrowed"], 
    "a scarf", 
    ["wove it on a little loom", "stole it"], 
    "a pashmina"
],
["Charlie", 
    ["dug", "fell in"], 
    "a pit", 
    ["cleared a bit of dirt from a pit that was already mostly dug out by the time he found it", "got his foot caught in it"], 
    "a medium-size hole"
],
["Claire",     
    ["composed", "listened to"], 
    "a symphony", 
    ["wrote the first movement", "had it on in the background"], 
    "a tone poem"
],
["Roger",     
    ["EMPTY", "sliced"], 
    "an orange", 
    ["EMPTY", "tore it into pieces"], 
    "a tangerine"
],

//used as fillers
["Rebecca", 
    ["EMPTY", "sat on"], 
    "a pillow", 
    ["EMPTY.", "knelt on it"], 
    "a rug"
],
["Dan",     
    ["EMPTY", "watched"], 
    "a movie", 
    ["EMPTY.", "slept through it"], 
    "a short film"
],
["Cynthia",  
    ["composed", "EMPTY"], 
    "a sonnet", 
    ["changed a few words in a sonnet by Shakespeare", "EMPTY"], 
    "free verse"
],
["Duncan",  
    ["created", "EMPTY"], 
    "a mess", 
    ["added a bit to what was already pretty untidy when he arrived", "EMPTY"], 
    "a little clutter"
],
["Lars",  
    ["sculpted", "EMPTY"], 
    "a mug", 
    ["made the handle", "EMPTY"], 
    "a bowl"
],
["Martina",  
    ["invented", "EMPTY"], 
    "a soup", 
    ["added cumin to her grandmother's recipe", "EMPTY"], 
    "a stew"
],
["Patricia",  
    ["EMPTY", "held"], 
    "a monkey", 
    ["EMPTY", "let it climb up her"], 
    "a chimpanzee"
],
["Brandon",  
    ["EMPTY", "played"], 
    "an oboe", 
    ["EMPTY", "made a few squeeking noises"], 
    "an English horn"
]
];

var ITVSents = [
["Bob", 
    ["wanted", "refused"], 
    "a raise", 
    ["wondered whether he needed a raise","forget to sign the necessary paperwork"], 
    "a bonus"
], 
["Sarah", 
    ["needed", "tried to find"], 
    "a blender", 
    ["wanted one very badly","not put much effort into it"], 
    "a food processor"
], 
["Andy", 
    ["begged for", "earned"], 
    "a trophy", 
    ["asked what it would take to get one", "cheated a little, but less than most people"], 
    "a statuette"
], 
["Sam", 
    ["looked for", "climbed"], 
    "a mountain", 
    ["took a quick glance at an outdated map", "took a ski lift most of the way"], 
    "a big hill"
],
["Chris", 
    ["rummaged around for", "threw away"], 
    "a pen", 
    ["took a quick glance under the bed", "accidentally knocked it off his desk into the trash"], 
    "a marker"
],
["Irene", 
    ["prayed for", "flew through"], 
    "a storm", 
    ["hoped for one", "flew through the very edge of it"], 
    "a bit of rain"
],
["Dennis", 
    ["was afraid of", "yelled at"], 
    "a bee", 
    ["worried about his insect allergy", "squealed in alarm"], 
    "a wasp"
],
["Katie", 
    ["EMPTY", "visited"], 
    "a castle", 
    ["EMPTY", "drove past it"], 
    "a monastery"
],

//used as fillers
["Tony", 
    ["EMPTY", "hammered"], 
    "a nail", 
    ["EMPTY", "pounded at it with his shoe"], 
    "a tack"
],
["Laura", 
    ["EMPTY", "wore"], 
    "a skirt", 
    ["EMPTY", "used it as a shawl"], 
    "a tutu"
],
["Greg", 
    ["was afraid of", "EMPTY"], 
    "a puppy", 
    ["was worried about his allergies", "EMPTY"], 
    "a full-grown miniature poodle"
],
["Helen", 
    ["asked for", "EMPTY"], 
    "a sandwich", 
    ["said she was hungry for one", "EMPTY"], 
    "a wrap"
],
["Amanda",  
    ["demanded", "EMPTY"], 
    "a towel", 
    ["asked for it politely", "EMPTY"], 
    "a washcloth"
],
["Ben",  
    ["hoped for", "EMPTY"], 
    "a bicycle", 
    ["didn't mind one", "EMPTY"], 
    "a tricyle"
],
["Leah",  
    ["EMPTY", "washed"], 
    "an apple", 
    ["EMPTY", "rubbed it on her shirt"], 
    "a pear"
],
["Craig",  
    ["EMPTY", "folded"], 
    "a sheet", 
    ["EMPTY", "wadded it up"], 
    "a tarp"
] 
];

var exSents = [
["Steve",
    ["kicked", "EMPTY"],
    "the ball",
    ["nudged it", "EMPTY"],
    "a balloon"
 ]
];



function genQuestion(list,vType,e,qType)
{
    //takes a list (with subject, verbs, object, and hedges), a vType (creation/ITV=0, other=1), emphasis (0,1), a qType (test=ti,tc filler=f) returns Question item for IBEX
    var s = list[0];
    var v = list[1][vType];//creation/ITV=0, other=1
    var o = list[2];
    var q;
	var block = 0;
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
            q+=".u";
            break;
        case 1:
            q+=".s";
            break;
     }
    var sent = genSent(s,v,o,e);
    var vHedge = s+" actually just "+list[3][vType]+".";
    var oHedge = "what "+s+" "+v+" was actually more like "+list[4]+".";
	var pHedge = "the speaker is trying not to fully admit what "+s+" did, perhaps to avoid upsetting the person the speaker is talking to.";

    //alert('["'+q+'", "Question", {q: "'+sent+'", as: ['+'"'+vHedge+'"'+', '+'"'+oHedge+'"'+', '+'"'+pHedge+'"'+']}]');
    //return [q, "Question", {"q": "<p style='font-size:150%'>"+sent+"</p><br/><p style='font-size:100%'>What is the speaker hedging?</p></br>", "as": [vHedge, oHedge, pHedge]}];
    //return [  [q, "AcceptabilityJudgment", {"s": {html: "Sentence: "+sent+"<br/><br/> Context: "+vHedge}, "q":"How acceptable is the sentence as a description of the context?"}], [q, "AcceptabilityJudgment", {"s": {html: "Sentence: "+sent+"<br/><br/> Context: "+oHedge}, "q":"How acceptable is the sentence as a description of the context?"}]  ];
	alert([  [ [q, block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+vHedge}], [[q,block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+oHedge }], [[q,block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+pHedge }]  ]);
	
	return [  [ [q, block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+vHedge}], [[q,block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+oHedge }], [[q,block], "Scale", {html: "Sentence: "+sent+"<br/><br/> How surprised would you be to learn that "+pHedge }]  ];
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
    var eList = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1, 0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];
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
    if(e==1)
    {
        sortaForm = "<span style='font-size:50%'>sorta </span>";
    }
    else if (e==2)
    {
        sortaForm = "<span style='font-size:150%'><b>sorta </b></span>";
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
function genList(list)
{
    //Takes a list and makes a pretty output for the browser, out of date
    var counter = 0;
    var output = "";
    for (i=0; i<list.length; i++)
    {
        counter++;
        var vtype = 0;//to make drafting easier
        var emph = 0;//to make drafting easier
    
        output+=counter+". "+genSent(list[i][0],list[i][1][vtype],list[i][2],emph)+"<br><br><input type='radio' name='p' value='1' class='obligatory'>"+list[i][1][vtype]+": e.g., "+list[i][3][vtype]+
        "<br><input type='radio' name='p' value='2'>"+list[i][2]+": e.g., "+list[i][4]+"<br> <br>";
        
        counter++;
        var vtype = 1;//to make drafting easier
        var emph = 1;//to make drafting easier
        
        output+=counter+". "+genSent(list[i][0],list[i][1][vtype],list[i][2],emph)+"<br><br><input type='radio' name='p' value='1' class='obligatory'>"+list[i][1][vtype]+": e.g., "+list[i][3][vtype]+
        "<br><input type='radio' name='p' value='2'>"+list[i][2]+": e.g., "+list[i][4]+"<br> <br>";
    }
    return output;
}

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