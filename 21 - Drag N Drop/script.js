const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.box');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const box of boxes){
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
}

function dragStart(){
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible';
    }, 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(){
    this.classList.add('hovered');
}

function dragLeave(){
    this.classList.remove('hovered');
}

function dragDrop(){
    this.className = 'box';
    this.append(fill);
}