import * as React from 'react';
import { Button, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { estilo } from './src/style/estilos';
import Icones from 'react-native-vector-icons/Ionicons';
import { Notification} from './src/componentes/NotificationService';

// Declaração de constantes
const notificador = Notification;

function LinkFace() {
  Linking.openURL('https://www.facebook.com/ines.rodrigues.5011')
}

function LinkInsta() {
  Linking.openURL('https://www.instagram.com/ines.rodrigues.5011')
}

function TelaSobre() {
  return (
    <View>
      <Text style={estilo.titulo1}>Informações úteis</Text>
      <ScrollView>
        <View style={estilo.telaInfo}>
          <View style={estilo.containerInfo}>
            <Text style={estilo.titulo2}>Prazo de entrega:</Text>
            <Text style={{ fontSize: 16, color: 'black', textAlign: 'justify', marginLeft: 10 }}>A combinar</Text>
          </View>
          <View style={estilo.containerInfo}>
            <Text style={estilo.titulo2}>Forma de Pagamento:</Text>
            <Text style={{ fontSize: 16, color: 'black', textAlign: 'justify', marginLeft: 10 }}>Dinheiro ou PIX</Text>
          </View>
          <View style={estilo.containerInfo}>
            <Text style={estilo.titulo2}>Encomendas:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Icones name='logo-whatsapp' size={50} color="green" style={{ margin: 5 }} />
              <Text style={estilo.telefone}>(55) 9 9926-0918</Text>
            </View>
          </View>
          <View style={estilo.containerInfo}>
            <Text style={estilo.titulo2}>Minhas Redes Sociais:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
            <TouchableOpacity onPress={LinkFace}>
              <Icones name='logo-facebook' size={50} color="black" style={{ margin: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={LinkInsta}>
              <Icones name='logo-instagram' size={50} color="black" style={{ margin: 5 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function TelaGaleria() {
  return (
    <View>
      <Text style={estilo.titulo1}>Galeria de Fotos</Text>
      <ScrollView>
        <View style={estilo.telaPrincipal}>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img01.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img02.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img03.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img04.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img05.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img06.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img07.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img08.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img09.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img10.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img11.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img12.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img13.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img14.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img15.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img16.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img17.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img18.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img19.jpg')}></Image>
          <Image style={estilo.imagemGaleriaRetrato} source={require('./src/img/img20.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img21.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img22.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img23.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img24.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img25.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img26.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img27.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img28.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img29.jpg')}></Image>
          <Image style={estilo.imagemGaleriaPaisagem} source={require('./src/img/img30.jpg')}></Image>
        </View>
      </ScrollView>
    </View>
  );
}

function TelaHome() {
  return (
    <View style={estilo.telaPrincipal}>
      <Image style={estilo.imagemHome} source={require('./src/img/preta_logo.png')} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 40 }}>
        <Icones name='logo-whatsapp' size={50} color="green" style={{ margin: 5 }} />
        <Text style={estilo.telefone}>(55) 9 9926-0918</Text>
      </View>
    </View>
  );
}

function TelaTerco({ navigation }) {
  return (
    <ScrollView>
      <View style={estilo.telaPrincipal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={estilo.imagemProdutos} source={require('./src/img/img01.jpg')}></Image>
          <Text style={estilo.preco}>R$ 30,00</Text>
        </View>
        <View>
          <Text style={estilo.textoConteudo}>Terço personalizado com 1 nome.</Text>
          <Text style={estilo.textoConteudo}>Contas de 8mm emborrachadas, feito com fio encerado, cruz e entremeio emborrachados ou em metal. Todos os materiais que utilizamos são reforçados e de excelente qualidade, o que possibilita uma maior durabilidade do produto, fazemos questão de priorizar a qualidade dos nossos produtos. O terço tem aproximadamente 40 cm.</Text>
          <Text style={estilo.textoConteudo}>ATENÇÃO: Para realizar o seu pedido, envie uma mensagem com o nome e a cor que deseja personalizar em cada terço.</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
          <Button title='Ir para Galeria de fotos'
            onPress={() => navigation.navigate('Galeria de fotos')} />
        </View>
      </View>
    </ScrollView>
  );
}

function TelaChaveiro({ navigation }) {
  return (
    <ScrollView>
      <View style={estilo.telaPrincipal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={estilo.imagemProdutos} source={require('./src/img/img20.jpg')}></Image>
          <Text style={estilo.preco}>R$ 10,00</Text>
        </View>
        <View>
          <Text style={estilo.textoConteudo}>Chaveiro personalizado com 1 nome.</Text>
          <Text style={estilo.textoConteudo}>Contas de 8mm emborrachadas, feito com fio encerado, acessórios a escolha do cliente. Todos os materiais que utilizamos são reforçados e de excelente qualidade, o que possibilita uma maior durabilidade do produto, fazemos questão de priorizar a qualidade dos nossos produtos. O chaveiro tem aproximadamente 10 cm.</Text>
          <Text style={estilo.textoConteudo}>ATENÇÃO: Para realizar o seu pedido, envie uma mensagem com o nome e a cor que deseja personalizar em cada chaveiro.</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10  }}>
          <Button title='Ir para Galeria de fotos'
            onPress={() => navigation.navigate('Galeria de fotos')} />
        </View>
      </View>
    </ScrollView>
  );
}

function TelaProdutos({ navigation }) {
  return (
    <ScrollView>
      <View style={estilo.telaPrincipal}>
        <Text style={estilo.titulo2}>Personalizados</Text>
        <View style={estilo.produtos}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Terço Personalizado')}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={estilo.imagemProdutos} source={require('./src/img/img01.jpg')}></Image>
                <Text style={{ fontSize: 16, color: 'black' }}>Terço Personalizado</Text>
                <Text style={estilo.preco}>R$ 30,00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Chaveiro Personalizado')}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={estilo.imagemProdutos} source={require('./src/img/img20.jpg')}></Image>
                <Text style={{ fontSize: 16, color: 'black' }}>Chaveiro Personalizado</Text>
                <Text style={estilo.preco}>R$ 10,00</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
          <Icones name='logo-whatsapp' size={50} color="green" style={{ margin: 5 }} />
          <Text style={estilo.telefone}>(55) 9 9926-0918</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const CategoriasStack = createNativeStackNavigator();

function TelaStackProdutos() {
  return (
    <CategoriasStack.Navigator screenOptions={{ headerShown: true, headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white', headerTitleStyle:{fontSize: 26, fontWeight: 'bold'} }}>
      <CategoriasStack.Screen name="Produtos" component={TelaProdutos}/>
      <CategoriasStack.Screen name="Terço Personalizado" component={TelaTerco} />
      <CategoriasStack.Screen name="Chaveiro Personalizado" component={TelaChaveiro} />
    </CategoriasStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  componentDidMount() {
    notificador.configurar()
    notificador.criarCanal()
    notificador.agendarNotificacoes()
  };
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false,  tabBarInactiveTintColor: 'white', tabBarStyle: {backgroundColor: 'black'} }}>
        <Tab.Screen name="Home" component={TelaHome} options={{ tabBarIcon: ({ color, size }) => (<Icones name='home-outline' color={color} size={size} />) }} />
        <Tab.Screen name="Produtos" component={TelaStackProdutos} options={{ tabBarIcon: ({ color, size }) => (<Icones name='gift-outline' color={color} size={size} />) }} />
        <Tab.Screen name="Galeria de fotos" component={TelaGaleria} options={{ tabBarIcon: ({ color, size }) => (<Icones name='images-outline' color={color} size={size} />) }} />
        <Tab.Screen name="Informações" component={TelaSobre} options={{ tabBarIcon: ({ color, size }) => (<Icones name='information-circle-outline' color={color} size={size} />) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
