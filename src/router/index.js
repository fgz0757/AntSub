import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: ()=>import("../views/Login.vue"),
  },
  {
    path:"/home",
    name:"home",
    redirect:"/1",
    component:HomeView,
    children:[
      {
        path:"/1",
        component:()=>import("../components/home.vue")
      },
      {
        path:"/2",
        component:()=>import("../components/table.vue")
      },
      {
        path:"/3",
        component:()=>import("../components/tabPage.vue")
      },
      {
        path:"/5",
        component:()=>import("../components/formPage.vue")
      },
      {
        path:"/6",
        component:()=>import("../components/richPage.vue")
      },
      {
        path:"/7",
        component:()=>import("../components/markdownPage.vue")
      },
      {
        path:"/8",
        component:()=>import("../components/filePage.vue")
      },
      
      {
        path:"/9",
        component:()=>import("../components/iconsPage.vue")
      },
      {
        path:"/10",
        component:()=>import("../components/EchartPage.vue")
      },{
        path:"/11",
        component:()=>import("../components/drgglebalList.vue")
      },
      {
        path:"/12",
        component:()=>import("../components/drgglebalAlert.vue")
      },
      {
        path:"/13",
        component:()=>import("../components/langPage.vue")
      },
      {
        path:"/14",
        component:()=>import("../components/permissionPage.vue")
      },
      {
        path:"/15",
        component:()=>import("../components/404Page.vue")
      },
      {
        path:"/16",
        component:()=>import("../components/authorPage.vue")
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
