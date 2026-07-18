let numberB = ""
let process = ""
let numberA = ""
let respond = ""
const LoadTab = document.getElementById("LoadTab")
const screen = document.getElementById("screen");
const PayMenuTab = document.getElementById("PayMenuTab")
PayMenuTab.close()
function SquareRootFuncion(StartNumber){
    if (StartNumber === ''){
        alert("el numero es 0")
    }
    else{
        let ProductDivision = 1;
        let LastProductDivision = 0;
        while (Math.abs(ProductDivision - LastProductDivision) > 0.0001) {
            LastProductDivision = ProductDivision
            ProductDivision = (ProductDivision+(StartNumber/ProductDivision))/2;
        };
        ProductDivision = ProductDivision.toFixed(3)
        numberB=parseFloat(ProductDivision);
        screen.textContent = numberB};
};
document.getElementById('SquareRoot').addEventListener('click', () => {
    SquareRootFuncion(Number(numberA))
});

async function equal(){
    if (numberA !== "" && numberB !== ""){
        await ModalLoadTap();
        numberA = Number(numberA)
        numberB = Number(numberB)
        switch (process){
            case "Percentege":
                respond = (numberB*numberA)/100
                break;
            case "Division":
                respond = numberB/numberA
                break;
            case "Multiplied":
                respond = numberA*numberB
                break;
            case "Less":
                respond = numberB-numberA
                break;
            case "Plus":
                respond = numberA+numberB
                break;
        }
        screen.textContent = respond
        ClearAll
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        ModalLoadTap();
    }
}
document.addEventListener('keydown', handleKeyDown);

function Add(number) {
    if (number === '0' && numberA === '') {
        return; 
    };
    numberA = numberA + number;
    ChangeTheText()
}
function Process(type) {
    if (numberA !== "") {
        numberB = numberA;
        numberA = "";
        process = type;
        ChangeTheText();
    }
    else{
        alert("escoge un numero primero");
    }
}
function ClearAll() {
    numberA = "";
    numberB = "";
    ChangeTheText()
}
function ChangeTheText(){
    screen.textContent = numberA
}

//Tag/pestañas modales//
function ModalLoadTap() {
    return new Promise(function(resolve){
        LoadTab.showModal()
        let ConnectionTimeWait = 10;
        const ComeBackCount = setInterval(() => {
            ConnectionTimeWait--;
            if (ConnectionTimeWait < 0) {
                clearInterval(ComeBackCount)
                LoadTab.close();
                PayMenuTab.showModal();
                resolve()
            }
    }, 1000);})
};