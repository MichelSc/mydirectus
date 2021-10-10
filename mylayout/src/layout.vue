<template>
	<div>
		<p>Name2: {{ name }}</p>
		<p>Collection2: {{ collection }}</p>
		<p>Collection2 typeof: {{ typeof collection }}</p>
		<p>Selection2: {{ selection }}</p>
		<p>Selection2 typeof: {{ typeof selection }}</p>
		<p>Filters2: {{ filters }}</p>
		<p>Filters2 typeof: {{ typeof filters }}</p>
		<p>Filters2 nof: {{ filters.length }}</p>
		<p>SearchQuery2: {{ search-query }}</p>
		<p>SearchQuery2 typeof: {{ typeof search-query }}</p>
		<p>LayoutOptions2: {{ layout-options }}</p>
		<p>LayoutOptions2 typeof: {{ typeof layout-options }}</p>
		<p>LayoutQuery2: {{ layout-query }}</p>
		<p>LayoutQuery2 typeof: {{ typeof layout-query }}</p>
		<p>michel: {{ michel }}</p>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
    props: [ 
        "collection", 
        "name", 
        "filters", 
        "selection",
        "search-query",
        "layout-options",
        "layout-query",
        "michel"
    ]
    /*{
		collection: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
        }
	}*/,
};
</script> 
