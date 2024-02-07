
import './App.css';
import ComponentApp from './components/Components/ComponentApp';
import AdvApp from './components/Props/AdvanceProps/AdvApp';
import BasicPropsApp from './components/Props/BasicProps/BasicPropsApp';
import EventApp from './components/Props/EventProps/EventApp';
import StylesApp from './components/Props/StylesProps/StylesApp';
import TypingPropsApp from './components/Props/TypingProps/TypingPropsApp';
import ContextApp from './components/UseContextHooks/ContextApp';
import ReducerApp from './components/UseReducerHooks/ReducerApp';
import RefApp from './components/UseRef/RefApp';
import LoggedApp from './components/UseStateHooks/UseState/LoggedApp';

function App() {
  return (
    <div className="App">
      <TypingPropsApp />
      <BasicPropsApp />
      <AdvApp/>
      <EventApp/>
      <StylesApp/>
      <LoggedApp/>
      <ReducerApp/>
      <ContextApp/>
      <RefApp/>
      <ComponentApp/>
    </div>
  );
}

export default App;
