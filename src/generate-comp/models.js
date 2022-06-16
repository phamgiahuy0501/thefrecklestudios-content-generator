import { HTML_TAG_STRING, STYLE_CLASS_STRING, STRING } from "../utils/string.js"

export class ContentModel {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = [STYLE_CLASS_STRING.CONTENT_ITEM, STYLE_CLASS_STRING.ANIM_HIDDEN];
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

export class DescriptionContainer {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = STYLE_CLASS_STRING.DES_CONTAINER;
        this.content = content;
    }
}

export class TitleDropdown {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = [STYLE_CLASS_STRING.TITLE_CONTAINER, STYLE_CLASS_STRING.DROPDOWN_CONTROLLER];
        this.content = content;
    }
}

export class IconContainer {
    constructor(content) {
        this.tag = HTML_TAG_STRING.DIV;
        this.classList = STYLE_CLASS_STRING.ICON_CONTAINER;
        this.content = content;
    }
}

export class PlusIcon {
    constructor(content) {
        this.tag = HTML_TAG_STRING.SPAN;
        this.classList = STYLE_CLASS_STRING.ICON_CONTAINER;
        this.content = STRING.PLUS;
    }
}

export class MinusIcon {
    constructor(content) {
        this.tag = HTML_TAG_STRING.SPAN;
        this.classList = [STYLE_CLASS_STRING.ICON_CONTAINER, STYLE_CLASS_STRING.ANIM_HIDDEN];
        this.content = STRING.MINUS;
    }
}

export class header4 {
    constructor(content) {
        this.tag = HTML_TAG_STRING.HEADER_4;
        this.classList = classList;
        this.content = content;
    }
}