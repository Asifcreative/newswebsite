import React from 'react'

const NewsMarqueeItem = (props) => {

    let { title,imageUrl, newsUrl} = props
    return (
        <div className="marquee">
            <a rel="noreferrer" href={newsUrl} target="_blank" style={{textDecoration:'none', color:'#000', fontWeight:"bold"}}>
                <div className="d-flex text-center">
                <img style={{width:'40px', height:'40px', borderRadius:'50%'}} src={!imageUrl ? "http://asifjaved.codemindz.com/newsapp/newsbg.png" : imageUrl} alt="..." />
                <span className="px-3 my-auto">{title}</span>
                </div>
            </a>
        </div>
    )
}

export default NewsMarqueeItem
