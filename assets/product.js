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
let form=document.querySelector("#customer-details");

form.addEventListener('submit', (e) =>{
	e.preventDefault();
	let size=form.exampleRadios.value
	let name = form.inputName.value
	let address = form.inputAddress.value
	let district = form.inputDistrict.value
    let number = form.inputNumber.value
	console.log(name)

})