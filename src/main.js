const EImageMeme = document.querySelector(".image-meme");

const listImageMemeRes = [
  "./../access/images/resolve1.jpg",
  "./../access/images/resolve2.jpg",
  "./../access/images/resolve3.jpg",
];

const listImageMemeRej = [
  "./../access/images/reject1.jpg",
  "./../access/images/reject2.jpg",
  "./../access/images/reject3.jpg",
  "./../access/images/reject4.jpg",
  "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
  "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474113NUM/meme-anh-sang-chieu-mu-mat_045650308.jpg",
  "https://www.thepoetmagazine.org/wp-content/uploads/2024/06/xin-loi-meme.jpg",
];

const listTextRef = [
  "Nếu Mai Linh không đồng ý Lợi sẽ đem Mai Linh đi bán Trung Quốc",
  "Thật ra Lợi mà một kẻ trộm, Lợi đang đi cướp trái tim Mai Linh",
  "Mai Linh ơi! Lợi iu Mai Linh rất nhìu Mai Linh mà không đồng ý Lợi vẫn Theo đuổi đến cùng!",
  "Bây giờ đang là 3:02 PM ngày 26/9 đợi đang viết những dòng code này dành tặng cho Mai Linh",
  "Không iu ăn Đòn đó 🤬",
  "....",
  "Nếu Linh muốn 1 cuộc tình không trap. Hãy bật Googlemap và tìm anh",
  "Hà nội đẹp nhất về đêm Đời anh đẹp nhất có thêm Linh vào",
  "Thiếu Linh chẳng biết sống sao Nên xin Linh hãy nhận anh làm chồng",
];

let randomSubText = Math.floor(Math.random() * listTextRef.length);
let randomIndex = Math.floor(Math.random() * listImageMemeRej.length);

EImageMeme.innerHTML =
  '<img class="w-full" src="' +
  listImageMemeRes[randomIndex] +
  '" alt="' +
  listImageMemeRes[randomIndex] +
  '" />';

const ESubText = document.querySelector(".sub-text");
ESubText.textContent = listTextRef[randomSubText];

const btnRej = document.querySelector(".btn-rej");
const btnRes = document.querySelector(".btn-res");
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");

function handleClickOrHoverRejectBtn() {
  changePosition();
  EImageMeme.innerHTML =
    '<img class="w-full" src="' +
    listImageMemeRej[randomIndex] +
    '" alt="' +
    listImageMemeRej[randomIndex] +
    '" />';
}

function changePosition() {
  const container = document.querySelector(".container");
  const btnWidth = btnRej.offsetWidth;
  const btnHeight = btnRej.offsetHeight;
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const containerRect = container.getBoundingClientRect();

  var i = Math.floor(Math.random() * (containerWidth - btnWidth));
  var j = Math.floor(Math.random() * (containerHeight - btnHeight));

  btnRej.style.left = containerRect.left + i + "px";
  btnRej.style.top = containerRect.top + j + "px";

  randomIndex = Math.floor(Math.random() * listImageMemeRej.length);
  randomSubText = Math.floor(Math.random() * listTextRef.length);
  ESubText.textContent = listTextRef[randomSubText];
  EImageMeme.innerHTML =
    '<img class="w-full" src="' +
    listImageMemeRej[randomIndex] +
    '" alt="' +
    listImageMemeRej[randomIndex] +
    '" />';

  const btnResWidth = btnRes.offsetWidth;
  const btnResHeight = btnRes.offsetHeight;
  btnRes.style.width = btnResWidth + 20 + "px";
  btnRes.style.height = btnResHeight + 10 + "px";
}

btnRej.addEventListener("mouseover", () => {
  changePosition();
});

btnRej.addEventListener("mouseout", () => {
  changePosition();
});

// Modal functions
function openModal1() {
  modal1.classList.remove("hidden");
}

function closeModalAndOpenSecond() {
  modal1.classList.add("hidden");
  modal2.classList.remove("hidden");
}

function closeModal2() {
  modal2.classList.add("hidden");
}
