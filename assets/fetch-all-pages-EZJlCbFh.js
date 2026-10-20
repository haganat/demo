async function u(n,o=500){const r=[];let e;for(let s=0;s<o;s+=1){const t=await n(e);if(r.push(...t.rows),!t.nextCursor)return r;e=t.nextCursor}return r}export{u as f};
