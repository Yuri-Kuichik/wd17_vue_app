<script>
    export default{
        data() {
            return {
                email: '',
                password: '',
                emailErrorMsg: '',
                passwordErrorMsg: '',
                loading: false,
                resData: null
            }
        },  
        
        methods: {
            changeEmail(val) {
                console.log(val)
                this.email = val
            },
            changePassword(val) {
                console.log(val)
                this.password = val
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

                this.resData = await res.json()

                this.loading = false
            }
        },

        computed: {
            isDisabledButton() {
                const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
                return this.password.length < 6 || !EMAIL_REGEXP.test(this.email);
            }
        }
    }

</script>

<template>
    <div class="sign-in-form-wrapper">
        <form class="sign-in-form">
            <h2>Sign In form</h2>
            <BaseInput 
                label="Email"  
                name="email" 
                placeholder="Enter your email" 
                :error-message="emailErrorMsg" 
                @change-value="changeEmail"
            />
            <BaseInput 
                label="Password" 
                name="password" 
                placeholder="Enter your password" 
                :error-message="passwordErrorMsg"
                @change-value="changePassword"
            />
            <BaseButton 
                class="sign-in-form_button"
                @click.prevent="sendForm"
                :is-disabled="isDisabledButton"
                :loading
                size="l"
            />
        </form>
    </div>
</template>

<style lang="scss" scoped>
.sign-in-form {
    &_button {
        margin-top: 1rem;
        width: 100%;
    }
}
</style>