// ============================================
// Pankaj Connect - 40+ Free APIs Configuration
// ============================================

const API_CONFIG = {
    // 1. NID/National ID APIs
    nid: {
        verify: 'https://api.example.com/nid/verify',
        toImage: 'https://api.example.com/nid/to-image',
        extract: 'https://api.example.com/nid/extract-data',
    },

    // 2. Location & Geolocation APIs
    location: {
        getCurrentLocation: 'https://api.example.com/location/current',
        getAddress: 'https://api.example.com/location/address',
        getCoordinates: 'https://api.example.com/location/coordinates',
        reverseGeocode: 'https://api.example.com/location/reverse-geocode',
    },

    // 3. SMS/Communication APIs (Free Tier)
    sms: {
        send: 'https://api.example.com/sms/send',
        getBalance: 'https://api.example.com/sms/balance',
        getStatus: 'https://api.example.com/sms/status',
    },

    // 4. Email APIs (Free Tier)
    email: {
        send: 'https://api.example.com/email/send',
        sendBulk: 'https://api.example.com/email/send-bulk',
        getTemplate: 'https://api.example.com/email/template',
    },

    // 5. Currency & Exchange Rate APIs
    currency: {
        getRate: 'https://api.exchangerate-api.com/v4/latest/',
        convert: 'https://api.example.com/currency/convert',
        getHistorical: 'https://api.example.com/currency/historical',
    },

    // 6. Payment Gateway APIs (Free Verification)
    payment: {
        verify: 'https://api.example.com/payment/verify',
        getStatus: 'https://api.example.com/payment/status',
    },

    // 7. Banking APIs
    banking: {
        accountVerify: 'https://api.example.com/bank/verify-account',
        ifscDetails: 'https://api.example.com/bank/ifsc-details',
        bankList: 'https://api.example.com/bank/list',
    },

    // 8. TIN Certificate APIs
    tin: {
        verify: 'https://api.example.com/tin/verify',
        getDetails: 'https://api.example.com/tin/details',
    },

    // 9. Tax APIs
    tax: {
        calculateVAT: 'https://api.example.com/tax/vat',
        calculateTax: 'https://api.example.com/tax/calculate',
    },

    // 10. Document APIs
    document: {
        ocr: 'https://api.example.com/document/ocr',
        extract: 'https://api.example.com/document/extract',
        verify: 'https://api.example.com/document/verify',
    },

    // 11. Weather APIs
    weather: {
        current: 'https://api.open-meteo.com/v1/forecast',
        forecast: 'https://api.example.com/weather/forecast',
    },

    // 12. Time & Date APIs
    time: {
        getTime: 'https://api.example.com/time/get',
        getTimezone: 'https://api.example.com/time/timezone',
    },

    // 13. Country & City APIs
    country: {
        list: 'https://api.example.com/country/list',
        getCities: 'https://api.example.com/country/cities',
    },

    // 14. Validation APIs
    validation: {
        validateEmail: 'https://api.example.com/validate/email',
        validatePhone: 'https://api.example.com/validate/phone',
        validateAddress: 'https://api.example.com/validate/address',
    },

    // 15. QR Code APIs
    qrCode: {
        generate: 'https://api.qrserver.com/v1/create-qr-code/',
        decode: 'https://api.example.com/qrcode/decode',
    },

    // 16. Barcode APIs
    barcode: {
        generate: 'https://api.example.com/barcode/generate',
        verify: 'https://api.example.com/barcode/verify',
    },

    // 17. Image Processing APIs
    image: {
        resize: 'https://api.example.com/image/resize',
        compress: 'https://api.example.com/image/compress',
        watermark: 'https://api.example.com/image/watermark',
    },

    // 18. PDF APIs
    pdf: {
        generate: 'https://api.example.com/pdf/generate',
        merge: 'https://api.example.com/pdf/merge',
        extract: 'https://api.example.com/pdf/extract',
    },

    // 19. Analytics APIs
    analytics: {
        track: 'https://api.example.com/analytics/track',
        getReport: 'https://api.example.com/analytics/report',
    },

    // 20. Authentication APIs
    auth: {
        loginWithOTP: 'https://api.example.com/auth/otp',
        verifyOTP: 'https://api.example.com/auth/verify-otp',
    },

    // 21. File Upload APIs
    file: {
        upload: 'https://api.example.com/file/upload',
        getFile: 'https://api.example.com/file/get',
        delete: 'https://api.example.com/file/delete',
    },

    // 22. Invoice & Receipt APIs
    invoice: {
        generate: 'https://api.example.com/invoice/generate',
        template: 'https://api.example.com/invoice/template',
    },

    // 23. Inventory APIs
    inventory: {
        getStock: 'https://api.example.com/inventory/stock',
        updateStock: 'https://api.example.com/inventory/update',
        getLowStock: 'https://api.example.com/inventory/low-stock',
    },

    // 24. Customer APIs
    customer: {
        create: 'https://api.example.com/customer/create',
        getList: 'https://api.example.com/customer/list',
        getDetails: 'https://api.example.com/customer/details',
    },

    // 25. Supplier APIs
    supplier: {
        create: 'https://api.example.com/supplier/create',
        getList: 'https://api.example.com/supplier/list',
    },

    // 26. Purchase Order APIs
    purchase: {
        create: 'https://api.example.com/purchase/create',
        getList: 'https://api.example.com/purchase/list',
    },

    // 27. Sales APIs
    sales: {
        create: 'https://api.example.com/sales/create',
        getList: 'https://api.example.com/sales/list',
    },

    // 28. Expense APIs
    expense: {
        create: 'https://api.example.com/expense/create',
        getList: 'https://api.example.com/expense/list',
    },

    // 29. Employee APIs
    employee: {
        create: 'https://api.example.com/employee/create',
        getList: 'https://api.example.com/employee/list',
        getPayroll: 'https://api.example.com/employee/payroll',
    },

    // 30. Leave Management APIs
    leave: {
        apply: 'https://api.example.com/leave/apply',
        getBalance: 'https://api.example.com/leave/balance',
        getList: 'https://api.example.com/leave/list',
    },

    // 31. Attendance APIs
    attendance: {
        markAttendance: 'https://api.example.com/attendance/mark',
        getReport: 'https://api.example.com/attendance/report',
    },

    // 32. Salary APIs
    salary: {
        calculate: 'https://api.example.com/salary/calculate',
        generate: 'https://api.example.com/salary/generate-slip',
    },

    // 33. Account Ledger APIs
    ledger: {
        create: 'https://api.example.com/ledger/create',
        getList: 'https://api.example.com/ledger/list',
        getBalance: 'https://api.example.com/ledger/balance',
    },

    // 34. Report APIs
    report: {
        generateSalesReport: 'https://api.example.com/report/sales',
        generateIncomeStatement: 'https://api.example.com/report/income',
        generateBalanceSheet: 'https://api.example.com/report/balance-sheet',
    },

    // 35. Notification APIs
    notification: {
        send: 'https://api.example.com/notification/send',
        getList: 'https://api.example.com/notification/list',
    },

    // 36. User Management APIs
    user: {
        create: 'https://api.example.com/user/create',
        getList: 'https://api.example.com/user/list',
        updateRole: 'https://api.example.com/user/update-role',
    },

    // 37. Role & Permission APIs
    role: {
        create: 'https://api.example.com/role/create',
        getList: 'https://api.example.com/role/list',
    },

    // 38. Backup APIs
    backup: {
        create: 'https://api.example.com/backup/create',
        restore: 'https://api.example.com/backup/restore',
    },

    // 39. Settings APIs
    settings: {
        get: 'https://api.example.com/settings/get',
        update: 'https://api.example.com/settings/update',
    },

    // 40. Dashboard APIs
    dashboard: {
        getSummary: 'https://api.example.com/dashboard/summary',
        getCharts: 'https://api.example.com/dashboard/charts',
    }
};

// Utility function to call API
async function callAPI(category, endpoint, method = 'GET', data = null) {
    try {
        const url = API_CONFIG[category]?.[endpoint];
        if (!url) throw new Error(`API endpoint not found: ${category}.${endpoint}`);

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (method !== 'GET' && data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return { error: error.message };
    }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { API_CONFIG, callAPI };
}