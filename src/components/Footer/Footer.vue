<template>
    <div id='Footer'>
        <footer class="page-footer cyan darken-1 z-depth-4">
        <div class="container">
        </div>
        <div class="footer-copyright">
            <div class="container">
            © 2018 Copyright Text
            <a class="grey-text text-lighten-4 right">Version: {{version}}</a>
            </div>
        </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                version: version
            }
        }
    }
    import { version } from "../../../package.json";
    import './Footer.scss';
</script>
