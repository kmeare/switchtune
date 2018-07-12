<template>
    <div id="App">
        <div class="container">
          <h1>{{ msg }}</h1>
          <InformativeCard image='' description='Basic Scale Tone A, B, C, D, E, F and G' />
          <InformativeCard image='../../assets/G-major.png' description='Minor Basic Scale Tones Am, Bm, Cm, Dm, Em, Fm and Gm' />
        </div>
        <Footer />
    </div>
    
</template>

<script>
  import Footer from './Footer/Footer.vue';
  import InformativeCard from './InformativeCard/InformativeCard.vue';

  export default {    
    name: 'App',
    data () {
      return {
        msg: 'Welcome to Hell Noise,  MF!'
      }
    },
    components: {Footer, InformativeCard}
  }
</script>

