import Titulo from './Components/Titulo'
import Title from './Components/Title'
import Texto from './Components/Texto'
import UpperCase from './Components/UpperCase'
import CapsLock from './Components/CapsLock'
import Tick from './Components/Tick'
import Card from './Components/Card'
import Lista from './Components/Lista'
import OutraLista from './Components/OutraLista'
// import contador from './Components/Contador'
// import CountClick from './Components/CountClick'

function App() {
  return (
    <div>
      <Titulo/>
      <Title text="Meu texto que veio da nossa props - propriedade!"/>     
      <Texto>Meu texto que veio da Children - minha querida criança</Texto>      
      <UpperCase texto="Aqui pode ser qualquer texto escrito com letra minúscula - irá transformar em letras maiúsculas "/>
      <CapsLock>Um texto com referência a Children e que fica tudo em letra maiúscula </CapsLock>
      <Tick/>
      <Card/>
      <Lista/>
      <OutraLista/>
      {/* <contador/>
      <countclick/> */}

    </div>   

  );
}
  
export default App