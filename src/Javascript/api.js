function obtenerDatos(){

    const URLGET="https://api.itbook.store/1.0/new";
    fetch(URLGET)
  .then (resultado => resultado.json())
  .then(data =>{
    //console.log data
    const libros=data.books;
    libros.forEach(element => {
        document.querySelector("#libros").innerHTML+=`
        <tr>
           <td>${libros.title}</td>
           <td><img src="${libro.image}"></td>
           </tr>
           `;
    });
  })
}


const encodedParams = new URLSearchParams();
encodedParams.append("q", "We are learning Javascript!");
encodedParams.append("target", "es");
encodedParams.append("source", "en");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'df5eac0bd2msh339a8446e79ab6ep12e415jsn930a726e354a',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(response => console.log(response.data.translations[0].translatedText))
	.catch(err => console.error(err));

