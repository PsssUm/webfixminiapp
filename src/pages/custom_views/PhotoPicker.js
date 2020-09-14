import React from 'react';
import pickture from '../../resources/icons/pickture.svg'
import dismiss from '../../resources/icons/dismiss.svg'
import { FormLayout, File} from '@vkontakte/vkui';
var img = new Image; 
var fr = new FileReader;
class PhotoPicker extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            pickedImageSrc : undefined
        }
        this.fileUpload = React.createRef();
        this.pickImage = this.pickImage.bind(this);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }
    pickImage() {
        this.fileUpload.current.click();
    }
    fileChangedHandler(event) {
        if(event && event.target.files && event.target.files.length > 0){
            this.showImage(event.target.files[0])
        }
    }
    showImage = (file) => {
        fr.onload = this.onLoadedFileReader
        fr.readAsDataURL(file);
    }
    onLoadedFileReader = () => {
        img.onload = this.onImgLoaded
        img.src = fr.result;
    }
    onImgLoaded = () => {
        this.setState({pickedImageSrc : img.src})
        this.props.photoPicked(img.src)
    }
    onDismiss(){
        this.setState({pickedImageSrc : undefined})
        this.props.photoPicked(undefined)
    }
    render() {
        return (
            <div className="photo_picker_container">
                {/* <FormLayout>
        <File>
        
        </File>
      </FormLayout> */}
               <input id="fileInput" className="custom-file-input hover" type="file" accept="image/*" onChange={this.fileChangedHandler} style={{ display: "none" }} ref={this.fileUpload}/>
               {this.state.pickedImageSrc == undefined ? <div onClick={this.pickImage} className="photo_picker">
                    <div className="center flex">
                        <img src={pickture}/>
                        <p className="photo_text">Загрузить обложку</p>
                    </div>
               </div> : 
               <div className="picked_img_container">
                    <img className="picked_image" src={this.state.pickedImageSrc}/>
                    <div onClick={this.onDismiss} className="dismiss_container">
                        <img className="dismiss_img" src={dismiss}/>
                    </div>
               </div>}
            </div>
        );
    }
}
export default PhotoPicker;