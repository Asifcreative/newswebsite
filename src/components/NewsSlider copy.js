import React, { useEffect, useState } from 'react'
import NewsSliderItems from './NewsSliderItems'
import PropTypes from 'prop-types'
import Newsitems2 from './Newsitems2';

const NewsSlider = (props) => {
    const INITIAL_INDEX = 0;
    const [selectedIndex, setIndex] = useState(INITIAL_INDEX);

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(20);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
        //eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }
    const handlePrevClick = () => {
        setPage(page - 1)
        updateNews();
    }
    const handleNextClick = () => {
        setPage(page + 1)
        updateNews();
    }

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-3">
                        {articles.map((element, index) => {
                            if (index === 0) {
                                return <div className="row" key={element.url}>
                                    <Newsitems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            }if (index===1) {
                                return <div className="row" key={element.url}>
                                <Newsitems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                            }
                        })}

                    </div>
                    <div className="col-md-6">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {articles.map((element,index) => {
                                    return <div className={`element ${selectedIndex === index ? "carousel-item active" : "carousel-item"}`}
                                    key={element.url}
                                    >
                                        <NewsSliderItems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                    {articles.map((element, pos) => {
                            if (pos === 2) {
                                return <div className="row" key={element.url}>
                                    <Newsitems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            }if (pos===3) {
                                return <div className="row" key={element.url}>
                                <Newsitems2 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                            }
                        })}

                    </div>
                </div>

            </div>


        </>

    )
}
NewsSlider.defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'technology',
}
NewsSlider.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default NewsSlider
