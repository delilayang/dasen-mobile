import { Vue } from 'vue-property-decorator';
import { injectable } from 'inversify';

@injectable()
export default class GameService {

    // reactive data
    data = new Vue({
        data() {
            return {
                aaa: 'abc'
            };
        }
    });

    constructor() {
        // console.log('created!');
        setInterval(() => {
            this.data.aaa += 'a';
        }, 500);
    }

    myMethod() {
        // this._data = {};
    }
}
