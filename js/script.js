
let op = Array(" ");

const showDisplay = (btn) => {
    document.querySelector("#calculator #display p").innerText += btn;
};

const addOp = (btn) => {
    if ("0123456789".indexOf(btn) != -1) {
        
        if ("+-*/".indexOf(op[op.length-1]) == -1) {

            op[op.length-1]+=btn;
            showDisplay(btn);

        }

    }  else if (btn == "point") {
        
        if ("+-*/".indexOf(op[op.length-1]) == -1) {

            if (op[op.length-1].indexOf('.') == -1) {
                op[op.length-1]+='.';
                showDisplay('.');
            }

        }

    } else if (btn == "ce") {

        document.querySelector("#calculator #display p").innerText = "";
        op[op.length-1] = " ";

    } else if (btn == "ac") {

        document.querySelector("#calculator #display p").innerText = "";
        op = [" "];

    } else if ("sum sub mul div".indexOf(btn) != -1) {

        let opSignal;

        switch (btn) {
            case "sum":
                opSignal = "+";
                break;
            case "sub":
                opSignal = "-";
                break;
            case "mul":
                opSignal = "*";
                break;
            case "div":
                opSignal = "/";
                break;
            default:
                break;
        }

        

        if ("+-*/".indexOf(op[op.length-1]) == -1) {

            op.push(opSignal);

        } else {

            op[op.length-1] = opSignal;

        }

    }
};

document.querySelector("#calculator").addEventListener('click', (e) => {
    let btn = e.target.id;

    if (btn != "calculator" && btn != "") {
        btn = btn.substring(4);
        addOp(btn);
    }
});