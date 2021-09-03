const quotes = [
  {
    quote: "먼저 개척해라. 그리고 고독해져라.",
    author: "버지니아 로메티",
  },
  {
    quote:
      "빨리 움직여 문제점을 해결하라. 당신이 문제점을 해결하지 않으면 당신은 빨리 나아갈 수 없을 것이다.",
    author: "마크 주커버그",
  },
  {
    quote:
      "성공은 형편없는 선생님이다. 그것은 똑똑한 사람들로 하여금 절대 패할 수 없다고 착각하게 만든다.",
    author: "빌 게이츠",
  },
  {
    quote:
      "실패는 옵션이다. 실패하지 않는다면, 당신은 충분한 혁신을 이룰 수 없다.",
    author: "앨런 머스크",
  },
  {
    quote:
      "오늘은 고통스럽다. 내일은 더 고통스럽다. 그리고 내일 모래는 아름다울 것이다.",
    author: "마윈",
  },
  {
    quote:
      "세상을 바꿀 한 문장은 무엇인가? 편하지 않은 흥분상태에서 항상 열심히 일하는 것이다.",
    author: "래리 페이",
  },
  {
    quote: "실패에 대해 걱저하지 마라. 한번만 제대로 하면 된다.",
    author: "드류 휴스턴",
  },
  {
    quote: "리더십이란, 리더가 없는 상황에서도 그 영향력이 지속되도록 하는 것",
    author: "셰릴 샌드버그",
  },
  {
    quote:
      "혁신을 할 때는 모든 사람들이 당신을 미쳤다고 할 테니, 그들 말에 준비가 되어 있어야 한다.",
    author: "래리 앨리슨",
  },
  {
    quote:
      "성공적인 직원 채용의 방법은 세상을 변화시키길 원하는 사람들을 찾아내는 것이다.",
    author: "마크 베니오프",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
