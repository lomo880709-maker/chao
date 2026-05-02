const AUTH_CONFIG = {
  oneDayCode: "DW-1DAY-2026",
  permanentCode: "DW-PERM-2026",
  storageKey: "duanwu-auth"
};

const cultureItems = [
  {
    icon: "源",
    title: "节日起源",
    text: "端午节在农历五月初五，融合了驱邪避疫、祭祀纪念、龙舟竞渡等传统内容，是重要的中国传统节日。"
  },
  {
    icon: "屈",
    title: "屈原故事",
    text: "屈原是端午文化中最广为人知的人物。人们用赛龙舟、投粽子等方式寄托纪念与家国情怀。"
  },
  {
    icon: "舟",
    title: "龙舟竞渡",
    text: "龙舟比赛讲究鼓点、协作和速度，象征奋进与团结，也是端午节最具现场感的活动之一。"
  },
  {
    icon: "粽",
    title: "粽子习俗",
    text: "粽子以糯米和粽叶包裹，各地口味不同，有甜粽、咸粽、豆沙粽、蛋黄肉粽等丰富类型。"
  },
  {
    icon: "艾",
    title: "艾草菖蒲",
    text: "端午时节人们常挂艾草和菖蒲，表达祈福安康、驱虫避疫的愿望，也形成了鲜明的节日气味。"
  },
  {
    icon: "诗",
    title: "端午诗词",
    text: "端午诗词常写忠贞、竞渡、榴花、角黍与家国之思，让节日记忆保存在文字和吟诵之中。"
  },
  {
    icon: "囊",
    title: "香囊佩饰",
    text: "端午香囊常装入芳香草药，既是节日佩饰，也寄托避秽纳福、守护健康的愿望。"
  },
  {
    icon: "绳",
    title: "五彩丝线",
    text: "五彩绳用青、红、白、黑、黄等颜色编成，常戴在手腕或脚腕，象征平安与祝福。"
  },
  {
    icon: "地",
    title: "地域风俗",
    text: "不同地区端午活动各有特色，有龙舟会、草药市、饮雄黄酒、立蛋、斗草等民俗实践。"
  },
  {
    icon: "传",
    title: "现代传承",
    text: "今天的端午节既保留家庭饮食和民俗记忆，也通过非遗展示、校园活动和城市赛事继续更新。"
  }
];

const cultureExtras = {
  "节日起源": {
    kid: "端午节就像一次夏天里的传统文化课，人们用各种习俗表达平安、纪念和团圆。",
    question: "你还知道端午节有哪些名字？"
  },
  "屈原故事": {
    kid: "屈原的故事让我们知道，传统节日不只是吃喝玩乐，也保存着人们对家国情怀的记忆。",
    question: "为什么人们会用节日活动纪念一个历史人物？"
  },
  "龙舟竞渡": {
    kid: "龙舟不是一个人能划快的，鼓点、方向和队友配合都很重要。",
    question: "龙舟比赛最能体现哪一种精神？"
  },
  "粽子习俗": {
    kid: "粽子的味道会因为地区和家庭不同而变化，甜粽、咸粽都承载着家的味道。",
    question: "你家更常吃甜粽还是咸粽？"
  },
  "艾草菖蒲": {
    kid: "古人会用有香味的草木表达驱虫避疫、祈求健康的愿望。",
    question: "端午节为什么常和健康、平安联系在一起？"
  },
  "端午诗词": {
    kid: "诗词像节日的记忆本，把龙舟、粽子、榴花和思念写进文字里。",
    question: "如果你写一句端午诗，会写到什么景物？"
  },
  "香囊佩饰": {
    kid: "香囊既好看又有香味，常被当作端午节的祝福小礼物。",
    question: "如果设计一个香囊，你会放什么图案？"
  },
  "五彩丝线": {
    kid: "五彩绳把美好的颜色戴在身上，表达大人对孩子平安健康的祝愿。",
    question: "你会选择哪几种颜色编五彩绳？"
  },
  "地域风俗": {
    kid: "同一个节日，在不同地方会有不同过法，这正是传统文化丰富的地方。",
    question: "你的家乡有什么特别的端午习俗？"
  },
  "现代传承": {
    kid: "今天我们用网页、游戏和卡片学习端午，也是在用新的方式传承传统文化。",
    question: "你还想用什么新方式介绍端午节？"
  }
};

const quizItems = [
  {
    level: "基础",
    question: "端午节通常在农历哪一天？",
    options: ["五月初五", "正月十五", "八月十五", "九月初九"],
    answer: 0,
    explain: "端午节是农历五月初五，也称端阳节、龙舟节。"
  },
  {
    level: "基础",
    question: "端午节最具代表性的竞赛活动是什么？",
    options: ["赛龙舟", "猜灯谜", "登高", "赏月"],
    answer: 0,
    explain: "赛龙舟是端午节极具代表性的民俗活动，强调协作和竞渡。"
  },
  {
    level: "基础",
    question: "下列哪一项是端午常见食物？",
    options: ["粽子", "月饼", "汤圆", "重阳糕"],
    answer: 0,
    explain: "粽子由糯米、粽叶等包制而成，是端午节的重要食物。"
  },
  {
    level: "基础",
    question: "端午文化中常被纪念的历史人物是？",
    options: ["屈原", "李白", "杜甫", "苏轼"],
    answer: 0,
    explain: "屈原与端午节的纪念传统关系最为广泛。"
  },
  {
    level: "理解",
    question: "端午悬挂艾草、菖蒲主要表达什么愿望？",
    options: ["祈福安康", "庆祝丰收", "迎接新年", "祭拜月亮"],
    answer: 0,
    explain: "挂艾草和菖蒲体现了驱虫避疫、祈求安康的民俗心理。"
  },
  {
    level: "基础",
    question: "端午节又可以称为哪一个名称？",
    options: ["龙舟节", "中秋节", "元宵节", "腊八节"],
    answer: 0,
    explain: "端午节也被称为端阳节、龙舟节等。"
  },
  {
    level: "理解",
    question: "五彩绳在端午习俗中常象征什么？",
    options: ["平安祝福", "科举高中", "乔迁新居", "秋收储粮"],
    answer: 0,
    explain: "五彩绳常寄托避邪纳福、平安健康的祝愿。"
  },
  {
    level: "基础",
    question: "粽叶清香、龙舟鼓点主要对应哪个传统节日？",
    options: ["端午节", "春节", "清明节", "七夕节"],
    answer: 0,
    explain: "粽叶和龙舟都是端午节非常典型的节日符号。"
  },
  {
    level: "理解",
    question: "为什么端午活动常强调龙舟竞渡的协作？",
    options: ["体现团结奋进", "为了独自取胜", "只为了装饰船只", "为了减少交流"],
    answer: 0,
    explain: "龙舟竞渡需要鼓点、划手和方向配合，体现团结协作与共同奋进。"
  },
  {
    level: "理解",
    question: "端午祝福常说“安康”，更强调哪一种节日愿望？",
    options: ["健康平安", "考试第一", "财富最多", "旅行顺利"],
    answer: 0,
    explain: "端午处在仲夏时节，民俗中有避疫祈安的内容，因此常用“安康”表达祝愿。"
  },
  {
    level: "拓展",
    question: "不同地区端午习俗存在差异，学习时更合适的态度是？",
    options: ["尊重差异并了解原因", "只承认一种习俗", "认为不同就错误", "完全忽略地方文化"],
    answer: 0,
    explain: "传统节日会在不同地域形成不同实践，尊重差异有助于理解文化多样性。"
  },
  {
    level: "拓展",
    question: "把端午文化做成主题班会互动网页课件，最能体现哪种传承方式？",
    options: ["用现代媒介传播传统文化", "取消传统节日", "只保留游戏分数", "把习俗变成广告"],
    answer: 0,
    explain: "数字化互动可以让传统文化以新的形式被了解、体验和表达。"
  }
];

const recipes = [
  {
    name: "豆沙甜粽",
    hint: "口感绵甜，适合搭配糯米、粽叶、豆沙和红枣。",
    ingredients: ["糯米", "粽叶", "豆沙", "红枣"]
  },
  {
    name: "蛋黄肉粽",
    hint: "咸香饱满，核心配料是糯米、粽叶、咸蛋黄和五花肉。",
    ingredients: ["糯米", "粽叶", "咸蛋黄", "五花肉"]
  },
  {
    name: "八宝粽",
    hint: "配料丰富，常用糯米、粽叶、莲子、花生和红豆。",
    ingredients: ["糯米", "粽叶", "莲子", "花生", "红豆"]
  },
  {
    name: "清香白粽",
    hint: "突出粽叶清香，只需要糯米和粽叶，吃时可蘸糖。",
    ingredients: ["糯米", "粽叶"]
  }
];

const ingredientPool = ["糯米", "粽叶", "豆沙", "红枣", "咸蛋黄", "五花肉", "莲子", "花生", "红豆", "桂花糖"];

const checkTasks = [
  {
    title: "读一段端午故事",
    desc: "了解屈原、龙舟或地方端午传说。"
  },
  {
    title: "完成一次知识闯关",
    desc: "答完 8 道题并查看错题解析。"
  },
  {
    title: "体验龙舟竞速",
    desc: "完成一轮 30 秒小游戏。"
  },
  {
    title: "搭配一种粽子",
    desc: "在粽子工坊提交一次配料组合。"
  },
  {
    title: "写一句端午祝福",
    desc: "生成一张个人祝福卡。"
  },
  {
    title: "记录一个家乡习俗",
    desc: "想一想家里或当地端午会做什么。"
  }
];

const parentTasks = [
  {
    title: "采访一位家人",
    desc: "问问家人小时候端午节怎么过。"
  },
  {
    title: "记录家乡习俗",
    desc: "写下一个本地或家庭端午习俗。"
  },
  {
    title: "送出一张祝福卡",
    desc: "把生成的祝福语读给家人或老师听。"
  }
];

const flowSteps = [
  {
    title: "目标导入",
    desc: "明确要了解端午来源、习俗和传承价值。"
  },
  {
    title: "文化学习",
    desc: "阅读文化卡片，建立基础知识。"
  },
  {
    title: "互动体验",
    desc: "完成龙舟竞速、粽子工坊和活动打卡。"
  },
  {
    title: "分层检测",
    desc: "按基础、理解、拓展三个层级答题。"
  },
  {
    title: "报告展示",
    desc: "查看学习报告并生成节日成果。"
  }
];

const views = document.querySelectorAll(".view");
const navButtons = document.querySelectorAll(".nav-item");
const cultureGrid = document.querySelector("#cultureGrid");
const quizBox = document.querySelector("#quizBox");
const quizResult = document.querySelector("#quizResult");
const questionText = document.querySelector("#questionText");
const answers = document.querySelector("#answers");
const explain = document.querySelector("#explain");
const quizProgress = document.querySelector("#quizProgress");
const quizScore = document.querySelector("#quizScore");
const nextQuestion = document.querySelector("#nextQuestion");
const restartQuiz = document.querySelector("#restartQuiz");
const retryFromResult = document.querySelector("#retryFromResult");
const rankTitle = document.querySelector("#rankTitle");
const rankText = document.querySelector("#rankText");
const scoreBar = document.querySelector("#scoreBar");
const finalTitle = document.querySelector("#finalTitle");
const finalScore = document.querySelector("#finalScore");
const finalText = document.querySelector("#finalText");
const wrongList = document.querySelector("#wrongList");
const cardName = document.querySelector("#cardName");
const cardMessage = document.querySelector("#cardMessage");
const cardTheme = document.querySelector("#cardTheme");
const previewName = document.querySelector("#previewName");
const previewMessage = document.querySelector("#previewMessage");
const festivalCard = document.querySelector("#festivalCard");
const downloadCard = document.querySelector("#downloadCard");
const raceStage = document.querySelector("#raceStage");
const playerBoat = document.querySelector("#playerBoat");
const gameScoreText = document.querySelector("#gameScore");
const gameTimeText = document.querySelector("#gameTime");
const gameStateText = document.querySelector("#gameState");
const gameRank = document.querySelector("#gameRank");
const gameTip = document.querySelector("#gameTip");
const gameCultureNote = document.querySelector("#gameCultureNote");
const startGameButton = document.querySelector("#startGame");
const moveUpButton = document.querySelector("#moveUp");
const moveDownButton = document.querySelector("#moveDown");
const recipeName = document.querySelector("#recipeName");
const recipeHint = document.querySelector("#recipeHint");
const ingredientGrid = document.querySelector("#ingredientGrid");
const recipeFeedback = document.querySelector("#recipeFeedback");
const submitRecipe = document.querySelector("#submitRecipe");
const nextRecipe = document.querySelector("#nextRecipe");
const taskList = document.querySelector("#taskList");
const checkCount = document.querySelector("#checkCount");
const checkBar = document.querySelector("#checkBar");
const resetTasks = document.querySelector("#resetTasks");
const flowBoard = document.querySelector("#flowBoard");
const levelTabs = document.querySelector("#levelTabs");
const reportTitle = document.querySelector("#reportTitle");
const reportScore = document.querySelector("#reportScore");
const reportSummary = document.querySelector("#reportSummary");
const metricList = document.querySelector("#metricList");
const reportWrongList = document.querySelector("#reportWrongList");
const parentTaskList = document.querySelector("#parentTaskList");
const refreshReport = document.querySelector("#refreshReport");
const downloadReport = document.querySelector("#downloadReport");
const downloadCertificate = document.querySelector("#downloadCertificate");
const certificateHint = document.querySelector("#certificateHint");
const retryMistakes = document.querySelector("#retryMistakes");
const clearLearningData = document.querySelector("#clearLearningData");
const todayTasks = document.querySelector("#todayTasks");
const classroomStep = document.querySelector("#classroomStep");
const classroomTitle = document.querySelector("#classroomTitle");
const classroomText = document.querySelector("#classroomText");
const prevSlide = document.querySelector("#prevSlide");
const nextSlide = document.querySelector("#nextSlide");
const resetSlide = document.querySelector("#resetSlide");
const authForm = document.querySelector("#authForm");
const authCode = document.querySelector("#authCode");
const authMessage = document.querySelector("#authMessage");
const logoutAuth = document.querySelector("#logoutAuth");

let questionOrder = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let mistakes = [];
let gameLane = 1;
let gameScore = 0;
let gameTime = 30;
let gameRunning = false;
let gameObjects = [];
let gameTimer = null;
let gameSpawner = null;
let gameLoop = null;
let gameBestScore = Number(localStorage.getItem("duanwu-game-best") || "0");
let currentRecipe = null;
let selectedIngredients = new Set();
let taskState = [];
let parentTaskState = [];
let activeLevel = "基础";
let lastQuizStats = {
  score: 0,
  correct: 0,
  total: 0,
  level: "基础",
  mistakes: []
};
let learnedCulture = [];
let latestReport = null;
let classroomIndex = 0;
let mistakePracticeItems = null;

function readAuthRecord() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_CONFIG.storageKey) || "null");
  } catch (error) {
    console.warn("无法读取授权记录", error);
    return null;
  }
}

function writeAuthRecord(record) {
  localStorage.setItem(AUTH_CONFIG.storageKey, JSON.stringify(record));
}

function isAuthValid(record) {
  if (!record) return false;
  if (record.type === "permanent") return true;
  return record.type === "one-day" && Number(record.expiresAt) > Date.now();
}

function formatAuthLeft(expiresAt) {
  const left = Math.max(0, Number(expiresAt) - Date.now());
  const hours = Math.ceil(left / 3600000);
  return `${hours} 小时`;
}

function unlockApp(record) {
  document.body.classList.remove("auth-locked");
  if (authMessage) {
    authMessage.textContent = record.type === "permanent"
      ? "永久授权已生效。"
      : `1 天授权已生效，剩余约 ${formatAuthLeft(record.expiresAt)}。`;
  }
}

function lockApp(message = "请输入授权码。") {
  document.body.classList.add("auth-locked");
  if (authMessage) authMessage.textContent = message;
  if (authCode) authCode.focus();
}

function submitAuthCode(code) {
  const inputCode = code.trim();
  if (inputCode === AUTH_CONFIG.permanentCode) {
    const record = {
      type: "permanent",
      issuedAt: Date.now()
    };
    writeAuthRecord(record);
    unlockApp(record);
    return;
  }

  if (inputCode === AUTH_CONFIG.oneDayCode) {
    const record = {
      type: "one-day",
      issuedAt: Date.now(),
      expiresAt: Date.now() + 24 * 60 * 60 * 1000
    };
    writeAuthRecord(record);
    unlockApp(record);
    return;
  }

  lockApp("授权码不正确，请重新输入。");
}

function initAuthGate() {
  const record = readAuthRecord();
  if (isAuthValid(record)) {
    unlockApp(record);
  } else {
    localStorage.removeItem(AUTH_CONFIG.storageKey);
    lockApp(record ? "授权已过期，请重新输入授权码。" : "请输入授权码。");
  }

  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitAuthCode(authCode.value);
  });

  logoutAuth.addEventListener("click", () => {
    localStorage.removeItem(AUTH_CONFIG.storageKey);
    authCode.value = "";
    lockApp("已退出授权，请重新输入授权码。");
  });
}

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function switchView(viewName) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewName));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === viewName));
  if (viewName !== "interaction") stopGame(false);
  if (viewName === "learning") {
    markFlow(0);
    markFlow(1);
  }
  if (viewName === "interaction") markFlow(2);
  if (viewName === "quiz") markFlow(3);
  if (viewName === "outcomes") {
    markFlow(4);
    renderReport();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.jump));
});

function renderCulture() {
  cultureGrid.innerHTML = cultureItems.map((item, index) => {
    const extra = cultureExtras[item.title] || {};
    return `
    <article class="culture-card ${learnedCulture[index] ? "learned" : ""}">
      <div class="culture-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="kid-note">
        <strong>儿童版解释</strong>
        ${extra.kid || "用更简单的话理解这个端午知识点。"}
      </div>
      <div class="culture-question">
        <strong>想一想</strong>
        ${extra.question || "你能把这个知识讲给家人听吗？"}
      </div>
      <button class="learn-culture" type="button" data-culture-index="${index}">${learnedCulture[index] ? "已学会" : "我知道了"}</button>
    </article>
  `;
  }).join("");

  cultureGrid.querySelectorAll("[data-culture-index]").forEach((button) => {
    button.addEventListener("click", () => {
      markCultureLearned(Number(button.dataset.cultureIndex));
    });
  });
}

function renderFlow() {
  const completed = JSON.parse(localStorage.getItem("duanwu-flow") || "[]");
  flowBoard.innerHTML = flowSteps.map((step, index) => `
    <article class="flow-step ${completed[index] ? "done" : ""}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${step.title}</strong>
      <p>${step.desc}</p>
    </article>
  `).join("");
}

function markFlow(index) {
  const completed = JSON.parse(localStorage.getItem("duanwu-flow") || "[]");
  completed[index] = true;
  localStorage.setItem("duanwu-flow", JSON.stringify(completed));
  renderFlow();
}

function renderClassroomSlide() {
  const step = flowSteps[classroomIndex];
  classroomStep.textContent = `第 ${classroomIndex + 1} 步 / 共 ${flowSteps.length} 步`;
  classroomTitle.textContent = step.title;
  classroomText.textContent = step.desc;
  prevSlide.disabled = classroomIndex === 0;
  nextSlide.disabled = classroomIndex === flowSteps.length - 1;
}

function activeQuizItems() {
  return mistakePracticeItems || quizItems.filter((item) => item.level === activeLevel);
}

function loadCultureProgress() {
  try {
    learnedCulture = JSON.parse(localStorage.getItem("duanwu-culture") || "[]");
  } catch (error) {
    console.warn("无法读取文化学习进度", error);
    learnedCulture = [];
  }
  learnedCulture = cultureItems.map((_, index) => Boolean(learnedCulture[index]));
}

function saveCultureProgress() {
  try {
    localStorage.setItem("duanwu-culture", JSON.stringify(learnedCulture));
  } catch (error) {
    console.warn("无法保存文化学习进度", error);
  }
}

function markCultureLearned(index) {
  learnedCulture[index] = true;
  saveCultureProgress();
  renderCulture();
  if (learnedCulture.filter(Boolean).length >= Math.min(3, cultureItems.length)) markTask(0, true);
  renderReport();
  renderTodayTasks();
}

function renderTodayTasks() {
  if (!todayTasks) return;
  const cultureDone = learnedCulture.filter(Boolean).length >= 3;
  const interactionDone = Boolean(taskState[2] || taskState[3]);
  const quizDone = Boolean(lastQuizStats.total);
  const outcomeDone = Boolean(taskState[4] || latestReport?.totalScore >= 60);
  const items = [
    ["学 3 张文化卡", cultureDone],
    ["完成 1 个互动", interactionDone],
    ["完成 1 组闯关", quizDone],
    ["生成 1 份成果", outcomeDone]
  ];

  todayTasks.innerHTML = items.map(([title, done], index) => `
    <article class="today-task ${done ? "done" : ""}">
      <span>${done ? "已完成" : `任务 ${index + 1}`}</span>
      <strong>${title}</strong>
    </article>
  `).join("");
}

function laneTop(lane) {
  const stageHeight = raceStage.clientHeight || 420;
  const laneHeight = stageHeight / 3;
  return laneHeight * lane + laneHeight / 2 - 24;
}

function updateBoatLane() {
  playerBoat.style.top = `${laneTop(gameLane)}px`;
}

function updateGameHud() {
  gameScoreText.textContent = gameScore;
  gameTimeText.textContent = `${gameTime}s`;
}

function moveBoat(direction) {
  if (!raceStage) return;
  gameLane = Math.max(0, Math.min(2, gameLane + direction));
  updateBoatLane();
  raceStage.focus({ preventScroll: true });
}

function clearGameObjects() {
  gameObjects.forEach((item) => item.element.remove());
  gameObjects = [];
}

function spawnRaceObject() {
  if (!gameRunning) return;
  const isReward = Math.random() > 0.42;
  const element = document.createElement("div");
  const lane = Math.floor(Math.random() * 3);
  const stageWidth = raceStage.clientWidth || 680;

  element.className = `race-object ${isReward ? "zongzi-item" : "rock-item"}`;
  element.textContent = isReward ? "" : "!";
  raceStage.appendChild(element);
  gameObjects.push({
    element,
    lane,
    x: stageWidth + 60,
    y: laneTop(lane) + 24,
    speed: 3.6 + Math.random() * 2.2,
    type: isReward ? "reward" : "hazard",
    hit: false
  });
}

function hasCollision(item) {
  const boatBox = playerBoat.getBoundingClientRect();
  const itemBox = item.element.getBoundingClientRect();
  return !(
    boatBox.right < itemBox.left ||
    boatBox.left > itemBox.right ||
    boatBox.bottom < itemBox.top ||
    boatBox.top > itemBox.bottom
  );
}

function updateGameRank(final = false) {
  if (gameScore >= 120) {
    gameRank.textContent = "龙舟领航手";
    gameTip.textContent = final ? "节奏、判断和路线都很好，已经是龙舟赛场上的稳定领航者。" : "保持节奏，继续收集粽子并避开障碍。";
    gameCultureNote.textContent = final ? "龙舟竞渡最重要的是团队节奏。你的路线判断稳定，可以把它理解为“协作有序，才能行得更远”。" : "龙舟竞渡强调鼓点、方向和划手配合，是端午节中很能体现协作精神的活动。";
  } else if (gameScore >= 70) {
    gameRank.textContent = "竞渡好手";
    gameTip.textContent = final ? "表现不错，已经具备端午竞渡的协作与反应力。" : "分数正在上升，注意不要撞上障碍。";
    gameCultureNote.textContent = final ? "端午龙舟赛不是单纯比速度，也是在体验齐心协力、听从鼓点和共同前进。" : "龙舟竞渡强调鼓点、方向和划手配合，是端午节中很能体现协作精神的活动。";
  } else {
    gameRank.textContent = final ? "击鼓练习生" : "击鼓待发";
    gameTip.textContent = final ? "可以再试一次，优先避开障碍比盲目收集更稳。" : "30 秒内收集粽子加 10 分，避开浪花和礁石。可用按钮或键盘上下方向键换道。";
    gameCultureNote.textContent = final ? "龙舟竞渡需要稳定节奏。先学会避开障碍，再追求速度，和真实龙舟训练一样要循序渐进。" : "龙舟竞渡强调鼓点、方向和划手配合，是端午节中很能体现协作精神的活动。";
  }
}

function tickGameObjects() {
  if (!gameRunning) return;

  gameObjects.forEach((item) => {
    item.x -= item.speed;
    item.element.style.left = `${item.x}px`;
    item.element.style.top = `${item.y}px`;

    if (!item.hit && hasCollision(item)) {
      item.hit = true;
      item.removeAt = performance.now() + 220;
      item.element.classList.add("hit");
      gameScore += item.type === "reward" ? 10 : -8;
      gameScore = Math.max(0, gameScore);
      updateGameHud();
      updateGameRank();
    }
  });

  gameObjects = gameObjects.filter((item) => {
    const keep = item.x > -80 && (!item.hit || performance.now() < item.removeAt);
    if (!keep) item.element.remove();
    return keep;
  });

  gameLoop = requestAnimationFrame(tickGameObjects);
}

function startGame() {
  stopGame(false);
  gameLane = 1;
  gameScore = 0;
  gameTime = 30;
  gameRunning = true;
  clearGameObjects();
  updateBoatLane();
  updateGameHud();
  updateGameRank();
  gameStateText.textContent = "竞速中";
  startGameButton.textContent = "重新开始";
  raceStage.focus({ preventScroll: true });

  gameSpawner = setInterval(spawnRaceObject, 720);
  gameTimer = setInterval(() => {
    gameTime -= 1;
    updateGameHud();
    if (gameTime <= 0) stopGame(true);
  }, 1000);
  gameLoop = requestAnimationFrame(tickGameObjects);
}

function stopGame(showFinal) {
  if (gameTimer) clearInterval(gameTimer);
  if (gameSpawner) clearInterval(gameSpawner);
  if (gameLoop) cancelAnimationFrame(gameLoop);
  gameTimer = null;
  gameSpawner = null;
  gameLoop = null;

  if (!gameRunning && !showFinal) return;
  gameRunning = false;
  gameStateText.textContent = showFinal ? "已完成" : "待开始";
  startGameButton.textContent = "开始游戏";
  if (showFinal) {
    gameBestScore = Math.max(gameBestScore, gameScore);
    localStorage.setItem("duanwu-game-best", String(gameBestScore));
    updateGameRank(true);
    markTask(2, true);
  }
}

function pickRecipe() {
  currentRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  selectedIngredients = new Set();
  recipeName.textContent = currentRecipe.name;
  recipeHint.textContent = currentRecipe.hint;
  recipeFeedback.textContent = "选择你认为需要的配料，然后提交搭配。";
  renderIngredients();
}

function renderIngredients() {
  ingredientGrid.innerHTML = "";
  ingredientPool.forEach((ingredient) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ingredient-chip";
    button.textContent = ingredient;
    button.classList.toggle("active", selectedIngredients.has(ingredient));
    button.addEventListener("click", () => {
      if (selectedIngredients.has(ingredient)) {
        selectedIngredients.delete(ingredient);
      } else {
        selectedIngredients.add(ingredient);
      }
      renderIngredients();
    });
    ingredientGrid.appendChild(button);
  });
}

function submitRecipeAnswer() {
  if (!currentRecipe) return;
  const expected = [...currentRecipe.ingredients].sort();
  const actual = [...selectedIngredients].sort();
  const correct = expected.length === actual.length && expected.every((item, index) => item === actual[index]);

  if (correct) {
    recipeFeedback.textContent = `搭配成功：${currentRecipe.name} 需要 ${expected.join("、")}。`;
    markTask(3, true);
    return;
  }

  const missing = expected.filter((item) => !selectedIngredients.has(item));
  const extra = actual.filter((item) => !currentRecipe.ingredients.includes(item));
  const tips = [];
  if (missing.length) tips.push(`缺少：${missing.join("、")}`);
  if (extra.length) tips.push(`多选：${extra.join("、")}`);
  recipeFeedback.textContent = `还差一点。${tips.join("；")}。`;
}

function loadTaskState() {
  try {
    taskState = JSON.parse(localStorage.getItem("duanwu-tasks") || "[]");
  } catch (error) {
    console.warn("无法读取端午打卡记录", error);
    taskState = [];
  }
  taskState = checkTasks.map((_, index) => Boolean(taskState[index]));
}

function loadParentTaskState() {
  try {
    parentTaskState = JSON.parse(localStorage.getItem("duanwu-parent-tasks") || "[]");
  } catch (error) {
    console.warn("无法读取亲子任务记录", error);
    parentTaskState = [];
  }
  parentTaskState = parentTasks.map((_, index) => Boolean(parentTaskState[index]));
}

function saveParentTaskState() {
  try {
    localStorage.setItem("duanwu-parent-tasks", JSON.stringify(parentTaskState));
  } catch (error) {
    console.warn("无法保存亲子任务记录", error);
  }
}

function saveTaskState() {
  try {
    localStorage.setItem("duanwu-tasks", JSON.stringify(taskState));
  } catch (error) {
    console.warn("无法保存端午打卡记录", error);
  }
}

function renderTasks() {
  const completed = taskState.filter(Boolean).length;
  checkCount.textContent = `${completed}/${checkTasks.length}`;
  checkBar.style.width = `${completed / checkTasks.length * 100}%`;
  taskList.innerHTML = "";

  checkTasks.forEach((task, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `task-item ${taskState[index] ? "done" : ""}`;
    button.innerHTML = `
      <i>${taskState[index] ? "✓" : index + 1}</i>
      <span>
        <strong>${task.title}</strong>
        <span>${task.desc}</span>
      </span>
    `;
    button.addEventListener("click", () => markTask(index, !taskState[index]));
    taskList.appendChild(button);
  });
}

function markTask(index, done) {
  if (!taskState.length) loadTaskState();
  taskState[index] = done;
  saveTaskState();
  renderTasks();
  renderTodayTasks();
}

function renderParentTasks() {
  parentTaskList.innerHTML = "";
  parentTasks.forEach((task, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `parent-task ${parentTaskState[index] ? "done" : ""}`;
    button.innerHTML = `
      <i>${parentTaskState[index] ? "✓" : index + 1}</i>
      <span>
        <strong>${task.title}</strong><br>
        <span>${task.desc}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      parentTaskState[index] = !parentTaskState[index];
      saveParentTaskState();
      renderParentTasks();
      renderReport();
    });
    parentTaskList.appendChild(button);
  });
}

function loadQuizReport() {
  try {
    lastQuizStats = JSON.parse(localStorage.getItem("duanwu-quiz-report") || "null") || lastQuizStats;
  } catch (error) {
    console.warn("无法读取答题报告", error);
  }
}

function renderReport() {
  loadQuizReport();
  const taskDone = taskState.filter(Boolean).length;
  const parentDone = parentTaskState.filter(Boolean).length;
  const cultureDone = learnedCulture.filter(Boolean).length;
  const quizPercent = lastQuizStats.total ? Math.round(lastQuizStats.correct / lastQuizStats.total * 100) : 0;
  const taskPercent = Math.round(taskDone / checkTasks.length * 100);
  const parentPercent = Math.round(parentDone / parentTasks.length * 100);
  const culturePercent = Math.round(cultureDone / cultureItems.length * 100);
  const displayGameScore = Math.max(gameScore, gameBestScore);
  const gamePercent = Math.min(100, Math.round(displayGameScore / 120 * 100));
  const totalScore = Math.round(quizPercent * 0.32 + taskPercent * 0.2 + parentPercent * 0.16 + gamePercent * 0.12 + culturePercent * 0.2);
  latestReport = {
    totalScore,
    quizPercent,
    taskDone,
    parentDone,
    cultureDone,
    displayGameScore,
    title: "",
    summary: ""
  };

  reportScore.textContent = totalScore;
  if (totalScore >= 85) {
    latestReport.title = "端午文化小讲解员";
    latestReport.summary = "学习、互动和亲子任务完成度都很高，可以尝试向同学或家人介绍一个端午习俗。";
  } else if (totalScore >= 60) {
    latestReport.title = "端午学习实践者";
    latestReport.summary = "已经完成主要学习任务，建议补齐亲子任务或挑战更高层级题目。";
  } else {
    latestReport.title = "端午探索起步者";
    latestReport.summary = "建议先完成文化学习和基础题，再逐步体验互动任务。";
  }
  reportTitle.textContent = latestReport.title;
  reportSummary.textContent = latestReport.summary;
  certificateHint.textContent = totalScore >= 60
    ? "已达到证书生成条件，可导出端午学习证书。"
    : "综合分达到 60 分后，可生成端午学习证书。";

  metricList.innerHTML = `
    <div class="metric-item"><span>文化学习</span><strong>${cultureDone}/${cultureItems.length}</strong></div>
    <div class="metric-item"><span>最近题目层级</span><strong>${lastQuizStats.level}</strong></div>
    <div class="metric-item"><span>答题正确率</span><strong>${quizPercent}%</strong></div>
    <div class="metric-item"><span>游戏最高分</span><strong>${displayGameScore}</strong></div>
    <div class="metric-item"><span>活动打卡</span><strong>${taskDone}/${checkTasks.length}</strong></div>
    <div class="metric-item"><span>亲子任务</span><strong>${parentDone}/${parentTasks.length}</strong></div>
  `;

  if (!lastQuizStats.mistakes.length) {
    reportWrongList.innerHTML = '<div class="wrong-item"><strong>暂无错题</strong><p>完成一次知识闯关后，这里会显示需要复习的题目。</p></div>';
    return;
  }

  reportWrongList.innerHTML = lastQuizStats.mistakes.map((item, index) => `
    <div class="wrong-item">
      <strong>${index + 1}. ${item.question}</strong>
      <p>正确答案：${item.correct}</p>
      <p>${item.explain}</p>
    </div>
  `).join("");
  renderTodayTasks();
}

function startMistakePractice() {
  loadQuizReport();
  if (!lastQuizStats.mistakes.length) {
    reportSummary.textContent = "当前没有错题，先完成一组知识闯关后再进行错题再练。";
    return;
  }

  mistakePracticeItems = lastQuizStats.mistakes.map((mistake) => {
    const source = quizItems.find((item) => item.question === mistake.question);
    return source || {
      level: "错题",
      question: mistake.question,
      options: [mistake.correct, mistake.chosen].filter(Boolean),
      answer: 0,
      explain: mistake.explain
    };
  });
  levelTabs.querySelectorAll("button").forEach((item) => item.disabled = true);
  switchView("quiz");
  startQuiz();
}

function clearLearningProgress() {
  if (!window.confirm("确定清空学习记录吗？授权状态会保留，学习进度、打卡、报告、祝福卡草稿会清除。")) return;

  const keepAuth = localStorage.getItem(AUTH_CONFIG.storageKey);
  [
    "duanwu-flow",
    "duanwu-culture",
    "duanwu-game-best",
    "duanwu-tasks",
    "duanwu-parent-tasks",
    "duanwu-quiz-report",
    "duanwu-card"
  ].forEach((key) => localStorage.removeItem(key));
  if (keepAuth) localStorage.setItem(AUTH_CONFIG.storageKey, keepAuth);

  learnedCulture = cultureItems.map(() => false);
  taskState = checkTasks.map(() => false);
  parentTaskState = parentTasks.map(() => false);
  gameBestScore = 0;
  gameScore = 0;
  mistakePracticeItems = null;
  cardName.value = "李同学";
  cardMessage.value = "端午安康，愿你一岁一安，一粽一念。";
  cardTheme.value = "green";
  lastQuizStats = {
    score: 0,
    correct: 0,
    total: 0,
    level: activeLevel,
    mistakes: []
  };

  renderFlow();
  renderCulture();
  renderTasks();
  renderParentTasks();
  updateGameHud();
  startQuiz();
  syncCard();
  renderReport();
  renderTodayTasks();
}

function getCurrentItem() {
  return activeQuizItems()[questionOrder[currentQuestion]];
}

function renderQuestion() {
  const item = getCurrentItem();
  answered = false;
  quizBox.classList.remove("hidden");
  quizResult.classList.add("hidden");
  questionText.textContent = item.question;
  quizProgress.textContent = `${mistakePracticeItems ? "错题再练" : activeLevel} · 第 ${currentQuestion + 1} / ${activeQuizItems().length} 题`;
  quizScore.textContent = `得分 ${score}`;
  explain.textContent = "请选择一个答案，课件会立即给出解析。";
  nextQuestion.textContent = currentQuestion === activeQuizItems().length - 1 ? "查看结果" : "下一题";
  nextQuestion.disabled = true;
  answers.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => chooseAnswer(index));
    answers.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (answered) return;

  answered = true;
  const item = getCurrentItem();
  const buttons = answers.querySelectorAll("button");
  const isCorrect = index === item.answer;

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.answer) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
  });

  if (isCorrect) {
    score += 10;
  } else {
    mistakes.push({
      question: item.question,
      chosen: item.options[index],
      correct: item.options[item.answer],
      explain: item.explain
    });
  }

  quizScore.textContent = `得分 ${score}`;
  explain.textContent = item.explain;
  updateRank();
  nextQuestion.disabled = false;
}

function getRank() {
  if (score >= 70) {
    return {
      title: "端阳通识官",
      text: "你已经掌握了端午文化的关键知识点。"
    };
  }
  if (score >= 40) {
    return {
      title: "龙舟新秀",
      text: "你了解不少端午习俗，继续闯关可以拿到更高称号。"
    };
  }
  return {
    title: "初入端阳",
    text: "先完成更多题目，课件会根据得分更新称号。"
  };
}

function updateRank() {
  const rank = getRank();
  rankTitle.textContent = rank.title;
  rankText.textContent = rank.text;
  scoreBar.style.width = `${Math.min(score, 80) / 80 * 100}%`;
}

function showResult() {
  const rank = getRank();
  const total = activeQuizItems().length;
  const correctCount = total - mistakes.length;
  lastQuizStats = {
    score,
    correct: correctCount,
    total,
    level: activeLevel,
    mistakes: [...mistakes]
  };
  localStorage.setItem("duanwu-quiz-report", JSON.stringify(lastQuizStats));
  mistakePracticeItems = null;
  levelTabs.querySelectorAll("button").forEach((item) => item.disabled = false);
  markTask(1, true);
  renderTodayTasks();
  quizBox.classList.add("hidden");
  quizResult.classList.remove("hidden");
  finalTitle.textContent = rank.title;
  finalScore.textContent = score;
  finalText.textContent = `本轮答对 ${correctCount} 题，答错 ${mistakes.length} 题。${rank.text}`;

  if (mistakes.length === 0) {
    wrongList.innerHTML = '<div class="wrong-item"><strong>没有错题</strong><p>本轮全部答对，可以去生成一张端午祝福卡。</p></div>';
    return;
  }

  wrongList.innerHTML = mistakes.map((item, index) => `
    <div class="wrong-item">
      <strong>${index + 1}. ${item.question}</strong>
      <p>你的答案：${item.chosen}</p>
      <p>正确答案：${item.correct}</p>
      <p>${item.explain}</p>
    </div>
  `).join("");
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  mistakes = [];
  questionOrder = shuffle(activeQuizItems().map((_, index) => index));
  updateRank();
  renderQuestion();
}

nextQuestion.addEventListener("click", () => {
  if (currentQuestion < activeQuizItems().length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }

  showResult();
});

restartQuiz.addEventListener("click", startQuiz);
retryFromResult.addEventListener("click", startQuiz);
levelTabs.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    mistakePracticeItems = null;
    levelTabs.querySelectorAll("button").forEach((item) => item.disabled = false);
    activeLevel = button.dataset.level;
    levelTabs.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    startQuiz();
  });
});

function syncCard() {
  previewName.textContent = cardName.value.trim() || "端午好友";
  previewMessage.textContent = cardMessage.value.trim() || "端午安康，万事顺意。";
  festivalCard.className = `festival-card theme-${cardTheme.value}`;
  try {
    localStorage.setItem("duanwu-card", JSON.stringify({
      name: cardName.value,
      message: cardMessage.value,
      theme: cardTheme.value
    }));
  } catch (error) {
    console.warn("无法保存祝福卡草稿", error);
  }
}

function loadCardDraft() {
  let draft = null;
  try {
    draft = JSON.parse(localStorage.getItem("duanwu-card") || "null");
  } catch (error) {
    console.warn("无法读取祝福卡草稿", error);
  }
  if (!draft) return;
  cardName.value = draft.name || cardName.value;
  cardMessage.value = draft.message || cardMessage.value;
  cardTheme.value = draft.theme || cardTheme.value;
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = [...text];
  let line = "";
  let lineCount = 0;

  chars.forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y + lineCount * lineHeight);
      line = char;
      lineCount += 1;
    } else {
      line = testLine;
    }
  });

  if (line) ctx.fillText(line, x, y + lineCount * lineHeight);
}

function drawZongzi(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(size / 2, 0);
  ctx.lineTo(size, size * 0.88);
  ctx.lineTo(0, size * 0.88);
  ctx.closePath();
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, "#124d3d");
  gradient.addColorStop(1, "#9bd089");
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.7)";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(size * 0.38, size * 0.28);
  ctx.lineTo(size * 0.52, size * 0.78);
  ctx.moveTo(size * 0.62, size * 0.28);
  ctx.lineTo(size * 0.48, size * 0.78);
  ctx.stroke();
  ctx.restore();
}

function downloadCanvas(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function createResultCanvas(title, subtitle) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1080;
  canvas.height = 1440;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#f9f1dc");
  gradient.addColorStop(0.55, "#edf6ef");
  gradient.addColorStop(1, "#d9eef0");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f7a5f";
  roundRect(ctx, 80, 80, 920, 1280, 32);
  ctx.fill();
  ctx.strokeStyle = "#d7a541";
  ctx.lineWidth = 8;
  roundRect(ctx, 104, 104, 872, 1232, 26);
  ctx.stroke();
  ctx.fillStyle = "#fffaf0";
  roundRect(ctx, 110, 110, 860, 1220, 24);
  ctx.fill();

  ctx.fillStyle = "#c94f3d";
  ctx.beginPath();
  ctx.arc(840, 220, 72, 0, Math.PI * 2);
  ctx.fill();
  drawZongzi(ctx, 150, 160, 130);

  ctx.fillStyle = "#18332f";
  ctx.textAlign = "center";
  ctx.font = '800 58px "Microsoft YaHei", sans-serif';
  ctx.fillText(title, 540, 260);
  ctx.fillStyle = "#60716c";
  ctx.font = '500 30px "Microsoft YaHei", sans-serif';
  ctx.fillText(subtitle, 540, 314);
  return { canvas, ctx };
}

function downloadReportImage() {
  renderReport();
  const report = latestReport;
  const { canvas, ctx } = createResultCanvas("端午学习报告", "Dragon Boat Festival Learning Report");

  ctx.fillStyle = "#0f7a5f";
  ctx.textAlign = "center";
  ctx.font = '800 120px "Microsoft YaHei", sans-serif';
  ctx.fillText(String(report.totalScore), 540, 500);
  ctx.font = '700 34px "Microsoft YaHei", sans-serif';
  ctx.fillText("综合分", 540, 552);

  ctx.fillStyle = "#18332f";
  ctx.font = '800 42px "Microsoft YaHei", sans-serif';
  ctx.fillText(report.title, 540, 650);
  ctx.fillStyle = "#60716c";
  ctx.font = '500 30px "Microsoft YaHei", sans-serif';
  drawWrappedText(ctx, report.summary, 540, 710, 760, 48);

  const metrics = [
    ["文化学习", `${report.cultureDone}/${cultureItems.length}`],
    ["答题正确率", `${report.quizPercent}%`],
    ["游戏最高分", `${report.displayGameScore}`],
    ["活动打卡", `${report.taskDone}/${checkTasks.length}`],
    ["亲子任务", `${report.parentDone}/${parentTasks.length}`],
    ["题目层级", lastQuizStats.level]
  ];

  ctx.textAlign = "left";
  metrics.forEach((metric, index) => {
    const x = index % 2 === 0 ? 190 : 570;
    const y = 860 + Math.floor(index / 2) * 118;
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, x - 24, y - 54, 320, 86, 18);
    ctx.fill();
    ctx.fillStyle = "#60716c";
    ctx.font = '500 24px "Microsoft YaHei", sans-serif';
    ctx.fillText(metric[0], x, y - 14);
    ctx.fillStyle = "#0f7a5f";
    ctx.font = '800 34px "Microsoft YaHei", sans-serif';
    ctx.fillText(metric[1], x, y + 24);
  });

  ctx.textAlign = "center";
  ctx.fillStyle = "#60716c";
  ctx.font = '500 26px "Microsoft YaHei", sans-serif';
  ctx.fillText("教师/家长建议：结合本地端午习俗，完成一次口头分享。", 540, 1196);
  ctx.fillText("数据仅保存在当前浏览器本地，适合课堂展示与亲子共学记录。", 540, 1246);
  downloadCanvas(canvas, "端午学习报告.png");
}

function downloadLearningCertificate() {
  renderReport();
  const report = latestReport;
  const certificateTitle = report.totalScore >= 85 ? "端午文化小达人" : report.totalScore >= 60 ? "端午学习实践证书" : "端午探索纪念证书";
  const { canvas, ctx } = createResultCanvas("端午学习证书", "Certificate of Dragon Boat Festival Learning");

  ctx.strokeStyle = "#d7a541";
  ctx.lineWidth = 10;
  roundRect(ctx, 170, 390, 740, 620, 26);
  ctx.stroke();
  ctx.strokeStyle = "rgba(215, 165, 65, 0.42)";
  ctx.lineWidth = 3;
  roundRect(ctx, 195, 415, 690, 570, 20);
  ctx.stroke();

  ctx.fillStyle = "#c94f3d";
  ctx.textAlign = "center";
  ctx.font = '800 64px "Microsoft YaHei", sans-serif';
  ctx.fillText(certificateTitle, 540, 520);

  ctx.fillStyle = "#18332f";
  ctx.font = '800 72px "Microsoft YaHei", sans-serif';
  ctx.fillText(cardName.value.trim() || "端午学习者", 540, 650);

  ctx.fillStyle = "#60716c";
  ctx.font = '500 32px "Microsoft YaHei", sans-serif';
  drawWrappedText(ctx, `完成端午文化学习、互动体验和知识检测，综合得分 ${report.totalScore} 分。`, 540, 740, 680, 52);

  ctx.fillStyle = "#0f7a5f";
  ctx.font = '800 40px "Microsoft YaHei", sans-serif';
  ctx.fillText(report.title, 540, 900);
  ctx.fillStyle = "rgba(201, 79, 61, 0.16)";
  ctx.beginPath();
  ctx.arc(792, 898, 78, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#c94f3d";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(792, 898, 68, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#c94f3d";
  ctx.font = '800 28px "Microsoft YaHei", sans-serif';
  ctx.fillText("端午", 792, 890);
  ctx.fillText("小达人", 792, 928);
  drawZongzi(ctx, 455, 1040, 170);

  ctx.strokeStyle = "#60716c";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(188, 1130);
  ctx.lineTo(392, 1130);
  ctx.moveTo(688, 1130);
  ctx.lineTo(892, 1130);
  ctx.stroke();
  ctx.fillStyle = "#60716c";
  ctx.font = '500 24px "Microsoft YaHei", sans-serif';
  ctx.fillText("教师/家长签名", 290, 1170);
  ctx.fillText("完成日期", 790, 1170);

  ctx.fillStyle = "#60716c";
  ctx.font = '500 26px "Microsoft YaHei", sans-serif';
  ctx.fillText("五月初五 · 粽叶飘香 · 文化传承", 540, 1240);
  downloadCanvas(canvas, "端午学习证书.png");
}

function downloadGreetingCard() {
  markTask(4, true);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1080;
  canvas.height = 1440;

  const palettes = {
    green: ["#0f7a5f", "#46a77d"],
    red: ["#a73c32", "#d7a541"],
    blue: ["#1f6f96", "#2fa7a0"]
  };
  const [start, end] = palettes[cardTheme.value] || palettes.green;
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, start);
  gradient.addColorStop(1, end);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.16)";
  ctx.beginPath();
  ctx.ellipse(540, 1310, 720, 260, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(868, 186, 90, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,241,168,0.9)";
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.22)";
  roundRect(ctx, 90, 90, 220, 70, 18);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = '700 34px "Microsoft YaHei", sans-serif';
  ctx.fillText("端午安康", 124, 136);

  drawZongzi(ctx, 390, 330, 300);
  ctx.strokeStyle = "#fff1a8";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(300, 490);
  ctx.lineTo(780, 610);
  ctx.moveTo(790, 490);
  ctx.lineTo(300, 610);
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.font = '800 92px "Microsoft YaHei", sans-serif';
  ctx.fillText(previewName.textContent, 540, 820);
  ctx.font = '500 52px "Microsoft YaHei", sans-serif';
  drawWrappedText(ctx, previewMessage.textContent, 540, 930, 780, 76);
  ctx.font = '700 34px "Microsoft YaHei", sans-serif';
  ctx.globalAlpha = 0.82;
  ctx.fillText("五月初五 · 粽叶飘香", 540, 1230);
  ctx.globalAlpha = 1;

  const link = document.createElement("a");
  link.download = "端午祝福卡.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

[cardName, cardMessage, cardTheme].forEach((input) => {
  input.addEventListener("input", syncCard);
});

downloadCard.addEventListener("click", downloadGreetingCard);
downloadReport.addEventListener("click", downloadReportImage);
downloadCertificate.addEventListener("click", downloadLearningCertificate);
startGameButton.addEventListener("click", startGame);
moveUpButton.addEventListener("click", () => moveBoat(-1));
moveDownButton.addEventListener("click", () => moveBoat(1));
submitRecipe.addEventListener("click", submitRecipeAnswer);
nextRecipe.addEventListener("click", pickRecipe);
resetTasks.addEventListener("click", () => {
  taskState = checkTasks.map(() => false);
  saveTaskState();
  renderTasks();
  renderReport();
});
refreshReport.addEventListener("click", renderReport);
retryMistakes.addEventListener("click", startMistakePractice);
clearLearningData.addEventListener("click", clearLearningProgress);
prevSlide.addEventListener("click", () => {
  classroomIndex = Math.max(0, classroomIndex - 1);
  renderClassroomSlide();
});
nextSlide.addEventListener("click", () => {
  classroomIndex = Math.min(flowSteps.length - 1, classroomIndex + 1);
  renderClassroomSlide();
});
resetSlide.addEventListener("click", () => {
  classroomIndex = 0;
  renderClassroomSlide();
});
raceStage.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
    event.preventDefault();
    moveBoat(-1);
  }
  if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
    event.preventDefault();
    moveBoat(1);
  }
});
window.addEventListener("resize", updateBoatLane);

initAuthGate();
renderFlow();
renderClassroomSlide();
loadCultureProgress();
renderCulture();
loadCardDraft();
loadTaskState();
loadParentTaskState();
renderTasks();
renderParentTasks();
pickRecipe();
startQuiz();
syncCard();
updateBoatLane();
updateGameHud();
renderReport();
renderTodayTasks();
