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
          text: "Vaccination Rates in 5 Year Olds By Ethnicity - 20182019"
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
      ]
    }
  }
}
</script>
