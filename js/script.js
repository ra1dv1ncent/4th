// 1. Complete Memory Data Array
const memoryData = [
  {
    id: 1,
    title: "first kuan hehe?",
    date: "february 27, 2026",
    coords: [10.40237, 124.00143], 
    image: "img/pier88.jpeg", 
    description: "first kiss nato, wala jud ko nag expect nga kato nga day mahitabo hihi. feel nako ako na ang pinaka swerte nga boy sa world hihi"
  },
  {
    id: 2,
    title: "ma chérie's bday",
    date: "May 31, 2026",
    coords: [10.37126, 123.98634],
    image: "img/bday.jpeg", 
    description: "happy birthday my lovelove nakoooo, love kaau tika"
  },
  {
    id: 3,
    title: "bantay bata 163",
    date: "May 29, 2026",
    coords: [10.31233, 123.96],
    image: "img/naya.jpeg", 
    description: "bantay bata akong babyyyy, duha ka bata ang gi bantayan"
  },
  {
    id: 4,
    title: "church date",
    date: "June 1, 2026",
    coords: [10.29421, 123.90230],
    image: "img/stonino.jpeg", 
    description: "church date with my pretty baby"
  },
  {
    id: 5,
    title: "simba date",
    date: "June 7, 2026",
    coords: [10.29403, 123.90234],
    image: "img/simbadate.jpeg", 
    description: "simba date with my pretty baby sa sto. niño"
  },
  {
    id: 6,
    title: "simba date.v_2",
    date: "June 14, 2026",
    coords: [10.31232, 123.94846],
    image: "img/vdr.jpeg", 
    description: "simba date with my pretty baby sa vdr"
  },
  {
    id: 7,
    title: "ni visit akong babyyy",
    date: "June 17, 2026",
    coords: [10.31494, 123.96118],
    image: "img/kuan.jpeg", 
    description: "gi visit kos akong baby hihi"
  },
  {
    id: 8,
    title: "jabilee date after",
    date: "June 23, 2026",
    coords: [10.37363, 123.98932],
    image: "img/jabee.jpeg", 
    description: "jabee date after kuan hihihi"
  },
  {
    id: 9,
    title: "amping, love",
    date: "December 8, 2025",
    coords: [10.31317, 123.95669],
    image: "img/motor.jpeg", 
    description: "gi angkon na tika diha hehe, feelingon rako"
  },
  {
    id: 10,
    title: "i want you here na",
    date: "December 17, 2025",
    coords: [10.29416, 123.90234],
    image: "img/1stnino.jpeg", 
    description: "ganahan na kayko nimo diri love"
  },
  {
    id: 11,
    title: "fav pic nakoo",
    date: "December 17, 2025",
    coords: [10.29175, 123.90424],
    image: "img/fav.jpeg", 
    description: "dili nako ganahan mo uli love kay kuyog ta"
  },
  {
    id: 12,
    title: "selfie nato",
    date: "December 17, 2025",
    coords: [10.29212, 123.90457],
    image: "img/selfienato.jpeg", 
    description: "kilig so much kay dako kaykag ngisi hashdhah"
  },
  {
    id: 13,
    title: "pool date",
    date: "January 2, 2026",
    coords: [10.24980, 123.94618],
    image: "img/pool.jpeg", 
    description: "ganahan lang jud ko love nga mapunta na unta kas saktong tao, pero dapat ako"
  },
  {
    id: 14,
    title: "crab island",
    date: "January 24, 2026",
    coords: [10.27511, 123.99274],
    image: "img/crab.jpeg", 
    description: "gi treat jud tika diri love nga akoa ka hihi"
  },
  {
    id: 15,
    title: "ka isog sakong baby",
    date: "February 2, 2026",
    coords: [10.32540, 123.95309],
    image: "img/kaisog.jpeg", 
    description: "ka isog sakong baby, tiklop raba if naa ko hashdhasd"
  },
  {
    id: 16,
    title: "icm date",
    date: "February 13, 2026",
    coords: [10.32540, 123.95309],
    image: "img/icm.jpeg", 
    description: "sige ratag date love hshshs, happy kayko gud nga ikaw"
  },
  {
    id: 17,
    title: "first pier88 date",
    date: "February 13, 2026",
    coords: [10.32540, 123.95309],
    image: "img/icm.jpeg", 
    description: "after rani sa icm date love, gidala rako nimo adto, happy ang kilig kayko"
  },
  {
    id: 18,
    title: "icm date after simba",
    date: "February 22, 2026",
    coords: [10.32660, 123.97552],
    image: "img/icm2.jpeg", 
    description: "i think ari na ta touchy kaau love hihi"
  },
  {
    id: 19,
    title: "mandani bay",
    date: "February 26, 2026",
    coords: [10.32035, 123.93862],
    image: "img/mandani.jpeg", 
    description: "kilig kay nagalibre intawn"
  },
  {
    id: 20,
    title: "catarman",
    date: "March 2, 2026",
    coords: [10.24234, 123.94587],
    image: "img/catarman.jpeg", 
    description: "nature date mis akong palangga"
  },
  {
    id: 21,
    title: "best bday nako",
    date: "May 24, 2026",
    coords: [10.24234, 123.94587],
    image: "img/bdaynako.jpeg", 
    description: "love, best day sakong tibook natawhan babyy, im so happy nga naa ka"
  },
  {
    id: 22,
    title: "intrams",
    date: "March 4, 2026",
    coords: [10.32536, 123.95399],
    image: "img/intrams.jpeg", 
    description: "happy ko diri love kay kuyog ta, first time naa nay kuyog"
  },
  {
    id: 23,
    title: "pacific mall",
    date: "March 6, 2026",
    coords: [10.34090, 123.94851],
    image: "img/pacific.jpeg", 
    description: "gihimo natong balay ang pacific love hsahdhahsd"
  },
  {
    id: 24,
    title: "unli rice, unli love",
    date: "March 15, 2026",
    coords: [10.37360, 123.98900],
    image: "img/ribshack.jpeg", 
    description: "i love you, unli love"
  },
  {
    id: 25,
    title: "la vie",
    date: "March 17, 2026",
    coords: [10.39032, 124.00813],
    image: "img/lavie.jpeg", 
    description: "giplanohan gyud nato ang laag love"
  },
  {
    id: 26,
    title: "dimsum",
    date: "March 24, 2026",
    coords: [10.34082, 123.94752],
    image: "img/dimsum.jpeg", 
    description: "first time nako kaon dimsum love, promise, thank you lovelove"
  },
  {
    id: 27,
    title: "simba date v2",
    date: "March 29, 2026",
    coords: [10.31229, 123.94849],
    image: "img/vdr2.jpeg", 
    description: "first time naay ka hold ug hands sa amahan namo hihi"
  },
  {
    id: 28,
    title: "outlets date",
    date: "March 29, 2026",
    coords: [10.30196, 123.96230],
    image: "img/outlets.jpeg", 
    description: "date sa tamiya kay abig naay avocadoria"
  },
  {
    id: 29,
    title: "hangar date",
    date: "April 5, 2026",
    coords: [10.31320, 123.98950],
    image: "img/air.jpeg", 
    description: "first time nakoy ka date hehe nya dinner"
  },
  {
    id: 30,
    title: "ligo dadat",
    date: "April 9, 2026",
    coords: [10.39030, 124.00811],
    image: "img/dadat.jpeg", 
    description: "dadat with my babyyyy, sofer kilig naman"
  },
  {
    id: 31,
    title: "sofer pretty kay u here love",
    date: "April 9, 2026",
    coords: [10.39030, 124.00811],
    image: "img/loh.jpeg", 
    description: "mao nani jud love, love na gyud nato ang usag usa"
  },
  {
    id: 32,
    title: "icm date after simba, i love my baby",
    date: "April 12, 2026",
    coords: [10.32714, 123.97575],
    image: "img/icm3.jpeg", 
    description: "grateful kaayo ko love nga naa naka"
  },
  {
    id: 33,
    title: "icm kay walay klase",
    date: "April 17, 2026",
    coords: [10.32714, 123.97575],
    image: "img/icm4.jpeg", 
    description: "i love my crushiecakes, lovelove na nako"
  },
  {
    id: 34,
    title: "bridge date",
    date: "April 21, 2026",
    coords: [10.31769, 123.95686],
    image: "img/1stbridge.jpeg", 
    description: "laag nasad mis akong baby, sofer gwafa kaau akong kuyog"
  },
  {
    id: 35, 
    title: "my sleepy baby",
    date: "April 23, 2026",
    coords: [10.39026, 124.00817],
    image: "img/lavie2.jpeg", 
    description: "partida natulog nga gwapa, thats my baby"
  },
  {
    id: 36,
    title: "jabee nasad",
    date: "April 26, 2026",
    coords: [10.31083, 123.95178],
    image: "img/jabee2.jpeg", 
    description: "love, okay rako mag gasto money, basta kaon natong duha"
  },
  {
    id: 37,
    title: "shopping with my baby",
    date: "April 28, 2026",
    coords: [10.34095, 123.94814],
    image: "img/pacific2.jpeg", 
    description: "love, dili rako kapuyon basta kuyog ta"
  },
  {
    id: 38,
    title: "chowking",
    date: "May 4, 2026",
    coords: [10.32552, 123.93381],
    image: "img/parkmall.jpeg", 
    description: "love, sa pacific rata mag chowking"
  },
  {
    id: 39,
    title: "project 1%, bb time 99%",
    date: "May 8, 2026",
    coords: [10.37123, 123.98636],
    image: "img/project.jpeg", 
    description: "i love my baby man oy hashdhasdh"
  },
  {
    id: 40,
    title: "sleepwell, my love",
    date: "May 13, 2026",
    coords: [10.34112, 123.94736],
    image: "img/sleepwell.jpeg", 
    description: "i love it so much love when man headrest ka nako hihi"
  },
  {
    id: 41,
    title: "so kilig",
    date: "May 17, 2026",
    coords: [10.63655, 124.02631],
    image: "img/dadat2.jpeg", 
    description: "love, kung kabalo pa ka kung unsa ko ka happy basta kuyog ta ninyo sa imong fam"
  },
  {
    id: 42,
    title: "bday nako",
    date: "May 24, 2026",
    coords: [10.29429, 123.90220],
    image: "img/bdaynako.jpeg", 
    description: "im so blessed and gifted love, nga naabot ka. you were once my dream, my love"
  },
  {
    id: 43,
    title: "dinner",
    date: "May 24, 2026",
    coords: [10.31250, 123.91969],
    image: "img/dinner.jpeg", 
    description: "im so so happy love nga kuyog ka, best bday ever hihi"
  },
  {
    id: 44,
    title: "seoul",
    date: "June 1, 2026",
    coords: [10.31118, 123.91769],
    image: "img/seoul.jpeg", 
    description: "more dates like this loveyyy"
  },
  {
    id: 45,
    title: "eatwell loveee",
    date: "June 5, 2026",
    coords: [10.30248, 123.96187],
    image: "img/habhab.jpeg", 
    description: "favorite nako ang nag kaon, kaono- woii"
  },
  {
    id: 46,
    title: "nawng gyud nimo love",
    date: "June 5, 2026",
    coords: [10.33794, 123.95734],
    image: "img/nawng.jpeg", 
    description: "rest nako love"
  },
  {
    id: 47,
    title: "happy 4th motmot loveyyy 💖",
    date: "June 27, 2026",
    coords: [10.33794, 123.95734],
    image: "img/4th2.png", 
    description: "love, i love you so much love and always, happy 4th motmot nato love, 💖. im so happy kay naabot ta diri, layo pa ta baby, pero layo na ta. im sorry love sa akong mga pagkulang, i've always hoped nga mag kita jud katong dili pa kaau ta suod. ganahan lang jud ko nimo love, inlove kayko nimo, so much, my baby. i love you so so much my love, and i promise nga mo stay rako sa imong side always and no matter what."
  },
  {
    id: 48,
    title: "dinner hihi",
    date: "January 24, 2026",
    coords: [10.31494, 123.96118],
    image: "img/dinner2.jpeg", 
    description: "so proud of u here love, thank you so much for your cooperation hahsdha"
  },
  {
    id: 49,
    title: "so kulba hehe",
    date: "Feb 15, 2026",
    coords: [10.39507, 124.00377],
    image: "img/chrisly.jpeg", 
    description: "kulbaan jud ko diri baby, hasdhshahd"
  },
  {
    id: 50,
    title: "calamares",
    date: "April 12, 2026",
    coords: [10.31190, 123.94944],
    image: "img/calamares.jpeg", 
    description: "atong spot baby, i love you so much love for staying bisag ani ra atong kan on"
  },
  {
    id: 51,
    title: "tricycle",
    date: "April 27, 2026",
    coords: [10.31120, 123.95208],
    image: "img/tricycle.jpeg", 
    description: "tricycle date hihi, i love my baby jud"
  },
  {
    id: 52,
    title: "evening date",
    date: "March 27, 2026",
    coords: [10.33213, 123.90560],
    image: "img/baby.jpeg", 
    description: "evening date hihi, bahala sila tanan hashdha"
  }
];

// 2. Scroll Animation Reveal Triggers
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => io.observe(el));
});

// 3. Initialize Leaflet Map
const map = L.map('map', { zoomControl: false }).setView([10.33, 123.95], 11);
L.control.zoom({ position: 'topleft' }).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// 4. Interface DOM Elements Mapping
const memoriesGrid = document.getElementById('memories-display-grid');
const panelTitle = document.getElementById('panel-location-title');
const clearPanelBtn = document.getElementById('clear-panel-btn');

const secretMemory = memoryData.find(m => m.id === 47);
const normalMemories = memoryData.filter(m => m.id !== 47);

// 6. Proximity Clustered Sorting Engine (Excluding the Secret entry)
const groupedLocations = [];
normalMemories.forEach(memory => {
  const matchingGroup = groupedLocations.find(group => {
    const latDiff = Math.abs(group.coords[0] - memory.coords[0]);
    const lngDiff = Math.abs(group.coords[1] - memory.coords[1]);
    return latDiff < 0.0015 && lngDiff < 0.0015;
  });

  if (matchingGroup) {
    matchingGroup.memories.push(memory);
  } else {
    groupedLocations.push({
      coords: [memory.coords[0], memory.coords[1]],
      memories: [memory]
    });
  }
});

// Track list of currently visible map layers to check for complete eradication
let activeNormalMarkers = [];

// 7. Render Normal Map Pins
groupedLocations.forEach(group => {
  const marker = L.marker(group.coords).addTo(map);
  activeNormalMarkers.push(marker);

  marker.on('click', () => {
    memoriesGrid.innerHTML = '';
    
    const count = group.memories.length;
    panelTitle.innerText = `(${count} moment${count > 1 ? 's' : ''} unlocked!)`;
    clearPanelBtn.style.color = '#ff758c';
    clearPanelBtn.style.display = 'block';

    group.memories.forEach(mem => {
        const card = document.createElement('div');
        card.className = 'memory-display-card';
        card.innerHTML = `
            <div class="card-image-box">
            <img src="${mem.image}" class="card-img" alt="${mem.title}" onclick="openLightbox(this.src)" onerror="this.src='https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500'">
            </div>
            <div class="card-details">
            <span class="card-date">${mem.date}</span>
            <h4 class="card-title">${mem.title}</h4>
            <p class="card-description">${mem.description}</p>
            </div>
        `;
        memoriesGrid.appendChild(card);
    });

    map.panTo(group.coords);
    document.getElementById('memories-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // ERASE MECHANIC: Wipe out pin marker instance completely from current canvas layer arrays
    map.removeLayer(marker);
    activeNormalMarkers = activeNormalMarkers.filter(m => m !== marker);

    // Check if the secret condition has been satisfied
    checkSecretTrigger();
  });
});

// 8. The Secret Validation Engine
function checkSecretTrigger() {
  if (activeNormalMarkers.length === 0 && secretMemory) {
    // Add subtle visual cue to guide eyes
    panelTitle.innerText = "✨ hala sekret! ✨";
    
    // Spawn the ultimate secret marker
    const secretMarker = L.marker(secretMemory.coords).addTo(map);
    
    // Smoothly focus map lens camera right to the destination
    setTimeout(() => {
      map.setView(secretMemory.coords, 14, { animate: true, duration: 1.5 });
    }, 800);

    secretMarker.on('click', () => {
      memoriesGrid.innerHTML = '';
      panelTitle.innerText = "💖 happy 4th motmot nato loveeee 💖";

      const card = document.createElement('div');
      card.className = 'memory-display-card';
      card.style.border = '2px solid var(--accent)'; // Highlight the final item beautifully
      card.innerHTML = `
        <div class="card-image-box">
          <img src="${secretMemory.image}" class="card-img" alt="${secretMemory.title}">
        </div>
        <div class="card-details">
          <span class="card-date" style="font-size:1rem;">✨ ${secretMemory.date} ✨</span>
          <h4 class="card-title" style="color:var(--accent); font-size:1.5rem;">${secretMemory.title}</h4>
          <p class="card-description" style="font-style: italic; font-size:1.05rem;">${secretMemory.description}</p>
        </div>
      `;
      memoriesGrid.appendChild(card);
      
      map.removeLayer(secretMarker); // Disappear after reading
      document.getElementById('memories-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}

// 9. Clear Action Listener Layout resets
clearPanelBtn.addEventListener('click', () => {
  memoriesGrid.innerHTML = '';
  panelTitle.innerText = 'Select a pin on the map to unlock our moments';
  clearPanelBtn.style.display = 'none';
  window.scrollTo({ top: document.getElementById('map-box').offsetTop - 20, behavior: 'smooth' });
});

// 10. Fullscreen Engine Handling
const mapBox = document.getElementById('map-box');
const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
  mapBox.classList.toggle('fullscreen-active');
  fullscreenBtn.innerText = mapBox.classList.contains('fullscreen-active') ? "⤝ Minimize Map" : "⤢ Fullscreen Mode";

  setTimeout(() => {
    map.invalidateSize({ animate: true });
  }, 400);
});

// ==========================================================================
// 11. BULLETPROOF GLOBAL LIGHTBOX CONTROLLER
// ==========================================================================
window.openLightbox = function(imageSrc) {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  
  if (lightbox && lightboxImg) {
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex'; // Instantly displays the overlay grid frame
    lightbox.classList.add('lightbox-active');
  }
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) {
    lightbox.style.display = 'none';
    lightbox.classList.remove('lightbox-active');
  }
};

// Handle closing when clicking on the dark background mask canvas area
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target.id === 'lightbox-close') {
        closeLightbox();
      }
    });
  }
});

// Close instantly if escape key is registered on desktops
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});