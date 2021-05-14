"use strict";

let seed = 1;

function openImage(event, status, dataImage) {

	console.log(event);
	/*получаем div элемента галереи*/
	const gallery = document.getElementsByClassName("gallery")[0];
	/*очищаем галерею*/
	gallery.innerHTML = "";
	/*плоучаем пораждающий событие объект*/
	const target = event.target;
	/*получаем data-атрибут с номером картинки*/
	//const seed = target.dataset.seed;
	/*если номер пустой то прерываем выполнение*/
	//const target = dataImage;

	if (event == "n") {
		seed +=1;

		if (seed == 4)
			seed = 1;
	}
	else if (event == "p") {
		seed -=1;

		if (seed == 0)
			seed = 3;
	}
	/*создаем картинку*/
	const image = document.createElement("img");
	//const button = document.querySelectorAll(".button")

	image.onload = function(){console.log('картинка существует')};
	image.onerror = function(){console.log('картинка не существует')};
	
	/*добавляем атрибут к картинке*/

	image.id = `image-${seed}`;
	image.src = `https://picsum.photos/seed/${seed}/800`;
	image.alt = `Изображение ${seed}`;

	/*добавляем новый блок в галерею*/
	gallery.appendChild(image);
}


function init() {
	const images = document.querySelectorAll(".thumbnails > img");


	for (let image of images) {
		buttonN.addEventListener("click", openImage);
		
	}
}

function nextImage() {
	let imageData = document.querySelectorAll("#thumbnail-1");
	openImage("n", imageData);
	console.log("next");
}

function prevImage() {
	let imageData = document.querySelectorAll("#thumbnail-1");

	openImage("p");

	console.log("prev");
}

window.addEventListener("load", init);













/*countOfImage = 0;

function PRAVAYAkakayaTOfunctiaNAknopku() {
	countOfImage++;
	//показываем массив array[countOfImage];

	//
	if (countOfImage == array.length - 1)
		countOfImage = 0;
}

function LEVAYAkakayaTOfunctiaNAknopku() {
	countOfImage--;
	//показываем массив array[countOfImage];
	
	//
	if (countOfImage == 0)
		countOfImage = array.length - 1;
}

window.addEventListener("load", init);

//image.addEventListener('error');*/