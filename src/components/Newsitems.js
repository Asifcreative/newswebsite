import React from 'react'

const Newsitems = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props
 
    return (
        <div className="my-3">
            <div className="card">
                <div className="d-flex position-absolute end-0">
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "http://asifjaved.codemindz.com/newsapp/newsbg.png" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted"><i className="mnp-icon fa fa-user-circle"></i>&nbsp;{!author ? "Unknown" : author}&nbsp;&nbsp;&nbsp;<i className="mnp-icon fa fa-clock"></i>&nbsp;{date}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitems
