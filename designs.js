// Select color input

const color = document.getElementById('colorPicker');

// Select size input

const sizePickerForm = document.getElementById('sizePicker');
let gridHeight;
let gridWidth;

sizePickerForm.addEventListener('submit', e => {
    e.preventDefault();
    gridHeight = document.getElementById('input_height').value;
    gridWidth = document.getElementById('input_width').value;
    makeGrid();
});


const pixelCanvas = document.getElementById('pixel_canvas');

// When size is submitted by the user, makeGrid() called
function makeGrid() {
    
     let tableCell = "<tbody>";
    
     for(let i=0; i<gridHeight; i++){
         tableCell += "<tr>";
             for(let j=0; j<gridWidth; j++){
                 tableCell += "<td></td>";
             }
         tableCell += "</tr>";
     }
    tableCell += "</tbody>";
    pixelCanvas.innerHTML = tableCell;
    
}
 
pixelCanvas.addEventListener('click', e => {
    
    if(e.target.tagName == 'TD'){      
        e.target.style.backgroundColor = color.value; 
    }    
});















