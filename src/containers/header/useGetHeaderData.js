import { useEffect, useState } from 'react';

const apiKey = 'c1000d8334e7edf2c946bfac38912c62';

const useGetHeaderData = () => {
  const [location, setLocation] = useState({ lon: '',lat: '' });
  const [language, setLanguage] = useState('locale');
  const [weatherData, setWeatherData] = useState();

  const getWeatherData = async() => {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`
    if(language !== 'locale') weatherUrl = `${weatherUrl}&lang=${language}`;
    await fetch(weatherUrl)
      .then(res => {
        if(res.ok) return res.json();
        else throw res;
      })
      .then(data => setWeatherData(data))
      .catch(err => console.log('weather', err));
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      })
    })
  }, []);

  useEffect(() => {
    if(location.lat && location.lon) {
      getWeatherData();
    }
  }, [location, language]);

  const onSelectLanguage = (lang) => setLanguage(lang);

  return {
    weatherData,
    language,
    onSelectLanguage,
  }
}

export default useGetHeaderData;