const faqs = document.querySelectorAll('.faq');
const ans = document.querySelectorAll('.answer');

console.log(ans);
faqs.forEach((faq) =>{
  faq.addEventListener("click", ()=>{
    faq.classList.toggle("active");
  });
});
