import SetNumber from './setNumber'
import axios from 'axios'

axios.defaults.withCredentials = true;
export default class Btns {
    constructor() {
        this.icos = document.querySelector('.icos');
        this.request = true;
        this.setNumber = new SetNumber();
    }

    initBtns() {
        this.icos.addEventListener('click', (event) => {
            if (this.request == false) {
                return;
            }
            this.request = false
            let target = event.target
            let data = target.dataset;
            let url;
            let id;
            if (data.action == 'add') {
                url = 'http://back.race.com/add'
                id = data.id1
            } else if (data.action == 'del') {
                url = 'http://back.race.com/del'
                id = data.id2
            } else {
                this.request = true;
                return;
            }
            axios.post(url, {
                id
            }).then(() => this.setNumber.setNumberFront())
            .then((response) => {
                if (data.id1) {
                    target.classList.add('hide');
                    target.nextElementSibling.classList.remove('hide');
                } else {
                    target.classList.add('hide');
                    target.previousElementSibling.classList.remove('hide');
                }
            }).finally(() => {
                this.request = true;
            });
        });
        /*
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
        */
    }
}
