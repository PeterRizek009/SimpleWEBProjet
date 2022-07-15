//check if ther's local storage option

let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );
}

/* Toggle spin class on icon*/
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");

  document.querySelector(".setting-box").classList.toggle("open");
};
/****************************** */

/*switch colors */

const colorli = document.querySelectorAll(".colors-list li");

colorli.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      localStorage.getItem("color-option")
    );
    localStorage.setItem("color-option", e.target.dataset.color);
  });
});
/*end of switch color  */

/*switch background  */

let backgroundOption = true;

let backgrounInterval;

const backgroundBtn = document.querySelectorAll(".background-btn span");

backgroundBtn.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomize();
    } else {
      backgroundOption = false;
      clearInterval(backgrounInterval);
    }
  });
});

/**end of seitching background */
// Changing landing Page

let landingPage = document.querySelector(".landing-page");

let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Backgrounf option to change background

function randomize() {
  if (backgroundOption === true) {
    backgrounInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imgArray.length);
      landingPage.style.backgroundImage =
        'url("img/' + imgArray[randomNumber] + '")';
    }, 10000);
  }
}

randomize();

//select skill section
let ourskills = document.getElementById("skills");

window.onscroll = function () {
  //skills offset top
  let skillsOffsetTop = ourskills.offsetTop;
  // console.log(skillsOffsetTop);

  //skills outter height
  let skillsOuterHeight = ourskills.offsetHeight;

  let windowheight = this.innerHeight;

  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowheight) {
    let allSkills = document.querySelectorAll(
      ".skills .skills-option .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

//Create pop up within the image

let ourGallery = document.querySelectorAll(
  ".gallery .container-gallery .image-box img"
);

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //create overlay element
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");

    popupBox.className = "popup-box";

    document.body.appendChild(popupBox);

    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupImage.className = "popup-image";

    popupBox.appendChild(popupImage);

    let popupBtn = document.createElement("button");

    popupBtn.className = "popup-btn";

    popupBtn.innerHTML = "x";

    popupBox.appendChild(popupBtn);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className == "popup-btn") {
    e.target.parentElement.remove();

    document.querySelector(".popup-overlay").remove();
  }
});
