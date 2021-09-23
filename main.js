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
          // Show modal and wait for user choice
          let needToClear = confirm("Do you want delete all this content?");

          if (needToClear) {
            let widgets = []
            widgets.push({
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
              x: -3853.3852554974524,
              y: 1908.7220881335218,
              width: 1809.35153887163,
              height: 340.244804360296,
              rotation: 0,
              text: "<p><strong>Revenue Streams</strong></p><p>How much are you planning </p><p>to earn in a certain period? </p><p>Compare your costs and revenues.</p>",
              plainText:
                "Revenue Streams How much are you planning  to earn in a certain period?  Compare your costs and revenues.",
            });

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
