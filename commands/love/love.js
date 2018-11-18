var res = "";
var number = Math.floor(Math.random() * 100) + 1;

if(number >= 0 && number < 25) {
	res = `${number}%... It''s a sad day... BibleThump`;
}

else if(number >= 25 && number < 50) {
	res = `${number}%... Better luck next time... NotLikeThis`;
}

else if(number >= 50 && number < 75) {
	res = `${number}%! Very nice! FutureMan`;
}

else {
	res = `${number}%! HOLY PogChamp`;
}

res;
