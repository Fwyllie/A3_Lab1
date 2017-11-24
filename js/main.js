(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var cars = document.querySelectorAll('.data-ref');
var name = document.querySelector('.modelName');
var price = document.querySelector('.priceInfo');
var desc = document.querySelector('.modelDetails');


function changeElements(){
	console.log("ITS WORKING");

	let objectIndex = carData[this.id];

	name.firstChild.nodeValue = objectIndex.headline;
	price.firstChild.nodeValue = objectIndex.text;
	desc.firstChild.nodeValue = objectIndex.description;
	appliedClass = this.id;


	cars.forEach(function(element, index){
		element.classList.add('nonActive');
	})
	
	this.classList.remove('nonActive');

}





cars.forEach(function(element, index){
element. addEventListener('click', changeElements, false)
});



})();

