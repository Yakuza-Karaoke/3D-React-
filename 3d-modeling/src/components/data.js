import demon from "../icons/3demon.png"
import detal from "../icons/detal.webp"
import frezer from "../icons/frezer.jpg"
import remont from "../icons/remont.jpg"
import scan from "../icons/scan.jpg"

import Pechat from "./content/pechat-content"
import Copy from "./content/copy-content"
import Frez from "./content/frez-content"


export default [
    {
        id: 0, 
        image: scan,
        figcaption: '3Д сканирование и реверс инженеринг',
        content: ''
    },
    {
        id: 1, 
        image: demon,
        figcaption: '3Д печать по готовым моделям',
        content: <Pechat />
    },
    {
        id: 2, 
        image: detal,
        figcaption: 'Восстановление пластиковых деталей по образцу',
        content: <Copy /> 
    },
    {
        id: 3, 
        image: frezer,
        figcaption: 'Фрезеровка по дереву',
        content: <Frez />
    },
    {
        id: 4, 
        image: remont,
        figcaption: 'Обслуживание и ремонт 3Д принтеров',
        content: ''
    },
    {
        id: 5, 
        image: scan,
        figcaption: '3Д сканирование и реверс инженеринг',
        content: ''
    },
    {
        id: 6, 
        image: demon,
        figcaption: '3Д печать по готовым моделям',
        content: <Pechat /> 
    }
]