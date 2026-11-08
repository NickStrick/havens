

Aikido Device Protection
	- MDM & EDR arent enough
		  - MDM check OS configurations, encryption, and baseline software policies
		- EDR  detects threats and malware, usually _after_ or _as_ execution occurs
		  
	- Device protection is a developer-focused security layer that deploys through existing MDM platforms (such as Jamf or Kandji) to guard the software supply chain. It intercepts risks _before_ installation
	  this prevents vulernable packages or malware from ever running on a developer machine. - without it hackers can steal coredentials and create a back door.
	  It compares Aikido/Intel library vulnerabilities and stops installation of pakcages that were recently updates, preventing zero day attacks.


Aikido  AI Pentesting
	- traditional DAST tools do basic pass or fail tests, they are deterministic and they dont use reasoning to find a way around the test.
	- traditional pen testing is when a human simulates an attack on the organization, this can take weeks or months for large projects and orgs.
	- AI Pentesting combines DAST and Human Pentesting, its non deterministic and finds ways around vulnerabilities, and reasons like a human would. it performs a pen test in minutes, not weeks. multiple agents attack, and they show you thier decision making and reasoning. this dramatically reduces security vulnerabilies. The trade off is that frequent pen tests will cost a lot more  for this more nuanced and easy approach, becuase of computational power and tokens.
	  - AI Pentesting combined with autofix makes security extremely easy to detect and fix in just one click. keeping every part of their orgs security in one location makes security simple, fast and reliable for any software organization.


Aikido Code Quality 
	- works in the realm or nuance
	-what it looks for
		1. security - malicious code, are tools up to standard
		2. Readability - avoid deep nesting, comments, names, debugging
		3. Performance issues - no big queries, long loads, nested loops, unnessisary compute
		4. Maintainability - composition over inheritance, components not expansion
		5. bug risk - nuance in languages or OS - class and file name match
		6. Logic bugs - forgetting to remove debug code

	-linting VS code quality
		- liner = spell checker, syntax checker
		- code quality - editor, standards, logic, organization

- it can reason and give you nuance based on all the rules you give it.
  
Aikido IAC - infrastructure as code
	- vulnerability scanning for cloud environment - detects BEFORE deployment
	- Configurations, manifests, security policy's, user roles
Aikido CSPM - cloud security posture management
	- Monitors runtime environment
	- means security is live in production.
	- looks for the same things as IAC
	- firewalls setup properly
	
	- how cspm tools are deplyed
		- agentless
			- dont have to deploy a software on your cloud account, 
			- able to check using an API, authenticates in your cloud account.
		- agents
			- a little bit of a risk, installign someone elses software into your most sensitive environment
			  
Malware detection in supply chain
	- npm install wrapper, we make sure 
	  
secrets detection
	- sharing with a system uses them everywhere.
	- attacks target credentials
	- env or vault
	- secrets show up in the history of your source code.
	- tests in hardcode, moved to env, if you dont rotate keys they are able to be leaked.
	  
	  ** secrets detection - you need to make sure there are no hardcoded secrets in your entire history**
	  
Good secrets detection
	- tests if the keys found are valid:  formated, not test keys, dont have english words in them, look at the context if its being used : dramatically reduces false positives.
	  
	  - detect on commits or new pull requests, or IDE
	  
	  
SCA tools : software compisition analysis
	- scans dependencies and transitive dependencies.
	- like russian dolls but with public code
	  -SBOM
	  - CVE
	    
	-feed: ignored  - shows ignored based on reachability analysis
	- feed spring framework - breaking changes, the upgrade will breka chnages, use aikido library instead.


SAST
	- rule based detection
	- ai based detection
		  - ai can see patterns that are common in vulerabilities.
		    ai auto triage
			  - net gets fish and trash
			  - differnt sizes of fish.
			  - SAST is just the net
			  - ai based determines whats trash, whats bigger, and different sizes, or severitys.

To make sure you are 100% ready for the top SE at Aikido, you need to transition from **memorizing features** to **demonstrating architectural authority on a live call**.

This top SE won't just ask "What is eBPF?"—they will simulate real-world technical pushback, customer edge cases, and live system architecture scenarios.

Here are the **4 high-impact ways** you should prepare right now:

### 1. Master the 3 "Deep-Dive" Architectural Scenarios

Be ready to talk through these end-to-end scenarios out loud or draw them on Excalidraw:

#### Scenario A: The CI/CD Pipeline & PR Scan Workflow

- **The Question:** _"Walk me through step-by-step what happens from the moment a developer opens a Pull Request on GitHub to when Aikido posts an inline PR comment."_
    
- **The Flow to Explain:**
    
    1. **Webhook Event:** GitHub sends an `issue_comment` or `pull_request.opened` event payload to Aikido via Webhook.
        
    2. **Incremental Diff Extraction:** Aikido isolates the `git diff`—scanning _only_ changed lines and modified manifest files (`package.json`, `Dockerfile`).
        
    3. **AST & Call-Graph Check:** SAST runs against the diff to map AST execution trees, while SCA checks lockfile changes against vulnerability DBs.
        
    4. **Reachability Check:** The engine evaluates if changed code imports or calls the modified dependency.
        
    5. **Feedback Loop:** Under 2 minutes later, Aikido posts a non-blocking inline comment directly on the PR line with a 1-click AutoFix suggestion.
        

#### Scenario B: The Runtime Protection & eBPF Event Path

- **The Question:** _"How does Aikido detect an active log4j or RCE attack against a running Kubernetes container without slowing down application latency?"_
    
- **The Flow to Explain:**
    
    1. **Kernel Hook:** An eBPF probe sits in the host VM Linux kernel listening to system calls (`execve`, `socket`).
        
    2. **Zero-Latency Inspection:** When an attacker triggers an RCE inside a pod, the application container attempts to execute a shell command (`/bin/sh`) or open a reverse shell.
        
    3. **Kernel Interception:** The eBPF probe catches the unauthorized `execve` syscall directly at the kernel level _before_ it finishes executing, completely bypassing app-level latency overhead.
        
    4. **Correlation:** Runtime Protect correlates the pod's container image digest back to the git repository and commit hash in Aikido's dashboard.
        

#### Scenario C: Agentic DAST vs. Authenticated APIs

- **The Question:** _"How do we run DAST against a complex single-page application (SPA) with a multi-tenant GraphQL/REST API backend?"_
    
- **The Flow to Explain:**
    
    1. Ingest OpenAPI/Swagger specifications or Postman collections to map all endpoints, required headers, and payload structures.
        
    2. Provide two sets of test user JWT credentials (User A and User B).
        
    3. **Stateful Fuzzing:** The DAST engine executes requests using User A's token while replacing the object IDs in the URI/body with User B's resource IDs to test for **BOLA/IDOR**.
        

### 2. Practice Handling 3 Tough "Top SE" Objections

Top SEs love testing how you handle technical skepticism on live customer calls:

- **Objection 1:** _"We already have Snyk for SAST/SCA and Wiz for Cloud. Why should we add Aikido?"_
    
    - **Your Answer:** "Snyk and Wiz are great point solutions, but they operate in silos. Snyk gives developers hundreds of unreachable code alerts, and Wiz alerts security teams about cloud misconfigurations. Aikido unifies Code, Cloud, Attack, and Protect under one hood. By correlating SAST call-graphs with cloud assets, Aikido eliminates 85% of false-positive noise and cuts licensing tool sprawl down to a fraction of the cost."
        
- **Objection 2:** _"Scanning our code in Aikido's cloud breaks our strict data sovereignty compliance rules."_
    
    - **Your Answer:** "Aikido supports local self-hosted CLI runners (`@aikidosec/ci-api-client`). Your source code never leaves your local build runner or air-gapped environment; only metadata and hash fingerprints are sent to Aikido for vulnerability matching."
        
- **Objection 3:** _"AutoFix generating automated Pull Requests sounds risky. How do we know it won't break our build?"_
    
    - **Your Answer:** "Aikido's AutoFix logic calculates the **minimum non-breaking version bump** for dependencies. It opens a PR on a feature branch so your standard CI/CD unit and integration test suite run automatically before any human approves the merge."
        

### 3. Have Your Excalidraw / Visual Canvas Ready

In your interview prep with Thijs, you demonstrated how using visual whiteboarding turned around a complex demo.

- Keep **Excalidraw** open on your second screen.
    
- If the SE asks a complex architectural question (e.g., _"How do Code, Cloud, Attack, and Protect fit together in a DevSecOps pipeline?"_), ask:
    
    > _"Do you mind if I share my screen and sketch this architecture out visually?"_
    
- Drawing the flow live immediately sets you apart from 99% of SE candidates and proves you can lead technical whiteboard sessions with enterprise CISOs.
    

### 4. Prepare 3 "Peer-to-Peer" Questions for the SE

At the end of the call, ask questions that position you as an experienced technical peer, not just an applicant:

1. _"What does the technical evaluation / POC handoff look like between AEs and SEs here today?"_
    
2. _"When prospects run technical benchmarks against legacy scanners, what is the #1 feature or reachability test that wins them over to Aikido?"_
    
3. _"What is the most complex custom setup or edge case you've had to architect for an enterprise customer recently?"_
    



### 2. Strategy for Willem (Belgium SE)

Since Laken explicitly mentioned: **"The emphasis for these additional hires will be on the technical/dev knowledge which Thijs feels like Willem can help further validate... it is the exact same thing you did with Simon,"** keep these 3 core focus areas in mind:

1. **Format & Flow (Same as Simon):**
    
    - **Discovery Phase:** Ask sharp developer-focused discovery questions (e.g., _"How long do your PR checks currently run?"_, _"How many false-positive alerts do your engineers triage weekly?"_).
        
    - **The 85% Noise Reduction Pivot:** Emphasize Reachability Analysis and AST call-graphs as the primary mechanism for eliminating developer noise.
        
    - **Live UI / Architecture Walkthrough:** Walk through Code (SAST/SCA), Cloud, Attack, and Protect seamlessly.
        
2. **Technical Depth Validation (Willem's Lens):**
    
    - Expect Willem to ask slightly more granular technical follow-ups than Simon or Thijs did.
        
    - Be ready to articulate **AST Call-Graphs** (tracing imports down to function calls), **Container Security** (base OS package scanning vs. application layer lockfiles), **eBPF Runtime Protection** (kernel-level syscall interception without K8s sidecars), and **Incremental Git Diff Scanning** (<2 min PR checks).


### 1. How Reachability Analysis Works (The Spoken Explanation)

When traditional Software Composition Analysis (SCA) scans a repo, it looks strictly at your manifest files (`package.json`, `go.mod`, `requirements.txt`). If a package with a known CVE is listed, traditional tools trigger a high-severity alert—even if your code never actually executes that package or imports the vulnerable function. This creates massive false-positive noise.

Aikido solves this by linking **SCA** with **SAST Abstract Syntax Tree (AST) Call-Graphs**:

1. **Dependency Mapping (SCA):** Aikido inspects lockfiles (`package-lock.json`, `Cargo.lock`) to build a full dependency tree, identifying root packages and transitive sub-dependencies containing known CVEs.
    
2. **Abstract Syntax Tree (AST) Generation (SAST):** Aikido parses your application source code into an AST to build a complete control-flow call-graph.
    
3. **Trace Execution Path:** Aikido traces from your application’s entry points (e.g., API routes, main functions) down through `import` / `require` statements.
    
4. **Function-Level Verification:** It checks if your execution path reaches the **exact vulnerable function** inside the third-party package.
    
5. **Verdict:**
    
    - **Reachable:** The execution path reaches the vulnerable function. Priority is escalated, and an AutoFix PR can be generated.
        
    - **Unreachable:** The package is installed, but the vulnerable code path is never called. The alert severity is downgraded or hidden, cutting up to **85% of noise**.
        

### 2. What Aikido Scans & When It Scans It

Aikido operates across four domains (**Code, Cloud, Attack, Protect**), executing scans at different stages of the development lifecycle:

| **Domain**                         | **What Aikido Scans**                                                                        | **When It Scans**                                                                          |
| ---------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Code (SAST, SCA, IaC, Secrets)** | Source code, dependencies, lockfiles, Dockerfiles, Terraform/CloudFormation, hardcoded keys. | On Pull Request/Push events via webhooks, on manual trigger, or via daily automated scans. |
| **Cloud (CSPM, VMs)**              | AWS/GCP/Azure API configurations, IAM roles, S3 buckets, EC2/VM compute instances.           | Continuous background polling (typically every 24 hours or on cloud event triggers).       |
| **Attack (DAST, ASM)**             | External domains, public IPs, Swagger/OpenAPI endpoints.                                     | Scheduled web security scans, post-deployment triggers, or manual agentic pentests.        |
| **Protect (Runtime)**              | Running K8s/Docker container workloads, active HTTP traffic, kernel syscalls.                | Real-time / continuous in production via eBPF probes.                                      |

### 3. Triggers & Dashboard Updates

Understanding what causes the dashboard to update shows deep operational mastery:

- **Trigger Events:**
    
    1. **Git Webhooks:** `git push`, `pull_request.opened`, `pull_request.synchronize`, or `branch.merge` events sent from GitHub/GitLab/Bitbucket.
        
    2. **Container Registry Webhooks:** `image:push` events from ECR, Docker Hub, GCR, or Artifact Registry.
        
    3. **Scheduled Scans:** Daily automated re-scans across all connected repos and cloud infrastructure.
        
    4. **Manual / API Triggers:** Triggered manually from the Aikido UI or via CLI/API integrations in a custom script.
        
- **When the Dashboard Updates:**
    
    - **Real-Time / In-Flight:** Once a scan finishes (under 2 minutes for incremental diff scans), scan results are processed, deduplicated, and immediately updated in the unified dashboard.
        
    - **New Vulnerability Feeds:** When a new CVE is published to NVD/GHSA, Aikido re-evaluates cached dependency trees without needing a new commit, updating the dashboard if an existing dependency becomes vulnerable.
        

### 4. How CI/CD Integration Works

Aikido offers two distinct modes for CI/CD integration, depending on the customer's setup and compliance requirements:

#### Mode A: Native Webhook Integration (Zero-CI Setup)

- **How it works:** You connect your Git provider (GitHub, GitLab, Bitbucket) to Aikido via OAuth or GitHub App.
    
- **Execution:** When a developer pushes code or opens a PR, the Git provider sends a webhook payload to Aikido's cloud. Aikido runs the scan in its isolated cloud environment and sends back inline PR comments or updates status checks (`pass`/`fail`).
    
- **Pros:** Zero configuration files in the repository, under 2-minute scan times, no CI compute consumption.
    

#### Mode B: CI/CD Runner / CLI Integration (`@aikidosec/ci-api-client`)

- **How it works:** You add a step to your existing pipeline (GitHub Actions, GitLab CI, CircleCI, Jenkins, Bitbucket Pipelines) using the Aikido CLI.
    
- **Execution:** The CLI runs directly inside your build agent environment. It can perform local code checks or upload build artifacts (like compiled binaries or Docker images built during the CI step) to Aikido for analysis.
    
- **Gating / Pipeline Blocking:** The CLI receives the scan results back from Aikido. If a vulnerability violates your severity threshold (e.g., _Critical Reachable Vulnerability_ or _Active Secret Leak_), the CLI returns an exit code `1`, breaking the pipeline before deployment.
    
- **Air-Gapped / Privacy Option:** Ensures code analysis or compiled artifacts can be scanned locally inside your own infrastructure.