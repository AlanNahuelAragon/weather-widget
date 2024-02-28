import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from './styles/weatherApp.module.css'
import LoadingScreen from "./LoadingScreen";

export default function WeatherApp (){
    const [weather,setWeather]= useState(null);
    useEffect(()=>{
        loadInfo();
    },[]);
    useEffect(()=>{
        document.title=`Weather | ${weather?.location.name ?? ''}`;
    },[weather])

    async function loadInfo(city="argentina"){
        try{
            //console.log(`${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}&aqi=no`)
            const request = await fetch(`${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}&aqi=no`);
            const json= await request.json();
            console.log(json);
            //setWeather(json);
            setTimeout(()=>{setWeather(json);},2000);
        }catch(error){
            console.error(error);
        }
    }
    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }
    return(
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather? <WeatherMainInfo weather={weather}/> : <LoadingScreen/>}
            
        </div>
    )
}