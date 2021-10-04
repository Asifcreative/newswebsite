import React from 'react'

const Newsitems = (props) => {

    let { title, imageUrl,author, date, source } = props
    return (
        <div className="my-3">
            <div className="card text-white">
                <img src={!imageUrl ? "http://asifjaved.codemindz.com/newsapp/newsbg.png" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-img-overlay">
                    <span className="badge rounded-pill bg-danger">{source}</span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><small><i className="mnp-icon fa fa-clock"></i>&nbsp;{new Date(date).toDateString()}&nbsp;&nbsp;<i className="mnp-icon fa fa-user-circle"></i>&nbsp;{!author ? "Unknown" : author}</small></p>
                </div>
            </div>
        </div>
    )
}

export default Newsitems
