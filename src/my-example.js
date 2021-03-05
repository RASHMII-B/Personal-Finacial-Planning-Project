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

class MyExample extends PolymerElement {
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
      paper-button.custom {
        align:center;
        margin-left:600px;
        background-color: var(--paper-green-a200);
      } 
      </style>
    

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      
  <img src="./images/exampleimg.png">
  <div class="paperbutton">
  <paper-button raised class="custom indigo" on-click="home" >Homepage</paper-button>
  </div>

 
   `;
  }
  home(){
    this.set('route.path','/dashboard');
  }
}

// registering elements with browser
window.customElements.define('my-example', MyExample);
