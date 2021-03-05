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
import '@polymer/paper-button/paper-button.js';
import '@material/mwc-icon';

class WebUsers extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
    
      body{
        background-image: linear-gradient(to right,#f5f7fa , #c3cfe2);
      } 
      img{
          margin-left:200px;
      }
   
      .card{
        width:500px;
        margin-left:90px;
        margin-top:0px;
        position:relative;
        bottom:190px;
        left:250px;
     
      }
      .button{
        margin-left:200px;
     
        background-color: var(--paper-green-a200);
      }
      #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      
      #customers tr:nth-child(even){background-color: #f2f2f2;}
      
      #customers tr:hover {background-color: #ddd;}
      
      #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color:#4B0082;
        color: white;
      }
      .column {
        float: left;
        width: 45%;
        padding: 20px;
        height: 600px;
      }
     
      table{
        margin-left:10px;
      }
      @media only screen and (max-width: 480px){
        .table{
          position: relative;
          right:700px;
           top:10px;
           width:300px;
          overflow-x:hidden;
          overflow-y:hidden;
          
         }
         .card{
          position: relative;
          right:500px;
           top:20px;
           width:300px;
          overflow-x:hidden;
          overflow-y:hidden;
         }
       }
       @media only screen and (max-width: 1100px) and (min-width: 480px){
      .table{
          position: relative;
          right:40px;
           top:90px;
           width:1100px;
          overflow-x:hidden;
          overflow-y:hidden;
          
         }
         .card{
          position: relative;
          right:30px;
           top:20px;
           width:600px;
          overflow-x:hidden;
          overflow-y:hidden;
         }
       }
       paper-button.custom {
     margin-top:20px;
      align:center;
       margin-left:200px;
      
 }
   
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
    
     
<div class="row">
<div class="column">
<h1>People who are investing</h1>
  <table id="customers">
  <tr>
  <th>Name</th>
  <th>Mobile </th>
  <th>Email</th>
   <th>Address</th>
   <th>Amount invested</th>
  </tr>
  <tr>
  <td>John</td>
  <td>9843984375</td>
  <td>john@example.com</td>
    <td>Bangalore</td>
    <td>5000000</td>
  </tr>
  <tr>
  <td>Mary</td>
  <td>9843989834</td>
  <td>mary@example.com</td>
  <td>Chennai</td>
  <td>3000000</td>
  </tr>
  <tr>
  <td>July</td>
  <td>9123764598</td>
  <td>july@example.com</td>
    <td>Kerala</td>
    <td>1500000</td>
  </tr>
  <tr>
  <td>Jill</td>
  <td>9160578478</td>
  <td>jill@example.com</td>
    <td>Delhi</td>
    <td>2300000</td>
  </tr>
  <tr>
  <td>Eve</td>
  <td>9198672489</td>
  <td>july@example.com</td>
    <td>Kerala</td>
    <td>2500000</td>
  </tr>

</table>
</div>

<!--adding table-->
<div class="column">
<h1>People who are invested</h1>
<table id="customers"><tr>
<th>Name</th>
<th>Mobile </th>
<th>Email</th>
 <th>Address</th>
 <th>Amount investing</th>
</tr>
<tr>
<td>Thornton</td>
<td>9843984375</td>
<td>th@example.com</td>
  <td>Hyderabad</td>
  <td>2000000</td>
</tr>
<tr>
<td>Jacob</td>
<td>9843989834</td>
<td>jac@example.com</td>
<td>Chennai</td>
<td>4000000</td>

</tr>
<tr>
<td>Mark</td>
<td>9123764598</td>
<td>mark@example.com</td>
  <td>Kerala</td>
  <td>2000000</td>
</tr>
<tr>
<td>Johns</td>
<td>9123764598</td>
<td>johns@example.com</td>
  <td>Bangalore</td>
  <td>1500000</td>
</tr>
<tr>
<td>Smith</td>
<td>9123767846</td>
<td>smith@example.com</td>
  <td>Kerala</td>
  <td>4500000</td>
</tr>
</table>
</div>
</div><br>

     
<!--creating form using paper inputs-->
<div class="column">
<div class="card">
<h1><center>Contact Us</center></h1>
<paper-input always-float-label   label="Name" id="name" required auto-validate error-message="Enter correct name!"  auto-validate pattern="[a-zA-Z]*" ></paper-input>
<paper-input always-float-label label="Email" id="mail" required auto-validate error-message="Enter correct Email Id!" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"></paper-input>
<paper-input id="phone" always-float-label label="Mobile No"  required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[0-9]*"></paper-input>
<paper-input  always-float-label label="Message"></paper-input>
<paper-button raised class="button" on-click="contact">SUBMIT</paper-button>

<div class="paperbutton">
<paper-button raised class="custom indigo"  on-click="loginpage" >Loginpage</paper-button>
</div>
</div>

</div>




   `;
  }
  // naviagting to loginpage
  loginpage(){
    this.set('route.path','/login');
  }
  // validating filedsin contact form
  contact(){
   
      if(this.$.name.value==""||this.$.mail.value==""||this.$.phone.value==""){
        alert("Please enter details")
      }
     else {
       alert("Your submission received we will let you know soon")
     }
      }
}

// registering elements with browser
window.customElements.define('web-users', WebUsers);
