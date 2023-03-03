import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    'Faça sempre o seu melhor!',
    'E acredite que o melhor possa ser feito!',
    'Não espere, ponha em prática!',
    'Mesmo que pareça difícil, não pare!',
    'Só trabalhando é possível trilhar o caminho!',
    'Tenha coragem!',
    'Não espere que as respostas caiam do céu!',
    'Acredite em milagres, mas não dependa deles.',
    'Não seja vítima das dificuldades, tente ultrapassá-las!',
    'Quando você vive o nós, o seu eu é recompensado.',
    'Os problemas são oportunidades para se mostrar o que sabe.',
    'Se me fazes algo por amor, amém. Mas se faz por espera algo de mim, isto não é amor, é troca.',
    'Desafios nos tornam mais fortes e resilientes, não desista!',
    'É em meio a dificuldade que se encontra a oportunidade.',
    'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
    'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer',
    'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.',
    'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
    'Tente de novo. Fracasse de novo. Mas fracasse melhor.',
    'Muitos questionam qual a frase motivacional de hoje? Depois de ler não fazem nada!',
    'O sucesso não tem a ver com quanto dinheiro você ganha, mas com a diferença que você faz na vida de outras pessoas.',
    'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
    'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.',
    'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
    'Faça, porque se você não fizer, em breve, o resto será silêncio.',
    'O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido.',
    'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
    'Cada cliente é como se fosse primeiro e único.',
    'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
    'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer',
    'É parte da cura o desejo de ser curado.',
    'Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos.',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
  ]


  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    // console.log(frases[numeroAleatorio])
    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciar() {
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
  }

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrases}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrases: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;
