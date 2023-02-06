storageData = window.localStorage;

let savedValue = storageData.getItem("userInput");
let userInput1 = document.getElementsByName("userInput9");
let userInput2 = document.getElementByName("userInput10");
let userInput3 = document.getElementByName("userInput11");
let userInput4 = document.getElementByName("userInput12");
let userInput5 = document.getElementByName("userInput13");
let userInput6 = document.getElementByName("userInput14");
let userInput7 = document.getElementByName("userInput15");
let userInput8 = document.getElementByName("userInput16");
let userInput9 = document.getElementByName("userInput17");
let inputs = [
  userInput0, userInput1,userInput2,userInput3,userInput4,userInput5,userInput6,userInput7,userInput8,userInput9
];

pullInput();

  document.querySelectorAll(".btn")
    .forEach(function(saveBtn){
    saveBtn.addEventListener("click", function(){
      let inputVal = saveBtn.getAttribute("value");

    //  
    saveInput(inputVal);  

    })

  })
  
  function saveInput(x) {
    let userInput = document.getElementById("userInput" + x).value;
    console.log(x);
    let inputName = "userInput" + x;
    storageData.setItem(inputName, userInput);
  }


function pullInput(){

  for(i = 0 ; i < inputs.length ; i ++){
    let placeHolder = "userInput" + i;
    console.log(placeHolder);
    if(storageData.getItem(placeHolder) === null)
    {
      continue;
    }
    else{
    inputs[i].innerHTML = storageData.getItem(placeHolder);
    }
  }
};