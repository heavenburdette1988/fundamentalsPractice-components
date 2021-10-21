import { usePoisons } from "./poisonsDataProvider.js";
import { poisonsList } from "./poisonsList.js";


const collectPoisons = usePoisons()

for (const Poisons of collectPoisons) {
    console.log(Poisons)
}

poisonsList()