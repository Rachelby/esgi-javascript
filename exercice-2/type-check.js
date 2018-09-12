function type_check_v1(arg1, arg2){
	if (typeof arg1 === arg2)
		return true
	return false
}

// console.log(type_check_v1(2, "number"))
// type, value, enum
function type_check_v2(arg1, params){
	if (params.type) {
		if (type_check_v1(arg1, params.type) == false)
			return false
		else if (params.value) {
			if (params.value === arg1) {
				return true
			}
		}
		else return true
	}

	else if (params.value) {
		if (params.value === arg1) {
			return true 
		}
		else return false
	}
	
	else if (params.enum) {
		for (i = 0; i < params.enum.length; i++) {
			if (params.enum[i] === arg1) {
				return true
				break
			}
		}
		return false
	}
	return false
}

console.log(type_check_v2(3, {enum:["number", 3, 5]}))
console.log(type_check_v2(3, {type:"string",value:3}))