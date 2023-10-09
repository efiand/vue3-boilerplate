import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "./IndexPage.vue";

export const routes = [
	{
		path: "/",
		name: "index",
		component: IndexPage,
	},
];

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
