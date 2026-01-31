function firstNonRepeatedChar(str) {
 // Write your code here
	let sArray=str.split("");
for (let i of str) {
    let f = sArray.filter(s => s===i);
    if (f.length===1) return i;
}

return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
