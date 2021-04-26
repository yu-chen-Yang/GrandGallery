<template>
  <div>
	<div id="app">
		<homeHeader/>
	</div>
  <middleIcon/>
  </div>
</template>

<script>
	import homeHeader from './components/homepage/header.vue'
  import middleIcon from './components/homepage/middleIcon.vue'
	export default {
		name: 'App',
		components: {middleIcon,
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
