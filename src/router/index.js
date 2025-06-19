import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ParentComponent from '@/views/ParentComponent.vue';
import ParentCheckbox from '@/views/ParentCheckbox.vue';
import ParentRadio from '@/views/ParentRadio.vue';
import ParentCheckboxUi from '@/views/ParentCheckboxUi.vue';
import ParentRadioUi from '@/views/ParentRadioUi.vue';
import ParentRadioUi4 from '@/views/ParentRadioUi4.vue';
import ParentCheckboxUi4 from '@/views/ParentCheckboxUi4.vue';
import TabMenuView from '@/views/TabMenuView.vue';
import AccView from '@/views/AccView.vue';
import AccView2 from '@/views/AccView2.vue';
import Popup from '@/views/Popup.vue';
import button from '@/views/button.vue';
import swiper from '@/views/swiper.vue';
//import RadioList from '@/views/RadioList.vue'; // 작동안됨
import NewCheckBox from '@/views/NewCheckBox.vue'; 
import NewCheckRadio from '@/views/NewCheckRadio.vue'; 
import Main from '@/views/Main.vue'; 
import Sub from '@/views/Sub.vue'; 




const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/parent-vue',
    component: ParentComponent,
  },
  {
    path: '/parent-checkbox',
    component: ParentCheckbox,
  },
  {
    path: '/parent-radio',
    component: ParentRadio,
  },
  {
    path: '/parent-checkbox-ui',
    component: ParentCheckboxUi,
  },
  {
    path: '/parent-radio-ui',
    component: ParentRadioUi,
  },
  {
    path: '/radio-ui4',
    component: ParentRadioUi4,
  },
  {
    path: '/checkbox-ui4',
    component: ParentCheckboxUi4,
  },
  {
    path: '/tab',
    component: TabMenuView,
  },
  {
    path: '/accview',
    component: AccView,
  },
  {
    path: '/accview2',
    component: AccView2,
  },
  {
    path: '/layer',
    component:Popup,
  },
  {
    path: '/button',
    component:button,
  },
  {
    path: '/swiper',
    component:swiper,
  },
  /*
  {
    path: '/radio-list',
    component:RadioList,
  },
  */
  {
    path: '/new-checkbox',
    component:NewCheckBox,
  },
  {
    path: '/new-check-radio',
    component:NewCheckRadio,
  },
  {
    path: '/Main',
    component:Main,
  },
  {
    path: '/Sub',
    component:Sub,
  },
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});

export default router;
