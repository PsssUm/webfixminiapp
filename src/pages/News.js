import React from 'react';
import '../resources/styles/news.css'
import NewsItem from './custom_views/NewsItem';
class News extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
          
        }
        
    }
   
    render() {
        return (
            <div className="news_content">
              {this.props.news.length > 0 && this.props.news.map((item, index) => (
                    <NewsItem openDetails={this.props.openDetails} index={index} donation={item} key={index}/>
                ))}
            </div>
        );
    }
}
export default News;