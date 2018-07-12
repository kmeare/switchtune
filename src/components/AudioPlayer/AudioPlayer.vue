<template>
    <div id='AudioPlayer'>
        <div class='click' v-on:click="playCmaj()"> Clickeame!! </div>
    </div>
</template>

<script>
import Tone from 'tone';
export default {
    mounted : () => {
    },
    methods: {
        
        playCmaj: () => {
            var synth = new Tone.Synth().toMaster();
            var myScale = ['C4','D4','E4','F4','G4','A4','B4','C5'];
            var pattern = new Tone.Pattern(function(time, note){
                synth.triggerAttackRelease(note, 0.25);
            }, ["C4", "E4", "G4", "A4"]);
            //the order of the notes passed in depends on the pattern
            pattern.start(0);

            Tone.Transport.start();
        }
    }
}
</script>
