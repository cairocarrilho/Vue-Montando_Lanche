options = {

  el: '#app',
  data:{
    inputTipoPao: '',
    tipoSaladas: [],
    tipoMolho:[],
    inputHamburguer:'',
    etapa: 1, // valor atribuido a etapa e irá criar uma condição no HTML de v-if='etapa === 1'
    inputNome: '',
    inputEndereco: '',
    novoPedidoAtualizado: ''
  },
  methods:{
    // criando uma funcao para que se a condição na
    fazerPedido(){
      if(this.inputTipoPao && this.inputHamburguer){
          this.etapa = 2
      }else {
        alert ('Você precisa selecionar no mínimo um pão e um hambúrguer')
      }
    },

    ConfrimarPedido(){
      if(this.inputNome && this.inputEndereco ){
        this.etapa = 3

        // realizar uma atualização da pagina caso nao tomar uma ação em determinado tempo 

       this.novoPedidoAtualizado = setTimeout( ()=> this.NovoPedido(), 8000)

      }else {
        alert ('Você precisa informar o seu nome e endereço')
      }
    },
    NovoPedido(){
      this.etapa =1,
      this.inputTipoPao = '',
      this.tipoSaladas = [],
      this.tipoMolho =[],
      this.inputHamburguer ='',
      this.inputNome = '',
      this.inputEndereco = ''
     
    }
  },
  computed:{
    pao(){
      switch(this.inputTipoPao){
        case 'gergilim':
          return ['assets/imagens/pao_gergelim_superior.png','assets/imagens/pao_gergelim_inferior.png'];

        case 'australiano':
          return ['assets/imagens/pao_australiano_superior.png','assets/imagens/pao_australiano_inferior.png'];
        
        case 'italiano':
          return ['assets/imagens/pao_gergelim_superior.png','assets/imagens/pao_australiano_inferior.png'];

          default:
            return ['assets/imagens/padrao/pao_superior.png','assets/imagens/padrao/pao_inferior.png']
      }
      
    },
    alface(){
      // usando o metodo includes => para verificar se dentro do array se existe a entrada alface(value='alface')
      if(this.tipoSaladas.includes('alface')){
        return 'assets/imagens/alface.png'
      }; 
    
      return ['assets/imagens/padrao/alface.png',]
    },
    tomate(){
        // usando o metodo includes => para verificar se dentro do array se existe a entrada alface(value='alface')
        if(this.tipoSaladas.includes('tomate')){
          return 'assets/imagens/tomate.png'
        }; 
      
        return ['assets/imagens/padrao/tomate.png',]
    },
    abacaxi(){
        // usando o metodo includes => para verificar se dentro do array se existe a entrada alface(value='alface')
        if(this.tipoSaladas.includes('abacaxi')){
          return 'assets/imagens/abacaxi.png'
        }; 
      
        return ['assets/imagens/padrao/abacaxi.png',]
    },
    ketchup(){
      if(this.tipoMolho.includes('ketchup')){
        return 'assets/imagens/ketchup.png'
      }
      return 'assets/imagens/padrao/molho.png'
    },
    maionese(){
      if(this.tipoMolho.includes('maionese')){
        return 'assets/imagens/maionese.png'
      }
      return 'assets/imagens/padrao/molho.png'
    },
    mostarda(){
      if(this.tipoMolho.includes('mostarda')){
        return 'assets/imagens/mostarda.png'
      }
      return 'assets/imagens/padrao/molho.png'
    },
    hamburguer(){
      switch(this.inputHamburguer){
        case 'bovino':
          return ['assets/imagens/bovino.png'];
        case 'frango':
          return ['assets/imagens/frango.png'];
        case 'soja':
          return ['assets/imagens/soja.png'];

        default:
          return 'assets/imagens/padrao/hamburguer.png';
      }
    }
  
  },
  watch:{
    etapa(novoValor){
      if(novoValor == 1){
        clearTimeout(this.novoPedidoAtualizado)
      }
    }
  }
}

const vm = new Vue(options);