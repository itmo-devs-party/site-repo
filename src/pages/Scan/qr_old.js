import { Html5QrcodeScanner } from "html5-qrcode"

document.getElementById("result").value = "Loading..."  

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(function () {
    function success_print(decodedText) {
        document.getElementById("result").value = toString(decodedText);
    }
    function onScanSuccess(decodedText, decodedResult) {
        success_print(decodedText);
    }
    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            rememberLastUsedCamera: true,
            showTorchButtonIfSupported: true
        });
    html5QrcodeScanner.render(onScanSuccess);
});
