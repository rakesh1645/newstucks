import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/esm/Container';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from 'react-bootstrap/Spinner';
import '../Style/Style.css'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'General',
    pagesize: 6


  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

  articles = []

  constructor(props) {
    super(props)
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,


    }
    document.title = `News-Stucks ${this.props.category}`
  }
  async updateNews(){
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d797e27e6c5e4515bd7ff9677adb2f73&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json()
    this.setState({
      articles:parseData.articles,
      totalResults:parseData.totalResults,
      loading:false,
    })
  }


  async componentDidMount() {
 this.updateNews();
  }
  Nextbtn = async () => {
    this.updateNews();
    this.setState({page:this.state.page+1})
  
  }
  Previousbtn = async () => {
    this.updateNews();
    this.setState({page:this.state.page-1})
  }

  fetchMoreData=async()=>{
    this.setState({page:this.state.page+1})
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d797e27e6c5e4515bd7ff9677adb2f73&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json()
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults:parseData.totalResults,
      loading:false,
    })
  }
 
  render() {
    return (
      
        <InfiniteScroll 
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={  <Spinner className='spiner' animation="border" variant="success" />}
        >
          <h2 className='text-center' style={{marginTop:"70px"}}> News-Stucks Top {this.props.category} Headlines</h2>
          <Container>
          <div className='row my-4  '>
            {this.state.articles.map((element,index) => {
              return (
                <div className='col-md-4  d-flex justify-content-center '  key={`${element.url}-${index}`}>

                  <Newsitem title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url} author={element.author} date={element.publishedAt} />

                </div>)

            })}

          </div>
          </Container>
        </InfiniteScroll>



    

    )
  }
}

export default News
