const quotes = [
    {
    main: "「仕事はナメてかかって、真面目にやれ」と思っている。俺は、どの仕事もそうしてきているんです",　
    sub: "テリー伊藤（演出家）",
    },
    {
    main: "自分を少し抑えて、肩の力を抜けば、仕事は長続きする",
    sub: "関根勤（タレント）",
    },
    {
    main: "常に今日は明日の準備ですからね。今日やったことは必ず明日に返ってくるんです",
    sub: "水谷豊（俳優)",
    },
    {
    main: "一人一人が自分の仕事をきちっとこなすこと。この個人プレーの連携が、真のチームプレーなのだ",
    sub: "松尾雄治（元ラグビー選手）",
    },
    {
    main: "小さいことを積み重ねるのが、とんでもないところへ行くただひとつの道だと思っています",
    sub: "イチロー（プロ野球選手）",
    },
    {
    main: "一歩踏み出せるなら、もう一歩も踏み出せる",
    sub: "トッド・スキナー（フリークライマー）",
    },
    {
    main: "あたしは仕事したな──って思って死にたい",
    sub: "マンガ「働きマン」（安野モヨコ著）",
    },
    {
    main: "モチベーションという概念は、希望につながっていなければならない",
    sub: "村上龍（作家）",
    },
    {
    main: "弱気は最大の敵",
    sub: "津田恒実（元ロ野球選手）",
    },
    {
    main: "夜明け前が一番暗い",
    sub: "パクドンミン（さやか夫）",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// Math object : 수학 계산과 관련된 계산 기능을 포함한 객체
// Math.random() = 0~1사이의 숫자를 랜덤으로 송출함(0.4353423423)
// Math.random() * 10 = 1~10사이의 숫자를 송출 
// Matn.round(반올림), ceil(올림), floor(버림)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.main;
author.innerText = todaysQuote.sub;