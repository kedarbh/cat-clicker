
let container = document.getElementById('container');

class Cat {
	constructor(name, imgLink){
		this.name = name;
		this.imgUrl = imgLink;
		this.click = 0;
		this.update();
	}
}

Cat.prototype.update = function() {
	let div = document.createElement('div');
	let callBy = document.createElement('h1');
	callBy.textContent = this.name;
	container.appendChild(div).appendChild(callBy);

	let count = document.createElement('h3');
	count.textContent = `Clicks: ${this.click}`;
	container.appendChild(div).appendChild(count);

	let img = (new Image());
	img.src = this.imgUrl;

	container.appendChild(div).appendChild(img);
}

new Cat('Cat 1', 'images/cat1.jpeg');
new Cat('Cat 2', 'images/cat2.jpeg');

let cats = document.getElementsByTagName('img')
let count = document.getElementsByTagName('h3');

for(let i = 0; i<count.length; i++) {
	let click = Array(count.length).fill(0);
	cats[i].addEventListener('click', function(){
  //the element has been clicked... do stuff here
  	click[i]++;
  	count[i].innerHTML = `Clicks: ${click[i]}`;
});
}
