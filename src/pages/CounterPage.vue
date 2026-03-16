<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
    return {
      count: 0
    }
  },

  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },

  methods: {
    increase() {
      this.count++;
    },

    decrease() {
      this.count--;
    }
  }
}
</script>

<template>
  <BaseLayout>
    <h2>Counter page</h2>
    
        <div>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      
      <div class="buttons">
        <button class="btn decrease" @click="decrease">Decrease (-1)</button>
        <button class="btn increase" @click="increase">Increase (+1)</button>
      </div>
    </div>
  </BaseLayout>
  
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.decrease {
  background-color: #f44336;
  color: white;
}

.decrease:hover {
  background-color: #d32f2f;
}

.increase {
  background-color: #4caf50;
  color: white;
}

.increase:hover {
  background-color: #388e3c;
}
</style>