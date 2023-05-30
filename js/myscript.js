/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.*/



//creo array di oggetti contenenti i dati del team e a cui darò le informazioni fornite
const teamMate = [
    {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    picture: 'angela-caroll-chief-editor.jpg',
    },
    {
    name: 'Walter Gordon',
    role: 'Office Manager',
    picture: 'walter-gordon-office-manager.jpg' 
    },
    {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
    name: 'Scott Estrada',
    role: 'Developer',
    picture: 'scott-estrada-developer.jpg'
    },
    {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    picture: 'barbara-ramos-graphic-designer.jpg'
    },
        
];
console.log(teamMate);

teamMate.picture



const containerElement = document.querySelector('div');

for (let index = 0; index < teamMate.length; index++) {
    const nameElement = teamMate[index].name;
    const roleElement = teamMate[index].role;
    const pictureElement = teamMate[index].picture;


    
    const divElement = document.createElement('div');
    divElement.classList.add('box');
    divElement.append(teamMate[index]);

    //creo all'interno del div creato precedentemente un p dove ci metterò il nome del dipendente e la propria mansione
    divElement.innerHTML = `<img src="./img 2/${pictureElement}">` + `<p>` + nameElement + `</p>` + `<p>` + roleElement + `</p>` ;

    containerElement.appendChild(divElement);

}    

for (const key in teamMate){
    console.log(key, ':', teamMate[key]);
}


/**prof's correction 
 * 
 * 
 * const teamMembers = [

   {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      imageSrc: 'wayne-barnett-founder-ceo.jpg'
   },

   {
      name: 'Angela Caroll ',
      role: 'Chief Editor',
      imageSrc: 'angela-caroll-chief-editor.jpg'
   },
   {
      name: 'Walter Gordon',
      role: 'Office Manager',
      imageSrc: 'walter-gordon-office-manager.jpg'
   },
   {
      name: 'Angela Lopez',
      role: 'Social Media',
      imageSrc: 'angela-lopez-social-media-manager.jpg'
   },
   {
      name: 'Scott Estrada',
      role: 'Graphic Designer',
      imageSrc: 'scott-estrada-developer.jpg'
   },

   {
      name: 'Barbara Ramos',
      role: 'Developer',
      imageSrc: 'barbara-ramos-graphic-designer.jpg'
   },
];

const teamWrapper = document.querySelector('div.team-wrapper');


// for (let index = 0; index < teamMembers.length; index++) {
//    const teamMember = teamMembers[index];

//    addTeamMemberToContainer(teamMember.name, teamMember.role, teamMember.imageSrc, teamWrapper);
// }
teamMembers.forEach((singleMember )=>{
   addTeamMemberToContainer(singleMember.name, singleMember.role, singleMember.imageSrc, teamWrapper);
});


document.getElementById('button-team-adder').addEventListener('click', function(){
   const name = document.getElementById('new-member-name').value;
   const role = document.getElementById('new-member-role').value;
   const image = document.getElementById('new-member-image').value;

   addTeamMemberToContainer(name, role, image, teamWrapper);
});


/
 
  Function that adds to an html container a new member card filled with the member's info.

 * @param name A string containing the full name of the member to be added.
 * @param role A string containing the role of the member to be added.
 * @param imageSrc A string containing the full path of the member's picture to be added.
 * @param container An HTML Node element which will contain the generated card.

function addTeamMemberToContainer(name, role, imageSrc, container){

    if (!imageSrc.startsWith('http')){
       imageSrc = './img/'+ imageSrc;
    }
 
    container.innerHTML +=`
    <div class="card-member">
       <div class="image-wrapper">
          <img src="${imageSrc}" alt="${name}'s picture">
       </div>
       <div class="card-description">
          <h4 class="member-name">
             ${name}
          </h4>
          <p class="member-role">
             ${role}
          </p>
       </div>
    </div>` ;
 } */
