import{r as n,j as e}from"./jsx-runtime-NroC4D4D.js";import{d as p,e as h,f as x,g as y,M as S,L as f,O as j,S as w}from"./components-RuHb5xcY.js";/**
 * @remix-run/react v2.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function g({getKey:r,...l}){let o=p(),c=h();x({getKey:r,storageKey:a});let u=n.useMemo(()=>{if(!r)return null;let t=r(o,c);return t!==o.key?t:null},[]),d=((t,m)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[m||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",y({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${JSON.stringify(a)}, ${JSON.stringify(u)})`}}))}const k=()=>null;function O(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(S,{}),e.jsx(f,{})]}),e.jsxs("body",{children:[e.jsx(j,{}),e.jsx(g,{}),e.jsx(w,{}),e.jsx(k,{})]})]})}export{O as default};
