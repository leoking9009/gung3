// 장소와 물건 데이터
const locations = [
    {
        name: '현관',
        emoji: '🚪',
        objects: [
            { name: '신발장', emoji: '👟' },
            { name: '우산꽂이', emoji: '☂️' },
            { name: '거울', emoji: '🪞' },
            { name: '열쇠걸이', emoji: '🔑' },
            { name: '초인종', emoji: '🔔' }
        ]
    },
    {
        name: '거실',
        emoji: '🛋️',
        objects: [
            { name: '소파', emoji: '🛋️' },
            { name: 'TV', emoji: '📺' },
            { name: '커피테이블', emoji: '🪑' },
            { name: '화분', emoji: '🪴' },
            { name: '리모컨', emoji: '📱' }
        ]
    },
    {
        name: '부엌',
        emoji: '🍳',
        objects: [
            { name: '냉장고', emoji: '🧊' },
            { name: '가스레인지', emoji: '🔥' },
            { name: '식탁', emoji: '🍽️' },
            { name: '싱크대', emoji: '🚰' },
            { name: '전자레인지', emoji: '📻' }
        ]
    },
    {
        name: '침실',
        emoji: '🛏️',
        objects: [
            { name: '침대', emoji: '🛏️' },
            { name: '옷장', emoji: '👔' },
            { name: '스탠드', emoji: '💡' },
            { name: '베개', emoji: '🛌' },
            { name: '알람시계', emoji: '⏰' }
        ]
    },
    {
        name: '욕실',
        emoji: '🚿',
        objects: [
            { name: '세면대', emoji: '🚰' },
            { name: '샤워기', emoji: '🚿' },
            { name: '거울', emoji: '🪞' },
            { name: '수건', emoji: '🧴' },
            { name: '변기', emoji: '🚽' }
        ]
    },
    {
        name: '서재',
        emoji: '📚',
        objects: [
            { name: '책상', emoji: '🪑' },
            { name: '책장', emoji: '📚' },
            { name: '의자', emoji: '💺' },
            { name: '컴퓨터', emoji: '💻' },
            { name: '스탠드', emoji: '🕯️' }
        ]
    },
    {
        name: '발코니',
        emoji: '🌿',
        objects: [
            { name: '화분', emoji: '🌱' },
            { name: '빨래건조대', emoji: '👕' },
            { name: '벤치', emoji: '🪑' },
            { name: '물뿌리개', emoji: '💧' },
            { name: '새장', emoji: '🦜' }
        ]
    },
    {
        name: '차고',
        emoji: '🚗',
        objects: [
            { name: '자동차', emoji: '🚗' },
            { name: '자전거', emoji: '🚲' },
            { name: '공구함', emoji: '🔧' },
            { name: '타이어', emoji: '⚙️' },
            { name: '세차용품', emoji: '🧽' }
        ]
    },
    {
        name: '정원',
        emoji: '🌳',
        objects: [
            { name: '나무', emoji: '🌳' },
            { name: '꽃', emoji: '🌺' },
            { name: '벤치', emoji: '🪑' },
            { name: '분수', emoji: '⛲' },
            { name: '잔디깎이', emoji: '🌱' }
        ]
    },
    {
        name: '지하실',
        emoji: '🏚️',
        objects: [
            { name: '보일러', emoji: '🔥' },
            { name: '창고박스', emoji: '📦' },
            { name: '와인랙', emoji: '🍷' },
            { name: '운동기구', emoji: '🏋️' },
            { name: '오래된 가구', emoji: '🪑' }
        ]
    }
];

class MemoryPalace {
    constructor() {
        this.keywordsInput = document.getElementById('keywords');
        this.generateBtn = document.getElementById('generateBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.palaceSection = document.getElementById('palaceSection');
        this.palaceGrid = document.getElementById('palaceGrid');

        this.usedLocations = new Set();
        this.init();
    }

    init() {
        this.generateBtn.addEventListener('click', () => this.generatePalace());
        this.resetBtn.addEventListener('click', () => this.reset());

        // Enter 키로도 생성 가능
        this.keywordsInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.generatePalace();
            }
        });
    }

    generatePalace() {
        const input = this.keywordsInput.value.trim();

        if (!input) {
            alert('기억할 단어를 입력해주세요!');
            return;
        }

        // 쉼표로 구분하여 단어 추출
        const keywords = input.split(',')
            .map(k => k.trim())
            .filter(k => k.length > 0);

        if (keywords.length === 0) {
            alert('올바른 단어를 입력해주세요!');
            return;
        }

        if (keywords.length > locations.length * 5) {
            alert(`최대 ${locations.length * 5}개까지 입력 가능합니다!`);
            return;
        }

        this.createPalaceCards(keywords);
    }

    createPalaceCards(keywords) {
        this.palaceGrid.innerHTML = '';
        this.usedLocations.clear();

        keywords.forEach((keyword, index) => {
            const association = this.getLocationObjectPair(index);
            const card = this.createCard(keyword, association);
            this.palaceGrid.appendChild(card);
        });

        this.palaceSection.classList.remove('hidden');
        this.palaceSection.scrollIntoView({ behavior: 'smooth' });
    }

    getLocationObjectPair(index) {
        // 순차적으로 장소와 물건 매칭
        const locationIndex = Math.floor(index / 5) % locations.length;
        const objectIndex = index % 5;

        const location = locations[locationIndex];
        const object = location.objects[objectIndex];

        return { location, object };
    }

    createCard(keyword, association) {
        const card = document.createElement('div');
        card.className = 'palace-card';

        const story = this.generateStory(keyword, association.location, association.object);

        card.innerHTML = `
            <div class="card-location">
                <span style="font-size: 1.5em;">${association.location.emoji}</span>
                <span class="card-location-name">${association.location.name}</span>
            </div>
            <div class="card-object">
                <span style="font-size: 1.3em;">${association.object.emoji}</span>
                <span>${association.object.name}</span>
            </div>
            <div class="card-keyword">${keyword}</div>
            <div class="card-story">${story}</div>
        `;

        return card;
    }

    generateStory(keyword, location, object) {
        const stories = [
            `${object.name}에서 거대한 "${keyword}"가 폭발하듯 튀어나와 ${location.name} 전체를 가득 채웁니다!`,
            `${object.name}이 갑자기 살아 움직이며 "${keyword}"를 크게 외치고 있습니다!`,
            `무지개 빛으로 빛나는 "${keyword}"가 ${object.name}을 뚫고 하늘로 솟구칩니다!`,
            `${object.name}에서 수천 개의 "${keyword}"가 폭포수처럼 쏟아져 나옵니다!`,
            `황금색으로 빛나는 "${keyword}"가 ${object.name}을 박살내고 터져 나옵니다!`,
            `${object.name}이 "${keyword}" 모양으로 녹아내리며 바닥에 흘러넘칩니다!`,
            `거대한 "${keyword}"가 ${object.name} 위에서 춤을 추며 빙글빙글 돌아갑니다!`,
            `${object.name}에서 "${keyword}"가 번개처럼 번쩍이며 불꽃을 튀깁니다!`,
            `"${keyword}"가 ${object.name}을 삼켜버리고 ${location.name}을 점령합니다!`,
            `${object.name}이 폭발하면서 수백 개의 "${keyword}"로 변신합니다!`,
            `형광색 "${keyword}"가 ${object.name}에서 튀어나와 천장까지 치솟습니다!`,
            `${object.name}이 "${keyword}"를 토해내며 ${location.name}이 진동합니다!`,
            `눈처럼 내리는 "${keyword}"가 ${object.name}을 완전히 뒤덮어 버립니다!`,
            `${object.name}에서 거대한 "${keyword}"가 날아다니며 ${location.name}을 날아다닙니다!`,
            `"${keyword}"가 ${object.name}과 하나가 되어 괴물처럼 변합니다!`
        ];

        // 키워드 기반으로 일관된 스토리 선택 (같은 키워드는 같은 스토리)
        const storyIndex = keyword.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % stories.length;
        return stories[storyIndex];
    }

    reset() {
        this.keywordsInput.value = '';
        this.palaceSection.classList.add('hidden');
        this.palaceGrid.innerHTML = '';
        this.usedLocations.clear();
        this.keywordsInput.focus();
    }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MemoryPalace();
});
