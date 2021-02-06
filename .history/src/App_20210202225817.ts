import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/Sidebar/index.vue'
import Header from '@/components/Header/index.vue'

@Component({
    name: 'App',
    components: {
        SideBar,
        Header
    }
})
export default class App extends Vue {    
}

