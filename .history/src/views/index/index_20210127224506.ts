import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/Sidebar/index.vue'

@Component({
    name: 'Home',
    components: {
        SideBar
    }
})
export default class Home extends Vue {
}

