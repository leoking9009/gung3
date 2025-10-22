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

        // 모든 장소-물건 조합을 생성하고 랜덤하게 섞기
        const allPairs = this.createAllLocationObjectPairs();
        const shuffledPairs = this.shuffleArray(allPairs);

        keywords.forEach((keyword, index) => {
            const association = shuffledPairs[index % shuffledPairs.length];
            const card = this.createCard(keyword, association);
            this.palaceGrid.appendChild(card);
        });

        this.palaceSection.classList.remove('hidden');
        this.palaceSection.scrollIntoView({ behavior: 'smooth' });
    }

    createAllLocationObjectPairs() {
        const pairs = [];
        locations.forEach(location => {
            location.objects.forEach(object => {
                pairs.push({ location, object });
            });
        });
        return pairs;
    }

    shuffleArray(array) {
        // Fisher-Yates 셔플 알고리즘
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
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
            `${location.name}에 들어서니 ${object.name}에 커다란 "${keyword}"가 놓여있습니다.`,
            `${location.name}의 ${object.name}이 "${keyword}" 모양으로 변했습니다!`,
            `${location.name}에서 ${object.name}를 보니 "${keyword}"가 생각납니다.`,
            `${location.name}에 있는 ${object.name}에서 "${keyword}"라는 글자가 빛나고 있습니다.`,
            `${location.name}의 ${object.name} 위에 "${keyword}"가 적힌 메모가 있습니다.`,
            `${location.name}을 지나갈 때 ${object.name}이 "${keyword}"라고 속삭입니다.`,
            `상상해보세요: ${location.name}의 ${object.name}이 "${keyword}"로 가득 차 있는 모습을!`,
            `${location.name}에 들어가면 제일 먼저 보이는 ${object.name}에 "${keyword}"가 새겨져 있습니다.`
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
