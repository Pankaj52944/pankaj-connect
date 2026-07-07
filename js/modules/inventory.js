// Inventory Module

function loadInventoryModule() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">📦 ইনভেন্টরি ব্যবস্থাপনা</div>
            
            <div style="margin-bottom: 20px;">
                <button class="btn btn-primary" onclick="showAddProductForm()">নতুন পণ্য যোগ করুন</button>
            </div>

            <div id="productForm"></div>

            <div class="card" style="background: #f9f9f9;">
                <h4>পণ্য স্টক</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>পণ্যের নাম</th>
                            <th>SKU</th>
                            <th>স্টক</th>
                            <th>মূল্য</th>
                            <th>শ্রেণী</th>
                            <th>স্থিতি</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>কমপিউটার মাউস</td>
                            <td>MOUSE-001</td>
                            <td>145</td>
                            <td>৳ 450</td>
                            <td>ইলেকট্রনিক্স</td>
                            <td><span style="color: green;">✓ স্টকে আছে</span></td>
                        </tr>
                        <tr>
                            <td>কীবোর্ড</td>
                            <td>KEY-001</td>
                            <td>8</td>
                            <td>৳ 1,200</td>
                            <td>ইলেকট্রনিক্স</td>
                            <td><span style="color: orange;">⚠ কম স্টক</span></td>
                        </tr>
                        <tr>
                            <td>এইচডিএমআই ক্যাবল</td>
                            <td>HDMI-001</td>
                            <td>0</td>
                            <td>৳ 250</td>
                            <td>এক্সেসরিজ</td>
                            <td><span style="color: red;">✕ স্টক শেষ</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function showAddProductForm() {
    const formDiv = document.getElementById('productForm');
    formDiv.innerHTML = `
        <div class="card" style="background: #f9f9f9;">
            <h4>নতুন পণ্য যোগ করুন</h4>
            <div class="form-group">
                <label>পণ্যের নাম:</label>
                <input type="text" id="productName" placeholder="পণ্যের নাম">
            </div>
            <div class="form-group">
                <label>SKU:</label>
                <input type="text" id="productSKU" placeholder="পণ্য কোড">
            </div>
            <div class="form-group">
                <label>প্রাথমিক স্টক:</label>
                <input type="number" id="productStock" placeholder="পরিমাণ">
            </div>
            <div class="form-group">
                <label>মূল্য:</label>
                <input type="number" id="productPrice" placeholder="মূল্য">
            </div>
            <button class="btn btn-primary" onclick="addProduct()">পণ্য যোগ করুন</button>
            <button class="btn btn-secondary" onclick="cancelProduct()">বাতিল করুন</button>
        </div>
    `;
}

function addProduct() {
    alert('পণ্য সফলভাবে যোগ করা হয়েছে!');
    document.getElementById('productForm').innerHTML = '';
}

function cancelProduct() {
    document.getElementById('productForm').innerHTML = '';
}