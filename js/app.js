// 1. 대사 텍스트
const firstLine = "안녕! 반가워!\n우리는 십이간지 복토리들이야!";
const secondLine = "당신은 무슨띠에요?";

// 2. 띠별 기본 정보 (배경 GIF)
const zodiacGifs = {
  "쥐": "assets/zodiac_rat.gif",
  "소": "assets/zodiac_ox.gif",
  "호랑이": "assets/zodiac_tiger.gif",
  "토끼": "assets/zodiac_rabbit.gif",
  "용": "assets/zodiac_dragon.gif",
  "뱀": "assets/zodiac_snake.gif",
  "말": "assets/zodiac_horse.gif",
  "양": "assets/zodiac_sheep.gif",
  "원숭이": "assets/zodiac_monkey.gif",
  "닭": "assets/zodiac_rooster.gif",
  "개": "assets/zodiac_dog.gif",
  "돼지": "assets/zodiac_pig.gif"
};

// 3. 띠별 오늘의 운세 10개씩
const zodiacFortunes = {
  "쥐": [
    "작은 메모 하나가 큰 아이디어로 자라나는 날이에요.",
    "예상 못 한 사람에게서 고마운 연락이 찾아옵니다.",
    "지출을 조금 아끼면 그만큼 행운 포인트가 쌓여요.",
    "늘 하던 길이 아닌, 다른 선택이 좋은 결과를 가져와요.",
    "집 정리를 하면 머릿속까지 맑아지는 하루가 될 거예요.",
    "소소한 부탁을 들어준 덕분에 복이 따라옵니다.",
    "새로운 정보를 알게 되고, 그게 나중에 큰 도움이 돼요.",
    "오늘은 귀가 조금 더 열려야 좋은 기회를 잡을 수 있어요.",
    "기다리던 소식이 ‘생각보다 빨리’ 도착할 가능성이 커요.",
    "맛있는 음식을 먹을수록 기분과 운세가 함께 올라갑니다."
  ],
  "소": [
    "천천히 가도 괜찮아요, 중요한 건 멈추지 않는 거예요.",
    "꾸준함이 오늘은 가장 큰 무기가 됩니다.",
    "작은 칭찬 한마디가 관계를 더 단단하게 만들어 줘요.",
    "미루던 일을 1개만 끝내도 마음이 훨씬 가벼워져요.",
    "책 한 페이지라도 읽으면 좋은 인사이트가 들어옵니다.",
    "오늘은 ‘아예 안 하던 것’을 시도해 보기에 좋은 날.",
    "한 번 더 확인하면 실수를 깔끔하게 피할 수 있어요.",
    "몸과 마음이 모두 편안한 쪽을 선택하면 길이 열립니다.",
    "평소에 챙겨주던 진심이 오늘 보답을 받을 수 있어요.",
    "어디에 에너지를 쓸지 고르면, 그쪽이 쑥쑥 잘 풀립니다."
  ],
  "호랑이": [
    "용기 내서 한 번 더 말해 보면, 뜻밖의 응원을 받게 돼요.",
    "당신 편이 되어 줄 사람이 주변에 이미 있어요.",
    "과감한 결정이 오히려 좋은 타이밍을 불러옵니다.",
    "즉흥적인 계획 속에서 즐거운 일이 터질 수 있어요.",
    "리더십을 발휘할수록 주변에 신뢰가 쌓입니다.",
    "말 한마디에 힘이 실려, 다른 사람을 움직이게 돼요.",
    "도전적인 일일수록 결과의 만족도가 더 높아지는 날.",
    "하고 싶었던 말을 솔직하게 털어놓아도 괜찮은 하루예요.",
    "몸을 조금 움직이면 머릿속 답답함도 날아갑니다.",
    "당신의 열정이 누군가에게 큰 자극과 영감이 돼요."
  ],
  "토끼": [
    "소소한 휴식이 오늘 하루를 더 사랑스럽게 만들어 줘요.",
    "기분 좋은 메시지를 주고받으며 마음이 따뜻해집니다.",
    "평소보다 주변에 꽃·식물 같은 것들이 눈에 많이 들어올 거예요.",
    "감성 충만한 콘텐츠가 오늘의 힐링 포인트가 됩니다.",
    "무심코 찍은 사진이 나중에 소중한 기록이 돼요.",
    "조용한 시간을 통해 좋은 아이디어가 톡 하고 떠올라요.",
    "귀여운 물건을 사거나 구경하면 기분이 한층 올라갑니다.",
    "오늘은 ‘내가 좋아하는 사람들’과의 시간이 복을 더해줘요.",
    "부드럽게 말할수록 일이 매끄럽게 흘러가요.",
    "잠깐의 산책만으로도 운세가 조금 더 화사해집니다."
  ],
  "용": [
    "큰 그림을 그리기에 딱 좋은 날이에요.",
    "장기적인 목표를 정리하면 흐름이 한 번에 잡힙니다.",
    "당신의 존재감이 예상보다 강하게 빛나는 순간이 있어요.",
    "주변에서 의견을 구해오면, 솔직하게 말해줘도 괜찮아요.",
    "스스로를 믿는 마음이 오늘의 최대 행운 포인트입니다.",
    "멋진 영감이 떠오를 수 있으니 아이디어는 꼭 적어두세요.",
    "중간에 생긴 변수도 결국 좋은 방향으로 흘러갑니다.",
    "누군가에게 의외의 리더십을 보여 줄 기회가 와요.",
    "까다로운 일도 시작만 하면 생각보다 빨리 진행됩니다.",
    "오늘의 선택이 먼 미래에 멋진 전환점이 될 수 있어요."
  ],
  "뱀": [
    "직감이 말해주는 사인을 한 번쯤 믿어봐도 좋은 날이에요.",
    "대화를 조금 더 천천히 들으면 진짜 속마음이 보입니다.",
    "불필요한 말은 줄이고, 관찰을 늘릴수록 운이 따라와요.",
    "정보 검색을 하다가 유용한 꿀팁을 발견할 수 있어요.",
    "오늘은 생각보다 머리가 잘 돌아가는 날입니다.",
    "작은 단서를 놓치지 않으면 실수 없이 지나갈 수 있어요.",
    "계획을 세밀하게 다시 정리하면 마음이 안정됩니다.",
    "조용히 준비하던 일이 슬슬 성과를 보이기 시작해요.",
    "머릿속으로만 생각하던 아이디어를 글로 남겨 보세요.",
    "생각 정리가 곧 운세 정리로 이어지는 하루예요."
  ],
  "말": [
    "움직일수록 행운이 따라붙는 날이에요.",
    "가볍게 외출하거나 몸을 쓰면 기분이 훨씬 상쾌해져요.",
    "빠른 결단이 지체된 일을 깔끔하게 해결해 줍니다.",
    "하루 루틴에 작은 변화를 주면 새로운 기회가 보여요.",
    "기분 좋은 제안이나 초대가 들어올 수 있어요.",
    "정체돼 있던 일도 한 번 속도를 내면 술술 풀립니다.",
    "즉흥적인 나들이에서 예상 밖 즐거움이 찾아와요.",
    "운동이나 스트레칭이 오늘의 행운 스위치를 켜 줍니다.",
    "에너지가 넘치니, 하기 싫던 일부터 처리해도 좋아요.",
    "당신의 활발함이 주변 분위기를 환하게 만들어 줘요."
  ],
  "양": [
    "포근한 말 한마디가 오늘의 분위기를 부드럽게 만들어요.",
    "가까운 사람과의 대화에서 따뜻한 위로를 얻습니다.",
    "마음을 나눌수록 관계 운이 훨씬 좋아지는 날이에요.",
    "상대의 이야기를 들어주는 것만으로 큰 힘이 될 수 있어요.",
    "센터에 서기보다, 옆에서 응원해도 충분히 빛날 수 있습니다.",
    "집안 분위기를 예쁘게 꾸미면 기분과 운세가 같이 올라가요.",
    "작은 선물이나 간식이 관계를 더 가까이 이어 줍니다.",
    "감사 인사를 한 번 더 건네면 행운이 살짝 더해져요.",
    "편안한 옷차림과 따뜻한 음료가 오늘의 힐링 포인트.",
    "내가 편안한 사람일수록, 좋은 인연이 자연히 모여들어요."
  ],
  "원숭이": [
    "센스 있고 재치 있는 한마디가 분위기를 살립니다.",
    "새로운 아이디어가 쏟아지는 브레인스토밍 데이!",
    "작은 장난도 선을 넘지 않으면 모두를 웃게 해줄 수 있어요.",
    "다양한 사람과의 소통 속에서 좋은 정보를 건지게 됩니다.",
    "멀티태스킹이 평소보다 잘 먹히는 날이에요.",
    "갑자기 떠오른 생각을 바로 실행해 보면 재밌는 결과가 나와요.",
    "예상치 못한 제안이나 기회가 툭 하고 들어올 수 있어요.",
    "머리가 잘 돌아갈 때, 문제 해결을 한 번에 몰아서 해보세요.",
    "짧은 영상, 글, 콘텐츠 속에서 영감을 얻을 수 있어요.",
    "당신의 유머감각이 누군가의 하루를 밝게 비춰 줍니다."
  ],
  "닭": [
    "이른 시간에 움직일수록 운세가 한 단계 업그레이드돼요.",
    "미리 준비한 사람이 결국 가장 편안해집니다.",
    "알람 하나만 잘 설정해도 하루가 훨씬 안정적으로 흘러가요.",
    "깊이 파고드는 태도가 좋은 결과를 가져옵니다.",
    "정리된 메모와 일정표가 오늘의 든든한 아군이에요.",
    "주도적으로 나서는 순간, 신뢰도도 같이 올라갑니다.",
    "깔끔한 정돈과 청소만으로도 마음이 훨씬 가벼워져요.",
    "메일·메시지를 잘 확인하면 놓칠 뻔한 기회를 잡습니다.",
    "한 발 먼저 움직이는 것이 큰 이득으로 돌아오는 날.",
    "성실함이야말로 당신의 가장 큰 행운 스킬입니다."
  ],
  "개": [
    "믿고 의지할 수 있는 사람이 옆에 있음을 느끼게 돼요.",
    "오래된 인연에서 다시 힘을 얻게 되는 하루입니다.",
    "상대방을 위해 한 작은 행동이 크게 되돌아올 수 있어요.",
    "팀워크가 필요한 일에서 당신의 가치가 빛납니다.",
    "진심이 통하는 대화가 오늘의 힐링 포인트예요.",
    "도와달라는 말에 손을 내밀어주면 복이 쌓입니다.",
    "따뜻한 말 한마디로 누군가의 하루를 살짝 구해줄 수도 있어요.",
    "가족·친구와의 시간이 정신적 에너지를 회복시켜 줍니다.",
    "신뢰를 쌓아두면 가까운 시일 내에 좋은 소식이 옵니다.",
    "내 사람을 챙기는 만큼, 행운이 조용히 따라와요."
  ],
  "돼지": [
    "맛있는 것을 먹는 것만으로도 행복 지수가 올라가는 날.",
    "소소한 소비가 기분을 리프레시해 줄 수 있어요.",
    "의외의 할인·혜택을 발견할 수 있는 운이 있습니다.",
    "휴식을 제대로 누리면 다음 스텝이 훨씬 가벼워져요.",
    "작은 행운이 겹겹이 쌓여 ‘오늘 괜찮은데?’ 싶은 하루.",
    "금전운이 살짝 열려 있으니, 지출·수입 관리에 신경 써보세요.",
    "느긋함이 오히려 좋은 선택을 불러오는 날이에요.",
    "좋아하는 음악이나 콘텐츠가 큰 위로와 즐거움을 줍니다.",
    "‘괜찮아, 잘 하고 있어’라는 마음이 스스로에게 큰 선물이 돼요.",
    "편안한 마음가짐이 예상 밖 좋은 소식을 끌어당깁니다."
  ]
};

// 4. DOM 요소
const dialogTextEl = document.getElementById("dialogText");
const hintTextEl = document.getElementById("hintText");
const zodiacWrapEl = document.getElementById("zodiacWrap");
const bgGifEl = document.getElementById("bgGif");
const speakerEl = document.getElementById("speaker");
const metaEl = document.getElementById("metaText");

let state = "intro1"; // intro1 → intro1_done → intro2 → intro2_done → chosen
let isTyping = false;

// 5. 타이핑 효과
function typeLine(text, callback) {
  isTyping = true;
  dialogTextEl.textContent = "";
  let idx = 0;

  const timer = setInterval(() => {
    if (idx >= text.length) {
      clearInterval(timer);
      isTyping = false;
      if (callback) callback();
      return;
    }
    dialogTextEl.textContent += text[idx++];
  }, 70); // 글자 속도
}

// 6. 오늘 날짜 + 요일 문자열
function getTodayLabel() {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const day = days[d.getDay()];
  return `${year}년 ${month}월 ${date}일 (${day})`;
}

// 7. 띠 선택 버튼 표시
function showZodiacButtons() {
  zodiacWrapEl.innerHTML = "";
  zodiacWrapEl.style.display = "flex";
  hintTextEl.textContent = "내 띠를 골라볼까?";

  const order = [
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
    "원숭이",
    "닭",
    "개",
    "돼지"
  ];

  order.forEach((name) => {
    const btn = document.createElement("button");
    btn.className = "zodiac-btn";
    btn.textContent = name + "띠";
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      pickZodiac(name);
    });
    zodiacWrapEl.appendChild(btn);
  });
}

// 8. 띠 선택 시 동작
function pickZodiac(name) {
  const gifPath = zodiacGifs[name];
  const fortunes = zodiacFortunes[name];

  if (!gifPath || !fortunes) return;

  state = "chosen";

  // 배경 GIF 교체 (index.html 기준 경로)
  bgGifEl.style.backgroundImage = `url("${gifPath}")`;

  // 화자/타이틀 & 오늘 날짜
  speakerEl.textContent = `오늘의 ${name}띠 운세`;
  metaEl.textContent = getTodayLabel();

  // 오늘의 랜덤 운세 1개 선택
  const random = fortunes[Math.floor(Math.random() * fortunes.length)];

  // 안내 문구
  hintTextEl.textContent = "다른 띠 버튼을 다시 눌러도 새로운 운세가 나와요 ✨";

  // 대사 출력
  typeLine(random);
}

// 9. 첫 진입: 1번 대사 + 기본 배경 GIF 세팅
window.addEventListener("load", () => {
  // 기본 배경 GIF
  bgGifEl.style.backgroundImage = 'url("assets/bg_gif1.gif")';

  metaEl.textContent = ""; // 처음에는 날짜 표시 X
  typeLine(firstLine, () => {
    state = "intro1_done";
    hintTextEl.textContent = "화면을 한 번 눌러볼까?";
  });
});

// 10. 화면 클릭 시 상태 전환
document.body.addEventListener(
  "click",
  () => {
    if (isTyping) return;

    if (state === "intro1_done") {
      state = "intro2";
      metaEl.textContent = ""; // 질문 단계에서는 날짜 숨김
      speakerEl.textContent = "복토리";
      typeLine(secondLine, () => {
        state = "intro2_done";
        showZodiacButtons();
      });
    }
  },
  false
);
