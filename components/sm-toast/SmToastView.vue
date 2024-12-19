<template>
	<teleport to="#toast-root">
		<div
			v-if="store.toastList.length > 0"
			class="notification-container top-center h-[100px] w-[90%] sm:max-w-[600px]"
		>
			<transition-group name="show" appear>
				<sm-single-toast-view v-for="toast in store.toastList" :key="toast.id" :toast="toast" />
			</transition-group>
		</div>
	</teleport>
</template>

<script setup lang="ts">
import { useToastStore } from "@/components/sm-toast/SmToastStore";
import SmSingleToastView from "@/components/sm-toast/SmSingleToastView.vue";
import { watchEffect } from "vue";

const store = useToastStore();

watchEffect(() => {});
</script>

<style lang="scss" scoped>
.notification-container {
	font-size: 14px;
	box-sizing: border-box;
	position: fixed;
	z-index: 999999;
}
.top-center {
	top: 12px;
	left: 50%;
	transform: translateX(-50%);
	transition: transform 0.6s ease-in-out;
	// animation: toast-in-center 0.7s;
}

@keyframes toast-in-right {
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(0);
	}
}

@keyframes toast-in-left {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
}

@keyframes toast-in-center {
	from {
		transform: translateY(-100%);
	}
	to {
		transform: translateY(0);
	}
}
.show-enter-active {
	transition: all 0.3s ease-out;
}

.show-leave-active {
	transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.show-enter-from,
.show-leave-to {
	transform: translateY(-100%);
	opacity: 0;
}
</style>
