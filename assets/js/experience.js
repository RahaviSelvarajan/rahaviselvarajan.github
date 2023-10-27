AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data and ML Engineer",
    cardImage: "assets/images/experience-page/sanofi.png",
    place: "Sanofi",
    time: "(May, 2023 - Present)",
    desp: "<li>As a MLOps engineer, I am responsible for platform migrations and Argo CD deployments.</li><li>Deploying ML models for various use-cases into production.</li><li>Worked in the LiveOps Team to resolve bugs in the internal kubernetes platform.</li>",
  },
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/uoft.png",
    place: "UTSC Bridge",
    time: "(Feb, 2023 - Jul, 2023)",
    desp: "<li>Analyzed survey data using various Excel functionalities.</li><li>Cleaned the data using python libraries namely pandas, scikit-learn and numpy.</li><li>Visualized the cleaned data using PowerBI Dashboard.</li>",
  },
  {
    title: "Deep Learning Intern",
    cardImage: "assets/images/experience-page/jacobb.png",
    place: "JACOBB AI",
    time: "(Jan, 2022 - May, 2023)",
    desp: "<li>Gathered, visualized and trained the new dataset using various SSL models for Animal Sound Classification.</li><li>Performed anomaly detection on sewer channel images using various SOTA computer vision networks.</li><li>Dockerized the whole application for easy installation and use by the clients.</li>",
  },
  {
    title: "Python Software Engineer",
    cardImage: "assets/images/experience-page/hatchery.png",
    place: "UofT Hatchery",
    time: "(Sep, 2022 - Nov, 2022)",
    desp: "<li>Working on the front-end department for a website which helps in assisting users to do physiotherapy exercises.</li><li>Managing data on the database and making them available through API endpoints.</li><li>Deploying deep learning models for real-time pose estimation.</li>",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/camh.png",
    place: "AID4MH | CAMH",
    time: "(Apr, 2022 - Aug, 2022)",
    desp: "<li>Working on multiple projects (WASH, BUMP, DMH) related to machine learning, image / signal processing.</li> <li>Developing pipelines for video/audio processing using various AI and signal processing functions.</li> <li>Leading a project called BUMP which involves video based emotion detection and Natural Language Processing.</li>",
  },  
  {
    title: "Artificial Intelligence Intern",
    cardImage: "assets/images/experience-page/shiphrah.png",
    place: "Shiphrah Biomedical Inc.",
    time: "(Jan, 2022 - May, 2022)",
    desp: "<li>Working in collaboration with Dalla Lana School of Public Health, University of Toronto and advised by Dr.Elham Dolatabadi.</li><li>Working on a project at the intersection of Artificial Intelligence, Medicine, and Engineering.</li><li>Working on object detection models for custom datasets.</li>",
  },
  {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/uoft.png",
    place: "University of Toronto",
    time: "(Jan, 2022 - Apr, 2022)",
    desp: "<li>Preparing assignments/labs on Data loading, accessing and SQL.</li><li>Grading assignments and exams.</li><li>Responsible for setting question paper for mid term and final exam.</li>",
  },
  {
    title: "Graduate Research Assistant",
    cardImage: "assets/images/experience-page/uoft.png",
    place: "University of Toronto",
    time: "(Oct, 2020 - Dec, 2021)",
    desp: "<li>Developed an unsupervised deep learning network architecture which incorporated probabilistic modelling for multi-label image classification.</li><li>Visualized the feature representations learnt by the network using AI visual explanation techniques.</li><li>Worked with various statistical models and public biological datasets.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/iitm.png",
    place: "Indian Institute of Technology, Madras",
    time: "(Dec, 2019 - Mar, 2020)",
    desp: "<li>Worked under Dr. Radhakrishna Ganti in the 5G testbed laboratory, IITM - a real world deployment of 5G test bed.</li><li>Our team worked on the implementation and optimization of Digital Pre-Distortion (DPD) module to achieve low Adjacent Channel Leakage Ratio.</li><li>Developed a Verilog Testbench code for the DPD IP.</li><li>Programmed the ZCU111 FPGA board with the synthesized design.</li>",
  },
  {
    title: "Summer Research Intern",
    cardImage: "assets/images/experience-page/iitpkd.png",
    place: "Indian Institute of Technology, Palakkad",
    time: "(May, 2019 - Jun, 2019)",
    desp: "<li>Worked on modelling and estimation of Non-linear Communication Channels using Deep Learning under Dr. Lakshmi Narasimhan Theagarajan.</li><li>Simulated non-linear channels using Volterra, Wiener and Hammerstein Models which replicated the under-water communication channels.</li><li>Added random polynomial equations of higher orders as a non-linearity.</li><li>Built and implemented a deep learning network for the estimation of non-linear polynomial co-efficients.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Research Volunteer",
    cardImage: "assets/images/experience-page/iphme.png",
    description:
      "Responsible for developing object detection models.",
  },
  {
    title: "NSS Volunteer",
    cardImage: "assets/images/experience-page/nss.png",
    description:
      "Participated in programmes and camps on social awareness of cleanliness and tree plantations.",
  },
  {
    title: "Event Co-ordinator",
    cardImage: "assets/images/experience-page/psg.png",
    description:
      "Co-ordinated and volunteered in multiple technical events at 'Yukutaha' - national level symposium at PSG iTech.",
  },
  {
    title: "Volunteer",
    cardImage: "assets/images/experience-page/kalam.png",
    description:
      "Volunteered in a tree plantation in the Anna University Regional Campus, Coimbatore in the remembrance of Late Dr. A.P.J Abdul Kalam, Former President of India.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Bosch Future Mobility Challenge",
    subtitle: "Participant",
    image: "assets/images/experience-page/bosch.png",
    desp: "Bosch Future Mobility Challenge is an international autonomous driving and connectivity competition. I was responsible for the SLAM and object detection algorithms.",
  },
  {
    title: "Student Engagement Awards Project",
    subtitle: "Participant",
    image: "assets/images/experience-page/uoft.png",
    desp: "Developed a website called BreatheEZ which aids covid-19 affected patients with breathing exercises.",
  },
  {
    title: "IMI Big Data and Artificial Intelligence Case Competition (ScotiaBank)",
    subtitle: "Participant",
    image: "assets/images/experience-page/imi.png",
    desp: "Performed data preprocessing and developed AI models for credit risk prediction.",
  },
  {
    title: "India Innovation Challenge Design Contest",
    subtitle: "Partcipant",
    image: "assets/images/experience-page/iicdc.png",
    desp: "Proposed a project called 'Krishi Udaan' which aims to provide better access to the farmers in detecting diseases in tall crops.",
  },
  {
    title: "Accenture Innovation Challenge",
    subtitle: "Participant",
    image: "assets/images/experience-page/accenture.png",
    desp: "Proposed an idea of developing a mobile application to help entrepreneurs to find funding for their companies.",
  },
  {
    title: "TECHgium",
    subtitle: "Participant",
    image: "assets/images/experience-page/techgium.png",
    desp: "Proposed a solution for automonous driving using SLAM and Kalman filters.",
  },
  {
    title: "e-yantra",
    subtitle: "Participant",
    image: "assets/images/experience-page/eyantra.png",
    desp: "e-yantra is a robotics competition and I passed the first level of test involving mathematics and basic engineering questions.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>  
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
