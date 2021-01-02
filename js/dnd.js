class DND {
  constructor() {
    this.targetElement = null;
  }

  dragStart(e) {
    this.targetElement = e.currentTarget;
    this.targetElement.style.opacity = 0.4;
  }

  dragOver(e) {
    const _target = e.target;
    const isItem = _target.classList.contains("dnd-draggable-item");
    if (isItem) {
      e.preventDefault();

      e.target.parentElement.insertBefore(this.targetElement, e.target);
    }
  }

  dragEnd(e) {
    e.preventDefault();
    this.targetElement.style.opacity = 1;
    this.targetElement = null;
  }

  setContainer(_target) {
    _target.addEventListener("dragover", this.dragOver.bind(this));
  }

  setItem(_item) {
    _item.setAttribute("draggable", true);
    _item.style.cursor = "pointer";
    _item.classList.add("dnd-draggable-item");

    _item.addEventListener("dragstart", this.dragStart.bind(this));
    _item.addEventListener("dragend", this.dragEnd.bind(this));
  }
}
