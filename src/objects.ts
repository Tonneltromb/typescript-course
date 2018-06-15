type User = {
    name: string,
    age: number,
    getName: ()=> string,
    job?: string // необязательный параметр
}

let user1: User = {
    name: "Yuri",
    age: 25,
    getName(): string {
        return this.name;
    }
};

console.log(user1.getName());