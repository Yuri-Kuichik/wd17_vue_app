<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  data() {
        return {
            titleCounter: 'Counter',
            titleCalculator: 'Calculator',
            count: 0,
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

    methods: {
        increaseCount() {
            this.count++;
        },
        decreaseCount() {
            this.count--;
        }
    },

    computed: {
        resultCalculator() {
            switch (this.currentOperator) {
                case '+': return this.value1 + this.value2

                    break;

                case '-': return this.value1 - this.value2

                    break;

                case '*': return this.value1 * this.value2

                    break;

                case '/': return this.value1 / this.value2

                    break;
            }
        }
    },
}
</script>

<template>
  <BaseLayout>
    <div class="container pt-5">
            <div class="card center">
                <h2>
                    {{ titleCounter }}: {{ count }}
                </h2>
                <div>
                    <button class="btn primary" @click="increaseCount">
                        Increase
                    </button>
                    <button class="btn danger" @click="decreaseCount">
                        Decrease
                    </button>
                </div>
            </div>
        </div>

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

                    <h3>Result: {{ currentOperator ? resultCalculator : 0 }}</h3>
                </div>
            </div>
        </div>
  </BaseLayout>
  
</template>

<style scoped>
</style>
