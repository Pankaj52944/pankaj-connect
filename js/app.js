// Main Application Controller

function loadModule(moduleName) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = '<div class="loading">লোড করছে...</div>';

    switch(moduleName) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'nid':
            loadNIDService();
            break;
        case 'location':
            loadLocationService();
            break;
        case 'invoice':
            loadInvoiceModule();
            break;
        case 'inventory':
            loadInventoryModule();
            break;
        case 'accounting':
            loadAccountingModule();
            break;
        case 'hr':
            loadHRModule();
            break;
        case 'reports':
            loadReportsModule();
            break;
        default:
            contentArea.innerHTML = '<div class="alert alert-error">মডিউল পাওয়া যায়নি</div>';
    }
}

function loadDashboard() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">স্বাগতম Pankaj Connect ERP তে</div>
            <div class="card-content">
                <p>এটি একটি সম্পূর্ণ ফ্রি ক্লাউড-ভিত্তিক ERP সফটওয়্যার যা 40+ ফ্রি APIs দিয়ে সমৃদ্ধ।</p>
                <br>
                <h3>বৈশিষ্ট্য:</h3>
                <ul>
                    <li>✅ NID যাচাইকরণ ও ডেটা এক্সট্র্যাকশন</li>
                    <li>✅ লাইভ জিপিএস লোকেশন ট্র্যাকিং</li>
                    <li>✅ স্বয়ংক্রিয় ইনভয়েস জেনারেশন</li>
                    <li>✅ ইনভেন্টরি ম্যানেজমেন্ট</li>
                    <li>✅ কর্মচারী & HR ম্যানেজমেন্ট</li>
                    <li>✅ আর্থিক রিপোর্টিং</li>
                    <li>✅ মাল্টি-ইউজার সাপোর্ট</li>
                    <li>✅ সম্পূর্ণ ফ্রি</li>
                </ul>
            </div>
        </div>
        <div class="grid">
            <div class="card" style="text-align: center; cursor: pointer;" onclick="loadModule('nid')">
                <i class="fas fa-id-card" style="font-size: 40px; color: #667eea; margin-bottom: 10px;"></i>
                <div class="card-title">NID সেবা</div>
                <p>জাতীয় পরিচয়পত্র যাচাইকরণ</p>
            </div>
            <div class="card" style="text-align: center; cursor: pointer;" onclick="loadModule('location')">
                <i class="fas fa-map-marker-alt" style="font-size: 40px; color: #667eea; margin-bottom: 10px;"></i>
                <div class="card-title">লাইভ লোকেশন</div>
                <p>রিয়েল-টাইম লোকেশন ট্র্যাকিং</p>
            </div>
            <div class="card" style="text-align: center; cursor: pointer;" onclick="loadModule('invoice')">
                <i class="fas fa-file-invoice" style="font-size: 40px; color: #667eea; margin-bottom: 10px;"></i>
                <div class="card-title">ইনভয়েস</div>
                <p>স্বয়ংক্রিয় বিলিং সিস্টেম</p>
            </div>
        </div>
    `;
}

// Initialize
window.addEventListener('load', function() {
    loadDashboard();
});