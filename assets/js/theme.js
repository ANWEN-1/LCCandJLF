// theme.js

// 1. 网页加载时：检查记忆
const savedTheme = localStorage.getItem('theme');
const checkbox = document.getElementById('day-night-switch');

// 如果记忆是黑夜，就加上类名，并把开关拨过去
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (checkbox) {
        checkbox.checked = true;
    }
}

// 2. 监听开关变化
if (checkbox) {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}