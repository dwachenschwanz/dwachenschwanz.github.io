// SCORING GRID CONSTANTS:
const columnWidth = 250;
const rowHeight = 250;
const fontSize = 100;

// BMC CONSTANTS:
const bmcWidth = 3828;
const bmcHeight = 2190;
const bmcFrameStartX = -6504;
const bmcFrameStartY = -7;
const bmcFrameEndX = bmcFrameStartX + bmcWidth;
const bmcFrameEndY = bmcFrameStartY + bmcHeight;

// COPIED ISSUES SPACE:
const copiedIssuesStartX = -2226;
const copiedIssuesEndX = -833;

const shapeStyle = {
  shapeType: 3,
  backgroundColor: "#87bfdd",
  backgroundOpacity: 0.4,
  borderColor: "transparent",
  borderWidth: 2,
  borderOpacity: 1,
  borderStyle: 2,
  fontFamily: 27,
  textColor: "#1a1a1a",
  textAlign: "l",
  textAlignVertical: "t",
  fontSize: 37,
  bold: 0,
  italic: 0,
  underline: 0,
  strike: 0,
  highlighting: "",
};

const bmcColumnSpacing = 750;
// const bmcStartX = -(bmcColumnSpacing/2+bmcColumnSpacing*8);

const bmcColumnWidth = 700;
const bmcDoubleRowHeight = 1500;



const bmcStartX = -6264;
const bmcStartY = 954;
const bmcWidth1 = 697;
const bmcWidth2 = 1810;
const bmcHeight1 = 722;
const bmcHeight2 = 1810;
const bmcHeight3 = 340;
const bmcSpacing = 45;


const bmcX = [
  bmcStartX,
  bmcStartX + bmcWidth1 + bmcSpacing,
  bmcStartX + bmcWidth1 + bmcSpacing,
  bmcStartX + 2 * bmcWidth1 + 2 * bmcSpacing,
  bmcStartX + 3 * bmcWidth1 + 3 * bmcSpacing,
  bmcStartX + 3 * bmcWidth1 + 3 * bmcSpacing,
  bmcStartX + 4 * bmcWidth1 + 4 * bmcSpacing,
  bmcStartX,
  bmcStartX + bmcWidth2 + bmcSpacing
];

const bmcY = [
  bmcStartY,
  bmcStartY,
  bmcStartY + bmcHeight2 + bmcSpacing,
  bmcStartY,
  bmcStartY - bmcHeight1/2 - bmcSpacing/2,
  bmcStartY + bmcHeight2 + bmcSpacing,
  bmcStartY,
  bmcStartY + bmcHeight2 + bmcSpacing,
  bmcStartY + bmcHeight2 + bmcSpacing
];

const bmcWidth = [
  bmcWidth1,
  bmcWidth1,
  bmcWidth1,
  bmcWidth1,
  bmcWidth1,
  bmcWidth1,
  bmcWidth1,
  bmcWidth2,
  bmcWidth2
];

const bmcHeight = [
  bmcHeight2,
  bmcHeight1,
  bmcHeight1,
  bmcHeight2,
  bmcHeight1,
  bmcHeight1,
  bmcHeight2,
  bmcHeight3,
  bmcHeight3
];


const bmcText = [
  "<p><strong>Key partners</strong></p><p>What are your key partners to get competitive advantage?</p>",
  "<p><strong>Key activities</strong></p><p>What are the key steps to move ahead to your customers?</p>",
  "<p><strong>Key resources</strong></p><p>What resources do you need to make your idea work?</p>",
  "<p><strong>Key propositions</strong></p><p>How will you make your customers&#39; life happier?</p>",
  "<p><strong>Customer relationships</strong></p><p>How often will you interact with your customers?</p>",
  "<p><strong>Channels</strong></p><p>How are you going to reach your customers?</p>",
  "<p><strong>Customer segments</strong></p><p>Who are your customers? Describe your target audience in a couple of words.</p>",
  "<p><strong>Cost Structure</strong></p><p>How much are you planning to spend </p><p>on the product development and </p><p>marketing for a certain period?</p>",
  "<p><strong>Revenue Streams</strong></p><p>How much are you planning </p><p>to earn in a certain period? </p><p>Compare your costs and revenues.</p>"
];

const bmcPlainText = [
  "Key partners What are your key partners to get competitive advantage?",
  "Key activities What are the key steps to move ahead to your customers?",
  "<p><strong>Key resources</strong></p><p>What resources do you need to make your idea work?</p>",
  "Key propositions How will you make your customers&#39; life happier?",
  "Customer relationships How often will you interact with your customers?",
  "Channels How are you going to reach your customers?",
  "Customer segments Who are your customers? Describe your target audience in a couple of words.",
  "Cost Structure How much are you planning to spend on the product development and marketing for a certain period?",
  "Revenue Streams How much are you planning to earn in a certain period? Compare your costs and revenues."
];

function makeNewBMC() {
  const widgets = [];
  for ( let i = 0; i < 9; ++i){
    widgets.push(
        {
          type:"SHAPE",
          style: shapeStyle,
          x: bmcX[i],
          y: bmcY[i],
          width: bmcWidth[i],
          height: bmcHeight[i],
          text: bmcText[i],
          plainText: bmcPlainText[i]

        }
    );
    miro.board.widgets.create(widgets);
  }

}


function makeBMC() {
  miro.board.widgets.create([
    /*
    {
        "type": "FRAME",
        "bounds": {
            "x": -4781.387461938883,
            "y": 1072.929022366622,
            "top": -22.070977633378106,
            "left": -6695.387461938883,
            "bottom": 2167.929022366622,
            "right": -2867.3874619388826,
            "width": 3828,
            "height": 2190
        },
        "style": {
            "backgroundColor": "#ffffff"
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        
        "x": -4781.387461938883,
        "y": 1072.929022366622,
        "width": 3828,
        "height": 2190,
        "title": "",
        "frameIndex": 0,
    },
    */
   // #9 - Revenue Streams
    {
      type: "SHAPE",
      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,

      x: -3853.3852554974524,
      y: 1908.7220881335218,
      width: 1809.35153887163,
      height: 340.244804360296,
      text: "<p><strong>Revenue Streams</strong></p><p>How much are you planning </p><p>to earn in a certain period? </p><p>Compare your costs and revenues.</p>",
      plainText:
        "Revenue Streams How much are you planning  to earn in a certain period?  Compare your costs and revenues.",
    },

    // #7- Customer Segments
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,

      x: -3297.029883969962,
      y: 953.6560167632808,
      width: 696.634431279335,
      height: 1486.04379241766,
      text: "<p><strong>Customer segments</strong></p><p>Who are your customers? Describe your target audience in a couple of words.</p>",
      plainText:
        "Customer segments Who are your customers? Describe your target audience in a couple of words.",
    },

    // #6 - Channels
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },

      x: -4041.2087117194824,
      y: 1335.6474081130318,
      width: 696.634431279335,
      height: 722.061009718214,
      text: "<p><strong>Channels</strong></p><p>How are you going to reach your customers?</p>",
      plainText: "Channels How are you going to reach your customers?",
    },

    // #5 - Channel Relationships
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,
      x: -4041.2087117194824,
      y: 571.6646254135576,
      width: 696.634431279335,
      height: 722.061009718214,
      rotation: 0,
      text: "<p><strong>Customer relationships</strong></p><p>How often will you interact with your customers?</p>",
      plainText:
        "Customer relationships How often will you interact with your customers?",
    },
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#ffffff",
        backgroundOpacity: 1,
        borderColor: "transparent",
        borderWidth: 24,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
        textColor: "#ffffff",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 50,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,

      x: -4781.836469334772,
      y: 1068.9953430335418,
      width: 3728.72123191848,
      height: 2081.64518335326,

      text: "",
      plainText: "",
    },

    // #4 - Key Propositions
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,
      x: -4784.926396951343,
      y: 953.6560167632808,
      width: 696.634431279335,
      height: 1486.04379241767,
      text: "<p><strong>Key propositions</strong></p><p>How will you make your customers&#39; life happier?</p>",
      plainText:
        "Key propositions How will you make your customers' life happier?",
    },
    {
      type: "TEXT",

      style: {
        backgroundColor: "transparent",
        backgroundOpacity: 1,
        textAlign: "l",
        textColor: "#1a1a1a",
        fontFamily: 27,
        bold: 1,
        underline: 0,
        italic: 0,
        strike: 0,
        borderColor: "transparent",
        borderOpacity: 1,
        borderWidth: 2,
        borderStyle: 2,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,

      x: -4797.454107732912,
      y: 119.40343595568584,
      width: 709.26,
      scale: 5.21318197707248,
      text: "<p><strong>The Business Model Canvas</strong></p>",
      plainText: "The Business Model Canvas",
    },

    // #3 - Key Resources
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,
      x: -5525.859750669742,
      y: 1335.6474081130318,
      width: 696.634431279335,
      height: 722.061009718216,
      text: "<p><strong>Key resources</strong></p><p>What resources do you need to make your idea work?</p>",
      plainText:
        "Key resources What resources do you need to make your idea work?",
    },
    // #8 - Cost Structure
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,

      x: -5708.608421601102,
      y: 1908.7220881335218,
      width: 1808.25066510478,
      height: 340.24480436029,
      text: "<p><strong>Cost Structure</strong></p><p>How much are you planning to spend </p><p>on the product development and </p><p>marketing for a certain period?</p>",
      plainText:
        "Cost Structure How much are you planning to spend  on the product development and  marketing for a certain period?",
    },

    // #2 - Key Activities
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,

      x: -5525.859750669682,
      y: 571.664625413544,
      width: 696.634431279335,
      height: 722.061009718216,
      text: "<p><strong>Key activities</strong></p><p>What are the key steps to move ahead to your customers?</p>",
      plainText:
        "Key activities What are the key steps to move ahead to your customers?",
    },
    {
      type: "TEXT",

      style: {
        backgroundColor: "transparent",
        backgroundOpacity: 1,
        textAlign: "l",
        textColor: "#1a1a1a",
        fontFamily: 10,
        padding: 0,
        bold: 0,
        underline: 0,
        italic: 0,
        strike: 0,
        borderColor: "transparent",
        borderOpacity: 1,
        borderWidth: 0,
        borderStyle: 2,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,

      x: -6075.7478498035725,
      y: 2127.229897734692,
      width: 404,
      scale: 2.57142857142857,
      text: "<p>Released under Common Creative License by strategyzer.com</p>",
      plainText: "Released under Common Creative License by strategyzer.com",
    },

    // #1 Key Partners
    {
      type: "SHAPE",

      style: {
        shapeType: 3,
        backgroundColor: "#87bfdd",
        backgroundOpacity: 0.4,
        borderColor: "transparent",
        borderWidth: 2,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 27,
        textColor: "#1a1a1a",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 37,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      metadata: {},
      capabilities: {
        editable: true,
      },
      clientVisible: true,

      x: -6264.416538513833,
      y: 953.6560167632808,
      width: 696.6344312793,
      height: 1486.04379241767,
      text: "<p><strong>Key partners</strong></p><p>What are your key partners to get competitive advantage?</p>",
      plainText:
        "Key partners What are your key partners to get competitive advantage?",
    },
  ]);
}

// frame maker for issue scanning
function makeIssueScanningFrame() {
  miro.board.widgets.create([
    {
      type: "SHAPE",
      style: {
        shapeType: 3,
        backgroundColor: "#ffffff",
        backgroundOpacity: 1,
        borderColor: "transparent",
        borderWidth: 24,
        borderOpacity: 1,
        borderStyle: 2,
        fontFamily: 10,
        textColor: "#ffffff",
        textAlign: "l",
        textAlignVertical: "t",
        fontSize: 50,
        bold: 0,
        italic: 0,
        underline: 0,
        strike: 0,
        highlighting: "",
      },
      x: -4781.387461938883,
      y: 1068.9953430335418,
      width: 3728.72123191848,
      height: 2081.64518335326
    },

    {
      type: "TEXT",
      x: "-4797",
      y: "-120",
      width: 710,
      scale: 5.213,
      text: "<p><strong>The Business Model Canvas</strong></p>",
      plainText: "The Business Model Canvas",
    },

    {
      type: "frame",
      x: -4781.387461938883,
      y: 1072.929022366622,
      width: bmcWidth,
      height: bmcHeight,
      // title: "Business Model Canvas",
      capabilities: {
        editable: false,
      },
      style: {
        backgroundColor: "#ffffff",
      },
    },
  ]);
}

// GRID MAKER:
function makeGrid() {
  const widgets = [];
  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    const rowY = rowIdx * rowHeight;

    for (let colIdx = 0; colIdx < 9; colIdx++) {
      const colX = colIdx * columnWidth;

      widgets.push(getShape(colX, rowY));
    }
  }
  miro.board.widgets.create(widgets);
}

function getShape(x, y) {
  return {
    type: "shape",
    x: x,
    y: y,
    width: columnWidth,
    height: rowHeight,
    style: {
      borderWidth: 1,
    },
  };
}

// STICKY COORDINATES:
function getCoordinates(chartType) {
  miro.board.widgets.get({ type: "STICKER" }).then((stickers) => {
    let stickerCells = stickers.map((s) => {
      const x = getCoord(s.bounds.left, s.bounds.right);
      const y = getCoord(s.bounds.top, s.bounds.bottom);
      const impact = Math.ceil((x + columnWidth / 2) / columnWidth);
      const ignorance = Math.ceil((2250 - rowHeight / 2 - y) / rowHeight);
      return {
        label: s.plainText,
        impact,
        ignorance,
        score: impact * ignorance,
        inGrid: impact > 0 && impact <= 9 && ignorance > 0 && ignorance <= 9,
      };
    });
    // stickerCells.unshift('Label,Impact,Ignorance,Score\n');
    // let csv = stickerCells.join('\n');
    // saveAs(csv, "iNav_" + new Date().toString() + ".csv");

    if (chartType == "Simple") {
      drawSimpleReadinessChart(stickerCells);
    } else if (chartType == "Complex") {
      drawComplexReadinessChart(stickerCells);
    }
    sendStickerDetailsToPNAV();
    // drawComplexReadinessChartF2(stickerCells)
  });
}

function createStickers(stickers) {
  miro.board.widgets.create(stickers);
}

function copyIssues() {
  console.log("In copy issues");
  miro.board.widgets.get({ type: "STICKER" }).then((stickers) => {
    let issuesInBMC = [];
    let issuesInGrid = [];
    let issuesAlreadyCopied = [];
    let issuesToBeCopied = [];
    let initY = 300;

    stickers.forEach((s) => {
      const x = getCoord(s.bounds.left, s.bounds.right);
      const y = getCoord(s.bounds.top, s.bounds.bottom);
      const impact = Math.ceil((x + columnWidth / 2) / columnWidth);
      const ignorance = Math.ceil((2250 - rowHeight / 2 - y) / rowHeight);

      if (
        bmcFrameStartX < x &&
        x < bmcFrameEndX &&
        bmcFrameStartY < y &&
        y < bmcFrameEndY
      ) {
        issuesInBMC.push(s);
      } else if (ignorance > 0 && impact > 0 && ignorance < 10 && impact < 10) {
        issuesInGrid.push(s);
      } else if (copiedIssuesStartX < x && x < copiedIssuesEndX) {
        issuesAlreadyCopied.push(s);
      }
    });

    console.log("before");
    console.log(issuesInBMC);

    issuesInBMC = issuesInBMC.filter(
      (issue, index, self) =>
        index === self.findIndex((t) => t.plainText === issue.plainText)
    );
    console.log("after");
    console.log(issuesInBMC);

    issuesInBMC.forEach((issue) => {
      let isIssueInGrid = false;
      let isIssueAlreadyCopied = false;
      let issueName = issue.plainText;
      issuesInGrid.forEach((i) => {
        if (i.plainText == issueName) {
          isIssueInGrid = true;
        }
      });
      issuesAlreadyCopied.forEach((i) => {
        if (i.plainText == issueName) {
          isIssueAlreadyCopied = true;
        }
      });
      if (!isIssueInGrid && !isIssueAlreadyCopied) {
        issuesToBeCopied.push({
          type: "sticker",
          text: issueName,
          x: -2129,
          y: initY,
          style: issue.style,
        });
        initY += 100;
      }
    });

    createStickers(issuesToBeCopied);
  });
}

function saveAs(text, filename) {
  var pom = document.createElement("a");
  pom.setAttribute(
    "href",
    "data:text/plain;charset=urf-8," + encodeURIComponent(text)
  );
  pom.setAttribute("download", filename);
  pom.click();
}

function getCoord(lo, hi) {
  return lo + (hi - lo) / 2;
}

// SIMPLE GRAPHS:
function drawSimpleReadinessChart(data) {
  const sortedData = data.sort((a, b) => b.score - a.score);

  let currX = 2700;
  let currY = -125;
  let widgets = [];
  const unitSize = 5;

  for (let d of sortedData) {
    if (!d.inGrid) continue;
    const height = d.score * unitSize;
    currY += height / 2;
    widgets.push(generateColorRect(currX, currY, getColor(d.score), height));
    currY += height / 2;
  }

  // console.log(widgets);
  miro.board.widgets.create(widgets);
}

function generateColorRect(x, y, color, height, text = "") {
  return {
    type: "shape",
    x: x,
    y: y,
    width: 500,
    height: height,
    text: text,
    style: {
      borderWidth: 0,
      backgroundColor: color,
      fontSize: 50,
    },
  };
}

// COMPLEX GRAPH
function drawComplexReadinessChart(data) {
  // create new complex rediness
  const sortedData = data.sort((a, b) => b.score - a.score);

  let currX = 2700;
  let currY = -125;
  let widgets = [];
  const unitSize = 5;

  for (let d of sortedData) {
    if (!d.inGrid) continue;
    const height = d.score * unitSize;
    currY += height / 2;
    widgets.push(
      generateColorRectComplex(currX, currY, getColor(d.score), height, d.label)
    );
    currY += height / 2;
  }

  // clear former complex rediness chart
  miro.board.widgets.get({ type: "SHAPE", x: 2700, width: 500 }).then((res) => {
    res.forEach((r) => miro.board.widgets.deleteById(r.id));
    miro.board.widgets.create(widgets);
  });
  // miro.board.widgets.get({type: "SHAPE", x: 2700, width: 500}).then((rediness) => {
  //   for (let r in rediness) {
  //     console.log(r.id);
  //     miro.board.widgets.deleteById(r.id);
  //   }
  //   // create new complex rediness chart
  //   // console.log(widgets);
  //   miro.board.widgets.create(widgets);
  // });
  // miro.board.widgets.create(widgets);
}

function getColor(score) {
  return score >= 56
    ? "#ff311f"
    : score >= 30
    ? "#e2eb34"
    : score >= 12
    ? "#3042e3"
    : "#34eb56";
}

function generateColorRectComplex(x, y, color, height, text = "") {
  return {
    type: "shape",
    x: x,
    y: y,
    width: 500,
    height: height,
    text: text,
    style: {
      borderWidth: 1,
      backgroundColor: color,
      fontSize: 50,
    },
    capabilities: {
      editable: false,
    },
  };
}

// #ISSUES IN EACH CATEGORY

// function drawSimpleReadinessChart(data) {
//   let scoreRanges = [{count: 0, color: '#eb5b34'}, {count: 0, color: '#e2eb34'}, {count: 0, color: '#3042e3'}, {count: 0, color: '#34eb56'}];
//   for (let d of data) {
//     if (!d.inGrid)
//       continue;
//     if (d.score >= 56) {
//       scoreRanges[0].count++;
//     } else if (d.score >= 30) {
//       scoreRanges[1].count++;
//     } else if (d.score >= 12) {
//       scoreRanges[2].count++;
//     } else {
//       scoreRanges[3].count++;
//     }
//   }
//   console.log(scoreRanges);
//   let currX = 8000;
//   let currY = -125;
//   let widgets = [];
//   const unitSize = 240;
//   for (let sr of scoreRanges) {
//     console.log(sr);
//     const height = sr.count * unitSize;
//     currY += height / 2;
//     widgets.push(generateColorRectComplex(currX, currY, sr.color, height));
//     currY += height / 2;
//   }
//   // console.log(widgets);
//   miro.board.widgets.create(widgets);
// }

// function generateColorRectComplexF2(x, y, color, height, text='') {
//   return {
//     type: 'shape',
//     x: x,
//     y: y,
//     width: 500,
//     height: height,
//     text: text,
//     style: {
//       borderWidth: 1,
//       backgroundColor: color,
//       fontSize: 50
//     }
//   }
// }

// Feature 2:🤙🏻
// EFFICIENT FRONTIER OF EXPERIMENTS:

function drawComplexReadinessChartF2(data) {
  const sortedData = data.sort((a, b) => b.score - a.score);

  let currX = 8000;
  let currY = -125;
  let widgets = [];
  const unitSize = 150;

  for (let d of sortedData) {
    if (!d.inGrid) continue;
    const height = unitSize;
    currY += height / 2;
    widgets.push(
      generateColorRectComplex(currX, currY, getColor(d.score), height, d.label)
    );
    currY += height / 2;
  }

  // console.log(widgets);
  miro.board.widgets.create(widgets).then((res) => {
    console.log(res);
    currComplexRedinessF2 = res.map((e) => e.id);
  });
}

async function chooseExperiment() {
  let selectedIssue = await getSelectedIssue();
  if (selectedIssue) {
    miro.board.ui.openModal("choose-experiment.html");
  } else {
    alert("Select an issue before clicking 'Choose Experiment' button!");
  }
}

//var expName = new Array()
//expName[0] = ""
//expName[1] = "Experiment Name: Discovery"
//expName[2] = "Experiment Name: Validate"

//var description = new Array()
//description[0] = ""
//description[1] = "Some description for Discovery..."
//description[2] = "Some description for Validate..."

function getDesc(selection) {
  //let txtSelected = selection.selectedIndex;
  let expName =
    "Experiment Name: " + selection.options[selection.selectedIndex].text;
  let description =
    "Some description for " +
    selection.options[selection.selectedIndex].text +
    "...";
  document.getElementById("expname").innerHTML = expName;
  document.getElementById("description").innerHTML = description;
}

function getExpTypeOptions(selection) {
  //let txtSelected = selection.selectedIndex;
  document.getElementById("expname").innerHTML = "";
  document.getElementById("description").innerHTML = "";
  let options = [];
  if (selection.options[selection.selectedIndex].text == "Discovery") {
    options = ["Social Media Campaign", "3D Prototyping"];
  } else if (selection.options[selection.selectedIndex].text == "Validate") {
    options = ["A", "B", "C"];
  } else {
    options = [];
  }
  let select = document.getElementById("exptype");

  for (let i = select.options.length - 1; i >= 0; i--) {
    if (i != 0) {
      select.options[i] = null;
    }
  }
  for (let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}

async function getSelectedIssue() {
  let selectedIssue = await miro.board.selection.get({ type: "TEXT" });
  return selectedIssue.length == 1 ? selectedIssue[0].plainText : null;
}

async function getIGIM() {
  let selectedIssue = await getSelectedIssue();
  let igim = await miro.board.widgets
    .get({ type: "STICKER" })
    .then((stickers) => {
      let stickerCells = stickers.map((s) => {
        const x = getCoord(s.bounds.left, s.bounds.right);
        const y = getCoord(s.bounds.top, s.bounds.bottom);
        const impact = Math.ceil((x + columnWidth / 2) / columnWidth);
        const ignorance = Math.ceil((2250 - rowHeight / 2 - y) / rowHeight);
        return {
          label: s.plainText,
          impact,
          ignorance,
          score: impact * ignorance,
          inGrid: impact > 0 && impact <= 9 && ignorance > 0 && ignorance <= 9,
        };
      });

      let igimData = {};
      stickerCells.forEach((s) => {
        if (s.label == selectedIssue) {
          igimData["prev_ig"] = s.ignorance;
          igimData["prev_im"] = s.impact;
        }
      });
      return igimData;
    });
  return igim;
}

async function sendStickerDetailsToPNAV2() {
  let selectedIssue = await getSelectedIssue();
  let sendToPnav = await miro.board.widgets
    .get({ type: "STICKER" })
    .then((stickers) => {
      let stickerCells = stickers.map((s) => {
        const x = getCoord(s.bounds.left, s.bounds.right);
        const y = getCoord(s.bounds.top, s.bounds.bottom);
        const impact = Math.ceil((x + columnWidth / 2) / columnWidth);
        const ignorance = Math.ceil((2250 - rowHeight / 2 - y) / rowHeight);
        return {
          label: s.plainText,
          impact,
          ignorance,
          score: impact * ignorance,
          inGrid: impact > 0 && impact <= 9 && ignorance > 0 && ignorance <= 9,
        };
      });

      let data = {};
      stickerCells.forEach((s) => {
        data["issue_name"] = s.label;
        data["prev_ig"] = s.ignorance;
        data["prev_im"] = s.impact;
      });
      return data;
    });
  return sendToPnav;
}

async function getIGIMData() {
  // console.log('IN getIGIMData fn')

  miro.board.ui.openModal("igim-change.html");

  let igim = await getIGIM();

  // console.log('PREV IM');
  // console.log(JSON.stringify(document.getElementById("cost")));
}

async function getResult() {
  console.log("------RESULTS------");
  let selectedIssue = await getSelectedIssue();
  console.log("Selected Issue : " + selectedIssue);

  console.log("------------");
  let igim = await getIGIM();
  console.log("Previous Impact : " + igim["prev_im"]);
  console.log("Previous Ignorance : " + igim["prev_ig"]);

  console.log("------------");
  let new_im_element = document.getElementById("new_im");
  let new_im = new_im_element.options[new_im_element.selectedIndex].text;
  console.log("New Impact : " + new_im);
  let new_ig_element = document.getElementById("new_ig");
  let new_ig = new_im_element.options[new_ig_element.selectedIndex].text;
  console.log("New Ignorance : " + new_ig);

  console.log("------------");
  let cost = document.getElementById("cost").value;
  console.log("Cost : " + cost);
  let duration = document.getElementById("duration").value;
  console.log("Duration : " + duration);

  //saveAs('rows', '123');
  //console.log("download done!")
  //googleUpload();
  SubForm();
}

function SubForm() {
  console.log("in subform");
  console.log(JSON.stringify($("#myForm").serializeArray()));
  console.log("serialized");
  $.ajax({
    url: "https://api.apispreadsheets.com/data/14277/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}

// https://api.apispreadsheets.com/data/14277/

// function googleUpload() {
//   var fileContent = 'sample text'; // As a sample, upload a text file.
//   var file = new Blob([fileContent], {type: 'text/plain'});
//   var metadata = {
//       'name': 'sampleName', // Filename at Google Drive
//       'mimeType': 'text/plain', // mimeType at Google Drive
//       'parents': ['1rmV5d9UqD9R2wLZCPfG56Y9Jyh83wf2L'], // Folder ID at Google Drive
//   };

//   var accessToken = gapi.auth.getToken().access_token; // Here gapi is used for retrieving the access token.
//   var form = new FormData();
//   form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
//   form.append('file', file);

//   var xhr = new XMLHttpRequest();
//   xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id');
//   xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
//   xhr.responseType = 'json';
//   xhr.onload = () => {
//       console.log(xhr.response.id); // Retrieve uploaded file ID.
//   };
//   xhr.send(form);
// }

// import Tabletop from 'tabletop'
// function graphs(){
//   const ROW_HEIGHT = 30
//   const ROW_MARGIN = 10
//   const SPREADSHEET_URL = //https://docs.google.com/spreadsheets/d/1QOe4Bt1TLzhAoCvz8NZutmk9t7Ubwt4OvSlSNnYeSUI/edit?usp=sharing
//     'https://docs.google.com/spreadsheets/d/121-56BwZe8Cws0A8xE_cSGXc64YD_bBPfQM8o2YVnaM/edit?usp=sharing'

//   miro.onReady(function () {
//     miro.initialize({
//       extensionPoints: {
//         bottomBar: {
//           title: 'Import data from spreadsheet',
//           svgIcon:
//             '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-import" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"></path></svg>',
//           onClick: syncWithSheet,
//         },
//       },
//     })
//   })

//   async function syncWithSheet() {
//     const appId = await miro.getClientId()
//     const items = await Tabletop.init({
//       key: SPREADSHEET_URL,
//       simpleSheet: true,
//     })
//     const viewport = await miro.board.viewport.get()
//     const maxWidth = Math.max(...items.map((item) => item.rate)) * 2

//     items.forEach(async ({role, rate}, i) => {
//       rate = parseFloat(rate)

//       const shapes = (
//         await miro.board.widgets.get({
//           type: 'shape',
//         })
//       ).filter((shape) => !!shape.metadata[appId])
//       const shape = shapes.find((shape) => shape.metadata[appId].role === role)
//       const width = rate * 2

//       if (shape) {
//         const x = shape.x - (shape.width - width) / 2
//         miro.board.widgets.update([{id: shape.id, text: `${rate}%`, width, x}])
//       } else {
//         const x = viewport.x + viewport.width / 2 - (maxWidth - width) / 2
//         const y = viewport.y + ROW_HEIGHT / 2 + (ROW_HEIGHT + ROW_MARGIN) * i
//         miro.board.widgets.create({
//           type: 'shape',
//           text: `${rate}%`,
//           width,
//           height: ROW_HEIGHT,
//           x,
//           y,
//           style: {
//             borderWidth: 0,
//             backgroundColor: '#4262ff',
//             fontSize: 8,
//             textAlign: 'c',
//             textAlignVertical: 'm',
//             textColor: '#ffffff',
//           },
//           metadata: {
//             [appId]: {
//               role,
//             },
//           },
//         })
//         miro.board.widgets.create({
//           type: 'text',
//           x: viewport.x + viewport.width / 2 - maxWidth - 110,
//           y,
//           width: 400,
//           style: {
//             textAlign: 'r',
//             fontSize: 12,
//           },
//           text: role,
//           metadata: {
//             [appId]: {
//               role,
//             },
//           },
//         })
//       }
//     })
//   }
// }

// //respond to events
// window.addEventListener('message',function(event) {
// 	// if(event.origin !== 'https://localhost') return;
// 	console.log('message received from:  ' + event.target.origin, event.data);
//   console.log(event);
//   // console.log(event.source);
//   var domain = 'https://ying.smartorg.com/workbench/#!/workbench#%2Flogin';
//   var myPopup = window.open(domain + '/windowPostMessageListener.html','myWindow');

//   var message = 'Hello!  The time is: ' + (new Date().getTime());
//   console.log('blog.local:  sending message:  ' + message);
//   myPopup.postMessage(message,domain); //send the message and target URI
// 	// event.source.postMessage('holla back youngin!', 'https://ying.smartorg.com/workbench/#!/workbench#%2Flogin');
// 	// event.srcElement.postMessage('holla back youngin!', 'https://ying.smartorg.com/workbench/#!/workbench#%2Flogin');
// },false);

// send selected issue data to PNav
// async function sendSelectedIssueToPNav() {
//   let selections = await miro.board.selection.get();

//   if (selections && selections.length) {
//     console.log('selectedIssue: ', selections[0]);
//     // var domain = 'https://ying.smartorg.com/workbench/#!/workbench#%2Flogin';
//     var domain = 'http://localhost:63342/Chomolongma/dist/index.html?_ijt=snuq6qqd9j541j2c4m7dcllrca#!/workbench#%2Flogin';
//     var myPopup = window.open(domain + '/windowPostMessageListener.html','myWindow');
//     myPopup.postMessage(selections[0], domain);
//   } else {
//     alert("Select an issue before clicking 'Choose Experiment for PNav' button!");
//   }
// }

async function sendStickerDetailsToPNAV() {
  let selectedIssue = await getSelectedIssue();
  const boardId = (await miro.board.getInfo()).id;
  let sendToPnav = await miro.board.widgets
    .get({ type: "STICKER" })
    .then((stickers) => {
      let stickerCells = stickers.map((s) => {
        const x = getCoord(s.bounds.left, s.bounds.right);
        const y = getCoord(s.bounds.top, s.bounds.bottom);
        const impact = Math.ceil((x + columnWidth / 2) / columnWidth);
        const ignorance = Math.ceil((2250 - rowHeight / 2 - y) / rowHeight);
        return {
          label: s.plainText,
          impact,
          ignorance,
          score: impact * ignorance,
          inGrid: impact > 0 && impact <= 9 && ignorance > 0 && ignorance <= 9,
        };
      });

      let data = [];
      stickerCells.forEach((s) => {
        if (
          s.ignorance > 0 &&
          s.impact > 0 &&
          s.ignorance < 10 &&
          s.impact < 10
        ) {
          data.push({
            name: s.label,
            prevIG: s.ignorance,
            prevIM: s.impact,
          });
        }
      });
      return data;
    });
  let allStickers = await miro.board.widgets.get({ type: "sticker" });

  // var domain = 'http://localhost:63342/Chomolongma/dist/index.html?_ijt=snuq6qqd9j541j2c4m7dcllrca#!/workbench#%2Flogin';
  // var domain = 'https://thilak.smartorg.com/workbench/#!/workbench';
  var domain = "https://inav.smartorg.com/workbench/#!/workbench";
  // var myPopup = window.open(domain + '/windowPostMessageListener.html','myWindow');
  // myPopup.postMessage({board: boardId, data: sendToPnav}, domain);
  // var iframe = document.getElementById('myIFrame').contentWindow;
  // iframe.parent.postMessage({board: boardId, data: sendToPnav}, domain);
  window.parent.parent.postMessage(
    { board: boardId, data: sendToPnav },
    domain
  );
}
