import React, { useState } from 'react';
import Axios from "axios";
import Story from './Story';


function allData() {
    var [state, setstate] = useState(()=> ApplesStories)
        console.log(state);
}
 function ApplesStories() {
    Axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-20&sortBy=publishedAt&apiKey=${this.state.APIkey}`)
    .then((res)=>{
        // this.setState({Data:res.data.articles})
        const news = res.data.articles
        return news
    })
    
}

export default function Home() {
    return (
        <div>
             <div id= "navbar" className="sticky-top" style={{marginBottom:30}} >
                <div id="aboveNavbar">
                    <p className="logo">WW NEWS</p>
                </div>
                    <div  style={{backgroundColor: "#102039", color:"white", height:80 }} className="row">
                    <div className="col-3" ><h1 id="title">WW NEWS</h1></div>
                        <div className="col-sm butt"><button className="btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>All</button></div>
                        <div className="col-am butt"><buttton className="btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>Bitcoin</buttton></div>
                        <div className="col-sm butt"><buttton className="btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>Businesses</buttton></div>
                        <div className="col-sm butt"><buttton onClick={()=> this.ApplesStories()} className="btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>Apple</buttton></div>
                        <div className="col-sm butt"><buttton className="btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>TechCrunch </buttton></div>
                        <div className="col-sm butt"><buttton className="btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>Wall Street Journal</buttton></div>
                        {/* <div className="col-1"></div> */}
                        
                    </div>
                </div>
                <div className="container">
                <div className="row">
                {this.state.Data.map((element) => {
                    if (this.state.Data.indexOf(element) % 5 == 0) {
                        return <div  className="col-8"><Story size={"big"} story = {element}/>
                    </div> 
                    }else{
                        return <div  className="col-4"><Story size = "small" story = {element}/>
                      </div>
                    }
                   
                })}

                </div>  
                </div>
        </div>
    )
}
