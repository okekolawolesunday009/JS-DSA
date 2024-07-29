import journal from './jacques.js';
import phi from './phi.js';
import tableFor from './tableFor.js';
import journalEvents from './journalEvents.js';

for (let event of journalEvents(journal)) {
	console.log(event + ":", phi(tableFor(event, journal)));
}
