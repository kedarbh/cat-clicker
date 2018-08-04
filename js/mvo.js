// apps model
let model = {
	selectedCat: null,
	cats: [
		{
			name : 'Biralu',
			imgSrc : 'images/cat1.jpeg',
			clickCount: 0
		},
		{
			name : 'Meow',
			imgSrc : 'images/cat2.jpeg',
			//Photo by Kelvin Valerio from Pexels
			clickCount: 0
		},
		{
			name : 'Kali',
			imgSrc : 'images/cat3.jpeg',
			clickCount: 0
		},
		{
			name : 'Gori',
			imgSrc : 'images/cat4.jpeg',
			clickCount: 0
		},
		{
			name : 'Rati',
			imgSrc : 'images/cat5.jpeg',
			clickCount: 0
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
		amdinView.init();
	},
	getCat: function() {
		return model.cats;
	},
	getSlectedCat: function() {
		return model.selectedCat;
	},
	setSelectedCat: function(cat) {
		return model.selectedCat = cat;

	},
	clickCounter: function() {
		model.selectedCat.clickCount++;
		// console.log(model.selectedCat.clickCount);
		viewCat.render();
	},
	showAdminArea: function() {
		amdinView.showInfos.classList.remove('hidden');
	},
	hideAdminArea: function() {
		amdinView.showInfos.classList.add('hidden');
	}

}
// view for diasplaying cat lists

let viewCatList = {
	init: function() {
		this.catList = document.getElementById('cat-list');
		// render cat list
		this.render();
	},

	render: function() {
		let cats = octopus.getCat();
		// console.log(cats);
		for (let i = 0; i < cats.length; i++) {
			cat = cats[i];
			list = document.createElement('li');
			list.textContent = cat.name;
			this.catList.appendChild(list);
			//click event to set the selected cat to a new cat.
			list.addEventListener('click', (function(meow) {
				return function() {
					octopus.setSelectedCat(meow);
					//change the view once the selection changes
					viewCat.render();
					amdinView.render();
				}
			})(cat));
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
		//detect the click and increase the counter
		this.catImg.addEventListener('click', function(){
			octopus.clickCounter();
			amdinView.render();
		});
		this.render();
	},
	render: function() {
		//render the image of selected cat
		let currentCat = octopus.getSlectedCat();
		this.catName.textContent = currentCat.name;
		this.countClick.textContent = 'Clicks '+ currentCat.clickCount;
		this.catImg.src = currentCat.imgSrc;
	}
};

//view for admin area
let amdinView = {
	init: function() {
		this.button = document.getElementById('admin-button');
		this.cancelButton = document.getElementById('cancel');
		this.showInfos = document.getElementById('admin-info');
		this.nameValue = document.getElementById('name-input');
		this.urlValue = document.getElementById('url-input');
		this.clickValue = document.getElementById('click-input');
		this.render();
	},
	render: function() {
		let currentCat = octopus.getSlectedCat();
		let cat = octopus.getCat();


		this.button.addEventListener('click', function() {
			octopus.showAdminArea();
		});

		this.cancelButton.addEventListener('click', function() {
			octopus.hideAdminArea();
		});

		this.nameValue.value = currentCat.name;
		this.urlValue.value = currentCat.imgSrc;
		this.clickValue.value = currentCat.clickCount;

	}
};

octopus.init();