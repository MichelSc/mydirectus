<template>
	<div>
		<p>Name2: {{ name }}</p>
		<p>Collection2: {{ collection }}</p>
		<p>Collection2 typeof: {{ typeof collection }}</p>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
    props: [ "collection", "name" ]
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
