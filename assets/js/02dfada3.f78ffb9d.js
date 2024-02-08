"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57894],{37658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(85893),s=n(11151);const r={title:"Enable TLS encryption",slug:"/r/enable-tls-encryption"},a=void 0,o={id:"guides/dynamic_analysis/dast_essentials/dast_essentials_tls_vulns/enable-tls-encryption",title:"Enable TLS encryption",description:"There is no SSL/TLS encryption enabled on your server. As a result, all traffic to your web application is transported over unencrypted channels. This leaves your users vulnerable to man-in-the-middle attacks.",source:"@site/docs/guides/08_dynamic_analysis/15_dast_essentials/08_dast_essentials_tls_vulns/12_enable-tls-encryption.md",sourceDirName:"guides/08_dynamic_analysis/15_dast_essentials/08_dast_essentials_tls_vulns",slug:"/r/enable-tls-encryption",permalink:"/km-docusaurus-test/r/enable-tls-encryption",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Enable TLS encryption",slug:"/r/enable-tls-encryption"},sidebar:"tutorialSidebar",previous:{title:"Prevent SSL BREACH attacks",permalink:"/km-docusaurus-test/r/prevent-ssl-breach"},next:{title:"Enable Perfect Forward Secrecy",permalink:"/km-docusaurus-test/r/enable-perfect-forward-secrecy"}},l={},c=[{value:"Security assessment",id:"security-assessment",level:2},{value:"Vulnerability information",id:"vulnerability-information",level:2},{value:"TLS encryption vulnerability information",id:"tls-encryption-vulnerability-information",level:2},{value:"How to prevent TLS vulnerabilities",id:"how-to-prevent-tls-vulnerabilities",level:2},{value:"Server configuration",id:"server-configuration",level:3},{value:"Certificates",id:"certificates",level:3},{value:"Application",id:"application",level:3},{value:"Enable TLS encryption",id:"enable-tls-encryption",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"There is no SSL/TLS encryption enabled on your server. As a result, all traffic to your web application is transported over unencrypted channels. This leaves your users vulnerable to man-in-the-middle attacks."}),"\n",(0,i.jsx)(t.h2,{id:"security-assessment",children:"Security assessment"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Security_Assessment_EnableTLSEncryption",src:n(6689).Z+"",width:"907",height:"332"}),"\nCVSS vector: ",(0,i.jsxs)(t.a,{href:"https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",children:["AV",":N","/AC",":H","/PR",":N","/UI",":N","/S",":U","/C",":H","/I",":H","/A",":N"]})]}),"\n",(0,i.jsx)(t.h2,{id:"vulnerability-information",children:"Vulnerability information"}),"\n",(0,i.jsx)(t.p,{children:"TLS is a cryptographic protocol that evolved from the now-deprecated Secure Socket Layer (SSL) protocol. The purpose of both protocols is to secure web sessions and data transfer over the internet, mainly on the application layer, though not exclusively."}),"\n",(0,i.jsx)(t.p,{children:"When properly applied, TLS encryption offers several major security advantages:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Authentication:"})," enables clients to verify the identity of the server, i.e., that they are connected to the real server"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Confidentiality:"})," prevents attackers from reading the contents of traffic"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Integrity:"})," prevents attackers from modifying traffic"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Replay prevention:"})," protects against attackers replaying requests against the server"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"tls-encryption-vulnerability-information",children:"TLS encryption vulnerability information"}),"\n",(0,i.jsx)(t.p,{children:"The lack of TLS encryption is a major vulnerability that leaves traffic exposed and easily accessible by malevolent parties."}),"\n",(0,i.jsx)(t.p,{children:"But even with TLS encryption, there are a number of possible directions from which your application can be attacked and compromised. Some of the attacks that can be launched against systems using TLS encryption include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Renegotiation attacks"}),"\n",(0,i.jsx)(t.li,{children:"Downgrade attacks"}),"\n",(0,i.jsx)(t.li,{children:"Cross-protocol attacks"}),"\n",(0,i.jsx)(t.li,{children:"Timing attacks on padding"}),"\n",(0,i.jsx)(t.li,{children:"BEAST, CRIME, BREACH, and POODLE attacks, and more."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-prevent-tls-vulnerabilities",children:"How to prevent TLS vulnerabilities"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html",children:"OWASP Cheat Sheet section on Transport Layer Protection"})," offers a number of measures that can be taken to prevent TLS vulnerabilities. These include:"]}),"\n",(0,i.jsx)(t.h3,{id:"server-configuration",children:"Server configuration"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Only provide support to strong protocols such as TLS 1.2 and 1.3, and disable all other protocols"}),"\n",(0,i.jsxs)(t.li,{children:["Only provide support to strong ciphers and, if possible, only ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Galois/Counter_Mode",children:"Galois/Counter Mode (GCM) ciphers"})]}),"\n",(0,i.jsx)(t.li,{children:"If using an ephemeral Diffie-Hellman key exchange, only strong DH parameters should be used"}),"\n",(0,i.jsx)(t.li,{children:"Disable TLS compression to prevent CRIME"}),"\n",(0,i.jsx)(t.li,{children:"Keep cryptographic libraries up to date with the latest patches"}),"\n",(0,i.jsx)(t.li,{children:"Test the server configuration once it has been hardened"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"certificates",children:"Certificates"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Use a strong private key and protect it from unauthorized access using filesystem permissions and other controls"}),"\n",(0,i.jsx)(t.li,{children:"Use strong cryptographic hashing algorithms such as SHA-256"}),"\n",(0,i.jsx)(t.li,{children:"Ensure the domain name matches the fully qualified name of the server that presents the certificate"}),"\n",(0,i.jsx)(t.li,{children:"Reconsider the use of Wildcard Certificates due to the increased risk of a security compromise"}),"\n",(0,i.jsx)(t.li,{children:"Use a trusted and well-known certificate authority (CA)"}),"\n",(0,i.jsx)(t.li,{children:"Use Certification Authority Authorization (CAA) DNS records to define the CAs that can issue certificates"}),"\n",(0,i.jsx)(t.li,{children:"Always provide intermediate certificates along with the main certificate"}),"\n",(0,i.jsx)(t.li,{children:"Consider the use of extended validation (EV) certificates if they can provide additional security and value"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"application",children:"Application"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Use TLS for all pages, not just sensitive ones"}),"\n",(0,i.jsx)(t.li,{children:"Do not use non-TLS content (such as JavaScript or CSS) on pages that are available over TLS"}),"\n",(0,i.jsx)(t.li,{children:"Flag all cookies with the Secure attribute"}),"\n",(0,i.jsx)(t.li,{children:"Use HTTP headers to instruct browsers not to cache sensitive information"}),"\n",(0,i.jsx)(t.li,{children:"Utilize HTTP Strict Transport Security (HSTS) to ensure the browser always requests the site over HTTPS"}),"\n",(0,i.jsx)(t.li,{children:"Consider the use of Client-Side Certificates so that clients are also required to verify their identity"}),"\n",(0,i.jsx)(t.li,{children:"Use public key pinning to provide assurance that the server certificate is valid, trusted, and matches the certificate expected for the server"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"enable-tls-encryption",children:"Enable TLS encryption"}),"\n",(0,i.jsxs)(t.p,{children:["To provide a secure way for your users to communicate with your web application, you must enable TLS encryption. You can ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/configure-trusted-certificates",children:"enable TLS encryption by configuring trusted certificates"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6689:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Security_Assessment_EnableTLSEncryption-3480eced5a124cf961c28d8fe1fc6e04.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(67294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);