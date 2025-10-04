let userinput=document.querySelector("#user");
let info=document.querySelector("#info");
let cityname=document.querySelector("#cityname");
let temparature1=document.querySelector("#temp");
let humididty=document.querySelector("#humadity");
async function wheatherapp(city){
    let apikey="8e312d69c18c2fab3458714fc3ecd9fc";
    let apilink=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    try{
        let response=await fetch(apilink);
        let data=await response.json();
        console.log(data)
        temparature1.innerHTML=`Temperature in ${data.name} is `+ Math.round(data.main.temp-293)+"°C";
        temparature1.style.fontSize="1.6rem"
        cityname.innerHTML="You Enter "+data.name;
        cityname.style.fontSize="2rem"
        humididty.innerHTML=`Humididty in ${data.name} is `+ data.main.humidity ;
        humididty.style.fontSize="1.6rem"
        
    }catch(err){
        temparature1.innerHTML="City name doesnot found"
        cityname.style.display="none";
        humididty.style.display="none"
    }
}

const search_btn=document.querySelector("#search");
search_btn?.addEventListener("click",()=>{
    let info=document.querySelector("#info");
    info.style.display="flex";
    wheatherapp(userinput.value);
})