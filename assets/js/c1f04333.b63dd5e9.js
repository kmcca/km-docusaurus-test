"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61744],{60758:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(85893),s=t(11151);const i={title:"Get eLearning progress reports with the REST API",slug:"/r/r_elearning_progress_API"},d=void 0,a={id:"guides/apis/rest_apis/elearning_rest_api/elearning_api_progress_reports",title:"Get eLearning progress reports with the REST API",description:"Use the eLearning API to return a collection of progress status report cards, in JSON format, for the eLearning users you manage. The response includes report cards of all eLearning users in your organization.",source:"@site/docs/guides/14_apis/04_rest_apis/06_elearning_rest_api/05_elearning_api_progress_reports.md",sourceDirName:"guides/14_apis/04_rest_apis/06_elearning_rest_api",slug:"/r/r_elearning_progress_API",permalink:"/km-docusaurus-test/r/r_elearning_progress_API",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get eLearning progress reports with the REST API",slug:"/r/r_elearning_progress_API"},sidebar:"tutorialSidebar",previous:{title:"Get eLearning learner details with the REST API",permalink:"/km-docusaurus-test/r/Get_eLearning_Learner_Details_with_the_REST_API"},next:{title:"Findings REST API",permalink:"/km-docusaurus-test/r/c_findings_v2_intro"}},o={},c=[{value:"Resource URL",id:"resource-url",level:2},{value:"Parameters",id:"parameters",level:2},{value:"HTTP codes",id:"http-codes",level:2},{value:"Example request",id:"example-request",level:2},{value:"Example response",id:"example-response",level:2}];function l(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Use the eLearning API to return a collection of progress status report cards, in JSON format, for the eLearning users you manage. The response includes report cards of all eLearning users in your organization."}),"\n",(0,n.jsx)(r.h2,{id:"resource-url",children:"Resource URL"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"https://api.veracode.com/elearning/v1/reportcards\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Query or Path Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"user_id "})}),(0,n.jsx)(r.td,{children:"Query"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"Optional. User identifier."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"course_id"})}),(0,n.jsx)(r.td,{children:"Query"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"Optional. Course identifier."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"page"})}),(0,n.jsx)(r.td,{children:"Query"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsxs)(r.td,{children:["Optional. Page number. Default is ",(0,n.jsx)(r.code,{children:"0"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"size"})}),(0,n.jsx)(r.td,{children:"Query"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsxs)(r.td,{children:["Optional. Page size. Default is ",(0,n.jsx)(r.code,{children:"50"})," users per page, maximum is ",(0,n.jsx)(r.code,{children:"500"})," users per page."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"http-codes",children:"HTTP codes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"HTTP Code"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"200"})}),(0,n.jsx)(r.td,{children:"Success. Array of progress status report cards."}),(0,n.jsx)(r.td,{children:"Object"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"400"})}),(0,n.jsx)(r.td,{children:"Invalid request."}),(0,n.jsx)(r.td,{children:"Null"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"403"})}),(0,n.jsx)(r.td,{children:"Access denied."}),(0,n.jsx)(r.td,{children:"Null"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"404"})}),(0,n.jsx)(r.td,{children:"Not found."}),(0,n.jsx)(r.td,{children:"Null"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"500"})}),(0,n.jsx)(r.td,{children:"Server-side error."}),(0,n.jsx)(r.td,{children:"Null"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"example-request",children:"Example request"}),"\n",(0,n.jsx)(r.p,{children:"This example assumes you have correctly configured your credentials and configured any required HMAC authentication libraries."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'import java.net.URI;\n        \nimport org.apache.http.HttpEntity;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpGet;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.util.EntityUtils;\nimport org.json.JSONObject;\n        \nimport com.veracode.security.apisigning.ClientCryptoLib;\n        \npublic class GetReportCardsClient {\n        \n    // An API Id for authentication\n    private final static String API_KEY = "API_KEY_GOES_HERE";\n        \n    // The secret key corresponding to the API Id\n    private final static String API_SECRET = "API_SECRET_GOES_HERE";\n        \n    public static void main(String[] args) throws Exception {\n        \n        URI uri = URI.create(\n          "https://api.veracode.com/elearning/v1/reportcards?course_id=CRLF&user_id=jsmith");\n        String authHeader = ClientCryptoLib.calculateAuthorizationHeader(ClientCryptoLib.VERACODE_HMAC_SHA_256, API_KEY,\n          API_SECRET, uri.getHost(), uri.getPath().concat("?"+uri.getQuery()), HttpGet.METHOD_NAME);\n        \n        HttpGet request = new HttpGet(uri);\n        request.addHeader("Authorization", authHeader);\n        \n        CloseableHttpResponse response = HttpClients.createDefault().execute(request);\n        HttpEntity entity = response.getEntity();\n        JSONObject json = new JSONObject(EntityUtils.toString(entity, "UTF-8"));\n        \n        System.out.println(json.toString(4));\n     }\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"example-response",children:"Example response"}),"\n",(0,n.jsxs)(r.p,{children:["This example response conforms to the Hypertext Application Language content type ",(0,n.jsx)(r.code,{children:"application/hal+json"}),", which includes a link to the ",(0,n.jsx)(r.code,{children:"learner"})," endpoint and ",(0,n.jsx)(r.code,{children:"course"})," endpoint."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"HTTP/1.1 200 OK\nContent-Type: application/json\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "_embedded": {"reportcards": [{\n    "timeSpentOnCourse": 0.24,\n    "_links": {\n        "learner": {"href": "https://api.veracode.com/elearning/v1/learners/jsmith"},\n        "course": {"href": "https://api.veracode.com/elearning/v1/courses/CRLF"}\n     },\n     "courseStartedDate": "2018-05-11T00:00:00.000Z",\n     "courseStatus": "Passed",\n     "progressPercent": 100,\n     "numberOfAttempts": 1,\n     "courseCompletedDate": "2018-05-11T00:00:00.000Z"\n   }]},\n   "_links": {"self": {"href": "https://api.veracode.com/elearning/v1/reportcards?user_id=jsmith&course_id=CRLF&page=0&size=50"}},\n   "page": {\n      "number": 0,\n      "size": 50,\n      "totalPages": 1,\n      "totalElements": 1\n   }\n } \n'})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>d});var n=t(67294);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);