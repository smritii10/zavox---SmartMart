const links=document.querySelectorAll('.nav-link'), sections=document.querySelectorAll('.page-section'), sidebar=document.getElementById('sidebar');
function activate(id){sections.forEach(s=>s.classList.toggle('active',s.id===id));links.forEach(a=>a.classList.toggle('active',a.dataset.section===id));window.scrollTo({top:0,behavior:'smooth'});if(innerWidth<760)sidebar.classList.remove('open')}
links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const id=a.dataset.section;history.replaceState(null,'','#'+id);activate(id)}));
document.getElementById('menu').addEventListener('click',()=>sidebar.classList.toggle('open'));
const initial=location.hash.slice(1)||'overview';activate(document.getElementById(initial)?initial:'overview');
let toastTimer;function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2200)}
const base={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{size:9},color:'#8b94a8'}},y:{grid:{color:'#eef0f5'},ticks:{font:{size:9},color:'#8b94a8'}}}};
function chart(id,type,labels,data){const el=document.getElementById(id);if(!el)return;new Chart(el,{type,data:{labels,datasets:[{data,borderWidth:2,backgroundColor:'rgba(91,92,226,.12)',borderColor:'#5b5ce2',pointRadius:2,fill:type==='line',tension:.35,borderRadius:5}]},options:{...base,scales:{...base.scales,y:{...base.scales.y,beginAtZero:true}}}})}
chart('trafficChart','line',['9 AM','10','11','12 PM','1','2','3','4','5','6','7','8'],[52,71,89,103,121,98,112,136,168,214,190,130]);
chart('dwellChart','bar',['Entrance','Fashion','Beauty','Electronics','Grocery','Checkout'],[4,16,23,27,19,7]);
chart('footfallChart','line',['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],[7100,7350,6820,7920,8210,8942,7630]);
chart('queueChart','line',['10 AM','12 PM','2 PM','4 PM','6 PM','8 PM'],[3.1,4.4,3.8,4.9,7.2,4.3]);
chart('reportChart','bar',['Visitors','Dwell','Queue','Stock','Staff'],[82,74,88,91,86]);
