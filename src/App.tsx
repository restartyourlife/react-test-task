import { Routes, Route } from 'react-router-dom'

/* Import pages */
import MainPage from './components/pages/MainPage'
import FirstPage from './components/pages/FirstPage'
import SecondPage from './components/pages/SecondPage'
import ThirdPage from './components/pages/ThirdPage'

/* Imports elements */
import Header from './components/elements/Header';

function App() {
    return (
        <div className="container-fluid pt-3">
            <Header />
            <Routes>
                <Route path="/" element={ <MainPage /> } />
                <Route path="/firstpage" element={ <FirstPage /> } />
                <Route path="/secondpage" element={ <SecondPage /> } />
                <Route path="/thirdpage" element={ <ThirdPage /> } />
            </Routes>
        </div>
    );
}

export default App;
