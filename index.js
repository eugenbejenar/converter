function convert() {
    var selectT = document.getElementById('moneySelect').value;
    var inputValue = document.getElementById('moneyInput').value;
    if (selectT === "usd") {
        var usdToMdl = inputValue * 17.43 + 'MDL';
        alert(usdToMdl);
    } else {
        var mdlToUsd = inputValue / 17.43 + 'USD';
        alert(mdlToUsd);
    }
}