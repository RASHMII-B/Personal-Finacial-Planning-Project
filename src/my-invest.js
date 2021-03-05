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
import '@polymer/paper-button/paper-button.js'
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-icon';
class MyInvest extends PolymerElement {
  static get template() {
    return html`
    <link rel = "stylesheet" 
    href = "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css">
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;}
          section{
            margin-left:40px!;
            font-size:10px !important;
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
          h2{
            margin-left:100px !important;
          }
          h3{
            margin-left:100px !important;
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
          h2{
            font-size:25px !important;
         
          }
          h4{
            margin-left:40px!;
            font-size:20px !important;
          }
          h3{
            font-size:25px !important;
          }
          paper-button.custom {
            align:center;
            margin-left:600px;
            background-color: var(--paper-green-a200);
          } 
          paper-button.amount{
            background-color:#4B0082;
          }      
          @media only screen and (max-width: 480px){
            h2{
              font-size:25px !important;
            }
            .back{
              overflow:hidden;
            }
            h2{
              margin-left:0px !important;
            }
            h3{
              margin-left:0px !important;
            }
            paper-button.custom {
              align:center;
              margin-left:100px  !important;
              background-color: var(--paper-green-a200);
            } 

           }
          
          footer {
            min-height: 100px;
            background-color: #ced4da;
          }  
         </style>
      <div class="back">
      <div class = "mdl-grid">
      <div class = "mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet  mdl-cell--12-col-phone graybox" style= "overflow-x:auto;">
      <h2>Investment Options</h2>
      <table id="customers">
<tr>
<th>Investment options</th>
<th>Interest</th>
<th>Amount</th>
<th>Period</th>
<th>Maturity amount</th>
</tr>
<tr>
<td>RD deposit</td>
<td>5.40%</td>
<td>100000</td>
<td>24 Months</td>
<td>1440024</td>
</tr>
<tr>
<td>Fund</td>
<td>6%</td>
<td>100000</td>
<td>12 Months</td>
<td>1500012</td>
</tr>
<tr>
<td>FD deposit</td>
<td>5.8%</td>
<td>100000</td>
<td>12 Months</td>
<td>1480012</td>
</tr>
<tr>
<td>Real estate</td>
<td>6.4%</td>
<td>700000</td>
<td>12 Months</td>
<td>1539987</td>
</tr>
<tr>
<td>Life Insurance</td>
<td>3%</td>
<td>10000</td>
<td>56 Months</td>
<td>12040</td>
</tr>
</table>      
                  
      </div>
      <div class = "mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet  mdl-cell--12-col-phone graybox">
      <h2>Maturity Amount Calculation</h2>
      <div class="card">
  <paper-input always-float-label  label="Principal" id="principal" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>
     <paper-input always-float-label  label="Interest"  id="annual" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input>
       <paper-input always-float-label   label="Peroid" id="peroid" required auto-validate error-message="Provide valid details!"  pattern="[0-9]*"></paper-input><br>
       <paper-button raised class=" amount cal" on-click="compound" >Calculate Interest</paper-button>  
 
      <h2>Maturity Amount: [[Amount]]</h2>
      </div>      
      </div>

   </div>
  <h3><center><u>IMPORTANCE OF INVESTING </u></center></h3>
  <section>
  <h4>Investment: Investments mean buying assets that you expect to generate a better rate of return in the near future. Some investments are risky; so you should analyze the market trends properly before making a decision. People usually invest in stocks, bonds, mutual funds, real estate, private companies, commodities, and art. Investing is a complex process and we would recommend you to seek the advice of professionals when you need to analyze the difference between risk and rewards.
  Investing with a personal finance expert will help you with your personal circumstances, objectives and risk tolerance. We ensures you do the right types of investments to fit your needs, lifestyle, and goals.
  </h4>
  </section>
  <section>
  <h4>Income: It’s possible to manage income effectively. You need to calculate how much you make on an annual basis, which is inclusive of salaries, bonuses, pensions, and dividends. Once you have an exact figure, you can divide this amount into expenses, savings, and investments. A personal finance expert can help you derive the income and further plan the spend.
  </h4>
  </section>

  <div class="paperbutton">
  <paper-button raised class="custom indigo" on-click="home" >Homepage</paper-button>
  </div>
  
  <!--adding footer-->
  <footer>
<h2><center>@Uniquehire.in</center></h2>
</footer>

</div>
   
    `;
  }
// navigation to homepage
  home(){
    this.set('route.path','/dashboard');
  }
  // taking data from paper inputs 
  compound(){
    var principal=this.$.principal.value;
    var annual=this.$.annual.value;
    var peroid=this.$.peroid.value;
  //  calculating matured amount
     this.Amount = ((principal*(1+annual)^peroid)-principal);
  
  }
  static get properties() {
    return {
      Amount: {
        type: Number,
      }
    }
  }

}

// registering elements with browser
window.customElements.define('my-invest', MyInvest);
