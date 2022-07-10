AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/camh.png",
    place: "AID4MH | CAMH",
    time: "(Mar, 2022 - present)",
    desp: "<li>Working on multiple projects (WASH, BUMP, DMH) related to machine learning, image / signal processing.</li> <li>Developing pipelines for video/audio processing using various AI and signal processing functions.</li> <li>Leading a project called BUMP which involves video based emotion detection and Natural Language Processing.</li>",
  },
  {
    title: "Artificial Intelligence Intern",
    cardImage: "assets/images/experience-page/shiphrah.png",
    place: "Shiphrah Biomedical Inc.",
    time: "(Jan, 2022 - Present)",
    desp: "<li>Working in collaboration with Dalla Lana School of Public Health, University of Toronto and advised by Dr.Elham Dolatabadi.</li><li>Working on a project at the intersection of Artificial Intelligence, Medicine, and Engineering.</li><li>Working on object detection models for custom datasets.</li>",
  },
  {
    title: "MITACS Intern",
    cardImage: "assets/images/experience-page/jacobb.png",
    place: "JACOBB AI",
    time: "(Jul, 2021 - Present)",
    desp: "<li>Advised by Dr.Chi-Guhn Lee, Professor in the MIE Department at UofT.</li><li>Working on anamoly detection and classification of defects in sewer channels.</li><li>Responsibilities include developing a complete pipeline for anomaly detection and packaging the code into an application.</li>",
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
    time: "(May, 2019 - Jun, 2020)",
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
    title: "Research Volunteer | Dalla Lana School of Public Health",
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
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
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
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
