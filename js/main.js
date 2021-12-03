let elInputs = document.querySelectorAll('.input');
let elForm = document.querySelector('.form');
let elList = document.querySelector('.in__list');
let elSelect = document.querySelector('.form-select');
let btn = document.querySelector('.btn2');
let family = [];
let school = [];
let friend = [];
let all = [];
elForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let fatherDiv = document.createElement('div');
  fatherDiv.className = 'card';
  let innerDiv = document.createElement('div');
  innerDiv.className = 'card-body';
  fatherDiv.appendChild(innerDiv);
  let title = document.createElement('h5');
  title.className = 'card-title';
  title.appendChild(document.createTextNode(elInputs[0].value));
  innerDiv.appendChild(title);
  let title2 = document.createElement('h5');
  title2.className = 'card2';
  title2.appendChild(document.createTextNode(elInputs[1].value));
  innerDiv.appendChild(title2);
  let intext = document.createElement('p');
  intext.className = 'card-text';
  intext.appendChild(document.createTextNode(elInputs[2].value));
  innerDiv.appendChild(intext);
  let link = document.createElement('a');
  link.className = 'btn btn-primary links';
  link.appendChild(document.createTextNode(elInputs[3].value));
  innerDiv.appendChild(link);
  let ss = {
    fn: title,
    ln: title2,
    cl: intext,
    ph: link
  };
  if (elInputs[2].value == 'Famliy') {
    elList.appendChild(fatherDiv);
    family[family.length] = ss;
    all[all.length] = ss;
  }
  else if (elInputs[2].value == 'School') {
    elList.appendChild(fatherDiv);
    school[school.length] = ss;
    all[all.length] = ss;
  }
  else if (elInputs[2].value == 'Friend') {
    elList.appendChild(fatherDiv);
    friend[friend.length] = ss;
    all[all.length] = ss;
  }
  for(let i of elInputs){
    i.value = "";
  }
});
elSelect.addEventListener('change', function (e) {
  if (e.target.value == '1') {
    main(family);
  }
  else if(e.target.value == '2'){
    main(school);
  }
  else if(e.target.value == '3'){
    main(friend);
  }
  else if(e.target.value == '0'){
    main(all);
  }
});
function main(item){
  let cards = document.querySelectorAll('.card');
  cards.forEach(function (item) {
    item.style.display = 'none';
  });
  for(let i of item){
    let fatherDiv = document.createElement('div');
    fatherDiv.className = 'card';
    let innerDiv = document.createElement('div');
    innerDiv.className = 'card-body';
    let fn = i.fn;
    innerDiv.appendChild(fn);
    let ln = i.ln;
    innerDiv.appendChild(ln);
    let cl = i.cl;
    innerDiv.appendChild(cl);
    let ph = i.ph;
    innerDiv.appendChild(ph);
    fatherDiv.appendChild(innerDiv);
    elList.appendChild(fatherDiv);
    fatherDiv.style.display = 'flex';
  }
}