import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from 'react-router-dom'

export const catslist = [
    { id: 0, name: 'Pepper', isProtagonist: false, race: 'Chartreux', color: 'Gris' },
    { id: 1, name: 'Aladdin', isProtagonist: false, race: 'Batard', color: 'Roux Tigré' },
    { id: 2, name: 'Mr Mittens', isProtagonist: true, race: 'Batard', color: 'Noir' },
    { id: 4, name: 'Felix', isProtagonist: false, race: 'Siamois', color: 'Beige et Marron' },
];

export const catsTrait = [
    { id: 1, trait: 'gentil', cat: 1 },
    { id: 2, trait: 'maladroit', cat: 2 },
    { id: 3, trait: 'logique', cat: 3 },
    { id: 4, trait: 'revolutionnaire', cat: 4 },
];

function find(id) {
    return catslist.find(p => p.id === id)
}

export function Cats(props) {
    const url = "chat";
    const content = props.catslist.map((cat) =>
      <tr>
        <th>
          <Link to={`${url}/${cat.id}`}>{cat.name}</Link>
        </th>
  
        <th>
          {cat.isProtagonist ? 'oui' : 'non'}
        </th>
        <th>
          {cat.race}
        </th>
        <th>
          {cat.color}
        </th>
      </tr>
  
    );
    return (
      <div className="column is-three-fifths is-offset-one-fifth">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Protagoniste ?</th>
              <th>Race</th>
              <th>Couleur</th>
            </tr>
          </thead>
          <tbody>
            {content}
          </tbody>
        </table>
      </div>
    )
  };

export function AppCat() {
    let { id } = useParams();
    let cat = find(parseInt(id));
    if (cat.isProtagonist === true) {
        cat.isProtagonist = "Est le protagoniste";
    } else {
        cat.isProtagonist = "N'est pas le protagoniste"
    }
    return (
        <div className="App">
            <header className="App-header">
                {cat.name}
                <br />
                {cat.race}
                <br />
                {cat.isProtagonist}
                <br />
                {cat.color}
            </header>
        </div>
    );
}