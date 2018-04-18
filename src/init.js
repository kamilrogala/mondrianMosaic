/*jshint esversion:6,browser:true,devel: true*/
document.addEventListener('DOMContentLoaded', function () {
	const mondrianContainer = document.getElementById('mondrian');
	document.body.style.margin = 0;
	mondrianContainer.style.maxWidth = '100%';
	mondrianContainer.style.margin = '0 auto';
	mondrianContainer.style.display = 'grid';
	mondrianContainer.style.gridGap = '6px';
	mondrianContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(50px, 1fr))';
	mondrianContainer.style.gridAutoRows = '1fr';
	mondrianContainer.style.gridAutoFlow = 'dense';
	mondrianContainer.style.background = '#000';
	mondrianContainer.style.border = '6px solid #000';

	const youLikeCats = 'Hell yeah';

	for (let i = 0; i < 120; i++) {
		let mondrianItem = document.createElement('div');
		mondrianItem.classList += 'mondrian-item';
		let mondrianItemImg = document.createElement('img');
		mondrianItemImg.classList += 'mondrian-item-child';

		mondrianItem.style.gridColumn = 'span ' + (Math.floor(Math.random() * 3) + 1);
		mondrianItem.style.gridRow = 'span ' + (Math.floor(Math.random() * 2) + 1);
		mondrianItem.style.maxWidth = '250px';
		mondrianItem.style.width = 'auto';
		mondrianItem.style.lineHeight = 0;

		let mondrianItemImgWidth = Math.floor(Math.random() * 500) + 100 + 'px';
		let mondrianItemImgHeight = Math.floor(Math.random() * 80) + 10 + 'px';


		if (youLikeCats !== 'Hell yeah') {
			let mondrianItemImgColor = (Math.random() * 0xFFFFFF << 0).toString(16);
			mondrianItemImg.setAttribute('src', `http://placehold.it/${childWidth}x${childHeight}/${childColor}`);
		} else {
			let imgArray = [
			'https://i.imgflip.com/10eseu.jpg',
			'http://s4.storage.akamai.coub.com/get/b18/p/coub/simple/cw_image/2a4ffacc3d8/8b6ee6ed8927496cce41b/med_1409078052_1381498600_00063.jpg',
			'https://i.imgflip.com/vmpnp.jpg',
			'https://memegenerator.net/img/images/14700505.jpg',
			'http://1.bp.blogspot.com/-faGqmQCFz1c/Usa1TRmZUuI/AAAAAAAAKzo/kxtGUnpEdLI/s1600/grumpy-cat-large-face.jpg'
			];
			let n = Math.floor(Math.random() * 5);
			mondrianItemImg.setAttribute('src', imgArray[n]);
		}
		mondrianItemImg.style.width = '100%';
		mondrianItemImg.style.height = '100%';
		mondrianItemImg.style.objectFit = 'cover';
		mondrianItem.appendChild(mondrianItemImg);
		mondrian.appendChild(mondrianItem);
	}
});
