// Dashboard Module

function loadDashboard() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">📊 ড্যাশবোর্ড</div>
            <div class="grid">
                <div class="card">
                    <div style="text-align: center;">
                        <div style="font-size: 40px; color: #667eea; margin-bottom: 10px;">💰</div>
                        <div style="font-size: 24px; font-weight: bold;">৳ 5,25,000</div>
                        <div style="color: #888;">মোট বিক্রয়</div>
                    </div>
                </div>
                <div class="card">
                    <div style="text-align: center;">
                        <div style="font-size: 40px; color: #667eea; margin-bottom: 10px;">📦</div>
                        <div style="font-size: 24px; font-weight: bold;">1,245</div>
                        <div style="color: #888;">মোট পণ্য</div>
                    </div>
                </div>
                <div class="card">
                    <div style="text-align: center;">
                        <div style="font-size: 40px; color: #667eea; margin-bottom: 10px;">👥</div>
                        <div style="font-size: 24px; font-weight: bold;">128</div>
                        <div style="color: #888;">গ্রাহক</div>
                    </div>
                </div>
                <div class="card">
                    <div style="text-align: center;">
                        <div style="font-size: 40px; color: #667eea; margin-bottom: 10px;">👨‍💼</div>
                        <div style="font-size: 24px; font-weight: bold;">45</div>
                        <div style="color: #888;">কর্মচারী</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-title">সম্প্রতি সংযুক্ত</div>
            <table class="table">
                <thead>
                    <tr>
                        <th>তারিখ</th>
                        <th>পরিমাণ</th>
                        <th>অবস্থা</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>07-07-2026</td>
                        <td>৳ 45,000</td>
                        <td><span style="color: green;">✓ সম্পন্ন</span></td>
                    </tr>
                    <tr>
                        <td>07-06-2026</td>
                        <td>৳ 32,500</td>
                        <td><span style="color: green;">✓ সম্পন্ন</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}