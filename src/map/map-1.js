let data = {
	"kola": 23,
	"shola": 3,
}
console.log(data["kola"]);
data["kola"] = 100;

console.log('Kola age is known', "kola" in data);
console.log('unknowns age', "toString" in data);
let newData = new Map()
console.log("==================");
newData.set("kola", 100);
console.log('unknowns age', newData.has("toString"));
console.log(newData);
