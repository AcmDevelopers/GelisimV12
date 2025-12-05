(function(){
	const target = new Date('2025-12-14T15:00:00'); // ETKİNLİK TARİHİ VE SAATİ GÜNCELLENECEK
	function pad(n){ return String(n).padStart(2,'0'); }

	function computeParts(){
		const now = new Date();
		let diff = Math.max(0, Math.floor((target - now) / 1000));
		const days = Math.floor(diff / 86400); diff %= 86400;
		const hours = Math.floor(diff / 3600); diff %= 3600;
		const minutes = Math.floor(diff / 60);
		const seconds = diff % 60;
		return {
			days: pad(days),
			hours: pad(hours),
			minutes: pad(minutes),
			seconds: pad(seconds)
		};
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
	}

	updateOnce();
	setInterval(updateOnce, 1000);
})();