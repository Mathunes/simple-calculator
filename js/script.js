
let op = Array(" ");

const result = () => {
    const result = math.evaluate(op.join(""));

    op = [result];

    return showDisplay(result);
}

const cleanDisplay = () => {
    document.querySelector("#calculator #display p").innerText = "";
}

const showDisplay = (btn) => {
    document.querySelector("#calculator #display p").innerText += btn;
};

const addOp = (btn) => {
    if ("0123456789".indexOf(btn) != -1) {
        
        if ("+-*/".indexOf(op[op.length-1]) == -1) {

            op[op.length-1]+=btn;
            showDisplay(btn);

        } else {

            op.push(btn);
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

        cleanDisplay();
        op[op.length-1] = " ";

    } else if (btn == "ac") {

        cleanDisplay();
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
        cleanDisplay();

    } else if (btn == "result") {

        if (!((op.length <= 2) || ("+-*/".indexOf(op[op.length-1]) != -1))) {

            cleanDisplay();
            result();

        }
        
    } else if (btn == "m-add") {

        op.push("+");
        cleanDisplay();

    } else if (btn == "m-sub") {

        op.push("-");
        cleanDisplay();

    }
};

document.querySelector("#calculator").addEventListener('click', (e) => {
    let btn = e.target.id;

    if (btn != "calculator" && btn != "") {
        btn = btn.substring(4);
        addOp(btn);
    }
});