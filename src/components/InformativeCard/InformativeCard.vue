<template>
    <div id="InformativeCard">
        <div class="col s12 m7">
            <div class="card horizontal">
            <div class="card-image">
                <img :src="majorScale" class="img" >
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>{{description}}</p>
                    <AudioPlayer />
                </div>
                    <div class="card-action">
                    <a href="#">{{link}}</a>
                </div>
            </div>
            </div>
        </div>
  </div>    
</template>

<script>
import Gmajor from '../../assets/G-major.png';
import './InformativeCard.scss';
import AudioPlayer from '../AudioPlayer/AudioPlayer.vue';

export default {
    props: ['description', 'link', 'image'],
    data: () => {
        return{
            majorScale: Gmajor
        }
    },
    components: {AudioPlayer}
}
</script>

<style>

</style>
