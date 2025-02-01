document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        { title: "сүйемін", artist: "Unknown Artist", audioUrl: "music/сүйемін .mp3" },
        { title: "Alan Walker - Where are you now (Faded)", artist: "Alan Walker", audioUrl: "music/Alan Walker - Where are you now (Faded).mp3" },
        { title: "Britney Spears - Criminal", artist: "Britney Spears", audioUrl: "music/Britney Spears - Criminal.mp3" },
        { title: "Chase Atlantic - Moonlight", artist: "Chase Atlantic", audioUrl: "music/Chase Atlantic-Moonlight.mp3" },
        { title: "DEAD BLONDE - Всего лишь друг", artist: "DEAD BLONDE", audioUrl: "music/DEAD BLONDE-Всего лишь друг.mp3" },
        { title: "Dutch Melrose - PRETTY PLEASE (feat. benny mayne)", artist: "Dutch Melrose", audioUrl: "music/Dutch Melrose - PRETTY PLEASE (feat. benny mayne).mp3" },
        { title: "Elley Duhé - MIDDLE OF THE NIGHT", artist: "Elley Duhé", audioUrl: "music/Elley Duhé-MIDDLE OF THE NIGHT.mp3" },
        { title: "Filatov & Karas feat. Masha - Лирика (feat. Masha)", artist: "Filatov & Karas", audioUrl: "music/Filatov   Karas feat. Masha-Лирика (feat. Masha).mp3" },
        { title: "Ghost - Mary On A Cross", artist: "Ghost", audioUrl: "music/Ghost-Mary On A Cross.mp3" },
        { title: "Griffinilla - Hard Drive", artist: "Griffinilla", audioUrl: "music/Griffinilla - Hard Drive.mp3" },
        { title: "How You Remind Me - Nickelback", artist: "Nickelback", audioUrl: "music/How You Remind Me - Nickelback.mp3" },
        { title: "I miss you - Avril Lavigne", artist: "Avril Lavigne", audioUrl: "music/I miss you - Avril Lavigne.mp3" },
        { title: "Keendy - Не более", artist: "Keendy", audioUrl: "music/Keendy - Не более.mp3" },
        { title: "Kylie Minogue - Giving You Up", artist: "Kylie Minogue", audioUrl: "music/Kylie Minogue - Giving You Up.mp3" },
        { title: "Lady Gaga feat. Bruno Mars - Die With A Smile", artist: "Lady Gaga", audioUrl: "music/Lady Gaga feat. Bruno Mars - Die With A Smile.mp3" },
        { title: "Love Story - Indila", artist: "Indila", audioUrl: "music/Love Story - Indila.mp3" },
        { title: "Lx24 - Танцы под луной", artist: "Lx24", audioUrl: "music/Lx24-Танцы под луной.mp3" },
        { title: "Random Hero - Could You Be My Love", artist: "Random Hero", audioUrl: "music/Random Hero - Could You Be My Love.mp3" },
        { title: "Stromae - Ma Meilleure Ennemie (from the series Arcane League of)", artist: "Stromae", audioUrl: "music/Stromae_Ma_Meilleure_Ennemie_from_the_series_Arcane_League_of.mp3" },
        { title: "The Cab - Endlessly", artist: "The Cab", audioUrl: "music/The Cab - Endlessly.mp3" },
        { title: "The Neighbourhood ft. Syd remix - Daddy issues", artist: "The Neighbourhood", audioUrl: "music/The Neighbourhood ft. Syd remix-Daddy issues.mp3" },
        { title: "Vanessa Paradis - M - La Seine", artist: "Vanessa Paradis", audioUrl: "music/Vanessa Paradis, -M--La Seine.mp3" },
        { title: "Wonderwall - Oasis", artist: "Oasis", audioUrl: "music/Wonderwall - Oasis.mp3" },
        { title: "Женя Трофимов, Комната культуры - Поезда", artist: "Женя Трофимов, Комната культуры", audioUrl: "music/Женя_Трофимов,_Комната_культуры_Поезда.mp3" },
        { title: "Звёзды - Лоя", artist: "Звёзды", audioUrl: "music/Звёзды - Лоя.mp3" },
        { title: "Мадам - JONY Andro", artist: "Мадам", audioUrl: "music/Мадам - JONY Andro.mp3" },
        { title: "Мария Чайковская - Люблю (remix)", artist: "Мария Чайковская", audioUrl: "music/Мария Чайковская - Люблю (remix ).mp3" },
        { title: "Миша Marvin - Признание (OST Леонардо Миссия Мона Лиза)", artist: "Миша Marvin", audioUrl: "music/Миша_Марвин_Признание_OST_Леонардо_Миссия_Мона_Лиза.mp3" },
        { title: "Моя искра - Homie", artist: "Моя искра", audioUrl: "music/Моя искра - Homie.mp3" },
        { title: "Моя любовь на пятом этаже - Секрет", artist: "Моя любовь на пятом этаже", audioUrl: "music/Моя_любовь_на_пятом_этаже_Секрет.mp3" },
        { title: "ОЛЬГА РОМАНОВСКАЯ - Держи меня крепче", artist: "ОЛЬГА РОМАНОВСКАЯ", audioUrl: "music/ОЛЬГА_РОМАНОВСКАЯ_ДЕРЖИ_МЕНЯ_КРЕПЧЕ.mp3" },
        { title: "парадокс - тёмно-алая кровь", artist: "парадокс", audioUrl: "music/парадокс-тёмно-алая кровь.mp3" },
        { title: "Перемотка - Как тебя покорить", artist: "Перемотка", audioUrl: "music/Перемотка-Как тебя покорить.mp3" },
        { title: "Световое шоу - Пожар - МЫ", artist: "Световое шоу", audioUrl: "music/Световое шоу - Пожар - МЫ.mp3" },
        { title: "Сердце не игрушка - ASAMMUELL", artist: "ASAMMUELL", audioUrl: "music/Сердце не игрушка - ASAMMUELL.mp3" },
        { title: "СТИКЕР - CMH Lida", artist: "СТИКЕР", audioUrl: "music/СТИКЕР - CMH Lida.mp3" },
        { title: "Щвец Алена - Первое Свидание", artist: "Щвец Алена", audioUrl: "music/Щвец Алена-Первое Свидание.mp3" },
        { title: "Я поднимаюсь над землей feat. Алёна Омаргалиева Баста feat. Алё", artist: "Я поднимаюсь над землей", audioUrl: "music/Я_поднимаюсь_над_землей_feat_Алёна_Омаргалиева_Баста_feat_Алё.mp3" }
    ];

    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const songList = document.getElementById('song-list');

    let currentSongIndex = 0;
    let isPlaying = false;

    function loadSong(index) {
        const song = songs[index];
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        audioPlayer.src = song.audioUrl;
        audioPlayer.load();
        if (isPlaying) {
            audioPlayer.play();
        }
        updateActiveSong(index);
    }

    function playPause() {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
        } else {
            audioPlayer.play();
            playPauseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
        }
        isPlaying = !isPlaying;
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playPause();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playPause();
    }

    function selectSong(event) {
        const index = event.target.closest('li').getAttribute('data-index');
        currentSongIndex = parseInt(index, 10);
        loadSong(currentSongIndex);
        playPause();
    }

    function updateActiveSong(index) {
        const songItems = songList.querySelectorAll('li');
        songItems.forEach((item) => item.classList.remove('active'));
        songItems[index].classList.add('active');
    }

    playPauseBtn.addEventListener('click', playPause);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    songList.addEventListener('click', selectSong);

    audioPlayer.addEventListener('ended', nextSong);

    loadSong(currentSongIndex);
});