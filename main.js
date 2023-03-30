let a=["Be Your Own Kind Of Beautiful","Never Wanted Perfect,Just Real","All Is Well","Things Will Work Out","Make It Happen"];
function show(){
	//let a=["Be Your Own Kind Of Beautiful","Never Wanted Perfect,Just Real","All Is Well","Things Will Work Out","Make It Happen"];
	let b=a.length;
	let c=Math.floor(Math.random()*b)
	let val=document.getElementById("quote");
	val.innerHTML=a[c];
	val.style.color="#1262a6";
}