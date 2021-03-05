

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-radio-button/paper-radio-button.js';





class MyRegister extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
   
      .card{
       width:50%;
       margin:0 auto;
        }

      .button{
       align:center;
      
    background-color: var(--paper-green-a200);

           }
          p{
            margin-left:100px;
          }
          
     
      @media only screen and (max-width: 680px){
        .card{
          width:100%;

         }
      }
      
       
  </style>


      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

 

      <!--creating register form using paper inputs-->
      <div class="body">
      <div class="card">
     <h1><center>Registration</center></h1>
      <paper-input always-float-label label="Name" id="name" required auto-validate error-message="Enter correct name!" auto-validate pattern="[a-zA-Z]*"></paper-input>
      
      <paper-input always-float-label label="Email" id="mail" required auto-validate error-message="Enter correct Email Id!" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"></paper-input>
         
      <paper-input id="phone" always-float-label label="Mobile No"  required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[0-9]*"></paper-input>
      
      <paper-input  always-float-label label="Address" id="address"  required auto-validate error-message="Enter correct address!" auto-validate pattern="[a-zA-Z]*"></paper-input>
         
      <paper-textarea label="Textarea label"></paper-textarea>
       
      <paper-input id="invest" always-float-label label="Investment/Annum" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>

         <paper-input id="income" always-float-label label="Income" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>
         <br>
       Want advice?     <paper-radio-button>Yes</paper-radio-button>
       <paper-radio-button >No</paper-radio-button><br><br>
    
    
   
    <paper-button raised class="button" on-click="register" >Submit</paper-button>
    <p>Want Advice from us?<paper-button on-click="users" class="pink">Click here</paper-button></p>
    </div>
     </div>

    `;
  }
  // validating name and password
  register(){
    if(this.$.name.value==""||this.$.mail.value==""||this.$.phone.value==""||this.$.address.value==""||this.$.invest.value==""||this.$.income.value==""){
      alert("Please enter details")
    }
   else {
    alert("Entered crt details")
    this.set('route.path','/login');
    location.reload();
   }
  }
  
 
 users(){
  //  navigating to webpage
  this.set('route.path','/users');
 }
}

// registering elements with browser
window.customElements.define('my-register', MyRegister);
