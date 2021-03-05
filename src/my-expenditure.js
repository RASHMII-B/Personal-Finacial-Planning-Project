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


class MyExpenditure extends PolymerElement {
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
     
      </style>
    

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      
      <div class="row" "overflow-x:auto;">
      <div class="column">
        <h2>Monthly Expenses</h2>
        <table id="customers">
<tr>
<th>Sl no</th>


<th>Month</th>
<th>Household</th>
<th>Education</th>
<th>Health</th>
<th>Others</th>
</tr>


<tr>
<td>1</td>
<td>November</td>
<td>15000</td>
<td>10000</td>
<td>5000</td>
<td>10000</td>
</tr>

<tr>
<td>2</td>
<td>December</td>
<td>20000</td>
<td>10000</td>
<td>10000</td>
<td>5000</td>
</tr>

<tr>
<td>3</td>
<td>January</td>
<td>10000</td>
<td>10000</td>
<td>15000</td>
<td>10000</td>
</tr>

<tr>
<td>4</td>
<td>February</td>
<td>{{expenseData.house}}</td>
<td>{{expenseData.education}}</td>
<td>{{expenseData.health}}</td>
<td>{{expenseData.other}}</td>
</tr>
</table>
</div>
</div>


    
   `;
  }
  static get properties() {
    return {
      expenseData:{
        type:Object,
        value:{},
        notify:true
      }
    };
  }
  home(){
    this.set('route.path','/dashboard');
  }
}

// registering elements with browser
window.customElements.define('my-expenditure', MyExpenditure);
