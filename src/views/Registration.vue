<template>
  <div class="registration">
    <x-card class="wrapper">
      <h1 class="registration__header">Регистрация</h1>
      <form @submit.prevent="registration">
        <x-input
            type="text"
            label="Имя"
            v-model="name"
            :invalid="$v.name.$dirty && !$v.name.required"
        >
          <small
              v-if="$v.name.$dirty && !$v.name.required"
              class="input__error"
          >
            Поле "Имя" не должно быть пустым
          </small>
        </x-input>
        <x-input
            type="number"
            label="Номер телефона"
            v-model="phone"
            :invalid="$v.phone.$dirty && !$v.phone.required"
        >
          <small
              v-if="$v.phone.$dirty && !$v.phone.required"
              class="input__error"
          >
            Поле "Телефон" не должно быть пустым
          </small>
        </x-input>
        <x-input
            type="text"
            label="Почта"
            v-model.trim="email"
            :invalid="($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)"
        >
          <small
              v-if="$v.email.$dirty && !$v.email.required"
              class="input__error"
          >
            Поле "Почта" не должно быть пустым
          </small>
          <small
              v-else-if="$v.email.$dirty && !$v.email.email"
              class="input__error"
          >
            Введите корректный email
          </small>
        </x-input>
        <x-input
            type="password"
            label="Пароль"
            v-model.trim="password"
            :invalid="($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength) ||
            ($v.password.$dirty && !$v.password.maxLength)"
        >
          <small
              v-if="$v.password.$dirty && !$v.password.required"
              class="input__error"
          >
            Придумайте пароль
          </small>
          <small
              v-else-if="$v.password.$dirty && !$v.password.minLength"
              class="input__error"
          >
            Минимальный размер пароля не должен быть меньше 6 символов
          </small>
          <small
              v-else-if="$v.password.$dirty && !$v.password.maxLength"
              class="input__error"
          >
            Максимальный размер пароля не должен привышать 40 символов
          </small>
        </x-input>
        <x-btn type="submit" class="registration__btn">Зарегистрироваться</x-btn>
      </form>
    </x-card>
    <p class="registration__footnote">Уже есть аккаунт? <router-link tag="a" class="registration__link" to="/authentication">Войти</router-link></p>
  </div>
</template>

<script>
import Xinput from "@/components/Xinput.vue";
import {email, required, minLength, maxLength} from "vuelidate/src/validators"
export default {
  components: {
    'x-input': Xinput
  },
  name: "Registration",
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      password: '',
    }
  },
  validations: {
    email: {email, required},
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(40)
    },
    phone: {required},
    name: {required}
  },
  methods: {
    async registration() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      await this.$store.dispatch('createUser', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/const";
@import "src/styles/mixins";
.registration {
  padding-top: $card-padding;
  .registration__header {
    @include header
  }
  .wrapper {
    margin: auto;
  }
  .registration__footnote {
    text-align: center;
    .registration__link {
      color: black;
    }
  }
  .input__error {
    color: red;
  }
  .registration__btn {
    margin-top: $btn-margin;
  }
}

</style>
