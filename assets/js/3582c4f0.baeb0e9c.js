"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38117],{12462:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=n(85893),i=n(11151);const t={title:"Groovy packaging",slug:"/r/c_compilation_groovy"},s=void 0,l={id:"guides/packaging/groovy",title:"Groovy packaging",description:"Your Groovy applications must meet specific packaging requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/13_groovy.md",sourceDirName:"guides/03_packaging",slug:"/r/c_compilation_groovy",permalink:"/km-docusaurus-test/r/c_compilation_groovy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Groovy packaging",slug:"/r/c_compilation_groovy"},sidebar:"tutorialSidebar",previous:{title:"Go packaging",permalink:"/km-docusaurus-test/r/compilation_go"},next:{title:"iOS packaging",permalink:"/km-docusaurus-test/r/compilation_ios"}},c={},a=[{value:"Supported Groovy versions",id:"supported-groovy-versions",level:2},{value:"Supported Groovy frameworks",id:"supported-groovy-frameworks",level:2},{value:"Compilation guidance",id:"compilation-guidance",level:2},{value:"Grails command-line settings",id:"grails-command-line-settings",level:2},{value:"IntelliJ settings",id:"intellij-settings",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Your Groovy applications must meet specific packaging requirements before you can submit them for scanning."}),"\n",(0,r.jsxs)(o.p,{children:["See ",(0,r.jsx)(o.a,{href:"/km-docusaurus-test/r/r_supported_table",children:"Supported languages and platforms"})," for instructions for other platforms."]}),"\n",(0,r.jsx)(o.h2,{id:"supported-groovy-versions",children:"Supported Groovy versions"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Language"}),(0,r.jsx)(o.th,{children:"Version"}),(0,r.jsx)(o.th,{children:"Compilers"}),(0,r.jsx)(o.th,{children:"Platform"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Groovy"}),(0,r.jsx)(o.td,{children:"2.4\u20132.6, 3.0"}),(0,r.jsx)(o.td,{children:"groovyc 2.4\u20132.6, 3.0 targeted for JDK7+"}),(0,r.jsx)(o.td,{children:"JVM 1.6\u20131.9, 10\u201315"})]})})]}),"\n",(0,r.jsx)(o.h2,{id:"supported-groovy-frameworks",children:"Supported Groovy frameworks"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Framework"}),(0,r.jsx)(o.th,{children:"Supported versions"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Grails"}),(0,r.jsx)(o.td,{children:"3.2\u20133.3, 4.0, 5.0"})]})})]}),"\n",(0,r.jsx)(o.h2,{id:"compilation-guidance",children:"Compilation guidance"}),"\n",(0,r.jsx)(o.p,{children:"You can compile Groovy applications using either:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"The Grails command-line system"}),"\n",(0,r.jsx)(o.li,{children:"IDEs that wrap Groovy and Grails, such as IntelliJ or the Groovy/Grails Tool Suite (GGTS)"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"You must compile and submit Groovy applications as JAR or WAR files. Submit debug symbols for as much of the application as possible."}),"\n",(0,r.jsxs)(o.p,{children:["If you build your project using Ant, you must turn on the ",(0,r.jsx)(o.code,{children:"debug"})," property in the ",(0,r.jsx)(o.code,{children:"javac"})," tasks, for example:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'<javac debug="on"> ... set of classes\n     </javac>\n'})}),"\n",(0,r.jsx)(o.h2,{id:"grails-command-line-settings",children:"Grails command-line settings"}),"\n",(0,r.jsx)(o.p,{children:"If you build your project with the Grails command line, change your current working directory to the Groovy application home directory. Run this command to produce the JAR or WAR file that you can upload to Veracode for analysis:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"projectHome$ ./grailsw assemble\n"})}),"\n",(0,r.jsx)(o.h2,{id:"intellij-settings",children:"IntelliJ settings"}),"\n",(0,r.jsx)(o.p,{children:"If you build your project with IntelliJ IDEA, perform these actions in the IDE:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Build"})," > ",(0,r.jsx)(o.strong,{children:"Rebuild Project"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Build"})," > ",(0,r.jsx)(o.strong,{children:"Make Grails Web Archive"})]}),"\n",(0,r.jsxs)(o.p,{children:["When the actions complete, the ",(0,r.jsx)(o.code,{children:"build/libs/"})," folder of the project home directory displays the WAR file that you can upload to Veracode for analysis."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>s});var r=n(67294);const i={},t=r.createContext(i);function s(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);