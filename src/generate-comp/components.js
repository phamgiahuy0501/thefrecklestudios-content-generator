import { htmlCreator } from "../utils/html-creator.js";
import * as Comp from "./models.js";

export function contentItemComponent(content) {
    const contentElement = new Comp.ContentModel(content);
    return htmlCreator(contentElement);
}

export function globalWrap() {
    return htmlCreator(new Comp.WrapStyleModel(htmlCreator(new Comp.DescriptionContainer())));
}

export function TitleDropdown() {
    return htmlCreator()
}