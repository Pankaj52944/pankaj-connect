// HR & Employee Management Module

function loadHRModule() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="card">
            <div class="card-title">👥 কর্মচারী ব্যবস্থাপনা</div>
            
            <div style="margin-bottom: 20px;">
                <button class="btn btn-primary" onclick="showAddEmployeeForm()">নতুন কর্মচারী যোগ করুন</button>
            </div>

            <div id="employeeForm"></div>

            <div class="card" style="background: #f9f9f9;">
                <h4>কর্মচারী তালিকা</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>নাম</th>
                            <th>পদবী</th>
                            <th>বিভাগ</th>
                            <th>বেতন</th>
                            <th>যোগদান তারিখ</th>
                            <th>অবস্থা</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>মোহাম্মদ করিম</td>
                            <td>ম্যানেজার</td>
                            <td>বিক্রয়</td>
                            <td>৳ 35,000</td>
                            <td>01-01-2020</td>
                            <td><span style="color: green;">✓ সক্রিয়</span></td>
                        </tr>
                        <tr>
                            <td>ফাতিমা বেগম</td>
                            <td>একাউন্টেন্ট</td>
                            <td>আর্থিক</td>
                            <td>৳ 25,000</td>
                            <td>15-03-2021</td>
                            <td><span style="color: green;">✓ সক্রিয়</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function showAddEmployeeForm() {
    const formDiv = document.getElementById('employeeForm');
    formDiv.innerHTML = `
        <div class="card" style="background: #f9f9f9;">
            <h4>নতুন কর্মচারী যোগ করুন</h4>
            <div class="form-group">
                <label>কর্মচারীর নাম:</label>
                <input type="text" id="empName" placeholder="নাম">
            </div>
            <div class="form-group">
                <label>পদবী:</label>
                <input type="text" id="empPosition" placeholder="পদবী">
            </div>
            <div class="form-group">
                <label>বিভাগ:</label>
                <select id="empDepartment">
                    <option>বিভাগ নির্বাচন করুন</option>
                    <option>বিক্রয়</option>
                    <option>আর্থিক</option>
                    <option>এইচআর</option>
                    <option>আইটি</option>
                </select>
            </div>
            <div class="form-group">
                <label>বেতন:</label>
                <input type="number" id="empSalary" placeholder="মাসিক বেতন">
            </div>
            <button class="btn btn-primary" onclick="addEmployee()">কর্মচারী যোগ করুন</button>
            <button class="btn btn-secondary" onclick="cancelEmployee()">বাতিল করুন</button>
        </div>
    `;
}

function addEmployee() {
    alert('কর্মচারী সফলভাবে যোগ করা হয়েছে!');
    document.getElementById('employeeForm').innerHTML = '';
}

function cancelEmployee() {
    document.getElementById('employeeForm').innerHTML = '';
}