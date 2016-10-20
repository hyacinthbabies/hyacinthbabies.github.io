export default class Study {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        return `我是${this.name},这是es6的实验${this.age}，以及webpack的自动刷新`;
    }
}
