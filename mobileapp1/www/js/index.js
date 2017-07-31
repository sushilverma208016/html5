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
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        let cnv = document.querySelector("#c1");
        let ctx = cnv.getContext('2d');
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        let drag = false;
        let spx, spy, epx, epy;
        
        function onMouseDown(e) {
            drag = true;
            spx = e.clientX - cnv.offsetLeft;
            spy = e.clientY - cnv.offsetTop;
        }

        function onMouseMove(e) {
            if (drag == true) {
                epx = e.clientX - cnv.offsetLeft;
                epy = e.clientY - cnv.offsetTop;

                ctx.beginPath();
                ctx.moveTo(spx, spy);
                ctx.lineTo(epx, epy);
                ctx.stroke();

                points.push({ x1: spx, y1: spy, x2: epx, y2: epy });
                
                spx = epx;
                spy = epy;
            }
        }

        function onMouseUp() {
            drag = false;
        }

        cnv.addEventListener("mousedown", onMouseDown, false);
        cnv.addEventListener("mousemove", onMouseMove, false);
        cnv.addEventListener("mouseup", onMouseUp, false);



    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');


    }
};

app.initialize();