AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Deep Query Attacks: A Reinforcement Learning Approach",
    cardImage: "assets/images/project-page/dqa.png",
    description: "Attacking a Black-box Convolutional Neural Network in the L-&infin setting using reinforcement learning in a query efficient way.",
    Previewlink: "https://github.com/RahaviSelvarajan/AdvRL/blob/master/Poster.pdf",
    Githublink: "https://github.com/RahaviSelvarajan/AdvRL",
  },
  {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "A movie recommendation system using collaborative filtering.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/collaborative-filtering-ALS",
  },
  {
    title: "Detection of Covid-19 from Chest X-Ray Images",
    cardImage: "assets/images/project-page/covid-detection.png",
    description: "Multi-class classification of chest x-ray images using deep learning.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/Detection-of-COVID19-from-Chest-XRays",
  },
  {
    title: "Prediction of risk of Neuro-Degenerative Disease using Gait features",
    cardImage: "assets/images/project-page/neuro.png",
    description: "Detection of Neuro-Degenerative Disease using Gait features.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/Predict-neuro-disease-using-gait-features",
  },
  {
    title: "Network Intrusion Detection System",
    cardImage: "assets/images/project-page/intrusion.png",
    description: "Intrusion detection model using machine learning algorithm on Big Data environment.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/network-intrusion-detection",
  },
  {
    title: "Pytorch Library for Color Augmentation",
    cardImage: "assets/images/project-page/color-augmentation.png",
    description: "A library for color augmentation in Pytorch.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/Data_Augmentation",
  },
  {
    title: "Handwritten Digits Classification using Pytorch",
    cardImage: "assets/images/project-page/digits.png",
    description: "A classification model for handwritten digits using Pytorch.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/Handwritten_Digits_Classification",
  },
  {
    title: "Blood Vessel Segmentation from Retinal Fundus Images",
    cardImage: "assets/images/project-page/retina.png",
    description: "Segmentation of blood vessels from retinal fundus images using morphological image processing.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/Image-Segmentation",
  },
  {
    title: "Simulation of 5G OFDM Transmitter using Python",
    cardImage: "assets/images/project-page/5g.png",
    description: "Simulation of a downlink OFDM signal assuming single port output.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/Simulation-of-5G-OFDM-Transmitter",
  },
  {
    title: "Blockage detection in sewer channels using image processing",
    cardImage: "assets/images/project-page/sewer.png",
    description: "Blockage detection in sewer channels using image processing.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/block-detection-in-pipes",
  },
  {
    title: "Personal Portfolio Website",
    cardImage: "assets/images/project-page/website.png",
    description: "This website is a personal portfolio website using HTML and CSS.",
    Previewlink: "",
    Githublink: "https://github.com/RahaviSelvarajan/rahaviselvarajan.github.io",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");
  description = document.getElementsByClassName("description");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
