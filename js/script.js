
document.querySelector("#calculator").addEventListener('click', (e) => {
    let btn = e.target.id;

    if (btn != "calculator" && btn != "") {
        btn = btn.substring(4);
        console.log(btn);
    }
})