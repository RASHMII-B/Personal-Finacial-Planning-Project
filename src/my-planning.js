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
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';


class Planning extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>
  
    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>

    <style>
    * {
      box-sizing: border-box;
    }
    
    input[type=text], select, textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: vertical;
    }
    
    label {
      padding: 12px 12px 12px 0;
      display: inline-block;
    }
    
    input[type=submit] {
      background-color: #4CAF50;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      float: right;
    }
    
    input[type=submit]:hover {
      background-color: #45a049;
    }
    
    .container {
      border-radius: 5px;
      background-color: #f2f2f2;
      padding: 20px;
    }
  
    .col-75 {
      float: left;
      width: 100%;
      margin-top: 6px;
    }
    
    /* Clear floats after the columns */
    .row:after {
      content: "";
      display: table;
      clear: both;
    }
    img{
      margin-left:200px;
    }
    paper-input{
      margin-top:15px;
    }
    .btngroup{
      margin-top:50px;
      margin-left:40px;
    }
    .tag{
      margin-left:450px;
      font-size:25px;
    }
    h1{
      font-size:45px;
      margin-left:200px;
    }
   
    paper-button.indigo {
      background-color: var(--paper-indigo-500);
      color: white;
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
      };
    }

    @media only screen and (max-device-width: 1180px){
      .responsive {
        width: 100%;
        height: auto;
        margin-left:0px;
      }
      .col-25, .col-75, input[type=submit] {
        width: 100%;
        margin-top: 0;}
      h1{
        font-size:25px;
        margin-left:0px;
      }
      h2{
        font-size:15px;
      
      }
      .card paper-card{
        width:100%;
        border-radius:10px;
        margin-top:150px;
        margin-left:0px;
     } 
     .tag{
      margin-left:0px;
    }
     .card{
       overflow-x:hidden;
     }
     .btngroup{
      margin-top:0px !important;
      margin-left:0px !important;
    }
    .container{
      margin-left:0px !important;
      position:relative;
      left:0px;
      width:auto;
     
     }
     .button{
       margin-left:120px !important;
     }
    }
    
    
    .container{
     margin-left:20%;
     width:700px;
    }
    .button{
      align:center;
      margin-left:280px;
   background-color: var(--paper-green-a200);
  }
  </style>

  <div class="card"> 
    <paper-card>
  
    <p><h1>Financial planning chart</h1></p>
    
    <div class="imgg">
    <img src="../images/graph.jpg" alt="Nature" class="responsive" width="900" height="500">
    <div class="tag">
    <h2>Monthly Expenses</h2></div></div>
   
    
    <div class="container">
  <form action="/action_page.php">
   
    <div class="row">
      <div class="col-75">
      <paper-input id="income" value={{incomeexpense}} always-float-label label="Income" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>
      </div>
     </div>

    <div class="row">
      <div class="col-75">
      <paper-input id="house" value="{{houseexpense}}" always-float-label label="Household" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>
      </div>
    </div>

   <div class="row">
      <div class="col-75">
      <paper-input id="education" value="{{educationexpense}}" always-float-label label="Education" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>
      </div>
    </div>

    <div class="row">
    <div class="col-75">
    <paper-input id="health" value="{{healthexpense}}" always-float-label label="Health" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>
    </div>
  </div>

  <div class="row">
  <div class="col-75">
  <paper-input id="other" value="{{otherexpense}}"  always-float-label label="Others" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>
  </div>
</div><br>

 <div class="row">
    <paper-button raised class="button" on-click="register" >Submit</paper-button>
    </div>
  </form>
  </paper-card>
    </div> 

    `;
  }
  static get properties() {
    return {
      incomeexpense: {
        type: Number,
        },
        houseexpense: {
        type: Number,
      
      },
      educationexpense: {
        type: Number,
       
      },
      healthexpense: {
        type: Number,
       
      },
      otherexpense: {
        type: Number,
       
      },
      expenseData:{
        type:Object,
        value:{},
        notify:true
      },
    }
  }


  register(){
    this.expenseData={

      "income": this.incomeexpense,

      "house": this.houseexpense,
      "education": this.educationexpense,
      "health": this.healthexpense,
      "other": this.otherexpense,
    }
    this.set('route.path','/expenditure');
  //   if(this.$.name.value==""||this.$.income.value==""||this.$.house.value==""||this.$.education.value==""||this.$.health.value==""||this.$.other.value==""){
  //     alert("Please enter details")
  //   }
  //  else {
  //   alert("Entered crt details")
  //   this.set('route.path','/expenditure');
  //   location.reload();
  //  }
  }
  navigateExisting(){
    this.set('route.path','existinguser');
  }
  
  navigateNew(){
    this.set('route.path','newuser');
  }
}

window.customElements.define('my-planning', Planning);
