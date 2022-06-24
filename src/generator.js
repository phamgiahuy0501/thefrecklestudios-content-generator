import * as Comp from "./generate-comp/components.js"

export function generate() {
    const genElementList = [];
    const outerElementList = $(".outer");

    outerElementList.each(function () {
        const inputList = $(this).find("input");
        const inputListCount = inputList.length;
        const genInnerElementList = [];

        inputList.each(function (index, element) {
            const textString = $(element).val();
            if (textString == "") {
                return;
            }
            if (index == 0) {
                genElementList.push(Comp.titleDropdownComp(textString));
                return;
            }
            if (index == 1 && inputListCount == 3) {
                genElementList.push(Comp.contentAnimComp(textString));
                return;
            }
            if (index == inputListCount - 2) {
                genInnerElementList.push(Comp.innerContentItemComp(textString));
                genElementList.push(Comp.contentAnimComp(genInnerElementList))
                return
            }
            genInnerElementList.push(Comp.innerContentItemComp(textString));
        });

    });
    if (genElementList.length == 0) {
        return;
    }
    return Comp.sectionWrapComp(Comp.globalWrapComp(genElementList));
}
