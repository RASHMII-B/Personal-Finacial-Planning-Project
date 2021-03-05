/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
 import '@polymer/paper-input/paper-input.js';
  import '@polymer/paper-button/paper-button.js';
  import '@polymer/paper-card/paper-card.js';
 
  

 
  import './shared-styles.js';


class MyLogin extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
    :host {
      display: block;

      padding: 10px;
    }
    .column2 {
      width: 40%;
      margin: 0 auto;
      padding: 10px;
      margin-top:10%;
      height: 60%; 
    }
    paper-button.indigo {
      background-color: var(--paper-indigo-500);
      color: white;
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
     
      };
    }
    paper-button.custom{
      margin-left:180px;
    }
    

    @media only screen and (max-device-width: 1180px){
      .column2 {

        
      width:100%;
      margin-top:100px;
         
      }
    }
  </style>
  <!-- app location and app route -->
  <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
  </app-location>

  <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
  </app-route>
  <!-- User Card -->
  <div class="column2">
  <div class="card" style="background-color:#ECE6EE;">
    <h2><center>LOGIN</center></h2>
    <paper-input always-float-label id="name" label="Name" auto-validate pattern="[a-zA-Z]*" error-message="Enter valid details" char-counter maxlength="10" required></paper-input>
    <paper-input type="password" always-float-label label="Password" id="password"  required auto-validate error-message="Enter password!"> </paper-input><br>
  <paper-button raised class="custom indigo" on-click="login">Login</paper-button>
    <p>Don't have an account?<paper-button on-click="register" class="link">Click here</paper-button></p>
  </div>
  </div>



`;
  }
// validating name and password
  login(){
    if(this.$.name.value==""||this.$.password.value==""){
      alert("Please enter details")
    }
   else if(this.$.name.value=="rashmi"||this.$.password.value=="rashmi"){
    //  navigating to dashboard
      this.set('route.path','/dashboard');
    }else{
      alert("Enter crt details");
     
    }
}
// navigating to register page 
   register() {
  this.set('route.path','/register');
 }


}


// registering elements with browser
window.customElements.define('my-login', MyLogin);
