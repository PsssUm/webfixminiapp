import React from 'react';

class CreateNewDonation extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
          
        }
      
    }
   
    render() {
        return (
            <div className="main_content">
               <div className="create_donation_container">
                   <p className="create_donation_text">У Вас пока нет сборов.<br/>Начните доброе дело.</p>
                   <div onClick={() => this.props.changePage("type")} className="vk_btn horizontal-center">Создать сбор</div>
                   {/* <Button className="vk_btn horizontal-center">Создать сбор</Button> */}
                   
               </div>
            </div>
        );
    }
}
export default CreateNewDonation;