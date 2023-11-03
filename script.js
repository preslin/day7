// (a) Get all the countries from Asia continent /region using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}
// (b) Get all the countries with population of less than 2 lacs using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");;
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}

// (c) Print the following details name, capital, flag using forEach function.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}

// (d) Print the total population of countries using reduce function 


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}

// (e) Print the country which use US Dollars as currency.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload =function(){
var result=JSON.parse(request.response);
console.log(result);
var res=result.filter((ele)=>ele.currencies !=="United States dollar")

var res1=res.filter((ele)=>{
    for(var i in ele.currencies){
        if(ele.currencies[i].name === "United States dollar"){
            console.log(ele.name)
        }
        }
  })

}
