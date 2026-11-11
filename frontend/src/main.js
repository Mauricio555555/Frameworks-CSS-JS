import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img class="size-48 shadow-xl rounded-md" src="/public/album.jpg" alt="Logo" />
      </div>
      <div class="flex items-center md:items-start">
        <span>Hola soy un span</span>
        <span>Hola soy otro span</span>
        <span>Hola soy una lista de spans
          <ul>
            <li>Hola soy un span dentro de una lista</li>
            <li>Hola soy otro span dentro de una lista</li>
          </ul>
        </span>
      </div>
    </div>
`

setupCounter(document.querySelector('#counter'))
