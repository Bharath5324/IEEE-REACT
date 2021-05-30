import React from  'react';
import 'materialize-css';
import './Carousel.css';

const Carousel =()=>{
  var para = {
    "fontSize": "17px",
    "paddingBottom":"20px"
}

  return(

  <div id='society'>
    <h3 className="center-align light-blue-text text-darken-4">Our Societies</h3>
  <div class='row'>
  <div class="col s4 m4 l2">
      <div class="card white z-depth-0">
        <div class="card-image">
          <img src={require("./Images/CS.jpeg")} alt="CS" />
          <a class="btn-floating halfway-fab waves-effect waves-light  orange activator " ><i class="material-icons">radio_button_unchecked</i></a>
          <div class="card-reveal" >
      <span class="card-title grey-text text-darken-4">IEEE CS</span>
      <p>IEEE Computer Society (sometimes abbreviated the Computer Society or CS) is a professional society of the Institute of Electrical and Electronics Engineers (IEEE). Its purpose and scope is "to advance the theory, practice, and application of computer and information processing science and technology" and the "professional standing of its members."[2] </p>
    </div>
   
  </div>
        
        
      </div>
    </div>
  
  <div class="col s4 m4 l2">
      <div class="card white z-depth-0">
        <div class="card-image">
        <img src={require("./Images/SPS.jpeg")} alt="SPS" />
        <a class="btn-floating halfway-fab waves-effect waves-light green modal-trigger" href="#modal2"><i class="material-icons">radio_button_unchecked</i></a>
        <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p style={para}>Here is some more information about this product that is only revealed once clicked on.</p>
     </div>
  
        
        
        
    </div>
    </div>
  </div> 
  <div class="col s4 m4 l2">
      <div class="card  white z-depth-0">
        <div class="card-image">
        <img src={require("./Images/PES.jpeg")} alt="PES" />
        <a class="btn-floating halfway-fab waves-effect waves-light black modal-trigger" href="#modal3"><i class="material-icons">radio_button_unchecked</i></a>
        <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p style={para}>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
        
        
        
      </div>
    </div>
  </div>
  <div class="col s4 m4 l2">
      <div class="card  white z-depth-0">
        <div class="card-image">
        <img src={require("./Images/WiE.jpeg")} alt="WIE" />
        <a class="btn-floating halfway-fab waves-effect waves-light purple darken-3 modal-trigger" href="#modal4"><i class="material-icons">radio_button_unchecked</i></a>
        <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p style={para}>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
        
        
       
      </div>
    </div>
  </div> 
  <div class="col s4 m4 l2">
      <div class="card  white z-depth-0">
        <div class="card-image">
        <img src={require("./Images/IAS.jpeg")} alt="IAS" />
        <a class="btn-floating halfway-fab waves-effect waves-light  green darken-4 modal-trigger" data-target="modal5"><i class="material-icons">radio_button_unchecked</i></a> 
        <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p style={para}>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
      </div>
    </div>
  </div> 
  <div class="col s4 m4 l2">
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={require("./Images/PES.jpeg")} alt="SIGHT"/>
    
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>

  )
}
export default Carousel;

