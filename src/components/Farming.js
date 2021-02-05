import React, { Component } from 'react';
import 'typeface-montserrat';
import './style.css';
import { AiOutlineCloudUpload } from "react-icons/ai";

class Farmimg extends Component {
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    onSubmit=()=>{
        
        alert("submitted");
      }
      onBack=()=>{
        this.props.history.push('/Mapselect'); 
      }
      
    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} alt="" className="box2"/>);
        }
    
        return(
            
         <div>
             <div className="main">
                 
         <div className="add">Add Farms</div>
         <button className="farms"><center><div className="text1">Farm List</div></center></button>
         
         <div className='box1' >
            <AiOutlineCloudUpload className='icon1'/>
            <input type="file" name="uploadfile" id="img" onChange={this._handleImageChange} style={{display:"none"}} />{$imagePreview}
<label for="img" className='click1'>Click&nbsp;to&nbsp;upload&nbsp;Farm&nbsp;Image</label>
        </div>
         <p onClick={this.onBack} style={{position:'absolute',top:'20px'}}><center><div className="back">Back</div></center></p>
        <button onClick={this.onSubmit} className="button"><center><div className="text2 text4">Submit</div></center></button>
        </div></div>)}}
        export default Farmimg;