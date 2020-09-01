<template lang="pug">
#collect
  .container
    .row(v-if="infos.length !== 0")
      .col(v-for="(info, index) in infos", :key="index" @click="watch(info)")
        .box
          img(:src="info.snippet.thumbnails.standard.url")
          .time {{ info.contentDetails.duration }}
          font-awesome-icon.btn(
            v-if="collections.findIndex(d => d.id === info.id) === -1 ? true : false",
            :icon="['fas', 'folder-plus']",
            @click.stop="add(info)"
          )
          font-awesome-icon.btn(
            v-else,
            :icon="['fas', 'folder-minus']",
            @click.stop="remove(info)"
            style="color:red"
          )
        .title
          | {{ info.snippet.title.length > 30 ? info.snippet.title.slice(0, 30) + '...' : info.snippet.title }}
        .text
          | {{ info.snippet.description.length > 50 ? info.snippet.description.slice(0, 50) + '...' : info.snippet.description }}
    router-link.link(to="/" v-else) 目前沒有喜愛的收藏，點擊前往收聽
    .row(v-if="pagination > 1")
      ul.pagination.modal
        li
          a.prev(@click.prevent="prev") «
        li(v-for="page in pagination")
          a(:class="{ active: page === currentPage }", @click="select(page)") {{ page }}
        li
          a.next(@click.prevent="next") »
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      totalResults: '',
      token: ''
    }
  },
  methods: {
    add (video) {
      this.$store.commit('add', video)
    },
    remove (video) {
      this.$store.commit('remove', video)
    },
    next () {
      if (this.currentPage < this.pagination) {
        this.currentPage++
        this.$router.push({
          path: this.$route.path,
          query: { page: this.currentPage }
        })
      }
    },
    prev () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.$router.push({
          path: this.$route.path,
          query: { page: this.currentPage }
        })
      }
    },
    select (page) {
      if (page !== this.currentPage) {
        this.currentPage = page
        this.$router.push({
          path: this.$route.path,
          query: { page: this.currentPage }
        })
      }
    },
    watch (info) {
      this.$router.push({ name: 'Player', params: { id: info.id } })
      this.$store.commit('activeVideo', info)
      this.axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 4,
          key: process.env.VUE_APP_KEY,
          regionCode: 'tw',
          videoCategoryId: 10,
          type: 'video',
          relatedToVideoId: info.id
        }
      }).then(result => {
        this.$store.commit('relateVideo', result.data.items)
      })
    }
  },
  computed: {
    collections () {
      return this.$store.getters.collections
    },
    infos () {
      return this.collections.slice((this.currentPage - 1) * 12, this.currentPage * 12)
    },
    pagination () {
      return Math.ceil(this.collections.length / 12)
    }
  },
  mounted () {
    this.currentPage = parseInt(this.$route.query.page) || 1
  }
}
</script>

<style lang="scss" scoped>
@mixin sm {
  @media (min-width: 576px) {
    @content;
  }
}
@mixin md {
  @media (min-width: 768px) {
    @content;
  }
}
@mixin lg {
  @media (min-width: 992px) {
    @content;
  }
}

#collect {
  background-color: black;
  color: white;
}

.container {
  @include sm {
    padding: 0;
  }
  @include md {
    padding: 0 50px;
  }
  @include lg {
    padding: 0 100px;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  padding: 1rem;
  flex: 0 0 100%;
  cursor: pointer;
  @include sm {
    flex: 0 0 50%;
  }
  @include md {
    flex: 0 0 33.3333%;
  }
  @include lg {
    flex: 0 0 25%;
  }
}
.box {
  position: relative;
}

img {
  object-fit: cover;
  max-width: 100%;
}

.time {
  position: absolute;
  right: 0rem;
  bottom: 0rem;
  font-size: 1rem;
  color: gold;
}
.btn {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  svg {
    margin-right: 0.5rem;
  }
}

.title {
  font-size: 1.2rem;
  margin-top: 1rem;
  min-height: 52px;
  text-align: justify;
}

.text {
  font-size: 0.8rem;
  text-align: justify;
}

.pagination {
  list-style: none;
  display: inline-block;
  padding: 2rem 0;
  margin: auto;
  li {
    display: inline;
    text-align: center;
  }
  a {
    float: left;
    display: block;
    font-size: 14px;
    text-decoration: none;
    padding: 5px 12px;
    color: #fff;
    margin-left: -1px;
    border: 1px solid transparent;
    line-height: 1.5;
    cursor: pointer;
    &.active {
      cursor: default;
    }
    &:active {
      outline: none;
    }
  }
}

.modal {
  a {
    margin-left: 3px;
    padding: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 100%;
    &:hover {
      background-color: #4dad16;
    }
    &.active,
    &:active {
      background-color: #37b247;
    }
  }
}

.link{
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
  text-decoration: none;
  color: gold;
  text-decoration: underline;
}
</style>
