(function () {
// start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var cars = document.querySelectorAll('.data-ref');

const httpRequest = new XMLHttpRequest(); //handles all AJAX requests

function changeElements(){
	const url = './includes/functions.php?carModel=' + this.id

	fetch(url)//Mae AJAX call for the viideo vidThumbs
	.then((resp) => resp.json()) //converts result to json
	.then((data) => { processElements(data); })
	.catch(function(error) {
		console.log(error);
	});}

function processElements(data){
	const {modelName, priceImg, modelDetails} = data;
	//console.log("ITS WORKING");
	let objectIndex = carData[this.id];
	let name = document.querySelector('.modelName').textContent = modelName;
	let price = document.querySelector('.priceInfo').innerHTML = priceImg;
	let desc = document.querySelector('.modelDetails').textContent = modelDetails;


	cars.forEach(function(element, index){
		element.classList.add('nonActive');
	})
	document.querySelector(`#${data.model}`).classList.remove('nonActive');
}

cars.forEach(function(element, index){
element. addEventListener('click', changeElements, false)
});

})();
