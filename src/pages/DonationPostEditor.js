import React from 'react';
import '../resources/styles/editor.css'
import user from '../resources/icons/user.svg'
import arrow_gray from '../resources/icons/arrow_gray.svg'
import clock from '../resources/icons/clock.svg'
import { getDatesCount } from '../utils/Utils';
class DonationPostEditor extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            description : this.props.donation.description,
            isSend : (this.props.send)
        }
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
        this.send = this.send.bind(this)
        this.isSend = false
    }
    componentDidUpdate(prevProps){
        if (prevProps.send !== this.props.send && !this.isSend){
            this.isSend = true
            this.send()
        }
    }
    onDescriptionChanged(event){
        if (event){
            var value = event.target.value
            this.setState({description : value})
        }
    }
   
    send(){
        var donation = this.props.donation
        if (this.state.description != undefined){
            donation.description = this.state.description
        }
        this.props.addNews(donation)
    }
    render() {
        return (
            <div className="main_content">

                <div className="editor_input_container">
                    <textarea className="editor_input" onChange={this.onDescriptionChanged} value={this.state.description}/>
                </div>
                
                <div className="snippet_card">
                    <img className="snippet_image" src={this.props.donation.image}/>
                    <p className="snippet_title">{this.props.donation.title}</p>
                    <p className="snippet_name">{this.props.donation.name} · {this.props.donation.isTarget ? this.props.donation.date > 0 ? ("Закончится через " + getDatesCount(this.props.donation.date) + " дн.") : "Когда соберём сумму" : "Помощь нужна каждый месяц"}</p>
                    <div className="snippet_line"/>
                    <div className="snippet_progress">
                        <div className="snippen_progress_cont">
                            <p className="snippet_progress_title">Помогите первым</p>
                            <div className="snippet_progress_bg"></div>
                        </div>
                        <div className="snippet_help_btn">Помочь</div>
                    </div>
                </div>

                <div className="horizontal_scroll">
                    <div className="gray_item_cont">
                        <div className="gray_item">
                            <img className="gray_item_icon" src={user}/>
                            <p className="gray_item_text">Видно всем</p>
                            <img className="arrow_gray_item" src={arrow_gray}/>
                        </div>
                    </div>
                    <div className="gray_item_cont">
                        <div className="gray_item">
                            <img className="gray_item_icon" src={clock}/>
                            <p className="gray_item_text">Сейчас</p>
                            <img className="arrow_gray_item" src={arrow_gray}/>
                        </div>
                    </div>
                    
                    <div className="gray_item_cont">
                        <div className="gray_item">
                            <p className="gray_item_text gray_text_left">Тематика</p>
                            <img className="arrow_gray_item" src={arrow_gray}/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
export default DonationPostEditor;