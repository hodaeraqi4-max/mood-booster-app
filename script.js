const quotes = [
  "خطوة صغيرة كل يوم بتبني إنجاز كبير.. كمل طريقك! 🚀",
  "إنت بتعمل مجهود ممتاز، ما تنساش تطبطب على نفسك ☕✨",
  "يوم جديد يعني فرصة جديدة لشيء غير متوقع ولطيف! 🌸",
  "التركيز في التفاصيل الصغيره هو اللي بيصنع الفرق الكبير 💡",
  "خذ نفس عميق.. كل حاجة هتمشي زي ما إنت عايز وأحسن 🌈",
  "صانع الأثر الطيب مابيتنساش، خليك دايماً أثر طيب 🌟"
];

const quoteElement = document.getElementById('quote');
const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', () => {
  // اختار رسالة عشوائية
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  // أنيميشن بسيط للتغيير
  quoteElement.style.opacity = '0';
  setTimeout(() => {
    quoteElement.innerText = quotes[randomIndex];
    quoteElement.style.opacity = '1';
  }, 200);
});