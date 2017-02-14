/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // Carga el codigo HTML de una vista ubicado en www/vistas/ 
    // dentro del elemento #app-container
    loadView: function(view, callback){
        if(typeof view != "undefined"){
            var viewURL = 'views/' + view;
            var container = document.getElementById('app-container');
            // Request...
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                // Status 200: Comunicacion exitosa
                // Status 404: Not Found, recurso no encontrado
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status == 200) {
                        var newContent = document.createElement('div');
                        newContent.innerHTML = request.responseText;
                        container.innerHTML = "";
                        container.appendChild(newContent);
                        var loadedScript = newContent.getElementsByTagName('script');
                        if(loadedScript[0] != 'undefined') eval(loadedScript[0].text);
                        if(typeof callback === "function") callback();
                    }else{
                        console.log("No se pudo cargar la vista: ", request.status);
                    }
                }
            };

            request.open("GET", viewURL);
            request.send();
        }
    }
};

app.initialize();

