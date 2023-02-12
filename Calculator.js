let calculator_buttons = [
  {
    nameOfButton: "rad",
    SymbolOfButton: "Rad",
    formula: false,
    type: "key",
  },
  {
    nameOfButton: "deg",
    SymbolOfButton: "Deg",
    formula: false,
    type: "key",
  },

  {
    nameOfButton: "square-root",
    SymbolOfButton: "√",
    formula: "Math.sqrt",
    type: "math_function",
  },
  {
    nameOfButton: "square",
    SymbolOfButton: "x²",
    // formula:POWER,
    type: "math_function",
  },
  {
    nameOfButton: "open-circular-bracket",
    SymbolOfButton: "(",
    formula: "(",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "close-circular-bracket",
    SymbolOfButton: ")",
    formula: ")",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "delete",
    SymbolOfButton: "⌫",
    formula: false,
    type: "key",
    normal_button: true,
  },
  {
    nameOfButton: "percent",
    SymbolOfButton: "%",
    formula: "/100",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "pi",
    SymbolOfButton: "π",
    formula: "Math.PI",
    type: "number",
  },
  {
    nameOfButton: "cos",
    SymbolOfButton: "cos",
    formula: "trigo(Math.cos,",
    type: "trigo_function",
  },
  {
    nameOfButton: "sin",
    SymbolOfButton: "sin",
    formula: "trigo(Math.sin,",
    type: "trigo_function",
  },
  {
    nameOfButton: "tan",
    SymbolOfButton: "tan",
    formula: "trigo(Math.tan,",
    type: "trigo_function",
  },
  {
    nameOfButton: "7",
    SymbolOfButton: "7",
    formula: "7",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "8",
    SymbolOfButton: "8",
    formula: "8",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "9",
    SymbolOfButton: "9",
    formula: "9",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "division",
    SymbolOfButton: "÷",
    formula: "/",
    type: "operator",
    normal_button: true,
  },
  {
    nameOfButton: "e",
    SymbolOfButton: "e",
    formula: "Math.E",
    type: "number",
  },
  {
    nameOfButton: "acos",
    SymbolOfButton: "acos",
    formula: "inv_trigo(Math.acos)",
    type: "trigo_function",
  },
  {
    nameOfButton: "asin",
    SymbolOfButton: "asin",
    formula: "inv_trigo(Math.asin)",
    type: "trigo_function",
  },
  {
    nameOfButton: "atan",
    SymbolOfButton: "atan",
    formula: "inv_trigo(Math.atan)",
    type: "trigo_function",
  },
  {
    nameOfButton: "4",
    SymbolOfButton: "4",
    formula: "4",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "5",
    SymbolOfButton: "5",
    formula: "5",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "6",
    SymbolOfButton: "6",
    formula: "6",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "multiplication",
    SymbolOfButton: "x",
    formula: "*",
    type: "operator",
    normal_button: true,
  },
  {
    nameOfButton: "factorial",
    SymbolOfButton: "x!",
    // formula:FACTORIAL,
    type: "math_function",
  },
  {
    nameOfButton: "exp",
    SymbolOfButton: "exp",
    formula: "Math.exp",
    type: "math_function",
  },
  {
    nameOfButton: "ln",
    SymbolOfButton: "ln",
    formula: "Math.log10",
    type: "math_function",
  },
  {
    nameOfButton: "log",
    SymbolOfButton: "log",
    formula: "Math.log10",
    type: "math_function",
  },
  {
    nameOfButton: "1",
    SymbolOfButton: "1",
    formula: "1",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "2",
    SymbolOfButton: "2",
    formula: "2",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "3",
    SymbolOfButton: "3",
    formula: "3",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "subtraction",
    SymbolOfButton: "-",
    formula: "-",
    type: "operator",
    normal_button: true,
  },
  {
    nameOfButton: "power",
    SymbolOfButton: "x²",
    // formula:POWER,
    type: "math_function",
  },
  {
    nameOfButton: "ANS",
    SymbolOfButton: "ANS",
    formula: "ans",
    type: "number",
  },
  {
    nameOfButton: "inverse_of_x",
    SymbolOfButton: "1/x",
    formula: "1/x",
    type: "number",
  },

  {
    nameOfButton: "full-stop",
    SymbolOfButton: ".",
    formula: ".",
    type: "number",
  },
  {
    nameOfButton: "0",
    SymbolOfButton: "0",
    formula: "0",
    type: "number",
    normal_button: true,
  },
  {
    nameOfButton: "calculate",
    SymbolOfButton: "=",
    formula: "=",
    type: "calculate",
    normal_button: true,
  },
  {
    nameOfButton: "clear",
    SymbolOfButton: "C",
    formula: false,
    type: "key",
    normal_button: true,
  },
  {
    nameOfButton: "addition",
    SymbolOfButton: "+",
    formula: "+",
    type: "operator",
    normal_button: true,
  },
];

let data = {
    operations:[],
    formula:[]
}
var outputDisplay = document.getElementById("opertion_Values");
var outputResult = document.getElementById("result_value")

createButtons();

function createButtons() {
  scientific_buttons_div = document.getElementById("scientific");
  normal_buttons_div = document.getElementById("normal");

  calculator_buttons.forEach((buttonInarray) => {
    var general_button = document.createElement("button");
    general_button.setAttribute("class", "btn btn-light");
    general_button.setAttribute("id", buttonInarray.nameOfButton);
    var btn_symbol = document.createTextNode(buttonInarray.SymbolOfButton);
    general_button.appendChild(btn_symbol);

    if (buttonInarray.normal_button) {
      normal_buttons_div.appendChild(general_button);
    } else {
      scientific_buttons_div.appendChild(general_button);
    }
  });
}


  var input_element = document.getElementById("inputContainer");

  input_element.addEventListener("click", (event) => {
    const target_button = event.target;

    calculator_buttons.forEach((buttons) => {
      if (target_button.id == buttons.nameOfButton) {
        calculateOperation(buttons);
        
      }
    });
  });


function calculateOperation(button){
    
    if(button.type == "operator"){
        
        data.operations.push(button.SymbolOfButton);   
        data.formula.push(button.formula);  
    }
    else if(button.type == "key"){
      if(button.nameOfButton=="delete"){
        data.operations.pop();
        data.formula.pop();
      }
      else if(button.nameOfButton=="clear"){
        data.operations=[];
        data.formula=[];
        outputResult.innerHTML=0; 
      }
    }
    else if(button.type == "number"){
        data.operations.push(button.SymbolOfButton)
        data.formula.push(button.formula);  
    }
    else if(button.type == "calculate"){
      var operationtobecalculated = data.formula.join('')
      showTheResult(operationtobecalculated);
    }
    else if(button.type == "math_function"){}
    else if(button.type == "trigo_function" ){}
    showTheOperation(data.operations.join(''));
}


 function showTheOperation(operationPerforming){
  outputDisplay.innerHTML=operationPerforming;
}

function showTheResult(result){
  var resulttodisplay=eval(result)
  outputResult.innerHTML=resulttodisplay;
}

