class StackCalc {
    constructor(num) {
        this.num = num;
    }

    plus() {
        var pl = Number(this.num[this.num.length - 1])
            + Number(this.num[this.num.length - 2]);
        return "" + this.num + pl;
    }
    minus() {
        var first = Number(this.num[this.num.length - 1]);
        var second = Number(this.num[this.num.length - 2]);
        var dif = 0;
        if (first >= second) {
            dif = first - second;
        } else {
            dif = second - first;
        }
        return "" + this.num + dif;
    }
    mul() {
        var mul = Number(this.num[this.num.length - 1])
            * Number(this.num[this.num.length - 2]);
        return "" + this.num + mul;
    }
    div() {
        var first = Number(this.num[this.num.length - 1]);
        var second = Number(this.num[this.num.length - 2]);
        if (first >= second) {
            var div = first / second;
        } else {
            var div = second / first;
        }
        return "" + this.num + div;
    }
    dup() {
        var max = Math.max(...this.num);
        return "" + this.num + max + max;
    }
    pop() {
        var arr = [...this.num];
        arr.pop();
        return arr.join("");
    }
    push(n) {
        var arr = [...this.num];
        arr.push(n);
        return arr.join("");
    }
    run(instructions) {
        for (let i of instructions.split(" ")) 
            switch (i) {
        case "+": this.plus(); break;
        case "-": this.minus(); break;
        case "*": this.mul(); break;
        case "/": this.div(); break;
        case "DUP": this.dup(); break;
        case "POP": this.pop(); break;
        default:
          if (i.length == 0) continue; 
        //   if (String(Number(i))==i) this.push(Number(i));
          else {
            this.stack = [`Invalid instruction: ${i}`];
            return this;
          }
            }
    return this;
}
}
(function () {
    var number = new StackCalc("258");
    // console.log(number.plus());
    // console.log(number.minus());
    // console.log(number.multiply());
    // console.log(number.divide());
    // console.log(number.dup());
    // console.log(number.pop());
    // console.log(number.push(1));
    
})();
console.log(new StackCalc().run("3 2 *").value); 

////////////////////////////////////////////////////////////////

// Although not necessary for the specification given in the question,
// I 'return this' from the functions so that you also can operate the 
// stack by operator chaining. For example, to multiply 3 and 2 you can
//   new StackCalc().run("3 2 *").value
// but, in addition, you can
//   new StackCalc().push(3).push(2).mul().value

// class StackCalc {
//     constructor() {this.stack = []}
  
//     get value() {return this.stack[this.stack.length-1] || 0;}
//       pop() {return this.stack.pop() || 0;}
  
//       push(val) {this.stack.push(val);             return this;}
//       dup() {this.push(this.value);                return this;}
//       add() {this.push(this.pop() + this.pop());   return this;}
//       sub() {this.push(this.pop() - this.pop());   return this;}
//       mul() {this.push(this.pop() * this.pop());   return this;}
//       div() {this.push(this.pop() / this.pop());   return this;}
  
//     run(instructions) {
//           for (let i of instructions.split(" ")) 
//               switch (i) {
//           case "+": this.add(); break;
//           case "-": this.sub(); break;
//           case "*": this.mul(); break;
//           case "/": this.div(); break;
//           case "DUP": this.dup(); break;
//           case "POP": this.pop(); break;
//           default:
//             if (i.length == 0) continue; 
//             if (String(Number(i))==i) this.push(Number(i));
//             else {
//               this.stack = [`Invalid instruction: ${i}`];
//               return this;
//             }
//               }
//       return this;
//     }	
//   }
//   console.log(new StackCalc().run("3 2 *").value); 