<template>
	<section>
		<template v-if="ok">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>
		<template v-else>
			<h1>Title</h1>
			<p>Paragraph 3</p>
			<p>Paragraph 4</p>
		</template>

		<h1 v-show="ok">Hello!</h1>

		<ul id="example-1">
			<li v-for="item in items" :class="item.message">
				{{ item.message }}
			</li>
		</ul>

		<ul>
			<template v-for="item in items">
				<li>{{ item.message }}</li>
				<li class="divider"></li>
			</template>
		</ul>
		<my-component></my-component>
	</section>

</template>

<script>
    import Vue from 'vue'
    Vue.component('my-component', {
        template: '<div>A custom component!</div>'
    })

	export default {
	    data(){
           return{
               ok : true,
               items: [
                   { message: 'Foo' },
                   { message: 'Bar' }
               ]
		   }
		},
	    mounted() {
            this.$http.get( 'gdal/qbz').then(response => {
                // get body data
                console.log(response.body);

            },response =>{

            })
		},
		computed : {
            isActive : function () {
				return true
            }
		}
	}

</script>

<style scoped>

</style>