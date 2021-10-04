import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Pagination from "react-js-pagination";

// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

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
        document.title = `NewsApp - ${capitalizeFirstLetter(props.category)}`;
        updateNews();
        //eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
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
    const handlePageChange = (pageNumber)=> {
        console.log(`active page is ${pageNumber}`);
        setPage(pageNumber);
        updateNews();
      }

    return (
        <>
            <div className="container my-4">
                <h2 className="my-3" style={{ margin: '35px 0px', marginTop: '80px' }}>NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                {loading && <Spinner />}
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-6" key={element.url}>
                                    <Newsitems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                        <div>
                            <Pagination
                                page={page}
                                itemsCountPerPage={8}
                                totalItemsCount={totalResults}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                                itemClass= "page-item"
                                linkClass="page-link"
                                activeClass= "active"
                                prevPageText= "Previous"
                                nextPageText= "Next"
                            />
                        </div>
                        

                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-dark" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="row my-3">
                            <h3>Advertisment</h3>
                            <div className="card mt-2">
                                <img src="https://blog.hubspot.com/hs-fs/hubfs/kfc-fck.png?width=600&name=kfc-fck.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Your Add here</h5>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <img src="https://www.designhill.com/design-blog/wp-content/uploads/2019/03/7-5.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Your Add here</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
News.defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
