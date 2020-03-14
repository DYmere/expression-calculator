function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  let str = expr;
  let arr_brackets = str.match(/[\(\)]/g);
  let count_op = 0;
  let count_cl = 0;

  if (arr_brackets != null) {
    for (let i of arr_brackets) {
      if (i == "(") { count_op++ }
      else if (i == ")") { count_cl++ };
    };
  };
  
  if (count_op != count_cl) { throw new Error("ExpressionError: Brackets must be paired") };
  
  let hooks = /\(\s+-{0,1}[0-9\.e\-]+\s+\)/.exec(str);
  
  if (hooks) {
    let fix_substr = hooks.join("").split(" ").filter(i => i != "");
    return expressionCalculator(str.replace(hooks, " "+fix_substr[1]+" "));
  }
  
  if (str.split("").filter(i => i != "" && i != " ").length == 3) {
    let fix_substr=str.split("").filter(i => i != "" && i != " ");
    switch(fix_substr[1]) {
      case "+":
        return (parseFloat(fix_substr[0])+parseFloat(fix_substr[2]));
      case "-":
        return (parseFloat(fix_substr[0])-parseFloat(fix_substr[2]));
      case "*":
        return (parseFloat(fix_substr[0])*parseFloat(fix_substr[2]));
      case "/":
        if (fix_substr[2] == 0) { throw new Error("TypeError: Division by zero.") };
        return (parseFloat(fix_substr[0])/parseFloat(fix_substr[2]));
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
        if (fix_substr[2] == 0) { throw new Error("TypeError: Division by zero.") };
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
        if (fix_substr[2] == 0) { throw new Error("TypeError: Division by zero.") };
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
  return parseFloat(str);
}


module.exports = {
    expressionCalculator
}
