
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyA13yvgb55y7AyylGBUabdfe9zjrGEJ0us",
      authDomain: "project37-gawu.firebaseapp.com",
      databaseURL: "https://project37-gawu-default-rtdb.firebaseio.com",
      projectId: "project37-gawu",
      storageBucket: "project37-gawu.appspot.com",
      messagingSenderId: "612870774690",
      appId: "1:612870774690:web:3ceedbbd07dbeb65c09cfb"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome" + " " + user_name + "!";

     function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name".name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
