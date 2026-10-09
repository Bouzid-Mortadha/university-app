import Image from "./assets/image.jpg";
import './App.css'
const student = "mortadha bouzid";
const email = "mortadabouzid11@gmail.com";
const telephone = 21886400;
const filiere = "genie logiciel et systeme d informatique";
const groupe = "glsi D";
const ville = "mahdia";
const image = Image;

// const etudiant = {
//   nom: "",
//   prenom: ""
// };

function App() {
  return (
    <div>
      <h1>
        <strong>fiche etudiant</strong>
      </h1>

      <img src={image} alt="image" />

      <p><strong>nom et prenom</strong> : {student}</p>
      <p><strong>email</strong> : {email}</p>
      <p><strong>telephone</strong> : {telephone}</p>
      <p><strong>filiere</strong> : {filiere}</p>
      <p><strong>annee d etude</strong> :</p>
      <p><strong>groupe</strong> : {groupe}</p>
      <p><strong>ville</strong> : {ville}</p>

      <a href={`mailto:${email}`}>{"contacter"}</a>
    </div>
  );
}

export default App;