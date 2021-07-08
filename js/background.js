//배열생성
const images = ["0.JPG","1.JPG","2.jpg","3.jpeg"]
//랜덤으로 돌려줘
const pakuImage = images[Math.floor(Math.random() * images.length)];
//자스 기능 사용하기 이미지 사용하기위해 javascript에서 html을 만들었음.
const bgImage = document.createElement("img");
//html에서는 랜덤으로 사진나오게 할수있는 기능없으니 자스 사용
bgImage.src = `img/${pakuImage}`;
document.body.appendChild(bgImage);


