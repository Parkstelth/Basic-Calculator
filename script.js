const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.


function calculate(n1, operator, n2) {
  let result = 0;
  // 1. 더하기
  // 2. 빼기(결과 음수일시 음수반환)
  // 3. 나누기
  // 4. 곱하기
  if (operator === '+') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === '-') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === '/') {
    result = parseFloat(n1) / parseFloat(n2)
  } else if (operator === '*') {
    result = parseFloat(n1) * parseFloat(n2)
  }
  return String(result)

}
let numberValue = false
//false일시 첫번째칸에 true일시 두번째칸에 입력하게 해주는 조건 변수

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면


    if (action === 'number') {
      if (numberValue == false) { //false에 의해 첫번째 칸에 아래 버튼의 content를 할당
        firstOperend.textContent = buttonContent //버튼의 content를 첫번째칸에 할당한다.
        numberValue = true //두번째 칸에 새 값을 할당하기 위해 true로 바꾼다.

      } else { //numberValue가 true일시 두번째 칸에 버튼의 content를 할당한다.
        secondOperend.textContent = buttonContent
        numberValue = false //다시 버튼을 누를시 첫번재 칸으로 할당되도록 false로 되돌린다.
      }

    }

    //답안2
    // if(Number(firstOperend.textContent)>0){
    //   secondOperend.textContent = buttonContent
    // }
    // else {
    //   firstOperend.textContent = buttonContent
    // }

    if (action === 'operator') {
      //클릭된 것이 연산문자일시 연산자칸에 버튼의 content가 출력된다.
      operator.textContent = buttonContent //연산버튼을 누르면 해당하는 버튼의 content가 
    }

    if (action === 'decimal') {
      //소수점//
    }

    if (action === 'clear') {
      //a/c버튼을 누를시 계산출력칸에 0,+,0,0이 출력된다.
      firstOperend.textContent = '0'
      operator.textContent = '+'
      secondOperend.textContent = '0'
      calculatedResult.textContent = '0'
      numberValue = false
    }

    if (action === 'calculate') {
      // 각 계산 출력칸에 입력된 content들을 변수에 할당하여 calculate함수로 계산하여 return된 값을 결과값칸에 할당한다.
      let n1 = firstOperend.textContent
      let n2 = secondOperend.textContent
      let oper = operator.textContent
      calculatedResult.textContent = calculate(n1, oper, n2)

    }
  }
});



// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.

  if (target.matches('button')) {
    if (action === 'number') {
      if (display.textContent === '0' || previousKey === 'operator') { //조건 1: 새로운 숫자를 받기위해 화면에 0 또는 이전에 연산자를 눌렀으면,
        display.textContent = buttonContent //화면에 버튼의 숫자하나를 받는다.
      } else {
        display.textContent += buttonContent //조건 2: 반대로 그외에는 기존 숫자에 버튼의 숫자를 하나하나 붙인다.
      }
      previousKey = 'number' //현재 키를 number로 전환한다.
    }

    if (action === 'operator') {
      if (previousKey === 'operator' || previousKey === 'calculate') { //조건 1: 현재키가 operator이거나 calculate일 경우, 연속적으로 눌러도 이상이없도록
        operatorForAdvanced = buttonContent // 현재 연산자에 마지막 버튼의 연산자를 할당한다.
        return
      }
      if (operatorForAdvanced === undefined) { //조건 1: operatorForAdvanced에 한번더 연산자가 할당된적 없다면
        firstNum = Number(display.textContent) //현재 화면의 숫자를 firstNum에 할당한다.
      } else { //조건2: 그외에 operatorForAdvance에 이미 연산자가 할당 되어있었으면 
        firstNum = calculate(firstNum, operatorForAdvanced, display.textContent) // firstNum과 현재 새로 받은 숫자를 연산하여 firstNum에 교체한다.
        display.textContent = firstNum //금방 연산된 firstNum을 화면에 출력한다.
      }
      target.setAttribute('style','background-color:#00da75') //백그라운드 컬러를 변경한다.
      operatorForAdvanced = buttonContent //조건문이 끝나면 operatorForAdvanced에 누른 버튼의 연산자를 넣는다.
      previousKey = 'operator' //현재 키를 operator로 전환한다.
    }

    if (action === 'decimal') {
      if (display.textContent.indexOf('.') > (-1)) return //조건1: 화면에 있는 숫자에 .이 있을시 return되어 종료된다.
      if (display.textContent === '0' || previousKey === 'operator' || previousKey === 'calculate') {//조건2: 화면에 0이거나 현재키가 operator이나 calculate일시
        display.textContent = '0.' // 화면에 0.을 출력하여 뒤에 숫자앞을 대처한다.
      } else {
        display.textContent += buttonContent //조건3: 그외에는 버튼의 콘텐츠인 . 을 붙인다.
      }
      previousKey = 'decimal' //현재 키를 decimal로 전환한다.
    }
    if (action === 'clear') { //초기화
      display.textContent = '0',
      firstNum = 0,
      operatorForAdvanced = undefined
      previousKey = undefined
      const buttonOperators = document.querySelectorAll('.operator') //색이 변경된 operator 버튼의 색을 원색으로 돌린다.
      buttonOperators.forEach(buttonOperator=>buttonOperator.setAttribute('style','background-color:#313132'))
    }

    if (action === 'calculate') { //enter부분
      if (operatorForAdvanced === undefined) return //연산자변수에 아무것도없을시 return하여 종료된다.
      if (previousKey === 'calculate') { //enter로 계산을 한뒤 또 다시 enter을 누를시 현재 키가 calculate로 되어
        display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum) //else에서 계산된 previousNum과 화면값이 계산되어 화면에 출력된다.
      } else {
        previousNum = display.textContent //그외에 화면의 값을 previousNum에 넣어
        display.textContent = calculate(firstNum, operatorForAdvanced, previousNum) //operator에서 계산한 firstNum과 화면에 보이는 값을 계산하여 화면에 출력한다.
      }
      previousKey = 'calculate' //현재 키를 calculate로 전환한다.
      const buttonOperators = document.querySelectorAll('.operator') //색이 변경된 operator 버튼들의 색을 원색으로 돌린다.
      buttonOperators.forEach(buttonOperator=>buttonOperator.setAttribute('style','background-color:#313132'))
    }
  }

});