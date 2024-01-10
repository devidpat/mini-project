const table = document.querySelector('#periodic-table-container');
const image = document.querySelector('.image');

axios.get('/periodic-table-explorer/data/elements.json').then(
	(data) => {
		console.log(data.data);
		createTable(data.data);
		search(data.data);
	},
	(err) => {
		console.log(err);
	},
);

function createTable(data) {
	data.forEach(function (ele) {
		const element = document.createElement('div');

		element.addEventListener('click', function () {
			window.location.href = `http://localhost:5500/periodic-table-explorer/pages/element-details.html?elementName=${ele.name}`;
			// getElementsData();
		});
		table.append(element);
		addColors(ele, element);

		element.style.gridColumn = ele.xpos;
		element.style.gridRow = ele.ypos;

		element.className = 'elements-class';
		element.innerHTML = `<p class='symbol'>${ele.symbol}</p>`;
		element.innerHTML += `<p class='number'>${ele.number}</p>`;
		element.innerHTML += `<p class='name'>${ele.name}</p>`;
		element.innerHTML += `<p class='atomic-mass'>${Math.round(
			ele.atomic_mass,
		).toFixed(1)}</p>`;
	});
}

function search(data) {
	const searchBar = document.getElementById('search');

	searchBar.addEventListener('input', (event) => {
		table.innerHTML = '';

		if (event.target.value.trim() === '') {
			createTable(data);
			console.log(data);
		} else {
			const filterednames = data.filter(function (obj) {
				if (obj.name.toLowerCase().startsWith(searchBar.value.toLowerCase()))
					return obj.name;
			});
			if (filterednames.length < 1) {
				createTable(data);
			}
			// console.log(filterednames);
			createTable(filterednames);
		}
	});
}

function addColors(data, element) {
	if (data.category === 'diatomic nonmetal')
		element.style.backgroundColor = 'rgba(254, 105, 44, 0.3)';
	else if (data.category === 'noble gas')
		element.style.backgroundColor = 'rgba(108, 198, 6, 0.3)';
	else if (data.category === 'alkali metal')
		element.style.backgroundColor = 'rgba(226, 255, 71, 0.8)';
	else if (data.category === 'alkaline earth metal')
		element.style.backgroundColor = 'rgba(150, 71, 255, 0.8)';
	else if (data.category === 'metalloid')
		element.style.backgroundColor = 'rgba(255, 71, 219, 0.8)';
	else if (data.category === 'polyatomic nonmetal')
		element.style.backgroundColor = 'rgba(181, 36, 55, 0.8)';
	else if (data.category === 'post-transition metal')
		element.style.backgroundColor = 'rgba(125, 181, 36, 0.8)';
	else if (data.category === 'transition metal')
		element.style.backgroundColor = 'rgba(49, 138, 255, 0.8)';
	else if (data.category === 'unknown, probably transition metal')
		element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
	else if (data.category === 'unknown, but predicted to be an alkali metal')
		element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
	else if (data.category === 'unknown, probably post-transition metal')
		element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
	else if (data.category === 'unknown, probably metalloid')
		element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
	else if (data.category === 'unknown, predicted to be noble gas')
		element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
	else if (data.category === 'lanthanide')
		element.style.backgroundColor = 'rgba(211, 15, 255, 0.7)';
	else element.style.backgroundColor = 'rgba(35, 0, 255, 0.8)';
}

// function createGrid() {
//   $(document).ready(async () => {
//     const data = await axios('/periodic-table-explorer/data/elements.json');

//     const table = document.querySelector('.periodic-table-container');
//     const searchBar = document.getElementById('search');
//     table.innerHTML = '';
//     searchBar.addEventListener('keyup', (event) => {
//       if (event.target.value.trim() === '') {
//         console.log(data.data);
//       } else {
//         const filterednames = data.data.filter(function (obj) {
//           if (
//             obj.name
//               .toLowerCase()
//               .startsWith(event.target.value.toLowerCase()) &&
//             event.target.value !== ''
//           )
//             return obj.name;
//         });

//         console.log(filterednames);
//       }
// $('#search').keyup((event) => {
// 	$('.container').html('');
// 	if (event.target.value.trim() === '') {
// 		console.log(data.data);
// 	} else {
// 		const filterednames = data.data.filter(function (obj) {
// 			if (
// 				obj.name
// 					.toLowerCase()
// 					.startsWith(event.target.value.toLowerCase()) &&
// 				event.target.value !== ''
// 			)
// 				return obj.name;
// 		});

// 		console.log(filterednames);
// 	}
// });

// function displayData() {

//   data.data.forEach(function (ele) {
//     const element = document.createElement('div');
//     $('.periodic-table-container').append(element);

//     element.style.gridColumn = ele.xpos;
//     element.style.gridRow = ele.ypos;

//     element.className = 'elements-class';
//     element.innerHTML = `<p class='symbol'>${ele.symbol}</p>`;
//     element.innerHTML += `<p class='number'>${ele.number}</p>`;
//     element.innerHTML += `<p class='name'>${ele.name}</p>`;
//     element.innerHTML += `<p class='atomic-mass'>${Math.round(
//       ele.atomic_mass,
//     ).toFixed(2)}</p>`;
//     // element.innerText = ele.symbol;

//     element.addEventListener('click', () => {
//       console.log(ele);

//       window.open(`../../pages/element-details.html?${ele.name}`);

//       const card = document.querySelector('.card-container');
//       const container = document.querySelector('.container');
//       const elementProps = document.querySelector('.element-props');

//       card.style = 'display: block';
//       container.style = 'display: none';
//       elementProps.style = 'display: none';

//       card.innerHTML = `<div class='close'>X</div>`;
//       card.innerHTML += `<img class='element-image' src='${ele.image.url}'/>`;
//       card.innerHTML += `<p class='element-name'>Name: ${ele.name}</p>`;
//       card.innerHTML += `<p class='element-symbol'>Symbol: ${ele.symbol}</p>`;
//       card.innerHTML += `<p class='element-number'>Atomic No: ${ele.number}</p>`;
//       card.innerHTML += `<p class='element-atomic-mass'>Atomic Mass: ${ele.atomic_mass}</p>`;
//       card.innerHTML += `<p class='element-desc'>Element Desc: ${ele.summary}</p>`;

//       $('.close').click(() => {
//         card.style = 'display: none';
//         container.style.display = 'block';
//         elementProps.style.display = 'grid';
//       });
//     });
//   }

// if (ele.category === 'diatomic nonmetal')
// 	element.style.backgroundColor = 'rgba(254, 105, 44, 0.3)';
// else if (ele.category === 'noble gas')
// 	element.style.backgroundColor = 'rgba(108, 198, 6, 0.3)';
// else if (ele.category === 'alkali metal')
// 	element.style.backgroundColor = 'rgba(226, 255, 71, 0.8)';
// else if (ele.category === 'alkaline earth metal')
// 	element.style.backgroundColor = 'rgba(150, 71, 255, 0.8)';
// else if (ele.category === 'metalloid')
// 	element.style.backgroundColor = 'rgba(255, 71, 219, 0.8)';
// else if (ele.category === 'polyatomic nonmetal')
// 	element.style.backgroundColor = 'rgba(181, 36, 55, 0.8)';
// else if (ele.category === 'post-transition metal')
// 	element.style.backgroundColor = 'rgba(125, 181, 36, 0.8)';
// else if (ele.category === 'transition metal')
// 	element.style.backgroundColor = 'rgba(49, 138, 255, 0.8)';
// else if (ele.category === 'unknown, probably transition metal')
// 	element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
// else if (ele.category === 'unknown, but predicted to be an alkali metal')
// 	element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
// else if (ele.category === 'unknown, probably post-transition metal')
// 	element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
// else if (ele.category === 'unknown, probably metalloid')
// 	element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
// else if (ele.category === 'unknown, predicted to be noble gas')
// 	element.style.backgroundColor = 'rgba(135, 135, 135, 0.27)';
// else if (ele.category === 'lanthanide')
// 	element.style.backgroundColor = 'rgba(211, 15, 255, 0.7)';
// else element.style.backgroundColor = 'rgba(35, 0, 255, 0.8)';
//     );
//   }
// }

// createGrid();
