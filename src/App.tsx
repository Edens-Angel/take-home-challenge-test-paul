import React, { useState } from 'react'
import './App.css';
import { Page } from './components/Page';
import { useItem } from './service/hero.service'
import { useGetRandomPage } from './util/util';

function App() {
    const baseUrl = 'https://anapioficeandfire.com/api' 
    const startUrl = 'https://anapioficeandfire.com/api/characters/583'
    const [activeUrl, setActiveUrl] = useState<string>(startUrl)
    const item = useItem(activeUrl)
    const randomPage = useGetRandomPage(baseUrl)


    return (
        <div className="App">
                <div className="d-flex flex-column">
                    <button onClick={() => setActiveUrl(startUrl)} className='btn btn-secondary'>Home</button>
                    <button onClick={() => randomPage.then(data => setActiveUrl(data))} className='btn btn-success'>Random page</button>
                    <div className="d-flex align-items-center">
                    </div>
                </div>
            <div className="container">
                {item ? <Page  item={item} selectActive={setActiveUrl}/> : <div>spinner</div>}
            </div>
        </div>
    );
}

export default App;
