import {expect} from 'chai'

var fs = require('fs')

describe("load component",()=>{
    it("load part 1",()=>{
        let res = ""
        res = fs.readFile('diagram.bpmn','utf-8')

        console.log(res);
        
    })
})
