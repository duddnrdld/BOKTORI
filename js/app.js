// 1. 대사 텍스트
const firstLine = "안녕! 반가워!\n우리는 십이간지 복토리들이야!";
const secondLine = "당신은 무슨띠에요?";

// 2. 띠별 정보 (GIF + 대사)
// GIF 경로는 실제 파일명에 맞게 변경 가능
const zodiacData = {
  "쥐": {
    gif: "assets/zodiac_rat.gif",
    line: "나는 쥐띠 복토리! 작은 시작이 큰 복을 만들 거야."
  },
  "소": {
    gif: "assets/zodiac_ox.gif",
    line: "나는 소띠 복토리! 차근차근, 하지만 끝까지 가는 힘을 줄게."
  },
  "호랑이": {
    gif: "assets/zodiac_tiger.gif",
    line: "나는 호랑이띠 복토리! 용기 100%, 타이밍 운까지 챙겨왔어."
  },
  "토끼": {
    gif: "assets/zodiac_rabbit.gif",
    line: "나는 토끼띠 복토리! 포근한 행운이 사뿐사뿐 다가가고 있어."
  },
  "용": {
    gif: "assets/zodiac_dragon.gif",
    line: "나는 용띠 복토리! 크게 비상하는 기운을 듬뿍 얹어줄게."
  },
  "뱀": {
    gif: "assets/zodiac_snake.gif",
    line: "나는 뱀띠 복토리! 눈치와 직감이 오늘 널 도와줄 거야."
  },
  "말": {
    gif: "assets/zodiac_horse.gif",
    line: "나는 말띠 복토리! 속도감 있게 앞으로 달려볼까?"
  },
  "양": {
    gif: "assets/zodiac_sheep.gif",
    line: "나는 양띠 복토리! 포근포근한 인연 운을 챙겨왔어."
  },
  "원숭이": {
    gif: "assets/zodiac_monkey.gif",
    line: "나는 원숭이띠 복토리! 센스와 재치가 오늘의 무기야."
  },
  "닭": {
    gif: "assets/zodiac_rooster.gif",
    line: "나는 닭띠 복토리! 부지런한 시작이 복을 깨우고 있어."
  },
  "개": {
    gif: "assets/zodiac_dog.gif",
    line: "나는 개띠 복토리! 믿음직한 동료 운을 붙여줄게."
  },
  "돼지": {
    gif: "assets/zodiac_pig.gif",
    line: "나는 돼지띠 복토리! 먹을 복, 금전운 살짝 더 올려줄까?"
  }
};

// 3. DOM 요소
const dialogTextEl = document.getElementById("dialogText");
const hintTextEl = document.getElementById("hintText");
const zodiacWrapEl = document.getElementById("zodiacWrap");
const bgGifEl = document.getElementById("bgGif");
const speakerEl = document.getElementById("speaker");

let state = "intro1"; // intro1 → intro1_done → intro2 → intro2_done → chosen
let isTyping = false;

// 4. 타이핑 효과
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
  }, 80); // 글자 속도 (ms)
}

// 5. 띠 선택 버튼 표시
function showZodiacButtons() {
  zodiacWrapEl.innerHTML = "";
  zodiacWrapEl.style.display = "flex";
  hintTextEl.textContent = "내 띠를 골라볼까?";

  Object.keys(zodiacData).forEach((name) => {
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

// 6. 띠 선택 시 동작
function pickZodiac(name) {
  const info = zodiacData[name];
  if (!info) return;

  state = "chosen";

  // 배경 GIF 교체
  bgGifEl.style.backgroundImage = `url("../${info.gif}")`;
  // (index.html 기준이 아닌 CSS 기준이라면 이 경로가 헷갈릴 수 있음.
  //  헷갈리면 그냥 "bgGifEl.style.backgroundImage = 'url(\"assets/...gif\")';" 로 써도 됨.)
  bgGifEl.style.backgroundImage = `url("${info.gif}")`;

  // 화자 이름 변경
  speakerEl.textContent = `${name}띠 복토리`;

  // 안내 문구
  hintTextEl.textContent = "다른 띠도 다시 눌러볼 수 있어요 :)";

  // 대사 출력
  typeLine(info.line);
}

// 7. 첫 진입: 1번 대사
window.addEventListener("load", () => {
  typeLine(firstLine, () => {
    state = "intro1_done";
    hintTextEl.textContent = "화면을 한 번 눌러볼까?";
  });
});

// 8. 화면 클릭 시 상태 전환
document.body.addEventListener(
  "click",
  () => {
    if (isTyping) return;

    if (state === "intro1_done") {
      state = "intro2";
      typeLine(secondLine, () => {
        state = "intro2_done";
        showZodiacButtons();
      });
    }
  },
  false
);
