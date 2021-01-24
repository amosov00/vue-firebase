<template>
  <div class="auth">
    <x-card class="wrapper">
      <h1 class="auth__header">Вход</h1>
      <form @submit.prevent="login">
        <x-input
            type="text"
            v-model.trim="email"
            label="Почта"
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
            v-model.trim="password"
            label="Пароль"
            :invalid="($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength) ||
            ($v.password.$dirty && !$v.password.maxLength)"
        >
          <small
              v-if="$v.password.$dirty && !$v.password.required"
              class="input__error"
          >
            Введите пароль
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
        <x-btn type="submit" class="auth__btn">Войти</x-btn>
      </form>
    </x-card>
    <p class="auth__footnote">Ещё не зарегистрированы?
      <router-link to="/registration" tag="a" class="auth__link">Регистрация</router-link>
    </p>
  </div>
</template>
<script>
import Xinput from "@/components/Xinput";
import {email, required, minLength, maxLength} from "vuelidate/src/validators"
export default {
  name: "Authentication",
  components: {
    'x-input': Xinput,
  },
  data() {
    return {
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
  },
  methods: {
    async login() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      await this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import "src/styles/const";
@import "src/styles/mixins";
.auth {
  padding-top: $card-padding;
  .auth__header {
    @include header
  }
  .wrapper {
    margin: auto;
  }
  .auth__footnote {
    text-align: center;
    .auth__link {
      color: black;
    }
  }
  .input__error {
    color: red;
  }
  .auth__btn {
    margin-top: $btn-margin;
  }
}

</style>
