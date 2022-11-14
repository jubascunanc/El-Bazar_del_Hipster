
function obtenerDatos(){

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

obtenerDatos();

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
