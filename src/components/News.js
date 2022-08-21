import React, {useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);


  
const updateNews = async () => {
    props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=98a7ae5e7fac41ad9bca57ca0111e4f2&page=${
      setPage + 1
    }&pagesize=${props.pageSize}`;
    setLoading({ loading: true });
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
     
  
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();

  } ,[])

  //adding previous and next page functionality

 const nextPage = async () => {

    setPage(page+1);
    updateNews();
   
  };
   const previousPage = async () => {
      
      setPage(page-1);
      updateNews();


  

   
  };

  return (
      <div className="container my-3">
        <h1 className="text-center"> THE NEWS SUPPLIER -"{props.category}-Headlines" </h1>

        {loading && <Spinner />}
        <div className="row">
          {loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.substring(0, 35) : ""}
                    description={
                      element.description
                        ? element.description.substring(0, 90)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          <div class="d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-dark "
              onClick={previousPage}
            >
              Previous
            </button>
            <button type="button" class="btn btn-dark" onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  
   

  }

News.propTypes = {

  country: 'in',
  pageSize: 8,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

// export default News;
export default News;
