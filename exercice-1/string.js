function ucfirst(str){
	return str.substr(0,1).toUpperCase() + str.substr(1,str.length).toLowerCase()
}

console.log(ucfirst("hello world"))

function capitalize(str){

	tab = str.split(" ");
	for (var m in tab) {
		tab[m] = tab[m].substr(0, 1).toUpperCase()+tab[m].substr(1, tab[m].length);
	}
	str = tab.join(" ");
	return str
}

console.log(capitalize("hello world"))

function camelCase(str){
	tab = str.split(" ");
	for (var m in tab) {
		tab[m] = tab[m].substr(0, 1).toUpperCase()+tab[m].substr(1, tab[m].length);
	}
	str = tab.join("");
	return str
}

console.log(camelCase("hello world"))

function snake_case(str){
	tab = str.split(" ");
	for (var m in tab) {
		tab[m] = tab[m].substr(0, 1)+tab[m].substr(1, tab[m].length);
	}
	str = tab.join("_");
	return str
}

console.log(snake_case("hello world"))

function convertLettreToLeet(lettre) {
    // Par défaut, la lettre ne change pas
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
        break;
    case "e":
        lettreLeet = "3";
        break;
    case "l":
        lettreLeet = "1";
        break;
    case "u":
        lettreLeet = "(_)";
        break;
    case "t":
        lettreLeet = "7";
        break;
    }
    return lettreLeet;
}

function leet(str) {
    var motLeet = "";
    for (var i = 0; i < str.length; i++) {
        motLeet = motLeet + convertLettreToLeet(str[i]);
    }
    return motLeet;
}

console.log(leet("Anaconda"))


function prop_access(){

}

function verlan(str){
	var motInverse = "";
	for (var i = 0; i < str.length; i++) {
        motInverse = str[i] + motInverse;
    }
    return motInverse;
}

console.log(verlan("Anaconda"))


function yoda(str){
	tab = str.split(" ");
	console.log(tab.length)
	for (i = tab.length; i > 0; i--) {

		tab[i] = tab[i]+tab[i].substr(1, tab[i].length);
	}
	str = tab.join(" ");
	return str
}
console.log(yoda("Hello world"))
