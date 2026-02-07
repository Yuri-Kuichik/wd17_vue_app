<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
        return {
            titleCalculator: 'Calculator',
            classObject: {
                active: true,
                'text-danger': false,
            },
            value1: 0,
            value2: 0,
            result: 0,
            currentOperator: '',
        }
    },

    computed: {
        resultCalculator() {
            switch (this.currentOperator) {
                case '': return 0
                case '+': return this.value1 + this.value2
                case '-': return this.value1 - this.value2
                case '*': return this.value1 * this.value2
                case '/': return parseFloat((this.value1 / this.value2).toFixed(9))
            }
        }
    },  
}
</script>

<template>
  <BaseLayout>
    <h2>Calculator page</h2>
        <div class="container pt-5">
            <div class="card">
                <h2>{{ titleCalculator }}</h2>
                <div class="col form-control calc">
                    <input
                      type="number"
                      v-model.number="value1"
                      :class="classObject"
                      class="col form-control calc"                    
                    />
                    <div class="calc-actions">
                        <button class="calc-btn" @click="currentOperator = '+'">
                            <span> ➕ </span>
                        </button>
                        <button class="calc-btn" @click="currentOperator = '-'">
                            <span> ➖ </span>
                        </button>
                        <button class="calc-btn" @click="currentOperator = '*'">
                            <span> ✖ </span>
                        </button>
                        <button class="calc-btn" @click="currentOperator = '/'">
                            <span> ➗ </span>
                        </button>
                    </div>

                    <input
                      type="number"
                      v-model.number="value2"
                      :class="classObject"
                      class="col form-control calc"                    
                    />

                    <h3>Result: {{ resultCalculator }}</h3>
                </div>
            </div>
        </div>
  </BaseLayout>
  
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.card {
  background: #f0f2f5;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  width: 100%;
  max-width: 380px;
  text-align: center;
}

.calc-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px 0;
}

.calc-btn {
  aspect-ratio: 1;
  border: none;
  border-radius: 12px;
  background: #e0e0e0;
  box-shadow: 4px 4px 8px #bcbcbc, -4px -4px 8px #ffffff;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calc-btn:hover {
  background: #d1d1d1;
}

.calc-btn:active {
  box-shadow: inset 4px 4px 8px #bcbcbc, inset -4px -4px 8px #ffffff;
  transform: scale(0.95);
}

.calc-btn:focus {
  outline: 2px solid #4a90e2;
  background: #d1e9ff;
}

.form-control.calc {
  width: 100%;
  padding: 20px;  
  margin: 10px 0;
  border: none;
  border-radius: 15px;
  background: #e0e0e0;
  box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
  font-size: 22px;
  text-align: right;
  color: #444;
  outline: none;
}

h3 {
  margin-top: 25px;
  padding: 15px;
  background: #2d3436;
  color: #00cec9;
  border-radius: 10px;
  text-align: left;
}

.text-danger {
  color: #ff7675;
}
</style>