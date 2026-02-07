<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  components: {
    BaseLayout
  },

  data() {
        return {
            titleCounter: 'Counter',
            count: 0,
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
}
</script>

<template>
  <BaseLayout>
    <h2>Counter page</h2>
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
  </BaseLayout>  
</template>

<style scoper>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
}

.card {
  border-radius: 20px;
  padding: 40px;  
  box-shadow: 0 0 15px 10px rgba(44, 62, 80, 0.4);
  text-align: center;
  transition: transform 0.3s ease;
}

h2 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 700;
}

.btn {
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.2s ease;
  text-transform: uppercase;
}

.btn:active {
  transform: scale(0.95);
}

.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.primary:hover {
  box-shadow: 0 6px 20px rgba(118, 75, 162, 0.4);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 80%);
}

.danger {
  background: #ff6b81;
  color: white;
}

.danger:hover {
  background: #ff4757;
}
</style>