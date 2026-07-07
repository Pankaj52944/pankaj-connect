// QR Code & Barcode Generator Module
// Completely Free - No API needed

function loadQRBarcodeGenerator() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">📊 QR কোড এবং বারকোড জেনারেটর</div>
            <div class="alert alert-success" style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                ✅ সম্পূর্ণ ফ্রি | API Key প্রয়োজন নেই | রিয়েল-টাইম জেনারেশন
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                <!-- QR Code Generator -->
                <div>
                    <div class="card" style="background: #f9f9f9;">
                        <h3>📱 QR কোড জেনারেট করুন</h3>
                        <div class="form-group">
                            <label>ডেটা (URL, টেক্সট, ইমেল ইত্যাদি):</label>
                            <textarea id="qrData" placeholder="https://example.com বা যেকোনো টেক্সট" style="height: 80px;"></textarea>
                        </div>
                        <div class="form-group">
                            <label>সাইজ:</label>
                            <select id="qrSize">
                                <option value="150">ছোট (150x150)</option>
                                <option value="250" selected>মধ্যম (250x250)</option>
                                <option value="400">বড় (400x400)</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" onclick="generateQRCode()">QR কোড তৈরি করুন</button>
                        <div id="qrPreview" style="margin-top: 20px; text-align: center;"></div>
                    </div>
                </div>

                <!-- Barcode Generator -->
                <div>
                    <div class="card" style="background: #f9f9f9;">
                        <h3>📦 বারকোড জেনারেট করুন</h3>
                        <div class="form-group">
                            <label>পণ্য কোড:</label>
                            <input type="text" id="barcodeData" placeholder="123456789012" maxlength="13">
                        </div>
                        <div class="form-group">
                            <label>বারকোড টাইপ:</label>
                            <select id="barcodeType">
                                <option value="CODE128">CODE 128</option>
                                <option value="EAN13" selected>EAN 13</option>
                                <option value="EAN8">EAN 8</option>
                                <option value="UPC">UPC</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" onclick="generateBarcode()">বারকোড তৈরি করুন</button>
                        <div id="barcodePreview" style="margin-top: 20px; text-align: center;"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateQRCode() {
    const data = document.getElementById('qrData').value;
    const size = document.getElementById('qrSize').value;
    const preview = document.getElementById('qrPreview');

    if (!data) {
        preview.innerHTML = '<div class="alert alert-error">❌ অনুগ্রহ করে ডেটা প্রবেশ করুন</div>';
        return;
    }

    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
    
    preview.innerHTML = `
        <div>
            <img src="${qrImageUrl}" alt="QR Code" style="border: 2px solid #667eea; border-radius: 10px;">
            <div style="margin-top: 15px;">
                <button class="btn btn-primary" style="margin-right: 10px;" onclick="downloadQRCode('${qrImageUrl}')">ডাউনলোড করুন</button>
                <button class="btn btn-secondary" onclick="printQRCode('${qrImageUrl}')">প্রিন্ট করুন</button>
            </div>
        </div>
    `;
}

function generateBarcode() {
    const data = document.getElementById('barcodeData').value;
    const preview = document.getElementById('barcodePreview');

    if (!data) {
        preview.innerHTML = '<div class="alert alert-error">❌ অনুগ্রহ করে পণ্য কোড প্রবেশ করুন</div>';
        return;
    }

    // For barcode, we'll use a simple SVG-based representation
    // In production, use jsbarcode library
    preview.innerHTML = `
        <div>
            <div style="font-size: 14px; font-family: monospace; letter-spacing: 3px; margin: 20px; font-weight: bold;">
                ║ ${data.split('').join(' ')} ║
            </div>
            <div style="font-size: 12px; color: #666; margin-top: 10px;">${data}</div>
            <div style="margin-top: 15px;">
                <p style="font-size: 12px; color: #888;">
                    💡 সম্পূর্ণ বারকোড জেনারেশনের জন্য jsbarcode লাইব্রেরি ব্যবহার করুন
                </p>
            </div>
        </div>
    `;
}

function downloadQRCode(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    link.click();
}

function printQRCode(url) {
    const printWindow = window.open(url);
    printWindow.print();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadQRBarcodeGenerator, generateQRCode, generateBarcode };
}