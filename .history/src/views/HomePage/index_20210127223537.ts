import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/src/components/Sidebar'

@Component({
    name: 'Home',
    components: {
        SideBar
    }
})
export default class Home extends Vue {
}

