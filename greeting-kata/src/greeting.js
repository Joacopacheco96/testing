module.exports = function greeting (name) {
    
     if (typeof name === "string") {
        if (name === name.toUpperCase()) return req3(name)
        else return req1(name) 
     } 
        else if (name === null) return req2(name)
        else if (typeof name === `object`) {
            if (name.length === 2) return req4(name) 
            else return req5(name)
        } };
        
        
        function req1(name) {
            return `Hello, ${name}`
        };
        
        function req2(name) {
            return `Hello, my friend`
        };
        
        function req3(name) {
            return `HELLO, ${name}`
        };
    
        function req4(name) {
            return `Hello, ${name[0]} and ${name[1]}`
        };

        function req5(name) {
            let result = "Hello"
            for (let i = 0 ; i < name.length - 1 ; i++) {
                result = result + `, ${name[i]}` 
            } 
            return result = result + ` and ${name[name.length - 1]}`
        };





        



     




    

    

