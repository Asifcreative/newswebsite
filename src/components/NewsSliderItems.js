import React from 'react'

const NewsSliderItems = (props) => {

    let { title, imageUrl, author, date, source } = props
    return (
        <div >
            <img src={!imageUrl ? "http://asifjaved.codemindz.com/newsapp/newsbg.png" : imageUrl} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <span className="badge rounded-pill bg-danger">{source}</span>
                <h5>{title}</h5>
                <p><small className=""><i className="mnp-icon fa fa-user-circle"></i>&nbsp;{!author ? "Unknown" : author}&nbsp;&nbsp;&nbsp;<i className="mnp-icon fa fa-clock"></i>&nbsp;{new Date(date).toDateString()}</small></p>
            </div>
        </div>

    )
}

export default NewsSliderItems
