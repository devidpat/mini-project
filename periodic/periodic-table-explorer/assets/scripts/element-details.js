async function getElementsData() {
	const data = await axios('/periodic-table-explorer/data/elements.json');
	console.log(data);

	// const urlString = `http://127.0.0.1:5500/pages/index.html?${}`
	const urlString = window.location.href;
	let paramString = urlString.split('=')[1];

	data.data.find((ele) => {
		if (ele.name === paramString) {
			$('.image').html(`<img src='${ele.image.url}'/>`);
			$('.name').html(`<p><u>${ele.name}(${ele.symbol})</u></p>`);
			$('.desc').html(`<p>${ele.summary}</p>`);
			$('.atomic-details').append(`<p>Atomic Mass: ${ele.atomic_mass}</p>`);
			$('.atomic-details').append(`<p>Atomic Number: ${ele.number}</p>`);
			$('.atomic-details').append(`<p>Discovered By: ${ele.discovered_by}</p>`);
			$('.atomic-details').append(
				`<p>Electron Configuration: <br /> ${ele.electron_configuration}</p>`,
			);
			$('model-viewer').attr('src', ele.bohr_model_3d);

			$('.right-details').append(`<p>Category: ${ele.category}</p>`);
			$('.right-details').append(`<p>Density: ${ele.density}</p>`);
			$('.right-details').append(`<p>Phase: ${ele.phase}</p>`);
			$('.right-details').append(`<a href=${ele.source}>Read More</a> ->`);
		}
	});
}

// getElementsData()

// async function getElementsData() {
// 	// window.location.href = `http://localhost:5500/periodic-table-explorer/pages/element-details.html?elementName=${data.name}`;

// 	const data = await axios.get('/periodic-table-explorer/data/elements.json');
// 	console.log(data.data);
// 	document.querySelector(
// 		'.image',
// 	).innerHTML = `<img src='${data.data.image.url}'/>`;

// 	$(document).ready(() => {
// 		console.log($('.name'));
// 		$('.name').html(`<p>${data.name}</p>`);
// 	});
// 	// $('.desc').html(`<p>${ele.summary}</p>`);
// 	// $('.atomic-details').append(`<p>Atomic Mass: ${ele.atomic_mass}</p>`);
// 	// $('.atomic-details').append(`<p>Atomic Number: ${ele.number}</p>`);
// 	// $('.atomic-details').append(`<p>Discovered By: ${ele.discovered_by}</p>`);
// 	// $('.atomic-details').append(
// 	// 	`<p>Electron Configuration: <br /> ${ele.electron_configuration}</p>`,
// 	// );
// 	// $('model-viewer').src = ele.bohr_model_3d;
// }

getElementsData();
