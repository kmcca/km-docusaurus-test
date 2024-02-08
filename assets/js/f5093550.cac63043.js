"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63113],{6279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(85893),s=n(11151);const a={title:"Using HTTPie with the Python authentication library",slug:"/r/c_httpie_tool"},r=void 0,o={id:"guides/apis/apis_hmac_auth/configure_python_hmac/hmac_use_httpie_with_python",title:"Using HTTPie with the Python authentication library",description:"The Veracode APIs require that you enable HMAC authentication for your Python application as a security measure for accessing API resources. The Python authentication library provides an integration between HTTPie and the Veracode APIs, which adds HMAC authentication when using the Veracode APIs from the command line.",source:"@site/docs/guides/14_apis/03_apis_hmac_auth/02_configure_python_hmac/01_hmac_use_httpie_with_python.md",sourceDirName:"guides/14_apis/03_apis_hmac_auth/02_configure_python_hmac",slug:"/r/c_httpie_tool",permalink:"/km-docusaurus-test/r/c_httpie_tool",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using HTTPie with the Python authentication library",slug:"/r/c_httpie_tool"},sidebar:"tutorialSidebar",previous:{title:"Install the Python authentication library",permalink:"/km-docusaurus-test/r/t_install_api_authen"},next:{title:"Prepare Ubuntu for the Python authentication library",permalink:"/km-docusaurus-test/r/c_ubuntu_notes"}},c={},l=[{value:"Using multiple profiles",id:"using-multiple-profiles",level:2},{value:"Debugging HTTPie with Python",id:"debugging-httpie-with-python",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Veracode APIs require that you enable HMAC authentication for your Python application as a security measure for accessing API resources. The Python authentication library provides an integration between HTTPie and the Veracode APIs, which adds HMAC authentication when using the Veracode APIs from the command line."}),"\n",(0,i.jsx)(t.p,{children:"You use the library to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Load the ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"API credentials"})]}),"\n",(0,i.jsx)(t.li,{children:"Generate an HMAC authorization header"}),"\n",(0,i.jsx)(t.li,{children:"Issue an HTTP call to a Veracode API with a valid endpoint"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The default HTTP method is ",(0,i.jsx)(t.code,{children:"GET"}),". For command examples, see ",(0,i.jsx)(t.a,{href:"/km-docusaurus-test/r/c_rest_intro",children:"REST APIs"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To download and install HTTPie, see ",(0,i.jsx)(t.a,{href:"https://httpie.org",children:"https://httpie.org"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about HTTPie, you can run ",(0,i.jsx)(t.code,{children:"http --help"})," and review the HTTPie documentation. You can also get tips and examples from ",(0,i.jsx)(t.a,{href:"https://devhints.io/httpie",children:"https://devhints.io/httpie"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"HMAC authentication is the same for all calls, but the other aspects of authentication are specific to the API endpoint you want to call."}),"\n",(0,i.jsx)(t.h2,{id:"using-multiple-profiles",children:"Using multiple profiles"}),"\n",(0,i.jsx)(t.p,{children:"You may need to store multiple sets of credentials for your interactive user and an API Service Account. You can store multiple profiles in the Veracode credentials file, and specify which profile to use when invoking API commands with HTTPie."}),"\n",(0,i.jsxs)(t.p,{children:["If you are using the ",(0,i.jsx)(t.code,{children:"config"})," file, you can define multiple profiles."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"[default]\nveracode_api_key_id = <YOUR_API_KEY_ID>\nveracode_api_key_secret = <YOUR_API_KEY_SECRET>\n\n[api_service]\nveracode_api_key_id = <YOUR_SERVICE_ACCT_API_KEY_ID>\nveracode_api_key_secret = <YOUR_SERVICE_ACCT_API_KEY_SECRET>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["By default, you still use the default profile. Set ",(0,i.jsx)(t.code,{children:"VERACODE_API_PROFILE"})," to change profiles. For example, to use the profile ",(0,i.jsx)(t.code,{children:"api_service"})," in Bash, or a similar shell environment, enter this command before calling ",(0,i.jsx)(t.code,{children:"httpie"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"$ export VERACODE_API_PROFILE=api_service\n"})}),"\n",(0,i.jsx)(t.p,{children:"In Bash and similar shells, you can also set environment variables for each command. For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'VERACODE_API_PROFILE=api_service http -A veracode_hmac "https://api.veracode.com/appsec/v1/applications"\n'})}),"\n",(0,i.jsx)(t.p,{children:"This works on Linux, Mac, and Windows as long as you are using a command shell like Bash or Zsh."}),"\n",(0,i.jsxs)(t.p,{children:["To use a different profile on Windows in the DOS prompt, use the ",(0,i.jsx)(t.code,{children:"SET"})," command in the DOS prompt:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"SET VERACODE_API_PROFILE=api_service\n"})}),"\n",(0,i.jsx)(t.h2,{id:"debugging-httpie-with-python",children:"Debugging HTTPie with Python"}),"\n",(0,i.jsx)(t.p,{children:"After installing the HMAC library, if you use HTTPie and receive an error that includes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"pkg_resources.DistributionNotFound: The 'PySocks!=1.5.7,>=1.5.6; extra == \"socks\"' distribution was not found and is required by requests \n"})}),"\n",(0,i.jsx)(t.p,{children:"Run this command to debug it:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'pip install "PySocks!=1.5.7,>=1.5.6"\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);