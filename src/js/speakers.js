function createSpeakerElement(speaker, index) {
	const div = document.createElement('div');
	div.className = 'speaker';
	div.innerHTML = `
		<span class="tarih">${speaker.date} <span class="saat">${speaker.time}</span></span>
		<div class="speakerinfo">
			<img class="photo" src="profiles/${speaker.photo}">
			<div style="display: flex; flex-direction: column;">
					<span class="isim">${speaker.name}</span>
					<span class="ozet">${speaker.profession}</span>
			</div>
		</div>
		<div class="socials">
			<a href="${speaker.instagram}" target="_blank"><img class="social" src="logos/ins2.png"></a>
			<a href="${speaker.yt}" target="_blank"><img class="social" src="logos/yt2.png"></a>
		</div>
	`;
	return div;
}

function renderSpeakers() {
	const contentContainer = document.querySelector('.content');
	if (!contentContainer) return;
	
	contentContainer.innerHTML = '';
	speakersData.forEach((speaker, index) => {
		const speakerElement = createSpeakerElement(speaker, index);
		speakerElement.style.cursor = 'pointer';
		speakerElement.addEventListener('click', () => openModal(index));
		contentContainer.appendChild(speakerElement);
	});
}

function openModal(index) {
	const speaker = speakersData[index];
	if (!speaker) return;
	
	const photoEl = document.getElementById('modalPhoto');
	if (photoEl) {
		if (speaker.photo) photoEl.src = "profiles/" + speaker.photo;
	}

	document.getElementById('modalTitle').textContent = speaker.name;
	document.getElementById('modalDate').textContent = speaker.date + " " + speaker.time;
	document.getElementById('modalBio').textContent = speaker.bio;
	document.getElementById('modalForm').href = speaker.form || '#';
	document.getElementById('modalInstagram').href = speaker.instagram || '#';
	document.getElementById('modalYt').href = speaker.yt || '#';
	document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
	const modal = document.querySelector('.modal');
	const overlay = document.getElementById('modalOverlay');
	modal.classList.add('closing');
	setTimeout(() => {
		overlay.classList.remove('active');
		modal.classList.remove('closing');
	}, 400);
}

document.addEventListener('DOMContentLoaded', () => {
	renderSpeakers();
	
	document.getElementById('modalOverlay').addEventListener('click', function(e) {
		if (e.target === this) closeModal();
	});
});