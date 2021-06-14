'use strict';
const item = document.querySelector('.item');
item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

const placeholders = document.querySelectorAll('.placeholder');
for(const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', gragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)

}


function dragStart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
  }
function dragEnd(event) {
  event.target.classList.remove('hold');
  event.target.classList.remove('hide');
}

function dragOver(event) {
  event.preventDefault();

}
function gragEnter(event) {
  event.target.classList.add('hovered')
  console.log('dragenter')
}
function dragLeave(event) {
  event.target.classList.remove('hovered')
}
function dragDrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}

