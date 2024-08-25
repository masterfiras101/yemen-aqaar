import { createRouter, createWebHistory } from 'vue-router'


import DefaultLayout from '@/views/layouts/DefaultLayout.vue';

import SignuPageView from '@/views/Pages/SignuPageView.vue';
import LoginPageView from '@/views/Pages/LoginPageView.vue';
import AccountPageView from '@/views/Pages/AccountPageView.vue';
import SearchPageView from '@/views/Pages/SearchPageView.vue';
import ServicesPageView from '@/views/Pages/ServicesPageView.vue';
import ChatsPageView from '@/views/Pages/ChatsPageView.vue';
import RealEstateCreateView from '@/views/Pages/RealEstate/RealEstateCreateView.vue';
import UsersAdminView from '@/views/Pages/AdminPages/UsersAdminView.vue';
import UsersAdminEditView from '@/views/Pages/AdminPages/Edit/UsersAdminEditView.vue';

const routes = [
  {
    path: "/",
    name: "index",
    component: DefaultLayout,
    meta: {
      title: "Hellow Page",
    },
  },
  {
    path: "/signup",
    name: "signupview",
    component: SignuPageView,
    meta: {
      title: "Signup Page",
    },
  },
  
  {
    path: "/login",
    name: "loginview",
    component: LoginPageView,
    meta: {
      title: "Login Page",
    },
  },
  {
    path: "/account-page",
    name: "accountpageview",
    component: AccountPageView,
    meta: {
      title: "Account Page",
    },
  },
  {
    path: "/search-page",
    name: "searchpageview",
    component: SearchPageView,
    meta: {
      title: "Search Page",
    },
  },
  {
    path: "/services-page",
    name: "servicespageview",
    component: ServicesPageView,
    meta: {
      title: "Services Page",
    },
  },
  {
    path: "/real-estate-create",
    name: "realestatecreateview",
    component: RealEstateCreateView,
    meta: {
      title: "Real Estate  Create Page",
    },
  },
  {
    path: "/chats-page",
    name: "chatspage",
    component: ChatsPageView,
    meta: {
      title: "Chats Page",
    },
  },
  {
    path: "/admin/users",
    name: "adminusers",
    component: UsersAdminView,
    meta: {
      title: "Users Admin  Page",
    },
  },
  {
    path: "/admin/users/users-edit/:id",
    name: "adminuserseditview",
    component: UsersAdminEditView,
    meta: {
      title: "Users Admin Edit Page",
    },
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 } 
  }
})

router.beforeEach((to, from, next) => {
  document.title = `Yemen Aqaar ${to.meta.title} | Application`
  next()
})

export default router