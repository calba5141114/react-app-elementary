import React, {Component} from 'react';
import './MainBody.css'

class MainBody extends Component{

jsUcfirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
        }
    

constructor(){
    super();
    this.state = {
        airQualityList: [],
    };
}   

componentDidMount(){

    fetch('https://api.openaq.org/v1/cities').
    then( results =>{
        return results.json();
    }).then( data =>{
        
        let airQualityList =  data.results.map(( airItem, value )=>{
                let city =  this.jsUcfirst(airItem.city);
                
        //         "city":"unused",
        //  "country":"AD",
        //  "locations":1,
        //  "count":1294
            return(
                <div key={value}>

                  <h3>
                      {city},  {airItem.country} 
                  </h3>
                  <h5>Count of measurements:{airItem.count}
                  </h5>
                  <small>Sample Locations: {airItem.locations}</small>

                </div>
            ); 
    
        });

        this.setState({
            airQualityList: airQualityList
        });

        console.log("state", this.state.airQualityList);

    });

}


render(){
   return(
     <div className="MainBody" >
         <h1>Air Quality Data</h1>
     <small>Helping us track how often our cities test for air quality</small> 
     <br/>   
     {this.state.airQualityList}  
     </div>
   );
}

}


export default MainBody;