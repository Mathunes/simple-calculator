
const op = Array(" ");

const addOp = (btn) => {
    if ("0123456789".indexOf(btn) != -1) {
        
        if ("+-*/".indexOf(op[op.length-1]) == -1) {
            op[op.length-1]+=btn;
            
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