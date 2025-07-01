function showmore() {
    var addprojects = document.getElementById("furtherprojects");
    var toggleButton = document.getElementById("toggleButton");

    if (addprojects.style.display === "none" || addprojects.style.display === "") {
        addprojects.style.display = "block";
        toggleButton.textContent = "Show Less";
    } else {
        addprojects.style.display = "none";
        toggleButton.textContent = "Show More";
    }
}
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
  
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });  