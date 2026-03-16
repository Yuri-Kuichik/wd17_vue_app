<script>
import BaseButton from './BaseButton.vue';

    export default{
        data() {
            return {
                email: '',
                password: '',
                emailErrorMsg: '',
                passwordErrorMsg: '',
                placeholder: '',
                loading: false,
                resData: null
            }
        },  
        
        methods: {
            changeVal(field, value) {
               if (field === 'Email') {
                   this.email = value
               } else if (field === 'Password') {
                   this.password = value
               }
           },

            async sendForm() {
                this.loading = true

                let data = {
                    email: this.email,
                    password: this.password
                }

                let res = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                console.log(res)

                this.resData = await res.json()

                this.loading = false
            }
        },

        computed: {
            isDisabledButton() {
                const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
                return !EMAIL_REGEXP.test(this.email) || this.password.length < 6
            }
        }
    }

</script>

<template>
    <BaseLayout>
        <form class="sign-in-form" @submit.prevent="sendForm">
            <h2 class="sign-in-form__title">Sign In form</h2>
            <BaseInput 
                label="Email"
                name="email"
                placeholder="Enter your email"
                class="sign-in-form__input"
                :error-message="emailErrorMsg"
                @changeVal="changeVal('Email', $event)"
                :value="email"
            />
            <BaseInput 
                label="Password"
                name="password"
                placeholder="Enter your password"
                class="sign-in-form__input"
                :error-message="passwordErrorMsg"
                @changeVal="changeVal('Password', $event)"
                :value="password"
            />
            <BaseButton 
                class="sign-in-form__button"
                @click.prevent="sendForm"
                :is-disabled="isDisabledButton"
                :loading
            />
        </form>
    </BaseLayout>
</template>

<style lang="scss" scoped>
.sign-in-form {
    &__title {
        margin-bottom: 30px;
    }

    &__input {
        margin-bottom: 20px;
    }

    &__button {
        cursor: pointer;

        &:hover {
            box-shadow: 0 10px 20px rgba(155, 162, 190, 0.3);
        }
    }
}
</style>