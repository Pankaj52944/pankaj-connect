# 🚀 Pankaj Connect - সম্পূর্ণ ফ্রি ERP সফটওয়্যার

## 📦 সেটআপ ইন্সট্রাকশন

### প্রয়োজনীয় জিনিস
- ইন্টারনেট সংযোগ
- যেকোনো আধুনিক ওয়েব ব্রাউজার (Chrome, Firefox, Edge, Safari)
- কোনো ইনস্টলেশন প্রয়োজন নেই!

### ধাপ 1: প্রকল্প ক্লোন করুন
```bash
git clone https://github.com/Pankaj52944/pankaj-connect.git
cd pankaj-connect
```

### ধাপ 2: লোকাল সার্ভার চালান
```bash
# Python 3 ব্যবহার করে
python -m http.server 8000

# অথবা Python 2 দিয়ে
python -m SimpleHTTPServer 8000

# অথবা Node.js http-server দিয়ে
npx http-server
```

### ধাপ 3: ব্রাউজারে খুলুন
```
http://localhost:8000/index-complete.html
```

---

## 🎯 সব মডিউল এবং তাদের API

### 1. 🎫 টিন যাচাইকরণ (Bangladesh Tax)
```
API: E-TAX API (Open Source)
Endpoint: https://bangladesh-tax-verification-api.zenjahid-api.workers.dev/
Method: POST
Cost: সম্পূর্ণ ফ্রি
Feature: সরাসরি NBR থেকে যাচাই
```

### 2. 📱 ফোন নম্বর যাচাই
```
API: Numverify
Endpoint: http://apilayer.net/api/validate
Method: GET
Cost: 1,000 calls/month ফ্রি
Feature: অপারেটর, লাইন টাইপ, দেশ তথ্য
```

### 3. 🏦 ব্যাংক SWIFT কোড
```
API: API Ninjas
Endpoint: https://api.api-ninjas.com/v1/swiftcode
Method: GET
Cost: 50,000 calls/month ফ্রি
Feature: সব দেশের ব্যাংক তথ্য
```

### 4. 🗺️ ভৌগোলিক তথ্য (Bangladesh)
```
API: BDAPIS
Endpoint: https://bdapis.pro.bd/api/v1.0/
Method: GET
Cost: সম্পূর্ণ ফ্রি
Feature: বিভাগ, জেলা, উপজেলা
```

### 5. 💱 মুদ্রা বিনিময়ের হার
```
API: Exchange Rate API
Endpoint: https://api.exchangerate-api.com/v4/latest/
Method: GET
Cost: 1,500 calls/month ফ্রি
Feature: রিয়েল-টাইম বিনিময় হার
```

### 6. 📄 ডকুমেন্ট OCR
```
Library: Tesseract.js
Method: Client-side
Cost: সম্পূর্ণ ফ্রি
Feature: ছবি থেকে বাংলা ও ইংরেজি টেক্সট বের করুন
```

### 7. 📲 QR & বারকোড জেনারেটর
```
API: QR Server
Endpoint: https://api.qrserver.com/v1/create-qr-code/
Method: GET
Cost: সীমাহীন ফ্রি
Feature: QR কোড তৈরি, ডাউনলোড, প্রিন্ট করুন
```

### 8. 🌤️ আবহাওয়া পূর্বাভাস
```
API: Open-Meteo
Endpoint: https://api.open-meteo.com/v1/forecast
Method: GET
Cost: সীমাহীন ফ্রি
Feature: API Key প্রয়োজন নেই, সব দেশের আবহাওয়া
```

---

## 🔐 নিরাপত্তা নোট

✅ সব API কল HTTPS এর মাধ্যমে সুরক্ষিত  
✅ কোনো ব্যক্তিগত তথ্য আমাদের সার্ভারে রক্ষা করা হয় না  
✅ সমস্ত ডেটা এনক্রিপ্ট করা  
✅ ওপেন সোর্স এবং সম্পূর্ণ স্বচ্ছ  

---

## 📊 বৈশিষ্ট্য তালিকা

| বৈশিষ্ট্য | স্ট্যাটাস | API Provider | খরচ |
|---------|---------|--------------|-----|
| টিন যাচাইকরণ | ✅ Live | E-TAX API | ফ্রি |
| ফোন যাচাই | ✅ Live | Numverify | ফ্রি |
| ব্যাংক SWIFT | ✅ Live | API Ninjas | ফ্রি |
| ভৌগোলিক তথ্য | ✅ Live | BDAPIS | ফ্রি |
| মুদ্রা বিনিময় | ✅ Live | Exchange Rate API | ফ্রি |
| ডকুমেন্ট OCR | ✅ Live | Tesseract.js | ফ্রি |
| QR/বারকোড | ✅ Live | QR Server | ফ্রি |
| আবহাওয়া | ✅ Live | Open-Meteo | ফ্রি |

---

## 🎓 শিক্ষামূলক সম্পদ

- [30+ ফ্রি APIs নথি](REAL_WORKING_APIS.md)
- [API কনফিগারেশন](js/api-config-real.js)
- [টিন মডিউল](js/modules/real-tin-verification.js)
- [ফোন মডিউল](js/modules/real-phone-validation.js)
- [ব্যাংক মডিউল](js/modules/real-bank-swift.js)
- [ভৌগোলিক মডিউল](js/modules/real-geolocation.js)
- [মুদ্রা মডিউল](js/modules/real-currency-exchange.js)
- [OCR মডিউল](js/modules/document-ocr.js)
- [QR মডিউল](js/modules/qr-barcode-generator.js)
- [আবহাওয়া মডিউল](js/modules/real-weather.js)

---

## 🤝 অবদান রাখুন

আমরা স্বাগত জানাই:
1. নতুন ফ্রি APIs যোগ করতে
2. বাগ রিপোর্ট করতে
3. বৈশিষ্ট্য পরামর্শ দিতে
4. অনুবাদ সাহায্য করতে

---

## 📝 লাইসেন্স

MIT License - সম্পূর্ণ ওপেন সোর্স

---

## 💝 আমাদের লক্ষ্য

**বয়স্ক ও প্রতিবন্ধী মানুষদের জন্য সম্পূর্ণ বিনামূল্যে ডিজিটাল সেবা প্রদান করা।**

কোনো লুকানো খরচ নেই। সবকিছু সম্পূর্ণ স্বচ্ছ এবং বৈধ।

---

## 📞 যোগাযোগ

- **GitHub:** [@Pankaj52944](https://github.com/Pankaj52944)
- **প্রকল্প:** [pankaj-connect](https://github.com/Pankaj52944/pankaj-connect)

---

**আপডেট:** 07 জুলাই 2026  
**সংস্করণ:** 1.0.0 (প্রোডাকশন রেডি)  
**অবস্থা:** 🟢 লাইভ এবং চলমান

🚀 **একসাথে গড়ব ডিজিটাল বাংলাদেশ!**