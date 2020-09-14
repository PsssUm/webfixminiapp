import React from 'react';
import PaymentPicker from './PaymentPicker'
import drop_arrow from '../../resources/icons/drop_arrow.svg'
class QuestionPicker extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            text : "Счёт VK Pay · 1234",
            isShowPaymentPicker : false
        }
        this.onPaymentPicked = this.onPaymentPicked.bind(this)
        this.showPaymentPicker = this.showPaymentPicker.bind(this)
        this.onClose = this.onClose.bind(this)

    }
    onPaymentPicked(payment){
        this.setState({isShowPaymentPicker : false, text : payment})
        this.props.paymentChanged(payment)
    }
    showPaymentPicker(){
        this.setState({isShowPaymentPicker : true})
    }
    onClose(){
        this.setState({isShowPaymentPicker : false})
    }
    render() {
        return (
            <div className="questions_container">
                <p className="question_title">{this.props.title}</p>
                <div className="relative">
                    <p onClick={this.showPaymentPicker} className="input_question">{this.state.text}</p>
                    <img className="drop_arrow_question" src={drop_arrow}/>
                </div>
                
                {this.state.isShowPaymentPicker && <PaymentPicker onClose={this.onClose} onPaymentPicked={this.onPaymentPicked}/>}
            </div>
        );
    }
}
export default QuestionPicker;