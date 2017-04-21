
//Read file in as text
var openFile = function(file) {
	var reader = new FileReader();
	reader.onload =  function() {
		calculate(reader.result, file.name)
	};
	reader.readAsText(file);
	this.removeFile(file);
};

//Specify non-default dropzone options
Dropzone.autoDiscover = false;
$("div#mydz").dropzone({ paramName: "file",
						 acceptedFiles: ".txt",
						 autoProcessQueue: false,
						 url:"/someurl",
						 dictDefaultMessage: "Drop .txt files here or click to browse",
						 init: function() {
							this.on("addedfile", openFile.bind(this));
						 }})

 //for use in calculate function
 function add(a, b) {
 	return a + b;
 };

function mode(ary) {
    var counter = {};
    var mode = [];
    var max = 0;
    for (var i in ary) {
        if (!(ary[i] in counter))
            counter[ary[i]] = 0;
        counter[ary[i]]++;

        if (counter[ary[i]] == max)
            mode.push(ary[i]);
        else if (counter[ary[i]] > max) {
            max = counter[ary[i]];
            mode = [ary[i]];
        }
    }
    return mode;
};

function median(ary) {
    if (ary.length == 0)
        return null;
    ary.sort(function (a,b){return a - b})
    var mid = Math.floor(ary.length / 2.0);
    if ((ary.length % 2) == 1)  // length is odd
        return ary[mid];
    else
        return (ary[mid - 1] + ary[mid]) / 2.0;
}

var calculate = function(text, name) {
	var linecount = text.split(/\r+\n+|\r+|\n+/).length;
	var words = text.trim().replace(/(\n+\r+|\r+\n+|\r+|\n+)\s+|\r+\n+|\s+|\r+|\n+/g, " ").split(" ");
	var letters = text.replace(/(\n+\r+|\r+\n+|\r+|\n+)\s+|\r+\n+|\s+|\r+|\n+/g, "").split("");
	var wordLengths = words.map(function(word){return word.length});
	
	var stats = {"filename" : name ,
			     "linecount" : text.split(/\r+\n+|\r+|\n+/).length ,
			     "wordcount" : words.length ,
			     "mean" : (Math.round((wordLengths.reduce(add, 0))/(words.length) * 10) / 10) ,
			     "mode" : mode(wordLengths) ,
			     "median" : median(wordLengths) ,
			     "letter" : mode(letters)}

	for (var item in stats) {
		var li = document.getElementById(item);
		if(li.childElementCount > 0) {
			li.removeChild(li.children[0]);
		}
		var value = document.createElement("span");
		$(value).addClass("badge badge-default badge-pill");
		value.innerHTML = stats[item];
		li.appendChild(value);
	}
};
