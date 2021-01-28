import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/Sidebar/index.vue'

@Component({
    name: 'Index',
    components: {
        SideBar
    }
})
export default class Index extends Vue {
}

