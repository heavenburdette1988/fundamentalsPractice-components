import { Poisons } from "./poisons.js";
import { usePoisons } from "./poisonsDataProvider.js";

export const poisonsList = () => {
    const contentElement = document.querySelector(".poisons")
    const poison = usePoisons()


let poisonHTMLRep =""
    for(const poisonObject of poison) {

        poisonHTMLRep += Poisons(poisonObject)
    }
            contentElement.innerHTML += `${poisonHTMLRep}`
        
    
}
