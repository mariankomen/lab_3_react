import React, {useState} from 'react'

function App() {

    const [line, setLine] = useState(0.0001)
    const [color, setColor] = useState('blue')
    const [wid, setWid] = useState(1)
    const [polz, setPolz] = useState(1)


    //Побудова самої параболи через canvas
    const canvas = document.getElementById('canvas') //Гетаєм блок канваса який в нас в index.html файлі
    let ctx = canvas.getContext("2d");
    for (let i = -20; i < 20; i += line) {
        ctx.fillStyle = color;
        ctx.fillRect(250 + i * 10, 250 - Math.pow(i, 2), wid, polz);
    }
    //

    return (
        <div className="App">
            <h1>Lab 3 Lyzhychka Marian TP-44 :D</h1>
            <button
                onClick={(e) => {
                    setLine(0.0001)
                    setWid(1)
                    setColor('blue')
                    e.preventDefault()
                }}
            >Змінити на суцільну
            </button>
            <button
                onClick={(e) => {
                    setLine(1)
                    setColor('yellow')
                    e.preventDefault()
                }}
            >Змінити на переривчасту
            </button>
            <button
                onClick={() => setColor('black')}
            >Чорн
            </button>
            <p>Змінити товщину лінії: </p>
            <input id="typeinp"
                   type="range"
                   min="0"
                   max="25"
                   value={polz}
                   step="1"
                   onChange={(e) =>setPolz(e.target.value)}
            />
        </div>
    );
}

export default App;
