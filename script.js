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
    },
    {
        name: '박물관',
        emoji: '🏛️',
        objects: [
            { name: '전시대', emoji: '🖼️' },
            { name: '조각상', emoji: '🗿' },
            { name: '유리 케이스', emoji: '💎' },
            { name: '안내판', emoji: '📋' },
            { name: '벤치', emoji: '🪑' }
        ]
    },
    {
        name: '도서관',
        emoji: '📖',
        objects: [
            { name: '책장', emoji: '📚' },
            { name: '열람대', emoji: '📖' },
            { name: '사서 데스크', emoji: '🖊️' },
            { name: '복사기', emoji: '🖨️' },
            { name: '독서등', emoji: '💡' }
        ]
    },
    {
        name: '쇼핑몰',
        emoji: '🛒',
        objects: [
            { name: '에스컬레이터', emoji: '🎢' },
            { name: '매장 간판', emoji: '🏪' },
            { name: '쇼핑카트', emoji: '🛒' },
            { name: '시식대', emoji: '🍴' },
            { name: '계산대', emoji: '💳' }
        ]
    },
    {
        name: '극장',
        emoji: '🎭',
        objects: [
            { name: '무대', emoji: '🎭' },
            { name: '좌석', emoji: '💺' },
            { name: '커튼', emoji: '🎪' },
            { name: '스크린', emoji: '🎬' },
            { name: '팝콘 기계', emoji: '🍿' }
        ]
    },
    {
        name: '공원',
        emoji: '🌲',
        objects: [
            { name: '벤치', emoji: '🪑' },
            { name: '분수대', emoji: '⛲' },
            { name: '놀이터', emoji: '🎠' },
            { name: '산책로', emoji: '🛤️' },
            { name: '쓰레기통', emoji: '🗑️' }
        ]
    },
    {
        name: '카페',
        emoji: '☕',
        objects: [
            { name: '커피머신', emoji: '☕' },
            { name: '테이블', emoji: '🪑' },
            { name: '메뉴판', emoji: '📋' },
            { name: '진열장', emoji: '🍰' },
            { name: '계산대', emoji: '💰' }
        ]
    },
    {
        name: '학교',
        emoji: '🏫',
        objects: [
            { name: '칠판', emoji: '📝' },
            { name: '교탁', emoji: '🖊️' },
            { name: '책상', emoji: '📚' },
            { name: '사물함', emoji: '🗄️' },
            { name: '시계', emoji: '⏰' }
        ]
    },
    {
        name: '병원',
        emoji: '🏥',
        objects: [
            { name: '진료실 문', emoji: '🚪' },
            { name: '대기실 의자', emoji: '💺' },
            { name: '접수창구', emoji: '🪟' },
            { name: '자동문', emoji: '🚪' },
            { name: '약국 선반', emoji: '💊' }
        ]
    },
    {
        name: '체육관',
        emoji: '🏋️',
        objects: [
            { name: '러닝머신', emoji: '🏃' },
            { name: '아령', emoji: '🏋️' },
            { name: '탈의실 사물함', emoji: '🔐' },
            { name: '운동 매트', emoji: '🧘' },
            { name: '음수대', emoji: '🚰' }
        ]
    },
    {
        name: '수영장',
        emoji: '🏊',
        objects: [
            { name: '다이빙대', emoji: '🤿' },
            { name: '튜브', emoji: '🛟' },
            { name: '샤워실', emoji: '🚿' },
            { name: '의자', emoji: '🪑' },
            { name: '구명조끼', emoji: '🦺' }
        ]
    }
];

class MemoryPalace {
    constructor() {
        // DOM 요소
        this.palaceTitleInput = document.getElementById('palaceTitle');
        this.keywordsInput = document.getElementById('keywords');
        this.generateBtn = document.getElementById('generateBtn');
        this.saveBtn = document.getElementById('saveBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.palaceSection = document.getElementById('palaceSection');
        this.palaceGrid = document.getElementById('palaceGrid');
        this.palaceDisplayTitle = document.getElementById('palaceDisplayTitle');

        // 탭 관련
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');

        // 저장된 궁전
        this.savedList = document.getElementById('savedList');
        this.emptyMessage = document.getElementById('emptyMessage');
        this.clearAllBtn = document.getElementById('clearAllBtn');

        // 테스트 모드
        this.testSection = document.getElementById('testSection');
        this.testGrid = document.getElementById('testGrid');
        this.toggleAnswerBtn = document.getElementById('toggleAnswerBtn');
        this.exitTestBtn = document.getElementById('exitTestBtn');

        // 통계
        this.statsGrid = document.getElementById('statsGrid');
        this.currentPosition = document.getElementById('currentPosition');
        this.resetPositionBtn = document.getElementById('resetPositionBtn');

        // 상태
        this.currentPalaceData = null;
        this.currentTestPalace = null;
        this.answersVisible = false;

        this.init();
    }

    init() {
        // 이벤트 리스너
        this.generateBtn.addEventListener('click', () => this.generatePalace());
        this.saveBtn.addEventListener('click', () => this.savePalace());
        this.resetBtn.addEventListener('click', () => this.reset());

        // 탭 전환
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // 저장된 궁전
        this.clearAllBtn.addEventListener('click', () => this.clearAllPalaces());

        // 테스트 모드
        this.toggleAnswerBtn.addEventListener('click', () => this.toggleAnswers());
        this.exitTestBtn.addEventListener('click', () => this.exitTest());

        // 통계
        this.resetPositionBtn.addEventListener('click', () => this.resetPosition());

        // Enter 키
        this.keywordsInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.generatePalace();
            }
        });

        // 초기 로드
        this.updateSavedList();
        this.updateStats();
    }

    switchTab(tabName) {
        // 탭 버튼 활성화
        this.tabBtns.forEach(btn => {
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 탭 컨텐츠 표시
        this.tabContents.forEach(content => {
            if (content.id === tabName + 'Tab') {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // 통계 탭 열 때 업데이트
        if (tabName === 'stats') {
            this.updateStats();
        }

        // 저장된 궁전 탭 열 때 업데이트
        if (tabName === 'saved') {
            this.updateSavedList();
        }
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

        // 현재 위치 가져오기
        const startPosition = this.getCurrentPosition();

        const associations = [];

        keywords.forEach((keyword, index) => {
            const position = startPosition + index;
            const association = this.getLocationObjectPair(position);
            associations.push({
                keyword,
                location: association.location,
                object: association.object,
                position
            });

            const card = this.createCard(keyword, association);
            this.palaceGrid.appendChild(card);
        });

        // 현재 궁전 데이터 저장
        const title = this.palaceTitleInput.value.trim() || `궁전 ${new Date().toLocaleString()}`;
        this.currentPalaceData = {
            title,
            keywords,
            associations,
            startPosition,
            endPosition: startPosition + keywords.length - 1
        };

        // 제목 표시
        this.palaceDisplayTitle.textContent = title;

        this.palaceSection.classList.remove('hidden');
        this.palaceSection.scrollIntoView({ behavior: 'smooth' });
    }

    getLocationObjectPair(position) {
        // 순차적으로 장소와 물건 매칭
        const totalObjects = locations.length * 5;
        const normalizedPosition = position % totalObjects;

        const locationIndex = Math.floor(normalizedPosition / 5);
        const objectIndex = normalizedPosition % 5;

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

        const storyIndex = keyword.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % stories.length;
        return stories[storyIndex];
    }

    savePalace() {
        if (!this.currentPalaceData) {
            alert('저장할 궁전이 없습니다!');
            return;
        }

        // localStorage에서 기존 데이터 가져오기
        const saved = this.getSavedPalaces();

        // 새 궁전 추가
        const newPalace = {
            ...this.currentPalaceData,
            id: Date.now(),
            createdAt: new Date().toISOString()
        };

        saved.push(newPalace);
        localStorage.setItem('memoryPalaces', JSON.stringify(saved));

        // 현재 위치 업데이트
        const newPosition = this.currentPalaceData.endPosition + 1;
        this.setCurrentPosition(newPosition);

        // 사용 통계 업데이트
        this.updateUsageStats(this.currentPalaceData.associations);

        alert('저장되었습니다! 다음번에는 다음 장소부터 시작됩니다.');

        // 저장된 궁전 탭으로 이동
        this.switchTab('saved');
        this.reset();
    }

    getSavedPalaces() {
        const data = localStorage.getItem('memoryPalaces');
        return data ? JSON.parse(data) : [];
    }

    updateSavedList() {
        const saved = this.getSavedPalaces();

        if (saved.length === 0) {
            this.savedList.style.display = 'none';
            this.emptyMessage.style.display = 'block';
            return;
        }

        this.savedList.style.display = 'flex';
        this.emptyMessage.style.display = 'none';

        this.savedList.innerHTML = '';

        // 최신순으로 정렬
        saved.sort((a, b) => b.id - a.id);

        saved.forEach(palace => {
            const item = this.createSavedItem(palace);
            this.savedList.appendChild(item);
        });
    }

    createSavedItem(palace) {
        const div = document.createElement('div');
        div.className = 'saved-item';

        const date = new Date(palace.createdAt).toLocaleString('ko-KR');
        const keywordsText = palace.keywords.join(', ');
        const preview = keywordsText.length > 100 ? keywordsText.substring(0, 100) + '...' : keywordsText;

        div.innerHTML = `
            <div class="saved-item-header">
                <div class="saved-item-title">${palace.title}</div>
                <div class="saved-item-date">${date}</div>
            </div>
            <div class="saved-item-keywords">${preview}</div>
            <div class="saved-item-actions">
                <button class="btn-primary test-btn" data-id="${palace.id}">암기 테스트</button>
                <button class="btn-danger delete-btn" data-id="${palace.id}">삭제</button>
            </div>
        `;

        // 테스트 버튼
        div.querySelector('.test-btn').addEventListener('click', () => {
            this.startTest(palace);
        });

        // 삭제 버튼
        div.querySelector('.delete-btn').addEventListener('click', () => {
            this.deletePalace(palace.id);
        });

        return div;
    }

    deletePalace(id) {
        if (!confirm('정말 삭제하시겠습니까?')) return;

        let saved = this.getSavedPalaces();
        saved = saved.filter(p => p.id !== id);
        localStorage.setItem('memoryPalaces', JSON.stringify(saved));

        this.updateSavedList();
    }

    clearAllPalaces() {
        if (!confirm('모든 저장된 궁전을 삭제하시겠습니까?')) return;

        localStorage.removeItem('memoryPalaces');
        this.updateSavedList();
    }

    startTest(palace) {
        this.currentTestPalace = palace;
        this.answersVisible = false;

        // 테스트 그리드 생성
        this.testGrid.innerHTML = '';

        palace.associations.forEach(assoc => {
            const card = document.createElement('div');
            card.className = 'palace-card';

            const story = this.generateStory(assoc.keyword, assoc.location, assoc.object);

            card.innerHTML = `
                <div class="card-location">
                    <span style="font-size: 1.5em;">${assoc.location.emoji}</span>
                    <span class="card-location-name">${assoc.location.name}</span>
                </div>
                <div class="card-object">
                    <span style="font-size: 1.3em;">${assoc.object.emoji}</span>
                    <span>${assoc.object.name}</span>
                </div>
                <div class="card-keyword hidden-answer">${assoc.keyword}</div>
                <div class="card-story">${story}</div>
            `;

            this.testGrid.appendChild(card);
        });

        this.testSection.classList.remove('hidden');
        this.testSection.scrollIntoView({ behavior: 'smooth' });
    }

    toggleAnswers() {
        this.answersVisible = !this.answersVisible;

        const keywords = this.testGrid.querySelectorAll('.card-keyword');
        keywords.forEach(keyword => {
            if (this.answersVisible) {
                keyword.classList.remove('hidden-answer');
            } else {
                keyword.classList.add('hidden-answer');
            }
        });
    }

    exitTest() {
        this.testSection.classList.add('hidden');
        this.currentTestPalace = null;
        this.answersVisible = false;
    }

    getCurrentPosition() {
        const pos = localStorage.getItem('currentPosition');
        return pos ? parseInt(pos) : 0;
    }

    setCurrentPosition(position) {
        localStorage.setItem('currentPosition', position);
        this.updateStats();
    }

    resetPosition() {
        if (!confirm('위치를 처음으로 초기화하시겠습니까?')) return;

        localStorage.setItem('currentPosition', '0');
        this.updateStats();
        alert('위치가 초기화되었습니다.');
    }

    updateUsageStats(associations) {
        const stats = this.getUsageStats();

        associations.forEach(assoc => {
            const key = `${assoc.location.name}-${assoc.object.name}`;
            stats[key] = (stats[key] || 0) + 1;
        });

        localStorage.setItem('usageStats', JSON.stringify(stats));
    }

    getUsageStats() {
        const data = localStorage.getItem('usageStats');
        return data ? JSON.parse(data) : {};
    }

    updateStats() {
        const currentPos = this.getCurrentPosition();
        const stats = this.getUsageStats();

        // 현재 위치 표시
        const pair = this.getLocationObjectPair(currentPos);
        const totalObjects = locations.length * 5;
        this.currentPosition.textContent = `${pair.location.name} - ${pair.object.name} (${currentPos}/${totalObjects})`;

        // 통계 그리드
        this.statsGrid.innerHTML = '';

        locations.forEach((location, locationIndex) => {
            const div = document.createElement('div');
            div.className = 'stats-location';

            const objectsContainer = document.createElement('div');
            objectsContainer.className = 'stats-objects';

            location.objects.forEach((object, objectIndex) => {
                const key = `${location.name}-${object.name}`;
                const count = stats[key] || 0;
                const position = locationIndex * 5 + objectIndex;

                const objectDiv = document.createElement('div');
                objectDiv.className = 'stats-object clickable';
                if (position === currentPos) {
                    objectDiv.classList.add('current-position');
                }

                objectDiv.innerHTML = `
                    <div class="stats-object-name">
                        <span>${object.emoji}</span>
                        <span>${object.name}</span>
                    </div>
                    <div class="stats-object-count">${count}회</div>
                `;

                // 위치 지정 클릭 이벤트
                objectDiv.addEventListener('click', () => {
                    this.setPositionManually(position, location.name, object.name);
                });

                objectsContainer.appendChild(objectDiv);
            });

            const headerDiv = document.createElement('div');
            headerDiv.className = 'stats-location-header';
            headerDiv.innerHTML = `
                <span>${location.emoji}</span>
                <span>${location.name}</span>
            `;

            div.appendChild(headerDiv);
            div.appendChild(objectsContainer);

            this.statsGrid.appendChild(div);
        });
    }

    setPositionManually(position, locationName, objectName) {
        if (confirm(`"${locationName} - ${objectName}"을(를) 다음 시작 위치로 설정하시겠습니까?`)) {
            this.setCurrentPosition(position);
            alert(`위치가 "${locationName} - ${objectName}"(으)로 설정되었습니다.\n다음 궁전 생성 시 여기서부터 시작됩니다.`);
        }
    }

    reset() {
        this.palaceTitleInput.value = '';
        this.keywordsInput.value = '';
        this.palaceSection.classList.add('hidden');
        this.palaceGrid.innerHTML = '';
        this.currentPalaceData = null;
        this.keywordsInput.focus();
    }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MemoryPalace();
});
