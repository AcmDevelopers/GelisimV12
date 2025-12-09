(function(){
	const target = new Date('2025-12-07T12:00:00');
	const eventEndDate = new Date('2025-12-08T17:00:00');
	let moved = false;
	let copied = false;
	let statusUpdated = false;

	function pad(n){ return String(n).padStart(2,'0'); }

	function computeParts(){
		const now = new Date();
		let diff = Math.max(0, Math.floor((target - now) / 1000));
		const total = diff;
		const days = Math.floor(diff / 86400); diff %= 86400;
		const hours = Math.floor(diff / 3600); diff %= 3600;
		const minutes = Math.floor(diff / 60);
		const seconds = diff % 60;
		return {
			total,
			days: pad(days),
			hours: pad(hours),
			minutes: pad(minutes),
			seconds: pad(seconds)
		};
	}

	function isLargeScreen(){
		return window.innerWidth >= 1000;
	}

	function createIntroParagraphFromSource(){
		const paragraph = document.getElementById('paragraph');
		const intro = document.getElementById('intro');
		if (!paragraph || !intro) return;
		const newP = document.createElement('p');
		newP.className = 'paragraph';
		newP.innerHTML = paragraph.innerHTML;
		intro.appendChild(newP);
		paragraph.style.display = 'none';
	}

	function undoParagraphMove(){
		const paragraph = document.getElementById('paragraph');
		const intro = document.getElementById('intro');
		if (!paragraph || !intro) return;
		paragraph.style.display = 'block';
		const newP = intro.querySelector('p.paragraph');
		if (newP) newP.remove();
		moved = false;
		copied = false;
	}

	function copyParagraphToIntro(){
		createIntroParagraphFromSource();
		copied = true;
		moved = true;
	}

	function moveParagraphToIntro(){
		createIntroParagraphFromSource();
		moved = true;
	}

	function showStatusAndHideCountdown(){
		const countdown = document.querySelector('.countdown');
		const status = document.getElementById('status');
		if (countdown) countdown.style.display = 'none';
		if (status) status.style.display = 'block';
	}

	function updateStatusText(){
		const status = document.getElementById('status');
		if (!status) return;
		if (Date.now() > eventEndDate.getTime() && status.textContent !== 'Etkinlik Bitti :(') {
			status.textContent = 'Etkinlik Bitti :(';
			status.classList.remove('animated-text');
			document.getElementById('modalForm').style.display = 'none';
			print(update)
		}
	}

	function updateOnce(){
		const parts = computeParts();
		['days','hours','minutes','seconds'].forEach(kind=>{
			const txt = parts[kind];
			const e1 = document.getElementById(kind + '1');
			const e2 = document.getElementById(kind + '2');
			if (e1) e1.textContent = txt[0];
			if (e2) e2.textContent = txt[1];
		});

		updateStatusText();
		if (parts.total === 0 && !statusUpdated) {
			showStatusAndHideCountdown();
			statusUpdated = true;
		}

		if (parts.total === 0 && !moved && !copied && isLargeScreen()) {
			moveParagraphToIntro();
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		const status = document.getElementById('status');
		if (status) status.style.display = 'none';

		if (Date.now() > target.getTime()) {
			showStatusAndHideCountdown();
			updateStatusText();
			statusUpdated = true;

			if (isLargeScreen()) {
				copyParagraphToIntro();
			}
		}

		updateOnce();
		setInterval(updateOnce, 1000);
	});

	window.addEventListener('resize', () => {
		if (!isLargeScreen() && (moved || copied)) {
			undoParagraphMove();
		}
		else if (isLargeScreen() && !moved && !copied && Date.now() > target.getTime()) {
			copyParagraphToIntro();
		}
	});
})();