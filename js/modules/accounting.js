// Accounting Module

function loadAccountingModule() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">💰 আর্থিক ব্যবস্থাপনা</div>
            
            <div class="grid">
                <div class="card">
                    <div style="text-align: center;">
                        <div style="font-size: 35px; color: green; margin-bottom: 10px;">৳ 2,50,000</div>
                        <div style="font-size: 14px; font-weight: bold;">মোট আয়</div>
                    </div>
                </div>
                <div class="card">
                    <div style="text-align: center;">
                        <div style="font-size: 35px; color: red; margin-bottom: 10px;">৳ 1,05,000</div>
                        <div style="font-size: 14px; font-weight: bold;">মোট খরচ</div>
                    </div>
                </div>
                <div class="card">
                    <div style="text-align: center;">
                        <div style="font-size: 35px; color: #667eea; margin-bottom: 10px;">৳ 1,45,000</div>
                        <div style="font-size: 14px; font-weight: bold;">নেট লাভ</div>
                    </div>
                </div>
            </div>

            <div class="card" style="background: #f9f9f9; margin-top: 20px;">
                <h4>হিসাব লেজার</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>তারিখ</th>
                            <th>বিবরণ</th>
                            <th>ডেবিট</th>
                            <th>ক্রেডিট</th>
                            <th>ব্যালেন্স</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01-07-2026</td>
                            <td>প্রারম্ভিক ব্যালেন্স</td>
                            <td>—</td>
                            <td>—</td>
                            <td>৳ 5,00,000</td>
                        </tr>
                        <tr>
                            <td>05-07-2026</td>
                            <td>বিক্রয় আয়</td>
                            <td>৳ 75,000</td>
                            <td>—</td>
                            <td>৳ 5,75,000</td>
                        </tr>
                        <tr>
                            <td>06-07-2026</td>
                            <td>অফিস খরচ</td>
                            <td>—</td>
                            <td>৳ 15,000</td>
                            <td>৳ 5,60,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}