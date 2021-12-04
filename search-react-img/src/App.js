import React, {useState} from 'react';
import './App.css';
import Header from "./components/head/Header";


const url = 'https://pixabay.com/api/';
const api_key = '19888943-73e29b7aeafc5e2ada6047ed8';

function App() {
    const [searchValue, setSearchValue] = useState('');
    // const [pages, setPages] = useState(0);
    const [images, setImages] = useState([]);

    const searchImages = async (text) => {
        if(text.trim() !== ""){
            let response = await fetch(`${url}?key=${api_key}&q=${text}`);
            if (response.ok) {
                let json = await response.json();
                console.log(json);
                setImages(json.hits);
            } else {
                alert("Ошибка HTTP: " + response.status);
            }

        }
    };
    const setInpValue = (event) => {
        return setSearchValue(event.target.value);
    };
    const submitForm = (event) => {
        event.preventDefault();
        searchImages(searchValue);
        setSearchValue('');
    };
    return (
        <div className="App">
            <Header inpValue={searchValue} submitForm={submitForm} setInpValue={setInpValue}/>
            <main className="main">
                {
                    images &&
                        images.map(image=>{
                           return <img key={image.id}
                                   src={image.webformatURL}
                                 alt={image.tags}
                            />
                        })
                }
            </main>
        </div>
    );
}

export default App;
