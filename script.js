function checkPassword() {
    const passwordInput = document.getElementById("passwordField").value;
    const errorMessage = document.getElementById("errorMessage");
    const loginSection = document.getElementById("loginSection");
    const secretSection = document.getElementById("secretSection");

    // ضعي كلمة السر هنا (مثال: تاريخ التخرج 2024)
    const correctPassword = '26/06/2026'; 

    if (passwordInput === correctPassword) {
        // إخفاء رسالة الخطأ إن وُجدت
        errorMessage.style.display = "none";
        
        // إخفاء بوابة الدخول
        loginSection.style.display = "none";
        
        // إظهار المساحة السرية
        secretSection.style.display = "flex"; 
    } else {
        // إظهار رسالة الخطأ
        errorMessage.innerText = "الرمز غير صحيح.. حاولي مجدداً";
        errorMessage.style.display = "block";
    }
}