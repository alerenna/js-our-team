//select the form input from the DOM 

const cardsEl = document.querySelector('#cards .row')
const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

  //functions

  function cardMemberMaker(obj) {

    const {img, role, name, email} = obj

    console.log(name, img, role, email);
    


    const markup = `
        <div class="col">
            <div class="d-flex card-horizontal bg-black border border-radius: 0"">
                <div class="row g-0 align-items-center">
                    <div class="col-md-4 h-100">
                        <img src="${img}" alt="Card title" class="img-fluid h-100">
                    </div>
                    <div class="col-md-8">
                        <div class="p-3 card-body">
                            <h3 class="fs-8 fw-bold name text-light mb-1">${name}</h3>
                            <p class="role text-light">${role}</p>
                            <p class="mail">${email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
         


    cardsEl.innerHTML += markup

    return markup
}

function renderTeamMembers(teamMembers, cardsEl) {
    for (let i = 0; i < teamMembers.length; i++) {
        const thisObject = teamMembers[i];
    
        cardsEl.innerHTML += cardMemberMaker(thisObject)
    }
}

renderTeamMembers(teamMembers, cardsEl)
