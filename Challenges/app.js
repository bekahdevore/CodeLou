var array = [1,2,3,4,5];
var sum = 0;

for(var i=0; i<array.length; i++) {
	sum += array[i];	
}
console.log(sum);


array.splice(2, 0, 6);
console.log(array);

document.querySelector(".main-content span").innerHTML="$6,500";

$(".main-content span")
	.text("$6,500");


 

