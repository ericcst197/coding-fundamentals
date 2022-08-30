"use strict";

const prompt = require('prompt-sync')();

class toDoApp {
    constructor(){
        this.startApp()
    }

    _inUsed = true
    _idCount = 1
    _toDoList = {}
    _ID

    startApp(){
        while(this._inUsed){
            this.displayApp()
            this.controller(this.num)
        }
    }   

    //Control input to different functionality
   controller(num){
        switch(num){
            case '1' : this.viewList() ;break
            case '2' : this.addToDo() ;break
            case '3' : this.editToDo() ;break
            case '4' : this.toggleDone() ;break
            case '5' : this.deleteToDo() ;break
            case '6' : this.quitApp() ;break
            default : console.log('Invalid Selection')
        }
    }

    displayApp(){
        console.log((`
            --------- TODO APP -----------
            What would you like to do?
            1. View my todo list
            2. Add new todo
            3. Edit a todo item
            4. Toggle complete a todo
            5. Delete a todo
            6. Quit app
        `).split("\n")
          .map(s => s.trim())
          .join("\n")
        )
        this.num = prompt('Enter(1/2/3/4/5/6): ')
    }

    viewList(){
        let obj = Object.entries(this._toDoList)
        if(!obj.length) {
            console.log('You have 0 todo!')
        } else {
            obj.forEach(([id, task]) => console.log(`#${id} - ${task}`) )
        }
    }

    addToDo(){
        let task = prompt('Enter your task: ')
        let repeat = 0
        // Warning if no input, you can change the number of time to warn
        while(!task && repeat < 3){
            repeat= repeat + 1
            console.log( `Please write a task to do. 💢 ${repeat}`)
            task = prompt('Enter your task:')
        }
        if(!task) return
        this._toDoList[this._idCount] = `${task} ❌`
        this._idCount += 1
    }

    // Validate the id before searching for the list item
    validateID(id){
        this._ID = this._toDoList[id] ?  id : null
        if(!this._ID) return console.log('Invalid ID')
    }

    editToDo(){
        let id = prompt('Enter the todo id that you want to edit: ')
        this.validateID(id)
        if(!this._ID) return

        let task = prompt('Change the todo task to: ')
        let repeat = 0
        while(!task && repeat < 3){
            repeat= repeat + 1
            console.log( `Please write a task to do. 💢 ${repeat}`)
            task = prompt('Change the todo task to:')
        }
        if(!task) return
       
        let item = this._toDoList[this._ID]   
        this._toDoList[this._ID] = `${task} ${item.slice(-1)}` 
    }

    toggleDone(){
        let id = prompt('Enter the todo id that you want to toggle complete: ')
        this.validateID(id)
        if(!this._ID) return

        let item = this._toDoList[this._ID]
        this._toDoList[this._ID] = `${item.slice(0,-1)}${item.slice(-1) === '❌'? '✅' : '❌'}`
    }

    deleteToDo(){
        let id = prompt('Enter the todo id that you want to delete: ')
        this.validateID(id)
        if(!this._ID) return

        let obj = Object.entries(this._toDoList)
        // Rearrange the list if user delete the middle or the first task in the list
        let newArr = obj.filter(([id, _])=> id != this._ID).map(([_, task])=> task);
        let newObj = newArr.reduce((acc, cur, i) => {acc[i+1] = cur;
            return acc;
          }, {}); 
        this._toDoList = newObj
        this._idCount -= 1
    }

    quitApp(){
        this._inUsed = false
    }
}

new toDoApp()