var app = new Vue({
    el: '#app',
    data:
     {
      url : 'https://cbtis169.net/apiServer/usuarios/',
     usuarios: [] ,
    }, //fin de data
    mounted(){
      console.log("Ejecutando Mounted");   
      this.verUsuarios();         
    }, //fin de mounted
    methods:{
      verUsuarios: async function()
	{    
   await axios.get(this.url).then((response) =>{
   const results = response.data;
   this.usarios = results.usuarios;
   console.log(this.usuarios);
   console.log("verUSuarios Ejecutando");
   })   
    	}, //fin de verUsuarios 
         
    } // fin de methods  
}) //fin de new Vue