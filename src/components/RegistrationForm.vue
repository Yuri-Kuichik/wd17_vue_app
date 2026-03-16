<script>
    export default{
        data() {
            return {
                dataUser: {
                    userName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    groupNumber: '',
                    course_group: 15,
                    emailErrorMsg: '',
                    passwordErrorMsg: '',
                    userNameErrorMsg: '',
                    lastNameErrorMsg: '',
                    groupNumberErrorMsg: '',
                }
            }
        },

        methods: {
            changeVal(field, val) {
                this.dataUser[field] = val
            },
            sendForm() {
                let data = {
                    email: this.dataUser.email,
                    password: this.dataUser.password,
                    userName: this.dataUser.userName,
                    lastName: this.dataUser.lastName,
                    groupNumber: this.dataUser.groupNumber,
                    course_group: 15,
                }

                console.log(data)
            }
        },

        computed: {
            isDisabledButton() {
                const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
                return !EMAIL_REGEXP.test(this.dataUser.email) || 
                this.dataUser.password.length < 6 || 
                !this.dataUser.userName || 
                !this.dataUser.lastName || 
                !this.dataUser.groupNumber
            }
        }
    }
</script>

<template>
    <BaseLayout>
        <div class="registration-form-wrapper">
            <form class="registration-form" @submit.prevent="sendForm">
                <h2 class="registration-form__title">Registration Form</h2>
                
                <BaseInput 
                    placeholder="Введите Ваше имя" 
                    label="Name:"
                    class="registration-form__input"
                    @changeVal="changeVal('userName', $event)"
                    :value="dataUser.userName"
                    name="userName"
                    :errorMessage="dataUser.userNameErrorMsg"
                />  
                    
                <BaseInput 
                    placeholder="Введите Вашу фамилию" 
                    label="Last Name:"
                    class="registration-form__input"
                    @changeVal="changeVal('lastName', $event)"
                    :value="dataUser.lastName"
                    name="lastName"
                    :errorMessage="dataUser.lastNameErrorMsg"
                /> 
                
                <BaseInput 
                    placeholder="Введите Ваш e-mail" 
                    label="E-mail:"
                    type="email"
                    class="registration-form__input"
                    @changeVal="changeVal('email', $event)"
                    :value="dataUser.email"
                    name="email"
                    :errorMessage="dataUser.emailErrorMsg"
                /> 
                
                <BaseInput 
                    placeholder="Введите Ваш пароль" 
                    label="Password:"
                    type="password"
                    class="registration-form__input"
                    @changeVal="changeVal('password', $event)"
                    :value="dataUser.password"
                    name="password"
                    :errorMessage="dataUser.passwordErrorMsg"
                />
                
                <BaseInput 
                    placeholder="Введите номер группы" 
                    label="Group number:"
                    class="registration-form__input"
                    @changeVal="changeVal('groupNumber', $event)"
                    :value="dataUser.groupNumber"
                    name="groupNumber"
                    :errorMessage="dataUser.groupNumberErrorMsg"
                />
                
                <BaseButton 
                    class="registration-form__button"
                    @click.prevent="sendForm"
                    :is-disabled="isDisabledButton"
                />
            </form>
        </div>
    </BaseLayout>
</template>

<style lang="scss" scoped>
.registration-form {
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