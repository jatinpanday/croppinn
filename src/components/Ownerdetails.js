import React, { Component } from 'react';
import 'typeface-montserrat';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiInfoCircle } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
class Ownerdetails extends Component {
   constructor(props) {
      super(props);
      this.state = {
        fields:{},
        errors: {},

    
      }
      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
         };
         handleChange(e) {
            let fields = this.state.fields;
            fields[e.target.name] = e.target.value;
            this.setState({
              fields :fields
            });
          }
            submituserRegistrationForm(e) {
               e.preventDefault();
               if (this.validateForm()) {
                   let fields = {};
          fields["ownername"] = e.target.ownername.value;
                   this.setState({fields:fields});
                   this.props.history.push('/Mapselect');
               }}
               onSubmit = () => {
                this.props.history.push('/Farmdetails'); 
               }
               
                validateForm() {

                  let fields = this.state.fields;
                  let errors = {};
                  let formIsValid = true;
                  if(document.getElementById('land').value===""){
                    formIsValid=false;
                    errors['land']="*please select any option.";
                  }
                 
                  if (!fields["ownername"]) {
                    formIsValid = false;
                    errors["ownername"] = "*Please enter the owner name.";
                  }
            
                  if (typeof fields["ownername"] !== "undefined") {
                    if (!fields["ownername"].match(/^[a-zA-Z ]*$/)) {
                      formIsValid = false;
                      errors["ownername"] = "*Please enter alphabet characters only.";
                    }
                  }
                
                  this.setState({
                    errors: errors
                  });
                  return formIsValid;
            
            
                }    
               
  render(){
       return(
        <div>
            <div className="main">
                
        <div className="add">Add Farms</div>
        <button className="farms"><center><div className="text1">Farm List</div></center></button>
        <form onSubmit= {this.submituserRegistrationForm}>
        <Row>
           <Col>
           <label className="lfarm" >Farm&nbsp;Owner&nbsp;Name</label><br/>
           <input className="ifarm"  name="ownername" value={this.state.fields.ownername} onChange={this.handleChange} type="text"></input>
           <div className="errorMsg">{this.state.errors.ownername}</div>
           </Col>
           <Col><label className="lfarm2" >Are&nbsp;you&nbsp;the&nbsp;owner&nbsp;of&nbsp;the&nbsp;land?</label><br/>
           <select className="ifarm2" name="land" id='land' onChange={this.handleChange}>
               <option value=''></option>
               <option value='yes'>Yes</option>
               <option value='no'>No</option>
           </select>
           <div className="errorMsg">{this.state.errors.land}</div>
        </Col>
        </Row>
        <Row>
          <Col>
          <div className='landlordupload'>Please Upload Landlord Documents <BiInfoCircle/></div>
          <div className='lbox' >
            <div className='doc'>Doc 1</div>
          </div>
          <div className='lbox' style={{position:'absolute',left:'400px'}}>
            <AiOutlineCloudUpload className='icon'/>
            <input type="file" name="uploadfile" id="img" style={{display:"none"}}  />
            <label for="limg" className='click'>Click&nbsp;to&nbsp;upload&nbsp;Doc</label>
        </div>
        </Col>

        <Col>
          <div className='ownerupload'>Please Upload Ownership Documents <BiInfoCircle/></div>
          <div className='obox' >
            <div className='doc'>Doc 1</div>
          </div>
          <div className='obox' style={{position:'absolute',left:'400px'}}>
            <AiOutlineCloudUpload className='icon'/>
            <input type="file" name="uploadfile" id="img" style={{display:"none"}}  />
            <label for="oimg" className='click'>Click&nbsp;to&nbsp;upload&nbsp;Doc</label>
        </div>
        </Col>
        </Row>
        <button  className="button"><center><div className="text2">Next</div></center></button>
        <button className='back' onClick={this.onSubmit}>Back</button>
        </form>
        </div></div>
          );
        }
        }
        export default Ownerdetails;