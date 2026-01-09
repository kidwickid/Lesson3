const user = {
    name: "Alex",
    sayHiStandard: function() {
        setTimeout(function() {
            console.log(this.name)
        }, 1000)
    },

    sayHiArrow: function() {
        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    }
}

user.sayHiStandard()
user.sayHiArrow()
