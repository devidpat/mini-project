async function getElementsData(){
    const data = await axios('../../data/elements.json')
    console.log(data);

    // const urlString = `http://127.0.0.1:5500/pages/index.html?${}`
    console.log(window.location.href);
    const urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    
    data.data.find((ele) => {
        if(ele.name === paramString){
            $('.image').html(`<img src='${ele.image.url}'/>`)
            $('.name').html(`<p>${ele.name}</p>`)
            $('.desc').html(`<p>${ele.summary}</p>`)
            $('.atomic-details').append(`<p>Atomic Mass: ${ele.atomic_mass}</p>`)
            $('.atomic-details').append(`<p>Atomic Number: ${ele.number}</p>`)
            $('.atomic-details').append(`<p>Discovered By: ${ele.discovered_by}</p>`)
            $('.atomic-details').append(`<p>Electron Configuration: <br /> ${ele.electron_configuration}</p>`)
            $('model-viewer').src = ele.bohr_model_3d;
        }
    })
}

getElementsData()