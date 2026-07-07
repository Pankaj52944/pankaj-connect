// Real Geolocation Module
// Using BDAPIS + Open-Meteo + IPApi

function loadRealGeolocation() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">🗺️ বাংলাদেশ ভৌগোলিক তথ্য</div>
            <div class="alert alert-success" style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                ✅ BDAPIS ব্যবহার করছি | সম্পূর্ণ ফ্রি | সীমাহীন
            </div>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3>📍 আপনার অবস্থান জানুন</h3>
                <button class="btn btn-primary" onclick="getCurrentIPLocation()">আমার IP থেকে অবস্থান</button>
                <button class="btn btn-primary" onclick="loadBangladeshDivisions()">বাংলাদেশের সব বিভাগ</button>
            </div>

            <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3>🔍 জেলা খুঁজুন</h3>
                <div class="form-group">
                    <label>বিভাগ নির্বাচন করুন:</label>
                    <select id="divisionSelect" onchange="loadDistrictsByDivision()">
                        <option>-- বিভাগ নির্বাচন করুন --</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>জেলা (স্বয়ংক্রিয়):</label>
                    <select id="districtSelect">
                        <option>-- প্রথমে বিভাগ বেছে নিন --</option>
                    </select>
                </div>
                <button class="btn btn-primary" onclick="loadUpazilasByDistrict()">উপজেলা লোড করুন</button>
            </div>

            <div id="geoResultReal"></div>

            <div id="mapContainer" style="width: 100%; height: 400px; background: #e0e0e0; border-radius: 10px; margin: 20px 0; display: none;">
                <p style="padding: 20px; text-align: center; color: #666;">🗺️ মানচিত্র এখানে প্রদর্শিত হবে</p>
            </div>
        </div>
    `;
}

async function getCurrentIPLocation() {
    const resultDiv = document.getElementById('geoResultReal');
    resultDiv.innerHTML = '<div style="color: #667eea;">🔄 লোড করছি...</div>';

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        resultDiv.innerHTML = `
            <div class="card" style="background: #f0f8ff;">
                <h4>📍 আপনার IP লোকেশন</h4>
                <table class="table">
                    <tr>
                        <td><strong>IP Address:</strong></td>
                        <td>${data.ip}</td>
                    </tr>
                    <tr>
                        <td><strong>শহর:</strong></td>
                        <td>${data.city}</td>
                    </tr>
                    <tr>
                        <td><strong>অঞ্চল:</strong></td>
                        <td>${data.region}</td>
                    </tr>
                    <tr>
                        <td><strong>দেশ:</strong></td>
                        <td>🇧🇩 ${data.country_name} (${data.country_code})</td>
                    </tr>
                    <tr>
                        <td><strong>পোস্টাল কোড:</strong></td>
                        <td>${data.postal}</td>
                    </tr>
                    <tr>
                        <td><strong>সময় অঞ্চল:</strong></td>
                        <td>${data.timezone}</td>
                    </tr>
                    <tr>
                        <td><strong>স্থানাঙ্ক:</strong></td>
                        <td>${data.latitude}, ${data.longitude}</td>
                    </tr>
                </table>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<div class="alert alert-error">ত্রুটি: ${error.message}</div>`;
    }
}

async function loadBangladeshDivisions() {
    const resultDiv = document.getElementById('geoResultReal');
    resultDiv.innerHTML = '<div style="color: #667eea;">🔄 লোড করছি...</div>';

    try {
        const response = await fetch('https://bdapis.pro.bd/api/v1.0/divisions');
        const data = await response.json();
        
        const divisionSelect = document.getElementById('divisionSelect');
        divisionSelect.innerHTML = '<option>-- বিভাগ নির্বাচন করুন --</option>';
        
        data.data.forEach(division => {
            const option = document.createElement('option');
            option.value = division.id;
            option.textContent = `${division.name} (${division.bn_name})`;
            divisionSelect.appendChild(option);
        });

        let html = '<div class="card" style="background: #f0f8ff;">';
        html += '<h4>✅ বাংলাদেশের বিভাগ</h4>';
        html += '<div class="grid">';
        
        data.data.forEach(division => {
            html += `
                <div class="card" style="text-align: center; background: white; border: 1px solid #ddd;">
                    <div style="padding: 20px;">
                        <div style="font-size: 24px; font-weight: bold; color: #667eea;">${division.name}</div>
                        <div style="font-size: 12px; color: #888;">${division.bn_name}</div>
                    </div>
                </div>
            `;
        });
        
        html += '</div></div>';
        resultDiv.innerHTML = html;
    } catch (error) {
        resultDiv.innerHTML = `<div class="alert alert-error">ত্রুটি: ${error.message}</div>`;
    }
}

async function loadDistrictsByDivision() {
    const divisionId = document.getElementById('divisionSelect').value;
    if (!divisionId || divisionId === '--') return;

    const districtSelect = document.getElementById('districtSelect');
    districtSelect.innerHTML = '<option>লোড করছি...</option>';

    try {
        const response = await fetch('https://bdapis.pro.bd/api/v1.0/districts');
        const data = await response.json();
        
        const filteredDistricts = data.data.filter(d => d.division_id == divisionId);
        
        districtSelect.innerHTML = '<option>-- জেলা নির্বাচন করুন --</option>';
        
        filteredDistricts.forEach(district => {
            const option = document.createElement('option');
            option.value = district.id;
            option.textContent = `${district.name} (${district.bn_name})`;
            districtSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loadUpazilasByDistrict() {
    const districtId = document.getElementById('districtSelect').value;
    const resultDiv = document.getElementById('geoResultReal');
    
    if (!districtId || districtId === '--') {
        resultDiv.innerHTML = '<div class="alert alert-error">অনুগ্রহ করে জেলা নির্বাচন করুন</div>';
        return;
    }

    resultDiv.innerHTML = '<div style="color: #667eea;">🔄 লোড করছি...</div>';

    try {
        const response = await fetch('https://bdapis.pro.bd/api/v1.0/upazilas');
        const data = await response.json();
        
        const filteredUpazilas = data.data.filter(u => u.district_id == districtId);
        
        let html = '<div class="card" style="background: #f0f8ff;">';
        html += `<h4>✅ উপজেলা (${filteredUpazilas.length}টি)</h4>`;
        html += '<table class="table">';
        html += '<tr><th>উপজেলা</th><th>বাংলা নাম</th></tr>';
        
        filteredUpazilas.forEach(upazila => {
            html += `<tr><td>${upazila.name}</td><td>${upazila.bn_name}</td></tr>`;
        });
        
        html += '</table></div>';
        resultDiv.innerHTML = html;
    } catch (error) {
        resultDiv.innerHTML = `<div class="alert alert-error">ত্রুটি: ${error.message}</div>`;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadRealGeolocation };
}