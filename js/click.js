var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

one.onclick = function() {
	one.classList.add("active");
	two.classList.remove("active");
	three.classList.remove("active");
	four.classList.remove("active");
}

two.onclick = function() {
	two.classList.add("active");
	one.classList.remove("active");
	three.classList.remove("active");
	four.classList.remove("active");
}
three.onclick = function() {
	three.classList.add("active");
	one.classList.remove("active");
	two.classList.remove("active");
	four.classList.remove("active");
}
four.onclick = function() {
	four.classList.add("active");
	one.classList.remove("active");
	two.classList.remove("active");
	three.classList.remove("active");
}