import React, { useEffect, useState } from 'react'
import NewsMarqueeItem from './NewsMarqueeItem'
import PropTypes from 'prop-types'


const NewsMarquee = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    }
    useEffect(() => {
        updateNews();
    }, []);



    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-2 newsflash">
                    <span className="flashTitle">News Flash</span>
                    </div>
                    <div className="col-md-10" style={{justifyContent:'center', alignItems:'center', display:'flex', padding:'0', backgroundColor:'#ffe0e0'}}>
                        <marquee behavior="" direction="" onMouseOver="" >

                            <div className="d-flex px-5">
                                {articles.map((element) => {
                                    return <div key={element.url}>
                                        <NewsMarqueeItem title={element.title ? element.title : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>
                                })}
                            </div>

                        </marquee>
                    </div>
                </div>
            </div>

        </>

    )
}
NewsMarquee.defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'general',
}
NewsMarquee.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default React.memo(NewsMarquee)
