<template>
  <div>
	<div id="app">
		<homeHeader/>
	</div>
  <middleIcon/>
    <preview/>
  </div>
</template>

<script>
	import homeHeader from './components/homepage/header.vue'
  import middleIcon from './components/homepage/middleIcon.vue'
  import preview from "./components/homepage/preview";
	export default {
		name: 'App',
		components: {middleIcon,
      homeHeader,
      // eslint-disable-next-line vue/no-unused-components
      preview
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
