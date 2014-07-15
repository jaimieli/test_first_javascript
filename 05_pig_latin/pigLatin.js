function translate(str){
    var splitString = str.toLowerCase().split(" ");
    var latin = []
    for (i=0; i < splitString.length; i++) {
	    var firstVowelPosition = splitString[i].search(/[aeiou]/i);
	    var quPosition = splitString[i].search(/qu/i);
	    if(quPosition > -1) {
	    	latin.push(splitString[i].substring((quPosition + 2), splitString[i].length) + splitString[i].substring(0, (quPosition + 2)) + "ay");
	    } else {
	    	latin.push( splitString[i].substring(firstVowelPosition, splitString[i].length) + splitString[i].substring(0, firstVowelPosition) + "ay");
		}
	}
	return latin.join(" ");
}
