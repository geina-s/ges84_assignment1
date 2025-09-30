// function for painting image to appear on hobbies page
function toggleImage(){ 
        document.getElementById('painting').style.display = "block";
        document.getElementById('paint-button').style.display = "none";
}

// function to go to a random page in the website from home page
function goToRandomPage() {
  
        //creates an arrray of the pages (not including home) and randomly selects and navigates to one
        const links = document.querySelectorAll(".topnav a");
        const otherLinks = Array.from(links).filter(link => !link.classList.contains("active"));
        const randomLink = otherLinks[Math.floor(Math.random() * otherLinks.length)];
        window.location.href = randomLink.href;
}


// event listeners for paragraph on home page to add and remove underline when hovered over/not hovered over
document.querySelector("#banner p").addEventListener("mouseover", function() {
        this.style.textDecoration = 'underline';
});

document.querySelector("#banner p").addEventListener("mouseout", function() {
        this.style.textDecoration = 'none';
});

//event listener to change the background of the banner on the home page to blue when 'b' is pressed
document.addEventListener("keydown", function(event){
        if (event.key === "b") {
                document.getElementById('banner').style.backgroundColor = "lightblue";
        }
});

//event listener to change the background of the banner on the home page to bisque when 'o' is pressed
document.addEventListener("keydown", function(event){
        if (event.key === "o") {
                document.getElementById('banner').style.backgroundColor = "bisque";
  }
});