// NID Service Module - National ID Verification

function loadNIDService() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">🆔 জাতীয় পরিচয়পত্র (NID) সেবা</div>
            
            <div style="margin-bottom: 30px;">
                <h3>NID যাচাইকরণ</h3>
                <div class="form-group">
                    <label>NID নম্বর:</label>
                    <input type="text" id="nidNumber" placeholder="আপনার NID নম্বর এখানে প্রবেশ করুন" maxlength="17">
                </div>
                <button class="btn btn-primary" onclick="verifyNID()">যাচাই করুন</button>
            </div>

            <div id="nidResult"></div>

            <hr style="margin: 30px 0;">

            <h3>NID থেকে ছবি আপলোড করুন</h3>
            <div class="form-group">
                <input type="file" id="nidImage" accept="image/*">
            </div>
            <button class="btn btn-primary" onclick="processNIDImage()">ছবি প্রক্রিয়া করুন</button>
            <div id="imageResult"></div>
        </div>
    `;
}

async function verifyNID() {
    const nidNumber = document.getElementById('nidNumber').value;
    const resultDiv = document.getElementById('nidResult');

    if (!nidNumber) {
        resultDiv.innerHTML = '<div class="alert alert-error">অনুগ্রহ করে NID নম্বর প্রবেশ করুন</div>';
        return;
    }

    resultDiv.innerHTML = '<div style="color: #667eea;">যাচাই করছে...</div>';

    // Mock API Response
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div class="card" style="background: #f0f4ff;">
                <h4>✓ NID যাচাইকরণ সফল</h4>
                <table class="table">
                    <tr>
                        <td><strong>নাম:</strong></td>
                        <td>মোহাম্মদ পাঞ্জাব আহমেদ</td>
                    </tr>
                    <tr>
                        <td><strong>NID নম্বর:</strong></td>
                        <td>${nidNumber}</td>
                    </tr>
                    <tr>
                        <td><strong>জন্মতারিখ:</strong></td>
                        <td>15-05-1990</td>
                    </tr>
                    <tr>
                        <td><strong>লিঙ্গ:</strong></td>
                        <td>পুরুষ</td>
                    </tr>
                    <tr>
                        <td><strong>ঠিকানা:</strong></td>
                        <td>ঢাকা, বাংলাদেশ</td>
                    </tr>
                    <tr>
                        <td><strong>অবস্থা:</strong></td>
                        <td><span style="color: green;">✓ সক্রিয়</span></td>
                    </tr>
                </table>
            </div>
        `;
    }, 1500);
}

function processNIDImage() {
    const imageInput = document.getElementById('nidImage');
    const resultDiv = document.getElementById('imageResult');

    if (!imageInput.files || imageInput.files.length === 0) {
        resultDiv.innerHTML = '<div class="alert alert-error">অনুগ্রহ করে একটি ছবি নির্বাচন করুন</div>';
        return;
    }

    resultDiv.innerHTML = '<div style="color: #667eea;">ছবি প্রক্রিয়া করছে...</div>';

    // Mock Processing
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div class="card" style="background: #f0f4ff;">
                <h4>✓ ছবি থেকে ডেটা এক্সট্র্যাক্ট করা হয়েছে</h4>
                <table class="table">
                    <tr>
                        <td><strong>নাম (অক্ষর স্বীকৃতি):</strong></td>
                        <td>মোহাম্মদ পাঞ্���াব আহমেদ</td>
                    </tr>
                    <tr>
                        <td><strong>আত্মবিশ্বাসের স্তর:</strong></td>
                        <td>98.5%</td>
                    </tr>
                    <tr>
                        <td><strong>নথি ধরন:</strong></td>
                        <td>জাতীয় পরিচয়পত্র</td>
                    </tr>
                    <tr>
                        <td><strong>গুণমান:</strong></td>
                        <td><span style="color: green;">✓ চমৎকার</span></td>
                    </tr>
                </table>
            </div>
        `;
    }, 2000);
}