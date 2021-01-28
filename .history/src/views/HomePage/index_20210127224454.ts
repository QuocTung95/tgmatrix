import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/Sidebar'

@Component({
    name: 'Home',
    components: {
        sideBar: SideBar
    }
})
export default class Home extends Vue {
}

