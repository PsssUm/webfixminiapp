import React from 'react';
import back from '../resources/icons/back.svg'

class Navbar extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
          
        }
      
    }
   
    render() {
        return (
            <div className="navbar">
                <p className="navbar_title">{this.props.title}</p>
                {this.props.back != undefined && <img onClick={() => {this.props.onBack(this.props.back)}} className="back_icon" src={back}/>}
                {(this.props.isShowLine == undefined || this.props.isShowLine) && <div className="navbar_line"/>}
            </div>
        );
    }
}
export default Navbar;