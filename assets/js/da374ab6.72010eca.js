"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84591],{33379:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=t(85893),i=t(11151);const n={author:["Kevin McCarthy"],title:"Using SAML for self-registration (Legacy)",slug:"/r/about_saml_selfregister_Legacy"},o=void 0,a={id:"guides/admin/sso/using_saml_self_registration_legacy/README",title:"Using SAML for self-registration (Legacy)",description:"If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see Using SAML for JIT provisioning.",source:"@site/docs/guides/12_admin/03_sso/05_using_saml_self_registration_legacy/README.md",sourceDirName:"guides/12_admin/03_sso/05_using_saml_self_registration_legacy",slug:"/r/about_saml_selfregister_Legacy",permalink:"/km-docusaurus-test/r/about_saml_selfregister_Legacy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{author:["Kevin McCarthy"],title:"Using SAML for self-registration (Legacy)",slug:"/r/about_saml_selfregister_Legacy"},sidebar:"tutorialSidebar",previous:{title:"Configure a user for SAML access (Legacy)",permalink:"/km-docusaurus-test/r/Configure_a_User_for_SAML_Access_Legacy"},next:{title:"Configure SAML self-registration (Legacy)",permalink:"/km-docusaurus-test/r/Configure_SAML_Self_Registration_Legacy"}},d={},c=[{value:"Required and optional SAML attributes",id:"required-and-optional-saml-attributes",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see ",(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/about_saml_selfregister",children:"Using SAML for JIT provisioning"}),"."]})}),"\n",(0,r.jsx)(s.p,{children:"You can use SAML self-registration to provision new users or update existing user records."}),"\n",(0,r.jsx)(s.p,{children:"By using SAML self-registration, you can use a SAML assertion to provision a new user in the Veracode Platform. SAML self-registration eliminates the need for preliminary provisioning of users. If SAML self-registration is available, you can sign in to the Veracode Platform using SAML and have a login automatically created with default roles and privileges. You can choose to allow self-registered users to access the Veracode Platform immediately or require approval before they can access it."}),"\n",(0,r.jsx)(s.p,{children:"SAML self-registration also allows you to update existing user records with fresh information from your identity provider. If there are changes to the first or last name of a user, phone number, or email address, your identity provider automatically propagates these values to Veracode without requiring administrator intervention."}),"\n",(0,r.jsx)(s.p,{children:"SAML self-registration takes advantage of the SAML specification support for optional attributes in the SAML XML document. Veracode requires specific attributes for using SAML self-registration. You can add other attributes to populate additional data for new or existing records."}),"\n",(0,r.jsx)(s.h2,{id:"required-and-optional-saml-attributes",children:"Required and optional SAML attributes"}),"\n",(0,r.jsxs)(s.p,{children:["Veracode recognizes these SAML attributes as containing information for SAML self-registration. The attributes ",(0,r.jsx)(s.code,{children:"firstname"}),", ",(0,r.jsx)(s.code,{children:"lastname"}),", and ",(0,r.jsx)(s.code,{children:"email"})," are required. You can provide the other attributes to supply additional information about the user to Veracode. Veracode requires that you either specify the default Veracode user role in the SAML attributes, or you choose to use SAML assertion data, in which you must specify the Veracode user role."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"firstname"})," ",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"Required"})]}),(0,r.jsx)(s.td,{children:"First name of the user."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"lastname"}),"  ",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"Required"})]}),(0,r.jsx)(s.td,{children:"Last name of the user."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"email"}),"      ",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"Required"})]}),(0,r.jsx)(s.td,{children:"Email address of the user."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"roles"})}),(0,r.jsxs)(s.td,{children:["Comma-separated list of valid ",(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"Veracode roles"}),". If not provided here, you must specify the default user roles using ",(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/Configure_SAML_Self_Registration",children:"SAML assertion data"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"teams"})}),(0,r.jsxs)(s.td,{children:["Comma-separated list of teams to which the newly registered users are assigned. If you do not provide this information using the ",(0,r.jsx)(s.code,{children:"teams"})," attribute, you must specify the default teams using ",(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/Configure_SAML_Self_Registration",children:"SAML assertion data"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"teamsmanaged"})}),(0,r.jsxs)(s.td,{children:["Comma-separated list of teams managed by the ",(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"team administrator"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"hasiprestriction"})}),(0,r.jsxs)(s.td,{children:["Set to ",(0,r.jsx)(s.code,{children:"TRUE"})," if the user is restricted to a certain IP range. Requires that you enter a value for ",(0,r.jsx)(s.code,{children:"ipaddresslist"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ipaddresslist"})}),(0,r.jsx)(s.td,{children:"The IP range to which the user is restricted for login."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"customone"})}),(0,r.jsx)(s.td,{children:"Custom Field One."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"customtwo"})}),(0,r.jsx)(s.td,{children:"Custom Field Two."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"customthree"})}),(0,r.jsx)(s.td,{children:"Custom Field Three."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"customfour"})}),(0,r.jsx)(s.td,{children:"Custom Field Four."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"customfive"})}),(0,r.jsx)(s.td,{children:"Custom Field Five."})]})]})]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var r=t(67294);const i={},n=r.createContext(i);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);