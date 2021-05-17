import React from 'react'
import  './dash.css'

class Header extends React.Component{
    
    render(){
        return(
    <div className="wrapper">
        <div className="sidebar col-2">
                <div className="head">
                    <img src="./images/logo.png" alt="" className="col-3"/>
                    <p id="firebase" className="col-2 d-flex align-content-center" style={{color: "white",textAlign: "center"}}>
                     Firebase</p>
                </div>
                <div className="projectoverview">
                    <a href="#" ><i className="fas fa-home"></i><p style={{display: "inlineBlock", fontSize: "18px", fontWeight: "600", lineHeight: "80px", color: "white"}}>  Project Overview</p></a>
                </div>
                <ul >
                    <li >
                        <a href="#"><p id="build" style={{marginBottom: "0px"}}>Build</p></a>
                            <ul>
                                <li><a href="/authentication/index.html" ><i className="fas fa-user-friends"  ></i>Authentication</a></li>
                                <li><a href="/firebase/index.html" ><i className="fas fa-fire"></i>Firestore</a></li>
                                <li><a href="#" ><i className="fas fa-server"></i>Realtime Database</a></li>
                                <li><a href="/storage/index.html"><i className="fas fa-folder"></i>Storage</a></li>
                                <li><a href="/hosting/index.html"><i className="fas fa-globe-americas"></i>Hosting</a></li>
                                <li><a href="/functions/index.html"><i className="fas fa-code"></i>Functions</a></li>
                                <li><a href="/machinelearning/index.html"><i className="fas fa-robot"></i>Machine Learning</a></li>
                                
                            </ul>
                    </li>
                </ul>
            </div>
        <div className="main_content ">
            
        <div className="info">
            <div className="top d-flex d-inline-block">
                <div className="col1 d-flex flex-row ">
                    <div className=" position-relative sticky-md-top dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                         data-bs-toggle="dropdown" aria-expanded="false">
                        Schemax
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">See all projects</a></li>
                        <li><a className="dropdown-item" href="#">Add a project</a></li>
                        <hr/>
                        <li><a className="dropdown-item disabled" href="#" >All Projects</a></li>
                        <li><a className="dropdown-item" href="#">Schemax</a></li>
                        
                        </ul>
                    </div>
                </div>
                <img  id="abc" src="./images/dashboard_main.png"  height="522px" alt=""/>
                <div className=" col2 d-flex d-inline-block col-11 " >
                    <div className="text  d-flex flex-column">
                        <p>
                            <p style={{paddingBottom: "80px", fontSize: "3.6em"}}>Analytics</p>
                            <p style={{paddingBottom: "0px",margin: "0px",lineHeight: "normal" }}>Get detailed 
                            analytics to measure and <br/>
                            analyze how users engage with your apps</p>
                            <div >
                                <input  id="button" type="button" value="Enable Google Analytics"></input>
                            </div>
                        </p>
                    </div>
                    <div className=" icons d-flex">
                        <ul className="d-flex">
                            <li ><a href="#">Go to docs</a></li>
                            <li><a href="#"><i className="fas fa-bell"></i></a></li>
                            <li><a href="#"><i className="fas fa-circle"></i></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="middle ">
            <h3>Learn more</h3>
            <div className="middle_main d-flex ">
                <div className=" middle_list col-4">
                    <ul>
                        <li><a href="#">
                            <div className="d-flex">
                                <i className="fas fa-cog"></i>
                                <div className="d-flex flex-column">
                                    <p id="top">How do I get started</p>
                                    <p id="bottom">view the docs</p>
                                </div>
                            </div></a>
                        </li>
                        <li><a href="#">
                            <div className="d-flex">
                                <i className="fas fa-info-circle"></i>
                                <div className="d-flex flex-column">
                                    <p id="top">How do analytics work?</p>
                                    <p id="bottom" >view the docs</p>
                                </div>    
                            </div></a>
                        </li>
                        <li><a href="#">
                            <div className="d-flex ">
                                <i className="fas fa-grin-alt"></i>
                                <div className="d-flex flex-column">
                                    <p id="top">What can analytics do for me?</p>
                                    <p id="bottom">Learn more</p>
                                </div>
                            </div></a>
                        </li>
                    </ul>
                </div>
                <div className="video ">
                    <iframe width="750px" height="340px" src="https://www.youtube.com/embed/8iZpH7O6zXo" title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen style={{borderBottom:"4px solid rgb(183, 63, 219)", borderRadius: "10px"}}></iframe>
                </div>
            </div>
            <hr/>
            <div>
                <h3>More features for develpoers</h3>
                <div className="cards d-flex "> 
                        <div className="predections col-4 ">
                            <div className="content d-inline-block">
                                <p id="head">predictions</p>
                                <p id="bottom1">Act on predicted user behavior</p>
                            </div>
                        </div>
                    <div className="config col-4 ">
                        <div className="content d-inline-block">
                            <p id="head">Remote Config</p>
                            <p id="bottom1">Coustomize and experiment with app </p>
                            <p id="bottom2">behavior</p>
                        </div>
                    </div>
                    <div className="dynamiclinks col-3">
                        <div className="content d-inline-block">
                            <p id="head">Dynamic Links</p>
                            <p id="bottom1">Deep link potential users to the right place</p>
                            <p id="bottom2">inside your app</p>
                        </div>
                    </div>
                </div>
                <div style={{textAlign: "right",paddingTop: "20px", fontFamily: "sans-serif", fontSize: "medium", fontWeight: "400"}}>
                <a href="#" style={{fontWeight: "600", fontSize: "20px"}}>See all Engage feartres</a></div>
                
            </div>
            
        </div>
        <br/>
        <br/><br/><br/>
    </div>
    <div className="bottom d-block">
            <div className="btext d-inline">
                <a href=""><p style={{marginBottom: "0px", fontSize: "20px"}}>See all Firebase features<i className="fas fa-arrow-right"></i></p></a>
            </div>
        </div>
    </div>
               
            
    )
}
}
export default Header;