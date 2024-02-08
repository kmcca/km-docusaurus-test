"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44935],{63690:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=s(85893),a=s(11151);const t={title:"Java packaging",slug:"/r/compilation_java"},r=void 0,l={id:"guides/packaging/java/README",title:"Java packaging",description:"Your Java applications must meet specific packaging and compilation requirements before you can submit them for scanning.",source:"@site/docs/guides/03_packaging/16_java/README.md",sourceDirName:"guides/03_packaging/16_java",slug:"/r/compilation_java",permalink:"/km-docusaurus-test/r/compilation_java",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Java packaging",slug:"/r/compilation_java"},sidebar:"tutorialSidebar",previous:{title:"Ionic packaging",permalink:"/km-docusaurus-test/r/compilation_ionic_framework"},next:{title:"Video: Package your Java application code",permalink:"/km-docusaurus-test/r/Video_Package_your_Java_application_code"}},o={},c=[{value:"Java packaging tutorial",id:"java-packaging-tutorial",level:2},{value:"Supported Java JREs and compilers",id:"supported-java-jres-and-compilers",level:2},{value:"Supported Java frameworks",id:"supported-java-frameworks",level:2},{value:"Template engines",id:"template-engines",level:2},{value:"Obtaining compilation debug symbols",id:"obtaining-compilation-debug-symbols",level:2},{value:"Eclipse IDE settings",id:"eclipse-ide-settings",level:2},{value:"Maven settings",id:"maven-settings",level:2},{value:"Gradle settings",id:"gradle-settings",level:2},{value:"Ant settings",id:"ant-settings",level:2},{value:"Packaging the application as a WAR, EAR, or JAR",id:"packaging-the-application-as-a-war-ear-or-jar",level:2},{value:"JSP files",id:"jsp-files",level:2},{value:"Apache Velocity template files",id:"apache-velocity-template-files",level:2},{value:"Apache Axis and Axis2",id:"apache-axis-and-axis2",level:2},{value:"WebSphere applications",id:"websphere-applications",level:2},{value:"Packaging Spring Boot applications",id:"packaging-spring-boot-applications",level:2},{value:"Packaging AWS Lambda applications",id:"packaging-aws-lambda-applications",level:2},{value:"Identifying Lambda handlers for Java",id:"identifying-lambda-handlers-for-java",level:2},{value:"Packaging Adobe Experience Manager applications",id:"packaging-adobe-experience-manager-applications",level:2},{value:"Packaging Quarkus applications",id:"packaging-quarkus-applications",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Your Java applications must meet specific packaging and compilation requirements before you can submit them for scanning."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/r_supported_table",children:"Supported languages and platforms"})," for instructions for other platforms."]}),"\n",(0,i.jsxs)(n.p,{children:["You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis (SCA) upload and scan, if licensed. For SCA agent-based scan requirements, see ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/Using_Veracode_SCA_with_Programming_Languages",children:"Using Veracode SCA with Programming Languages"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"java-packaging-tutorial",children:"Java packaging tutorial"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/Video_Package_your_Java_application_code",children:"Watch the tutorial"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"supported-java-jres-and-compilers",children:"Supported Java JREs and compilers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Language"}),(0,i.jsx)(n.th,{children:"Platforms"}),(0,i.jsx)(n.th,{children:"Supported versions"}),(0,i.jsx)(n.th,{children:"Compilers"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Java"}),(0,i.jsx)(n.td,{children:"Java SE, Java EE, Jakarta, JSP"}),(0,i.jsx)(n.td,{children:"JRE 1.4\u20131.9, 10\u201321"}),(0,i.jsxs)(n.td,{children:["JDK and OpenJDK 1.3\u20131.9",(0,i.jsx)("br",{}),"10\u201321",(0,i.jsx)("br",{}),"IBM JDK 1.7\u20131.8",(0,i.jsx)("br",{}),"Tomcat Jasper 7",(0,i.jsx)("br",{}),"WebLogic 12.x"]})]})})]}),"\n",(0,i.jsx)(n.p,{children:"Veracode can analyze Java code with or without debug symbols. Providing debug builds of Java application code allows Veracode to provide source file and line number information about the location of findings found. For a successful scan, you cannot obfuscate Java applications."}),"\n",(0,i.jsx)(n.p,{children:"You may mitigate certain findings in code compiled with an earlier compiler version when you run that code on a another runtime environment later. In such cases, the finding descriptions contain a note describing the version dependency."}),"\n",(0,i.jsx)(n.h2,{id:"supported-java-frameworks",children:"Supported Java frameworks"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Framework/Technology"}),(0,i.jsx)(n.th,{children:"Supported versions"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Adobe Experience Manager"}),(0,i.jsx)(n.td,{children:"6.4 and earlier"}),(0,i.jsx)(n.td,{children:"Veracode supports compiled Java code for Sling Servlets, OSGi services, and AEM custom components, packaged as a JAR file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Axiom"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Axis"}),(0,i.jsx)(n.td,{children:"1.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Axis2"}),(0,i.jsx)(n.td,{children:"1.6.2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Chemistry"}),(0,i.jsx)(n.td,{children:"1.1.0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Commons"}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Includes:",(0,i.jsx)("br",{})," Commons Attributes",(0,i.jsx)("br",{})," Commons BeanUtils",(0,i.jsx)("br",{})," Commons ClassScan",(0,i.jsx)("br",{})," Commons CLI",(0,i.jsx)("br",{})," Commons Codec",(0,i.jsx)("br",{})," Commons Collections",(0,i.jsx)("br",{})," Commons Collections4",(0,i.jsx)("br",{})," Commons Crypto",(0,i.jsx)("br",{})," Commons CSV",(0,i.jsx)("br",{})," Commons Daemon",(0,i.jsx)("br",{})," Commons DBCP",(0,i.jsx)("br",{})," Commons DbUtils",(0,i.jsx)("br",{})," Commons Discovery",(0,i.jsx)("br",{})," Commons Email",(0,i.jsx)("br",{})," Commons FileUpload-",(0,i.jsx)("br",{})," Commons Lang-",(0,i.jsx)("br",{})," Commons Lang 3",(0,i.jsx)("br",{})," Commons Logging",(0,i.jsx)("br",{})," Commons Net",(0,i.jsx)("br",{})," Commons Performance",(0,i.jsx)("br",{})," Commons Pool",(0,i.jsx)("br",{})," Commons ThreadPool",(0,i.jsx)("br",{})," Commons Text"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache CXF"}),(0,i.jsx)(n.td,{children:"2.7.0"}),(0,i.jsx)(n.td,{children:"Veracode only supports the parts of CXF that expand JAX-WS."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Jersey"}),(0,i.jsx)(n.td,{children:"2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Oro"}),(0,i.jsx)(n.td,{children:"2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Log4j"}),(0,i.jsx)(n.td,{children:"1.x, 2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Velocity"}),(0,i.jsx)(n.td,{children:"1.7"}),(0,i.jsx)(n.td,{children:"Veracode only supports the web rendering usage of the default Velocity servlet for binaries uploaded in a WAR file."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache Xerces"}),(0,i.jsx)(n.td,{children:"2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apache XMLBeans"}),(0,i.jsx)(n.td,{children:"2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AWS SDK for Java"}),(0,i.jsx)(n.td,{children:"1.11, 2.0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Azure Functions"}),(0,i.jsx)(n.td,{children:"2.x, 3.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Google App Engine"}),(0,i.jsx)(n.td,{children:"1.9.24"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Google Web Toolkit (GWT)"}),(0,i.jsx)(n.td,{children:"2.8.0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hibernate"}),(0,i.jsx)(n.td,{children:"1.x, 2.x, 3.x, 4.x, 5.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Java Portlets"}),(0,i.jsx)(n.td,{children:"1.0, 2.0"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Java Servlets"}),(0,i.jsx)(n.td,{children:"3.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JAX-RS"}),(0,i.jsx)(n.td,{children:"1.x, 2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JAX-WS"}),(0,i.jsx)(n.td,{children:"2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JAXB"}),(0,i.jsx)(n.td,{children:"2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JDBC"}),(0,i.jsx)(n.td,{children:"4.2 and earlier"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JDOM"}),(0,i.jsx)(n.td,{children:"1.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JSF"}),(0,i.jsx)(n.td,{children:"1.x, 2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JSTL"}),(0,i.jsx)(n.td,{children:"1.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Liferay"}),(0,i.jsx)(n.td,{children:"6.x"}),(0,i.jsx)(n.td,{children:"Veracode does not support Liferay applications if you customize them using Hook plugins."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Micronaut"}),(0,i.jsx)(n.td,{children:"3.8.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Play"}),(0,i.jsx)(n.td,{children:"2.0\u20132.7.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Quarkus"}),(0,i.jsx)(n.td,{children:"2.x, 3.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Servlets"}),(0,i.jsx)(n.td,{children:"3.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Spring Boot"}),(0,i.jsx)(n.td,{children:"1.x, 2.x, 3.x"}),(0,i.jsx)(n.td,{children:"Supports executable JARs, also known as Uber FAT JARs, and JARs with dependencies"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Spring Core"}),(0,i.jsx)(n.td,{children:"1.x, 2.x , 3.x, 4.x, 5.x, 6.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Spring Data Access"}),(0,i.jsx)(n.td,{children:"5.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Spring MVC"}),(0,i.jsx)(n.td,{children:"2.x, 3.x, 4.x, 5.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Spring Security"}),(0,i.jsx)(n.td,{children:"3.x, 4.x, 5.x, 6.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Struts"}),(0,i.jsx)(n.td,{children:"1.x, 2.x"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Tiles"}),(0,i.jsx)(n.td,{children:"2.x"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"template-engines",children:"Template engines"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Supported versions"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thymeleaf"}),(0,i.jsx)(n.td,{children:"2.x, 3.x"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"obtaining-compilation-debug-symbols",children:"Obtaining compilation debug symbols"}),"\n",(0,i.jsxs)(n.p,{children:["Using the standard Java compiler, run the ",(0,i.jsx)(n.code,{children:"javac"})," command with the ",(0,i.jsx)(n.code,{children:"-g"})," option to obtain debug symbols, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"javac -g test1.java\n"})}),"\n",(0,i.jsx)(n.h2,{id:"eclipse-ide-settings",children:"Eclipse IDE settings"}),"\n",(0,i.jsx)(n.p,{children:"If you develop the project with Eclipse:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Project"})," > ",(0,i.jsx)(n.strong,{children:"Properties"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Select the Java compiler properties."}),"\n",(0,i.jsxs)(n.li,{children:["Under Classfile Generation, select these options:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Add variable attributes to generated class files"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Add line number attributes to generated class files"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Add source file name to generated class files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"maven-settings",children:"Maven settings"}),"\n",(0,i.jsxs)(n.p,{children:["If you build the project using Maven, include a directive to use the Maven compiler plugin in ",(0,i.jsx)(n.code,{children:"pom.xml"}),", for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<build>\n  <plugins>\n    <plugin>\n      <artifactId>maven-compiler-plugin</artifactId>\n      <configuration>\n        <debug>true</debug>\n        <debuglevel>lines,vars,source</debuglevel>\n      </configuration>\n    </plugin>\n  </plugins>\n</build>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After making this change, use ",(0,i.jsx)(n.code,{children:"mvn compile"})," or ",(0,i.jsx)(n.code,{children:"mvn package"})," to build and package the project. The project now includes debug symbols with the application."]}),"\n",(0,i.jsxs)(n.p,{children:["Veracode SCA upload scans are more accurate when the Fat JAR files include the JAR files of the project dependencies. To ensure you package your applications to include the dependency JAR files, Veracode recommends you add the OneJar Maven Plugin or, for Spring Boot, the Maven Spring Boot Plugin in the ",(0,i.jsx)(n.code,{children:"<build><plugins/></build>"})," element of ",(0,i.jsx)(n.code,{children:"pom.xml"}),". For example:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"OneJar Maven Plugin"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<plugin>\n  <groupId>com.jolira</groupId>\n  <artifactId>onejar-maven-plugin</artifactId>\n  <version>1.4.4</version>\n  <executions>\n    <execution>\n      <goals>\n        <goal>one-jar</goal>\n      </goals>\n    </execution>\n  </executions>\n</plugin>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Maven Spring Boot Plugin"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<plugin>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-maven-plugin</artifactId>\n  <version>2.3.4.RELEASE</version>\n  <executions>\n    <execution>\n      <goals>\n        <goal>repackage</goal>\n      </goals>\n    </execution>\n  </executions>\n</plugin>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gradle-settings",children:"Gradle settings"}),"\n",(0,i.jsxs)(n.p,{children:["If you use Gradle to build the project, after applying the Java plugin, configure the build task to add line numbers and local variables in the ",(0,i.jsx)(n.code,{children:"build.gradle"})," file. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apply plugin: 'java'\ncompileJava.options.debug = true\ncompileJava.options.debugOptions.debugLevel = \"source,lines,vars\"\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ant-settings",children:"Ant settings"}),"\n",(0,i.jsxs)(n.p,{children:["If you build the project using Ant, you must enable the ",(0,i.jsx)(n.code,{children:"debug"})," property in the ",(0,i.jsx)(n.code,{children:"javac"})," tasks, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<javac debug="on"> ... set of classes\n     </javac>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"packaging-the-application-as-a-war-ear-or-jar",children:"Packaging the application as a WAR, EAR, or JAR"}),"\n",(0,i.jsx)(n.p,{children:"Veracode expects you to submit Java web applications in a standard WAR or EAR format. Specifically, the WAR file must contain these directories with these structures:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/WEB-INF/"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/WEB-INF/classes/:"})," contains all class files"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/WEB-INF/lib/:"})," contains all supporting libraries"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/WEB-INF/web.xml"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To determine the scope of analysis, Veracode examines the contents of the WAR or EAR file. Ensure that all classes that you want to analyze exist in either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"/WEB-INF/classes"})," directory"]}),"\n",(0,i.jsxs)(n.li,{children:["A non-third party library in ",(0,i.jsx)(n.code,{children:"/WEB-INF/lib"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Veracode recommends that EAR files contain a ",(0,i.jsx)(n.code,{children:"/META-INF/application.xml"})," file. If an EAR file does not contain any WAR files, you do not need to include the ",(0,i.jsx)(n.code,{children:"/WEB-INF/"})," directory or the ",(0,i.jsx)(n.code,{children:"/WEB-INF/web.xml"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on how to prepare a WAR file, see the ",(0,i.jsx)(n.a,{href:"https://docs.oracle.com/javaee/7/tutorial/packaging003.htm",children:"Java EE tutorial"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Veracode can scan JAR files that contain a ",(0,i.jsx)(n.code,{children:"web.xml"})," file in ",(0,i.jsx)(n.code,{children:"/WEB-INF/"}),". Veracode scans these JAR files the same as WAR files to improve support for application servers and packaging methods that manage this deployment method, including OSGi."]}),"\n",(0,i.jsxs)(n.p,{children:["Veracode SCA upload and scan only analyzes JAR, WAR, and EAR files. It ignores Java build files, such as ",(0,i.jsx)(n.code,{children:"pom.xml"})," and ",(0,i.jsx)(n.code,{children:"build.gradle"}),". To return Veracode SCA results, either include third-party JAR files in ",(0,i.jsx)(n.code,{children:"/WEB-INF/lib"})," inside a WAR file or upload them in a separate JAR file."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Veracode Static Analysis does not support JAR files nested inside other JAR files, except for Spring Boot applications. Veracode does support analysis of uber-jar files created by the Maven Shade plugin."})}),"\n",(0,i.jsx)(n.p,{children:"[See Packaging Spring Boot Applications](#Packaging Spring Boot applications)."}),"\n",(0,i.jsx)(n.p,{children:"Veracode extracts client-side JavaScript from JSP files that are uploaded as part of a JAR, WAR, or EAR file, and creates a separate JavaScript module that is selectable for analysis."}),"\n",(0,i.jsx)(n.h2,{id:"jsp-files",children:"JSP files"}),"\n",(0,i.jsx)(n.p,{children:"Veracode automatically compiles uploaded JSP files before performing analysis on them. Veracode uses either the Tomcat Jasper compiler version 7 or the WebLogic compiler version 12.x for WebLogic applications."}),"\n",(0,i.jsx)(n.p,{children:"JSP files that are part of the application must be included in a correctly structured WAR or EAR file. Veracode appends JARs under the directory containing the WAR or EAR file and its subdirectories to the classpath of the JSP compiler. If JSP or other source files must undergo preprocessing during the build process, you must perform this preprocessing before you can submit files for a static scan. However, if artifacts contain precompiled JSP classes, ensure that you also include the source. Veracode does not analyze precompiled JSP files. Ensure that any JSP files that you generate from templates or components, such as include files, have compiled successfully before submission."}),"\n",(0,i.jsx)(n.p,{children:"At compilation time, the Veracode compiler attempts to force expressions to evaluate so that they can be scanned. This action can sometimes result in compilation errors. Two possible workarounds can prevent these errors:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the TLD file included with the WAR, update the value of any ",(0,i.jsx)(n.code,{children:"<rtexprvalue>"})," nodes to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In individual JSPs, set the taglib URIs to point to versions of the taglibs that explicitly support rt-expressions. For example, instead of pointing to the namespace ",(0,i.jsx)(n.code,{children:"http://java.sun.com/jstl/core"}),", point to the namespace ",(0,i.jsx)(n.code,{children:"http://java.sun.com/jstl/core_rt"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"JSP tags and tag attributes are case-sensitive."})}),"\n",(0,i.jsx)(n.p,{children:"If JSP files are dynamically generated at runtime, Veracode cannot analyze them. Veracode identifies these files as missing dependencies during prescan verification. To facilitate analysis, provide static instances of these files or stubs."}),"\n",(0,i.jsx)(n.p,{children:"Veracode cannot scan JSP files if you cannot compile those files. Veracode reports JSP compilation errors as part of the prescan verification process. You can submit an application that has JSP compilation errors for scanning, but Veracode does not analyze JSP files with compilation errors."}),"\n",(0,i.jsx)("a",{name:"velocity"}),"\n",(0,i.jsx)(n.h2,{id:"apache-velocity-template-files",children:"Apache Velocity template files"}),"\n",(0,i.jsx)(n.p,{children:"Before scanning VM files that you upload in a WAR archive, Veracode automatically compiles them using a custom compiler. Veracode does not scan VM files that are inside JAR files. Before submitting your application, ensure that you package these files within WAR or EAR archives. Veracode cannot scan VM files that an Apache Velocity engine cannot compile. Veracode does not scan any applications that do not meet these requirements."}),"\n",(0,i.jsx)("a",{name:"axis"}),"\n",(0,i.jsx)(n.h2,{id:"apache-axis-and-axis2",children:"Apache Axis and Axis2"}),"\n",(0,i.jsxs)(n.p,{children:["If you include any Apache Axis web service code within your WAR file, you must make all WSDD files available in the ",(0,i.jsx)(n.code,{children:"/WEB-INF/"})," directory of the WAR file. For further information on the creation of WSDD files, see the ",(0,i.jsx)(n.a,{href:"https://axis.apache.org/axis/java/user-guide.html#Custom_Deployment_-_Introducing_WSDD",children:"Apache Axis documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You must upload Axis2 modules in the MAR format and server-side Axis2 applications in the AAR format."}),"\n",(0,i.jsx)(n.p,{children:"MAR files must contain these directories with these structures:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/META-INF/"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/META-INF/module.xml"}),": contains all module files"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/class_files"}),": contains all class files"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"AAR files must contain these directories with these structures:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/META-INF/"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/META-INF/services.xml"}),": contains all services files"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/class_files"}),": contains all class files"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"websphere-applications",children:"WebSphere applications"}),"\n",(0,i.jsxs)(n.p,{children:["For applications that are deployed on WebSphere, a common cause of JSP compilation failure is missing standard WebSphere libraries that are in the WebSphere environment but not packaged with the application. In the event of JSP compilation failure combined with warnings about missing classes, you can check the standard WebSphere directories for your deployed version of the JAR containing these classes; this may include the ",(0,i.jsx)(n.code,{children:"<was>lib/app"})," directory or the ",(0,i.jsx)(n.code,{children:"ws.ext.dirs"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use a resource such as ",(0,i.jsx)(n.a,{href:"http://www.findjar.com/",children:"FindJar.com"})," to identify which JARs contain the classes that Veracode indicated as missing. You may use the ",(0,i.jsx)(n.a,{href:"http://www.findjar.com",children:"JAR Class Finder Plugin for Eclipse"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In some cases, Veracode can substitute a stock library for libraries that are not provided with the application. It is generally better to provide the version of the library that your project uses to ensure that the application model accurately represents the functionality of your application."}),"\n",(0,i.jsx)("a",{name:"j2meBB1"}),"\n",(0,i.jsx)(n.h2,{id:"packaging-spring-boot-applications",children:"Packaging Spring Boot applications"}),"\n",(0,i.jsx)(n.p,{children:"Spring Boot applications submitted as WAR files should be structured according to the guidance in the Packaging the Application as a WAR, EAR, or JAR section. Ensure that the WAR file contains these directories:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/BOOT-INF/classes/"}),": contains all class files"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/BOOT-INF/lib/"}),": contains dependencies"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/html/",children:"Spring Boot documentation"})," for additional details."]}),"\n",(0,i.jsx)(n.h2,{id:"packaging-aws-lambda-applications",children:"Packaging AWS Lambda applications"}),"\n",(0,i.jsxs)(n.p,{children:["Veracode requires you to submit applications built for AWS Lambda according to the AWS Lambda Deployment Package formats. For information, see ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com",children:"https://docs.aws.amazon.com/"})," and search for ",(0,i.jsx)(n.code,{children:"AWS Lambda Deployment Package in Java"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Veracode does not support the analysis of dependencies submitted as ",(0,i.jsx)(n.a,{href:"/km-docusaurus-test/r/c_lambda_layers",children:"Lambda layers"}),". To analyze Lambda components deployed in layers, submit them as standard deployment packages, or consider repackaging the function to include layer components as part of the lambda function package."]})}),"\n",(0,i.jsx)(n.h2,{id:"identifying-lambda-handlers-for-java",children:"Identifying Lambda handlers for Java"}),"\n",(0,i.jsx)(n.p,{children:"The analysis of Lambda functions relies on the identification of Lambda Handler methods. Veracode uses this set of heuristics to identify methods that can be candidates for handler methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Classes implementing ",(0,i.jsx)(n.code,{children:"com.amazonaws.services.lambda.runtime.RequestHandler"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The method ",(0,i.jsx)(n.code,{children:"handleRequest"})," that overrides ",(0,i.jsx)(n.code,{children:"com.amazonaws.services.lambda.runtime.RequestHandler.handleRequest"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Classes implementing ",(0,i.jsx)(n.code,{children:"com.amazonaws.services.lambda.runtime.RequestStreamHandler.handleRequest"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The method ",(0,i.jsx)(n.code,{children:"com.amazonaws.services.lambda.runtime.RequestStreamHandler.handleRequest"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Deployment packages that reference AWS components or namespaces and classes that do not implement an AWS class:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All public functions that have up to two input parameters, where the second parameter is of type ",(0,i.jsx)(n.code,{children:"com.amazonaws.services.lambda.runtime.Context"})]}),"\n",(0,i.jsx)(n.li,{children:"All public functions that have up to two input parameters that the Lambda Deployment package does not reference"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("a",{name:"adobe_experience"}),"\n",(0,i.jsx)(n.h2,{id:"packaging-adobe-experience-manager-applications",children:"Packaging Adobe Experience Manager applications"}),"\n",(0,i.jsxs)(n.p,{children:["As part of the build process for typical Adobe Experience Manager projects, you can use ",(0,i.jsx)(n.code,{children:"mvn install"}),". After the build completes, upload all ZIP files containing OSGi components or other compiled Java code. The Java code includes any code in the ",(0,i.jsx)(n.code,{children:"ui.apps"})," ZIP archive, which is usually found in ",(0,i.jsx)(n.code,{children:"ui.apps/target/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Upload each package individually. Do not upload multiple packages in a ZIP file. Veracode does not support ZIP archives containing ZIP files."}),"\n",(0,i.jsx)("a",{name:"quarkus"}),"\n",(0,i.jsx)(n.h2,{id:"packaging-quarkus-applications",children:"Packaging Quarkus applications"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To compile the application, run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mvn package -Dquarkus.package.type=uber-jar\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Upload the file ",(0,i.jsx)(n.code,{children:"target/{your_application_name}-runner.jar"})," to Veracode. This JAR file contains the first-party code and most of the application dependencies, but it does not contain the Quarkus libraries."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally, for SCA results, upload the Quarkus libraries separate from your Java files."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(67294);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);