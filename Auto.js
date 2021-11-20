let fs = require('fs');
let arg = process.argv;
s = fs.readFileSync('string.txt');
s = s.toString();
t = fs.readFileSync('substring.txt');
t = t.toString();
m = t.length
alph = new Array();
for(i = 0; i < m; i++){
	alph[t.charAt(i)] = 0;
}
del = new Array(m + 1);
for(j = 0; j <= m; j++){
	del[j] = new Array();
}
for(i in alph){
	del[0][i] = 0;
}
for(j = 0; j < m; j++){
	prev = del[j][t.charAt(j)];
	del[j][t.charAt(j)] = j + 1;
	for(i in alph){
		del[j + 1][i] = del[prev][i]
	}
}
///console.log(del);
///console.log(del[0]['б']);
let state = 0;
for (let i = 0; i < s.length; i++){
	state = del[state][s.charAt(i)];
	if (state == t.length){
		console.log(i - t.length + 1);
	}
}
