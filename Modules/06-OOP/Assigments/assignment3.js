//// I have add few functionality into the app
// - User can view the details of the an event in the schedule list
// - Validation for the input (if there is no input value, the app will yell at you)
// - When editing the event, user can type 'same' to keep the same info as before 

const prompt = require('prompt-sync')();

class calendarApp {
    constructor(){
        this.startApp()
    }

    _inUsed = true
    _idCount = 1
    _schedulesList = {
        // '1' : { date: '31/8/2022', title: 'Merdeka Day'}
    }
    _ID
    
    startApp(){
        while(this._inUsed){
            this.displayApp()
            this.controller(this.num)
        }
    }   

    controller(num){
        switch(num){
            case '1' : this.viewList() ;break
            case '2' : this.addEvent() ;break
            case '3' : this.editEvent() ;break
            case '4' : this.deleteEvent() ;break
            case '5' : this.quitApp() ;break
            default : console.log('Invalid Selection')
        }
    }

    //Validate the event id of the list 
    validateID(id){
        this._ID = this._schedulesList[id] ?  id : null
        if(!this._ID) return console.log('Invalid ID')
    }

    //Validate different input
    validateInput(evt, msg1, msg2){
        let repeat = 0
        while(!evt && repeat < 3){
            repeat= repeat + 1
            console.log(` ${msg1} 💢 ${repeat}`)
            evt = prompt(`${msg2}`)
        }
        return evt
    }

    displayApp(){
        console.log((`
            -------- Calendar APP --------
            What would you like to do?
            1. View my schedules
            2. Add new event
            3. Edit an event
            4. Delete a todo
            5. Quit app
        `).split("\n")
          .map(s => s.trim())
          .join("\n")
        )
        this.num = prompt('Enter(1/2/3/4/5): ')
    }

    viewList(){
        let obj = Object.entries(this._schedulesList)
         if(!obj.length) {
            console.log('There\'s no event in the schedule')
        } else {
            obj.forEach(([id, evt]) => {
                console.log(`#${id}. ${evt.formattedDate} - ${evt.title}`) 
            })
            this.viewEventDetails()
        }
    }

    // Implement a new option whether the user wants to view detail of an event when viewing the list
    viewEventDetails(){
        const proceed = ['yes','y','ok']
        let ask = prompt('Do you want to view event details?(y/n) ')

        if(!proceed.includes(ask.toLowerCase())) return

        let obj = Object.entries(this._schedulesList)
        let id = prompt('Enter the event id that you want to view: ')
        this.validateID(id)
        if(!this._ID) return
        let selectedEvt = obj.find(([i,_]) => i ==this._ID)
        console.log((`
            evtID: ${selectedEvt[0]},
            evtName: ${selectedEvt[1].title}
            evtDate: ${selectedEvt[1].formattedDate}
            createdTime: ${selectedEvt[1]._createdTime}
            author: ${this.author}
        `).split("\n")
        .map(s => s.trim())
        .join("\n"))
    }

    addEvent(){
        console.log(`If you don't want to add event, kindly press 'ENTER' key 3 times.`)
        //Validate title input
        let evtTitle = prompt('Please write a title for the event: ')
        evtTitle = this.validateInput(evtTitle, 'Oops! Please write something..','Please write a title for the event: ');
        if(!evtTitle) return
        
        let evtDate = prompt('When is the event date?(DD/MM/YYYY) ')
        evtDate = this.validateInput(evtDate, 'Please write a date for this event','When is the event date?(DD/MM/YYYY) ');
        if(!evtDate) return

        this._schedulesList[this._idCount] = new Event(evtDate, evtTitle)
        this._idCount += 1
    }

    editEvent(){
        let id = prompt('Enter the event id that you want to edit: ')
        this.validateID(id)
        if(!this._ID) return

        console.log(`Type 'same' to keep the same title or date.`)
        //validate title input
        let evtNewTitle = prompt('Change the event title to: ')
        evtNewTitle = this.validateInput(evtNewTitle, 'Please write a new title for the event.','Change the todo task to:')
        if(!evtNewTitle) return
        
        //validate date input
        let evtNewDate = prompt('Change the event date to: ')
        evtNewDate = this.validateInput(evtNewDate,'Please write a date for the event.','Change the event date to: ')
        if(!evtNewDate) return

        // Only change the event when both input are valid
        let item = this._schedulesList[this._ID]   
        // If the input is 'same', remain the same evt title or date
        item.title = evtNewTitle.toLowerCase() === 'same' ?   item.title : evtNewTitle 
        item.date = evtNewDate.toLowerCase() === 'same' ?   
        item.date : new Date(...evtNewDate.split(/\D/).reverse().map((n,i)=> i === 1? +n-1: n)) 
        item.formatDate()      
    }

    deleteEvent(){
        let id = prompt('Enter the event id that you want to delete: ')
        this.validateID(id)
        if(!this._ID) return

        let arr = Object.entries(this._schedulesList)
        // Rearrange the list if user delete the middle or the first task in the list
        let newArr = arr.filter(([id, _])=> id != this._ID).map(([_, evt])=> evt);
        let newObj = newArr.reduce((acc, cur, i) => {acc[i+1] = cur;
            return acc;
          }, {}); 
        this._schedulesList = newObj
        this._idCount -= 1
    }
   
    quitApp(){
        this._inUsed = false
    }
}


class Event{
    constructor(d,evt){
        this.date = new Date(...d.split(/\D/).reverse()
                                .map((n,i)=> i === 1? +n-1: n))
                                // Convert month to indexMonth 0-11   
        this.title = evt
        this.formatDate()
    }

    _monthIndex = {
        0 : 'Jan', 
        1 : 'Feb',
        2 : 'Mar',
        3 : 'Apr',
        4 : 'May',
        5 : 'June',
        6 : 'July',
        7 : 'Aug',
        8 : 'Sep',
        9 : 'Oct',
        10 : 'Nov',
        11 : 'Dec'
    }

    // use function to created property this.formatDate so it can run in the contructor
    formatDate(){
        this.formattedDate = `${this.date.getDate()}-${this._monthIndex[this.date.getMonth()]}-${this.date.getFullYear()}`
    }
    
    _createdTime = new Date()
}

new calendarApp()





