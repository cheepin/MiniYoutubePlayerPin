// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
document.body.innerHTML = "";

function addButton(name, cb) {
  var button = document.createElement("button");
  button.innerText = name;
  button.onclick = cb;
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(button);
}

function log(str) {
  console.log(str);
  logDiv.innerHTML += str + "<br>";
}

addButton("Goto Yahoo", function() {
  chrome.runtime.sendMessage({gotoYahoo: true}, function(response){
    log('goto  ' + response.url);
  });
});

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
  log("Got message from background page: " + msg);
});

var logDiv = document.createElement("div");
logDiv.style.border = "1px dashed black";                           
document.body.appendChild(document.createElement("br"));
document.body.appendChild(logDiv);

log("Ready.");
