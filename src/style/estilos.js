import { StyleSheet } from 'react-native'; 

  const estilo = StyleSheet.create({
    telaPrincipal: {
      backgroundColor: '#ffd700',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imagemHome: {
      width: 300,
      height: 300,  
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80
    },
    telefone: {
      margin: 5,
      fontFamily: 'sans-serif',
      fontSize: 26,
      fontWeight: 'bold',
      color: 'black'
    },
    titulo1: {
      backgroundColor: 'black',
      color: "white",
      fontFamily: 'sans-serif',
      fontSize: 26,
      fontWeight: 'bold',
      padding: 10
    },
    titulo2: {
      fontFamily: 'sans-serif',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      margin: 10
    },
    textoConteudo: {
      fontFamily: 'sans-serif',
      fontSize: 14,
      color: 'black',
      textAlign: 'justify',
      margin: 10
    },
    preco: {
      fontFamily: 'sans-serif',
      fontSize: 28,
      fontWeight: 'bold',
      color: '#007fff',
    },
    produtos: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
    },
    imagemProdutos: {
        width: 150,
        height: 250,
        margin: 10,
        borderRadius: 10
    },
    imagemGaleriaPaisagem: {
      margin: 20,
      borderRadius: 10,
      width: 350,
      height: 270
    },
    imagemGaleriaRetrato: {
      margin: 20,
      borderRadius: 10,
      width: 300,
      height: 400
    },
    telaInfo: {
      backgroundColor: '#ffd700'
    },
    containerInfo: {
      margin: 10
    },
  });
  // Para que nosso arquivo possa ser importado, temos que exportar ele 
export {estilo};