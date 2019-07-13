<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex md6>
          <apexchart width="790" type="bar" :options="options" :series="series"></apexchart>
        </v-flex>
        <v-flex md6>
          <apexchart width="790" type="area" :options="optionsArea" :series="seriesArea"></apexchart>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex md6>
          <apexchart width="790" type="line" :options="optionsLine" :series="seriesLine"></apexchart>
        </v-flex>
        <v-flex md6>
          <apexchart type=pie width=790 :options="chartOptions" :series="seriesPie" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  data () {
    return {
      options: {
        chart: {
          id: '5YearOldChart'
        },
        title: {
          text: "Vaccination Rates in 5 Year Olds By Ethnicity - 2018"
        },
        xaxis: {
          categories: ["Total", "NZ European", "Maori", "Pacific", "Asian", "Other"],
          title: {
            text: "Ethnicity"
          }
        },
        yaxis: {
          title: {
            text: "N.O. Vaccinated"
          }
        }
      },
      series: [{
        name: 'N.O. Vaccinated',
        data: [55262, 23768, 12626, 5717, 9056, 4095]
      },
        {
          name: 'N.O. Eligible',
          data: [62957, 26195, 14903, 6435, 9986, 4085]
        }],
      optionsArea: {
        chart: {
          id: 'areaChart'
        },
        title: {
          text: "Vaccination Rates 2009 to 2018 in 5 Year Olds"
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
          title: {
            text: "Year"
          }
        },
        yaxis: {
          title: {
            text: "N.O. Vaccinated"
          }
        },
        dataLabels: {
          enabled: false
        }
      },
      seriesArea: [
        {
          name: "Eligible",
          data: [64829, 60609, 62489, 61935, 61008, 65567, 66079, 64250, 60590, 62957]
        },
        {
          name: "Vaccinated",
          data: [43751, 46624, 49199, 45876, 46996, 52882, 54732, 55920, 55986, 55800]
        }
      ],
      optionsLine: {
        chart: {
          id: 'lineChart'
        },
        title: {
          text: "Deaths caused by Measles 1995 - 2017 (Worldwide) https://ourworldindata.org/vaccination"
        },
        xaxis: {
          categories: [1990, 1995, 2000, 2005, 2010, 2017],
          title: {
            text: "Year"
          }
        },
        yaxis: {
          title: {
            text: "N.O. of Deaths"
          }
        },
        dataLabels: {
          enabled: false
        }
      },
      seriesLine: [
        {
          name: "data",
          data: [700438, 635238, 547184, 328873, 178445, 95290]
        }
      ],
      seriesPie: [95727, 86063, 482, 938],
      chartOptions: {
        labels: ['Total Children', 'Children Vaccinated with MMR', 'Diagnosed with Autism', 'Diagnosed with Autism And has older sibling with Autism'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }

    }
  }
}
</script>
