import React from 'react';
import './Dashboard.css';
import {AiOutlineArrowRight} from "react-icons/ai";
class Dashboard extends React.Component {
  
    render() {
        return (
            <div>
            <nav className="navbar">
          <div className="container">
            <ul>
              <li className='left'>
                <ul >
                  <li className='bottom'>Location</li>
                  <li><select>
                    <option>Agra, Pune, Mumbai...</option>
                    </select></li>
                </ul>
              </li>
              <li className='left'>
                <ul>
                  <li className='bottom'>Producers</li>
                  <li><select>
                    <option>potato, Apple...</option>
                    </select></li>
                </ul>
              </li>
              <li className='left'>
                <ul>
                  <li className='bottom'>Transportation</li>
                  <li><select>
                    <option>10 wheel truck...</option>
                    </select></li>
                </ul>
              </li>
              <li className='left'>
                <ul>
                  <li className='bottom'>Location</li>
                  <li><select>
                    <option>Agra, Pune, Mumbai...</option>
                    </select></li>
                </ul>
              </li>
              <li className='left'>
                <ul >
                  <li className='bottom'>Producers</li>
                  <li><select>
                    <option>Potato, Apple...</option>
                    </select></li>
                </ul>
              </li> 
            </ul>
          </div>
        </nav>
        <span className='lease'>FARMS FOR LEASE</span>
        <span className='view'>VIEW ALL</span>
          <div className="container">
              <div className="row" >
                  <div className="col-lg-3">
                  <div className="card shadow card1">
                      
                        <img className="card-img-top img-adjusted" src='/imgs/lease.jfif'alt='lease'/>
                        <button className='button'>14.0 Acre</button>
                         <div className="card-body">
                            <div className="card-title">Jaam Farm</div>
                            <div className="text">Rajkot, Gujarat, 36100</div>
                            <button  className="ftbtn">INR 12000+ per yr</button>
                        </div>
                      </div></div>
                      <div className='col-lg-3'><div className="card shadow card1">
                      
                      <img className="card-img-top img-adjusted" src='/imgs/lease.jfif'alt='lease'/>
                      <button className='button'>14.0 Acre</button>
                       <div className="card-body">
                          <div className="card-title">Jaam Farm</div>
                          <div className="text">Rajkot, Gujarat, 36100</div>
                          <button  className="ftbtn">INR 12000+ per yr</button>
                      </div>
                    </div></div>
                      <div className='col-lg-3'><div className="card shadow card1">
                      
                      <img className="card-img-top img-adjusted" src='/imgs/lease.jfif'alt='lease'/>
                      <button className='button'>14.0 Acre</button>
                       <div className="card-body">
                          <div className="card-title">Jaam Farm</div>
                          <div className="text">Rajkot, Gujarat, 36100</div>
                          <button  className="ftbtn">INR 12000+ per yr</button>
                      </div>
                    </div></div>
                      <div className='col-lg-3'><div className="card shadow card1">
                      
                      <img className="card-img-top img-adjusted" src='/imgs/lease.jfif'alt='lease'/>
                      <button className='button'>14.0 Acre</button>
                       <div className="card-body">
                          <div className="card-title">Jaam Farm</div>
                          <div className="text">Rajkot, Gujarat, 36100</div>
                          <button className="ftbtn">INR 12000+ per yr</button>
                      </div>
                    </div><AiOutlineArrowRight className='arrow'/></div>
                      </div>
                      <div className='row'>
                      <div className="col-lg-3">
                      <span className='sale'>FARMS FOR SALE</span>
                      <span className='view1'>VIEW ALL</span>
                  <div className="card shadow card2">
                        <img className="card-img-top img-adjusted" src='/imgs/lease.jfif'alt='lease'/>
                        <button className='button'>14.0 Acre</button>
                         <div className="card-body">
                            <div className="card-title">Jaam Farm</div>
                            <div className="text">Rajkot, Gujarat, 36100</div>
                            <button className="ftbtn1">INR 12000+</button>
                        </div>
                      </div>
                      </div>
                      <div className='col-lg-3'>
                        <div className="card shadow card2" style={{marginTop:'24px'}}>
                      <img className="card-img-top img-adjusted" src='/imgs/lease.jfif'alt='lease'/>
                      <button className='button'>14.0 Acre</button>
                       <div className="card-body">
                          <div className="card-title">Jaam Farm</div>
                          <div className="text">Rajkot, Gujarat, 36100</div>
                          <button className="ftbtn1">INR 12000+</button>
                      </div>
                    </div>
                </div>
                      <div className='col-lg-3'><div className="card shadow card2"style={{marginTop:'24px'}}>
                      
                      <img className="card-img-top img-adjusted" src='/imgs/lease.jfif'alt='lease'/>
                      <button className='button'>14.0 Acre</button>
                       <div className="card-body">
                          <div className="card-title">Jaam Farm</div>
                          <div className="text">Rajkot, Gujarat, 36100</div>
                          <button className="ftbtn1">INR 12000+</button>
                      </div>
                    </div>
                </div>
                      <div className='col-lg-3'><div className="card shadow card2"style={{marginTop:'24px'}}>
                      
                      <img className="card-img-top img-adjusted" src='/imgs/lease.jfif'alt='lease'/>
                      <button className='button'>14.0 Acre</button>
                       <div className="card-body">
                          <div className="card-title">Jaam Farm</div>
                          <div className="text">Rajkot, Gujarat, 36100</div>
                          <button className="ftbtn1">INR 12000+</button>
                      </div>
                    </div>
                <AiOutlineArrowRight className='arrow1'/></div>
                      </div>
                      <div className="row">
                      <div className="col-lg-3">
                      <span className='crops'>CROPS FOR SALE</span>
                      <span className='view1'style={{position:'relative',top:'290px'}}>VIEW ALL</span>
                  <div className="card shadow card3">
                      
                        <img className="card-img-top img-adjusted"style={{height:'145px'}} src='/imgs/sale.jfif'alt='lease'/>
                        <button className='button1'>14.0 Kg</button>
                         <div className="card-body">
                            <div className="card-title" style={{width: '51px',height: '18px'}}>Wheat</div>
                            <div className="text">Seeded</div><div className='text'style={{marginTop:'10px'}}>02 Mar 2021</div>
                            <button className="ftbtn2">INR 12000+</button>
                        </div>
                      </div></div>
                      <div className='col-lg-3'><div className="card shadow card3"style={{marginTop:'24px'}}>
                      
                      <img className="card-img-top img-adjusted"style={{height:'145px'}} src='/imgs/sale.jfif'alt='lease'/>
                      <button className='button1'>14.0 Kg</button>
                       <div className="card-body">
                          <div className="card-title" style={{width: '51px',height: '18px'}}>Wheat</div>
                          <div className="text">Seeded</div><div className='text'style={{marginTop:'10px'}}>02 Mar 2021</div>
                          <button className="ftbtn2">INR 12000+</button>
                      </div>
                    </div></div>
                      <div className='col-lg-3'><div className="card shadow card3"style={{marginTop:'24px'}}>
                      
                      <img className="card-img-top img-adjusted"style={{height:'145px'}} src='/imgs/sale.jfif'alt='lease'/>
                      <button className='button1'>14.0 Kg</button>
                       <div className="card-body">
                          <div className="card-title" style={{width: '51px',height: '18px'}}>Wheat</div>
                          <div className="text">Seeded</div><div className='text'style={{marginTop:'10px'}}>02 Mar 2021</div>
                          <button className="ftbtn2">INR 12000+</button>
                      </div>
                    </div></div>
                      <div className='col-lg-3'><div className="card shadow card3"style={{marginTop:'24px'}}>
                      
                      <img className="card-img-top img-adjusted"style={{height:'145px'}} src='/imgs/sale.jfif'alt='lease'/>
                      <button className='button1'>14.0 Kg</button>
                       <div className="card-body">
                          <div className="card-title" style={{width: '51px',height: '18px'}}>Wheat</div>
                          <div className="text">Seeded</div><div className='text'style={{marginTop:'10px'}}>02 Mar 2021</div>
                          <button className="ftbtn2">INR 12000+</button>
                      </div>
                    </div><AiOutlineArrowRight className='arrow1' style={{top:'140px'}}/></div>
                      </div>
                      <div className='row'>
                      <div className="col-lg-3">
                      <span className='crops' style={{top:'340px'}}>BOOK WAREHOUSE</span>
                  <div className="card shadow card4">
                        <img className="card-img-top img-adjusted" src='/imgs/warehouse.jfif'alt='lease'height='144px'/>
                        <button className='button1'>99.0 Ton</button>
                         <div className="card-body">
                            <div className="card-title"style={{width:'97px'}}>Kailash Agro</div>
                            <div className="text">Rajkot, 360001</div>
                            <div className='text' style={{marginTop:'10px'}}>Gujarat</div>
                        </div>
                      </div></div>
                      <div className='col-lg-3'><div className="card shadow card4"style={{marginTop:'24px'}}>
                        <img className="card-img-top img-adjusted" src='/imgs/warehouse.jfif'alt='lease'height='144px'/>
                        <button className='button1'>99.0 Ton</button>
                         <div className="card-body">
                            <div className="card-title"style={{width:'97px'}}>Kailash Agro</div>
                            <div className="text">Rajkot, 360001</div>
                            <div className='text' style={{marginTop:'10px'}}>Gujarat</div>
                        </div>
                      </div></div>
                      <div className='col-lg-3'><div className="card shadow card4"style={{marginTop:'24px'}}>
                        <img className="card-img-top img-adjusted" src='/imgs/warehouse.jfif'alt='lease'height='144px'/>
                        <button className='button1'>99.0 Ton</button>
                         <div className="card-body">
                            <div className="card-title"style={{width:'97px'}}>Kailash Agro</div>
                            <div className="text">Rajkot, 360001</div>
                            <div className='text' style={{marginTop:'10px'}}>Gujarat</div>
                        </div>
                      </div></div>
                      <div className='col-lg-3'>
                      <div className="card shadow card4"style={{marginTop:'24px'}}>
                        <img className="card-img-top img-adjusted" src='/imgs/warehouse.jfif'alt='lease'height='144px'/>
                        <button className='button1'>99.0 Ton</button>
                         <div className="card-body">
                            <div className="card-title"style={{width:'97px'}}>Kailash Agro</div>
                            <div className="text">Rajkot, 360001</div>
                            <div className='text' style={{marginTop:'10px'}}>Gujarat</div>
                        </div>
                      </div>
                      <span className='view1'style={{position:'relative',left:'250px',top:'65px'}}>VIEW ALL</span>
                        <AiOutlineArrowRight className='arrow' style={{left:'250px',top:'220px'}}/></div>
                  </div>
                  <div className='row'>
                      <div className="col-lg-3">
                      <span className='crops' style={{top:'390px'}}>BOOK TRANSPORT</span>
                  <div className="card shadow card5">
                        <img className="card-img-top img-adjusted" src='/imgs/transport.jfif'alt='lease'height='145px'/>
                        <button className='button1'>12.0/km</button>
                         <div className="card-body">
                            <div className="card-title"style={{width:'143px'}}>Kailash Transports</div>
                            <div className="text">12 Vehicles</div>
                            <div className='text' style={{marginTop:'10px'}}>Gujarat</div>
                        </div>
                      </div></div>
                      <div className='col-lg-3'><div className="card shadow card5"style={{marginTop:'24px'}}>
                        <img className="card-img-top img-adjusted" src='/imgs/transport.jfif'alt='lease'height='145px'/>
                        <button className='button1'>12.0/km</button>
                         <div className="card-body">
                            <div className="card-title"style={{width:'143px'}}>Kailash Transports</div>
                            <div className="text">12 Vehicles</div>
                            <div className='text' style={{marginTop:'10px'}}>Gujarat</div>
                        </div>
                      </div></div>
                      <div className='col-lg-3'><div className="card shadow card5"style={{marginTop:'24px'}}>
                        <img className="card-img-top img-adjusted" src='/imgs/transport.jfif'alt='lease'height='145px'/>
                        <button className='button1'>12.0/km</button>
                         <div className="card-body">
                            <div className="card-title"style={{width:'143px'}}>Kailash Transports</div>
                            <div className="text">12 Vehicles</div>
                            <div className='text' style={{marginTop:'10px'}}>Gujarat</div>
                        </div>
                      </div></div>
                      <div className='col-lg-3'>
                      <div className="card shadow card5"style={{marginTop:'24px'}}>
                        <img className="card-img-top img-adjusted" src='/imgs/transport.jfif'alt='lease'height='145px'/>
                        <button className='button1'>12.0/km</button>
                         <div className="card-body">
                            <div className="card-title"style={{width:'143px'}}>Kailash Transports</div>
                            <div className="text">12 Vehicles</div>
                            <div className='text' style={{marginTop:'10px'}}>Gujarat</div>
                        </div>
                      </div>
                      <span className='view1'style={{position:'relative',left:'250px',top:'115px'}}>VIEW ALL</span>
                        <AiOutlineArrowRight className='arrow' style={{left:'250px',top:'280px'}}/></div>
                  </div>
                </div>
                </div>
    );
}


}


export default Dashboard;