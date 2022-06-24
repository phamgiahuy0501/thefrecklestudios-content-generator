import { HTML_TAG_STRING, STYLE_CLASS_STRING, STRING } from "../utils/string.js"

export class ContentModel {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = [STYLE_CLASS_STRING.CONTENT_ITEM];
        this.content = content;
    }
}

export class ContentAnimModel extends ContentModel {
    constructor(content) {
        super(content);
        this.classList.push(STYLE_CLASS_STRING.ANIM_HIDDEN)
    }
}

export class WrapSectionModel {
    constructor(content) {
        this.tag = HTML_TAG_STRING.P;
        this.content = content;
    }
}

export class WrapStyleModel {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = STYLE_CLASS_STRING.WRAP_STYLE;
        this.content = content;
    }
}

export class DescriptionContainerModel {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = STYLE_CLASS_STRING.DES_CONTAINER;
        this.content = content;
    }
}

export class TitleDropdownModel {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = [STYLE_CLASS_STRING.TITLE_CONTAINER, STYLE_CLASS_STRING.DROPDOWN_CONTROLLER];
        this.content = content;
    }
}

export class IconContainerModel {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = STYLE_CLASS_STRING.ICON_CONTAINER;
        this.content = content;
    }
}

export class PlusIconModel {
    constructor() {
        this.tag = HTML_TAG_STRING.SPAN;
        this.classList = STYLE_CLASS_STRING.PLUS;
        this.content = STRING.PLUS;
    }
}

export class MinusIconModel {
    constructor() {
        this.tag = HTML_TAG_STRING.SPAN;
        this.classList = [STYLE_CLASS_STRING.MINUS, STYLE_CLASS_STRING.HIDDEN];
        this.content = STRING.MINUS;
    }
}

export class Header4Model {
    constructor(content) {
        this.tag = HTML_TAG_STRING.HEADER_4;
        this.content = content;
    }
}

export class InnerDotModel {
    constructor() {
        this.tag = HTML_TAG_STRING.SPAN;
        this.content = STRING.DOT;
    }
}

