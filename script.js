document.getElementById("explore").addEventListener("click", function() {
    document.getElementById("moving-image").classList.add("move-left");
    setTimeout(function() {
      window.location.href = "AboutUs.html";
    }, 1000); // Delay the transition to another page by 1 second (1000 milliseconds)
  });
  



  document.getElementById("explore").addEventListener("click", function() {
    var heading = document.querySelector("h1");
    var button = document.getElementById("explore");
    heading.classList.add("fade-out");
    button.classList.add("fade-out");
    setTimeout(function() {
      // Redirect to the desired page
      window.location.href = "AboutUs.html";
    }, 1000); // Delay the redirect to allow the fade-out animation to complete
  });
  
  function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
  }
  