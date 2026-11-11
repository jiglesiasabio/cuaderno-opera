const siteRoot = new URL('../', document.currentScript.src);
const localUrl = path => new URL(path.replace(/^\/+/, ''), siteRoot).href;
const search = document.querySelector('#search');
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
if(search) search.addEventListener('input',()=>{let count=0;document.querySelectorAll('[data-search]').forEach(card=>{card.hidden=!normalize(card.dataset.search).includes(normalize(search.value.trim()));if(!card.hidden)count++;});document.querySelector('#result-count').textContent=`${count} ${count===1?'ópera':'óperas'}`;document.querySelector('#empty').hidden=count!==0;});
document.querySelectorAll('[data-notes]').forEach(field=>{const key='opera-notes:'+field.dataset.notes;const status=document.querySelector('[data-note-status]');try{field.value=localStorage.getItem(key)||'';}catch{status.textContent='El almacenamiento no está disponible en este navegador.';}field.addEventListener('input',()=>{try{localStorage.setItem(key,field.value);status.textContent='Guardado en este navegador.';}catch{status.textContent='No se pudo guardar la nota. Copia el texto para conservarlo.';}});});
if(document.querySelector('#next-title')) fetch(localUrl('/assets/events.json')).then(r=>r.json()).then(items=>{const next=items.find(o=>new Date(o.start)>new Date());if(next){document.querySelector('#next-title').textContent=next.title;document.querySelector('#next-date').textContent=`${next.day} ${next.month} ${next.year} · ${next.time}`;document.querySelector('#next-link').href=localUrl(`/operas/${next.slug}/`);}else{document.querySelector('#next-title').textContent='Una temporada para recordar';document.querySelector('#next-date').textContent='2026 — 2027';document.querySelector('#next-link').textContent='Revisitar las obras ↗';document.querySelector('#next-link').href=localUrl('/#temporada');}}).catch(()=>{});
// La edición externa se carga únicamente después de solicitarla.
document.querySelectorAll('[data-load-libretto]').forEach(button=>button.addEventListener('click',()=>{
 const container=button.closest('.external-edition').querySelector('[data-reader-container]');
 if(container.querySelector('iframe'))return;
 const frame=document.createElement('iframe');
 frame.src=button.dataset.loadLibretto;
 frame.title=button.dataset.frameTitle;
 frame.referrerPolicy='no-referrer';
 frame.setAttribute('sandbox','allow-same-origin');
 container.append(frame);
 button.textContent='Edición cargada';button.disabled=true;
}));
