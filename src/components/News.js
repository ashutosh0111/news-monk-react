import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from "./spinner";

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 6,
    category : 'general',
    page :1
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number ,
    category : PropTypes.string,
    page : PropTypes.number
  }
 
constructor(){
  super();
  this.state = {
    articles : [],
    loading: false,
    page : 1
  }
}

async updatenews(){
 
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles : parsedData.articles , totalResults : parsedData.totalResults , loading:false })
  
}
async componentDidMount(){
  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`
  this.setState({loading : true})
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles : parsedData.articles, totalResults : parsedData.totalResults , loading:false })

}

handlenextclick = async()=>{
  
  // console.log("next clicked ")
  // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ca99211496bd43c0869102853e5cb8ba&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading : true})
  // let data = await fetch(url);
  // let parsedData = await data.json();
  
  // this.setState({ articles : parsedData.articles , 
  //                 page : this.state.page+1 ,
  //               loading : false })
  this.setState({ page : this.state.page+1})
  this.updatenews();
 
}
handleprevclick= async()=>{
  // console.log("prev clicked ")
  // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ca99211496bd43c0869102853e5cb8ba&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading : true})
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({loading : false })
  // this.setState({ articles : parsedData.articles ,
  //                 page : this.state.page-1 ,
  //               loading : false })
 
  this.setState({ page: this.state.page-1})
  this.updatenews();
 
}
  render() {

    return (
      <div className='container my-3'> 
     {this.state.loading && <Spinner/>}
      <h3 className='text-center'> NewsMonk Top Headlines </h3>
      <div className='row'>
        {  
         this.state.articles.map ((elements ) => {
          return <div className='col-md-4' key = {elements.url}>
      
      <NewsItem   title = {elements.title}  decription = {elements.description } imgurl= {elements.urlToImage} newsurl ={elements.url} author={elements.author} date ={elements.publishedAt}/>
      </div>
          })
        }
      
         
      </div>
      <div className='container d-flex justify-content-between'>
      <button  disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
      <button  disabled= {this.state.page+1  > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>


      </div>
       
      </div>
    )
  }
}

export default News
