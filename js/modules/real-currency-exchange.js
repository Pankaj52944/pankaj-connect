// Real Currency Exchange Rate Module
// Using Exchange Rate API (No API Key needed!)

function loadRealCurrencyExchange() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">💱 মুদ্রা বিনিময়ের হার</div>
            <div class="alert alert-success" style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                ✅ Exchange Rate API | সম্পূর্ণ ফ্রি | API Key প্রয়োজন নেই | রিয়েল-টাইম
            </div>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3>💵 মুদ্রা রূপান্তর করুন</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <label>প্রথম মুদ্রা:</label>
                        <select id="fromCurrency">
                            <option value="BDT">🇧🇩 BDT - বাংলাদেশী টাকা</option>
                            <option value="USD">🇺🇸 USD - আমেরিকান ডলার</option>
                            <option value="EUR">🇪🇺 EUR - ইউরো</option>
                            <option value="GBP">🇬🇧 GBP - ব্রিটিশ পাউন্ড</option>
                            <option value="INR">🇮🇳 INR - ভারতীয় রুপি</option>
                            <option value="JPY">🇯🇵 JPY - জাপানি ইয়েন</option>
                            <option value="AED">🇦🇪 AED - আরব আমিরাতের দিরহাম</option>
                            <option value="SGD">🇸🇬 SGD - সিঙ্গাপুর ডলার</option>
                        </select>
                    </div>
                    <div>
                        <label>হার (স্বয়ংক্রিয় লোড):</label>
                        <input type="number" id="exchangeRate" readonly style="background: #f0f0f0;">
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    <label>পরিমাণ:</label>
                    <input type="number" id="amount" placeholder="১০০" value="1" style="margin-bottom: 20px;">
                </div>
                <button class="btn btn-primary" onclick="getExchangeRates()">হার পান</button>
            </div>

            <div id="exchangeResultReal"></div>

            <div style="margin-top: 30px; background: #f0f4ff; padding: 20px; border-radius: 10px;">
                <h4>বাংলাদেশী টাকা (BDT) বনাম অন্যান্য মুদ্রা</h4>
                <table class="table">
                    <tr>
                        <td><strong>মুদ্রা</strong></td>
                        <td><strong>হার (1 BDT =)</strong></td>
                    </tr>
                    <tr>
                        <td>USD (আমেরিকান ডলার)</td>
                        <td id="rateUSD">লোড করছি...</td>
                    </tr>
                    <tr>
                        <td>EUR (ইউরো)</td>
                        <td id="rateEUR">লোড করছি...</td>
                    </tr>
                    <tr>
                        <td>GBP (ব্রিটিশ পাউন্ড)</td>
                        <td id="rateGBP">লোড করছি...</td>
                    </tr>
                    <tr>
                        <td>INR (ভারতীয় রুপি)</td>
                        <td id="rateINR">লোড করছি...</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    
    // Initial load
    getExchangeRates();
}

async function getExchangeRates() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const resultDiv = document.getElementById('exchangeResultReal');
    resultDiv.innerHTML = '<div style="color: #667eea;">🔄 লোড করছি...</div>';

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        
        const rates = data.rates;
        
        // Update rate display
        document.getElementById('exchangeRate').value = `1 ${fromCurrency}`;
        document.getElementById('rateUSD').textContent = rates.USD ? rates.USD.toFixed(4) : 'N/A';
        document.getElementById('rateEUR').textContent = rates.EUR ? rates.EUR.toFixed(4) : 'N/A';
        document.getElementById('rateGBP').textContent = rates.GBP ? rates.GBP.toFixed(4) : 'N/A';
        document.getElementById('rateINR').textContent = rates.INR ? rates.INR.toFixed(4) : 'N/A';
        
        displayExchangeRates(fromCurrency, rates, resultDiv);
    } catch (error) {
        resultDiv.innerHTML = `<div class="alert alert-error">ত্রুটি: ${error.message}</div>`;
    }
}

function displayExchangeRates(baseCurrency, rates, resultDiv) {
    const amount = parseFloat(document.getElementById('amount').value) || 1;
    
    let html = '<div class="card" style="background: #f0f8ff;">';
    html += `<h4>💱 ${amount} ${baseCurrency} এর মূল্য:</h4>`;
    html += '<div class="grid">';
    
    const currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AED', 'SGD'];
    const names = {
        'USD': '🇺🇸 আমেরিকান ডলার',
        'EUR': '🇪🇺 ইউরো',
        'GBP': '🇬🇧 ব্রিটিশ পাউন্ড',
        'INR': '🇮🇳 ভারতীয় রুপি',
        'JPY': '🇯🇵 জাপানি ইয়েন',
        'AED': '🇦🇪 আরব দিরহাম',
        'SGD': '🇸🇬 সিঙ্গাপুর ডলার'
    };
    
    currencies.forEach(currency => {
        if (rates[currency] && currency !== baseCurrency) {
            const convertedAmount = (amount * rates[currency]).toFixed(2);
            html += `
                <div class="card" style="background: white; border: 1px solid #ddd; text-align: center;">
                    <div style="padding: 20px;">
                        <div style="font-size: 24px; color: #667eea; font-weight: bold;">${convertedAmount}</div>
                        <div style="font-size: 12px; color: #888; margin-top: 5px;">${names[currency]}</div>
                    </div>
                </div>
            `;
        }
    });
    
    html += '</div></div>';
    resultDiv.innerHTML = html;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadRealCurrencyExchange, getExchangeRates };
}