<script>
    export default{
        data() {
            return {
                username: '',
                email: '',
                password: '',
                emailErrorMsg: '',
                passwordErrorMsg: '',
                course_group: 15,
                loading: false,
                resData: null,
            }
        },  
        
        methods: {
            async sendForm() {
                this.loading = true

                let data = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    course_group: 15,
                }

                let res = await fetch('https://studapi.teachmeskills.by/auth/users/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                console.log(res)

                this.resData = await res.json()

                this.loading = false
            },

            changeUsername(val) {
                this.username = val
            },

            changeEmail(val) {
                this.email = val
            },

            changePassword(val) {
                this.password = val
            }


        }
    }

</script>

<template>
    <div>
        <form class="registration-form">
            <h2>Registration form</h2>
            <BaseInput
                label="Name"
                name="name"
                placeholder="Enter your name"
                @change-value="changeUsername"
            />
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
                text="Send"
                class="registration-form_button"
                @click="sendForm"
            />
        </form>
    </div>
</template>

<style lang="scss" scoped>
.registration-form {
    &_button {
        margin-top: 1rem;
        width: 100%;
    }
}
</style>