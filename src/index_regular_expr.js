function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  let str = expr;
  // console.log(str);
  // throw new Error("expressionError: Brackets must be paired");
  // throw new Error("TypeError: Division by zero.")
  
  let hooks = /\(\s+-{0,1}[0-9\.e\-]+\s+\)/.exec(str);
  
  if (hooks) {
    let fix_substr = hooks.join("").split(" ").filter(i => i != "");
    return expressionCalculator(str.replace(hooks, " "+fix_substr[1]+" "));
  }
  
  if (str.split("").filter(i => i != "" && i != " ").length == 3) {
    let fix_substr=str.split("").filter(i => i != "" && i != " ");
    switch(fix_substr[1]) {
      case "+":
        return (parseFloat(fix_substr[0])+parseFloat(fix_substr[2])).toFixed(4);
      case "-":
        return (parseFloat(fix_substr[0])-parseFloat(fix_substr[2])).toFixed(4);
      case "*":
        return (parseFloat(fix_substr[0])*parseFloat(fix_substr[2])).toFixed(4);
      case "/":
        return (parseFloat(fix_substr[0])/parseFloat(fix_substr[2])).toFixed(4);
    }
  }
  
  hooks = /\(\s+-{0,1}[0-9\.e\-]+\s+[\+\-\/\*]+[0-9 \+\-\/\*\.e]+\)/.exec(str);

  if (hooks) {
    if (/\s+-{0,1}[0-9\.e\-]+\s+[\/\*]{1}\s+-{0,1}[0-9\.e\-]+\s+/.exec(hooks)) {
      let substr=/\s+-{0,1}[0-9\.e\-]+\s+[\/\*]{1}\s+-{0,1}[0-9\.e\-]+\s+/.exec(hooks);
      fix_substr=substr.join("").split(" ").filter(i => i != "" && i != " ");
      if (fix_substr[1] == "*") {
        let result=parseFloat(fix_substr[0])*parseFloat(fix_substr[2]);
        return expressionCalculator(str.replace(String(substr), " "+result+" "));
      }
      else if (fix_substr[1] == "/") {
        let result=parseFloat(fix_substr[0])/parseFloat(fix_substr[2]);
        return expressionCalculator(str.replace(String(substr), " "+result+" "));
      }
    }
    else if (/\s+-{0,1}[0-9\.e\-]+\s+[\-\+]{1}\s+-{0,1}[0-9\.e\-]+\s+/.exec(hooks)) {
      let substr=/\s+-{0,1}[0-9\.e\-]+\s+[\-\+]{1}\s+-{0,1}[0-9\.e\-]+\s+/.exec(hooks);
      fix_substr=substr.join("").split(" ").filter(i => i != "" && i != " ");
      if (fix_substr[1] == "+") {
        let result=parseFloat(fix_substr[0])+parseFloat(fix_substr[2]);
        return expressionCalculator(str.replace(String(substr), " "+result+" "));
      }
      if (fix_substr[1] == "-") {
        let result=parseFloat(fix_substr[0])-parseFloat(fix_substr[2]);
        return expressionCalculator(str.replace(String(substr), " "+result+" "));
      }
    }
  }

  hooks = /\s+-{0,1}[0-9\.e\-]+\s+[\+\-\/\*]+\s+-{0,1}[0-9\.e\-]+[0-9e\.\-\+\/\*\s]*/.exec(str);
  
  if (hooks) {
    if (/\s+-{0,1}[0-9\.e\-]+\s+[\/\*]{1}\s+-{0,1}[0-9\.e\-]+\s+/.exec(hooks)) {
      let substr=/\s+-{0,1}[0-9\.e\-]+\s+[\/\*]{1}\s+-{0,1}[0-9\.e\-]+\s+/.exec(hooks);
      fix_substr=substr.join("").split(" ").filter(i => i != "" && i != " ");
      if (fix_substr[1] == "*") {
        let result=parseFloat(fix_substr[0])*parseFloat(fix_substr[2]);
        return expressionCalculator(str.replace(String(substr), " "+result+" "));
      }
      else if (fix_substr[1] == "/") {
        let result=parseFloat(fix_substr[0])/parseFloat(fix_substr[2]);
        return expressionCalculator(str.replace(String(substr), " "+result+" "));
      }
    }
    else if (/\s+-{0,1}[0-9\.e\-]+\s+[\-\+]{1}\s+-{0,1}[0-9\.e\-]+\s+/.exec(hooks)) {
      let substr=/\s+-{0,1}[0-9\.e\-]+\s+[\-\+]{1}\s+-{0,1}[0-9\.e\-]+\s+/.exec(hooks);
      fix_substr=substr.join("").split(" ").filter(i => i != "" && i != " ");
      if (fix_substr[1] == "+") {
        let result=parseFloat(fix_substr[0])+parseFloat(fix_substr[2]);
        return expressionCalculator(str.replace(String(substr), " "+result+" "));
      }
      if (fix_substr[1] == "-") {
        let result=parseFloat(fix_substr[0])-parseFloat(fix_substr[2]);
        return expressionCalculator(str.replace(String(substr), " "+result+" "));
      }
    }
  }
  return parseFloat(str).toFixed(4);
}


module.exports = {
    expressionCalculator
}
