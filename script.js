console.log("Phongsakorn Loimaping");
console.log("Ohm");
// เลือกหน้าจอแสดงผลและปุ่ม
const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.calculator-button');

// ตัวแปรเก็บค่าที่ป้อน
let currentInput = '';
let previousInput = '';
let operator = '';

// ฟังก์ชันอัปเดตหน้าจอแสดงผล
function updateDisplay() {
  display.textContent = currentInput || '0';
}

// ฟังก์ชันเมื่อกดปุ่ม
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('number')) {
      // รับตัวเลข
      currentInput += value;
    } else if (button.classList.contains('operator')) {
      // รับเครื่องหมาย
      if (currentInput && previousInput) {
        calculate();
      }
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else if (button.classList.contains('clear')) {
      // ล้างค่าทั้งหมด
      currentInput = '';
      previousInput = '';
      operator = '';
    } else if (button.classList.contains('equals')) {
      // คำนวณผลลัพธ์
      calculate();
    }

    updateDisplay();
  });
});

// ฟังก์ชันคำนวณ
function calculate() {
  let result = 0;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '×':
      result = prev * current;
      break;
    case '÷':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
}
