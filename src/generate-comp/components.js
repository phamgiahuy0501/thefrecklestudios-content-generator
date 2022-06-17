import { htmlCreator } from "../utils/html-creator.js";
import * as CompModel from "./models.js";

export function contentComp(content) {
    return htmlCreator(new CompModel.ContentModel(content));
}

export function contentAnimComp(content) {
    return htmlCreator(new CompModel.ContentAnimModel(content));
}

export function innerContentItemComp(content) {
    return contentComp([innerDotComp(), content])
}

function innerDotComp() {
    return htmlCreator(new CompModel.InnerDotModel());
}

export function globalWrapComp(content) {
    return htmlCreator(new CompModel.WrapStyleModel(htmlCreator(new CompModel.DescriptionContainerModel(content))));
}

function iconContainerComp() {
    return htmlCreator(new CompModel.IconContainerModel([htmlCreator(new CompModel.PlusIconModel()), htmlCreator(new CompModel.MinusIconModel())]))
}

export function titleDropdownComp(content) {
    return htmlCreator(new CompModel.TitleDropdownModel([iconContainerComp(), htmlCreator(new CompModel.Header4Model(content))]))
}