
let displayCat = document.getElementById('cat-display');

// apps model
let model = {
	selectedCat: null,
	cats: [
		{
			name : 'biralu',
			imgSrc : 'images/cat1.jpg'
		},
		{
			name : 'meow',
			imgSrc : 'images/cat2.jpg'
			//Photo by Kelvin Valerio from Pexels
		},
		{
			name : 'kali',
			imgSrc : 'images/cat3.jpg'
		},
		{
			name : 'gori',
			imgSrc : 'images/cat4.jpg'
		},
		{
			name : 'rati',
			imgSrc : 'images/cat5.jpg'
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

	}
};

// view for diasplaying cat

let viewCat = {
	init: function() {
		this.cat = document.getElementById('cat-display');
		this.catName = document.getElementById('cat-name');
		this.countClick = document.getElementById('click-count');
		this.catImg = document.getElementById('cat-image');

	}
};


octopus.init();




