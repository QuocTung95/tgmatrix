import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/Sidebar/index.vue'

@Component({
    name: 'App',
    components: {
        SideBar
    }
})
export default class App extends Vue {
}

