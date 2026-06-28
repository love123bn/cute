const emojis = ['🌸','💕','✨','🌷','🦋','💗','🌺','⭐','💖','🕊️'];
const bg = document.getElementById('bgHearts');
for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (5 + Math.random() * 6) + 's';
    span.style.animationDelay = Math.random() * 6 + 's';
    span.style.fontSize = (16 + Math.random() * 20) + 'px';
    bg.appendChild(span);
}

const readings = [
    { emoji: '🌹', text: 'Lá bài <span>The Lovers</span> xuất hiện! 🥰<br>Tình yêu đang đến rất gần rồi. Có một người đang thầm thương bạn đấy! Hãy mở lòng mình ra nhé.' },
    { emoji: '⭐', text: 'Lá bài <span>The Star</span> xuất hiện! ✨<br>Vũ trụ đang ủng hộ bạn! Một điều bất ngờ ngọt ngào sắp đến. Hãy sẵn sàng đón nhận hạnh phúc nhé!' },
    { emoji: '🔥', text: 'Lá bài <span>The Sun</span> xuất hiện! 🌞<br>Năng lượng tình yêu đang bao quanh bạn! Một lời mời thú vị sắp đến, hãy nắm bắt cơ hội nhé!' },
    { emoji: '🌙', text: 'Lá bài <span>The Moon</span> xuất hiện! 🌙<br>Có một bí mật ngọt ngào đang chờ bạn khám phá. Ai đó đang rung động vì bạn đấy!' },
    { emoji: '👑', text: 'Lá bài <span>The Empress</span> xuất hiện! 👑<br>Bạn tỏa sáng như một nữ hoàng! Sự dịu dàng và quyến rũ của bạn đang thu hút một người đặc biệt.' },
    { emoji: '🪄', text: 'Lá bài <span>The Magician</span> xuất hiện! ✨<br>Phép màu sắp xảy ra! Bạn có một sức hút kỳ diệu, và ai đó sắp không cưỡng lại được đâu.' },
    { emoji: '🏆', text: 'Lá bài <span>The Chariot</span> xuất hiện! 🏆<br>Chiến thắng trong tình yêu đang đến! Hãy tự tin tiến về phía trước, trái tim bạn rồi sẽ thuộc về bạn.' },
    { emoji: '🌍', text: 'Lá bài <span>The World</span> xuất hiện! 🌍<br>Vòng quay hạnh phúc đã hoàn tất! Một mối quan hệ tuyệt vời đang chờ đón bạn ở cuối con đường.' },
    { emoji: '🔮', text: 'Lá bài <span>The High Priestess</span> xuất hiện! 🔮<br>Trực giác của bạn mách bảo điều gì đó rất đặc biệt. Hãy lắng nghe con tim, một lời mời thú vị đang đến!' },
    { emoji: '🌈', text: 'Lá bài <span>The Fool</span> xuất hiện! 🃏<br>Một cuộc phiêu lưu tình cảm mới đang chờ! Đừng ngại bước đầu tiên, vì điều tuyệt vời nhất sắp đến rồi!' }
];

let picked = false;

function pickCard(el) {
    if (picked) return;
    picked = true;

    document.querySelectorAll('.card').forEach(c => c.classList.add('disabled'));
    el.classList.remove('disabled');
    el.classList.add('flipped');

    const idx = parseInt(el.dataset.index);
    const r = readings[idx];

    setTimeout(() => {
        const result = document.getElementById('tarot-result');
        document.getElementById('resultEmoji').textContent = r.emoji;
        document.getElementById('resultText').innerHTML = r.text;
        result.style.display = 'block';
        document.getElementById('btnContinue').classList.remove('hidden');
    }, 900);
}

function goToInvite() {
    document.getElementById('page-tarot').classList.remove('active');
    document.getElementById('page-invite').classList.add('active');
}

function runAway() {
    const btn = document.getElementById('btnNo');
    const bw = btn.offsetWidth;
    const bh = btn.offsetHeight;
    const pad = 16;
    const w = window.innerWidth;
    const h = window.innerHeight;

    let x, y;
    do {
        x = Math.random() * (w - bw - pad * 2) + pad;
        y = Math.random() * (h - bh - pad * 2) + pad;
    } while (
        x > w * 0.25 && x < w * 0.75 &&
        y > h * 0.3 && y < h * 0.7
    );

    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

document.addEventListener('touchstart', function(e) {
    if (e.target.closest('#btnNo')) {
        runAway();
    }
}, { passive: true });

function sayYes() {
    document.getElementById('page-invite').classList.remove('active');
    document.getElementById('page-success').classList.add('active');
}
