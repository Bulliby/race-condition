import axios from 'axios'

export default class SetNumber {
    constructor() {
        this.counters = document.querySelectorAll('.js-counter');
    }

    setNumberFront() {
        console.log('number');
        return axios.get('http://back.race.com/get', {
        }).then((response) => {
            let count = response.data;
            console.log(count);
            this.counters.forEach((counter) => {
                counter.innerHTML = count;    
            });
        });
    }
}
