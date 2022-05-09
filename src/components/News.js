import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setarticles] = useState([]); 
    const [page, setPage] = useState(1);
    // const [loading, setloading] = useState(true);  
    const [totalResults, settotalResults] = useState(0)
    const updateNews = async ()=> { 
        props.setProgress(20); 
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        // setloading(true);
        props.setProgress(30);
        let data = await fetch(url);
        // props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(60);
        setarticles(parsedData.articles); 
        props.setProgress(80); 
        settotalResults(parsedData.totalResults);  
        // setloading(false); 
        props.setProgress(100); 
    }
    useEffect(() => {
        updateNews(); 
    }, [])
    const fetchMoreData = async () => {
          
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles));
        settotalResults(totalResults); 

    };
        return (
            <>
                <div className="container my-3">
                    <h3 className='text-center' style={{marginTop:'90px'}}>NewsHunt Top Headlines from {props.category} category</h3>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length != totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row mx-2">
                                {articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={(element.author ? element.author : "XYZ")} date={element.publishedAts} source={element.source.name} />
                                    </div>
                                })}

                            </div>
                        </div>
                    </InfiniteScroll>

                </div>

            </>
        )
    }

News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
