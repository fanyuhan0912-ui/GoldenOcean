const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navlinks');
if(menuBtn && menu){menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));}

function submitQuote(e){
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent('Golden Ocean website enquiry — ' + (f.get('product') || 'General'));
  const body = encodeURIComponent([
    `Name: ${f.get('name')||''}`,
    `Company: ${f.get('company')||''}`,
    `Email: ${f.get('email')||''}`,
    `Phone: ${f.get('phone')||''}`,
    `Product: ${f.get('product')||''}`,
    `Province: ${f.get('province')||''}`,
    `Approx. quantity: ${f.get('quantity')||''}`,
    '',
    f.get('message')||''
  ].join('\n'));
  window.location.href=`mailto:sales@goldenoceanindustrial.com?subject=${subject}&body=${body}`;
}
