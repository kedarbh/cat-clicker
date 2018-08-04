// apps model
let model = {
	selectedCat: null,
	cats: [
		{
			name : 'Biralu',
			imgSrc : 'images/cat1.jpeg'
		},
		{
			name : 'Meow',
			imgSrc : 'images/cat2.jpeg'
			//Photo by Kelvin Valerio from Pexels
		},
		{
			name : 'Kali',
			imgSrc : 'images/cat3.jpeg'
		},
		{
			name : 'Gori',
			imgSrc : 'images/cat4.jpeg'
		},
		{
			name : 'Rati',
			imgSrc : 'images/cat5.jpeg'
		}
	]
};

let octopus = {
	init: function() {
		//initially display first cat from model in the view
		model.selectedCat = model.cats[0];

		//initialize cat list and cat view
		viewCatList.init();
		viewCat.init();
	},
	getCat: function() {
		return model.cats;
	},
	getSlectedCat: function() {
		return model.selectedCat;
	},
	setSelectedCat: function(cat) {
		return model.selectedCat = cat;

	}
};

// view for diasplaying cat lists

let viewCatList = {
	init: function() {
		this.catList = document.getElementById('cat-list');
		// render cat list
		this.render()
	},

	render: function() {
		let cats = octopus.getCat();
		// console.log(cats);
		for (let i = 0; i < cats.length; i++) {
			cat = cats[i];
			list = document.createElement('li');
			list.textContent = cat.name;

			//click event to set the selected cat to a new cat.
			list.addEventListener('click', (function(meow) {
				return function() {
					octopus.setSelectedCat(meow);
					//change the view once the selection changes
					viewCat.render();
				}
			})(cat));
			this.catList.appendChild(list);
		}

	}
};

// view for diasplaying cat

let viewCat = {
	init: function() {
		this.cat = document.getElementById('cat-display');
		this.catName = document.getElementById('cat-name');
		this.countClick = document.getElementById('click-count');
		this.catImg = document.getElementById('cat-image');
		this.render();
	},
	render: function() {
		//render the image of selected cat
		let currentCat = octopus.getSlectedCat();
		this.catImg.src = currentCat.imgSrc;
	}
};


octopus.init();




