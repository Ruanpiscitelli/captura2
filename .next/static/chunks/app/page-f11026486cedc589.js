(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5763:function(e,t,r){Promise.resolve().then(r.bind(r,223)),Promise.resolve().then(r.t.bind(r,2972,23))},223:function(e,t,r){"use strict";r.d(t,{NewsletterSignup:function(){return C}});var a=r(7437),i=r(1269),n=r(9501),s=r(3590),o=r(1229),l=r(2265),d=r(5293),c=r(7712),m=r(1994),u=r(3335);function x(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,u.m6)((0,m.W)(t))}let f=(0,c.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),h=l.forwardRef((e,t)=>{let{className:r,variant:i,size:n,asChild:s=!1,...o}=e,l=s?d.g7:"button";return(0,a.jsx)(l,{className:x(f({variant:i,size:n,className:r})),ref:t,...o})});h.displayName="Button";let p=l.forwardRef((e,t)=>{let{className:r,type:i,...n}=e;return(0,a.jsx)("input",{type:i,className:x("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})});p.displayName="Input";var y=r(1107);let g=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),b=l.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,a.jsx)(y.f,{ref:t,className:x(g(),r),...i})});b.displayName=y.f.displayName;let v=n.RV,w=l.createContext({}),j=e=>{let{...t}=e;return(0,a.jsx)(w.Provider,{value:{name:t.name},children:(0,a.jsx)(n.Qr,{...t})})},N=()=>{let e=l.useContext(w),t=l.useContext(E),{getFieldState:r,formState:a}=(0,n.Gc)(),i=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:s}=t;return{id:s,name:e.name,formItemId:"".concat(s,"-form-item"),formDescriptionId:"".concat(s,"-form-item-description"),formMessageId:"".concat(s,"-form-item-message"),...i}},E=l.createContext({}),F=l.forwardRef((e,t)=>{let{className:r,...i}=e,n=l.useId();return(0,a.jsx)(E.Provider,{value:{id:n},children:(0,a.jsx)("div",{ref:t,className:x("space-y-2",r),...i})})});F.displayName="FormItem";let k=l.forwardRef((e,t)=>{let{className:r,...i}=e,{error:n,formItemId:s}=N();return(0,a.jsx)(b,{ref:t,className:x(n&&"text-destructive",r),htmlFor:s,...i})});k.displayName="FormLabel";let R=l.forwardRef((e,t)=>{let{...r}=e,{error:i,formItemId:n,formDescriptionId:s,formMessageId:o}=N();return(0,a.jsx)(d.g7,{ref:t,id:n,"aria-describedby":i?"".concat(s," ").concat(o):"".concat(s),"aria-invalid":!!i,...r})});R.displayName="FormControl",l.forwardRef((e,t)=>{let{className:r,...i}=e,{formDescriptionId:n}=N();return(0,a.jsx)("p",{ref:t,id:n,className:x("text-[0.8rem] text-muted-foreground",r),...i})}).displayName="FormDescription";let I=l.forwardRef((e,t)=>{let{className:r,children:i,...n}=e,{error:s,formMessageId:o}=N(),l=s?String(null==s?void 0:s.message):i;return l?(0,a.jsx)("p",{ref:t,id:o,className:x("text-[0.8rem] font-medium text-destructive",r),...n,children:l}):null});I.displayName="FormMessage";let S=o.z.object({name:o.z.string().min(2,"Nome deve ter pelo menos 2 caracteres"),email:o.z.string().email("Email inv\xe1lido"),phone:o.z.string().min(10,"Telefone deve ter pelo menos 10 d\xedgitos")});function C(){let e=(0,n.cI)({resolver:(0,s.F)(S),defaultValues:{name:"",email:"",phone:""}});async function t(t){try{if(!(await fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw Error("Erro ao enviar formul\xe1rio");e.reset()}catch(e){console.error("Erro:",e)}}return(0,a.jsx)("section",{className:"w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4",children:(0,a.jsxs)(i.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-3xl w-full mx-auto space-y-12",children:[(0,a.jsxs)("div",{className:"space-y-6 text-center",children:[(0,a.jsx)(i.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.5},className:"text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",children:"Marketing \xe9 Simples, Desde Que Voc\xea Saiba o Que Est\xe1 Fazendo."}),(0,a.jsx)(i.E.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},className:"text-lg md:text-xl text-gray-300 leading-relaxed",children:"Oi, eu sou Ruan Piscitelli, e se voc\xea est\xe1 aqui, \xe9 porque quer ir al\xe9m no marketing. Toda semana, compartilho estrat\xe9gias pr\xe1ticas, estudos de caso reais e insights que podem redefinir seus resultados no digital."})]}),(0,a.jsx)(i.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.5},className:"bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10",children:(0,a.jsx)(v,{...e,children:(0,a.jsxs)("form",{onSubmit:e.handleSubmit(t),className:"space-y-6",children:[(0,a.jsx)(j,{control:e.control,name:"name",render:e=>{let{field:t}=e;return(0,a.jsxs)(F,{children:[(0,a.jsx)(k,{className:"text-white",children:"Nome"}),(0,a.jsx)(R,{children:(0,a.jsx)(p,{placeholder:"Seu nome completo",...t,className:"bg-white/10 border-white/20 text-white placeholder:text-gray-400"})}),(0,a.jsx)(I,{})]})}}),(0,a.jsx)(j,{control:e.control,name:"email",render:e=>{let{field:t}=e;return(0,a.jsxs)(F,{children:[(0,a.jsx)(k,{className:"text-white",children:"Email"}),(0,a.jsx)(R,{children:(0,a.jsx)(p,{type:"email",placeholder:"seu@email.com",...t,className:"bg-white/10 border-white/20 text-white placeholder:text-gray-400"})}),(0,a.jsx)(I,{})]})}}),(0,a.jsx)(j,{control:e.control,name:"phone",render:e=>{let{field:t}=e;return(0,a.jsxs)(F,{children:[(0,a.jsx)(k,{className:"text-white",children:"Telefone"}),(0,a.jsx)(R,{children:(0,a.jsx)(p,{type:"tel",placeholder:"(00) 00000-0000",...t,className:"bg-white/10 border-white/20 text-white placeholder:text-gray-400"})}),(0,a.jsx)(I,{})]})}}),(0,a.jsx)(h,{type:"submit",className:"w-full bg-white text-black hover:bg-gray-200 transition-colors",children:"Inscrever-se na Newsletter"})]})})})]})})}}},function(e){e.O(0,[346,971,117,744],function(){return e(e.s=5763)}),_N_E=e.O()}]);