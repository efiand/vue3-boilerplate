import cloneDeep from "clone-deep";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useStore = defineStore("store", () => {
	const state = reactive<{}>(cloneDeep({}));

	async function update(newState: {}) {
		Object.assign(state, cloneDeep(newState));
	}

	return { state, update };
});
