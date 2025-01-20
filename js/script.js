const btn = document.querySelector('#circle-btn');

// زمانی که موس وارد دکمه می‌شود
btn.addEventListener('mouseenter', () => {
    btn.classList.add('no-return');  // اضافه کردن کلاس برای جلوگیری از بازگشت رنگ
});

// زمانی که موس از دکمه خارج می‌شود
btn.addEventListener('mouseleave', () => {
    // در اینجا چیزی برای تغییر وضعیت دکمه انجام نمی‌دهیم، تا رنگ از راست خارج شود و برنگردد
});