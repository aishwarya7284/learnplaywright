class person {
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getchild1() {
        return this.#child1;
    }

    setchild1(new_name) {
        this.#child1 = new_name;
    }
}

let p = new person("Aish", "sony", "abc");
console.log(p.getchild1());
console.log(p.name);

