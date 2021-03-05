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
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-layout/app-grid/app-grid-style';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@material/mwc-icon';

class MyDashboard extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
          }
       
        paper-card{
        width:300px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        transition: all 0.15s ease;
        border: none;
           }
          .card:hover {
          box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
            }
         
       .flex {
           @apply(--layout-horizontal);
           text-align: justify;
          -ms-text-justify: distribute-all-lines;
          text-justify: distribute-all-lines;
          width:100%;}

      .card {
        margin-left: 5px;
        margin-right: 5px;
        width:300px;
          }
      
      .container{
         margin-left:100px;
       }
     paper-card{
        column-gap: 90px;
       }
      .card{
        margin-right:100px;
      }
      
      footer {
        min-height: 100px;
        background-color: #ced4da;
      }
     
     li p paper-button{
      float:left;
       }
     
     
      img{
        width:100%;
       
         }
         

      footer h2{
        margin-top:70px;
        font-size:30px;
          }
      p{
        margin-left:20px;
          }
      .fancy{
        
          font-size: 6.5rem;
          color: #f15555;
          margin-left:100px;
           }
        .fancy1{
         font-size: 6.5rem;
         color: #74b876;
          margin-left:100px;
        }
        .fancy2{
          font-size: 6.5rem;
          color: black;
           margin-left:100px;
         }
         .container{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
         }
         .body{
           overflow-x:hidden;
         }

 
      

         @media (min-width: 320px) and (max-width: 480px) {
          .card{
            position: relative;
            right:50px;
            margin-left:0px !important;
           }
        
         .investdown{
          position:relative;
          top:0px;
         }
         .homeright{
           position:relative;
           right:210px;
           bottom:60px;

         }

         .image{
          position:relative;
          bottom:40px;
      }
        }

         @media only screen and (max-width: 900px) and (min-width: 480px){
          paper-card{
            position: relative;
            right:250px;
            width:650px;
           }
          
          .investdown{
           position:relative;
           top:57px;
          }
          .homeright{
            position:relative;
            right:60px;
          }
         
          
         }


         .wrapper {
          height: 65px;
          display: flex;
          align-items: center;
          justify-content:center;
         
        }
        
        nav {
          display: flex;
          width: 90%;
        }
        
        ul li a {
          margin-left: 1.5em;
        }
        
        a.logo {
          margin-right: auto;
        }
        
        ul {
          display: flex;
          list-style: none;
          margin: 0px;
          padding: 0px;
        }
        
        a {
          text-decoration: none;
          color: black;
          position: relative;
          font-size: 1.25em;
        }
        
        a::after {
          content:"";
          top: 80%;
          border-bottom: 2px solid #F8E71C;
          transition: all 0.35s;
          position: absolute;
        }
        
      
        
        a::after {
          right: 50%;
          left: 50%;
        }
        
     
        
        @media (max-width: 1024px) {
          .wrapper {
            height: auto;
          }
          
          nav {
            flex-direction: column;
            align-items: center;
          }
          
          a.logo {
            margin-top: 1.5em;
            margin-bottom: 1.5em;
            margin-right: 0px;
          }
          
          ul {
            width: 100%;
            margin-bottom: 1em;
            justify-content: flex-start;
          }
          
          ul li a {
            margin-left: 0px;
          }
          img{
            margin-top:30px !important;
          }
        }
        
        @media (max-width: 768px) {
          a.logo {
            margin: 1.5em;
            width:100%;
            
          }
         
          .navmenu {
            
            flex-direction:flex-end;
          }
          ul {
            
            flex-direction: column;
          }
          
          ul li {
            display:flex;
            margin: -0.5em;
            text-align: center;
            flex-direction: column;
          }
          
          ul li a {
            margin-left: 0px;
          }
        }


      
          </style>

 <!--creating navigation-->     
<div class="body">

<div class="wrapper">
  <nav>
    <a href="#" class="logo">Financial Planning</a>
    <div class="navmenu">
    <ul>
    
      <li>
      <a name="planning" href="[[rootPath]]planning"><paper-button >Planning</paper-button></a>
      </li>
      <li>
      <a name="invest" href="[[rootPath]]invest"><paper-button >Invest</paper-button></a>
      </li>
     
      <li>
      <a name="logout" href="[[rootPath]]login" on-click="loginpage"><paper-button >logout</paper-button></a>
      </li>
    </ul>
    </div>
  </nav>

  </div>





   
	<div class="image">
<img src="./images/invest.jpg" draggable="false"/>
</div>

<!--using paper cards-->
<div class="container flex">
<div class="card">
  <paper-card heading="Planning"> <mwc-icon class="fancy"><span class="material-icons">
  assessment red 
  </span></mwc-icon>
    <div class="card-content">
   <p> Financial Planning is the process of determining ways to earn, save and spend money and the amount you need to earn, invest and spend. By planning your finances, you manage your money such that you reach your life goals.</p>
  </div>
<p>more information?<paper-button  on-click="planning" class="pink" >click here</paper-button></p>
</paper-card>
</div>


<div class="card">
  <paper-card heading="Investment"> <mwc-icon class="fancy1"><span class="material-icons">
  paid
  </span></mwc-icon> 
    <div class="card-content">
   <p> Investments mean buying assets that you expect to generate a better rate of return in the near future. investing is risky process, Investing is a complex process and we would recommend you to seek the advice of professional.</p>
  </div>
<p>more information?<paper-button on-click="invest" class="pink" >click here</paper-button></p>
</paper-card>
</div>

<div class="card">
  <paper-card heading="Examples">  <mwc-icon class="fancy2">account_circle</mwc-icon> 
    <div class="card-content">
   <p> finacial planning differs from person to person , based on income people can manage their finacial plans ,  It predominantly deals with preservation, growth and further accumulation of the existing wealth , </p>
  </div>
<p>more information?<paper-button on-click="example" class="example" >click here</paper-button></p>
</paper-card>
</div>
</div>

<!--adding footer-->
<footer>
<h2><center>@Uniquehire.in</center></h2>
</footer>
</div>



    `;
  }
  // navigating dashboard page to planning page

  planning(){
  
      this.set('route.path','/planning');
   }
  //  nagiating to invest page
   invest(){
     this.set('route.path','/invest');
}
//  nagiating to users page
example(){
  this.set('route.path','/example');
}
loginpage(){
  this.set('route.path','/login');
  location.reload();
}


  }

window.customElements.define('my-dashboard', MyDashboard);
