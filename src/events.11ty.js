const operas=require('./_data/operas.json');
module.exports=class {data(){return {permalink:'assets/events.json'};}render(){return JSON.stringify(operas.map(o=>({...o,start:o.date+'T'+o.time+':00'+(((o.date>='2026-03-29'&&o.date<'2026-10-25')||(o.date>='2027-03-28'&&o.date<'2027-10-31'))?'+02:00':'+01:00')})));}};
