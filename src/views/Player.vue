<template lang="pug">
#player
  .container
    .row
      .col
        video.video-js(ref="videoPlayer")
          source(
            src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
            type="application/x-mpegURL"
          )
        h1 {{ activeVideo.snippet.title }}
        p {{ activeVideo.snippet.description }}
      .col
        h5 相信你也喜歡這些影片
        .row
          .col-1(v-for="(info, index) in relateVideo" @click="watch(info)")
            img(:src="info.snippet.thumbnails.medium.url")
            .title
              | {{ info.snippet.title.length > 30 ? info.snippet.title.slice(0, 30) + '...' : info.snippet.title }}
            .text
              | {{ info.snippet.description.length > 50 ? info.snippet.description.slice(0, 50) + '...' : info.snippet.description }}
</template>
<script>
export default {
  name: 'VideoPlayer',
  data () {
    return {
      options: {
        controls: true, // 是否显示底部控制栏
        preload: 'auto', // 加载<video>标签后是否加载视频
        controlBar: {
        // 自定义按钮的位置
          children: [
            { name: 'playToggle' },
            { name: 'progressControl' },
            { name: 'currentTimeDisplay' },
            { name: 'timeDivider' },
            { name: 'durationDisplay' },
            {
              name: 'volumePanel',
              inline: false
            },
            { name: 'pictureInPictureToggle' },
            { name: 'fullscreenToggle' }
          ]
        }
      }
    }
  },
  mounted () {
    this.reload()
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  },
  computed: {
    activeVideo () {
      return this.$store.getters.activeVideo
    },
    relateVideo () {
      return this.$store.getters.relateVideo
    }
  },
  methods: {
    watch (info) {
      this.$router.push({ name: 'Player', params: { id: info.id.videoId } })
      this.$store.commit('activeVideo', info)
      this.axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 4,
          key: process.env.VUE_APP_KEY,
          regionCode: 'tw',
          videoCategoryId: 10,
          type: 'video',
          relatedToVideoId: info.id.videoId
        }
      }).then(result => {
        this.$store.commit('relateVideo', result.data.items)
      })
    },
    reload () {
      this.$video(
        this.$refs.videoPlayer,
        this.options
      )
    }
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
@mixin xl {
  @media (min-width: 1200px) {
    @content;
  }
}

#player {
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
  flex: 1 0 100%;
  padding: 1rem;
  @include xl {
    &:nth-child(1) {
      flex: 0 0 75%;
      padding-top: 53px;
    }
    &:nth-child(2) {
      flex: 0 0 25%;
    }
  }
}

.col-1 {
  padding: 1rem;
  flex: 0 0 50%;
  cursor: pointer;
  @include xl {
    flex: 0 0 100%;
  }
}

h1 {
  padding: 1rem 0;
}

h5 {
  text-align: center;
  color: green;
  font-size: 1rem;
  padding: 0 1rem;
  @include md {
    text-align: end;
  }
}

img {
  object-fit: cover;
  max-width: 100%;
}

.title {
  font-size: 1.2rem;
  margin-top: 1rem;
  min-height: 52px;
  text-align: justify;
}

.text {
  font-size: 0.8rem;
  word-break: break-word;
}
</style>

<style lang="scss">

.video-js {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  .vjs-tech {
    position: relative;
    width: 100vw;
    height: 56.25vw;
    object-fit: contain;
    max-width: 100%;
  }
  .vjs-big-play-button {
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
}
</style>
