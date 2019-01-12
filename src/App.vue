<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  beforeCreate() {
    this.axios
      .get("api/user/check")
      .then(res => {
        if (res.data) {
          this.$root.$data.set("isLogin", true);
          this.$root.$data.set("avatar", res.data.avatar);
        } else {
          this.$root.$data.set("isLogin", false);
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  }
};
</script>
