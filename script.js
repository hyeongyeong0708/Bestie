// 이미지 파일 경로 배열
const imagePaths = ["images/aver1.png", "images/aver2.png", "images/aver3.png"];
// 페이지 경로 배열
const pagePaths = ["aver1.html", "aver2.html", "aver3.html"];
let currentImageIndex = 0;

// DOMContentLoaded 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function() {
  // 이미지 클릭 시 해당 페이지로 이동
  document.getElementById("image-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = pagePaths[currentImageIndex];
  });

  // 이전 버튼 클릭 시 이벤트 처리
  document.getElementById("prevBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
    document.getElementById("image").src = imagePaths[currentImageIndex];
    document.getElementById("image-link").href = pagePaths[currentImageIndex];
  });

  // 다음 버튼 클릭 시 이벤트 처리
  document.getElementById("nextBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    document.getElementById("image").src = imagePaths[currentImageIndex];
    document.getElementById("image-link").href = pagePaths[currentImageIndex];
  });
});
