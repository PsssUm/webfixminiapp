import React from 'react';
import avatar from '../../resources/icons/avatar.png'
import more from '../../resources/icons/more.svg'
import ic_comment_outline from '../../resources/icons/ic_comment_outline.svg'
import ic_eye from '../../resources/icons/ic_eye.svg'
import ic_like from '../../resources/icons/ic_like.svg'
import ic_reposts from '../../resources/icons/ic_reposts.svg'
import '../../resources/styles/details_styes.css'
import { getDatesCount } from '../../utils/Utils';
class NewsItem extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            progressWidth : 0,
            progressCount : 0
        }
        this.progressBg = React.createRef()
        this.openDetails = this.openDetails.bind(this)
        this.isAnimate = true
    }
    componentDidMount(){
        this.animateProgress()
    }
    animateProgress = () => {
        this.step = this.props.donation.summ / (Math.random() * (100 - 50) + 50)
        this.iteration = 0
       this.interval = setInterval(this.animationLoop, 50);
    }
    animationLoop = () => {
        if (this.isAnimate){
            this.progress = parseFloat(this.step*this.iteration) / this.props.donation.summ
            var progressCount = parseInt(this.progress * this.props.donation.summ)
            const newProgress = (this.progress * this.progressBg.current.offsetWidth)
            if (newProgress > this.progressBg.current.offsetWidth){
                this.iteration = 0
            } else {
                this.iteration += 1 
            }
            this.setState({progressWidth : newProgress, progressCount : progressCount})
        }
    }
    openDetails(){
        this.props.openDetails(this.props.donation)
    }
    componentWillUnmount(){
        this.isAnimate = false
        clearInterval(this.interval);
    }
    render() {
        return (
            <div onClick={this.openDetails} className="news_item">
                <div className="just_content">
                    <div className="flex">
                        <img className="news_item_avatar" src={avatar}/>
                        <div>
                            <p className="news_name_title">{this.props.donation.name}</p>
                            <p className="new_time">час назад</p>
                        </div>
                    </div>
                    <img className="news_more" src={more}/>
                </div>
                <p className="news_description_text">{this.props.donation.description}</p>
                <div className="snippet_card">
                    <img className="snippet_image" src={this.props.donation.image}/>
                    <p className="snippet_title">{this.props.donation.title}</p>
                    <p className="snippet_name">{this.props.donation.name} · {this.props.donation.isTarget ? this.props.donation.date > 0 ? ("Закончится через " + getDatesCount(this.props.donation.date) + " дн.") : "Когда соберём сумму" : "Помощь нужна каждый месяц"}</p>
                    <div className="snippet_line"/>
                    <div className="snippet_progress">
                        <div className="snippen_progress_cont">
                            <p className="snippet_progress_title">{this.state.progressCount == 0 ? "Помогите первым" : ("Собрано " + this.state.progressCount + " ₽ из " + this.props.donation.summ + " ₽")}</p>
                            <div className="relative">
                                <div ref={this.progressBg} className="snippet_progress_bg"/>
                                <div style={{width : (this.state.progressWidth + "px")}} className="progress_view"/>
                            </div>
                            
                        </div>
                        <div className="snippet_help_btn news_item_help">Помочь</div>
                    </div>
                </div>
                <div className="new_item_details">
                    <div className="detail_counters">
                        <img src={ic_like} width="24" className="detail_counters_icon"/><div className="detail_counters_text">65 </div>
                        <img src={ic_comment_outline} width="24" className="detail_counters_icon"/><div className="detail_counters_text">36 </div>
                        <img src={ic_reposts} width="21" className="detail_counters_icon"/><div className="detail_counters_text">7 </div>
                        <div className="detail_counters_right">
                            <img src={ic_eye} width="14" className="detail_counters_icon"/><div className="detail_counters_text_right">7,2K</div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default NewsItem;