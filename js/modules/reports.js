// Reports Module

function loadReportsModule() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">📊 রিপোর্ট ও বিশ্লেষণ</div>
            
            <div style="margin-bottom: 20px;">
                <button class="btn btn-primary" onclick="generateSalesReport()">বিক্রয় রিপোর্ট</button>
                <button class="btn btn-primary" onclick="generateIncomeReport()">আয় রিপোর্ট</button>
                <button class="btn btn-primary" onclick="generateInventoryReport()">ইনভেন্টরি রিপোর্ট</button>
            </div>

            <div id="reportResult"></div>
        </div>
    `;
}

function generateSalesReport() {
    const resultDiv = document.getElementById('reportResult');
    resultDiv.innerHTML = `
        <div class="card" style="background: #f0f4ff;">
            <h4>📈 বিক্রয় রিপোর্ট</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th>মাস</th>
                        <th>বিক্রয়</th>
                        <th>লক্ষ্য</th>
                        <th>অর্জন %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>জানুয়ারী</td>
                        <td>৳ 1,25,000</td>
                        <td>৳ 1,50,000</td>
                        <td>83.3%</td>
                    </tr>
                    <tr>
                        <td>ফেব্রুয়ারী</td>
                        <td>৳ 1,45,000</td>
                        <td>৳ 1,50,000</td>
                        <td>96.7%</td>
                    </tr>
                    <tr>
                        <td>মার্চ</td>
                        <td>৳ 1,60,000</td>
                        <td>৳ 1,50,000</td>
                        <td>106.7% ✓</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function generateIncomeReport() {
    const resultDiv = document.getElementById('reportResult');
    resultDiv.innerHTML = `
        <div class="card" style="background: #f0f4ff;">
            <h4>💵 আয়-ব্যয় রিপোর্ট</h4>
            <table class="table">
                <tr>
                    <td><strong>মোট আয়:</strong></td>
                    <td>৳ 5,50,000</td>
                </tr>
                <tr>
                    <td><strong>মোট খরচ:</strong></td>
                    <td>৳ 2,15,000</td>
                </tr>
                <tr style="background: #e8f5e9;">
                    <td><strong>নেট লাভ:</strong></td>
                    <td><strong>৳ 3,35,000</strong></td>
                </tr>
            </table>
        </div>
    `;
}

function generateInventoryReport() {
    const resultDiv = document.getElementById('reportResult');
    resultDiv.innerHTML = `
        <div class="card" style="background: #f0f4ff;">
            <h4>📦 ইনভেন্টরি রিপোর্ট</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th>পণ্য</th>
                        <th>স্টক</th>
                        <th>মূল্য</th>
                        <th>সর্বাধিক</th>
                        <th>সর্বনিম্ন</th>
                        <th>স্থিতি</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>মাউস</td>
                        <td>145</td>
                        <td>৳ 450</td>
                        <td>200</td>
                        <td>50</td>
                        <td><span style="color: green;">✓ ভালো</span></td>
                    </tr>
                    <tr>
                        <td>কীবোর্ড</td>
                        <td>8</td>
                        <td>৳ 1,200</td>
                        <td>50</td>
                        <td>20</td>
                        <td><span style="color: orange;">⚠ কম</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}