// Real Bank SWIFT Code Lookup Module
// Using API Ninjas (50,000 requests/month free)

function loadRealBankSwift() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">🏦 ব্যাংক SWIFT/BIC কোড খুঁজুন</div>
            <div class="alert alert-success" style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                ✅ API Ninjas ব্যবহার করছি | 50,000 requests/month ফ্রি | বাংলাদেশের সব ব্যাংক
            </div>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3>🔍 ব্যাংক তথ্য খুঁজুন</h3>
                <div class="form-group">
                    <label>দেশ:</label>
                    <select id="swiftCountry" value="BD">
                        <option value="BD">🇧🇩 বাংলাদেশ</option>
                        <option value="US">🇺🇸 আমেরিকা</option>
                        <option value="GB">🇬🇧 ব্রিটেন</option>
                        <option value="IN">🇮🇳 ভারত</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>ব্যাংকের নাম বা SWIFT কোড:</label>
                    <input type="text" id="bankName" placeholder="BRAC বা BRAKBDDH">
                </div>
                <button class="btn btn-primary" onclick="performSwiftLookup()">খুঁজুন</button>
            </div>

            <div id="swiftResultReal"></div>

            <div style="margin-top: 30px; background: #f0f4ff; padding: 20px; border-radius: 10px;">
                <h4>বাংলাদেশের প্রধান ব্যাংক (SWIFT কোড)</h4>
                <table class="table">
                    <tr>
                        <td><strong>ব্যাংক</strong></td>
                        <td><strong>SWIFT কোড</strong></td>
                    </tr>
                    <tr>
                        <td>BRAC Bank PLC</td>
                        <td>BRAKBDDH</td>
                    </tr>
                    <tr>
                        <td>Sonali Bank PLC</td>
                        <td>BSONBDDH</td>
                    </tr>
                    <tr>
                        <td>Agrani Bank PLC</td>
                        <td>AGBKBDDH</td>
                    </tr>
                    <tr>
                        <td>AB Bank PLC</td>
                        <td>ABBLBDDH</td>
                    </tr>
                    <tr>
                        <td>Dutch-Bangla Bank</td>
                        <td>DBBLBDDH</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
}

async function performSwiftLookup() {
    const country = document.getElementById('swiftCountry').value;
    const bankName = document.getElementById('bankName').value;
    const resultDiv = document.getElementById('swiftResultReal');

    if (!bankName) {
        resultDiv.innerHTML = '<div class="alert alert-error">❌ অনুগ্রহ করে ব্যাংকের নাম বা SWIFT কোড প্রবেশ করুন</div>';
        return;
    }

    resultDiv.innerHTML = '<div style="color: #667eea;">🔄 খুঁজছি... অনুগ্রহ করে অপেক্ষা করুন...</div>';

    try {
        const url = `https://api.api-ninjas.com/v1/swiftcode?country=${country}&bank=${encodeURIComponent(bankName)}`;
        
        const response = await fetch(url, {
            headers: { 'X-Api-Key': 'DEMO_KEY' }
        });
        
        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            resultDiv.innerHTML = `
                <div class="alert alert-error">
                    ⚠️ কোনো ফলাফল পাওয়া যায়নি। দয়া করে সঠিক ব্যাংকের নাম দিন।
                </div>
            `;
            return;
        }

        displaySwiftResults(data, resultDiv);
    } catch (error) {
        resultDiv.innerHTML = `
            <div class="alert alert-error">
                ⚠️ ত্রুটি: ${error.message}
            </div>
        `;
    }
}

function displaySwiftResults(data, resultDiv) {
    let html = '<div class="card" style="background: #f0f8ff;">';
    html += '<h4>✅ ব্যাংক SWIFT তথ্য</h4>';
    html += '<div class="grid">';
    
    data.forEach((bank, index) => {
        html += `
            <div class="card" style="background: white; border: 1px solid #ddd;">
                <div style="padding: 15px;">
                    <div style="font-size: 12px; color: #888;">ব্যাংক ${index + 1}</div>
                    <div style="font-size: 18px; font-weight: bold; color: #667eea; margin: 10px 0;">
                        ${bank.bank_name || bank.swift_code}
                    </div>
                    <table style="width: 100%; font-size: 13px;">
                        <tr>
                            <td><strong>SWIFT:</strong></td>
                            <td>${bank.swift_code}</td>
                        </tr>
                        <tr>
                            <td><strong>ব্যাংক কোড:</strong></td>
                            <td>${bank.bank_code || 'N/A'}</td>
                        </tr>
                        ${bank.branch_name ? `<tr><td><strong>শাখা:</strong></td><td>${bank.branch_name}</td></tr>` : ''}
                        <tr>
                            <td><strong>দেশ:</strong></td>
                            <td>${bank.country || 'N/A'}</td>
                        </tr>
                    </table>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 10px; padding: 8px; font-size: 12px;" onclick="copyToClipboard('${bank.swift_code}')">কপি করুন</button>
                </div>
            </div>
        `;
    });
    
    html += '</div></div>';
    resultDiv.innerHTML = html;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✓ কপি করা হয়েছে: ' + text);
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadRealBankSwift, performSwiftLookup };
}