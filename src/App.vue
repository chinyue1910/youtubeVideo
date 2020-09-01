<template lang="pug">
#app
  .navbar
    router-link.link(to="/" :class="{active:this.$route.path === '/'}") 回首頁
    router-link.link(to="/collect" :class="{active:this.$route.path === '/collect'}") 收藏
  keep-alive
    router-view(style="min-height:calc(100vh - 74px)")
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: center;
  background-color: black;
  padding-top: 2rem;
}
.link {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 2rem;
  border-radius: 10rem;
  border: 1px solid white;
  padding: 0.5rem 1rem;
}
.active{
  color: black;
  background-color: white;
}
</style>
