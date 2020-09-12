import axios from 'axios'

export default class SetNumber {
    constructor() {
        this.counters = document.querySelectorAll('.js-counter');
    }

    setNumberFront() {
        return axios.get('http://back.race.com/get', {
        }).then((response) => {
            let count = response.data;
            this.counters.forEach((counter) => {
                counter.innerHTML = count;    
            });
        });
    }
}
