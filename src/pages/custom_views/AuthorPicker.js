import React from 'react';
import drop_arrow from '../../resources/icons/drop_arrow.svg'

class AuthorPicker extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            text : "Матвей Правосудов",
        }

    }
   
    render() {
        return (
            <div className="questions_container">
                <p className="question_title">{this.props.title}</p>
                <div className="relative">
                    <p className="input_question">{this.state.text}</p>
                    <img className="drop_arrow_question" src={drop_arrow}/>
                </div>
                
            </div>
        );
    }
}
export default AuthorPicker;