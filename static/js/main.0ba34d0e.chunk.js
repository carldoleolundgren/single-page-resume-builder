(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{89:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(11),r=a.n(n),s=a(51),o=a(5),l=a(29),d=a(13),j=a.n(d),b=a(62),u=a.n(b),h=a(126),O=a(128),p=a(129),x=a(41),m=a(124),y=a(58),v=a.n(y),g=a(59),f=a.n(g),D=a(44),S=a(120),k=a(130),I=a(125),w=a(1),N={editIcons:{padding:"0px 3px"},personalData:{display:"inline-block",lineHeight:"30px",width:"325px"}},L=function(e){function t(t,a){e.setEditing(Object(o.a)(Object(o.a)({},e.editing),{},Object(x.a)({},t,!1))),e.savePersonalData(t,a)}var a=e.resumeData.personalData,c=[],i={firstName:"First Name",lastName:"Last Name",title:"Job Title",phone:"Phone Number",email:"Email Address",address:"Physical U.S. Address",github:'Link to Github Profile (leave out "https://")',careerObjective:"Describe your career objective in three to four sentences"},n=function(a){c.push(Object(w.jsx)("div",{children:!e.resumeData.personalData[a]||e.editing[a]?Object(w.jsxs)("div",{children:[Object(w.jsx)(S.a,{id:a,placeholder:i[a],defaultValue:e.resumeData.personalData[a]?e.resumeData.personalData[a]:"",style:{width:"325px"}}),Object(w.jsx)(m.a,{"aria-label":"save",size:"small",style:N.editIcons,color:"primary",onClick:function(){t(a,document.querySelector("#".concat(a)).value)},children:Object(w.jsx)(v.a,{})})]}):Object(w.jsxs)("div",{children:[Object(w.jsx)(D.a,{variant:"body1",style:N.personalData,children:e.resumeData.personalData[a]}),Object(w.jsx)(m.a,{"aria-label":"edit",size:"small",style:N.editIcons,onClick:function(){return e.setEditing(Object(o.a)(Object(o.a)({},e.editing),{},Object(x.a)({},a,!0)))},children:Object(w.jsx)(f.a,{})})]})},j()()))};for(var r in a)n(r);return Object(w.jsxs)("div",{children:[Object(w.jsx)(I.a,{title:"Personal Data"}),c,!e.resumeData.careerObjective||e.editing.careerObjective?Object(w.jsxs)("div",{children:[Object(w.jsx)(k.a,{id:"careerObjective",placeholder:i.careerObjective,defaultValue:e.resumeData.careerObjective?e.resumeData.careerObjective:"",multiline:!0,rows:4,style:{width:"650px"}}),Object(w.jsx)(m.a,{"aria-label":"save",size:"small",style:N.editIcons,color:"primary",onClick:function(){return t("careerObjective",document.querySelector("#careerObjective").value)},children:Object(w.jsx)(v.a,{})})]}):Object(w.jsxs)("div",{children:[Object(w.jsx)(D.a,{variant:"body1",style:Object(o.a)(Object(o.a)({},N.personalData),{},{width:"650px",lineHeight:"23px"}),children:e.resumeData.careerObjective}),Object(w.jsx)(m.a,{"aria-label":"edit",size:"small",style:N.editIcons,onClick:function(){return e.setEditing(Object(o.a)(Object(o.a)({},e.editing),{},{careerObjective:!0}))},children:Object(w.jsx)(f.a,{})})]})]})},C=a(36),q=a.n(C),J=a(64),A=a.n(J),z=function(e){var t=Object(c.useState)(1),a=Object(l.a)(t,2),i=a[0],n=a[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),o=s[0],d=s[1],j=function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)(k.a,{className:"responsibilities",placeholder:"Enter work responsibility and/or accomplishment \n(template can fit approx. 8 to 12 bullets on average)",multiline:!0,rows:2,style:{width:"650px"},defaultValue:e.value}),Object(w.jsx)(m.a,{onClick:function(){n(i+1),function(){for(var e=[],t=0;t<document.querySelectorAll(".responsibilities").length;t++)e.push(document.querySelectorAll(".responsibilities")[t].firstChild.firstChild.value);d(e)}()},children:Object(w.jsx)(A.a,{})})]})},b=function(){for(var e=[],t=0;t<i;t++)e.push(Object(w.jsx)(j,{index:t,value:o[t]},t));return e};return Object(w.jsxs)("div",{children:[Object(w.jsx)(S.a,{id:"company",placeholder:"Company Name",style:{width:"325px"}}),Object(w.jsx)("br",{}),Object(w.jsx)(S.a,{id:"job",placeholder:"Job Title",style:{width:"325px"}}),Object(w.jsx)("br",{}),Object(w.jsx)(S.a,{id:"jobLocation",placeholder:"Location",style:{width:"325px"}}),Object(w.jsx)("br",{}),Object(w.jsx)(b,{}),Object(w.jsx)("br",{}),Object(w.jsx)(k.a,{id:"start",label:"Start Date",type:"month",defaultValue:"",InputLabelProps:{shrink:!0}}),Object(w.jsx)("br",{}),Object(w.jsx)(k.a,{id:"end",label:"End Date",type:"month",defaultValue:"",InputLabelProps:{shrink:!0}}),Object(w.jsx)("br",{}),Object(w.jsx)(h.a,{variant:"contained",color:"primary",size:"small",style:{marginTop:"7px"},onClick:function(){e.submitNewJob(),n(1),d([])},children:"Submit"})]})},E=function(e){var t=e.responsibilities.map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(D.a,{variant:"body2",children:e.description})},j()())}));return Object(w.jsxs)("li",{children:[Object(w.jsx)(D.a,{variant:"body1",children:e.company}),Object(w.jsx)(D.a,{variant:"body1",children:e.job}),Object(w.jsx)(D.a,{variant:"body1",children:e.jobLocation}),Object(w.jsxs)(D.a,{variant:"body1",children:[e.start," to ",e.endDisplay]}),Object(w.jsx)("ul",{children:t}),Object(w.jsx)(m.a,{variant:"contained",color:"secondary",size:"small",onClick:function(){return e.deleteJob(e.jobID)},children:Object(w.jsx)(q.a,{})})]})},B=function(e){var t=e.resumeData.jobs.map((function(t){return Object(w.jsx)(E,{company:t.company,job:t.job,responsibilities:t.responsibilities,jobLocation:t.jobLocation,start:t.start,endDisplay:t.endDisplay,deleteJob:e.deleteJob,jobID:t.jobID},j()())}));return Object(w.jsxs)("div",{children:[Object(w.jsx)(I.a,{title:"Work Experience"}),Object(w.jsx)(z,{submitNewJob:e.submitNewJob}),Object(w.jsx)("ul",{children:t})]})},T=function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)(S.a,{id:"school",placeholder:"School/University/Institution",style:{width:"325px"}}),Object(w.jsx)("br",{}),Object(w.jsx)(S.a,{id:"degree",placeholder:"Degree/Certification",style:{width:"325px"}}),Object(w.jsx)("br",{}),Object(w.jsx)(S.a,{id:"schoolLocation",placeholder:"Location",style:{width:"325px"}}),Object(w.jsx)("br",{}),Object(w.jsx)(k.a,{type:"month",id:"graduation",label:"Graduation Date",style:{width:"325px"},InputLabelProps:{shrink:!0}}),Object(w.jsx)("br",{}),Object(w.jsx)(k.a,{id:"accomplishments",multiline:!0,rows:3,placeholder:"Noteworthy Accomplishments/Honors",style:{width:"325px"}}),Object(w.jsx)("br",{}),Object(w.jsx)(h.a,{variant:"contained",color:"primary",size:"small",style:{marginTop:"7px"},onClick:function(){return e.submitNewSchool()},children:"Submit"})]})},P=function(e){return Object(w.jsxs)("li",{children:[Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)(D.a,{variant:"body1",style:{lineHeight:"30px"},children:e.school}),Object(w.jsx)(m.a,{variant:"contained",color:"secondary",size:"small",style:{padding:"0px 3px"},onClick:function(){return e.deleteSchool(e.schoolID)},children:Object(w.jsx)(q.a,{})})]}),Object(w.jsx)(D.a,{variant:"body1",children:e.schoolLocation}),Object(w.jsxs)(D.a,{variant:"body1",children:[e.degree,", ",e.graduationDisplay]}),Object(w.jsx)(D.a,{variant:"body2",children:e.accomplishments}),Object(w.jsx)("br",{})]})},H=function(e){var t=e.resumeData.schools.map((function(t){return Object(w.jsx)(P,{school:t.school,schoolLocation:t.schoolLocation,degree:t.degree,graduationDisplay:t.graduationDisplay,accomplishments:t.accomplishments,deleteSchool:e.deleteSchool,schoolID:t.schoolID},j()())}));return Object(w.jsxs)("div",{children:[Object(w.jsx)(I.a,{title:"Education"}),Object(w.jsx)(T,{submitNewSchool:e.submitNewSchool}),Object(w.jsx)("ul",{children:t})]})},F=function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)(S.a,{id:"skill",placeholder:"Skill"}),Object(w.jsx)(h.a,{variant:"contained",color:"primary",size:"small",style:{marginLeft:"7px"},onClick:function(){return e.submitNewSkill()},children:"Submit"})]})},R=function(e){return Object(w.jsxs)("li",{style:{display:"flex"},children:[Object(w.jsx)(D.a,{variant:"body1",style:{lineHeight:"30px"},children:e.skill}),Object(w.jsx)(m.a,{variant:"contained",color:"secondary",size:"small",onClick:function(){return e.deleteSkill(e.skillID)},children:Object(w.jsx)(q.a,{})})]})},W=function(e){var t=e.resumeData.skills.map((function(t){return Object(w.jsx)(R,{skill:t.skill,deleteSkill:e.deleteSkill,skillID:t.skillID},j()())}));return Object(w.jsxs)("div",{children:[Object(w.jsx)(I.a,{title:"Skills"}),Object(w.jsx)(F,{submitNewSkill:e.submitNewSkill}),Object(w.jsx)("ul",{children:t})]})},M=a(65),V=a.n(M),U=a(66),G=a.n(U),K=a(67),X=a.n(K),_=a(68),Q=a.n(_),Y=a(127),Z=function(e){var t;if(e.address&&e.address.includes(",")){var a=e.address.split(",").length,c=e.address.split(",")[0];4===a&&(c="".concat(c,", ").concat(e.address.split(",")[1]));var i="".concat(e.address.split(",")[a-2],", ").concat(e.address.split(",")[a-1]);t=Object(w.jsxs)(D.a,{variant:"body2",align:"right",style:se.contactData,children:[c,Object(w.jsx)("br",{}),i]})}else{for(var n,r,s=e.address.split(" "),l="",d=0;d<s.length;d++){var j=l+="".concat(s[d]," ");j.length<34&&l.length<34?n=j:r=j.slice(-j.length+n.length)}t=Object(w.jsxs)(D.a,{variant:"body2",align:"right",style:Object(o.a)(Object(o.a)({},se.contactData),{},{right:"150px"}),children:[n,Object(w.jsx)("br",{}),r]})}return t},$=function(e){return Object(w.jsx)("div",{children:Object(w.jsxs)("li",{style:se.educationAndSkillsLi,children:[Object(w.jsx)(D.a,{variant:"body1",style:{fontWeight:"bold"},children:e.school.toUpperCase()}),Object(w.jsx)(D.a,{variant:"body1",style:{fontWeight:"bold",fontStyle:"italic"},children:e.schoolLocation}),Object(w.jsx)(D.a,{variant:"body1",children:e.degree}),Object(w.jsx)(D.a,{variant:"body1",children:e.graduationDisplay}),Object(w.jsx)(D.a,{variant:"body2",children:e.accomplishments})]})})},ee=function(e){var t=e.schools.map((function(e){return Object(w.jsx)($,{school:e.school,schoolLocation:e.schoolLocation,degree:e.degree,graduationDisplay:e.graduationDisplay,accomplishments:e.accomplishments,schoolID:e.schoolID},j()())}));return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{style:{paddingLeft:"0"},children:t})})},te=function(e){return Object(w.jsx)("li",{style:Object(o.a)(Object(o.a)({},se.educationAndSkillsLi),{},{marginBottom:".1in"}),children:Object(w.jsx)(D.a,{variant:"body1",children:e.skill})})},ae=function(e){var t=e.skills.map((function(e){return Object(w.jsx)(te,{skill:e.skill,skillID:e.skillID},j()())}));return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{style:{paddingLeft:"0"},children:t})})},ce=function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(D.a,{variant:"body2",children:e.description})})},ie=function(e){var t=e.responsibilities.map((function(e){return Object(w.jsx)(ce,{description:e.description},j()())}));return Object(w.jsxs)("li",{style:se.jobs,children:[Object(w.jsx)(D.a,{variant:"body1",style:{fontWeight:"bold"},children:e.job.toUpperCase()}),Object(w.jsxs)(D.a,{variant:"body1",children:[e.company,", ",e.jobLocation," / ",e.start," to"," ",e.endDisplay]}),Object(w.jsx)("ul",{children:t})]})},ne=function(e){var t=e.jobs.map((function(t){return Object(w.jsx)(ie,{company:t.company,job:t.job,description:t.description,jobLocation:t.jobLocation,start:t.start,endDisplay:t.endDisplay,deleteJob:e.deleteJob,jobID:t.jobID,responsibilities:t.responsibilities},j()())}));return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{style:{paddingLeft:"0"},children:t})})},re="rgb(195,157,57)",se={resumeContainer:{height:"11in",width:"8.5in",zIndex:"-1",overflow:"hidden",backgroundColor:"white",margin:"0px auto",outline:".03in solid ".concat(re),outlineOffset:"-.03in"},resumeHeader:{height:"2.2in",borderBottom:".03in solid ".concat(re),display:"inline-block",verticalAlign:"top"},contactDataSection:{height:"2.2in",width:"2.9in",justifyContent:"spaceBetween",flexDirection:"column",borderBottom:".03in solid ".concat(re),borderRight:".03in solid ".concat(re),backgroundColor:"rgb(80,80,80)",zIndex:"1"},clearFloats:{clear:"both"},contactData:{float:"right",marginRight:".1in",marginBottom:".2in",paddingLeft:"min(5px)",wordWrap:"break-word",maxWidth:"29ch",color:"white",zIndex:"1"},contactIcon:{float:"right",marginRight:".15in",color:"white",zIndex:"1"},nameBox:{height:"1.4in",width:"4.8in",margin:"0.45in auto 0 auto",backgroundColor:"rgb(80,80,80)"},resumeBody:{display:"inline-block",verticalAlign:"top"},resumeBodyHeaders:{textAlign:"center",letterSpacing:"0.25em",marginTop:".3in"},educationAndSkills:{height:"8.77in",width:"2.9in",borderRight:".03in solid ".concat(re),backgroundColor:"rgb(80,80,80)",zIndex:"-1"},educationAndSkillsLi:{color:"white",listStyleType:"none",textAlign:"right",margin:"0 .25in .3in .1in"},objectiveAndExperience:{width:"5.17in",margin:"0in .2in"},jobs:{listStyleType:"none"},link:{textDecoration:"none",color:"white"}},oe=function(e){return Object(w.jsxs)("div",{style:Object(o.a)(Object(o.a)({},se.resumeContainer),{},{top:"".concat(e.resumeTop,"px")}),children:[Object(w.jsxs)("div",{children:[" ",Object(w.jsxs)("div",{style:Object(o.a)(Object(o.a)({},se.resumeHeader),se.contactDataSection),children:[" ",Object(w.jsxs)("div",{style:se.clearFloats,children:[" ",Object(w.jsx)(V.a,{fontSize:"small",style:Object(o.a)(Object(o.a)({},se.contactIcon),{},{marginTop:".25in"})}),Object(w.jsx)(D.a,{variant:"body2",style:Object(o.a)(Object(o.a)({},se.contactData),{},{marginTop:".25in"}),children:e.resumeData.personalData.email})]}),Object(w.jsxs)("div",{style:se.clearFloats,children:[" ",Object(w.jsx)(G.a,{fontSize:"small",style:se.contactIcon}),Object(w.jsx)(D.a,{variant:"body2",style:se.contactData,children:e.resumeData.personalData.phone})]}),Object(w.jsxs)("div",{style:se.clearFloats,children:[" ",Object(w.jsx)(X.a,{fontSize:"small",style:se.contactIcon}),Object(w.jsx)(Z,{address:e.resumeData.personalData.address})]}),e.resumeData.personalData.github&&Object(w.jsxs)("div",{style:se.clearFloats,children:[" ",Object(w.jsx)(Q.a,{fontSize:"small",style:se.contactIcon}),Object(w.jsx)(D.a,{variant:"body2",style:se.contactData,children:Object(w.jsx)(Y.a,{href:"https://".concat(e.resumeData.personalData.github),target:"_blank",rel:"noopener noreferrer",style:se.link,children:e.resumeData.personalData.github})})]})]}),Object(w.jsxs)("div",{style:Object(o.a)(Object(o.a)({},se.resumeHeader),{},{width:"5.57in"}),children:[" ",Object(w.jsxs)("div",{style:se.nameBox,children:[" ",Object(w.jsx)(D.a,{variant:"h3",align:"center",style:{color:"white"},gutterBottom:!0,children:e.resumeData.personalData.firstName}),Object(w.jsx)(D.a,{variant:"h3",align:"center",style:{color:"".concat(re)},children:e.resumeData.personalData.lastName})]}),Object(w.jsx)(D.a,{variant:"h5",align:"center",color:"textSecondary",children:e.resumeData.personalData.title})]})]}),Object(w.jsxs)("div",{children:[" ",Object(w.jsxs)("div",{style:Object(o.a)(Object(o.a)({},se.resumeBody),se.educationAndSkills),children:[" ",e.resumeData.schools.length>0&&Object(w.jsxs)("div",{children:[" ",Object(w.jsx)(D.a,{variant:"h5",style:Object(o.a)(Object(o.a)({},se.resumeBodyHeaders),{},{color:"".concat(re)}),children:"EDUCATION"}),Object(w.jsx)(ee,{schools:e.resumeData.schools})]}),Object(w.jsx)(D.a,{variant:"h5",style:Object(o.a)(Object(o.a)({},se.resumeBodyHeaders),{},{color:"".concat(re)}),children:"SKILLS"}),Object(w.jsx)(ae,{skills:e.resumeData.skills})]}),Object(w.jsxs)("div",{style:Object(o.a)(Object(o.a)({},se.resumeBody),se.objectiveAndExperience),children:[" ",Object(w.jsxs)("div",{children:[" ",Object(w.jsx)(D.a,{variant:"h5",style:Object(o.a)(Object(o.a)({},se.resumeBodyHeaders),{},{color:"black"}),children:"CAREER OBJECTIVE"}),Object(w.jsx)(D.a,{variant:"body1",style:{marginTop:".20in",display:"inline-block"},children:e.resumeData.careerObjective})]}),Object(w.jsxs)("div",{children:[" ",Object(w.jsx)(D.a,{variant:"h5",style:Object(o.a)(Object(o.a)({},se.resumeBodyHeaders),{},{color:"black"}),children:"EXPERIENCE"}),Object(w.jsx)(ne,{jobs:e.resumeData.jobs})]})]})]})]})};var le=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),a=t[0],i=t[1],n={personalData:{firstName:"",lastName:"",title:"",phone:"",email:"",address:"",github:""},careerObjective:"",jobs:[],schools:[],skills:[]},r=Object(c.useState)(localStorage.getItem("resumeDataJSON")?JSON.parse(localStorage.getItem("resumeDataJSON")):n),d=Object(l.a)(r,2),b=d[0],x=d[1];Object(c.useEffect)((function(){localStorage.setItem("resumeDataJSON",JSON.stringify(b))}));var m=Object(c.useState)({firstName:!1,lastName:!1,title:!1,phone:!1,email:!1,address:!1,github:!1,careerObjective:!1}),y=Object(l.a)(m,2),v=y[0],g=y[1],f=Object(c.useRef)(),D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S={centeredDiv:{display:"flex",justifyContent:"space-between"},cardsWithMargins:{marginTop:"30px",marginLeft:"50px",marginRight:"50px"}};return Object(w.jsxs)("div",{style:{paddingBottom:"50px"},children:[Object(w.jsx)(O.a,{style:{marginBottom:"50px"},children:Object(w.jsxs)(p.a,{style:S.centeredDiv,children:[Object(w.jsx)(h.a,Object(o.a)(Object(o.a)({variant:"contained"},a?{disabled:!0}:{color:"primary"}),{},{size:"small",onClick:function(){return i(!0)},children:"Input Resume Data"})),Object(w.jsx)(h.a,Object(o.a)(Object(o.a)({variant:"contained"},a?{color:"primary"}:{disabled:!0}),{},{size:"small",onClick:function(){return i(!1)},children:"Preview Formatted Resume"})),!a&&Object(w.jsx)(u.a,{content:function(){return f.current},documentTitle:"Resume - ".concat(b.personalData.firstName," ").concat(b.personalData.lastName),trigger:function(){return Object(w.jsx)(h.a,{variant:"contained",color:"primary",size:"small",children:"Print to PDF"})}}),Object(w.jsx)(h.a,{variant:"contained",color:"secondary",size:"small",onClick:function(){return x(n)},children:"Clear All Data"})]})}),a?Object(w.jsxs)("div",{children:[Object(w.jsx)(O.a,{style:S.cardsWithMargins,children:Object(w.jsx)(p.a,{children:Object(w.jsx)(L,{resumeData:b,editing:v,setEditing:g,savePersonalData:function(e,t){if("careerObjective"===e){var a;a=t,x(Object(o.a)(Object(o.a)({},b),{},{careerObjective:a}))}else{var c=Object(o.a)({},b.personalData);c[e]=t,x(Object(o.a)(Object(o.a)({},b),{},{personalData:c}))}}})})}),Object(w.jsx)(O.a,{style:S.cardsWithMargins,children:Object(w.jsx)(p.a,{children:Object(w.jsx)(B,{resumeData:b,submitNewJob:function(){var e=JSON.parse(JSON.stringify(b)),t={};t.company=document.querySelector("#company").value,t.job=document.querySelector("#job").value,t.jobLocation=document.querySelector("#jobLocation").value,t.jobID="".concat(t.company).concat(j()()),""!==document.querySelector("#start").value&&(t.start=parseFloat(document.querySelector("#start").value.replace("-","."))),""!==document.querySelector("#end").value?t.endSort=parseFloat(document.querySelector("#end").value.replace("-",".")):t.endSort=3e3,t.responsibilities=[];for(var a=document.querySelectorAll(".responsibilities").length,c=0;c<a;c++){var i={};i.index=c,i.description=document.querySelectorAll(".responsibilities")[c].children[0].children[0].value,i.description&&t.responsibilities.push(i)}if("start"in t){var n=t.start.toString().split(".")[1];n=D[n-1];var r=t.start.toString().split(".")[0];t.start="".concat(n," ").concat(r)}if(3e3===t.endSort)t.endDisplay="Present";else{var s=t.endSort.toString().split(".")[1];s=D[s-1];var l=t.endSort.toString().split(".")[0];t.endDisplay="".concat(s," ").concat(l)}e.jobs.push(t),e.jobs.sort((function(e,t){return t.endSort-e.endSort})),x(Object(o.a)({},e)),document.querySelector("#company").value="",document.querySelector("#job").value="",document.querySelectorAll(".responsibilities").value="",document.querySelector("#jobLocation").value="",document.querySelector("#start").value="",document.querySelector("#end").value=""},deleteJob:function(e){var t=Object(s.a)(b.jobs),a=t.findIndex((function(t){return t.jobID===e}));t.splice(a,1),x(Object(o.a)(Object(o.a)({},b),{},{jobs:t}))}})})}),Object(w.jsx)(O.a,{style:S.cardsWithMargins,children:Object(w.jsx)(p.a,{children:Object(w.jsx)(H,{resumeData:b,submitNewSchool:function(){var e=JSON.parse(JSON.stringify(b)),t={};if(t.school=document.querySelector("#school").value,t.degree=document.querySelector("#degree").value,t.schoolLocation=document.querySelector("#schoolLocation").value,t.accomplishments=document.querySelector("#accomplishments").value,t.schoolID="".concat(t.school).concat(j()()),""!==document.querySelector("#graduation").value?t.graduationSort=parseFloat(document.querySelector("#graduation").value.replace("-",".")):t.graduationSort=3e3,3e3===t.graduationSort)t.graduationDisplay="Present";else{var a=t.graduationSort.toString().split(".")[1];a=D[a-1];var c=t.graduationSort.toString().split(".")[0];t.graduationDisplay="".concat(a," ").concat(c)}e.schools.push(t),e.schools.sort((function(e,t){return t.graduationSort-e.graduationSort})),x(Object(o.a)({},e)),document.querySelector("#school").value="",document.querySelector("#degree").value="",document.querySelector("#schoolLocation").value="",document.querySelector("#accomplishments").value="",document.querySelector("#graduation").value=""},deleteSchool:function(e){var t=Object(s.a)(b.schools),a=t.findIndex((function(t){return t.schoolID===e}));t.splice(a,1),x(Object(o.a)(Object(o.a)({},b),{},{schools:t}))}})})}),Object(w.jsx)(O.a,{style:S.cardsWithMargins,children:Object(w.jsx)(p.a,{children:Object(w.jsx)(W,{resumeData:b,submitNewSkill:function(){var e=JSON.parse(JSON.stringify(b)),t={};t.skill=document.querySelector("#skill").value,t.skillID="".concat(t.skill).concat(j()()),e.skills.push(t),x(Object(o.a)({},e)),document.querySelector("#skill").value=""},deleteSkill:function(e){var t=Object(s.a)(b.skills),a=t.findIndex((function(t){return t.skillID===e}));t.splice(a,1),x(Object(o.a)(Object(o.a)({},b),{},{skills:t}))}})})})]}):Object(w.jsx)("div",{ref:f,children:Object(w.jsx)(oe,{resumeData:b,resumeTop:120})})]})};r.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(le,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.0ba34d0e.chunk.js.map