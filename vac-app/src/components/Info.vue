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
        {text: 'Vaccine safety', link: 'https://www.health.govt.nz/your-health/healthy-living/immunisation/vaccine-safety'},
        {text: 'Debunking the anti-vaccination myths', link: 'https://www.medicalnewstoday.com/articles/325371.php'},
        {text: 'Six common misconceptions about immunization', link: 'https://www.who.int/vaccine_safety/initiative/detection/immunization_misconceptions/en/'},
        {text: 'New Zealand medical professionals worried about anti-vax tour', link: 'https://www.rnz.co.nz/programmes/the-detail/story/2018692973/the-detail-the-anti-vaccination-conversation'},
        {text: 'The Detail - The anti-vaccination conversation', link: 'https://www.rnz.co.nz/programmes/the-detail/story/2018692973/the-detail-the-anti-vaccination-conversation'}
      ],
      videoId: getIdFromURL('https://www.youtube.com/watch?v=lCDCOckaTTg')
    }
  }
}
</script>
