<template>
  <div>
    <h1>Information Page</h1>

    <v-container fluid grid-list-md id="mainContainer">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-card>
            <v-card-title primary-title>
              <div class="headline">
                <h3>Articles</h3>
              </div>
            </v-card-title>
            <div id='articles'>
              <v-card>
                <v-container fluid grid-list-lg>
                  <v-layout row wrap>
                    <v-flex xs12 v-for="article in articles">
                        <v-card hover v-bind:href="article.link">
                          <v-card-title>
                            <v-layout row wrap>
                              <v-flex xs1>
                                <i class="fas fa-newspaper"></i>
                              </v-flex>
                              <v-flex xs10>
                                <div class="text-sm-left">
                                  <p>{{article.text}}</p>
                                </div>
                              </v-flex>
                            </v-layout>
                          </v-card-title>
                        </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </div>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card>
                <div>
                  <div>
                    <v-carousel>
                      <v-carousel-item>
                        <youtube :video-id="videoId"></youtube>
                      </v-carousel-item>
                      <v-carousel-item>
                        <youtube :video-id="videoIdTwo"></youtube>
                      </v-carousel-item>
                      <v-carousel-item>
                        <youtube :video-id="videoIdThree"></youtube>
                      </v-carousel-item>
                    </v-carousel>
                  </div>
                </div>
              </v-card>
            </v-flex>

            <v-flex>
              <v-card>
                <h1>Map goes here</h1>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {getIdFromURL} from 'vue-youtube-embed'
export default {
  name: 'Info',
  data () {
    return {
      articles: [
        {text: 'Measles overseas and in New Zealand', link: 'https://www.immune.org.nz/hot-topic/measles-overseas-and-new-zealand'},
        {text: 'Debunking the anti-vaccination myths', link: 'https://www.medicalnewstoday.com/articles/325371.php'},
        {text: 'Lower vaccination rates leave Northland people extremely exposed', link: 'https://www.rnz.co.nz/news/national/387447/lower-vaccination-rates-leave-northland-people-extremely-exposed'},
        {text: 'Six common misconceptions about immunization', link: 'https://www.who.int/vaccine_safety/initiative/detection/immunization_misconceptions/en/'},
        {text: 'New Zealand medical professionals worried about anti-vax tour', link: 'https://www.newshub.co.nz/home/lifestyle/2019/03/new-zealand-medical-professionals-worried-about-anti-vax-tour.html'},
        {text: 'The Detail - The anti-vaccination conversation', link: 'https://www.rnz.co.nz/programmes/the-detail/story/2018692973/the-detail-the-anti-vaccination-conversation'},
        {text: 'Do Vaccines Cause Autism?', link: 'https://www.historyofvaccines.org/content/articles/do-vaccines-cause-autism'},
        {text: 'MMR vaccine does not cause autism, even in those most at risk', link: 'https://www.medicalnewstoday.com/articles/324619.php'},
        {text: 'Is There a Connection Between Vaccines and Autism?', link: 'https://kidshealth.org/en/parents/autism-studies.html'},
        {text: 'VACCINE MYTHS DEBUNKED', link: 'https://www.publichealth.org/public-awareness/understanding-vaccines/vaccine-myths-debunked/'},
        {text: 'Hospital bosses want anti anti-vax campaign', link: 'https://www.rnz.co.nz/news/national/384112/hospital-bosses-want-anti-anti-vax-campaign'},
        {text: 'The anti-vaccination debate was built on a lie, why do people still believe it?', link: 'https://www.stuff.co.nz/national/health/110136209/the-antivaccination-debate-was-built-on-a-lie-why-do-people-still-believe-it'},
        {text: 'Vaccine safety', link: 'https://www.health.govt.nz/your-health/healthy-living/immunisation/vaccine-safety'},
        {text: 'Ethical Issues and Vaccines', link: 'https://www.historyofvaccines.org/index.php/content/articles/ethical-issues-and-vaccines'}
      ],
      videoId: getIdFromURL('https://www.youtube.com/watch?v=lCDCOckaTTg'),
      videoIdTwo: getIdFromURL('https://www.youtube.com/watch?v=WQptarOLSBU'),
      videoIdThree: getIdFromURL('https://www.youtube.com/watch?v=loL_iIWltI0')
    }
  }
}
</script>
