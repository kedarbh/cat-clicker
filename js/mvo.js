
'use strict'
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

		//initialize cat list, cat view and admin view
		viewCatList.init();
		viewCat.init();
		adminView.init();
		adminView.hide();
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
		adminView.render();
	},
	showAdminArea: function() {
		adminView.show();
		// adminView.render();
	},
	hideAdminArea: function() {
		adminView.hide();
	},
	saveAdminInfo: function() {
		let currentCat = octopus.getSlectedCat();
		let oldName = currentCat.name;
		model.selectedCat.name = adminView.nameValue.value;
        model.selectedCat.imgSrc = adminView.urlValue.value;
        model.selectedCat.clickCount = adminView.clickValue.value;
        // viewCatList.list.textContent = currentCat.name;
        viewCat.render();
        viewCatList.update(oldName, currentCat.name);
        adminView.hide();
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
			let cat = cats[i];
			let list = document.createElement('li');
			list.textContent = cat.name;

			//click event to set the selected cat to a new cat.
			list.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setSelectedCat(catCopy);
					//change the view once the selection changes
					viewCat.render();
					adminView.render();
				}
			})(cat));
			// display cat name list
			this.catList.appendChild(list);
		}

	},
	update: function(oldName, name) {
		let list = document.getElementsByTagName('li');
		// console.log(list);
		// console.log(oldName);
		// console.log(name);
		for (let i = 0; i < list.length; i++) {
			if(list[i].innerText === oldName) {
				// console.log(list[i].innerText);
				list[i].innerText = name;
			}
		}

	}
};

// view for diasplaying cat

let viewCat = {
	init: function() {
		// this.cat = document.getElementById('cat-display');
		this.catName = document.getElementById('cat-name');
		this.countClick = document.getElementById('click-count');
		this.catImg = document.getElementById('cat-image');
		//detect the click and increase the counter
		this.catImg.addEventListener('click', function(){
			octopus.clickCounter();
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
let adminView = {
	init: function() {
		this.button = document.getElementById('admin-button');
		this.cancelButton = document.getElementById('cancel');
		this.saveButton = document.getElementById('save');
		this.showInfos = document.getElementById('admin-info');
		this.nameValue = document.getElementById('name-input');
		this.urlValue = document.getElementById('url-input');
		this.clickValue = document.getElementById('click-input');

		this.button.addEventListener('click', function() {
			octopus.showAdminArea();
		});

		this.cancelButton.addEventListener('click', function() {
			octopus.hideAdminArea();
		});

		this.saveButton.addEventListener('click', function() {
			octopus.saveAdminInfo();
		});

		this.render();
	},
	render: function() {
		let currentCat = octopus.getSlectedCat();
		this.nameValue.value = currentCat.name;
		this.urlValue.value = currentCat.imgSrc;
		this.clickValue.value = currentCat.clickCount;
	},
	show: function() {
		this.showInfos.style.display = 'block';

	},
	hide: function() {
		this.showInfos.style.display = 'none';
	}
};
//start app
octopus.init();

