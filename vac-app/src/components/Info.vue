<template>
  <v-container id="yeet">
    <h1>Vaccination Resources</h1>

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

        <v-flex d-flex xs12 sm6 md7 lg6>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card>
                <v-carousel :cycle="false" hide-delimiters>
                  <v-carousel-item>
                    <youtube :video-id="videoId"></youtube>
                  </v-carousel-item>
                  <v-carousel-item fill-height>
                    <youtube :video-id="videoIdTwo"></youtube>
                  </v-carousel-item>
                  <v-carousel-item>
                    <youtube :video-id="videoIdThree"></youtube>
                  </v-carousel-item>
                  <v-carousel-item>
                    <youtube :video-id="videoIdFour"></youtube>
                  </v-carousel-item>
                </v-carousel>
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
                                <p><i class="fas fa-stethoscope"></i> {{clinic.text}}</p>
                                <p><i class="fas fa-map-marker-alt"></i> {{clinic.address}}</p>
                                <p><i class="fas fa-phone"></i> {{clinic.number}}</p>
                                <p v-if="userLong !== 0 && userLat !== 0"><i class="fas fa-ruler"></i> {{getDistance(clinic.latitude,clinic.longitude)}} km</p>
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
  </v-container>
</template>

<script>
  import {getIdFromURL} from 'vue-youtube-embed'
  export default {
    name: 'Info',
    data () {
      return {
        articles: [
          {
            text: 'Measles overseas and in New Zealand',
            link: 'https://www.immune.org.nz/hot-topic/measles-overseas-and-new-zealand'
          },
          {text: 'Debunking the anti-vaccination myths', link: 'https://www.medicalnewstoday.com/articles/325371.php'},
          {
            text: 'Lower vaccination rates leave Northland people extremely exposed',
            link: 'https://www.rnz.co.nz/news/national/387447/lower-vaccination-rates-leave-northland-people-extremely-exposed'
          },
          {
            text: 'Six common misconceptions about immunization',
            link: 'https://www.who.int/vaccine_safety/initiative/detection/immunization_misconceptions/en/'
          },
          {
            text: 'New Zealand medical professionals worried about anti-vax tour',
            link: 'https://www.newshub.co.nz/home/lifestyle/2019/03/new-zealand-medical-professionals-worried-about-anti-vax-tour.html'
          },
          {
            text: 'The Detail - The anti-vaccination conversation',
            link: 'https://www.rnz.co.nz/programmes/the-detail/story/2018692973/the-detail-the-anti-vaccination-conversation'
          },
          {
            text: 'Do Vaccines Cause Autism?',
            link: 'https://www.historyofvaccines.org/content/articles/do-vaccines-cause-autism'
          },
          {
            text: 'MMR vaccine does not cause autism, even in those most at risk',
            link: 'https://www.medicalnewstoday.com/articles/324619.php'
          },
          {
            text: 'Is There a Connection Between Vaccines and Autism?',
            link: 'https://kidshealth.org/en/parents/autism-studies.html'
          },
          {
            text: 'VACCINE MYTHS DEBUNKED',
            link: 'https://www.publichealth.org/public-awareness/understanding-vaccines/vaccine-myths-debunked/'
          },
          {
            text: 'Hospital bosses want anti anti-vax campaign',
            link: 'https://www.rnz.co.nz/news/national/384112/hospital-bosses-want-anti-anti-vax-campaign'
          },
          {
            text: 'The anti-vaccination debate was built on a lie, why do people still believe it?',
            link: 'https://www.stuff.co.nz/national/health/110136209/the-antivaccination-debate-was-built-on-a-lie-why-do-people-still-believe-it'
          },
          {
            text: 'Vaccine safety',
            link: 'https://www.health.govt.nz/your-health/healthy-living/immunisation/vaccine-safety'
          },
          {
            text: 'Ethical Issues and Vaccines',
            link: 'https://www.historyofvaccines.org/index.php/content/articles/ethical-issues-and-vaccines'
          }
        ],
        videoId: getIdFromURL('https://www.youtube.com/watch?v=xZd58hFQ4V8'),
        videoIdTwo: getIdFromURL('https://www.youtube.com/watch?v=sYCyP37ASsE'),
        videoIdThree: getIdFromURL('https://youtu.be/Fcvgp6gNh6o'),
        videoIdFour: getIdFromURL('https://youtu.be/rb7TVW77ZCs'),
        userLat: 0.0,
        userLong: 0.0,
        currentDistance: 0.0,
        clinics: [
          {
            text: 'Doctors On Riccarton',
            img: 'https://lh5.googleusercontent.com/proxy/Q--0bA7lfxAffOITriIBAyCS8ARjIlpy6iFkdo6YSvjjMjCp3nGwK49ZMt-UypMJoTkiLI_nnf8WsXPXlTSazshPfWV04mq1J_qpbC5_AMx45RHu0GscUuK47JbTwLuVWRwiHz7jvV9_QM1TtfpGHddsUBB3yA=w80-h92-p-k-no',
            address: '183 Riccarton Rd, Riccarton',
            number: '03-348 8989',
            longitude: '-43.5306034',
            latitude: '172.5904648'
          },
          {
            text: 'Merivale Medical Practice',
            img: 'https://lh5.googleusercontent.com/p/AF1QipPvtDOoRidAZ8HeGp77vjakGoYth3GEOCRdFUQI=w80-h92-p-k-no',
            address: '236 Papanui Rd, Merivale',
            number: '03-355 7262',
            longitude: '-43.510064',
            latitude: '172.6182148'
          },
          {
            text: 'Moorhouse Medical Centre',
            img: 'https://lh5.googleusercontent.com/p/AF1QipOQfJhcVTVMoB5iR36n5fokbvZ-ojohEUdTPFyj=w80-h92-p-k-no',
            address: '3 Pilgrim Pl, Sydenham',
            number: '03-365 7900',
            longitude: '-43.5409237',
            latitude: '172.63758'
          },
          {
            text: 'The Travel Doctor Christchurch',
            img: 'https://lh5.googleusercontent.com/p/AF1QipOHTIQBe8MlnGFpvjoImJRgl2xN_9MkeEpzTBNS=w80-h92-p-k-no',
            address: '426 Barbadoes St, Edgeware',
            number: '03-365 1003',
            longitude: '-43.5204071',
            latitude: '172.646249'
          },
          {
            text: 'Maxwell Health Flu Vaccinations',
            img: 'https://lh5.googleusercontent.com/p/AF1QipOm_7lh02Rj7NG0yNE7cu9mYzR7I8tysY5EVLTA=w80-h92-p-k-no',
            address: '80 Ivory St, Rangiora',
            number: '0800 376 600',
            longitude: '-43.3042759',
            latitude: '172.5949276'
          }
        ]
      }
    },

    mounted: function () {
      this.$getLocation()
        .then(coordinates => {
          console.log(coordinates);
          this.userLat = coordinates.lat;
          this.userLong = coordinates.lng;
        });
    },
    methods: {
      getDistance: function (lon2, lat2) {
        let lat1 = this.userLat
        let lon1 = this.userLong
        if ((lat1 == lat2) && (lon1 == lon2)) {
          return 0;
        } else {
          var radlat1 = Math.PI * lat1 / 180;
          var radlat2 = Math.PI * lat2 / 180;
          var theta = lon1 - lon2;
          var radtheta = Math.PI * theta / 180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
            dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180 / Math.PI;
          dist = dist * 60 * 1.1515;
          dist = dist * 1.609344
          return Math.round((dist + 0.00001) * 100) / 100;
        }
      }
    }
  }
</script>
