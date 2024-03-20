import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component"

// export class News extends Component
const News = props => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  //    document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       articles: [],
  //       loading: true,
  //       page: 1,
  //       totalResults: 0,
  //     }
  //   }

  //   async updateNews()

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`

    //this.setState({ loading: true })
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(40)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)

    // this.setState({
    // articles: parsedData.articles,
    // totalResults: parsedData.totalResults,
    // loading: false,
    // })
  }

  useEffect(() => {
    updateNews()
  }, [])

  //   async componentDidMount() {
  //     this.updateNews()
  //   }

  //   const handlePrevClick = async () => {
  //     // this.setState({ page: this.state.page - 1 })
  //     setPage(page - 1)
  //     updateNews()
  //   }

  //   const handleNextClick = async () => {
  //     // this.setState({ page: this.state.page + 1 })
  //     setPage(page + 1)
  //     updateNews()
  //   }

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 })
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={props.apikey} &page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // })
  }

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll dataLength={articles.value.length} next={fetchMoreData} hasMore={articles.value.length !== totalResults} loader={<Spinner />}>
        <div className="container">
          <div className="row">
            {articles.map(element => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
