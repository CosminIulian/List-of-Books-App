document.addEventListener('DOMContentLoaded', function() {

  const list = document.querySelector('#middle ul'); // in variabila 'list' se retine 'ul'

  list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement; // si anume 'li'
      list.removeChild(li); // sterge 'li'
    }
  });


  const add = document.querySelector('#add');

  add.addEventListener('submit', function(e) {
    e.preventDefault(); // anuleaza eventul implicit
    const value = document.querySelector('#add input').value; // '.value' coverteste in valoare

    //create elements
    const li = document.createElement('li');
    const name = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content and class style
    name.textContent = value;
    deleteBtn.textContent = 'delete';
    name.setAttribute('class', 'title');
    deleteBtn.setAttribute('class', 'delete');

    //append to document
    li.appendChild(name); // adaugam in 'li' elementul 'name'
    li.appendChild(deleteBtn); // adaugam in 'li' elementul 'deleteBtn'
    list.append(li); // adaugam in 'list' elementul 'li'

    // reset de value after added
    document.querySelector('#add input').value = '';
  });


  const searchBar = document.querySelector('#search input');

  searchBar.addEventListener('keyup', function(e) {
    const value = e.target.value.toLowerCase(); // convertese valoarea introdusa in litere mici pt a compara corect
    const names = list.getElementsByTagName('li'); // colectie HTML cu eticheta 'li' din 'list'
    Array.from(names).forEach(function(name) {
      const nameAux = name.firstElementChild.textContent; // primul copil('span') si 'textContent' pentru a afisa textul din interiorul lui 'span'

      if (nameAux.toLowerCase().indexOf(value) != -1) {
        name.style.display = 'block'; // afiseaza elementele corespunzatoare cautarii
      } else {
        name.style.display = 'none'; // ascunde elementele necorespunzatoare cautarii
      }

    });

  });

});
