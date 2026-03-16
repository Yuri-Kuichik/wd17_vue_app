<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Name label'
        },
        name: {
            type: String,
            required: true
        },
        placeholder: String,
        value: {
          type: [String, Number],
          default: ''
        },
        errorMessage: {
            type: String,
            default: 'Error message'
        }
    },

    methods: {
      inputValue(event) {
        this.$emit('changeVal', event.target.value)
      }
    }
}

</script>

<template>
    <div class="base-input">
        <div class="base-input-wrapper">
            <label for=""> {{ label }}</label>
            <input 
                type="text" 
                :name="name" 
                :placeholder="placeholder"
                @input="inputValue"
                :value="value"
            />
            <span v-if="errorMessage" class="base-input__error"> {{ errorMessage }}</span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.base-input {
    display: flex;
    flex-direction: column;
}

input {
  padding: 8px 12px;
  width: 100%;
  max-width: 100%;
  min-height: 32px;
  border: 1px solid rgba(139, 132, 132, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  background: var(--color-white) !important;

  &::placeholder {
    color: rgba(117, 113, 113, 0.26);
  }

  &:focus-visible {
    border-color: rgb(253, 211, 42);
  }
}

.base-input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
}

.base-input {
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_password input {
    padding-right: 42px;
  }

  &_password button {
    position: absolute;
    bottom: 5px;
    right: 5px;
    padding: 8px;
    border-radius: 20px;
  }

  &_password button:hover {
    background: rgba(145, 149, 157, 0.2);
  }

  &.js--error input {
    border-color: var(--colors-error);
  }

  &__error {
    margin-top: 5px;
    display: block;
    color: var(--colors-error);
    font-size: 12px;
    line-height: 16px;
  }
}

</style>