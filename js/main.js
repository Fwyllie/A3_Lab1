(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var cars = document.querySelectorAll('.data-ref');


const httpRequest = new XMLHttpRequest(); //handles all AJAX requests

function changeElements(){
	// Set up AJAX call
	if(!httpRequest){
		alert('Your browser is too old, sucks to suck');
		return false;
	}

	httpRequest.onreadystatechange = processRequest;
	httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
	httpRequest.send();
}

function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;
    //debugger;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
       // debugger;
        let data = JSON.parse(httpRequest.responseText);

        processElements(data);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }


function processElements(data){
	const {modelName, priceImg, modelDetails} = data;
	//console.log("ITS WORKING");
	let objectIndex = carData[this.id];
	let name = document.querySelector('.modelName').textContent = modelName;
	let price = document.querySelector('.priceInfo').innerHTML = priceImg;
	let desc = document.querySelector('.modelDetails').textContent = modelDetails;

	//name.firstChild.nodeValue = objectIndex.headline;
	//price.firstChild.nodeValue = objectIndex.text;
	//desc.firstChild.nodeValue = objectIndex.description;
	//appliedClass = this.id;
	
	cars.forEach(function(element, index){
		element.classList.add('nonActive');
	})

	document.querySelector(`#${data.model}`).classList.remove('nonActive');
	
	//this.classList.remove('nonActive');
}





cars.forEach(function(element, index){
element. addEventListener('click', changeElements, false)
});



})();

