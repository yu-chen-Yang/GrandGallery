<template>
	<div id="app">
		<homeHeader />
	</div>
</template>

<script>
	import homeHeader from './components/homepage/header.vue'
	export default {
		name: 'App',
		components: {
			homeHeader
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
