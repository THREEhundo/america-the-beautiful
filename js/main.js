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
const youtubeLink = document.querySelector("#youtube-link")
const websiteLink = document.querySelector("#website-link")
const videoBackground = document.querySelector("video")
const loop = document.querySelector("#loop")
const joshuaTree = document.querySelector("#joshua-tree")
const rockyMountains = document.querySelector("#rocky-mountains")
const redwood = document.querySelector("#redwood")
const yellowstone = document.querySelector("#yellowstone")

const passUrl = (url) => (videoBackground.src = url)
const passPoster = (url) => (videoBackground.poster = url)

joshuaTree.addEventListener("click", () => {
	passPoster("./img/joshua-tree-poster.png")
	passUrl("./video/joshua-tree.mp4")
	youtubeLink.href = "https://www.youtube.com/watch?v=7YXilkBK-To"
	websiteLink.href = "https://www.milkywaymike.com"
	websiteLink.innerText = "MilkywayMike"
	console.log(websiteLink.innerText)
})
rockyMountains.addEventListener("click", () => {
	passPoster("./img/rocky-mountains-poster.png")
	passUrl("./video/rocky-mountains.mp4")
	youtubeLink.href = "https://www.youtube.com/watch?v=OARvWgPtbSQ"
	websiteLink.href = "https://twitter.com/IndiaWideNature"
	websiteLink.innerText = "MTJD"
})
redwood.addEventListener("click", () => {
	passPoster("./img/redwoods-poster.png")
	passUrl("./video/Redwood.mp4")
	youtubeLink.href = "https://www.youtube.com/watch?v=Tc7foCQcBKc"
	websiteLink.href = "https://www.youtube.com/watch?v=Tc7foCQcBKc"
	websiteLink.innerText = "VMedia"
})
yellowstone.addEventListener("click", () => {
	passPoster("./img/yellowstone-poster.png")
	passUrl("./video/yellowstone.mp4")
	youtubeLink.href = "https://www.youtube.com/watch?v=DkrAsFYVr7g"
	websiteLink.href = "https://www.pond5.com/artist/akinbilgic"
	websiteLink.innerText = "AkinBilgic"
})
