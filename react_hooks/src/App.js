
import './App.css';
import CustomHookOne from './components/customHook/CustomHookOne';
import UseCallbackOne from './components/useCallBack/UsecallbackOne';
import Contact from './components/useContext/Contact';
import Footer from './components/useContext/Footer';
import Profile from './components/useContext/Profile';
import UseContextOne from './components/useContext/UseContextOne';
import UseEffectClass from './components/useEffect/UseEffectClass';
import UseEffectDemo from './components/useEffect/UseEffectDemo';
import UseLayoutEffectOne from './components/useLayoutEffect/UseLayoutEffectOne';
import UseMemoOne from './components/useMemo/UseMemoOne';
import UseReducerOne from './components/useReducer/UseReducerOne';
import UseRefOne from './components/useRef/UseRefOne';
import UseRefThree from './components/useRef/UseRefThree';
import UseRefTwo from './components/useRef/UseRefTwo';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterFive from './components/useState/HookCounterFive';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterTwo from './components/useState/HookCounterTwo';
function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFive/> */}

      {/* <UseEffectDemo/>
      <UseEffectClass/> */}

      <UseRefOne/>
      <UseRefTwo/>
      <UseRefThree/>

      {/* <UseMemoOne/> */}
      
      {/* <UseCallbackOne/> */}

      {/* <UseContextOne/> */}
      {/* <Profile/>
      <Contact/>
      <Footer/> */}
      
      {/* <UseReducerOne/> */}

      {/* <UseLayoutEffectOne/> */}

      {/* <CustomHookOne/> */}
    </div>
  );
}

export default App;
