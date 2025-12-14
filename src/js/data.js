var speakersData = [
	{
		name: "Said Sakıp DEMİR",
		date: "17 Aralık",
		time: "12.00",
		profession: "İçerik Üreticisi",
		bio: "2015 yılından beri çeşitli projelerde çeşitli görevler aldı. 2018 yılında film yapımına tam zamanlı olarak uğraşmak için Bilkent Üniversitesi Ekonomi Bölümü'nü bıraktı. Sinema sektöründe çeşitli pozisyonlarda deneyim kazanmasının yanı sıra videography yaptı. Çektiği kısa filmler ödüller ve seçkiler kazandı. Demir, 2025 yazında ise sosyal medya içerik üreticiliği ile yeni bir maceraya yelken açtı.",
		instagram: "https://www.instagram.com/saidsakipdemir/",
		yt: "https://www.youtube.com/@SaidSakipDemir",
		photo: "said_demir.png",
		form: "https://docs.google.com/forms/d/e/1FAIpQLSeRNwumKE-hTivojZrPvxEUQOiCup6jnWrjL-Qsnf6jbFHUhg/viewform"
	},
	{
		name: "Batuhan YILMAZ",
		date: "17 Aralık",
		time: "13.30",
		profession: "Sanatçı",
		bio: "7 yaşından beri illüzyon sanatıyla ilgilenen Yılmaz, henüz 16 yaşında ilk uluslarası yarışmasını kazanarak kariyerinde profesyonel bir adım atmıştır. Sonrasında yurt dışında birçok yarışmada boy göstermiş ve sahne deneyimi kazanmıştır. 25 yaşında 18 yıllık sahne geçmişi olan Yılmaz, çeşitli etkinliklerde yer alarak tecrübelerini ve sanatını kitlelerle paylaşmaya devam etmektedir.",
		instagram: "https://www.instagram.com/batuyilz/",
		yt: "https://www.youtube.com/@batuylmz",
		photo: "batuhan_yilmaz.png",
		form: "https://docs.google.com/forms/d/e/1FAIpQLSeC5hmndID58D7TEqymCPl_Sh2n63f5Mv1qXpvyWKt-CYigFw/viewform"
	},
	{
		name: "Can 'Portal' AYBALIK",
		date: "17 Aralık",
		time: "15.00",
		profession: "Dijital İçerik Üreticisi",
		bio: "Bilkent Üniveritesi Bilgisayar Mühendisliği Bölümü'nden mezun olan Aybalık, 2021 yılında hikaye anlatıcılığı tutkusu ile 'Portal' YouTube kanalını hayata geçirmiştir. Sanat, edebiyat ve felsefe disiplinlerine odaklanan videolarında; ele aldığı sanat eserlerini felsefi ve psikolojik kavramlarla harmanlayıp izleyiciye sunmaktadır. Ayrıca, Spotify üzerinden 'Portal ile Yansıma' ismiyle podcast yayıncılığı da yapmaktadır.",
		instagram: "https://www.instagram.com/canaybalik/",
		yt: "https://www.youtube.com/@PortalVideo",
		photo: "can_aybalik.png",
		form: "https://docs.google.com/forms/d/e/1FAIpQLScNPVnzo14Dgfe3gqpuSo1EfGO1VjCsiQKEHnnoqXAHOgb0kg/viewform"
	},
	{
		name: "Ömer Semi ÜNAL",
		date: "18 Aralık",
		time: "12.00",
		profession: "Antrenör & Diyetisyen",
		bio: "Sosyal medyada 'Kelömer' ismiyle tanınan Ünal; kendi fiziksel dönüşüm serüveninde edindiği disiplin ve tecrübeyi, bilimsel temellerle birleştirerek profesyonel bir metoda dönüştürmüştür. Sadece yöntemleri değil, yöntemler arkasındaki nedenleri de takipçilerine ve danışanlarına aktarmayı ilke edinmiştir. Gelişimi bir sonuçtan ziyade bir süreç olarak ele alır ve bilimi pratikle harmanlayarak dürüst ve gerçekçi yaklaşımıyla insanlara rehberlik eder.",
		instagram: "https://www.instagram.com/kelomerofc/",
		yt: "https://www.youtube.com/@Ömersemiünal",
		photo: "omer_unal.png",
		form: "https://docs.google.com/forms/d/e/1FAIpQLSd3cy0mVtBMcUyAHnd6hEcutdH6uHCrt4K2gWQbvYrsB7BLWg/viewform"
	},
	{
		name: "Görkem ŞAHİN",
		date: "18 Aralık",
		time: "13.30",
		profession: "Eğitimci & Dijital İçerik Üreticisi",
		bio: "Kimyayı sadece bir ders olarak değil bir hikaye olarak anlatmayı hedefleyen eğitimci ve içerik üreticisidir. YKS öğrencilerine yönelik kitaplar, videolar ve sınıf içi motivasyon projeleriyle kısa sürede geniş bir kitleye ulaşmıştır. Eğlenceli ve akılda kalıcı bir öğrenme süreci yaşatmasının yanı sıra gençlere sahne söyleşileri ve motivasyon konuşmalaryla da ilham vermektedir.",
		instagram: "https://www.instagram.com/gorkemsahinofficiall/",
		yt: "https://www.youtube.com/@gorkemsahinn",
		photo: "gorkem_sahin.png",
		form: "https://docs.google.com/forms/d/e/1FAIpQLSddGylAEJrLoxO9YssX3a7JL6kVsuT4HBp33WikZ6rua4cuPQ/viewform"
	},
	{
		name: "Doç. Dr. Gökçen ERDOĞAN",
		date: "18 Aralık",
		time: "15.00",
		profession: "Kadın Hastalıkları ve Doğum Uzmanı",
		bio: "Uludağ Üniversitesi Tıp Fakültesi mezunudur. Uzmanlığını tamamladıktan sonra yüksek lisansını 'halk sağlığı', doktorasını ise 'sosyal psikoloji' üzerine Başkent Üniversitesinde yapmıştır. Birçok üniversitede 'jinekolojik kozmetoloji' alanında eğitmen olarak görev almaktadır. Tıbbi birikimini toplumsal farkındalık çalışmalarıyla birleştiren Erdoğan, 5 kitap yayımlamıştır. Bunlara ek olarak 'kozmetik jinekoloji' alanında global ölçekte kabul gören 6 akademik kitabın da editörlüğünü üstlenmiştir.",
		instagram: "https://www.instagram.com/drgokcenerdogan/",
		yt: "https://www.youtube.com/c/GökçenErdoğan",
		photo: "gokcen_erdogan.png",
		form: "https://docs.google.com/forms/d/e/1FAIpQLSdFl0gN2B8yUPRFMvuDriPtwF8DIXeeAmgSfWyXtcMsJhmgJQ/viewform"
	}
];
