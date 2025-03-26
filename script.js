function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector("#hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}
function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}
function copyNumberToClipboard() {
	var number = "+639604266837";
	navigator.clipboard.writeText(number);

	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + number;
}
