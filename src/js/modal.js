// BİLGİLER GÜNCELLENECEK
const speakersData = [
	{
		name: "Konuk İsmi 1",
		date: "14 Aralık",
		time: "15.00",
		bio: "Konuk İsmi 1 hakkında kısa bilgi: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		instagram: "#",
		photo: "profil.jpg"
	},
	{
		name: "Konuk İsmi 2",
		date: "14 Aralık",
		time: "15.00",
		bio: "Konuk İsmi 2 hakkında kısa bilgi: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		instagram: "#",
		photo: "profil2.png"
	},
	{
		name: "Konuk İsmi 3",
		date: "14 Aralık",
		time: "15.00",
		bio: "Konuk İsmi 3 hakkında kısa bilgi: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		instagram: "#",
		photo: "profil3.png"
	},
	{
		name: "Konuk İsmi Ama Uzun 4",
		date: "XX Aralık",
		time: "XX.XX",
		bio: "Konuk İsmi Ama Uzun 4 hakkında kısa bilgi: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		instagram: "#",
		photo: "profil4.png"
	},
	{
		name: "Konuk İsmi Ama Uzun 5",
		date: "XX Aralık",
		time: "XX.XX",
		bio: "Konuk İsmi Ama Uzun 5 hakkında kısa bilgi: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		instagram: "#",
		photo: "profil5.png"
	},
	{
		name: "Konuk İsmi Ama Uzun 6",
		date: "XX Aralık",
		time: "XX.XX",
		bio: "Konuk İsmi Ama Uzun 6 hakkında kısa bilgi: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		instagram: "#",
		photo: "profil6.jpg"
	}
];

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
	document.getElementById('modalInstagram').href = speaker.instagram || '#';
	document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
	const modal = document.querySelector('.modal');
	const overlay = document.getElementById('modalOverlay');
	modal.classList.add('closing');setTimeout(() => {
		overlay.classList.remove('active');
		modal.classList.remove('closing');
	}, 400);
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
   if (e.target === this) closeModal();
});

document.querySelectorAll('.speaker').forEach((speakerEl, index) => {
	if (speakersData[index]) {
		speakerEl.style.cursor = 'pointer';
		speakerEl.addEventListener('click', () => openModal(index));
	}
});