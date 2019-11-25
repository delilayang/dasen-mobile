/* tslint:disable */
import { injectable, Container } from 'inversify'
import { Provide, Inject } from 'vue-inversify-decorator'
import Vue from 'vue'
import Component from 'vue-class-component'

@injectable()
class Ninja {
public fight() {
    return 'cut!'
}
}

const container = new Container()
container.bind<Ninja>(Ninja).toSelf()

@Component({
template: `
    <p>{{ ninja.fight() }}</p>
`
})
class Child extends Vue {
@Inject() ninja!: Ninja;
}

@Component({
components: {
    Child
},
template: `
    <child></child>
`
})
@Provide(container)
class App extends Vue {}

const vm = new App().$mount()
