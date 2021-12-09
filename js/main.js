let def = document.querySelector("#default");
let def_cont = document.querySelector(".def_container");
let height, width, cont_width;
let ref1 = document.querySelector("#ref1");
let ref1Line = document.querySelector("#ref1Line");
let ref2 = document.querySelector("#ref2");
let ref3 = document.querySelector("#ref3");
let ref4 = document.querySelector("#ref4");
let ref4Line = document.querySelector("#ref4Line");
let tl_years = document.querySelectorAll(".tl-year");
let tl_titles = document.querySelectorAll(".tl_title");
let tl_texts = document.querySelectorAll(".tl_text");
let percent = 1;
let percent_top = 1;
window.addEventListener("load", start);
window.addEventListener("resize", start);

function start() {
	width = def.offsetWidth;
	let _950 = document.querySelector("._950 h2");
	let dots = document.querySelector(".doted_line");
	let hgr = document.querySelector("#header_hgr");
	let hgr_pos = hgr.getBoundingClientRect();
	let header = document.querySelector("header");
	let strelicaDole = document.querySelector(".strelica");
	let middle = header.offsetHeight / 2 - hgr.offsetHeight / 2;
	let _950_w = _950.getBoundingClientRect();
	let _1958 = document.querySelector("#_1958");
	let line_1958 = document.querySelector("#line_1958");

	if (width < 950) {
		dots.style.width = hgr.offsetLeft - _950_w.width + 30 + "px";
		dots.style.left = _950_w.width - 25 + "px";
	} else {
		dots.style.width = hgr.offsetLeft - _950_w.width + 50 + "px";
		dots.style.left = _950_w.width - 45 + "px";
	}

	strelicaDole.style.height = middle - 25 + "px";
	fontResize();
	tlYearPos();
	tlLinesPos();
	divisionLines();
}

function fontResize() {
	if (width <= 1550) {
		percent = 0.8;
		percent_top = 1.1;
	}
	if (width <= 1240) {
		percent = 0.7;
		percent_top = 1.1;
	} else {
		percent = 1;
		percent_top = 1;
	}
}

function tlYearPos() {
	// TL-position
	tl_years.forEach((tl_year) => {
		let top = tl_year.getAttribute("data-top");
		let bottom = tl_year.getAttribute("data-bottom");
		let left = tl_year.getAttribute("data-left");
		let right = tl_year.getAttribute("data-right");
		if (left) {
			tl_year.style.left = left * percent + "px";
		}
		if (right) {
			tl_year.style.right = right * percent + "px";
		}
		if (top) {
			tl_year.style.top = top * percent_top + "px";
		}
		if (bottom) {
			tl_year.style.bottom = bottom * percent_top + "px";
		}

		console.log(percent);
	});

	// STARTING LINE 1958
	let _1958_pos = _1958.getBoundingClientRect();

	line_1958.style.width = _1958_pos.left + 20 + "px";
	line_1958.style.right = 100 - 8 + "%";
	line_1958.style.top = _1958.getAttribute("data-fs") / 2 - 5 + "px";

	setFontSize(tl_titles);
	setFontSize(tl_texts);
}
function setFontSize(items) {
	items.forEach((item) => {
		let font = item.getAttribute("data-fs");
		let mt = item.getAttribute("data-mt");
		let ml = item.getAttribute("data-ml");
		let fontSize = font * percent;
		item.style.fontSize = fontSize + "px";
		if (mt) {
			item.style.marginTop = mt + "px";
		}
		if (ml) {
			item.style.marginLeft = ml + "px";
		}
		if (item.className === "tl_title") {
			let sibling = findSiblings(item);
			item.addEventListener("mouseenter", (e) => {
				item.classList.add("hover");
				if (sibling) {
					sibling.classList.add("hover");
				}
			});
			item.addEventListener("mouseleave", (e) => {
				item.classList.remove("hover");
				if (sibling) {
					sibling.classList.remove("hover");
				}
			});
		}
	});
}
function findSiblings(element) {
	let text_elem;
	if (element.nextElementSibling) {
		text_elem = element.nextElementSibling;
	}
	if (element.previousElementSibling) {
		text_elem = element.previousElementSibling;
	} else {
		return null;
	}
	return text_elem;
}

function tlLinesPos() {}

function divisionLines() {
	let ref1_pos = ref1.getBoundingClientRect();
	let ref2_pos = ref2.getBoundingClientRect();
	let ref3_pos = ref3.getBoundingClientRect();
	let ref4_pos = ref4.getBoundingClientRect();
	ref1Line.style.width = space_between(ref2_pos.left, ref1_pos.left) + "px";
	ref4Line.style.width =
		space_between(ref4_pos.left, ref3_pos.left) -
		ref3_pos.width +
		ref3_pos.width / 2 +
		"px";
}

function space_between(ref_a, ref_b) {
	let distance = ref_a - ref_b;
	return distance;
}

// VIDEO PLAYER

let video = document.querySelector("#video_content");
let video_headline = document.querySelector(".video_controls");
let play_stop = document.querySelector(".control_border");
let play_stop_icon = document.querySelector("#play_stop");

play_stop.addEventListener("click", playVideo);

video.addEventListener("click", playVideo);
video.addEventListener("mousemove", showControls);
function playVideo() {
	if (!video.classList.contains("playing")) {
		video.classList.add("playing");
		video_headline.classList.add("playing_v");
		video.play();
	} else {
		video.pause();
		video.classList.remove("playing");
		video_headline.classList.remove("playing_v");
	}
}
function showControls(e) {
	if (video.classList.contains("playing")) {
		let video_pos = video.getBoundingClientRect();
		let m_x = e.clientY - video_pos.top;
		if (m_x > video_pos.width - video_pos.width * 0.2) {
			console.log("HOVERUJEM PRI DNU");
		}
	}
}
