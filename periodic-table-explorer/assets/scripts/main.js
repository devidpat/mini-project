function createGrid() {
  $(document).ready(() => {
    const xmlObj = new XMLHttpRequest();
    xmlObj.open('GET', '../../periodic-table-explorer/data/elements.json');
    xmlObj.send();
    xmlObj.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        JSON.parse(this.responseText).forEach(function (ele) {
          const element = document.createElement('div');
          $('.periodic-table-container').append(element);
          // console.log(ele);
          // console.log(ele.xpos, ele.ypos);
          element.style.gridColumn = ele.xpos;
          element.style.gridRow = ele.ypos;

          element.className = 'elements-class';
          element.innerHTML = `<p class='symbol'>${ele.symbol}</p>`;
          element.innerHTML += `<p class='number'>${ele.number}</p>`;
          element.innerHTML += `<p class='name'>${ele.name}</p>`;
          element.innerHTML += `<p class='atomic-mass'>${Math.round(
            ele.atomic_mass
          ).toFixed(2)}</p>`;
          // element.innerText = ele.symbol;

          element.addEventListener('click', () => {
            console.log(ele);
            const card = document.querySelector('.card-container');
            const container = document.querySelector('.container');
            card.style = 'display: block';
            container.style = 'display: none';
            card.innerHTML = `<div class='close'>X</div>`;
            card.innerHTML += `<p class='element-name'>Name: ${ele.name}</p>`;
            card.innerHTML += `<p class='element-symbol'>Symbol: ${ele.symbol}</p>`;
            card.innerHTML += `<p class='element-number'>Atomic No: ${ele.number}</p>`;
            card.innerHTML += `<p class='element-atomic-mass'>Atomic Mass: ${ele.atomic_mass}</p>`;
            card.innerHTML += `<p class='element-desc'>Element Desc: ${ele.summary}</p>`;

            $('.close').click(() => {
              console.log('closed');
              card.style = 'display: none';
              container.style.display = 'block';
            });
          });


          if (ele.category === 'diatomic nonmetal')
            element.style.backgroundColor = 'rgba(254, 105, 44, 0.3)';
          else if (ele.category === 'noble gas')
            element.style.backgroundColor = 'rgba(108, 198, 6, 0.3)';
          else if (ele.category === 'alkali metal')
            element.style.backgroundColor = 'rgba(226, 255, 71, 0.8)';
          else if (ele.category === 'alkaline earth metal')
            element.style.backgroundColor = 'rgba(150, 71, 255, 0.8)';
          else if (ele.category === 'metalloid')
            element.style.backgroundColor = 'rgba(255, 71, 219, 0.8)';
          else if (ele.category === 'polyatomic nonmetal')
            element.style.backgroundColor = 'rgba(181, 36, 55, 0.8)';
          else if (ele.category === 'post-transition metal')
            element.style.backgroundColor = 'rgba(125, 181, 36, 0.8)';
          else if (ele.category === 'transition metal')
            element.style.backgroundColor = 'rgba(49, 138, 255, 0.8)';
          else if (ele.category === 'unknown, probably transition metal')
            element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
          else if (
            ele.category === 'unknown, but predicted to be an alkali metal'
          )
            element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
          else if (ele.category === 'unknown, probably post-transition metal')
            element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
          else if (ele.category === 'unknown, probably metalloid')
            element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
          else if (ele.category === 'unknown, predicted to be noble gas')
            element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
          // else if (ele.category === '')
          //   element.style.backgroundColor = 'rgba(211, 15, 255, 0.7)';
        });
      }
    };
  });
}

createGrid();
