

// 이미지 파일 경로 배열
const imagePaths = ["images/aver1.png", "images/aver2.png", "images/aver3.png"];
let currentImageIndex = 0;

// 이전 버튼 클릭 시 이벤트 처리
document.getElementById("prevBtn").addEventListener("click", function() {
  currentImageIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
  document.getElementById("image").src = imagePaths[currentImageIndex];
});

// 다음 버튼 클릭 시 이벤트 처리
document.getElementById("nextBtn").addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  document.getElementById("image").src = imagePaths[currentImageIndex];
});





