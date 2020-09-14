import React from 'react';
import {CellButton, Panel, Card } from '@vkontakte/vkui';
import drop_arrow from '../../resources/icons/drop_arrow.svg'
import DayPicker from 'react-day-picker';
import moment from 'moment';
import 'moment/locale/ru'
import 'react-day-picker/lib/style.css';
import DatePickerBottom from './DatePickerBottom';
class DatePicker extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            text : "Выберите дату",
            date : 0,
            isShowDatePicker : false
        }
        this.onClose = this.onClose.bind(this);
        this.showDatePicker = this.showDatePicker.bind(this);
        this.onDatePicked = this.onDatePicked.bind(this);
    }
    onClose(){
        this.setState({isShowDatePicker : false})
    }
    showDatePicker(){
        if (this.props.isDatePicked){
            this.setState({isShowDatePicker : true})
        }
        
    }
    onDatePicked(date){
        var myDate = (date / 1000)
        this.onClose()
        this.setState({date : myDate, text : (moment.unix(myDate).format("DD MMMM"))})
        this.props.onDatePicked(myDate)
    }
    render() {
        return (
            <div className="questions_container">
                <p className="question_title">{this.props.title}</p>
                <div onClick={this.showDatePicker} className="relative">
                    <p style={this.state.text == "Выберите дату" ? {color: '#818C99'} : {}} className="input_question">{this.state.text}</p>
                    <img className="drop_arrow_question" src={drop_arrow}/>
                </div>
               {this.state.isShowDatePicker && <DatePickerBottom onDatePicked={this.onDatePicked} onClose={this.onClose}/>} 
               
            </div>
        );
    }
}
export default DatePicker;