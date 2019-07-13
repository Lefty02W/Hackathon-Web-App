<template>
  <div>
    <h1>Information Page</h1>
    <div id = 'articles'>
      <table>
        <td>Articles</td>
        <tr v-for="article in articles">
          <a v-bind:href="article.link"> <td>{{article.text}}</td> </a>
        </tr>
      </table>
    </div>
    <div>
      <div>
        <youtube :video-id="videoId"></youtube>
      </div>
    </div>
  </div>
</template>

<script>
import {getIdFromURL} from 'vue-youtube-embed'
export default {
  name: 'Info',
  data () {
    return {
      articles: [
        {text: 'Article One', link: 'http://www.google.com'},
        {text: 'Article Two', link: 'http://www.google.com'},
        {text: 'Article Three', link: 'http://www.google.com'},
        {text: 'Article Four', link: 'http://www.google.com'}
      ],
      videoId: getIdFromURL('https://www.youtube.com/watch?v=lCDCOckaTTg')
    }
  }
}
</script>
