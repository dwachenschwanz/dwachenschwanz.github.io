function makeBMC()
{
    const widgets = 
    [
        {
        id: "3074457364559615842",
        type: "SHAPE",
        bounds: {
            x: -5525.859750669742,
            y: 1335.6474081130318,
            top: 974.6169032539237,
            left: -5874.17696630941,
            bottom: 1696.67791297214,
            right: -5177.542535030075,
            width: 696.634431279335,
            height: 722.061009718216,
        },
        groupId: "3074457364559616050",
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
        createdUserId: "3074457360915125885",
        lastModifiedUserId: "3074457360915125885",
        x: -5525.859750669742,
        y: 1335.6474081130318,
        width: 696.634431279335,
        height: 722.061009718216,
        rotation: 0,
        text: "<p><strong>Key resources</strong></p><p>What resources do you need to make your idea work?</p>",
        plainText:
            "Key resources What resources do you need to make your idea work?",
        }
    ];
    widgets.forEach(miro.board.widgets.create);
}