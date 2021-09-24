const icon =
  '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>';

const iconsq =
  '<ellipse cx="12" cy="12" rx="9" ry="5" fill="none" fill-rule="evenodd" stroke="red" stroke-width="2"></ellipse>';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "Test Github New Board cleaner",
        svgIcon: iconsq,
        onClick: async () => {
            const widgets =
            [
    {
        "id": "3074457364496668572",
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
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -4781.387461938883,
        "y": 1072.929022366622,
        "width": 3828,
        "height": 2190,
        "title": "",
        "frameIndex": 0,
        "childrenIds": [
            "3074457364496668571",
            "3074457364496668559",
            "3074457364496668560",
            "3074457364496668561",
            "3074457364496668562",
            "3074457364496668563",
            "3074457364496668564",
            "3074457364496668565",
            "3074457364496668566",
            "3074457364496668567",
            "3074457364496668568",
            "3074457364496668569"
        ]
    },
    {
        "id": "3074457364496668568",
        "type": "SHAPE",
        "bounds": {
            "x": -3853.385255497453,
            "y": 1908.7220881335218,
            "top": 1738.5996859533739,
            "left": -4758.061024933268,
            "bottom": 2078.8444903136697,
            "right": -2948.7094860616376,
            "width": 1809.35153887163,
            "height": 340.244804360296
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -3853.3852554974524,
        "y": 1908.7220881335218,
        "width": 1809.35153887163,
        "height": 340.244804360296,
        "rotation": 0,
        "text": "<p><strong>Revenue Streams</strong></p><p>How much are you planning </p><p>to earn in a certain period? </p><p>Compare your costs and revenues.</p>",
        "plainText": "Revenue Streams How much are you planning  to earn in a certain period?  Compare your costs and revenues."
    },
    {
        "id": "3074457364496668567",
        "type": "SHAPE",
        "bounds": {
            "x": -3297.029883969962,
            "y": 953.6560167632808,
            "top": 210.63412055445087,
            "left": -3645.34709960963,
            "bottom": 1696.6779129721108,
            "right": -2948.712668330295,
            "width": 696.634431279335,
            "height": 1486.04379241766
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -3297.029883969962,
        "y": 953.6560167632808,
        "width": 696.634431279335,
        "height": 1486.04379241766,
        "rotation": 0,
        "text": "<p><strong>Customer segments</strong></p><p>Who are your customers? Describe your target audience in a couple of words.</p>",
        "plainText": "Customer segments Who are your customers? Describe your target audience in a couple of words."
    },
    {
        "id": "3074457364496668566",
        "type": "SHAPE",
        "bounds": {
            "x": -4041.2087117194824,
            "y": 1335.6474081130318,
            "top": 974.6169032539249,
            "left": -4389.52592735915,
            "bottom": 1696.677912972139,
            "right": -3692.891496079815,
            "width": 696.634431279335,
            "height": 722.061009718214
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -4041.2087117194824,
        "y": 1335.6474081130318,
        "width": 696.634431279335,
        "height": 722.061009718214,
        "rotation": 0,
        "text": "<p><strong>Channels</strong></p><p>How are you going to reach your customers?</p>",
        "plainText": "Channels How are you going to reach your customers?"
    },
    {
        "id": "3074457364496668565",
        "type": "SHAPE",
        "bounds": {
            "x": -4041.2087117194824,
            "y": 571.6646254135576,
            "top": 210.6341205544506,
            "left": -4389.52592735915,
            "bottom": 932.6951302726645,
            "right": -3692.891496079815,
            "width": 696.634431279335,
            "height": 722.061009718214
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -4041.2087117194824,
        "y": 571.6646254135576,
        "width": 696.634431279335,
        "height": 722.061009718214,
        "rotation": 0,
        "text": "<p><strong>Customer relationships</strong></p><p>How often will you interact with your customers?</p>",
        "plainText": "Customer relationships How often will you interact with your customers?"
    },
    {
        "id": "3074457364496668559",
        "type": "SHAPE",
        "bounds": {
            "x": -4781.836469334772,
            "y": 1068.9953430335418,
            "top": 28.172751356911704,
            "left": -6646.197085294012,
            "bottom": 2109.817934710172,
            "right": -2917.475853375532,
            "width": 3728.72123191848,
            "height": 2081.64518335326
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#ffffff",
            "backgroundOpacity": 1,
            "borderColor": "transparent",
            "borderWidth": 24,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 10,
            "textColor": "#ffffff",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 50,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -4781.836469334772,
        "y": 1068.9953430335418,
        "width": 3728.72123191848,
        "height": 2081.64518335326,
        "rotation": 0,
        "text": "",
        "plainText": ""
    },
    {
        "id": "3074457364496668564",
        "type": "SHAPE",
        "bounds": {
            "x": -4784.926396951343,
            "y": 953.6560167632808,
            "top": 210.63412055444587,
            "left": -5133.243612591011,
            "bottom": 1696.6779129721158,
            "right": -4436.6091813116755,
            "width": 696.634431279335,
            "height": 1486.04379241767
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -4784.926396951343,
        "y": 953.6560167632808,
        "width": 696.634431279335,
        "height": 1486.04379241767,
        "rotation": 0,
        "text": "<p><strong>Key propositions</strong></p><p>How will you make your customers&#39; life happier?</p>",
        "plainText": "Key propositions How will you make your customers' life happier?"
    },
    {
        "id": "3074457364496668569",
        "type": "TEXT",
        "bounds": {
            "x": -4797.454107732912,
            "y": 119.40343595568584,
            "top": 28.17275135691743,
            "left": -6646.204832262126,
            "bottom": 210.63412055445423,
            "right": -2948.7033832036986,
            "width": 3697.501449058427,
            "height": 182.4613691975368
        },
        "style": {
            "backgroundColor": "transparent",
            "backgroundOpacity": 1,
            "textAlign": "l",
            "textColor": "#1a1a1a",
            "fontFamily": 27,
            "bold": 1,
            "underline": 0,
            "italic": 0,
            "strike": 0,
            "borderColor": "transparent",
            "borderOpacity": 1,
            "borderWidth": 2,
            "borderStyle": 2,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -4797.454107732912,
        "y": 119.40343595568584,
        "width": 709.26,
        "scale": 5.21318197707248,
        "rotation": 0,
        "text": "<p><strong>The Business Model Canvas</strong></p>",
        "plainText": "The Business Model Canvas"
    },
    {
        "id": "3074457364496668562",
        "type": "SHAPE",
        "bounds": {
            "x": -5525.859750669742,
            "y": 1335.6474081130318,
            "top": 974.6169032539237,
            "left": -5874.17696630941,
            "bottom": 1696.67791297214,
            "right": -5177.542535030075,
            "width": 696.634431279335,
            "height": 722.061009718216
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -5525.859750669742,
        "y": 1335.6474081130318,
        "width": 696.634431279335,
        "height": 722.061009718216,
        "rotation": 0,
        "text": "<p><strong>Key resources</strong></p><p>What resources do you need to make your idea work?</p>",
        "plainText": "Key resources What resources do you need to make your idea work?"
    },
    {
        "id": "3074457364496668561",
        "type": "SHAPE",
        "bounds": {
            "x": -5708.608421601102,
            "y": 1908.7220881335218,
            "top": 1738.5996859533768,
            "left": -6612.733754153493,
            "bottom": 2078.844490313667,
            "right": -4804.483089048713,
            "width": 1808.25066510478,
            "height": 340.24480436029
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -5708.608421601102,
        "y": 1908.7220881335218,
        "width": 1808.25066510478,
        "height": 340.24480436029,
        "rotation": 0,
        "text": "<p><strong>Cost Structure</strong></p><p>How much are you planning to spend </p><p>on the product development and </p><p>marketing for a certain period?</p>",
        "plainText": "Cost Structure How much are you planning to spend  on the product development and  marketing for a certain period?"
    },
    {
        "id": "3074457364496668560",
        "type": "SHAPE",
        "bounds": {
            "x": -5525.859750669682,
            "y": 571.664625413544,
            "top": 210.63412055443592,
            "left": -5874.17696630935,
            "bottom": 932.695130272652,
            "right": -5177.542535030015,
            "width": 696.634431279335,
            "height": 722.061009718216
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -5525.859750669682,
        "y": 571.664625413544,
        "width": 696.634431279335,
        "height": 722.061009718216,
        "rotation": 0,
        "text": "<p><strong>Key activities</strong></p><p>What are the key steps to move ahead to your customers?</p>",
        "plainText": "Key activities What are the key steps to move ahead to your customers?"
    },
    {
        "id": "3074457364496668571",
        "type": "TEXT",
        "bounds": {
            "x": -6075.7478498035725,
            "y": 2127.229897734692,
            "top": 2101.515612020406,
            "left": -6595.176421232143,
            "bottom": 2152.9441834489776,
            "right": -5556.319278375001,
            "width": 1038.8571428571422,
            "height": 51.428571428571395
        },
        "style": {
            "backgroundColor": "transparent",
            "backgroundOpacity": 1,
            "textAlign": "l",
            "textColor": "#1a1a1a",
            "fontFamily": 10,
            "padding": 0,
            "bold": 0,
            "underline": 0,
            "italic": 0,
            "strike": 0,
            "borderColor": "transparent",
            "borderOpacity": 1,
            "borderWidth": 0,
            "borderStyle": 2,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -6075.7478498035725,
        "y": 2127.229897734692,
        "width": 404,
        "scale": 2.57142857142857,
        "rotation": 0,
        "text": "<p>Released under Common Creative License by strategyzer.com</p>",
        "plainText": "Released under Common Creative License by strategyzer.com"
    },
    {
        "id": "3074457364496668563",
        "type": "SHAPE",
        "bounds": {
            "x": -6264.416538513833,
            "y": 953.6560167632808,
            "top": 210.63412055444587,
            "left": -6612.7337541534835,
            "bottom": 1696.6779129721158,
            "right": -5916.099322874184,
            "width": 696.6344312793,
            "height": 1486.04379241767
        },
        "style": {
            "shapeType": 3,
            "backgroundColor": "#87bfdd",
            "backgroundOpacity": 0.4,
            "borderColor": "transparent",
            "borderWidth": 2,
            "borderOpacity": 1,
            "borderStyle": 2,
            "fontFamily": 27,
            "textColor": "#1a1a1a",
            "textAlign": "l",
            "textAlignVertical": "t",
            "fontSize": 37,
            "bold": 0,
            "italic": 0,
            "underline": 0,
            "strike": 0,
            "highlighting": ""
        },
        "metadata": {},
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457360915125885",
        "lastModifiedUserId": "3074457360915125885",
        "x": -6264.416538513833,
        "y": 953.6560167632808,
        "width": 696.6344312793,
        "height": 1486.04379241767,
        "rotation": 0,
        "text": "<p><strong>Key partners</strong></p><p>What are your key partners to get competitive advantage?</p>",
        "plainText": "Key partners What are your key partners to get competitive advantage?"
    }
];

            miro.board.widgets.create(widgets);

            // Get all board objects
            // let objects = await miro.board.widgets.get();

            // Delete all board objects
            // await miro.board.widgets.deleteById(
            //   objects.map((object) => object.id)
            // );

            // // Display success
            // miro.showNotification("Content has been deleted");
          }
        },
      },
    },
  });
});
