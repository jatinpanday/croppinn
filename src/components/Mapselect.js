import React, { Component } from 'react';
import './style.css';
class Mapselect extends Component {
 
      onSubmit = () => {
        this.props.history.push('/Ownerdetails'); 
       }
       onSubmit1 = () => {
           this.props.history.push('/Farmimg');
       }
  render(){
        return(
            <div>
            <div className="add">Add Farms</div>
            <button className="farms"><center><div className="text1">Farm List</div></center></button>

<div className="poly">Click to draw polygon</div>
<button type="undo" className="undo">undo</button>

       <a href="https://www.google.com/maps/@17.8770131,79.2770309,7z">
          <img src="/imgs/gmap.png" className="gpic" alt=''/>
       </a>
       <button  className="button" onClick={this.onSubmit1} style={{position:'absolute',top:'950px'}}><center><div className="text2">Next</div></center></button>
        <button className='back' onClick={this.onSubmit} style={{position:'absolute',top:'950px'}}>Back</button>

</div>
);
    }
  }
export default Mapselect;