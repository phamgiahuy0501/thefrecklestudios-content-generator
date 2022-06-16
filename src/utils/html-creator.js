export function htmlCreator(model) {
    return $(`<${model.tag}>`).addClass(model.classList).append(model.content);
}