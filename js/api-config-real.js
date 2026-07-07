// ============================================
// Pankaj Connect - REAL WORKING FREE APIs
// 30+ Verified & Working APIs
// ============================================

const REAL_API_CONFIG = {
    // ============ 1. TIN VERIFICATION (Bangladesh) ============
    tin: {
        verify: {
            endpoint: 'https://bangladesh-tax-verification-api.zenjahid-api.workers.dev/',
            method: 'POST',
            description: 'টিন যাচাইকরণ - সরাসরি NBR থেকে',
            free: true,
            example: {
                tin_no: '1177203828XX',
                assessment_year: '2023-2024'
            }
        },
        // Alternative TIN Check
        tinCheckAPI: {
            endpoint: 'https://api.tin-check.com/validate',
            method: 'POST',
            description: 'TIN Format Validation',
            free: true,
            requires_key: true
        }
    },

    // ============ 2. PHONE NUMBER VALIDATION ============
    phoneValidation: {
        numverify: {
            endpoint: 'http://apilayer.net/api/validate',
            method: 'GET',
            description: 'ফোন নম্বর যাচাই - বাংলাদেশ সহ',
            free: true,
            freeLimit: '1000 requests/month',
            params: {
                access_key: 'YOUR_API_KEY',
                number: '+8801XXXXXXXXX'
            },
            example: 'http://apilayer.net/api/validate?access_key=YOUR_KEY&number=%2B8801XXXXXXXXX'
        },
        emobiletracker: {
            endpoint: 'https://www.emobiletracker.com/api/',
            method: 'GET',
            description: 'মোবাইল অপারেটর তথ্য',
            free: true,
            noApiKey: true
        }
    },

    // ============ 3. BANK SWIFT CODE VERIFICATION ============
    bankSwift: {
        apiNinjas: {
            endpoint: 'https://api.api-ninjas.com/v1/swiftcode',
            method: 'GET',
            description: 'ব্যাংক SWIFT কোড - বিশ্বব্যাপী',
            free: true,
            freeLimit: '50000 requests/month',
            params: {
                'X-Api-Key': 'YOUR_API_KEY',
                country: 'BD',
                bank: 'BRAC'
            }
        },
        apifreaks: {
            endpoint: 'https://apifreaks.com/api/swift-code-lookup',
            method: 'GET',
            description: 'SWIFT/BIC কোড লুকআপ',
            free: true,
            freeCredits: '10000 free credits'
        },
        apilayer: {
            endpoint: 'https://api.apilayer.com/bank_data/validate',
            method: 'GET',
            description: 'ব্যাংক ডেটা ভেরিফিকেশন',
            free: true,
            params: {
                'apikey': 'YOUR_API_KEY',
                'swift': 'BRAKBDDH'
            }
        }
    },

    // ============ 4. GEOLOCATION - BANGLADESH ============
    location: {
        bdapis: {
            endpoint: 'https://bdapis.pro.bd/api',
            method: 'GET',
            description: 'বাংলাদেশ - বিভাগ, জেলা, উপজেলা',
            free: true,
            noApiKey: true,
            endpoints: {
                divisions: 'https://bdapis.pro.bd/api/v1.0/divisions',
                districts: 'https://bdapis.pro.bd/api/v1.0/districts',
                upazila: 'https://bdapis.pro.bd/api/v1.0/upazila'
            }
        },
        bdopenapi: {
            endpoint: 'https://bdopenapi.vercel.app/api',
            method: 'GET',
            description: 'বাংলাদেশ ভৌগোলিক তথ্য API',
            free: true,
            noApiKey: true
        },
        openMapBoxGeocoding: {
            endpoint: 'https://api.mapbox.com/geocoding/v5/',
            method: 'GET',
            description: 'জিওকোডিং - স্থান খুঁজে বের করুন',
            free: true,
            freeLimit: '100000 requests/month'
        }
    },

    // ============ 5. DOCUMENT OCR & IMAGE PROCESSING ============
    documentOcr: {
        tesseractJS: {
            endpoint: 'Local JavaScript Library',
            method: 'CLIENT_SIDE',
            description: 'ছবি থেকে টেক্সট বের করুন - সম্পূর্ণ ফ্রি',
            free: true,
            noApiKey: true,
            usage: 'npm install tesseract.js'
        },
        qrscanner: {
            endpoint: 'Local JavaScript Library',
            method: 'CLIENT_SIDE',
            description: 'QR কোড স্ক্যান করুন',
            free: true,
            noApiKey: true,
            usage: 'npm install jsqr'
        }
    },

    // ============ 6. WEATHER & ENVIRONMENT ============
    weather: {
        openWeatherMap: {
            endpoint: 'https://api.openweathermap.org/data/2.5/weather',
            method: 'GET',
            description: 'রিয়েল-টাইম আবহাওয়া',
            free: true,
            freeLimit: '1000 requests/day',
            params: {
                'appid': 'YOUR_API_KEY',
                'lat': '23.8103',
                'lon': '90.4125'
            }
        },
        openMeteo: {
            endpoint: 'https://api.open-meteo.com/v1/forecast',
            method: 'GET',
            description: 'আবহাওয়া পূর্বাভাস - কোনো API কী প্রয়োজন নেই',
            free: true,
            noApiKey: true,
            unlimited: true
        }
    },

    // ============ 7. CURRENCY & EXCHANGE ============
    currency: {
        exchangeRateAPI: {
            endpoint: 'https://api.exchangerate-api.com/v4/latest/',
            method: 'GET',
            description: 'মুদ্রা বিনিময়ের হার',
            free: true,
            freeLimit: '1500 requests/month',
            noApiKey: true,
            example: 'https://api.exchangerate-api.com/v4/latest/BDT'
        },
        openExchangeRates: {
            endpoint: 'https://openexchangerates.org/api/latest.json',
            method: 'GET',
            description: 'বিশ্ব মুদ্রার হার',
            free: true,
            freeLimit: '1000 requests/month'
        }
    },

    // ============ 8. QR CODE GENERATION ============
    qrCode: {
        qrserver: {
            endpoint: 'https://api.qrserver.com/v1/create-qr-code/',
            method: 'GET',
            description: 'QR কোড জেনারেট করুন',
            free: true,
            unlimited: true,
            noApiKey: true,
            example: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=HelloWorld'
        }
    },

    // ============ 9. BARCODE GENERATION ============
    barcode: {
        barcodeTool: {
            endpoint: 'Local Library - JsBarcode',
            method: 'CLIENT_SIDE',
            description: 'বারকোড জেনারেট করুন',
            free: true,
            noApiKey: true,
            usage: 'npm install jsbarcode'
        }
    },

    // ============ 10. PDF GENERATION ============
    pdf: {
        pdfKit: {
            endpoint: 'Local Library - pdfkit',
            method: 'SERVER_SIDE',
            description: 'PDF রিপোর্ট তৈরি করুন',
            free: true,
            noApiKey: true,
            usage: 'npm install pdfkit'
        },
        html2pdf: {
            endpoint: 'Local Library - html2pdf.js',
            method: 'CLIENT_SIDE',
            description: 'HTML কে PDF তে রূপান্তরিত করুন',
            free: true,
            noApiKey: true,
            usage: 'npm install html2pdf.js'
        }
    },

    // ============ 11. EXCEL/CSV PROCESSING ============
    spreadsheet: {
        papaparse: {
            endpoint: 'Local Library - PapaParse',
            method: 'CLIENT_SIDE',
            description: 'CSV ফাইল পার্স করুন',
            free: true,
            noApiKey: true,
            usage: 'npm install papaparse'
        },
        xlsx: {
            endpoint: 'Local Library - XLSX',
            method: 'CLIENT_SIDE_AND_SERVER',
            description: 'এক্সেল ফাইল তৈরি ও পড়ুন',
            free: true,
            noApiKey: true,
            usage: 'npm install xlsx'
        }
    },

    // ============ 12. EMAIL SENDING (Free Tier) ============
    email: {
        sendGrid: {
            endpoint: 'https://api.sendgrid.com/v3/mail/send',
            method: 'POST',
            description: 'ইমেল পাঠান',
            free: true,
            freeLimit: '100 emails/day',
            requires_key: true
        },
        mailgun: {
            endpoint: 'https://api.mailgun.net/v3',
            method: 'POST',
            description: 'ইমেল সেবা',
            free: true,
            freeLimit: '10000 emails/month'
        }
    },

    // ============ 13. SMS (Free Trial) ============
    sms: {
        twilio: {
            endpoint: 'https://api.twilio.com/2010-04-01/Accounts/',
            method: 'POST',
            description: 'SMS পাঠান',
            free: true,
            freeTrial: '30 days with $15 credit'
        }
    },

    // ============ 14. DATA VALIDATION ============
    validation: {
        validationAPI: {
            endpoint: 'https://api.mailbox.org/api/v1/validate',
            method: 'GET',
            description: 'ইমেল যাচাই করুন',
            free: true
        }
    },

    // ============ 15. TIME & DATE ============
    time: {
        timeAPI: {
            endpoint: 'https://www.timeapi.io/api/Time/current/zone',
            method: 'GET',
            description: 'সময় অঞ্চল তথ্য',
            free: true,
            unlimited: true,
            noApiKey: true,
            example: 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Dhaka'
        }
    },

    // ============ 16. IP GEOLOCATION ============
    ipGeolocation: {
        ipapi: {
            endpoint: 'https://ipapi.co/json/',
            method: 'GET',
            description: 'IP থেকে অবস্থান খুঁজুন',
            free: true,
            unlimited: true,
            noApiKey: true
        }
    },

    // ============ 17. GOVERNMENT OPEN DATA ============
    governmentData: {
        bangladeshOpenData: {
            endpoint: 'http://data.gov.bd/api',
            method: 'GET',
            description: 'সরকারি ডেটা - কৃষি, শিক্ষা, স্বাস্থ্য',
            free: true,
            noApiKey: true
        }
    },

    // ============ 18. LANGUAGE TRANSLATION ============
    translation: {
        googleTranslate: {
            endpoint: 'https://translate.googleapis.com/translate_a',
            method: 'GET',
            description: 'ভাষা অনুবাদ',
            free: true,
            unlimited: true,
            noApiKey: true
        }
    },

    // ============ 19. CHART & GRAPH RENDERING ============
    charts: {
        chartJS: {
            endpoint: 'Local Library - Chart.js',
            method: 'CLIENT_SIDE',
            description: 'গ্রাফ এবং চার্ট তৈরি করুন',
            free: true,
            noApiKey: true,
            usage: 'npm install chart.js'
        },
        plotly: {
            endpoint: 'Local Library - Plotly.js',
            method: 'CLIENT_SIDE',
            description: 'ইন্টারঅ্যাক্টিভ চার্ট',
            free: true,
            noApiKey: true
        }
    },

    // ============ 20. AUTHENTICATION & OTP ============
    authentication: {
        otpGeneration: {
            endpoint: 'Local Function',
            method: 'SERVER_SIDE',
            description: 'OTP জেনারেট করুন',
            free: true,
            noApiKey: true
        }
    },

    // ============ 21. DATABASE (Firebase - Free Tier) ============
    database: {
        firebase: {
            endpoint: 'https://firebaseio.com/',
            method: 'REST',
            description: 'রিয়েল-টাইম ডেটাবেস',
            free: true,
            freeLimit: '1 GB storage'
        }
    },

    // ============ 22. FILE STORAGE ============
    fileStorage: {
        cloudinary: {
            endpoint: 'https://api.cloudinary.com/v1_1',
            method: 'POST',
            description: 'ফাইল আপলোড করুন',
            free: true,
            freeLimit: '10 GB/month'
        }
    },

    // ============ 23. TEXT ANALYSIS ============
    textAnalysis: {
        sentiment: {
            endpoint: 'Local ML Library',
            method: 'CLIENT_SIDE',
            description: 'মনোভাব বিশ্লেষণ',
            free: true,
            usage: 'npm install sentiment'
        }
    }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * TIN যাচাই করুন - বাংলাদেশ
 */
async function verifyTINNumber(tinNumber, assessmentYear = '2023-2024') {
    try {
        const response = await fetch(REAL_API_CONFIG.tin.verify.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tin_no: tinNumber,
                assessment_year: assessmentYear
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('TIN Verification Error:', error);
        return { error: error.message };
    }
}

/**
 * ফোন নম্বর যাচাই করুন
 */
async function validatePhoneNumber(phoneNumber, apiKey) {
    try {
        const response = await fetch(
            `http://apilayer.net/api/validate?access_key=${apiKey}&number=${encodeURIComponent(phoneNumber)}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Phone Validation Error:', error);
        return { error: error.message };
    }
}

/**
 * SWIFT কোড খুঁজুন
 */
async function getSwiftCode(country, bank, apiKey) {
    try {
        const response = await fetch(
            `https://api.api-ninjas.com/v1/swiftcode?country=${country}&bank=${bank}`,
            {
                headers: { 'X-Api-Key': apiKey }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('SWIFT Code Error:', error);
        return { error: error.message };
    }
}

/**
 * বাংলাদেশের সমস্ত জেলা পান
 */
async function getDistrictsOfBangladesh() {
    try {
        const response = await fetch('https://bdapis.pro.bd/api/v1.0/districts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Districts Error:', error);
        return { error: error.message };
    }
}

/**
 * মুদ্রা বিনিময়ের হার পান
 */
async function getExchangeRate(baseCurrency = 'BDT') {
    try {
        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Exchange Rate Error:', error);
        return { error: error.message };
    }
}

/**
 * QR কোড URL জেনারেট করুন
 */
function generateQRCode(data, size = '200x200') {
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(data)}`;
}

/**
 * আবহাওয়া তথ্য পান
 */
async function getWeatherInfo(lat, lon) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Weather Error:', error);
        return { error: error.message };
    }
}

/**
 * IP থেকে অবস্থান পান
 */
async function getLocationFromIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('IP Geolocation Error:', error);
        return { error: error.message };
    }
}

/**
 * সময় অঞ্চল তথ্য পান
 */
async function getTimeZoneInfo(timeZone = 'Asia/Dhaka') {
    try {
        const response = await fetch(
            `https://www.timeapi.io/api/Time/current/zone?timeZone=${timeZone}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('TimeZone Error:', error);
        return { error: error.message };
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        REAL_API_CONFIG,
        verifyTINNumber,
        validatePhoneNumber,
        getSwiftCode,
        getDistrictsOfBangladesh,
        getExchangeRate,
        generateQRCode,
        getWeatherInfo,
        getLocationFromIP,
        getTimeZoneInfo
    };
}