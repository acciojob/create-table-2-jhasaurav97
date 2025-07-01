function createTable() {
    //Write your code here
    const table = document.getElementById("myTable");

	// create table rows
	const rowInput = prompt("Input number of rows");
	const rn = parseInt(rowInput);

	// create table column 
	const columnInput = prompt("Input number of columns");
	const cn = parseInt(columnInput);

	if(isNaN(rn) || isNaN(cn)){
		alert("Please enter valid numeric values.")
		return;
	}
	if(rn <= 0 || cn <= 0){
		alert("Number of rows and columns must be greater than 0.");
		return;
	}
	for(let i = 0; i < rn; i++){
		const row = table.insertRow();
		for(let j = 0; j < cn; j++){
			const cell = row.insertCell();
			cell.textContent = `Row-${i} Column-${j}`;
		}
	}
}
