// import React, { Component } from 'react';

// import NewsItem from './NewsItem';
// import PropTypes from 'prop-types'
// import Spinner from './Spinner';
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps={
//     country:'in',
//     pageSize:8,
//     category:'general'
//   }
//   static propTypes={
//     country : PropTypes.string,
//     pageSize :PropTypes.number,
//     category:PropTypes.string
//   }
//   capitalizeFirstLetter=(string)=>{
//     return string.charAt(0).toUpperCase()+string.slice(1);
//   }
//   constructor(props){
//     super(props);
//     this.state={
//           articles:[],
//           loading:true,
//           page:1,
//           totalResults:0
//     }
//     document.title=`${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
//   }

//     async updateNews(){
//       props.setProgress(10);
//       const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//       this.setState({loading:true});
//        let data =await fetch(url);
//       props.setProgress(70);
//        let parsedData=await data.json();
//        this.setState({articles:parsedData.articles,
//          totalResults: parsedData.totalResults,
//          loading:false,
//        })
//        props.setProgress(100);

//     }

//   async componentDidMount(){ 
//     this.updateNews();
//   }


//    handlePrevClick=async()=>{
//   this.setState({page: this.state.page - 1})
//   this.updateNews();
//   }


//   handleNextClick= async()=>{
//   this.setState({page: this.state.page + 1});
//   this.updateNews();
//   }

//   fetchMoreData = async() => {
//     this.setState({page:this.state.page +1})
//     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//      let data =await fetch(url);
//      let parsedData=await data.json()
//      this.setState({articles:this.state.articles.concat(parsedData.articles),
//        totalResults: parsedData.totalResults,
//      })
//   };



//   render() {

//     return (
//       <>
//         <h1 className='text-center' style={{margin:"30px"}}>NewsMonkey - Top {this.capitalizeFirstLetter(props.category)} Headlines</h1>
//        {this.state.loading && <Spinner></Spinner>}
        
//        <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length!== this.state.totalResults}
//           loader={<Spinner/>}

//         >
//           <div className="container">
//               <div className="row">
//                   {this.state.articles.map((element)=>{
//                      return <div className="col-md-4" key={element.url}>
//                         <NewsItem title= {element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
//                           </div>
//                       })}
//                </div>
//         </div>
//         </InfiniteScroll>
//      </>
//     )
//   }
// }
// export default News;



import React from 'react';
import { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

    const updateNews=async()=>{
      props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
       let data =await fetch(url);
      props.setProgress(70);
       let parsedData=await data.json();
       setArticles(parsedData.articles);
       setTotalResults(parsedData.totalResults)
       setLoading(false);
       
       props.setProgress(100);

    }
    useEffect(() => {
  document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
    }, [])


   const handlePrevClick=async()=>{
    setPage(page-1);
    updateNews();
  }


  const handleNextClick= async()=>{
  setPage(page+1);
    updateNews();
  }

  const fetchMoreData = async() => {
  
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
     let data =await fetch(url);
     let parsedData=await data.json()
     setArticles(articles.concat(parsedData.articles));
     setTotalResults(parsedData.totalResults);
  };

    return (
      <>
        <h1 className='text-center' style={{margin:"30px" , marginTop:"90px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
       {loading && <Spinner></Spinner>}
        
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}

        >
          <div className="container">
              <div className="row">
                  {articles.map((element)=>{
                     return <div className="col-md-4" key={element.url}>
                        <NewsItem title= {element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
                          </div>
                      })}
               </div>
        </div>
        </InfiniteScroll>
     </>
    )
  
}
News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
}
News.propTypes={
  country : PropTypes.string,
  pageSize :PropTypes.number,
  category:PropTypes.string
}
export default News;
