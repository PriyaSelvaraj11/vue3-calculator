import { ref, readonly } from 'vue';
import { OPERATORS, DIGITS } from '../constants';

export function calculate() {
    let mathExpression = ref('');
    let errorMessage = ref('');
    let isLastCharOperator = false;
    let result = ref('');


    function clearPrevious():void {
        mathExpression.value =  mathExpression.value.slice(0, -1); 
    }

    function clearMathExpression():void {
        mathExpression.value =  ""; 
    }

    function onClickShowResult() {
        if(mathExpression.value === "") return;
        const resultValue = `${eval(mathExpression.value)}`;
        result.value = `${Number.parseFloat(Number(resultValue).toFixed(10))}`;
    }

    function onClickDigit(digitParam: string): void {
        const digit = DIGITS[digitParam];
        const previousDigit = mathExpression.value.at(-1);
        
        if(previousDigit === DIGITS['.'] && digit === DIGITS['.']) return;
        if(previousDigit === DIGITS['0'] && mathExpression.value.length >= 1) clearPrevious();
        if(mathExpression.value === "" && digit === DIGITS['.']) mathExpression.value = "0";

        mathExpression.value += `${digit}`;
        isLastCharOperator = false;
    }

    function onClickOperator(operator: string): void { 
        if(operator === OPERATORS['clearAll']) {
            clearMathExpression();
            return;
        } else if(operator === OPERATORS['clearPrevious']) {
            clearPrevious();
            return;
        } else  if(operator === OPERATORS['equals']) {
            onClickShowResult();
            return;
        } else if(isLastCharOperator) clearPrevious();
        mathExpression.value += `${operator}`;
        isLastCharOperator = true;
    }

    return {
        mathExpression: mathExpression,
        errorMessage: errorMessage,
        onClickDigit,
        onClickOperator,
        result: readonly(result),
    }
} 