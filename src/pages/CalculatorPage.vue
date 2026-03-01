<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
    return {
      operand1: 0,
      operand2: 0,
      operator: '+',
      operators: ['+', '-', '*', '/']
    }
  },

  computed: {
    result() {
      const op1 = this.operand1 || 0;
      const op2 = this.operand2 || 0;

      if (this.operator === '/' && op2 === 0) {
        return 'Ошибка';
      }

      switch(this.operator) {
        case '+': return op1 + op2;
        case '-': return op1 - op2;
        case '*': return op1 * op2;
        case '/': return op1 / op2;
        default: return 0;
      }
    },

    expression() {
      return `${this.operand1} ${this.operator} ${this.operand2}`
    }
  }
}
</script>

<template>
<BaseLayout>
    <h2>Calculator page</h2>
    
    <div class="inputs">
      <div class="input-group">
        <p>Операнд 1:</p>
        <input 
          type="number" 
          v-model.number="operand1" 
          placeholder="Введите первое число"
        >
      </div>

      <div class="operators">
        <p>Выберите оператор:</p>
        <button 
          v-for='op in operators'
          :key="op"
          :class="['operator-btn', { active: operator === op }]"
          @click="operator = op"
        >
          {{ op }}
        </button>
      </div> 

      <div class="input-group">
          <p>Операнд 2:</p>
          <input 
            type="number" 
            v-model.number="operand2"
            placeholder="Введите второе число"
          >
        </div>
    </div>

    <div class="result">
      <h3>Результат:</h3>
      <div class="result-value">
        {{ expression }} = <strong>{{ result }}</strong>
      </div>
    </div>
  </BaseLayout>
  
</template>

<style scoped>
* {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  color: #827272;
}

.inputs {
  padding: 20px;
  border-radius: 8px;
}

.input-group p {
  display: block;
  font-weight: 500;
  color: #e4c6c6;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.input-group input:focus {
  outline: none;
  border-color: #4caf50;
}

.operators {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 10px;
}

.operator-btn {
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.operator-btn:hover {
  transform: translateY(-2px);
}

.operator-btn.active {
  background: #4caf50;
  color: white;
  border-color: #4caf50;
}

.result {
  background: #e8f2e9;
  border-radius: 8px;
}

.result h3 {
  color: #2e7d32;
}

.result-value {
  font-size: 30px;
  text-align: center;
  padding: 10px;
  color: #827272;
  background: white;
  border-radius: 4px;
  border: 1px solid #c8e6c9;
}

.result-value strong {
  color: #4caf50;
}
</style>