let def = document.querySelector("#default");
let def_cont = document.querySelector(".def_container");
let height, width, cont_width;
let ref1 = document.querySelector("#ref1");
let ref1Line = document.querySelector("#ref1Line");
let ref2 = document.querySelector("#ref2");
let ref3 = document.querySelector("#ref3");
let ref4 = document.querySelector("#ref4");
let ref4Line = document.querySelector("#ref4Line");

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
	if (width < 950) {
		dots.style.width = hgr.offsetLeft - _950_w.width + 30 + "px";
		dots.style.left = _950_w.width - 25 + "px";
	} else {
		dots.style.width = hgr.offsetLeft - _950_w.width + 50 + "px";
		dots.style.left = _950_w.width - 45 + "px";
	}

	// console.log("LEFT", hgr.offsetLeft);
	// console.log("WIDTH", _950_w.width);
	// console.log("SIZE", hgr_pos.left - _950_w.width + "px");
	strelicaDole.style.height = middle - 25 + "px";
	tlYearPos();
	tlLinesPos();
	divisionLines();
}

function tlYearPos() {
	let font_percent = 1;
	let tlHeadlines = document.querySelectorAll(".tlYear");
	let cont_width = document.querySelector(".tl_wrapper .container").offsetLeft;
	let y_start = document.querySelector("#y_start");
	// let pos = y_start.getBoundingClientRect();
	let start_line = document.querySelector("#line1");
	let _2004 = document.querySelector("#_2004");
	let _1993 = document.querySelector("#_1993");
	if (def.offsetWidth < 1500) {
		font_percent = 0.7;
	}
	start_line.style.width = cont_width + 9 + "px";

	tlHeadlines.forEach((headline) => {
		// console.log(headline);
		let element = headline.children;
		let top = headline.getAttribute("data-top");
		let left = headline.getAttribute("data-left");
		let fnt_size = headline.getAttribute("data-fs") * font_percent;
		let bottom = headline.getAttribute("data-bottom");
		let right = headline.getAttribute("data-right");

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
		headline.style.right = right + "px";
		headline.style.top = top + "px";
		headline.style.bottom = bottom + "px";
	});
	let pos_2004 = _2004.getBoundingClientRect();
	let pos_1993 = _1993.getBoundingClientRect();
	let line2 = document.querySelector("#line2");
	let line_2010 = document.querySelector("#line_2010");
	let _2010 = document.querySelector("#_2010");
	let _2008 = document.querySelector("#_2008");
	let pos_2010 = _2010.getBoundingClientRect();
	let pos_2008 = _2008.getBoundingClientRect();
	// console.log(pos_2008, pos_2010);
	line2.style.width =
		pos_2004.left - (pos_1993.left + pos_1993.width) + 10 + "px";
	line2.style.left =
		-(pos_2004.left - (pos_1993.left + pos_1993.width) + 10) + "px";
	line_2010.style.height =
		pos_2010.top - pos_2008.top - pos_2008.height + pos_2010.height / 2 + "px";
	line_2010.style.top = -(pos_2010.top - pos_2008.top) + pos_2008.height + "px";
	// console.log(def.offsetWidth);
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

	console.log();
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
