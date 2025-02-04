import { View, StyleSheet, Text, FlatList, Pressable, Image } from "react-native"
import Memoria from "./Memoria"
import AsyncStorage from '@react-native-async-storage/async-storage'; //npx expo install @react-native-async-storage/async-storage

const PROJETOS = [
    {id: 1, caminho: "/app-banco", nome: "Banco", imagem: "https://www.meioemensagem.com.br/wp-content/uploads/2018/03/Santander_NovaMarca_575.png", data: "02/08/2024"},
    {id: 2, caminho: "/calculadora", nome: "Calculadora", imagem: "https://www.lojaellos.com.br/img/5660/produtos/800/82bf414cbbb782b40a4fafaea3850b95.jpg", data: "02/08/2024"},
    {id: 3, caminho: "/calculadora-incompleta", nome: "Calculadora Simples", imagem: "https://images.tcdn.com.br/img/img_prod/1140357/calculadora_de_mesa_bazze_12_digitos_b3562_3783_1_b1f668f74aa134c0a0003f945dda5df9.jpg", data: "02/08/2024"},
    {id: 4, caminho: "/pokemon-lista", nome: "Pokemon", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png", data: "02/08/2024"},
    {id: 5, caminho: "/splash-screen", nome: "Splash Screen", imagem: "https://static-assets.bamgrid.com/product/disneyplus/images/share-default.8bf3102623e935e7bc126df36b956b98.jpg", data: "02/08/2024"},
    {id: 6, caminho: "/telaLogin", nome: "Tela de Login", imagem: "https://img.uxcel.com/tags/login-1698251086462-2x.jpg", data: "02/08/2024"},
    {id: 7, caminho: "/lista-tarefa", nome: "Lista de Tarefas", imagem: "https://grupos.moodle.ufsc.br/pluginfile.php/997967/mod_book/chapter/2616/tarefa.png", data: "02/08/2024"},
    {id: 8, caminho: "/iFome", nome: "iFome", imagem: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f2/90/95/f29095f8-1fea-edd1-6df3-bb79a2f5675e/AppIcon-0-0-1x_U007epad-0-10-0-85-220.png/1200x630wa.png", data: "23/09/2024"},
    {id: 9, caminho: "/imagePicker", nome: "Acessando Galeria", imagem: "https://cdn-icons-png.flaticon.com/512/1590/1590898.png", data: "23/09/2024"},
    {id: 10, caminho: "/imagemCamera", nome: "Acessando Câmera", imagem: "https://cdn-icons-png.flaticon.com/512/5904/5904483.png", data: "03/10/2024"},
    {id: 11, caminho: "/memorias", nome: "Memórias", imagem: "https://i.pinimg.com/originals/c7/a8/f9/c7a8f9130235a48fc5bae23b91d6e7c5.png", data: "10/10/2024"},
]

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lista: {
        maxHeight: "95%",
        width: "90%",
        gap: 10,
        flex: 1,

    }
})

export default TelaMemorias = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={PROJETOS}
                renderItem={({ item }) => <Memoria imagem={item.imagem} caminho={item.caminho} nome={item.nome} data={item.data} />}
                keyExtractor={item => item.id}
                style={styles.lista}
            />
            <Pressable onPress={() => navigation.navigate('Adicionar Memória')}>
                <Image source={{uri: "https://cdn.icon-icons.com/icons2/1391/PNG/512/add_96266.png"}} style={{width: 60, height:60, margin: 10}}/> 
            </Pressable>

        </View>
    )
}