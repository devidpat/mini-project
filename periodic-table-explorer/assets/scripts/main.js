function createGrid() {
  $(document).ready(async () => {
    const data = await axios('../..//data/elements.json');
    console.log(data);
    // const xmlObj = new XMLHttpRequest();
    // xmlObj.open('GET', '../..//data/elements.json');
    // xmlObj.send();
    // xmlObj.onreadystatechange = function () {
      // if (this.readyState == 4 && this.status == 200) {

        // searching an element
        $('#search').keyup((event) => {
          var filterednames = data.data.filter(function (
            obj
          ) {
            // console.log(obj.name.startsWith(event.target.value.toLowerCase()));
            if(obj.name.toLowerCase().startsWith(event.target.value.toLowerCase()) && event.target.value !== '')
              return obj.name;
          });

          console.log(filterednames);

            // const listDiv = document.createElement('div');
            // const searchContainer = document.querySelector('.search-container');
            // searchContainer.style.display = 'flex'
            // searchContainer.style.flexDirection = 'column'
            // searchContainer.append(listDiv);
            // listDiv.style.width = '15rem';
            // listDiv.style.backgroundColor = 'grey';
            // // console.log(filterednames.length);
            // listDiv.style.height = toString(filterednames.length);
            // // console.log(searchList);
            // listDiv.append(ele.name)
            // listDiv.style.borderBottomLeftRadius = '10px';
            // listDiv.style.borderBottomRightRadius = '10px';
          
        });

        data.data.forEach(function (ele) {
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

            window.open(`../../pages/element-details.html?${ele.name}`)
            // document.href('../../pages/element-details.html')

            const card = document.querySelector('.card-container');
            const container = document.querySelector('.container');
            const elementProps = document.querySelector('.element-props');

            card.style = 'display: block';
            container.style = 'display: none';
            elementProps.style = 'display: none';


            card.innerHTML = `<div class='close'>X</div>`;
            card.innerHTML += `<img class='element-image' src='${ele.image.url}'/>`;
            card.innerHTML += `<p class='element-name'>Name: ${ele.name}</p>`;
            card.innerHTML += `<p class='element-symbol'>Symbol: ${ele.symbol}</p>`;
            card.innerHTML += `<p class='element-number'>Atomic No: ${ele.number}</p>`;
            card.innerHTML += `<p class='element-atomic-mass'>Atomic Mass: ${ele.atomic_mass}</p>`;
            card.innerHTML += `<p class='element-desc'>Element Desc: ${ele.summary}</p>`;

            $('.close').click(() => {
              card.style = 'display: none';
              container.style.display = 'block';
              elementProps.style.display = 'grid';
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
          else if (ele.category === 'lanthanide')
            element.style.backgroundColor = 'rgba(211, 15, 255, 0.7)';
          else element.style.backgroundColor = 'rgba(35, 0, 255, 0.8)';
        });
    //   }
    // };
  });
}

createGrid();
