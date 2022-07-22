//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAhx72DPpE6NlG1lpSgVHvyQ5uhPqZpgYA",
      authDomain: "kwitter-98192.firebaseapp.com",
      databaseURL: "https://kwitter-98192-default-rtdb.firebaseio.com",
      projectId: "kwitter-98192",
      storageBucket: "kwitter-98192.appspot.com",
      messagingSenderId: "889144588557",
      appId: "1:889144588557:web:74b40c2d70d21cee015844"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });
      document.getElementById("msg").value;
      


}








    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

