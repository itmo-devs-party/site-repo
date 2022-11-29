import { QrScanner } from 'qr-scanner/qr-scanner.min.js';
const video = document.getElementById('qr-video');
function setResult(text) {
    document.getElementById('res').value = text
}
const scanner = new QrScanner(video, result => setResult(result));
document.getElementById('startButton').addEventListener('click', () => scanner.start());
document.getElementById('res').value = 'Scan a QR code';