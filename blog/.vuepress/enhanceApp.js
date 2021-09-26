import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default ({
					Vue,
					options,
					router,
					siteData
				}) => {
	Vue.use(BootstrapVue);
	Vue.use(IconsPlugin);
}