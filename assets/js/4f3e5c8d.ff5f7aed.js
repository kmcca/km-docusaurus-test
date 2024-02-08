"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79171],{82571:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(85893),r=s(11151);const i={title:"Enable HTTP Strict Transport Security",slug:"/r/enable-hsts"},c=void 0,a={id:"guides/dynamic_analysis/dast_essentials/dast_essentials_tls_vulns/enable-hsts",title:"Enable HTTP Strict Transport Security",description:"The web server does not offer HTTP Strict Transport Security. HSTS enforces HTTPS connections. This prevents downgrade attacks to an insecure HTTP connection.",source:"@site/docs/guides/08_dynamic_analysis/15_dast_essentials/08_dast_essentials_tls_vulns/04_enable-hsts.md",sourceDirName:"guides/08_dynamic_analysis/15_dast_essentials/08_dast_essentials_tls_vulns",slug:"/r/enable-hsts",permalink:"/km-docusaurus-test/r/enable-hsts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Enable HTTP Strict Transport Security",slug:"/r/enable-hsts"},sidebar:"tutorialSidebar",previous:{title:"Configure trusted certificates",permalink:"/km-docusaurus-test/r/configure-trusted-certificates"},next:{title:"Enable missing SSL CAA records",permalink:"/km-docusaurus-test/r/enable-missing-ssl-caa-record"}},o={},l=[{value:"Security assessment",id:"security-assessment",level:2},{value:"About HSTS",id:"about-hsts",level:2},{value:"Prevent attacks",id:"prevent-attacks",level:2},{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:3},{value:"Nginx",id:"nginx",level:3},{value:"Apache HTTP Strict Transport Security",id:"apache-http-strict-transport-security",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The web server does not offer HTTP Strict Transport Security. HSTS enforces HTTPS connections. This prevents downgrade attacks to an insecure HTTP connection."}),"\n",(0,n.jsx)(t.h2,{id:"security-assessment",children:"Security assessment"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Security_Assessment_EnableHSTS",src:s(34033).Z+"",width:"907",height:"332"})}),"\n",(0,n.jsxs)(t.p,{children:["CVSS vector: ",(0,n.jsxs)(t.a,{href:"https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N",children:["AV",":N","/AC",":H","/PR",":N","/UI",":N","/S",":U","/C",":L","/I",":L","/A",":N"]})]}),"\n",(0,n.jsx)(t.h2,{id:"about-hsts",children:"About HSTS"}),"\n",(0,n.jsx)(t.p,{children:"HTTP Strict Transport Security (HSTS) is a web security policy that ensures that browsers always use HTTPS to connect to websites. Part of its purpose is to remove the need to redirect users from HTTP to HTTPS website versions or secure any such redirects."}),"\n",(0,n.jsx)(t.p,{children:"This is achieved with the HSTS header that the server sends back to the client at the beginning of the connection. This header informs the browser that after the first visit, which HSTS does not cover, it should only use HTTPS to interact with the website."}),"\n",(0,n.jsx)(t.p,{children:"The Strict Transport Security header also prevents users from ignoring browser warnings about invalid or insecure SSL/TLS certificates."}),"\n",(0,n.jsx)(t.h2,{id:"prevent-attacks",children:"Prevent attacks"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find examples of how to enable HSTS on different platforms."}),"\n",(0,n.jsxs)(t.p,{children:["It is important to note that when deploying, HSTS policy should be declared at the base domain (sometimes called the root domain, though there is a difference). For example, ",(0,n.jsx)(t.code,{children:"https://crashtest-security.com/"})," instead of ",(0,n.jsx)(t.code,{children:"https://www.crashtest-security.com/"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To cover subdomains, the ",(0,n.jsx)(t.code,{children:"includeSubDomains"})," directive should be utilized. But for this to work, all subdomains associated with the base domain must naturally also support HTTPS."]}),"\n",(0,n.jsx)(t.p,{children:"Use the following guides to set the correct header enabling HSTS."}),"\n",(0,n.jsx)(t.h3,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,n.jsxs)(t.p,{children:["With Let's Encrypt, it is straightforward to enable HSTS. When creating a new certificate, add the ",(0,n.jsx)(t.code,{children:"-HSTS"})," flag. If your certificates are already generated by Let's Encrypt, run the same command and select ",(0,n.jsx)(t.strong,{children:"Attempt to reinstall this existing certificate"})," as the first option. This will reuse your certificate and enable HSTS stapling."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"certbot run -d [DOMAIN] --staple-ocsp --hsts\n"})}),"\n",(0,n.jsx)(t.h3,{id:"nginx",children:"Nginx"}),"\n",(0,n.jsxs)(t.p,{children:["On Nginx you need to update your SSL configuration which is usually located in ",(0,n.jsx)(t.code,{children:"at/etc/nginx/nginx.conf,/etc/nginx/sited-enabled/yoursite.com"})," (Ubuntu/Debian) or ",(0,n.jsx)(t.code,{children:"/etc/nginx/conf.d/nginx.conf"})," (RHEL/CentOS), to include the correct header with the ",(0,n.jsx)(t.code,{children:"add_headerdirectives"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'server {  \n        add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; ";  \n   \n        listen   443;  \n        server_name example.org;  \n   \n        root /usr/share/nginx/www;  \n        index index.html index.htm;  \n   \n        ssl on;  \n        ssl_certificate /etc/nginx/ssl/example.org/server.crt;  \n        ssl_certificate_key /etc/nginx/ssl/example.org/server.key;  \n   \n        ssl_stapling on;  \n        ssl_stapling_verify on;  \n        ssl_trusted_certificate /etc/ssl/private/ca-certs.pem;  \n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"apache-http-strict-transport-security",children:"Apache HTTP Strict Transport Security"}),"\n",(0,n.jsxs)(t.p,{children:["On Apache you need to update your SSL configuration to include the correct Header directives. Add this to the virtual host configuration in ",(0,n.jsx)(t.code,{children:"/etc/apache2/sites-enabled/domain.conf"})," or ",(0,n.jsx)(t.code,{children:"/etc/httpd/sites-enabled/domain.conf"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'<IfModule mod_ssl.c>  \n    SSLStaplingCache shmcb:/tmp/stapling_cache(128000)  \n    <VirtualHost *:443>  \n            Header always set Strict-Transport-Security "max-age=31536000"  \n   \n            ServerAdmin webmaster@localhost  \n            ServerName example.com  \n            DocumentRoot /var/www  \n   \n            SSLEngine on  \n   \n            SSLCertificateFile /etc/apache2/ssl/example.com/apache.crt  \n            SSLCertificateKeyFile /etc/apache2/ssl/example.com/apache.key  \n   \n            SSLCACertificateFile /etc/ssl/ca-certs.pem  \n            SSLUseStapling on  \n    </VirtualHost>  \n</IfModule>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},34033:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Security_Assessment_IncreaseTLSKeySize-e8b60f72154550155e179584ceb5f1ee.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>c});var n=s(67294);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);