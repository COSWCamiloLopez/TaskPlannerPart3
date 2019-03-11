(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,a){e.exports=a.p+"static/media/loginIcon.e56b8419.png"},176:function(e,t,a){e.exports=a.p+"static/media/user.04d79fe9.png"},177:function(e,t,a){e.exports=a.p+"static/media/baseline-exit_to_app-24px.63002100.svg"},191:function(e,t,a){e.exports=a(402)},196:function(e,t,a){},321:function(e,t,a){},402:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),i=a.n(l),o=(a(196),a(18)),s=a(19),c=a(21),u=a(20),h=a(22),d=a(109),m=a.n(d),p=a(171),g=a(5),f=a(32),b=a.n(f),v=a(29),E=a.n(v),w=a(6),O=a.n(w),k=a(172),C=a.n(k),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:"",password:""},a.handleChangeUser=a.handleChangeUser.bind(Object(g.a)(Object(g.a)(a))),a.handleChangePassword=a.handleChangePassword.bind(Object(g.a)(Object(g.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a.handleRegisterPage=a.handleRegisterPage.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("img",{src:C.a,className:e.image,alt:""}),r.a.createElement("br",null),r.a.createElement("form",{id:"loginForm",className:e.form,onSubmit:this.handleSubmit},r.a.createElement(b.a,{required:!0,id:"user",label:"User",margin:"normal",className:e.text,variant:"outlined",onChange:this.handleChangeUser}),r.a.createElement("br",null),r.a.createElement(b.a,{required:!0,id:"password",label:"Password",type:"password",margin:"normal",variant:"outlined",className:e.text,onChange:this.handleChangePassword}),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"contained",color:"primary",className:e.button,type:"submit"},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"contained",color:"primary",className:e.button,onClick:this.handleRegisterPage},"Sign up")))}},{key:"handleChangeUser",value:function(e){this.setState({user:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),Object(p.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://task-planner-api.herokuapp.com/user/username/"+t.state.user);case 2:return a=e.sent,e.prev=3,e.next=6,a.json();case 6:n=e.sent,console.log(n),n.password===t.state.password?(localStorage.setItem("userLogged",n.identification),localStorage.setItem("isLoggedIn","true"),window.location.href="/tasks"):alert("User or password incorrect"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),alert("There is no users with that username"),document.getElementById("loginForm").reset();case 15:case"end":return e.stop()}},e,this,[[3,11]])}))()}},{key:"handleRegisterPage",value:function(){window.location.href="/register"}}]),t}(n.Component),j=O()(function(e){return{button:{width:"30%"},text:{width:"30%"},image:{width:"10%",marginTop:"3%"}}})(y),S=(a(321),a(174)),N=a.n(S),P=a(74),x=a.n(P),I=a(25),B=a.n(I),D=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(N.a,{position:"static"},r.a.createElement(x.a,null,this.props.button,r.a.createElement(B.a,{variant:"h6",color:"inherit",className:e.grow},"Task Planner"))))}}]),t}(n.Component),R=O()({root:{flexGrow:1},grow:{flexGrow:1,textAlign:"left"},menuButton:{marginLeft:-12,marginRight:20}})(D),L=a(24),A=a(175),T=a(407),F=a(8),U=a.n(F),W=a(37),q=a.n(W),J=a(185),M=a.n(J),G=a(187),H=a.n(G),V=a(186),z=a.n(V),Q=a(184),Y=a.n(Q),_=a(76),K=a.n(_),$=a(75),X=a.n($),Z=a(176),ee=a.n(Z),te=a(108),ae=a.n(te),ne=a(78),re=a.n(ne),le=a(110),ie=a.n(le),oe=a(111),se=a.n(oe),ce=a(177),ue=a.n(ce),he=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(X.a,{className:e.card},r.a.createElement(K.a,null,r.a.createElement(B.a,{variant:"h5",gutterBottom:!0},r.a.createElement("b",null,"Responsible:")," ",this.props.tasks.responsible),r.a.createElement(B.a,{variant:"subtitle1",gutterBottom:!0},r.a.createElement("b",null,"Description:")," ",this.props.tasks.description),r.a.createElement(B.a,{variant:"subtitle1",gutterBottom:!0},r.a.createElement("b",null,"Date:")," ",this.props.tasks.dueDate),r.a.createElement(B.a,{variant:"subtitle1",gutterBottom:!0},r.a.createElement("b",null,"Status:")," ",this.props.tasks.status)))}}]),t}(n.Component),de=O()(function(e){return{card:{width:"100%",marginBottom:"1%",float:"left"}}})(he),me=a(188),pe=a.n(me),ge=a(77),fe=a.n(ge),be=a(182),ve=a.n(be),Ee=a(178),we=a.n(Ee),Oe=a(180),ke=a.n(Oe),Ce=a(181),ye=a.n(Ce),je=a(179),Se=a.n(je),Ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(E.a,{color:"inherit",className:e.buttonFilter,onClick:this.handleClickOpen},this.props.modalButton),r.a.createElement(we.a,{fullWidth:!0,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",className:e.dialog},r.a.createElement(Se.a,{id:"form-dialog-title"},this.props.title),r.a.createElement(ke.a,null,r.a.createElement(ye.a,null,this.props.dialogContent),this.props.form)))}}]),t}(r.a.Component),Pe=O()(function(e){return{dialog:{textAlign:"center"}}})(Ne),xe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=[{field:"Responsible",onchange:this.handleChangeResponsible,type:"text"},{field:"Duedate",onchange:this.handleChangeDuedate,type:"date",default:"2019-01-01"}].map(function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{required:!0,key:a,label:t.field,onChange:t.onchange,margin:"normal",className:e.text,variant:"outlined",type:t.type,defaultValue:t.default}),r.a.createElement("br",null))}),a=["In progress","Ready","Completed"].map(function(e){return r.a.createElement(fe.a,{value:e},e)}),n=r.a.createElement(b.a,{select:!0,required:!0,margin:"normal",label:"Status",className:e.text,value:this.state.status,onChange:this.handleChangeStatus,SelectProps:{MenuProps:{className:e.menu}},variant:"outlined"},a),l=r.a.createElement(E.a,{variant:"contained",color:"primary",className:e.button,type:"submit"},"Filter"),i=r.a.createElement("form",null,t,n,l),o=r.a.createElement(ve.a,{className:e.leftIcon});return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,{title:"Filter",form:i,dialogContent:"Here you can filter your tasks to show them by Date, Responsible or Status",modalButton:o}))}}]),t}(n.Component),Ie=O()(function(e){return{text:{width:"90%"},button:{width:"70%"},leftIcon:{marginRight:e.spacing.unit}}})(xe),Be=a(51),De=a.n(Be),Re=(a(334),a(183)),Le=a.n(Re),Ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={description:"",responsible:"",status:"",duedate:"",user:"",tasks:[]},a.handleChangeDuedate=a.handleChangeDuedate.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeResponsible=a.handleChangeResponsible.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeDescription=a.handleChangeDescription.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeStatus=a.handleChangeStatus.bind(Object(g.a)(Object(g.a)(a))),a.handleSendTask=a.handleSendTask.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://task-planner-api.herokuapp.com/user/userid/"+localStorage.getItem("userLogged")).then(function(e){return e.json()}).then(function(t){e.state.user=t,e.state.tasks=t.tasks})}},{key:"render",value:function(){this.componentDidMount();var e=this.props.classes,t=(r.a.createElement(q.a,{className:e.backButton,onClick:this.handleBackPage},r.a.createElement(De.a,null)),[{field:"Description",onchange:this.handleChangeDescription,type:"text"},{field:"Responsible",onchange:this.handleChangeResponsible,type:"text"},{field:"Duedate",onchange:this.handleChangeDuedate,type:"date",default:"2019-01-01"}].map(function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{required:!0,key:a,label:t.field,onChange:t.onchange,margin:"normal",className:e.text,variant:"outlined",type:t.type,defaultValue:t.default}),r.a.createElement("br",null))})),a=["In progress","Ready","Completed"].map(function(e){return r.a.createElement(fe.a,{value:e},e)}),n=r.a.createElement(b.a,{select:!0,required:!0,margin:"normal",label:"Status",className:e.text,value:this.state.status,onChange:this.handleChangeStatus,SelectProps:{MenuProps:{className:e.menu}},variant:"outlined"},a),l=r.a.createElement(E.a,{variant:"contained",color:"primary",className:e.button,type:"submit"},"Send"),i=r.a.createElement("form",{className:e.form,onSubmit:this.handleSendTask},t,n,l),o=r.a.createElement(Le.a,{className:e.leftIcon});return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,{title:"New task",dialogContent:"Create your new task",form:i,modalButton:o}))}},{key:"handleBackPage",value:function(){window.location.href="/tasks"}},{key:"handleChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"handleChangeResponsible",value:function(e){this.setState({responsible:e.target.value})}},{key:"handleChangeStatus",value:function(e){this.setState({status:e.target.value})}},{key:"handleChangeDuedate",value:function(e){this.setState({duedate:e.target.value})}},{key:"handleSendTask",value:function(e){e.preventDefault();var t={owner:this.state.user.identification,description:this.state.description,responsible:this.state.responsible,status:this.state.status,dueDate:this.state.duedate};fetch("https://task-planner-api.herokuapp.com/task/newtask",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){alert(JSON.stringify(e))}),setTimeout(function(){window.location.href="/tasks"},1e3)}}]),t}(n.Component),Te=O()(function(e){return{text:{width:"90%",textAlign:"left"},button:{width:"70%"},leftIcon:{marginRight:e.spacing.unit}}})(Ae),Fe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.state={open:!1,tasks:[],user:{}},a.handleChangeIsLoggedIn=a.handleChangeIsLoggedIn.bind(Object(g.a)(Object(g.a)(a))),a.componentDidMount=a.componentDidMount.bind(Object(g.a)(Object(g.a)(a))),a.updateTasks=a.updateTasks.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://task-planner-api.herokuapp.com/user/userid/"+localStorage.getItem("userLogged")).then(function(e){return e.json()}).then(function(t){e.setState({user:t})}),this.updateTasks()}},{key:"updateTasks",value:function(){var e=this;fetch("https://task-planner-api.herokuapp.com/task/user/"+localStorage.getItem("userLogged")).then(function(e){return e.json()}).then(function(t){e.setState({tasks:t})})}},{key:"render",value:function(){var e,t=this.state.user,a=this.props.classes,n=this.state.open;try{e=this.state.tasks.map(function(e,t){return r.a.createElement(de,{key:t,tasks:e})})}catch(l){e=[]}return r.a.createElement("div",{className:a.root},r.a.createElement(T.a,{position:"fixed",className:U()(a.appBar,Object(L.a)({},a.appBarShift,n))},r.a.createElement(x.a,{disableGutters:!n},r.a.createElement(q.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:U()(a.menuButton,n&&a.hide)},r.a.createElement(Y.a,null)),r.a.createElement(B.a,{variant:"h6",color:"inherit",noWrap:!0,className:a.toolbarTitle},"Task planner"),r.a.createElement(Te,null),r.a.createElement(Ie,null))),r.a.createElement(M.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(q.a,{onClick:this.handleDrawerClose},r.a.createElement(z.a,null))),r.a.createElement(H.a,null),r.a.createElement("div",{className:a.userData},r.a.createElement(X.a,{className:a.card},r.a.createElement(K.a,null,r.a.createElement("img",{src:ee.a,className:a.userIcon,alt:""}),r.a.createElement(B.a,{variant:"subtitle2",gutterBottom:!0},r.a.createElement("b",null,t.fullName)),r.a.createElement(B.a,{variant:"body1",gutterBottom:!0},r.a.createElement("b",null,"Email: "),t.email),r.a.createElement(B.a,{variant:"body1",gutterBottom:!0},r.a.createElement("b",null,"Occupation: ")," ",t.occupation),r.a.createElement(B.a,{variant:"body1",gutterBottom:!0},r.a.createElement("b",null,"Cellphone:")," ",t.phoneNumber))),r.a.createElement(ae.a,null,r.a.createElement(re.a,{button:!0,onClick:this.handleProfilePage},r.a.createElement(ie.a,null,r.a.createElement(pe.a,null)),r.a.createElement(se.a,{primary:"Profile"})),r.a.createElement(re.a,{button:!0,onClick:this.handleChangeIsLoggedIn},r.a.createElement(ie.a,null,r.a.createElement("img",{src:ue.a,alt:""})),r.a.createElement(se.a,{primary:"Logout"}))))),r.a.createElement("main",{className:U()(a.content,Object(L.a)({},a.contentShift,n))},r.a.createElement("div",{className:a.drawerHeader}),e))}},{key:"handleChangeIsLoggedIn",value:function(){localStorage.setItem("isLoggedIn","false"),window.location.href="/"}},{key:"handleProfilePage",value:function(){window.location.href="/profile"}},{key:"handleNewTask",value:function(){window.location.href="/newtask"}}]),t}(n.Component),Ue=O()(function(e){return{card:{minWidth:275},root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(350,"px)"),marginLeft:350,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:350,flexShrink:0},drawerPaper:{width:350},drawerHeader:Object(A.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-350},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},userIcon:{width:"30%"},grow:{flexGrow:1},button:{marginRight:20},leftIcon:{marginRight:e.spacing.unit},toolbarTitle:{flex:1,textAlign:"left"}}})(Fe),We=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ue,null))}}]),t}(n.Component),qe=a(409),Je=a(408),Me=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={fullname:"",email:"",phone:0,occupation:"",password:""},a.handleChangeFullName=a.handleChangeFullName.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeEmail=a.handleChangeEmail.bind(Object(g.a)(Object(g.a)(a))),a.handleChangePhone=a.handleChangePhone.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeOccupation=a.handleChangeOccupation.bind(Object(g.a)(Object(g.a)(a))),a.handleChangePassword=a.handleChangePassword.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeProfile=a.handleChangeProfile.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement(q.a,{className:e.backButton,onClick:this.handleBackPage},r.a.createElement(De.a,null)),a=[{field:"New full name",onchange:this.handleChangeFullName,type:"text"},{field:"New email",onchange:this.handleChangeEmail,type:"text"},{field:"New phone number",onchange:this.handleChangePhone,type:"number"},{field:"New occupation",onchange:this.handleChangeOccupation,type:"text"},{field:"New password",onchange:this.handleChangePassword,type:"password"}].map(function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{required:!0,key:a,label:t.field,onChange:t.onchange,margin:"normal",className:e.text,variant:"outlined",type:t.type,defaultValue:t.default}),r.a.createElement("br",null))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{button:t}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(B.a,{variant:"h2",gutterBottom:!0},"Update your profile"),r.a.createElement("form",{className:e.form,onSubmit:this.handleChangeProfile},a,r.a.createElement(E.a,{variant:"contained",color:"primary",className:e.button,type:"submit"},"Update profile")))}},{key:"handleBackPage",value:function(){window.location.href="/tasks"}},{key:"handleChangeFullName",value:function(e){this.setState({fullname:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"handleChangeOccupation",value:function(e){this.setState({occupation:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeProfile",value:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("users"));for(var a in t.list)localStorage.getItem("userLogged")===t.list[a].username&&(t.list[a].fullname=this.state.fullname,t.list[a].email=this.state.email,t.list[a].phone=this.state.phone,t.list[a].occupation=this.state.occupation,t.list[a].password=this.state.password);localStorage.setItem("users",JSON.stringify(t)),alert("Profile updated"),window.location.href="/tasks"}}]),t}(n.Component),Ge=O()(function(e){return{backButton:{marginLeft:-12,marginRight:20},text:{width:"30%"},button:{width:"30%"}}})(Me),He=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={users:[],fullname:"",email:"",username:"",id:"",phone:0,password:""},a.handleChangeFullName=a.handleChangeFullName.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeEmail=a.handleChangeEmail.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeUsername=a.handleChangeUsername.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeId=a.handleChangeId.bind(Object(g.a)(Object(g.a)(a))),a.handleChangePhone=a.handleChangePhone.bind(Object(g.a)(Object(g.a)(a))),a.handleChangePassword=a.handleChangePassword.bind(Object(g.a)(Object(g.a)(a))),a.handleChangeOccupation=a.handleChangeOccupation.bind(Object(g.a)(Object(g.a)(a))),a.handleSendRegister=a.handleSendRegister.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement(q.a,{className:e.backButton,onClick:this.handleBackPage},r.a.createElement(De.a,null)),a=[{field:"Full name",onchange:this.handleChangeFullName,type:"text"},{field:"Your email",onchange:this.handleChangeEmail,type:"text"},{field:"Username",onchange:this.handleChangeUsername,type:"text"},{field:"Identification",onchange:this.handleChangeId,type:"text"},{field:"Phone number",onchange:this.handleChangePhone,type:"number"},{field:"Occupation",onchange:this.handleChangeOccupation,type:"text"},{field:"Password",onchange:this.handleChangePassword,type:"password"}].map(function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{required:!0,key:a,label:t.field,onChange:t.onchange,margin:"normal",className:e.text,variant:"outlined",type:t.type,defaultValue:t.default}),r.a.createElement("br",null))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{button:t}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(B.a,{variant:"h2",gutterBottom:!0},"Create your tasks account, it's free!"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSendRegister},a,r.a.createElement(E.a,{variant:"contained",color:"primary",className:e.button,type:"submit"},"Send")))}},{key:"handleBackPage",value:function(){window.location.href="/"}},{key:"handleChangeFullName",value:function(e){this.setState({fullname:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handleChangeId",value:function(e){this.setState({id:e.target.value})}},{key:"handleChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeOccupation",value:function(e){this.setState({occupation:e.target.value})}},{key:"handleSendRegister",value:function(e){e.preventDefault();var t={identification:this.state.id,fullName:this.state.fullname,email:this.state.email,userName:this.state.username,phoneNumber:this.state.phone,occupation:this.state.occupation,password:this.state.password};fetch("https://task-planner-api.herokuapp.com/user/new",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){alert(JSON.stringify(e))}),setTimeout(function(){window.location.href="/"},1e3)}}]),t}(n.Component),Ve=O()(function(e){return{backButton:{marginLeft:-12,marginRight:20},text:{width:"30%"},button:{width:"30%"}}})(He),ze=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=[{path:"/",component:function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(j,null))}},{path:"/register",component:function(){return r.a.createElement(Ve,null)}}],t=[{path:"/tasks",component:function(){return r.a.createElement("div",null,r.a.createElement(We,null))}},{path:"/profile",component:function(){return r.a.createElement(Ge,null)}}].map(function(e,t){return r.a.createElement(qe.a,{path:e.path,component:e.component,key:t})}),a=e.map(function(e,t){return r.a.createElement(qe.a,{exact:!0,path:e.path,component:e.component,key:t})}),n=localStorage.getItem("isLoggedIn");return r.a.createElement(Je.a,null,r.a.createElement("div",{className:"App"},"true"===n?t:a))}}]),t}(n.Component),Qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _e=a(190);a.n(_e).a.initializeApp({apiKey:"AIzaSyAFPNr5dBlaiLb1QJqp1YOTNRIGzn0QLpQ",authDomain:"task-planner-app-f396d.firebaseapp.com",databaseURL:"https://task-planner-app-f396d.firebaseio.com",projectId:"task-planner-app-f396d",storageBucket:"task-planner-app-f396d.appspot.com",messagingSenderId:"495126587051"}),i.a.render(r.a.createElement(ze,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("install",function(){console.log("install!!")}),window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Qe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ye(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Ye(t,e)})}}()}},[[191,1,2]]]);
//# sourceMappingURL=main.268c4fac.chunk.js.map