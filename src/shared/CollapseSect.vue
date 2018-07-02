<template>
	<div>
		<div class="header">
			<span v-if="open" @click="open = !open">{{titleOpen}} Collapse &#x25B2;</span>
			<span v-if="!open" @click="open = !open">{{titleClosed}} Expand &#x25BC;</span>
		</div>
		<slot v-if="open">
		<!-- injected content here -->
			<div>No Content Was Wrapped! (this is component filler)</div>
		</slot>
	</div>
</template>

<script>
export default {
	name: "CollapseSect"
	,data(){
		return {
			open: true
		}
	}
	,props: {
		titleOpen: {type: String, required: true}
		,titleClosed: {type: String, required: true}
	}
}
</script>

<style scoped>
	.header{
		text-align: right;
		padding: 3px;
		background-color: #bbb;
		cursor: pointer;
	}
</style>
