import React, { Component } from 'react';
import Axios from "axios";
import Story from './Story';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             APIkey : "56e5c7bb3749419b8eb54212d6bf370a",
             Data : [],
             AllStories:[],
             BitcoinStories:[],
             BusinessStories:[],
             ApplesStories:[],
             TechCrunchStories:[],
             WallStreetStories:[],
             currentDate:"",
        }
    }
    
    componentDidMount = () => {
        var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = yyyy + '/' + mm + '/' + dd;
console.log(today)
this.setState({currentDate:today})
        
        Axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=${this.state.currentDate}&sortBy=publishedAt&apiKey=${this.state.APIkey}`)
        .then((res)=>{
            this.setState({Data:res.data.articles})
            console.log(res);
            
        }).catch((err)=>{
            alert("something wrong")
        })
        
    }
    ShowAllStories= () => {
        this.BitcoinStories()        
        this.BusinessStories()
        this.ApplesStories()
        this.TechCrunchStories()
        this.WallStreetStories()
      let allStories = [this.state.BitcoinStories , 
        this.state.BusinessStories , 
        this.state.ApplesStories , 
        this.state.TechCrunchStories ,
        this.state.WallStreetStories
    ]
    console.log(allStories);
    }

    BitcoinStories= () => {
        Axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=${this.state.currentDate}&sortBy=publishedAt&apiKey=${this.state.APIkey}`)
        .then((res)=>{
            this.setState({Data:res.data.articles , BitcoinStories:res.data.articles})
            console.log(res);
            return res.data.articles
        }).catch((err)=>{
            alert("something wrong")
        })
    }

    BusinessStories = () => {
        Axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.state.APIkey}`)
        .then((res)=>{
            this.setState({Data:res.data.articles, BusinessStories:res.data.articles})
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            
            alert("something wrong")
        })
    }

    ApplesStories = () => {
        Axios.get(`https://newsapi.org/v2/everything?q=apple&from=${this.state.currentDate}&to=${this.state.currentDate}&sortBy=popularity&apiKey=${this.state.APIkey}`)
        .then((res)=>{
            this.setState({Data:res.data.articles, ApplesStories:res.data.articles})
        }).catch((err)=>{
            console.log(err);
            
            alert("something wrong")
        })
    }

    TechCrunchStories= () => {
        Axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.state.APIkey}`)
        .then((res)=>{
            this.setState({Data:res.data.articles, TechCrunchStories:res.data.articles})
        }).catch((err)=>{
            alert("something wrong")
        })
    }

    WallStreetStories= () => {
        Axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${this.state.APIkey}`)
        .then((res)=>{
            this.setState({Data:res.data.articles, WallStreetStories:res.data.articles})
            console.log(this.state.AllStories);
            
        }).catch((err)=>{
            alert("something wrong")
        })
    }
    render() {        
        return (
            <div>
              
                <div id= "navbar" className=""  >
                <Carousel indicators = {false}>  
{this.state.Data.map((element) => {
    return <Carousel.Item id ="carouselImages" style={{height:500}} >  

    <img style={{height:500}}  
    className="d-block w-100"  
    src={element.urlToImage}  />  
      <Carousel.Caption>      
            </Carousel.Caption>  
            </Carousel.Item  > 
})}
 

               </Carousel>  
                    <div  style={{backgroundColor: "#102039", color:"white", height:80 , marginBottom:30 }} className="sticky-top row">
                    <div className="col-3" ><h1 id="title">WW NEWS</h1></div>
                    {/* <div className="col-"></div> */}
                        <div className="col-1 "><button onClick={()=> this.BitcoinStories()} className="butt btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>Bitcoin</button></div>
                        <div className="col-2 "><button onClick={()=> this.BusinessStories()} className="butt btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>Businesses</button></div>
                        <div className="col-1 "><button onClick={()=> this.ApplesStories()} className="butt btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>Apple</button></div>
                        <div className="col-2 "><button onClick={()=> this.TechCrunchStories()} className="butt btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>TechCrunch </button></div>
                        <div className="col-2 "><button onClick={()=> this.WallStreetStories()} className="butt btn btn-link" style={{color:"white" , fontWeight:"bolder"}}>Wall Street Journal</button></div>
                    </div>
                </div>
                <div className="container">
                <div  className="row no-gutters">
                    <div  className="col-3">
                {this.state.Data.map((element) => {
                    if (this.state.Data.indexOf(element) % 2 == 0) {
                        return <div  className="col-12 "><Story size={"big"} story = {element}/>
                    </div> 
                    }
                   
                })}
                </div>
                <div className="col-9">
                {this.state.Data.map((element) => {
                    if (this.state.Data.indexOf(element) % 2 !== 0) {
                        return <div  className="col-12"><Story size = "small" story = {element}/>
                        </div>
                    }
                })}     
                </div>

                </div>  
                </div>
                <footer className="page-footer font-small special-color-dark pt-4">

<div className="container">

  <ul className="list-unstyled list-inline text-center">
    <li className="list-inline-item">
      <a className="btn-floating btn-fb mx-1">
        <i className="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-tw mx-1">
        <i className="fa fa-twitter"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-gplus mx-1">
        <i className="fa fa-google-plus-g"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-li mx-1">
        <i className="fa fa-linkedin-in"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-dribbble mx-1">
        <svg  className="fab fa-dribbble"/> 
      </a>
    </li>
  </ul>

</div>

<div className="footer-copyright text-center py-3">© 2020 Copyright:
  <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
</div>
</footer>
            </div>
        )
    }
}
