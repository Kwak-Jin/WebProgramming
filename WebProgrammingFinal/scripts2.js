const clubs = [
    { name: "MIC", category: "Performance", image: "mic.jpg",description: "MIC stands for (Motion In Christ) <br> a ministry club that glorifies God through dance.<br> The group primarily practices and performs various dance genres, including hip-hop, popping, locking, waacking, girl\’s hip-hop, and urban dance." },
    { name: "God's Fellow", category: "Performance", image: "gospel.jpg" , description: "God's Fellows is a performance club that praises God through hip-hop. Members write and compose their own reflections, offering worship to God on various stages, including street performances, club-organized shows, and festival stages."},
    { name: "꾼들", category: "Performance", image: "kkundel.jpg", description: " Actors(Kkun-deul) is a theater club founded in 1995 alongside the establishment of the university, making it the oldest club on campus. Each semester, the club stages at least one theatrical production, conveying diverse stories of life through their performances." },
    { name: "Reverie", category: "Performance", image: "reverie.jpg", description: "Reverie is a classical guitar club founded in 1998, and music-loving students gather to carry out various activities." },
    { name: "Liquid", category: "Performance", image: "liquid.jpg" , description: "qweqweqwe"},
    { name: "MIR", category: "Performance", image: "mir.jpg", description: "MiR is the only rock band club with the goal of sharing passion and joy through various genres of music." },
    { name: "Soul", category: "Performance", image: "soul.png", description: "SOUL is a sign language club that aims to serve as a bridge between deaf and healthy people using the abbreviation of 'Sign Of Unlimited Love.'" },
    { name: "Amazing Story", category: "Performance", image: "amazingstory.jpg", description: "Amazing Story is a Christian theater club that aims to tell the amazing story of God through plays." },
    { name: "즉흥적 새벽 두시", category: "Performance", image: "improv2am.jpg", description: "Impromptu 2 a.m. (abbreviated as 'Immediately') is a jazz & acoustic band club." },
    { name: "PitchPipe", category: "Performance", image: "pitchpipe.jpg" , description: "Pitchpipe is a praise acappella club that means living life to God's absolute standards." },
    { name: "하향", category: "Performance", image: "hayang.jpg", description: "(Dance to Heaven) It is a Korean dance club that aims to worship God and preach the gospel through traditional Korean dances." },
    { name: "한동대학교 응원단", category: "Performance", image: "handongcheer.png", description: "Handong University's cheering squad aims to support Korea beyond Handong University and Pohang City through Action Cheerleading." },
    { name: "한동 오케스트라", category: "Performance", image: "handongorchestra.jpg", description: "The Handong God's Philharmonic Orchestra is the only orchestra club on campus and aims to bring together students who play various instruments to interact and grow through music." },
    { name: "한풍", category: "Performance", image: "hanpung.jpg", description: "Hanpung (Korean 風) is a Pungmul club that aims to harmonize the community and inherit the traditional culture through Pungmul, a traditional Korean music." },
    { name: "Ammission", category: "Performance", image: "ammission.png", description: "Ammission is a club where hip-hop-loving students gather to exchange and grow through music." },
    { name: "G.O.", category: "Performance", image: "go.jpg", description: "G.O. is a missionary worship dance club, which is an abbreviation of 'Great Order' and aims to follow the earthly command of Jesus in Matthew 28: 18-20." },
    { name: "NEO", category: "Performance", image: "neo.jpg", description: "NEO is the only songwriting and composition club on campus, and it aims to create and share its own songs with music-loving students.    " },
    { name: "ZIZZY", category: "Performance", image: "zizzy.jpg", description: "ffff" },
    { name: "CANVAS", category: "Exhibition", image: "canvas.jpg"  },
    { name: "HAC", category: "Exhibition", image: "hac.png" ,description: ""},
    { name: "VAM", category: "Exhibition" , image: "vam.jpg",description: "" },
    { name: "비전선교단", category: "Religion" , image: "visionmission.jpg" ,description: ""},
    { name: "오르", category: "Religion" , image: "or.jpg" ,description: ""},
    { name: "B2B", category: "Religion" , image: "b2b.jpg" ,description: ""},
    { name: "CCC", category: "Religion" , image: "ccc.jpg" ,description: ""},
    { name: "SFC", category: "Religion" , image: "sfc.jpg" ,description: ""},
    { name: "GrandSlam", category: "Sports" , image: "grandslam.jpg" ,description: ""},
    { name: "Samson", category: "Sports" , image: "samson.jpg" ,description: ""},
    { name: "Sweep", category: "Sports" , image: "sweep.jpg" ,description: ""},
    { name: "차요차요", category: "Sports" , image: "chayo.jpg" ,description: ""},
    { name: "천풍해세", category: "Sports" , image: "cheonpoong.jpg" ,description: ""},
    { name: "한검", category: "Sports" , image: "hankum.jpg" ,description: ""},
    { name: "한마지로", category: "Sports" , image: "hanmazero.png" ,description: ""},
    { name: "한방 스윙스", category: "Sports" , image: "hanbangswings.jpg" ,description: ""},
    { name: "Holy Rams", category: "Sports" , image: "holylambs.png" ,description: ""},
    { name: "H.MILAN", category: "Sports" , image: "milan.png" ,description: ""},
    { name: "덜지니어스", category: "Sports" , image: "delgenius.png" ,description: ""},
    { name: "펜통", category: "Education" , image: "pentong.png" ,description: ""},
    { name: "DUDUS", category: "Education" , image: "dudus.jpg" ,description: ""},
    { name: "청소년 자유학교", category: "Volunteer" , image: "youthfreeschool.png",description: "" },
    { name: "Palette", category: "Volunteer" , image: "palette.png" ,description: ""},
    { name: "피스메이커", category: "Volunteer" , image: "peacemaker.png" ,description: ""},
    { name: "LAMP", category: "Volunteer" , image: "lamp.png" ,description: ""},
    { name: "슬기짜기", category: "Computer" , image: "seulgijjagi.png" ,description: ""},
    { name: "CRA", category: "Computer" , image: "cra.jpg" ,description: ""},
    { name: "GHOST", category: "Computer" , image: "ghost.jpg" ,description: ""},
];


// 페이지 로드 시 모든 동아리를 표시
document.addEventListener('DOMContentLoaded', () => {displayClubs(clubs);});

// 동아리 목록 표시
function displayClubs(clubList) {
    const container = document.getElementById('article-container');
    container.innerHTML = '';
    clubList.forEach(club => {
        const article = document.createElement('div');
        article.classList.add('article');
        article.innerHTML = `
            <img src="${club.image}" alt="${club.name}">
            <div class="article-content">
                <h3>${club.name}</h3>
                <p>${club.description}</p>
                <button onclick="applyToClub('${club.name}')">Apply</button>
            </div>
        `;
        container.appendChild(article);
    });
}

// 카테고리 필터링
function filterCategory(category) {
    const filteredClubs = clubs.filter(club => club.category === category);
    displayClubs(filteredClubs);
}

// 검색 기능
function searchClub() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredClubs = clubs.filter(club => club.name.toLowerCase().includes(query));
    displayClubs(filteredClubs);
}

// Apply 버튼 클릭 시 새 창 열기
function applyToClub(clubName) {
    alert(`Move to Application page for club (${clubName})`);
    window.open(`apply.html?club=${encodeURIComponent(clubName)}`, '_blank');
}

