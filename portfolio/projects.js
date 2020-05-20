"use strict";

//create array of objects
let projects = [
  {
    name: "one",
    headline: "Hotrod",
    img: ["bg-image-3.jpg"],
    description:
      "Hotrod modelled and textured in 3ds max. something loremsquaredtimespiexponentfivek Rendered in Corona<br> <br>bla bla bla based on ford coupe model 1934<br><br>lines breaks are appended to create line breaks<br><br>moreplacehodertextLorem ipsum dolor sit amet consectetur, adipisicing elit. <br><br>Odit vero, odio quam harum, tempore adipisci iusto accusamus assumenda amet soluta nobis voluptas ex quisquam animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br><br>Odit vero, odio quam harum, tempore adipisci iusto accusamus assumenda amet soluta nobis voluptas ex quisquam animi?",
  },
  {
    name: "two",
    headline: "Grass material",
    img: ["image2.png"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br><br>Odit vero, odio quam harum, tempore adipisci iusto accusamus assumenda amet soluta nobis voluptas ex quisquam animi?",
  },
  {
    name: "three",
    headline: "Lighthouse UE4",
    img: ["bg-image-2.png"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit vero, odio quam harum, tempore adipisci iusto accusamus assumenda amet soluta nobis voluptas ex quisquam animi?",
  },
  {
    name: "four",
    headline: "Mac-10",
    img: ["mac10-1.png", "mac10-2.png", "mac10-3.png"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit vero, odio quam harum, tempore adipisci iusto accusamus assumenda amet soluta nobis voluptas ex quisquam animi?",
  },
  {
    name: "five",
    headline: "Gramophone",
    img: ["gramophone01.png"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit vero, odio quam harum, tempore adipisci iusto accusamus assumenda amet soluta nobis voluptas ex quisquam animi?",
  },
  {
    name: "six",
    headline: "Steampunk rifle",
    img: ["rifle01.png"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit vero, odio quam harum, tempore adipisci iusto accusamus assumenda amet soluta nobis voluptas ex quisquam animi?",
  },
];

//append to the dom

appendProjects(projects);
styleCss();

function appendProjects(projects) {
  let htmlTemplate = "";
  for (let project of projects) {
    htmlTemplate += `
        <article class="portfolio-item ${project.name}"
        onclick="showProject('${project.name}')"
        > 
          <p class="headline-${project.name}">${project.headline}</p>
        </article>
      `;
  }

  document.querySelector("#projects").innerHTML = htmlTemplate;
}

//style css
function styleCss() {
  for (let project of projects) {
    document.querySelector(
      `.portfolio-item.${project.name}`
    ).style.backgroundImage = `url(/img/${project.img[0]})`;
  }
}

function showProject(projectName) {
  let project;
  for (let p of projects) {
    if (projectName == p.name) {
      project = p;
      break;
    }
  }
  let htmlTemplate = `
  
  <div class="modalGrid">
   <div class="modalItemOne">
   <h2>${project.headline}</h2>
   <p>${project.description}</p>
   </div>

<div class="modalItemTwo">`;

  for (let img of project.img) {
    htmlTemplate += `
  <div class="mySlideshow fade">
  <img src="img/${img}">
</div>
  
  `;
  }

  htmlTemplate += `


<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>


  </div>
  <div class="close" onclick=hideProject()>&#x2716;</div>

</div>
`;

  document.querySelector(".modal").innerHTML = htmlTemplate;
  document.querySelector(".modal").style.display = "block";
  document.querySelector("#projects").style.filter = "blur(50px";
  slideIndex = 1;
  showSlides(1);
}

function hideProject() {
  document.querySelector(".modal").style.display = "none";
  document.querySelector("#projects").style.filter = "blur(0px";
}

//slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlideshow");

  if (slides.length > 0) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
}
