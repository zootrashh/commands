var res = "";
var number = Math.floor(Math.random() * 100) + 1;

if(number >= 0 && number < 25) {
	res = `${number}%! BibleThump`;
}

else if(number >= 25 && number < 50) {
	res = `${number}%! NotLikeThis`;
}

else if(number >= 50 && number < 75) {
	res = `${number}%! FutureMan`;
}

else {
	res = `${number}%! PogChamp`;
}

res;
