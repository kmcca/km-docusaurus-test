"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79011],{82146:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var r=d(85893),i=d(11151);const c={title:"Upload XML APIs quick reference",slug:"/r/c_UploadAPI_calls"},n=void 0,t={id:"guides/apis/xml_apis/upload_xml_apis/upload_xml_apis_quickref",title:"Upload XML APIs quick reference",description:"This table lists the XML API calls for managing scans of your applications. For more detailed information, see the topic for a specific call.",source:"@site/docs/guides/14_apis/05_xml_apis/02_upload_xml_apis/01_upload_xml_apis_quickref.md",sourceDirName:"guides/14_apis/05_xml_apis/02_upload_xml_apis",slug:"/r/c_UploadAPI_calls",permalink:"/km-docusaurus-test/r/c_UploadAPI_calls",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Upload XML APIs quick reference",slug:"/r/c_UploadAPI_calls"},sidebar:"tutorialSidebar",previous:{title:"Upload XML API",permalink:"/km-docusaurus-test/r/c_about_upload_API"},next:{title:"Mapping Upload API tasks",permalink:"/km-docusaurus-test/r/c_mapping_Upload"}},l={},a=[];function o(e){const s={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"This table lists the XML API calls for managing scans of your applications. For more detailed information, see the topic for a specific call."}),"\n",(0,r.jsx)(s.p,{children:"Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"XML API Call"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"XML API Parameters"}),(0,r.jsx)(s.th,{children:"Scan Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_beginprescan",children:(0,r.jsx)(s.code,{children:"beginprescan.do"})})}),(0,r.jsx)(s.td,{children:"Initiates the prescan of an application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"sandbox_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"auto_scan"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"scan_all_nonfatal_top_level_modules"})]}),(0,r.jsx)(s.td,{children:"Static"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_beginscan",children:(0,r.jsx)(s.code,{children:"beginscan.do"})})}),(0,r.jsx)(s.td,{children:"Initiates the full scan of an application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"})," and one of these parameters: ",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"modules"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"scan_all_top_level_modules"}),(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"scan_previously_selected_modules"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"scan_selected_modules"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsx)(s.td,{children:"Static"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_createapp",children:(0,r.jsx)(s.code,{children:"createapp.do"})})}),(0,r.jsx)(s.td,{children:"Creates a new application in the portfolio."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_name"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"business_criticality"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"description"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"vendor_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"policy"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"business_unit"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"business_owner"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"business_owner_email"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"teams"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"origin"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"industry"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"app_type"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"deployment_method"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"web_application"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"archer_app_name"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"tags"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"next_day_scheduling_enabled"})]}),(0,r.jsxs)(s.td,{children:["Static,",(0,r.jsx)("br",{})," Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_createbuild",children:(0,r.jsx)(s.code,{children:"createbuild.do"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"REST equivalent:",(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:(0,r.jsx)(s.code,{children:"POST /appsec/v1/applications"})})]}),(0,r.jsx)(s.td,{children:"Creates a build of an existing application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"version"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"platform"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"lifecycle_stage"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"launch_date"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"legacy_scan_engine"})]}),(0,r.jsxs)(s.td,{children:["Static, ",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_deleteapp",children:(0,r.jsx)(s.code,{children:"deleteapp.do"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"REST equivalent:",(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:(0,r.jsx)(s.code,{children:"DELETE /appsec/v1/applications/{applicationGuid}"})})]}),(0,r.jsx)(s.td,{children:"Deletes an existing application from the portfolio."}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"app_id"})}),(0,r.jsxs)(s.td,{children:["Static,",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_deletebuild",children:(0,r.jsx)(s.code,{children:"deletebuild.do"})})}),(0,r.jsx)(s.td,{children:"Deletes the most recent build of an application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"})," ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsxs)(s.td,{children:["Static,",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_getappinfo",children:(0,r.jsx)(s.code,{children:"getappinfo.do"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"REST equivalent:",(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:(0,r.jsx)(s.code,{children:"GET /appsec/v1/applications/{applicationGuid}"})})]}),(0,r.jsx)(s.td,{children:"Returns all the application profile information."}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"app_id"})}),(0,r.jsxs)(s.td,{children:["Static,",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_getapplist",children:(0,r.jsx)(s.code,{children:"getapplist.do"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"REST equivalent:",(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:(0,r.jsx)(s.code,{children:"GET /appsec/v1/applications"})})]}),(0,r.jsx)(s.td,{children:"Compiles a list of applications in the portfolio."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"include_user_info"})]}),(0,r.jsxs)(s.td,{children:["Static",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_getbuildinfo",children:(0,r.jsx)(s.code,{children:"getbuildinfo.do"})})}),(0,r.jsx)(s.td,{children:"Returns all the information about the build."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"build_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsxs)(s.td,{children:["Static, ",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_getbuildlist",children:(0,r.jsx)(s.code,{children:"getbuildlist.do"})})}),(0,r.jsx)(s.td,{children:"Compiles a list of all the builds of an application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsxs)(s.td,{children:["Static, ",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_getfilelist",children:(0,r.jsx)(s.code,{children:"getfilelist.do"})})}),(0,r.jsx)(s.td,{children:"Compiles a list of the uploaded files in an application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"build_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsx)(s.td,{children:"Static"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_getpolicylist",children:(0,r.jsx)(s.code,{children:"getpolicylist.do"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"REST equivalent:",(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/c_policy_rest_api",children:(0,r.jsx)(s.code,{children:"GET /appsec/v1/policies"})})]}),(0,r.jsx)(s.td,{children:"Compiles a list of the policies available for use by your account."}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["Static,",(0,r.jsx)("br",{})," Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_getprescanresults",children:(0,r.jsx)(s.code,{children:"getprescanresults.do"})})}),(0,r.jsx)(s.td,{children:"Fetches the results of the prescan."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"build_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsx)(s.td,{children:"Static"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_getvendorlist",children:(0,r.jsx)(s.code,{children:"getvendorlist.do"})})}),(0,r.jsx)(s.td,{children:"Compiles a list of third-party vendors provisioned for scans."}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["Static,",(0,r.jsx)("br",{})," Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_removefile",children:(0,r.jsx)(s.code,{children:"removefile.do"})})}),(0,r.jsx)(s.td,{children:"Removes specified files of an application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"file_id"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsx)(s.td,{children:"Static"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_updateapp",children:(0,r.jsx)(s.code,{children:"updateapp.do"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"REST equivalent:",(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/c_apps_intro",children:(0,r.jsx)(s.code,{children:"PUT /appsec/v1/applications/{applicationGuid}"})})]}),(0,r.jsx)(s.td,{children:"Amends an existing application in the portfolio."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"app_name"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"description"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"policy"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"business_criticality"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"business_unit"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"business_owner"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"business_owner_email"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"teams"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"origin"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"industry"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"app_type"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"deployment_method"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"archer_app_name"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"tags"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"custom_field_name"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"custom_field_value"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"next_day_scheduling_enabled"})]}),(0,r.jsxs)(s.td,{children:["Static,",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_updatebuild",children:(0,r.jsx)(s.code,{children:"updatebuild.do"})})}),(0,r.jsx)(s.td,{children:"Updates the most recent build of an application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"build_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"version"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"lifecycle_stage"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"launch_date"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsxs)(s.td,{children:["Static, ",(0,r.jsx)("br",{}),"Dynamic"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_uploadfile",children:(0,r.jsx)(s.code,{children:"uploadfile.do"})})}),(0,r.jsx)(s.td,{children:"Uploads the files of an application."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"file"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"save_as"})]}),(0,r.jsx)(s.td,{children:"Static"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/km-docusaurus-test/r/r_uploadlargefile",children:(0,r.jsx)(s.code,{children:"uploadlargefile.do"})})}),(0,r.jsx)(s.td,{children:"Uploads the files of an application as a set of parts to avoid timeout errors during the upload."}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"app_id"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"file"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Optional:",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"filename"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"sandbox_id"})]}),(0,r.jsx)(s.td,{children:"Static"})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,s,d)=>{d.d(s,{Z:()=>t,a:()=>n});var r=d(67294);const i={},c=r.createContext(i);function n(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);