function switchLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.getElementById('lang-button').innerText = lang === 'ar' ? 'EN' : 'AR';
  document.getElementById('hero-title').innerText = lang === 'ar'
    ? 'هندسة بثقة.. تنفيذ بدقة'
    : 'Engineering with Trust, Executing with Precision';
  document.getElementById('hero-tag').innerText = lang === 'ar'
    ? 'شركة عثمانوفيتش للاستشارات الهندسية والتنفيذ، بإشراف المهندس محمد العثمان.'
    : 'Osmanovich is a structural consulting & contracting firm led by Eng. Mohammad Al-Othman.';
  document.getElementById('cta-button').innerText = lang === 'ar'
    ? 'احجز استشارتك الآن'
    : 'Book Your Consultation Now';

  document.querySelector('#services h2').innerText = lang === 'ar' ? 'خدماتنا' : 'Our Services';
  document.querySelector('#contact h2').innerText = lang === 'ar' ? 'تواصل معنا' : 'Contact Us';

  document.querySelector('.services').innerHTML = lang === 'ar' ? `
    <div class="card"><h3><i class="fas fa-drafting-compass"></i> استشارات إنشائية</h3><p>الاستشارات لمشاريع سكنية وتجارية وصناعية.</p></div>
    <div class="card"><h3><i class="fas fa-tools"></i> تنفيذ متكامل</h3><p>تنفيذ مشاريع المباني بالإشراف الكامل.</p></div>
    <div class="card"><h3><i class="fas fa-ruler-combined"></i> تصميم إنشائي</h3><p>تصميم القواعد، الأعمدة، الأسقف، والجسور.</p></div>
    <div class="card"><h3><i class="fas fa-project-diagram"></i> مخططات تنفيذية</h3><p>مخططات تنفيذية بصيغة CAD جاهزة للمقاولين.</p></div>
  ` : `
    <div class="card"><h3><i class="fas fa-drafting-compass"></i> Structural Consulting</h3><p>Consulting for residential, commercial, and industrial projects.</p></div>
    <div class="card"><h3><i class="fas fa-tools"></i> Turnkey Execution</h3><p>Complete building execution under supervision.</p></div>
    <div class="card"><h3><i class="fas fa-ruler-combined"></i> Structural Design</h3><p>Design of foundations, columns, slabs, and beams.</p></div>
    <div class="card"><h3><i class="fas fa-project-diagram"></i> Execution Drawings</h3><p>CAD-based execution drawings for contractors.</p></div>
  `;
}


function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  switchLang(newLang);
}

window.onload = () => {
  switchLang('ar');
};
