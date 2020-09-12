import SetNumber from './setNumber'
import axios from 'axios'

axios.defaults.withCredentials = true;
export default class Btns {
    constructor() {
        this.add = document.querySelectorAll('.add-ico');
        this.del = document.querySelectorAll('.del-ico');
        this.request = true;
        this.setNumber = new SetNumber();
    }

    initBtns() {
        this.add.forEach((el) => {
            el.addEventListener('click', (event) => {
                if (this.request == false) {
                    return;
                }
                this.request = false
                let target = event.target
                axios.post('http://back.race.com/add', {
                    id: target.dataset.id1,
                }).then(() => this.setNumber.setNumberFront())
                .then((response) => {
                    target.classList.add('hide');
                    el.nextElementSibling.classList.remove('hide');
                }).finally(() => {
                    this.request = true;
                });
            })
        });
        this.del.forEach((el) => {
            el.addEventListener('click', (event) => {
                if (this.request == false) {
                    return;
                }
                this.request = false
                let target = event.target
                axios.post('http://back.race.com/del', {
                    id: target.dataset.id2,
                }).then(() => this.setNumber.setNumberFront())
                .then((response) => {
                    target.classList.add('hide');
                    el.previousElementSibling.classList.remove('hide');
                }).finally(() => {
                    this.request = true;
                });
            })
        });
    }
}
