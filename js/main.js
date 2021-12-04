let elInputs = document.querySelectorAll('.input');
let elForm = document.querySelector('.form');
let elList = document.querySelector('.in__list');
let elSelect = document.querySelector('.form-select');
let btn = document.querySelector('.btn2');
let elspan = document.querySelector('.span1');
let all = [];
elForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let idf = all.some(function (num) {
    return num.ph == elInputs[3].value;
  });
  if (idf == false) {
    elspan.textContent = '';
    elInputs[3].style.border ='1px solid #ced4da';
    let fatherDiv = document.createElement('div');
    fatherDiv.className = 'card';
    fatherDiv.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${elInputs[0].value}</h5>
      <h5 class="card2">${elInputs[1].value}</h5>
      <p class="card-text">${elInputs[2].value}</p>
      <a class="btn btn-primary links">${elInputs[3].value}</a>
    </div>`;
    elList.appendChild(fatherDiv);
    let ss = {
      fn: elInputs[0].value,
      ln: elInputs[1].value,
      cl: elInputs[2].value,
      ph: elInputs[3].value,
      id: ''};
    if (elInputs[2].value == 'Famliy') {
      elList.appendChild(fatherDiv);
      ss.id = 1;
      all.push(ss);
    }
    else if (elInputs[2].value == 'School') {
      elList.appendChild(fatherDiv);
      ss.id = 2;
      all.push(ss);
    }
    else if (elInputs[2].value == 'Friend') {
      elList.appendChild(fatherDiv);
      ss.id = 3;
      all.push(ss);
    }
    for (let i of elInputs) {
      i.value = "";
    }
  }else if(idf == true){
    elInputs[3].style.border ='1px solid red';
    elspan.textContent = `Bu Raqam Mavjut  ${elInputs[3].value}`;
  }
});
elSelect.addEventListener('change', function (e) {
  if (e.target.value == '0') {
    main(all, '1', '2', '3', '0');
  } else {
    main(all, e.target.value);
  }
});
function main(item, ...val) {
  let cards = document.querySelectorAll('.card');
  cards.forEach(function (item) {
    item.style.display = 'none';
  });
  if (val.length == 1) {
    let items = item.filter((el) => el.id == val);
    addtag(items);
  } else {
    addtag(item);
  }
}
function addtag(item) {
  for (let i of item) {
    let fatherDiv = document.createElement('div');
    fatherDiv.className = 'card';
    fatherDiv.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${i.fn}</h5>
      <h5 class="card2">${i.ln}</h5>
      <p class="card-text">${i.cl}</p>
      <a class="btn btn-primary links">${i.ph}</a>
    </div>`;
    elList.appendChild(fatherDiv);
    fatherDiv.style.display = 'flex';
  }
}