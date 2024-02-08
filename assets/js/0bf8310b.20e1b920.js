"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32701],{19900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(85893),r=n(11151);const o={title:"Configure agent for automatic pull requests",slug:"/r/t_configure_auto_pr"},i=void 0,a={id:"guides/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/configure_agent_auto_pull_requests",title:"Configure agent for automatic pull requests",description:"You configure parameters of automatic pull requests in your Veracode Software Composition Analysis agent.",source:"@site/docs/guides/07_SCA/04_using_agent_based_scans/09_using_sca_agent/06_about_automatic_pull_requests/06_configure_agent_auto_pull_requests.md",sourceDirName:"guides/07_SCA/04_using_agent_based_scans/09_using_sca_agent/06_about_automatic_pull_requests",slug:"/r/t_configure_auto_pr",permalink:"/km-docusaurus-test/r/t_configure_auto_pr",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Configure agent for automatic pull requests",slug:"/r/t_configure_auto_pr"},sidebar:"tutorialSidebar",previous:{title:"Automatic pull request language support",permalink:"/km-docusaurus-test/r/Understanding_Automatic_Pull_Request_Support"},next:{title:"Video: Enable update advisor and configure agent for automatic pull requests",permalink:"/km-docusaurus-test/r/c_sc_video_enable_the_update_advisor_and_configure_agent_for_automatic_pull_requests"}},u={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"You configure parameters of automatic pull requests in your Veracode Software Composition Analysis agent."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Before you begin:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Enable pull requests for ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/t_configure_pr_github",children:"GitHub"})," or ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/t_configure_pr_gitlab",children:"GitLab"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Enable the ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/t_update_advisor",children:"update advisor"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Work in a ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/Understanding_Automatic_Pull_Request_Support",children:"supported project"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To complete this task:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Set the relevant ",(0,s.jsx)(t.a,{href:"/km-docusaurus-test/r/c_sc_scan_directives",children:"scan directives"})," in your shell or automation script to configure the parameters that determine when to generate the pull requests. You can set the directives in two ways:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["As environment variables in your CI/CD settings, with ",(0,s.jsx)(t.code,{children:"SRCCLR_"}),"appended to the directive names. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"export SRCCLR_PR_ON=methods\nexport SRCCLR_NO_BREAKING_UPDATES=true\nexport SRCCLR_IGNORE_CLOSED_PRS=false\nexport SRCCLR_SCM_URL=https://gitlab.acme.io\nEXTRA_ARGS='--update-advisor --pull-request'\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["As directives in the ",(0,s.jsx)(t.code,{children:"srcclr.yml"})," file of your agent-based scanning project. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"pr_on: methods\nno_breaking_updates: true\nignore_closed_prs: false\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If configured in both files, the environment variables override the ",(0,s.jsx)(t.code,{children:"srcclr.yml"})," directives."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After you complete the configuration, your Veracode SCA agent can generate pull requests when the scan results meet the specified parameters. You can review and approve the pull request in your GitHub or GitLab project."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Next steps:"})}),"\n",(0,s.jsx)(t.p,{children:"For a more effective integration with your CI pipeline, Veracode recommends you customize the automatic pull request behavior in your pipeline job, such as the following example in GitLab:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'sourceclear:\n  stage: security\n  variables:\n    SRCCLR_API_TOKEN: ${SRCCLR_API_TOKEN}\n  script:\n    - |\n      if [[ $CI_BUILD_REF_NAME = master ]]; then\n \n        # Set up ssh-agent\n        which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )\n        eval $(ssh-agent -s)\n        echo "$SSH_PRIVATE_KEY" | base64 --decode | ssh-add - > /dev/null\n        mkdir -p ~/.ssh\n        chmod 700 ~/.ssh\n        [[ -f /.dockerenv ]] && echo -e "Host *\\n\\tStrictHostKeyChecking no\\n\\n" > ~/.ssh/config\n        git config --global user.email "user@sourceclear.com"\n        git config --global user.name "user"\n \n        # We want the PR to target the master branch\n        git checkout -b master\n \n        # GitLab doesn\'t set a remote either\n        git remote set-url origin "git@git.ci.srcclr.io:$CI_PROJECT_PATH.git"\n\n        EXTRA_ARGS=\'--update-advisor --pull-request\'\n \n        export SRCCLR_SCM_TOKEN="$GITLAB_TOKEN"\n        export SRCCLR_SCM_TYPE=GITLAB\n        export SRCCLR_SCM_URL=\'https://git.mycompany.com\'\n      fi\n    - VERBOSE=true curl -sSL https://download.sourceclear.com/ci.sh | sh -s -- scan $EXTRA_ARGS\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);