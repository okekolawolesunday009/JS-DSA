let journal = [];

function addEntry(events, squirrel) {
	journal.push({events, squirrel});
}

addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);
addEntry(["work", "touched tree", "pizza", "running",
"television"], false);

export default journal;
