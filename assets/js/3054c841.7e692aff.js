"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70737],{38835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=a(85893),n=a(11151);const i={title:"Create an SBOM for application profiles with the REST API",slug:"/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API"},r=void 0,o={id:"guides/apis/rest_apis/sca_rest_api/sca_rest_api_generate_sbom",title:"Create an SBOM for application profiles with the REST API",description:"You can use the SCA REST API to generate a software bill of materials (SBOM) based on your latest Veracode Software Composition Analysis upload scan results or agent-based scan results that you have linked to an application profile. The response includes an inventory of all components in your application in CycloneDX JSON or SPDX format.",source:"@site/docs/guides/14_apis/04_rest_apis/15_sca_rest_api/03_sca_rest_api_generate_sbom.md",sourceDirName:"guides/14_apis/04_rest_apis/15_sca_rest_api",slug:"/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API",permalink:"/km-docusaurus-test/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create an SBOM for application profiles with the REST API",slug:"/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API"},sidebar:"tutorialSidebar",previous:{title:"Create an SBOM for agent-based projects with the REST API",permalink:"/km-docusaurus-test/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Agent_Based_Scans_with_the_REST_API"},next:{title:"About data deduplication in SBOMs for application profiles with linked projects",permalink:"/km-docusaurus-test/r/About_Data_Deduplication_in_SBOMs_for_Application_Profiles_with_Linked_Projects"}},c={},l=[{value:"Permissions and authentication",id:"permissions-and-authentication",level:2},{value:"Create an SBOM",id:"create-an-sbom",level:2},{value:"SBOM API Specification",id:"sbom-api-specification",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["You can use the SCA REST API to generate a software bill of materials (SBOM) based on your latest Veracode Software Composition Analysis upload scan results or agent-based scan results that you have linked to an application profile. The response includes an inventory of all components in your application in ",(0,s.jsx)(t.a,{href:"https://cyclonedx.org/",children:"CycloneDX JSON"})," or ",(0,s.jsx)(t.a,{href:"https://spdx.dev/",children:"SPDX"})," format."]}),"\n",(0,s.jsx)(t.h2,{id:"permissions-and-authentication",children:"Permissions and authentication"}),"\n",(0,s.jsxs)(t.p,{children:["Before you can use all the endpoints of the SBOM APIs, you must have one of these accounts and the required ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"roles"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"An API service account with the Results API role"}),"\n",(0,s.jsx)(t.li,{children:"A user account with the Administrator, Executive, Reviewer, Sandbox User, Security Insights, or Security Lead role"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_api_credentials3",children:"API credentials"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_enabling_hmac",children:"HMAC authentication"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Ensure you access the APIs with the ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/Region_Domains_for_Veracode_APIs",children:"domain for your region"})]}),"\n",(0,s.jsx)(t.h2,{id:"create-an-sbom",children:"Create an SBOM"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Complete at least one of these Veracode SCA scan types in the last 13 months:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Policy scan"}),"\n",(0,s.jsx)(t.li,{children:"Sandbox scan that you have promoted to a policy scan"}),"\n",(0,s.jsxs)(t.li,{children:["Agent-based scan that you have ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/Link_SCA_Projects_to_Applications",children:"linked to the application"})," for which you are creating the SBOM."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Use this request to return the application GUID from the ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:"Applications API"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'http --auth-type=veracode_hmac "https://api.veracode.com/appsec/v1/applications?name={applicationName}"\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Use this request to return the SBOM containing your SCA upload scan ",(0,s.jsx)(t.strong,{children:"Results:"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'http --auth-type=veracode_hmac "https://api.veracode.com/srcclr/sbom/v1/targets/{applicationGuid}/cyclonedx?type=application"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Set the ",(0,s.jsx)(t.code,{children:"type"})," property to ",(0,s.jsx)(t.code,{children:"application"})," to retrieve data from Veracode SCA policy scans or agent-based scans linked to your application profile. To generate an SBOM for agent-based scans, follow ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Agent_Based_Scans_with_the_REST_API",children:"these instructions"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"sbom-api-specification",children:"SBOM API Specification"}),"\n",(0,s.jsxs)(t.p,{children:["Specifications for the CycloneDx SBOM API and the SPDX SBOM API are available on ",(0,s.jsx)(t.a,{href:"https://app.swaggerhub.com/apis/Veracode/veracode-sca_agent_api_specification/3.0",children:"SwaggerHub"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var s=a(67294);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);