//document.getElementById('purple').onclick = partyPurple;
//document.getElementById('green').onclick = partyGreen;
//document.getElementById('blue').onclick = partyBlue;
//document.getElementById('orange').onclick = partyOrange;
//
//document.body.style.backgroundImage = 'url(../day-night.gif);

/**
 * YOSEMITE
 * https://www.youtube.com/watch?v=ZwzY1o_hB5Y
 * projectyose
 * A 200+ mile backpacking experience through Yosemite National Park captured by Colin Delehanty and Sheldon Neill. This project was filmed over the course of 10 months. We spent a combined 45 days in the park capturing the images in this video.
 * http://www.projectyose.com
 *
 * JOSHUA TREEa
 * www.milkywaymike.com
 * https://www.youtube.com/watch?v=7YXilkBK-To
 *
 * YELLOWSTONE
 * https://www.youtube.com/watch?v=DkrAsFYVr7g
 *
 * REDWOOD
 * https://www.youtube.com/watch?v=Tc7foCQcBKc
 */
const creditLink = document.querySelector("a");
const videoBackground = document.querySelector("video");
const loop = document.querySelector("#loop");
const joshuaTree = document.querySelector("#joshua-tree");
const rockyMountains = document.querySelector("#rocky-mountains");
const redwood = document.querySelector("#redwood");
const yellowstone = document.querySelector("#yellowstone");

const passUrl = (url) => (videoBackground.src = url);
const passPoster = (url) => (videoBackground.poster = url);

joshuaTree.addEventListener("click", () => {
	passPoster("./img/joshua-tree-poster.png");
	passUrl("./video/joshua-tree.mp4");
	creditLink.href = "https://www.youtube.com/watch?v=7YXilkBK-To";
});
rockyMountains.addEventListener("click", () => {
	passPoster("./img/joshua-tree-poster.png");
	passUrl("./video/rocky-mountains.mp4");
	creditLink.href = "https://www.youtube.com/watch?v=7YXilkBK-To";
});
redwood.addEventListener("click", () => {
	passPoster("./img/redwood-poster.png");
	passUrl("./video/Redwood.mp4");
	creditLink.href = "https://www.youtube.com/watch?v=Tc7foCQcBKc";
});
yellowstone.addEventListener("click", () => {
	passPoster("./img/joshua-tree-poster.png");
	passUrl("./video/yellowstone.mp4");
	creditLink.href = "https://www.youtube.com/watch?v=DkrAsFYVr7g";
});
