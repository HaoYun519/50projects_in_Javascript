const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1 //宣告一個選取狀態數值

// 若點擊 next 目前選取狀態 +1
next.addEventListener('click', () => {
    currentActive++;
    // 讓點擊次數不大於我們的陣列數
    if(currentActive > circles.length) { 
        currentActive = circles.length
    }
    update()
});

// 若點擊 prev 目前選取狀態 -1
prev.addEventListener('click', () => {
    currentActive--;
    // 讓點擊次數不小於我們的最小陣列數 1 (不為負值)
    if(currentActive < 1) { 
        currentActive = 1
    }
    update()
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active')
    // 讓 .porgress的width 符合已active的陣列數 (進度條 33.3%, 66.7%, 100%)
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}