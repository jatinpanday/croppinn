import React, { Component } from 'react';
import 'typeface-montserrat';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Basicdetails extends Component {
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
              fields
            });}
            submituserRegistrationForm(e) {
               e.preventDefault();
               if (this.validateForm()) {
                   let fields = {};
                   fields["farmname"] = e.target.farmname.value;
                   fields["address"] = e.target.address.value;
                   fields["city"] = e.target.city.value;
                   fields["pincode"] = e.target.pincode.value;
                   //fields["states"]=e.target.state.value;
                   this.setState({fields:fields});
                   this.props.history.push('/Farmdetails');
               }}
              
                validateForm() {

                  let fields = this.state.fields;
                  let errors = {};
                  let formIsValid = true;
            
                  if (!fields["farmname"]) {
                    formIsValid = false;
                    errors["farmname"] = "*Please enter your farm name.";
                  }
            
                  if (typeof fields["farmname"] !== "undefined") {
                    if (!fields["farmname"].match(/^[a-zA-Z ]*$/)) {
                      formIsValid = false;
                      errors["farmname"] = "*Please enter alphabet characters only.";
                    }
                  }
                  
                  if (!fields["city"]) {
                     formIsValid = false;
                     errors["city"] = "*Please enter your city name.";
                   }
             
                   if (typeof fields["city"] !== "undefined") {
                     if (!fields["city"].match(/^[a-zA-Z]*$/)) {
                       formIsValid = false;
                       errors["city"] = "*Please enter alphabet characters only.";
                     }
                   }
                   if (!fields["address"]) {
                     formIsValid = false;
                     errors["address"] = "*Please enter your address.";
                   }
             
                  
            
                  
            
                  if (!fields["pincode"]) {
                    formIsValid = false;
                    errors["pincode"] = "*Please enter your pincode.";
                  }
            
                  if (typeof fields["pincode"] !== "undefined") {
                    if (!fields["pincode"].match(/^[0-9]{6}$/)) {
                      formIsValid = false;
                      errors["pincode"] = "*Please enter valid pincode.";
                    }
                  }
                  if(document.getElementById("st").value===""){
                    errors["states"]="*Please select any option.";
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
        <button className="farms"style={{borderRadius:'25px'}}><center><div className="text1">Farm List</div></center></button>
        <form onSubmit= {this.submituserRegistrationForm}>
        <Row>
           <Col>
           <label className="lfarm">Farm Name</label><br/>
           <input className="ifarm" type="text" name="farmname" value={this.state.fields.farmname} onChange={this.handleChange}></input>
           <div className="errorMsg">{this.state.errors.farmname}</div>
           </Col>
           <Col><label className="lfarmdetails" >Address</label><br/>
           <input className="ifarmdetails" name="address" value={this.state.fields.address} onChange={this.handleChange} type="text"></input>
           <div className="errorMsg1">{this.state.errors.address}</div>
           </Col>
        </Row>
        <Row>
          <Col><label className="city">City</label><br/>
           <input className="icity" type="text" name="city" value={this.state.fields.city} onChange={this.handleChange}></input>
           <div className="errorMsg2">{this.state.errors.city}</div>
           </Col>
          <Col><label className="citydetails">Pincode</label><br/>
           <input className="icitydetails" type="number" name="pincode" value={this.state.fields.pincode} onChange={this.handleChange}></input>
           <div className="errorMsg3">{this.state.errors.pincode}</div>
           </Col>
        </Row>
       <Row>
          <Col><label className="state">State</label><br/>
           <select className="istate" name="states" id="st"   onChange={this.handleChange}><option value=""></option>
           <option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option></select>
           
           <div className="errorMsg4">{this.state.errors.states}</div>
           </Col>
        </Row>
        <button className="button"><center><div className="text2">Next</div></center></button>
        </form>
        </div></div>
          );
        }
        }
        export default Basicdetails;