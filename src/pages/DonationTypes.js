import React from 'react';
import target from '../resources/icons/target.svg'
import calendar from '../resources/icons/calendar.svg'
import right_arrow from '../resources/icons/right_arrow.svg'
import '../resources/styles/type.css'
class DonationTypes extends React.Component {
   
    constructor(props){
        super(props)
    }
   
    render() {
        return (
            <div className="main_content">
               <div className="types_container">
                   <div onClick={() => {this.props.onTypePicked('target')}} className="type_container type_target just_content">
                       <div className="flex">
                            <img className="type_icon" src={target}/>
                            <div>
                                <p className="type_title">Целевой сбор</p>
                                <p className="type_text">Когда есть определённая цель</p>
                            </div>
                       </div>
                       <img className="types_arrow_icon" src={right_arrow}/>
                   </div>

                   <div onClick={() => {this.props.onTypePicked('regular')}} className="type_container type_regular just_content">
                       <div className="flex">
                            <img className="type_icon" src={calendar}/>
                            <div>
                                <p className="type_title">Регулярный сбор</p>
                                <p className="type_text">Если помощь нужна ежемесячно</p>
                            </div>
                       </div>
                       <img className="types_arrow_icon" src={right_arrow}/>
                   </div>

               </div>
            </div>
        );
    }
}
export default DonationTypes;