<template>
  <div class="calc-container">
      <div class="result-container">
        <span  id="expr" class="small-text">{{calculateOp.mathExpression.value}}</span>
        <span 
          id="result"
          class="xx-large-text" 
          v-if="calculateOp.result.value">
          = {{calculateOp.result.value}}
        </span>
      </div>
      <div class="grid">
        <CalculatorButton
          v-for="(buttonItem,index) in buttonActionMapping"
          :key="index"
          :id="index"
          @onClick="onClick(buttonItem)"
          :variant="buttonItem.buttonVariant">
          {{buttonItem.id}}
        </CalculatorButton>
      </div>
  </div>
</template>

<script setup lang="ts">
  import CalculatorButton from './CalculatorButton.vue';
  import { buttonActionMapping } from '../constants';

  import { calculate } from '../compositions/calculate';

  const calculateOp = calculate();

  const onClick = (buttonItem: any) => {
    if(buttonItem.type === 'number') {
      calculateOp.onClickDigit(buttonItem.id);
    }
    if(buttonItem.type === 'operator' || buttonItem.type === 'action') {
      calculateOp.onClickOperator(buttonItem.id);
    }
  }

</script>

<style lang="scss" scoped>
.result-container {
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-bottom: 1rem;
  .xx-large-text {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .small-text {
    font-size: small;
  }
}
.grid {
  max-width: 22rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.grid>* {
  flex: 0 0 23%;
}

.grid > *:nth-child(3n-2):nth-last-of-type(1) {
  flex: 1 0 23%;
}
</style>

