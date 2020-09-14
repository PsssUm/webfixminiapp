import React from 'react';
import { Button, Div, Panel } from '@vkontakte/vkui';
import '../resources/styles/details_styes.css'

import ic_comment_outline from '../resources/icons/ic_comment_outline.svg'
import ic_eye from '../resources/icons/ic_eye.svg'
import ic_like from '../resources/icons/ic_like.svg'
import ic_reposts from '../resources/icons/ic_reposts.svg'
import avatar1 from '../resources/icons/avatar1.png'
import avatar2 from '../resources/icons/avatar2.png'
import ic_smile_outline from '../resources/icons/ic_smile_outline.svg'
import { getDatesCount, dateToString } from '../utils/Utils';


class Details extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            progressWidth : 0,
            progressWidthTop : 0,
            progressPercentsTop : 0,
            progressCount : 0,
            progressCountTop : 0,
            
        }
        this.progressBg = React.createRef()
        this.progressBgGreen = React.createRef()
        this.isAnimate = true
    }
    componentDidMount(){
        this.animateProgress()
    }
    animateProgress = () => {
        this.step = this.props.donation.summ / (Math.random() * (100 - 60) + 60)
        this.iteration = 0
        this.greenIteration = 0
        this.interval = setInterval(this.animationLoop, 50);
        this.intervalTop = setInterval(this.animationLoopTop, 50);
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
    animationLoopTop = () => {
        if (this.isAnimate){
            this.progressTop = parseFloat(this.step*this.greenIteration) / this.props.donation.summ
            var progressCount = parseInt(this.progressTop * this.props.donation.summ)
            const newProgress = (this.progressTop * this.progressBgGreen.current.offsetWidth)
            if (newProgress > this.progressBgGreen.current.offsetWidth){
                this.greenIteration = 0
            } else {
                this.greenIteration += 1 
            }
            this.setState({progressWidthTop : newProgress, progressPercentsTop : this.progressTop, progressCountTop : progressCount})
            if (newProgress >= this.progressBgGreen.current.offsetWidth){
                clearInterval(this.intervalTop);
                setTimeout(this.runAnimationLoopTop, 2000);
            }
        }
    }
    runAnimationLoopTop = () => {
        this.intervalTop = setInterval(this.animationLoopTop, 50);
    }

    componentWillUnmount(){
        this.isAnimate = false
        clearInterval(this.interval);
        clearInterval(this.intervalTop);
    }
    render() {
        return (
            <div className="main_content_details" >
              <img src={this.props.donation.image} height="140" className="detail_img-responsive"/>
              <div className="main_content_details_texts" >
                <p className="detail_title">{this.props.donation.title}</p>
                <p className="detail_author">Автор {this.props.donation.name}</p>
                <p className="detail_date">{this.props.donation.isTarget ? this.props.donation.date > 0 ? ("Закончится через " + getDatesCount(this.props.donation.date) + " дн.") : "Cбор закончится, когда соберём сумму" : "Помощь нужна каждый месяц"}</p>
                <hr className="detail_hr"/>

                <div style={{display: 'flex'}}>
                   <p className="detail_date2" style={{margin: '0px 0px 6px 0px'}}>{this.props.donation.isTarget ? this.props.donation.date > 0 ? ("Нужно собрать до " + dateToString(this.props.donation.date)) : "Нужно собрать" : "Нужно собрать в сентябре"}</p>
                   <span style={this.state.progressPercentsTop >= 0.7 ? {display : 'block'} : {display : 'none'}} className="detail_box_prog_text_white2">{this.props.donation.summ} ₽</span>
                </div>
                <div ref={this.progressBgGreen} className="detail_box" style={{display: 'flex'}}>
                    <div style={{width : (this.state.progressWidthTop + "px")}} className="detail_box_green">
                          <span style={(this.state.progressPercentsTop < 0.25 || this.state.progressPercentsTop >= 1.0) ? {display : 'none'} : {display : 'block'}} className="detail_box_prog_text_white1">{this.state.progressCountTop} ₽</span>
                          <span style={this.state.progressPercentsTop >= 1.0 ? {display : 'block'} : {display : 'none'}} className="detail_box_prog_text_white_center">{this.props.donation.summ} ₽ собраны!</span>
                    </div>
                    <span style={this.state.progressPercentsTop >= 0.25 ? {display : 'none'} : {display : 'block'}} className="detail_box_prog_text_white3">{this.state.progressCountTop} ₽</span>
                    <span style={this.state.progressPercentsTop >= 0.7 ? {display : 'none'} : {display : 'block'}} className="detail_box_prog_text_white2">{this.props.donation.summ} ₽</span>
                </div>
                
                <hr className="detail_hr" style={{margin: '12px 0px 6px 0px'}} />
                <p className="detail_description">{this.props.donation.description}</p>
                <hr className="detail_hr"/>
                <div className="detail_counters">
                    <img src={ic_like} width="24" className="detail_counters_icon"/><div className="detail_counters_text">65 </div>
                    <img src={ic_comment_outline} width="24" className="detail_counters_icon"/><div className="detail_counters_text">35 ₽</div>
                    <img src={ic_reposts} width="21" className="detail_counters_icon"/><div className="detail_counters_text">3 </div>
                    <div className="detail_counters_right">
                        <img src={ic_eye} width="14" className="detail_counters_icon"/><div className="detail_counters_text_right">7K </div>
                    </div>
                </div>
              </div>
              <hr className="detail_hr"/>
              <div className="detail_coment_div">
                <div style={{display: 'flex'}} className="detail_coment_div2">
                    <img src={avatar1} width="36" height="36"/><div style={{display: 'block', margin: '0px 0px 0px 8px'}}><span className="detail_coments_name">Алексей Мазелюк</span><span className="detail_coments_time">5 мин</span> <p className="detail_coments_text">Отправил</p> </div>
                    <img src={ic_like} width="16"className="detail_comment_like" />
                </div>
                <div style={{display: 'flex'}} className="detail_coment_div2">
                    <img src={avatar2} width="36" height="36" />
                <div style={{display: 'flex'}} className="detail_coment_div3">
                    <span className="detail_coments_edit_text">Комментарий</span>
                    <img src={ic_smile_outline} style={{marginRight : "4px", height : '24px', marginTop : '5px'}} width="24"className="detail_comment_like" />
                </div>
                </div>
              </div>
              <div className="bottom_progress">
                <div className="bottom_progress_line"/>
                <div className="snippet_progress">
                    
                    <div className="snippen_progress_cont">
                            <p className="snippet_progress_title">{this.state.progressCount == 0 ? "Помогите первым" : ("Собрано " + this.state.progressCount + " ₽ из " + this.props.donation.summ + " ₽")}</p>
                            <div className="relative">
                                <div ref={this.progressBg} className="snippet_progress_bg green_bg_progress"/>
                                <div style={{width : (this.state.progressWidth + "px")}} className="progress_view green_bg_progress"/>
                            </div>                            
                    </div>
                    <div className="snippet_help_btn news_item_help green_help_btn">Помочь</div>
                </div>
              </div>
              
            </div>

        );
    }
}
export default Details;