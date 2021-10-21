export const Poisons = (poisonTaco) => {
    return `
        <section class="fish card">
            <div class="poisonID">${poisonTaco.id}</div>
            <div class="poisonSpecies">${poisonTaco.species}</div>
            <div class="poisonCommonName">${poisonTaco.commonName}</div>
            <div class="poisonFatal">${poisonTaco.fatal}</div>
            <div class="poisonAntidote">${poisonTaco.antidote}</div>
        </section>
    `
}