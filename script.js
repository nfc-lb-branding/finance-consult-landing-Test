// DOM Elements
const saveCardBtn = document.getElementById('saveCardBtn');
const saveCardBtn2 = document.getElementById('saveCardBtn2');
const lineBtn = document.getElementById('lineBtn');
const lineBtn2 = document.getElementById('lineBtn2');
const aiIntroBtn = document.getElementById('aiIntroBtn');
const saveCardModal = document.getElementById('saveCardModal');
const aiIntroModal = document.getElementById('aiIntroModal');
const modalCloseBtns = document.querySelectorAll('.modal-close');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const footerLine = document.getElementById('footerLine');
const footerCard = document.getElementById('footerCard');
const modalConfirmBtn = document.querySelector('.modal-confirm');

// LINEで相談ボタン
function openLine() {
  // 後で実際のLINE URLに差し替え
  window.open('https://line.me/ti/p/~YOUR_LINE_ID', '_blank');
}

// 名刺をスマホに保存モーダル
function openSaveCardModal() {
  if (!saveCardModal) return;
  saveCardModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// AI自己紹介モーダル
function openAiIntroModal() {
  if (!aiIntroModal) return;
  aiIntroModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// モーダルを閉じる
function closeModal(modal) {
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Event Listeners
saveCardBtn?.addEventListener('click', openSaveCardModal);
saveCardBtn2?.addEventListener('click', openSaveCardModal);
lineBtn?.addEventListener('click', openLine);
lineBtn2?.addEventListener('click', openLine);
aiIntroBtn?.addEventListener('click', openAiIntroModal);
footerLine?.addEventListener('click', (e) => {
  e.preventDefault();
  openLine();
});
footerCard?.addEventListener('click', (e) => {
  e.preventDefault();
  openSaveCardModal();
});

// モーダル閉じるボタン
modalCloseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    closeModal(modal);
  });
});

// モーダル背景クリックで閉じる
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal(e.target);
  }
});

modalConfirmBtn?.addEventListener('click', () => closeModal(saveCardModal));

// デバイスタブ切り替え
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const device = btn.dataset.device;
    
    // タブボタンのアクティブ状態を切り替え
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // タブコンテンツの表示を切り替え
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === device) {
        content.classList.add('active');
      }
    });
  });
});

// AI動画プレースホルダークリック
document.querySelector('.ai-player-placeholder')?.addEventListener('click', openAiIntroModal);

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// スクロールアニメーション（簡易版）
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// アニメーション対象要素を監視
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.service-card, .stat-item, .faq-item');
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// フォームバリデーション（もしフォームが追加された場合）
function validateForm(form) {
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  });
  
  return isValid;
}

// エラーハンドリング
window.addEventListener('error', (e) => {
  console.error('JavaScript Error:', e.error);
});

// パフォーマンス監視（開発用）
if (window.performance && window.performance.mark) {
  window.performance.mark('app-start');
  
  window.addEventListener('load', () => {
    window.performance.mark('app-loaded');
    window.performance.measure('app-load-time', 'app-start', 'app-loaded');
    
    const loadTime = window.performance.getEntriesByName('app-load-time')[0];
    console.log(`App loaded in ${loadTime.duration.toFixed(2)}ms`);
  });
}
