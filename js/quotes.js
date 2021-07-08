const quotes = [
    {
    quote: "「仕事はナメてかかって、真面目にやれ」と思っている。俺は、どの仕事もそうしてきているんです",　
    author: "テリー伊藤（演出家）",
    },
    {
    quote: "自分を少し抑えて、肩の力を抜けば、仕事は長続きする",
    author: "関根勤（タレント）",
    },
    {
    quote: "常に今日は明日の準備ですからね。今日やったことは必ず明日に返ってくるんです",
    author: "水谷豊（俳優)",
    },
    {
    quote: "一人一人が自分の仕事をきちっとこなすこと。この個人プレーの連携が、真のチームプレーなのだ",
    author: "松尾雄治（元ラグビー選手）",
    },
    {
    quote: "小さいことを積み重ねるのが、とんでもないところへ行くただひとつの道だと思っています",
    author: "イチロー（プロ野球選手）",
    },
    {
    quote: "一歩踏み出せるなら、もう一歩も踏み出せる",
    author: "トッド・スキナー（フリークライマー）",
    },
    {
    quote: "あたしは仕事したな──って思って死にたい",
    author: "マンガ「働きマン」（安野モヨコ著）",
    },
    {
    quote: "モチベーションという概念は、希望につながっていなければならない",
    author: "村上龍（作家）",
    },
    {
    quote: "弱気は最大の敵",
    author: "津田恒実（元ロ野球選手）",
    },
    {
    quote: "夜明け前が一番暗い",
    author: "パクドンミン（さやか夫）",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;