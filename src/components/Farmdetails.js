import React, { Component } from 'react';
import 'typeface-montserrat';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Farmdetails extends Component {
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
          fields["weatherconditions"] = e.target.weatherconditions.value;
          fields["irrigationsystem"] = e.target.irrigationsystem.value;
          fields["surveyno"] = e.target.surveyno.value;
                   this.setState({fields:fields});
                   this.props.history.push('/Ownerdetails');
                  
               }}
               onSubmit = () => {
                this.props.history.push('/');
               }
                validateForm() {

                  let fields = this.state.fields;
                  let errors = {};
                  let formIsValid = true;
                  if(document.getElementById('soil').value===""){
                    formIsValid=false;
                    errors['soiltype']="*please select any option.";
                  }
                  if (!fields["weatherconditions"]) {
                    formIsValid = false;
                    errors["weatherconditions"] = "*Please enter the conditions of weather.";
                  }
            
                  if (typeof fields["weatherconditions"] !== "undefined") {
                    if (!fields["weatherconditions"].match(/^[a-zA-Z ]*$/)) {
                      formIsValid = false;
                      errors["weatherconditions"] = "*Please enter alphabet characters only.";
                    }
                  }
                  if (!fields["irrigationsystem"]) {
                    formIsValid = false;
                    errors["irrigationsystem"] = "*Please enter the type of irrigation.";
                  }
            
                  if (typeof fields["irrigationsystem"] !== "undefined") {
                    if (!fields["irrigationsystem"].match(/^[a-zA-Z ]*$/)) {
                      formIsValid = false;
                      errors["irrigationsystem"] = "*Please enter alphabet characters only.";
                    }
                  }
                  if (!fields["surveyno"]) {
                    formIsValid = false;
                    errors["surveyno"] = "*Please enter the survey no.";
                  }
            
                  if (typeof fields["surveyno"] !== "undefined") {
                    if (!fields["surveyno"].match(/^[0-9]*$/)) {
                      formIsValid = false;
                      errors["surveyno"] = "*Please enter the survey no.";
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
           
           <div className="soiltype">
           <label className="lfarm">Soil Type</label><br/>
           <select className="ifarm" name="soiltype"id='soil'onChange={this.handleChange}><option value=""></option>
           <option value="Alluvial_soil">Alluvial_Soil</option><option value="Black_Soil">Black_Soil</option>
           <option value='Red_Soil'>Red_Soil</option><option value='Laterite_Soil'>Laterite_Soil</option>
           <option value='Desert_Soil'>Desert_Soil</option>
           <option value="Mountain_Soil">Mountain_Soil</option>
           </select>
           <div className="errorMsg">{this.state.errors.soiltype}</div>
           </div>
    
           <Col><label className="mfarm" >Weather&nbsp;Conditions</label><br/>
           <input className="ifarmdropdown" name="weatherconditions" value={this.state.fields.weatherconditions} onChange={this.handleChange} type="text"></input>
           <div className="errorMsg">{this.state.errors.weatherconditions}</div>
           </Col>
        </Row>
        <Row>
          <Col><label className="city">Irrigation&nbsp;System</label><br/>
           <input className="icity" type="text" name="irrigationsystem" value={this.state.fields.irrigationsystem} onChange={this.handleChange}></input>
           <div className="errorMsg1">{this.state.errors.irrigationsystem}</div>
           </Col>
          <Col><label className="city2">Survey&nbsp;Number</label><br/>
           <input className="icity2" type="text" name="surveyno" value={this.state.fields.surveyno} onChange={this.handleChange}></input>
           <div className="errorMsg1">{this.state.errors.surveyno}</div>
           </Col>
        </Row>
       
        <button  className="button" ><center><div className="text2">Next</div></center></button>
        <button className='back' onClick={this.onSubmit}>Back</button>
        </form>
        </div></div>
          );
        }
        }
        export default Farmdetails;