"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11885],{51933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(85893),s=t(11151);const r={title:"Configure JIT provisioning",slug:"/r/Configure_SAML_Self_Registration"},o=void 0,a={id:"guides/admin/sso/using_saml_self_registration/configure_saml_self_registration",title:"Configure JIT provisioning",description:"Before you begin:",source:"@site/docs/guides/12_admin/03_sso/02_using_saml_self_registration/01_configure_saml_self_registration.md",sourceDirName:"guides/12_admin/03_sso/02_using_saml_self_registration",slug:"/r/Configure_SAML_Self_Registration",permalink:"/km-docusaurus-test/r/Configure_SAML_Self_Registration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configure JIT provisioning",slug:"/r/Configure_SAML_Self_Registration"},sidebar:"tutorialSidebar",previous:{title:"Using SAML for JIT provisioning",permalink:"/km-docusaurus-test/r/about_saml_selfregister"},next:{title:"About migrating to JIT provisioning",permalink:"/km-docusaurus-test/r/About_Migrating_to_Just_In_Time_Provisioning"}},d={},l=[];function c(e){const n={a:"a",admonition:"admonition",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Before you begin:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/about_saml",children:"Enable SAML authentication"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Configure your identity provider to add the ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/about_saml_selfregister",children:"required attributes"})," to your assertion."]}),"\n",(0,i.jsx)(n.li,{children:"Add any optional attributes to the assertion that your identity provider (IdP) can include."}),"\n",(0,i.jsxs)(n.li,{children:["Have the Administrator ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/c_role_permissions",children:"role"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To complete this task:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Veracode Platform, click the gear icon ",(0,i.jsx)(n.img,{src:t(50299).Z+"",width:"24",height:"16"})," in the top menu and select ",(0,i.jsx)(n.strong,{children:"Admin"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"JIT Provisioning"})," tab."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You cannot make changes to this tab unless you have provided the settings on the ",(0,i.jsx)("b",{children:"SAML"})," tab."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In Organization Settings, set ",(0,i.jsx)(n.strong,{children:"Configure default settings for Just-In-Time user provisioning"})," to ",(0,i.jsx)(n.strong,{children:"On"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In User Data Updates, choose how the Veracode Platform handles conflicts between data in the SAML assertion and data in the Veracode Platform with these options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prefer Organization Identity Provider Data"}),": the IdP of the organization controls the configuration of the user. The Veracode Platform is updated with the data that is in the SAML assertion. This setting allows the IdP to automatically update fields that may change, such as email address, phone number, last name, roles, and team assignments."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"After you set this option, you cannot update the authentication type for existing users or update users with the Identity APIs because the identity provider controls all user information."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prefer Veracode User Data"}),": the Veracode Platform ignores any changed data in the SAML assertion."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose which default attributes to set on individual users. Veracode requires that you either specify the default Veracode user role in the SAML attributes or the SAML assertion data. If you do not set a default user role, the user cannot log in."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you disable JIT provisioning, you must manually add and update users in the Veracode Platform. Additionally, Veracode deletes your existing JIT settings, which you must re-configure if you reactivate JIT. Disabling JIT provisioning does not prevent existing users from logging in."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50299:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYYAAB2GAV2iE4EAAAAkdEVYdENvbW1lbnQATEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMX7Qgw0AAARkSURBVDhPNZTrTxRXGMb3j+r32sSvJv1Sk6Ym+qGXxLSx1mjT2qa11qS2aFMbbURRpFwEVBSWm9wRkHLxggiCXAVkdWHZnZ3bzszOr89Z2k1m58x7znne533eS8KK8oQxZNBPb08vxy6Qdi1W8rDuROSKOezAJRdGFCKQGVuHYx8KQUwUF7Hw8dwIHYci+HoEQ8KXwZYtE2khB3gZll8MU1bTxdfXujhcfZfbMykcbeX0oGOen0d3sbXOCjgIBahv+WK7GOC6Po4+PO0nwrBA3rcIgizbgbg5GSqbGtjf/4J09g0dg+18dX2UAYNe9MkLxIBF+o9CFzcKSsC2GIeBHu0RK9KijLIlzN/mVoq/Ozq58GCdht4+frjRw5XlrdLh1Pwsv1a38t3gBNXdI5QlJ+lbysuRjytA24uxQjkWkKsLrhtTLPgUiyG+vhOhl6a2tpb3k+N8ebOTfXVjdG56Ai+Kmbx7RbKbM5xr6GZ/1SBHL7VwPDnCuJIVB15JOiOXF/nKg2TR2lGIJo+27idWnw7y+fVp1kxIUtnoaRUsxmamOds7weXJNdYMFbE1YDib/H6vhVOjKTZliyWHo8xH/2dXMDuyu+7uZ+Jx+232VI4ytLRNLCpBmGei/y5fXGvig7uDfFjVyOmeZ8yZsog93m6ucKGqme+bnrBhqEsqr2BT8HfZGyIRrhyLrqkib+EpZ27Vc6hrHleG1VdTnLzaQ+uqYSAa6084U9PNqadbKlGHgbZmDpZ3UL1kSfc8mdhWNW1wf3yY82PPWTeBsMbjyQFOj6wqB6qG9HSSPfUzbKonhseSHKtbK1VGiRFbNHQMcDSZVvQ56hqTXByzSsxj6Zn3VV5xyPxYDx/92cDPQ4v0/jPMp5du881YikR25QknKzo40PZCSVITzY3y06V2Kl9nCBRRbmOSH8vvcXbatNdbBpNJDpV1cmPFwhGJwn9EjCyLzx5y7Fw575W1cGXqtag7JMZb69hb/Yi5jbzks/GVrMmhFo6UD7G/5gH7rjRzcXCVV9bObo7SKS7W1XGiY4qXJvdy4IfW7iSIXObml2icz/C2aNyqil4+7+OzykkW5c8VF5WxcpFhdmGZ+kfqj5k3vJYt8nd2O9lao6y2hfMjb0jFORzlvhCoknQmLEaCjEuNaPrArBNBkKH7VjvvXmvmSHUb79T207SwW26GnSm1rYUJjl9uYm/DAB9X3OPwnUUmNV/MdDHzyVFkBc0FBVQimFdt2PKSc2wSckohtaIObqHy8Sz3+/v5trGTP5bTRAJfmZ3it6t3+KXvGb3TU1R0tdCbCUq6B0qarR4wPCw1pKl/4yQsBKWhaCJOBJFk0UZ2x2FHBrLb1N+s5UDXHOnMGgO97Zyo6eOhnJmQdnTRgJu5Y4akmZgG1Bcb3/Uw/WoksiKNEC/ULJJ+5oApudLwkN/l2eeqnFY++aubgxVt3JlZwRKaHdq7suXzpSFXApEDjSM5d0t7rnBCN1saH04Y8i9xnmvhMXegKwAAAABJRU5ErkJggg=="},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);