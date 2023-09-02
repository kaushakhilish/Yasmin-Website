document.addEventListener("DOMContentLoaded", function () {
	const modal = document.getElementById("myModal");
	const menuButton = document.querySelector(".menu-icon");
	const closeButton = document.querySelector(".close");

	menuButton.addEventListener("click", function () {
		modal.style.display = "block";
	});

	closeButton.addEventListener("click", function () {
		modal.style.display = "none";
	});

	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	});
});
