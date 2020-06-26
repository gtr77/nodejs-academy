const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList () {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList();

// DON'T FORGET TO USE ----------> NODEMON
// nodemon arrow-function.js NODEMON ALLOW US TO WORK, SAVE AND SEE THE INFORMATION AT THE MOMENT