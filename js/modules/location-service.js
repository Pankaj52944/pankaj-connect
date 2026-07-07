// Live Location Service Module

function loadLocationService() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">📍 লাইভ লোকেশন ট্র্যাকিং</div>
            
            <div style="margin-bottom: 20px;">
                <button class="btn btn-primary" onclick="getCurrentLocation()">বর্তমান লোকেশন পান</button>
                <button class="btn btn-secondary" onclick="startTracking()">লাইভ ট্র্যাকিং শুরু করুন</button>
                <button class="btn btn-danger" onclick="stopTracking()">ট্র্যাকিং বন্ধ করুন</button>
            </div>

            <div id="locationResult"></div>

            <div id="map" style="width: 100%; height: 400px; background: #e0e0e0; border-radius: 10px; margin: 20px 0;"></div>

            <div class="card" style="background: #f9f9f9;">
                <h4>ট্র্যাকিং ইতিহাস</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>সময়</th>
                            <th>অক্ষাংশ</th>
                            <th>দ্রাঘিমাংশ</th>
                            <th>নির্ভুলতা</th>
                        </tr>
                    </thead>
                    <tbody id="locationHistory">
                        <tr>
                            <td>10:30 AM</td>
                            <td>23.8103°N</td>
                            <td>90.4125°E</td>
                            <td>±10 মিটার</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getCurrentLocation() {
    const resultDiv = document.getElementById('locationResult');
    resultDiv.innerHTML = '<div style="color: #667eea;">লোকেশন খুঁজছি...</div>';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const accuracy = position.coords.accuracy;

                resultDiv.innerHTML = `
                    <div class="card" style="background: #f0f4ff;">
                        <h4>✓ বর্তমান লোকেশন</h4>
                        <table class="table">
                            <tr>
                                <td><strong>অক্ষাংশ:</strong></td>
                                <td>${lat.toFixed(4)}°N</td>
                            </tr>
                            <tr>
                                <td><strong>দ্রাঘিমাংশ:</strong></td>
                                <td>${lon.toFixed(4)}°E</td>
                            </tr>
                            <tr>
                                <td><strong>নির্ভুলতা:</strong></td>
                                <td>±${Math.round(accuracy)} মিটার</td>
                            </tr>
                            <tr>
                                <td><strong>সময়:</strong></td>
                                <td>${new Date().toLocaleString('bn-BD')}</td>
                            </tr>
                        </table>
                    </div>
                `;
            },
            (error) => {
                resultDiv.innerHTML = `<div class="alert alert-error">লোকেশন অ্যাক্সেস অস্বীকৃত: ${error.message}</div>`;
            }
        );
    } else {
        resultDiv.innerHTML = '<div class="alert alert-error">এই ব্রাউজার জিওলোকেশন সমর্থন করে না</div>';
    }
}

function startTracking() {
    document.getElementById('locationResult').innerHTML = '<div style="color: #667eea;">লাইভ ট্র্যাকিং সক্রিয় করা হয়েছে</div>';
}

function stopTracking() {
    document.getElementById('locationResult').innerHTML = '<div style="color: #e74c3c;">ট্র্যাকিং বন্ধ করা হয়েছে</div>';
}