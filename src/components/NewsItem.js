import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , decription,imgurl ,newsurl , author , date } = this.props
    return (
      <div>
        
        <div className="card my-3 " >
        <img src={!imgurl ? "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png" : imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{decription}</p>
          <p className='card-text'> <small className='text-muted'>by {author? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href = {newsurl}  target ="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
