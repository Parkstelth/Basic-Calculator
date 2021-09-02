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
  if(operator ==='+'){
    result = parseFloat(n1) + parseFloat(n2)
  }
  else if(operator === '-'){
    result = parseFloat(n1) - parseFloat(n2)
  }
  else if(operator === '/'){
    result = parseFloat(n1) / parseFloat(n2)
  }
  else if(operator === '*'){
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
      calculatedResult.textContent = calculate(n1,oper,n2)
      
    }
  }
});



// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced=null, previousKey, previousNum;
 //현재 소수점이 있는지 여부
buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  
  if (target.matches('button')) {
    if (action === 'number') { //입력버튼이 숫자버튼일시 적용
      if((display.textContent)=== '0' || previousKey ==='operator'){ //화면에 0 또는 이전에 누른 버튼키가 연산키라면
        display.textContent= buttonContent //누른 숫자버튼의 숫자를 화면에 출력한다.
        previousKey ='number' // 제일 최근키가 number로 변환
        
      }
      
      else{
        display.textContent+= buttonContent // 그밖에 숫자버튼의 숫자는 현재 화면에 이어붙인다.
        
      }
    }
    if (action === 'operator') { 1+2+3 
      if(previousKey==='operator' || previousKey ==='calculate'){ //연산자를 연속으로 누를시 마지막 연산자기억
        operatorForAdvanced = buttonContent //마지막 연산자버튼의 연산자를 입력
        return
      }
      if(operatorForAdvanced === null){ //연산자 한번도 안눌렀을시
        firstNum = Number(display.textContent) //firstNum에 화면값 입력
      }
      else{ //1+2+3 등의 연산
        firstNum = calculate(firstNum,operatorForAdvanced,display.textContent) //현재까지의 연산을 계산하고 결과를 피연산자1에 저장해둔다.
        display.textContent=firstNum //피연산자1을 화면에 보여준다.
      }
      target.setAttribute('style','background-color:#00da75') //백그라운드 컬러를 변경한다.
      previousKey = 'operator' 
      operatorForAdvanced = buttonContent
    }

    if (action === 'decimal') { 
      // display.textContent +=buttonContent 
      if(display.textContent.indexOf('.')>(-1))  return; //소수점이 있으면 무시
      if(previousKey==='calculate') return;
      if(display.textContent==='0' || previousKey==='operator') { //화면에 0또는 이전에 누른키가 연산키나 enter일시 0.을 출력
        display.textContent = "0.";
      } else {
        display.textContent += buttonContent; //0이 아니거나 숫자이면 .을 붙임
      }
      previousKey = 'decimal'
    }

    if (action === 'clear') { //화면부터 변수들을 모두 초기화
      firstNum = 0;
      operatorForAdvanced=null
      previousKey='clear'
      display.textContent ='0'
      const buttonOperators = document.querySelectorAll('.operator') //색이 변경된 operator 버튼의 색을 원색으로 돌린다.
      buttonOperators.forEach(buttonOperator=>buttonOperator.setAttribute('style','background-color:#313132'))
     

    }
    if (action === 'calculate') {
      if(operatorForAdvanced===null) return  //만약에 operator을 입력한적없다면 return한다. 받아올때까지
      if(previousKey==='calculate'){ //연속입력시, 이전에 previousKey가 calculate일시
        display.textContent = calculate(display.textContent,operatorForAdvanced,previousNum) 
        //
      }
      else{
        previousNum = display.textContent 
        display.textContent = calculate(firstNum,operatorForAdvanced,previousNum) // 화면의 값과 operator에서 계산된 firstNum을 연산하여 화면에 출력.
      }

     
      previousKey = 'calculate'

      const buttonOperators = document.querySelectorAll('.operator') //색이 변경된 operator 버튼들의 색을 원색으로 돌린다.
      buttonOperators.forEach(buttonOperator=>buttonOperator.setAttribute('style','background-color:#313132'))

    }
  }

});