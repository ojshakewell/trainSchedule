

//namely their arrival times and how many minutes remain until they arrive at their station.

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDG6Ihdqvjn71l2WNXWtng21ud7jHr9nEk",
    authDomain: "timetable-b75c8.firebaseapp.com",
    databaseURL: "https://timetable-b75c8.firebaseio.com",
    projectId: "timetable-b75c8",
    storageBucket: "",
    messagingSenderId: "143853950976"
};
firebase.initializeApp(config);

var database = firebase.database();

console.log(moment().format("HH:mm"));

console.log("test");

//Submit form
//$("#submit-btn").click(function(event){

$("#submit-btn").on("click", function(event){
	console.log("another test");	
	event.preventDefault();

	//Retrieve input from form
	var trainName = $("#name").val().trim();
	var trainDest = $("#destination").val().trim();
	var trainFirst = $("#first-train").val().trim();
	var trainFreq = $("#frequency").val().trim();

	//store data in object
	var newTrain = {
		name: trainName,
		dest: trainDest,
		first: trainFirst,
		freq: trainFreq
	};
	
	console.log(newTrain.name);	
	console.log(newTrain.dest);	
	console.log(newTrain.first);	
	console.log(newTrain.freq);

	database.ref(push.newTrain);

	var trainDest = $("#destination").val("");
	var trainFirst = $("#first-train").val("");
	var trainFreq = $("#frequency").val("");

	console.log("added record")
}); //end .on(click

//Retrieve data from firebase
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	console.log(childSnapshot.val());

	//assign loocal variables from DB
	var trainName = childSnapshot.val().name;
	var trainDest = childSnapshot.val().dest;
	var trainFirst = moment(childSnapshot.val().first, "HH:mm").format("X");
	var trainFreq = childSnapshot.val().freq;

	//when will the next train come?
	//train current time - train first
	var trainNext = "";
	var currentTime = moment().format("HH:mm");

	// how many minutes away
	var trainWait = ''//moment().toNow(true);//currentTime - trainNext;

	console.log(trainName);	
	console.log(trainDest);	
	console.log(trainFirst);	
	console.log(trainFreq);

	//Display data on html page
	$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + trainNext + "</td><td>" + trainWait+ "</td></tr>");
});//end database.ref()




