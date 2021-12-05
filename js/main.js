let def = document.querySelector("#default");
let def_cont = document.querySelector(".def_container");
let height, width, cont_width;
window.addEventListener("load", start);
window.addEventListener("resize", start);

function start() {
	let dots = document.querySelector(".doted_line");
	let hgr = document.querySelector("hgroup");
	let header = document.querySelector("header");
	let strelicaDole = document.querySelector(".strelica");
	let middle = header.offsetHeight / 2 - hgr.offsetHeight / 2;
	dots.style.width = hgr.offsetLeft - dots.offsetLeft + 10 + "px";
	// console.log(
	// 	header.offsetHeight,
	// 	" : ",
	// 	hgr.offsetHeight,
	// 	" MIDDLE: ",
	// 	middle
	// );
	strelicaDole.style.height = middle - 25 + "px";
	tlYearPos();
	tlLinesPos();
}

function tlYearPos() {
	let tlHeadlines = document.querySelectorAll(".tlYear");

	tlHeadlines.forEach((headline) => {
		// console.log(headline);
		let element = headline.children;
		let top = headline.getAttribute("data-top");
		let left = headline.getAttribute("data-left");
		let fnt_size = headline.getAttribute("data-fs");
		for (let i = 0; i < element.length; i++) {
			// console.log(elementss[i].classList);
			if (element[i].classList.contains("title")) {
				element[i].style.fontSize = fnt_size + "px";
			}
			if (element[i].classList.contains("text")) {
				let ml = element[i].getAttribute("data-ml");
				let p_fsize = element[i].getAttribute("data-fontSize");
				let mt = element[i].getAttribute("data-mt");
				let mb = element[i].getAttribute("data-mb");
				element[i].style.fontSize = p_fsize + "px";
				element[i].style.marginLeft = ml + "px";
				element[i].style.marginTop = mt + "px";
				element[i].style.marginBottom = mb + "px";
			}
		}
		headline.style.left = left + "px";
		headline.style.top = top + "px";
	});
}

function tlLinesPos() {
	let lines = document.querySelectorAll(".lines");
	lines.forEach((line) => {
		let width = line.getAttribute("data-width");
		let height = line.getAttribute("data-height");
		let top = line.getAttribute("data-top");
		let left = line.getAttribute("data-left");
		line.style.width = width + "px";
		line.style.height = height + "px";
		line.style.left = left + "px";
		line.style.top = top + "px";
	});
	if (def.offsetWidth < 1300) {
	}
}
