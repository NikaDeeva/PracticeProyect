"use strict"
const BASE_URL = 'https://restcountries.com/v3.1';
async function findByRegion(value){
    const r = await fetch(`${BASE_URL}/region/${value}`);
    const data = await r.json();
    console.log(data);
    await render(data);
}
document.querySelector('#btn').addEventListener('click', () => {
    const regionInput = document.querySelector('#regionInput').value;
    findByRegion(regionInput.toLowerCase());
});
async function render(countries) {
    document.querySelector('.countries').innerHTML = '';
    const markUp = countries.map(country => {
        return `<div class="country">
            <h2>${country.name}</h2>
        </div>`
    }).join('');
    document.querySelector('.countries').insertAdjacentHTML('beforeend', markUp);
}