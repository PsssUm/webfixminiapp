import React from 'react';
import AuthorPicker from './custom_views/AuthorPicker';
import state_on from '../resources/icons/state_on.svg'
import state_off from '../resources/icons/state_off.svg'
import '../resources/styles/options.css'
import DatePicker from './custom_views/DatePicker';
import { getDatesCount } from '../utils/Utils';
class DonationOptions extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            isDatePicked : true,
            date : 0
        }
        this.onCreate = this.onCreate.bind(this)
        this.toogleDates = this.toogleDates.bind(this)
        this.isReadyCreate = this.isReadyCreate.bind(this)
        this.onDatePicked = this.onDatePicked.bind(this)
    }
    onCreate(){
        var donation = this.props.donation
        if (this.state.isDatePicked){
            donation.date = this.state.date
        } else {
            donation.date = 0
        }
        this.props.onDonationChanged(donation)
        this.props.changePage("editor")
    }
    toogleDates(isDatePicked){
        this.setState({isDatePicked : isDatePicked})
    }
    isReadyCreate(){
        return (!this.state.isDatePicked ? true : this.state.date > 0 ? true : false)
    }
    onDatePicked(date){
        this.setState({date : date})
        console.log("dates to date = " + getDatesCount(date))
    }
    render() {
        return (
            <div className="main_content">
                <AuthorPicker title="Автор"/>
                <p className="question_title options_title">Сбор завершится</p>
                <div onClick={() => this.toogleDates(false)} className="flex">
                    <img src={!this.state.isDatePicked ? state_on : state_off}/>
                    <p className="options_title_picker">Когда соберём сумму</p>
                </div>
                <div onClick={() => this.toogleDates(true)} className="flex options_date">
                    <img src={this.state.isDatePicked ? state_on : state_off}/>
                    <p className="options_title_picker">В определённую дату</p>
                </div>
                <DatePicker isDatePicked={this.state.isDatePicked} onDatePicked={this.onDatePicked} title="Дата окончания"/>
                <div style={this.isReadyCreate() ? {} : {opacity : 0.5, pointerEvents : 'none'}} onClick={this.onCreate} className="vk_btn question_btn_next options_btn">Создать сбор</div>
            </div>
        );
    }
}
export default DonationOptions;