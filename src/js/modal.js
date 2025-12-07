const speakersData = [
	{
		name: "Said Sakıp DEMİR",
		date: "17 Aralık",
		time: "12.00",
		bio: "2015 yılından beri çeşitli projelerde çeşitli görevler aldı. 2018 yılında film yapımına tam zamanlı olarak uğraşşmak için Bilkent Üniversitesi Ekonomi Bölümü'nü bıraktı. Sinema sektöründe çeşitli pozisyonlarda deneyim kazanmasının yanı sıra videography yaptı. Çektiği kısa filmler ödüller ve seçkiler kazandı. Demir, 2025 yazında ise sosyal medya içerik üreticiliği ile yeni bir maceraya yelken açtı.",
		instagram: "#",
		photo: "said_demir.jpg"
	},
	{
		name: "Batuhan YILMAZ",
		date: "17 Aralık",
		time: "13.30",
		bio: "7 yaşından beri illüzyon sanatıyla ilgilenen Yılmaz, henüz 16 yaşında ilk uluslarası yarışmasını kazanarak kariyerinde profesyonel bir adım attı. Sonrasında yurt dışında birçok yarışmada boy gösterdi ve sahne deneyimi kazandı. 25 yaşında 18 yıllık sahne geçmişi olan Yılmaz, çeşitli etkinliklerde yer alarak tecrübelerini ve sanatını kitlelerle paylaşmaya devam ediyor.",
		instagram: "#",
		photo: "batuhan_yilmaz.jpg"
	},
	{
		name: "Can 'Portal' AYBALIK",
		date: "17 Aralık",
		time: "15.00",
		bio: "Bilkent Üniveritesi Bilgisayar Mühendisliği Bölümü'nden mezun olan Aybalık, 2021 yılında hikaye anlatılığı tutkusu ile 'Portal' YouTube kanalını hayata geçirdi. Sanat, edebiyat ve felsefe disiplinlerine odaklanan videolarında; ele aldığı sanat eserlerini felsefi ve psikolojik kavramlarla harmanlayıp izleyiciye sunuyor. Ayrıca, Spotify üzerinden 'Portal ile Yansıma' ismiyle podcast yayıncılığı da yapmaktadır.",
		instagram: "#",
		photo: "can_aybalik.jpg"
	},
	{
		name: "Konuk İsmi Ama Uzun 4",
		date: "18 Aralık",
		time: "12.00",
		bio: "Konuk İsmi Ama Uzun 4 hakkında kısa bilgi: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		instagram: "#",
		photo: "profil4.png"
	},
	{
		name: "Konuk İsmi Ama Uzun 5",
		date: "18 Aralık",
		time: "13.30",
		bio: "Konuk İsmi Ama Uzun 5 hakkında kısa bilgi: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		instagram: "#",
		photo: "profil5.png"
	},
	{
		name: "Konuk İsmi Ama Uzun 6",
		date: "18 Aralık",
		time: "15.00",
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