class AppUser {
    name: string; // если модификатор не указан - используется public
    private age: number;
    protected isOnline: boolean; // доступен наследникам, но недоступен экземплярам
    constructor(name: string, age: number, isOnline: boolean) {
        this.name = name;
        this.age = age;
        this.isOnline = isOnline;
    }
}

// более короткий аналог
class AppUser1 {
    constructor(
        public name: string,
        private age: number,
        protected isOnline: boolean) {}
}