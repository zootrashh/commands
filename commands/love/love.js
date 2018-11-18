var loveMsg = "";
var number = Math.floor(Math.random() * 100) + 1;

if ($(query) === "") {
	loveMsg = "$(user) loves everything. :D";
}

else if ("$(query)" == "zootrash"||"$(query)" == "@zootrash"||"$(query)" == "zoo") {
	loveMsg = "$(user) loves zootrash!";
} 

else {
	loveMsg = `The love between ${user} and ${query} is ${number}%! PogChamp`;
} 

query;
loveMsg;
