function Ans(id, available, count, name, author){

	this.id = Number(id);
	this.available = Boolean(available);
	this.count = Number(count);
	this.name = name;
	this.author = author;

	}
	
	const Ans1 = new Ans('1', true, '6', 'Dunni', 'Mystery');
	console.log(Ans1); 

	