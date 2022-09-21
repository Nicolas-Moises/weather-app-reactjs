const KEY = 'c2cae13904ae4012a2c53013222008';
const fetchData = async (city) => {

    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
    const fetchResponse = await fetch(url);

    const data = await fetchResponse.json();
    return data;
}

export default fetchData;