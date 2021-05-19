//ADD FIREBASE

var firebaseConfig = {
    apiKey: "AIzaSyAvPj0FIorjjEKPHIbuuQEqu2_1aIQQWUU",
    authDomain: "sushrut-ypam.firebaseapp.com",
    databaseURL: "https://sushrut-ypam-default-rtdb.firebaseio.com",
    projectId: "sushrut-ypam",
    storageBucket: "sushrut-ypam.appspot.com",
    messagingSenderId: "238204360898",
    appId: "1:238204360898:web:166d46978068489ed6835b",
    measurementId: "G-90VZBLDD3Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user-name").innerHTML = "Welcome "  + user_name + "!";
function addRoom(){
	room_name = document.getElementById("add_room").value;
	firebase.database().ref("/").child(room_name).update({
		purpose: "add-room"
	});
	
	localStorage.setItem("room_name", room_name);
	window.location = "kwitter_page.html";
}


function getData() {
	firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
	
       Room_names = childKey;
      //Start code
		console.log(Room_names);
		output = "<div class='room_names' id = " + Room_names + " onclick = 'redirect(this.id)'>#" + Room_names + " </div><hr>";
		 document.getElementById("output").innerHTML = output;
      //End code
      });});}


getData();

function redirect(name){
	console.log("Redirect room name " + name);
	localStorage.setItem("room_name", name);
	window.location = "kwitter_page.html";
}

function logout(){
	localStorage.removeItem("username");
	localStorage.removeItem("room_name")
	window.location = "index.html";
}