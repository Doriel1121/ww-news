import React, { Component } from 'react';

export default class Story extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        if (this.props.size==="small") {
        return (
                <div id="allStory"  >
                    <div class="container-fluid">
        <div class="col-12 mt-3" style={{marginTop:0}}>
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="storyImg" src={this.props.story.urlToImage} alt="Card image cap"/>
                    </div>
                    <div class="card-body">
                    <a href={this.props.story.url} className="card-title title" style={{ fontSize: 15}}><h4>{this.props.story.title}</h4></a>
                        <p class="card-text">{this.props.story.content}</p>
                    </div>
                </div>
                <div class="card-footer">
                <p className="card-text" id="StoryAbout">
                        <small className="text-muted"><span>{this.props.story.source.name}</span> | <span>{this.props.story.publishedAt}</span></small>
                        </p>
                </div>
            </div>
        </div>
</div>

                </div>
        )
    }else{ 
        return (
            <div id="allStory"  >
                
                        <div className="card mb-3" style={{marginTop:15}}>
                        <img className="card-img-top" id="img" style={{height: 150}}  src ={this.props.story.urlToImage} />
                    </div>
                    <div style={{paddingTop:0 , paddingBottom:0}} className="card-body">
                    <div style={{textAlign:"left", fontSize: 13 , fontWeight: "bolder"}}><a href={this.props.story.url} className="card-title title" style={{ fontSize: 18 , textAlign:"left"}}>{this.props.story.title}</a>
                    <hr/>
                    <p className="card-text" id="StoryAbout">
                    <small className="text-muted"><span>{this.props.story.source.name}</span> | <span>{this.props.story.publishedAt}</span></small>
                    </p>
                    </div>
                    </div>
                    <div className="col-sm"></div>

            </div>
    )

    }
    }
}
