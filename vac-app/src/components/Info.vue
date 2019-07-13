<template>
  <div class="container" id="yeet">
    <h1>Information Page</h1>

    <v-container fluid grid-list-md id="mainContainer">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md5>
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

        <v-flex d-flex xs12 sm6 md7>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card>
                <div>
                  <div>
                    <v-carousel :cycle="false">
                      <v-carousel-item>
                        <youtube :video-id="videoId"></youtube>
                      </v-carousel-item>
                      <v-carousel-item >
                        <youtube :video-id="videoIdTwo"></youtube>
                      </v-carousel-item>
                      <v-carousel-item>
                        <youtube :video-id="videoIdThree"></youtube>
                      </v-carousel-item>
                      <v-carousel-item>
                        <youtube :video-id="videoIdFour"></youtube>
                      </v-carousel-item>
                    </v-carousel>
                  </div>
                </div>
              </v-card>
            </v-flex>

            <v-flex>
              <v-card>
                <h1>Vaccinations In Christchurch</h1>
                <v-container fluid grid-list-lg>
                  <v-layout row wrap>
                    <v-flex xs12 v-for="clinic in clinics">
                      <v-card hover>
                        <v-layout>
                          <v-flex xs2>
                            <v-card-title>
                              <img v-bind:src="clinic.img">
                            </v-card-title>
                          </v-flex>
                          <v-flex xs12>
                            <v-card-title>
                              <div class="text-sm-left">
                                <p>{{clinic.text}}</p>
                                <p>{{clinic.address}}</p>
                                <p>{{clinic.number}}</p>
                              </div>
                            </v-card-title>
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
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
      videoId: getIdFromURL('https://www.youtube.com/watch?v=xZd58hFQ4V8'),
      videoIdTwo: getIdFromURL('https://www.youtube.com/watch?v=sYCyP37ASsE'),
      videoIdThree: getIdFromURL('https://youtu.be/Fcvgp6gNh6o'),
      videoIdFour: getIdFromURL('https://youtu.be/rb7TVW77ZCs'),

      clinics: [
        {text: 'The Travel Doctor Christchurch', img:'https://lh5.googleusercontent.com/p/AF1QipOHTIQBe8MlnGFpvjoImJRgl2xN_9MkeEpzTBNS=w80-h92-p-k-no',
          address: '426 Barbadoes St, Edgeware', number: '03-365 1003'},
        {text: 'Moorhouse Medical Centre', img:'https://lh5.googleusercontent.com/p/AF1QipOQfJhcVTVMoB5iR36n5fokbvZ-ojohEUdTPFyj=w80-h92-p-k-no',
          address: '3 Pilgrim Pl, Sydenham', number: '03-365 7900'},
        {text: 'Doctors On Riccarton', img:'https://lh5.googleusercontent.com/proxy/Q--0bA7lfxAffOITriIBAyCS8ARjIlpy6iFkdo6YSvjjMjCp3nGwK49ZMt-UypMJoTkiLI_nnf8WsXPXlTSazshPfWV04mq1J_qpbC5_AMx45RHu0GscUuK47JbTwLuVWRwiHz7jvV9_QM1TtfpGHddsUBB3yA=w80-h92-p-k-no',
          address: '183 Riccarton Rd, Riccarton', number: '03-348 8989'},
        {text: 'Merivale Medical Practice', img:'https://lh5.googleusercontent.com/p/AF1QipPvtDOoRidAZ8HeGp77vjakGoYth3GEOCRdFUQI=w80-h92-p-k-no',
          address: '236 Papanui Rd, Merivale', number: '03-355 7262'},
        {text: 'Maxwell Health Flu Vaccinations', img:'https://lh5.googleusercontent.com/p/AF1QipOm_7lh02Rj7NG0yNE7cu9mYzR7I8tysY5EVLTA=w80-h92-p-k-no',
          address: '80 Ivory St, Rangiora', number: '0800 376 600'},
      ]
    }
  }
}
</script>

<style>
  #yeet {
    background-color: blue;
  }
</style>
