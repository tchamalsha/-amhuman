//size slection
let buttonS=document.getElementById('smallButton')
let buttonM=document.getElementById('mediumButton')
let buttonL=document.getElementById('largeButton')
let buttonXL=document.getElementById('xlButton')
let radioS=document.getElementById('smallRadio')
let radioM=document.getElementById('mediumRadio')
let radioL=document.getElementById('largeRadio')
let radioXL=document.getElementById('xlRadio')
buttonS.addEventListener('click',(e)=>{
	radioS.click()
})
buttonM.addEventListener('click',(e)=>{
	radioM.click()
})
buttonL.addEventListener('click',(e)=>{
	radioL.click()
})
buttonXL.addEventListener('click',(e)=>{
	radioXL.click()
})

//color selection
let buttonBlack = document.getElementById('blackButton')
let buttonWhite = document.getElementById('whiteButton')
let buttonRed = document.getElementById('redButton')
let radioBlack = document.getElementById('radioB')
let radioWhite = document.getElementById('radioW')
//let radioRed = document.getElementById('radioR')
buttonBlack.addEventListener('click',(e)=>{
	radioBlack.click()
})
buttonWhite.addEventListener('click',(e)=>{
	radioWhite.click()
})
// buttonRed.addEventListener('click',(e)=>{
// 	radioRed.click()
// })

var firebaseConfig = {
    apiKey: "AIzaSyBLvvP974M8UrV0bg7xIiqIVOOG6EHJUlQ",
    authDomain: "amhuman-98902.firebaseapp.com",
    databaseURL: "https://amhuman-98902-default-rtdb.firebaseio.com",
    projectId: "amhuman-98902",
    storageBucket: "amhuman-98902.appspot.com",
    messagingSenderId: "545915893567",
    appId: "1:545915893567:web:9b08c7b9e515828763058a"
  };

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var userRef = firebase.database().ref('Users');

let form=document.querySelector("#customer-details");
let alertB=document.getElementById('alertButton');
let closeB=document.getElementById('closeButton');
let errorB=document.getElementById('alertButtonError');
//form deatils
form.addEventListener('submit', (e) =>{
	e.preventDefault();
	
	let size=form.exampleRadios.value
	let color=form.color.value
	let qty=form.qty.value
	let deliveryMethod=form.payment.value
	let name = form.inputName.value
	let address = form.inputAddress.value
	let district = form.inputDistrict.value
	let number = form.inputNumber.value

	//get date
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		
	
	if (name&&number&&address&&district&&qty&&deliveryMethod){
		
		//save data to database
		saveData(name,address,district,number,size,color,qty,deliveryMethod,date);
		form.reset();
		closeB.click();
		//show alert
		alertB.click();
	}
	else{
		form.reset();
		closeB.click();
		errorB.click();

	}
	
	
})

//save user data to firebase
function saveData(name,address,district,number,size,color,qty,deliveryMethod,date){
	var newUserRef= userRef.push();
	newUserRef.set({
		Name:name,
		Address:address,
		District: district,
		Contact: number,
		Size: size,
		Color: color,
		Quantity: qty,
		Delivery: deliveryMethod,
		Date: date

	});
}

