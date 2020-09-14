import React from 'react';
import '../resources/styles/questions.css'
import PhotoPicker from './custom_views/PhotoPicker';
import QuestionInput from './custom_views/QuestionInput';
import QuestionPicker from './custom_views/QuestionPicker';
import AuthorPicker from './custom_views/AuthorPicker';
import { getEpmtyModel } from '../utils/Utils';
class DonationQuestions extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            title : "",
            summ : 0,
            description : "",
            target : "",
            payment : "",
            image : ""
        }
        this.titleChanged = this.titleChanged.bind(this)
        this.summChanged = this.summChanged.bind(this)
        this.descriptionChanged = this.descriptionChanged.bind(this)
        this.targetChanged = this.targetChanged.bind(this)
        this.next = this.next.bind(this)
        this.paymentChanged = this.paymentChanged.bind(this)
        this.photoPicked = this.photoPicked.bind(this)
    }
    titleChanged(title){
        this.setState({title : title})
    }
    summChanged(summ){
        this.setState({summ : summ})
    }
    descriptionChanged(description){
        this.setState({description : description})
    }
    targetChanged(target){
        this.setState({target : target})
    }
    paymentChanged(payment){
        this.setState({payment : payment})
    }
    photoPicked(image){
        this.setState({image : image})
    }
    isReady = () => {
        return (this.state.image != undefined && this.state.image != "" && this.state.title != undefined && this.state.title != "" && this.state.summ != undefined && this.state.summ > 0 && this.state.description != undefined && this.state.description != "" && this.state.target != undefined && this.state.target != "")
    }
    next(){
        if (this.isReady()){
            var donation = getEpmtyModel()
            donation.title = this.state.title
            donation.summ = this.state.summ
            donation.description = this.state.description
            donation.target = this.state.target
            donation.payment = this.state.payment
            donation.image = this.state.image
            if (this.props.type == "regular"){
                donation.isTarget = false
                this.props.onDonationChanged(donation)
                this.props.changePage("editor")
            } else {
                this.props.onDonationChanged(donation)
                this.props.changePage("options")
            }
            
        } 
        
    }
    render() {
        return (
            <div className="main_content">
                <PhotoPicker photoPicked={this.photoPicked}/>
                <QuestionInput textChanged={this.titleChanged} title="Название сбора" placeholder="Название сбора"/>
                <QuestionInput isNumbers={true} textChanged={this.summChanged} title="Сумма, ₽" placeholder="Сколько нужно собрать?"/>
                <QuestionInput textChanged={this.targetChanged} title="Цель" placeholder="Например, лечение человека"/>
                <QuestionInput style={{minHeight : "64px"}} textChanged={this.descriptionChanged} title="Описание" placeholder="На что пойдут деньги и как они кому-то помогут?"/>
                <QuestionPicker paymentChanged={this.paymentChanged} title="Куда получать деньги"/>
                <AuthorPicker title="Автор"/>
                <div style={this.isReady() ? {} : {opacity : 0.5, pointerEvents : 'none'}} onClick={this.next} className="vk_btn question_btn_next">Далее</div>
            </div>
        );
    }
}
export default DonationQuestions;
