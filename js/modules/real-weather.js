// Real Weather Module
// Using Open-Meteo API (Free, No API Key needed!)

function loadRealWeather() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">🌤️ আবহাওয়া পূর্বাভাস</div>
            <div class="alert alert-success" style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                ✅ Open-Meteo API | সম্পূর্ণ ফ্রি | API Key প্রয়োজন নেই | সীমাহীন
            </div>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3>📍 ঢাকা, বাংলাদেশ</h3>
                <button class="btn btn-primary" onclick="getWeatherInfo(23.8103, 90.4125)">আবহাওয়া তথ্য পান</button>
                <br><br>
                <label>অথবা স্থানাঙ্ক দিন:</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <input type="number" id="latitude" placeholder="অক্ষাংশ" value="23.8103" step="0.01">
                    <input type="number" id="longitude" placeholder="দ্রাঘিমাংশ" value="90.4125" step="0.01">
                </div>
                <button class="btn btn-primary" style="margin-top: 10px; width: 100%;" onclick="getCustomWeather()">আবহাওয়া পান</button>
            </div>

            <div id="weatherResultReal"></div>
        </div>
    `;
}

async function getWeatherInfo(lat, lon) {
    const resultDiv = document.getElementById('weatherResultReal');
    resultDiv.innerHTML = '<div style="color: #667eea;">🔄 লোড করছি...</div>';

    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Asia/Dhaka`
        );
        const data = await response.json();
        displayWeather(data, resultDiv);
    } catch (error) {
        resultDiv.innerHTML = `<div class="alert alert-error">ত্রুটি: ${error.message}</div>`;
    }
}

async function getCustomWeather() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    
    if (!lat || !lon) {
        alert('❌ অনুগ্রহ করে অক্ষাংশ এবং দ্রাঘিমাংশ দিন');
        return;
    }
    
    getWeatherInfo(lat, lon);
}

function displayWeather(data, resultDiv) {
    const current = data.current;
    const daily = data.daily;
    
    const weatherCodes = {
        0: '晴れ (맑음)',
        1: 'মেঘলা',
        2: 'আংশিক মেঘলা',
        3: 'অত্যন্ত মেঘলা',
        45: 'কুয়াশা',
        48: 'আমুদ্র কুয়াশা',
        51: 'হালকা বৃষ্টি',
        53: 'মাঝারি বৃষ্টি',
        55: 'ভারী বৃষ্টি',
        61: 'সামান্য বৃষ্টি',
        63: 'মাঝারি বৃষ্টি',
        65: 'ভারী বৃষ্টি',
        71: 'হালকা তুষার',
        73: 'মাঝারি তুষার',
        75: 'ভারী তুষার',
        80: 'বৃষ্টিপাতের ঝড়'
    };

    let html = '<div class="card" style="background: #f0f8ff;">';
    html += '<h4>✅ বর্তমান আবহাওয়া</h4>';
    html += '<div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">';
    
    html += `
        <div class="card" style="text-align: center; background: white;">
            <div style="font-size: 40px;">🌡️</div>
            <div style="font-size: 28px; font-weight: bold; color: #667eea;">${current.temperature_2m}°C</div>
            <div style="color: #888;">তাপমাত্রা</div>
        </div>
        <div class="card" style="text-align: center; background: white;">
            <div style="font-size: 40px;">💨</div>
            <div style="font-size: 28px; font-weight: bold; color: #667eea;">${current.wind_speed_10m} km/h</div>
            <div style="color: #888;">বাতাসের গতি</div>
        </div>
        <div class="card" style="text-align: center; background: white;">
            <div style="font-size: 40px;">☁️</div>
            <div style="font-size: 12px; font-weight: bold; color: #667eea;">${weatherCodes[current.weather_code] || 'অপরিবর্তিত'}</div>
            <div style="color: #888;">আবহাওয়া</div>
        </div>
    `;
    
    html += '</div>';
    html += '<h4 style="margin-top: 30px;">📅 সপ্তাহের পূর্বাভাস</h4>';
    html += '<table class="table">';
    html += '<tr><th>তারিখ</th><th>সর্বোচ্চ</th><th>সর্বনিম্ন</th><th>আবহাওয়া</th></tr>';
    
    daily.time.forEach((date, index) => {
        html += `
            <tr>
                <td>${new Date(date).toLocaleDateString('bn-BD')}</td>
                <td>${daily.temperature_2m_max[index]}°C</td>
                <td>${daily.temperature_2m_min[index]}°C</td>
                <td>${weatherCodes[daily.weather_code[index]] || 'অপরিবর্তিত'}</td>
            </tr>
        `;
    });
    
    html += '</table></div>';
    resultDiv.innerHTML = html;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadRealWeather, getWeatherInfo };
}