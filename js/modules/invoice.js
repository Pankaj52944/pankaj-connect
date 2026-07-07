// Invoice Module

function loadInvoiceModule() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">📄 ইনভয়েস ব্যবস্থাপনা</div>
            
            <div style="margin-bottom: 20px;">
                <button class="btn btn-primary" onclick="showNewInvoiceForm()">নতুন ইনভয়েস তৈরি করুন</button>
            </div>

            <div id="invoiceForm"></div>

            <div class="card" style="background: #f9f9f9;">
                <h4>সর্বশেষ ইনভয়েস</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ইনভয়েস নম্বর</th>
                            <th>গ্রাহক</th>
                            <th>পরিমাণ</th>
                            <th>তারিখ</th>
                            <th>অবস্থা</th>
                            <th>ক্রিয়া</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>INV-001</td>
                            <td>আহমেদ ট্রেডিং</td>
                            <td>৳ 25,000</td>
                            <td>07-07-2026</td>
                            <td><span style="color: green;">✓ পেমেন্ট হয়েছে</span></td>
                            <td><button class="btn btn-primary" style="padding: 5px 10px; font-size: 12px;">দেখুন</button></td>
                        </tr>
                        <tr>
                            <td>INV-002</td>
                            <td>রহমান এন্টারপ্রাইজ</td>
                            <td>৳ 18,500</td>
                            <td>07-06-2026</td>
                            <td><span style="color: orange;">⏳ অপেক্ষাধীন</span></td>
                            <td><button class="btn btn-primary" style="padding: 5px 10px; font-size: 12px;">দেখুন</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function showNewInvoiceForm() {
    const formDiv = document.getElementById('invoiceForm');
    formDiv.innerHTML = `
        <div class="card" style="background: #f9f9f9;">
            <h4>নতুন ইনভয়েস তৈরি করুন</h4>
            <div class="form-group">
                <label>গ্রাহক নাম:</label>
                <input type="text" id="customerName" placeholder="গ্রাহকের নাম">
            </div>
            <div class="form-group">
                <label>পরিমাণ:</label>
                <input type="number" id="amount" placeholder="পরিমাণ">
            </div>
            <div class="form-group">
                <label>বর্ণনা:</label>
                <textarea id="description" placeholder="পণ্য বা সেবার বর্ণনা" rows="3"></textarea>
            </div>
            <button class="btn btn-primary" onclick="createInvoice()">ইনভয়েস তৈরি করুন</button>
            <button class="btn btn-secondary" onclick="cancelInvoice()">বাতিল করুন</button>
        </div>
    `;
}

function createInvoice() {
    const customerName = document.getElementById('customerName').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (!customerName || !amount) {
        alert('অনুগ্রহ করে সমস্ত ক্ষেত্র পূরণ করুন');
        return;
    }

    alert(`ইনভয়েস তৈরি হয়েছে!\nগ্রাহক: ${customerName}\nপরিমাণ: ৳ ${amount}`);
    document.getElementById('invoiceForm').innerHTML = '';
}

function cancelInvoice() {
    document.getElementById('invoiceForm').innerHTML = '';
}