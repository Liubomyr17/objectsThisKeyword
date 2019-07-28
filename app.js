// this

const john = {
    name: 'john',
    lastName: 'anderson',
    fullName: function () {
        console.log(`hello my full name ${this.name} ${this.lastName}`);

    }
};

john.fullName();

const bob = {
    name: 'bob',
    lastName: 'jordan',
    fullName: function () {
        console.log(`hello my full name ${this.name} ${this.lastName}`);
    }
};

bob.fullName();

console.log(this);

// window.name = "window";
// window.lastName = "cooper";

this.name = "window";
this.lastName = "cooper";

const fullName = function () {
    console.log(`hello my full name ${this.name} ${this.lastName}`);
}

fullName();