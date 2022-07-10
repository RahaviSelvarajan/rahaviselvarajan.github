/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Health Monitoring of Soldiers Using Efficient Manet Protocol",
    authors:
      "G Santhanamari, J Premi, S Rahavi, S Vijay and Sai Iswarya M",
    conferences:
      "2020 IEEE Recent Advances in Intelligent Computational Systems (RAICS)",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/manet.png",
    citation: {
      vancouver:
        "G. Santhanamari, J. Premi, S. Rahavi, and S. Vijay, “Health monitoring of soldiers using efficient Manet protocol,” in 2020 IEEE Recent Advances in Intelligent Computational Systems (RAICS), pp. 57–62, Kerala, December 2020.",
    },
    abstract:
      "Information technology plays a key role in collecting, exchanging, and processing information from the disaster-prone areas like war field and international borders. One such significant role is to monitor the health condition of the soldiers in the war field remotely to ensure their safety. The data transmission in these areas is not reliable over wired connections. This paper focuses on designing a health monitoring system which transmits the data such as health parameters of soldiers like temperature, pulse rate, blood oxygen level and Electro Cardio Gram (ECG) over a Mobile Ad hoc Network (MANET) with an efficient routing protocol through nRF24L01 to the control room. The efficient protocol is identified by comparing the different MANET protocols simulated using OMNET++. The body parameters are sensed using different bio-sensors attached to soldiers' body and the data is transmitted to the control room through the mobile nodes in the route (i.e., the soldiers' nodes act as mobile nodes to transfer the data). Since the sensed body parameters are transmitted via offline, it ensures secure communication. The proposed system is also provided with an SOS (Signal on ship) facility, to alert the control room during an emergency via cloud service.",
    absbox: "absPopup1",
  },

  {
    title: "Prediction of Cardiovascular Disease from Retinal fundus images using Neural Networks",
    authors:
      "Rahavi S, Raghu Prasath V, E Malar",
    conferences:
      "International Journal of Advanced Science and Technology",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/cvd.png",
    citation: {
      vancouver:
        "Rahavi S, Raghu Prasath V, E Malar. Prediction of Cardiovascular Disease from Retinal fundus images using Neural Networks. International Journal of Advanced Science and Technology 29 (9s), 3551-3559, 2020.",
    },
    abstract:
      "Cardio Vascular Disease (CVD) has become the largest single cause of death among humans nowadays. Retinal fundus images play a significant role in the identification and stratification of CVD. CVD can be foreseen by the presence of hemorrhage, exudates, micro aneurysms, and corkscrew arteries in the retinal fundus. In this work, a deep learning model developed using Convolutional Neural Networks (CNN) is proposed for the prediction of CVD. The proposed model is trained with the anomalies in fundus images using image processing tools. Nearly 249 images from publicly available datasets like HRF, DIARETDB1 and MESSIDOR are used for training and testing the model. The trained model is able to predict CVD with an accuracy of 88.5%.",
    absbox: "absPopup2",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
