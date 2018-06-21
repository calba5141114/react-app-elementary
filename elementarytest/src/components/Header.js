import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

    jsUcfirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    
      
    constructor(){
        super();
        this.state = {
            pictures: [],
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=500')
        .then(results =>{
            return results.json();
        }).then(data =>{

            let pictures = data.results.map((pic, value)=>{

                    let firstName = this.jsUcfirst(pic.name.first);
                    let lastName = this.jsUcfirst(pic.name.last);
                    let locationCity = this.jsUcfirst(pic.location.city);
                    let locationState = this.jsUcfirst(pic.location.state);

                return(
                    <div key={value} >
                        <img src={pic.picture.large} />
                        <p> {firstName} {lastName}
                        <br/>
                        <small> {locationCity}, {locationState} {pic.nat}  </small>
                        </p>
                        <h4> {pic.email} </h4>
                       
                    </div>
                );
            })

            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);

        })
    }


    render() {
        return (
             <div className="Header" >
                <h1> Members  </h1>
                {this.state.pictures}
            </div>
        );
    }
}


export default Header;