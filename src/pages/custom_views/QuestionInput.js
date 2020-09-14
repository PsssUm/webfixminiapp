import React from 'react';

class QuestionInput extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            text : ""
        }
        this.onTextChanged = this.onTextChanged.bind(this)
    }
    onTextChanged(event){
        if (event){
            var value = event.target.value
            this.setState({text : value})
            this.props.textChanged(value)
        }
    }
    render() {
        return (
            <div className="questions_container">
                <p className="question_title">{this.props.title}</p>
                {this.props.isNumbers ? <input type='number' style={this.props.style ? this.props.style : {}} onChange={this.onTextChanged} value={this.state.text} className="input_question" placeholder={this.props.placeholder}/>
                 : <textarea style={this.props.style ? this.props.style : {}} onChange={this.onTextChanged} value={this.state.text} className="input_question" placeholder={this.props.placeholder}/>}
                
            </div>
        );
    }
}
export default QuestionInput;