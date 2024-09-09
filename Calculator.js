function calculator(left_operand, operator, right_operand){

	if(operator == '+'){
	return left_operand + right_operand
	}
	
	else if(operator == '*'){
	return left_operand * right_operand
	}
	else if(operator == '/'){
	return left_operand / right_operand
	}
	else if(operator == '-'){
	return left_operand - right_operand
	}

	}
	const Ans = calculator(6,'*', 4);

	console.log(Ans);
	
	
	