

export default function createButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Load more";
    button.classList.add("js-button");
    return button;
};