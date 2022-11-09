$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
const { createApp } = Vue
          
            createApp({
              data() {
                  return {
                      products: []
                  }
              },
              mounted () {
                  axios
                  .get('products.json')
                  .then(response => (this.products = response.data.products))
              } 
            }).mount('#app')