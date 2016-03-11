/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This exports three versions of a function that makes new messages written to a Firebase Database
 * all uppercase:
 *
 * makeuppercase: Basic version with no auth involved
 * makeuppercaseuserauth: Uses the same auth as the database change which triggered the function
 * makeuppercaseadminauth: Uses admin auth from env which grants all access
 *
 * Simply switch the triggered function in the firebase.json file to try one function or the other.
 *
 * For more information on setting up and running this sample code, see
 * https://developers.google.com/firebase/docs/cloud-functions/writing-functions
 */

'use strict';

// [START imports]
var Firebase = require('firebase');
var env = require('./env');
var ref = new Firebase(env.get('firebase.database.url'));
// [END imports]

// [START function]
// Makes all new messages ALL UPPERCASE.
exports.makeuppercase = function(context, data) {

  // Read the Firebase database object that triggered the function.
  var messageRef = ref.child(data.path);
  console.log('Reading firebase object at path: ' + messageRef.toString());
  messageRef.once('value', function(messageData) {

    // Retrieved the message and uppercase it.
    console.log('Retrieved message content: ' + JSON.stringify(messageData.val()));
    var uppercased = messageData.val().text.toUpperCase();

    // Saving the uppercased message to DB.
    console.log('Saving uppercased message: ' + uppercased);
    messageRef.update({text: uppercased}, context.done);

  }, context.done);
};
// [END function]


// [START auth_user]
// Makes all new messages ALL UPPERCASE.
// We impersonate the user who has made the change that triggered the function.
exports.makeuppercaseuserauth = function(context, data) {

  var localRef = ref;

  // Authorize to the Firebase Database as the user if possible.
  if (data.authToken) {

    console.log('Authorizing to the database using incoming auth.');
    // Create a Database reference specific to the user so as to not share the auth globally.
    localRef = new Firebase(env.get('firebase.database.url'), data.authToken);
    localRef.authWithCustomToken(data.authToken);
  }
// [END auth_user]

  // Read the Firebase database object that triggered the function.
  var messageRef = localRef.child(data.path);
  console.log('Reading firebase object at path: ' + messageRef.toString());
  messageRef.once('value', function(messageData) {

    // Retrieved the message and uppercase it.
    console.log('Retrieved message content: ' + JSON.stringify(messageData.val()));
    var uppercased = messageData.val().text.toUpperCase();

    // Saving the uppercased message to DB.
    console.log('Saving uppercased message: ' + uppercased);
    messageRef.update({text: uppercased}, context.done);

  }, context.done);
};


// [START auth_admin]
// Firebase Database reference with admin authorization.
var adminAuthRef = new Firebase(env.get('firebase.database.url'), 'admin');

// Authorize to the Firebase Database with admin credentials.
adminAuthRef.authWithCustomToken(env.get('firebase.database.secret'));

// Makes all new messages ALL UPPERCASE.
// We authorize to the database as an admin.
exports.makeuppercaseadminauth = function(context, data) {
// [END auth_admin]

  // Read the Firebase database object that triggered the function.
  var messageRef = adminAuthRef.child(data.path);
  console.log('Reading firebase object at path: ' + messageRef.toString());
  messageRef.once('value', function(messageData) {

    // Retrieved the message and uppercase it.
    console.log('Retrieved message content: ' + JSON.stringify(messageData.val()));
    var uppercased = messageData.val().text.toUpperCase();

    // Saving the uppercased message to DB.
    console.log('Saving uppercased message: ' + uppercased);
    messageRef.update({text: uppercased}, context.done);

  }, context.done);
};