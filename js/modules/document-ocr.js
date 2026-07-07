// Document OCR Module - Extract text from images
// Using Tesseract.js (Client-side, completely free)

function loadDocumentOCR() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">📄 ডকুমেন্ট OCR (ছবি থেকে টেক্সট)</div>
            <div class="alert alert-success" style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                ✅ Tesseract.js ব্যবহার করছি | সম্পূর্ণ ফ্রি | ক্লায়েন্ট-সাইড | বাংলা ও ইংরেজি সমর্থন
            </div>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3>📸 ছবি আপলোড করুন</h3>
                <div class="form-group">
                    <input type="file" id="ocrImage" accept="image/*" style="padding: 10px; border: 2px dashed #667eea; border-radius: 5px;">
                </div>
                <button class="btn btn-primary" onclick="performOCR()">টেক্সট বের করুন</button>
            </div>

            <div id="ocrPreview" style="margin-bottom: 20px;">
                <img id="previewImage" src="" alt="Preview" style="max-width: 100%; max-height: 300px; border-radius: 10px; display: none;">
            </div>

            <div id="ocrResultReal"></div>

            <div style="margin-top: 30px; background: #fff3cd; padding: 20px; border-radius: 10px; border-left: 4px solid #ffc107;">
                <strong>ℹ️ নোট:</strong> এই টুল ছবি থেকে টেক্সট বের করে। প্রথমবার ব্যবহারে কিছু সময় লাগতে পারে (ML মডেল লোড হচ্ছে)।
            </div>
        </div>
    `;
}

async function performOCR() {
    const fileInput = document.getElementById('ocrImage');
    const resultDiv = document.getElementById('ocrResultReal');
    const previewImg = document.getElementById('previewImage');

    if (!fileInput.files || fileInput.files.length === 0) {
        resultDiv.innerHTML = '<div class="alert alert-error">❌ অনুগ্রহ করে একটি ছবি নির্বাচন করুন</div>';
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
        previewImg.src = e.target.result;
        previewImg.style.display = 'block';
        resultDiv.innerHTML = '<div style="color: #667eea;">🔄 টেক্সট বের করছি... এটি কয়েক সেকেন্ড সময় নিতে পারে...</div>';

        try {
            // Check if Tesseract is available
            if (typeof Tesseract === 'undefined') {
                resultDiv.innerHTML = `
                    <div class="alert alert-error">
                        ⚠️ Tesseract.js লাইব্রেরি লোড করা হয়নি। নিম্নলিখিত স্ক্রিপ্ট যোগ করুন:
                        <pre>&lt;script src="https://tesseract.projectnaptha.com/v2/tesseract.min.js"&gt;&lt;/script&gt;</pre>
                    </div>
                `;
                return;
            }

            const { data: { text } } = await Tesseract.recognize(e.target.result, ['ben', 'eng']);
            
            resultDiv.innerHTML = `
                <div class="card" style="background: #f0f8ff;">
                    <h4>✅ বের করা টেক্সট</h4>
                    <div style="background: white; padding: 20px; border-radius: 5px; border: 1px solid #ddd; max-height: 400px; overflow-y: auto;">
                        <p style="white-space: pre-wrap; line-height: 1.6;">${text}</p>
                    </div>
                    <button class="btn btn-primary" style="margin-top: 15px; width: 100%;" onclick="copyOCRText('${text.replace(/'/g, "\\'")}')">কপি করুন</button>
                </div>
            `;
        } catch (error) {
            resultDiv.innerHTML = `<div class="alert alert-error">ত্রুটি: ${error.message}</div>`;
        }
    };

    reader.readAsDataURL(file);
}

function copyOCRText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✓ টেক্সট কপি করা হয়েছে');
    }).catch(err => {
        console.error('Copy error:', err);
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadDocumentOCR, performOCR };
}