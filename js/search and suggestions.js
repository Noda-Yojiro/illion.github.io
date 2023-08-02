let suggestions = [
    // About Web
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    // Singers
    "周杰伦",
    "林俊杰",
    "薛之谦",
    // Songs
    "KANASHIBARI",
];

// 获取所有必需的元素
const searchWrapper = document.querySelector(".search-container");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const linkTag = searchWrapper.querySelector(".search-link");
let webLink;

// 如果用户按下任意键并释放
inputBox.onkeyup = (e) => {
  let userData = e.target.value; // 用户输入的数据
  let emptyArray = [];
  if (userData) {
    linkTag.onclick = () => {
      webLink = `https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=${userData}`;
      window.location.href = webLink;
    };
    emptyArray = suggestions.filter((data) => {
      // 将数组值和用户输入的字符转换为小写，并仅返回以用户输入字符开头的单词
      return data.toLowerCase().startsWith(userData.toLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // 将返回的数据放入<li>标签中
      return `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active"); // 显示自动完成框
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      // 为所有<li>标签添加onclick属性
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); // 隐藏自动完成框
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  webLink = `https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=${selectData}`;
  window.location.href = webLink;
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}