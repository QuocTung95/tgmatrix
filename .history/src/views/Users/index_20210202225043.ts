import { Component, Vue } from 'vue-property-decorator';
import UsersComponent from '@/components/Users/index.vue';

@Component({
    name: 'UsersView',
    components: {
        UsersComponent
    }
})
export default class UsersView extends Vue {
}

