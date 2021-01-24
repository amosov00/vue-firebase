<template>
  <div class="profile">
    <x-card class="profile__card">
      <h1 class="profile__header">HomePage</h1>
      <ul class="list">
        <li class="list__item">Имя: <span class="list__item-modify">{{ user.name }}</span></li>
        <li class="list__item">Почта: <span class="list__item-modify">{{ user.email }}</span></li>
        <li class="list__item">Номер телефона: <span class="list__item-modify">{{ user.phone }}</span></li>
      </ul>
      <x-btn @click.native="logout">Выйти</x-btn>
    </x-card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "HomePage",
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'userGetter'
    })
  },
  methods: {
    async logout() {
      this.loading = true
      await this.$store.dispatch('logout')
      this.loading = false
      this.$store.commit('setUserInfo', null)
    }
  },
  async created() {
    await this.$store.dispatch('getUserInfo');
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/const";
@import "src/styles/mixins";
.profile {
  padding-top: $card-padding;
  .profile__header {
    @include header
  }
  .profile__card {
    margin: auto;
  }
}

.list {
  font-size: 30px;
  list-style: none;
  .list__item {
    margin: 20px 0;
    .list__item-modify {
      border-radius: 3px;
      border: 2px solid black;
      background-color: $main-color;
    }
  }
}

</style>
