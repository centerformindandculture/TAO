
Survey
    .StylesManager
    .applyTheme("modern");

Survey
    .Serializer
    .addProperty("page", {
        name: "navigationTitle:string",
        isLocalizable: true
    });
Survey
    .Serializer
    .addProperty("page", {
        name: "navigationDescription:string",
        isLocalizable: true
    });

var json = {
            title: "The Artificial University",
            pages: [
             {
              name: "uni_conf_page",
              navigationTitle: "University Config",
              elements: [
               {
                type: "text",
                name: "nAgents",
                title: "Number of people",
                inputType: "number",
                min: "400",
                max: "40000",
                defaultValue: "400"
               },
               {
                type: "boolean",
                name: "includeGradStudents",
                title: "Graduate students?",
                description: "Does your university include graduate students, or is it an undergraduate school only?",
                labelTrue: "Graduate students",
                labelFalse: "Undergrads only",
                defaultValue: "false",
               },
               {
                type: "text",
                name: "numStaffToStudenContacts",
                title: "Staff-Student interactions",
                description: "For staff members with student-facing positions, this is the number of student contacts per day such a staff member makes.",
                inputType: "number",
                inputType: "number",
                min: "0",
                max: "100",
                step: 1,
                defaultValue: "5"
               }
              ],
              title: "University Configuration",
              description: "Configure TAO to the specifics of your university"
             },
             {
              name: "people_conf_page",
              navigationTitle: "People characteristics",
              elements: [
               {
                type: "panel",
                name: "all_people_characteristics_panel",
                elements: [
                 {
                  type: "text",
                  name: "agentContactRateRangeStart",
                  title: "Minimum times a person makes contact with people at a place or event",
                  defaultValue: "3",
                  defaultValue: "3",
                    inputType: "number",
                    min: "0",
                    max: "10",
                 },
                 {
                  type: "text",
                  name: "agentContactRateRangeEnd",
                  title: "Maximum number of times a person makes contact with people at a place or event",
                  defaultValue: "6",
                  defaultValue: "6",
                    inputType: "number",
                    min: "0",
                    max: "20",
                 }
                ],
                title: "Characteristics of all people"
               },
               {
                type: "panel",
                name: "student_characteristics_panel",
                elements: [
                 {
                  type: "text",
                  name: "studentAgentAgeStart",
                  startWithNewLine: false,
                  title: "Minimum age",
                  inputType: "number",
                  min: "0",
                  max: "40",
                  step: 1,
                  defaultValue: "17"
                 },
                 {
                  type: "text",
                  name: "studentAgentAgeEnd",
                  startWithNewLine: false,
                  title: "Maximum age",
                  inputType: "number",
                  min: "0",
                  max: "100",
                  step: 1,
                  defaultValue: "23"
                 },
                 {
                  type: "text",
                  name: "studentAgentReportSymptomsComplianceStart",
                  title: "Minimum likelihood to report developing symptoms",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "studentAgentReportSymptomsComplianceEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood to report developing symptoms",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1"
                 },
                 {
                  type: "text",
                  name: "studentAgentQuarantineWhenSymptomaticComplianceStart",
                  title: "Minimum likelihood to isolate when developing symptoms",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "studentAgentQuarantineWhenSymptomaticComplianceEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood to isolate when developing symptoms",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  step: 0,
                  defaultValue: "1"
                 },
                 {
                  type: "text",
                  name: "studentAgentComplianceIsolateWhenContactNotifiedStart",
                  title: "Minimum likelihood of faculty or staff agent to isolate when contact notified",
                  description: "An agent may choose to self-isolate when notified that they have been in contact with someone who is a) symptomatic or b) testing positive. ",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "studentAgentComplianceIsolateWhenContactNotifiedEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood of faculty or staff agent to isolate when contact notified",
                  description: "An agent may choose to self-isolate when notified that they have been in contact with someone who is a) symptomatic or b) testing positive. ",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1",
                 },
                 {
                  type: "text",
                  name: "studentAgentIsolationComplianceStart",
                  title: "Minimum likelihood to properly isolate",
                  description: "Once an agent has chosen to isolate, they may do so properly or not. When properly isolating, the agent will stay home. When improperly isolating, the agent will go about their day as usual.",
                  defaultValue: 0,
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "studentAgentIsolationComplianceEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood to properly isolate",
                  description: "Once an agent has chosen to isolate, they may do so properly or not. When properly isolating, the agent will stay home. When improperly isolating, the agent will go about their day as usual.",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1"
                 },
                 {
                  type: "text",
                  name: "studentAgentMaskComplianceStart",
                  title: "Minimum likelihood to wear a mask",
                  description: "This only applies if the mandate mask intervention is enabled",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  step: 0,
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "studentAgentMaskComplianceEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood to wear a mask",
                  description: "This only applies if the mandate mask intervention is enabled",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1"
                 },
                 {
                  type: "text",
                  name: "studentAgentCompliancePhysicalDistancingStart",
                  title: "Minimum compliance with physical distancing precaution",
                  description: "An agent will have a compliance level with physically distancing six feet from others. A low compliance represents that the agent less effective at distancing six feet when making contact with another agent. An agent contact with which both agents have a high physical distancing compliance will be much less likely to result in infection.",
                  defaultValue: 0,
                  correctAnswer: 0,
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "studentAgentCompliancePhysicalDistancingtEnd",
                  startWithNewLine: false,
                  title: "Maximum compliance with physical distancing precaution",
                  description: "An agent will have a compliance level with physically distancing six feet from others. A low compliance represents that the agent less effective at distancing six feet when making contact with another agent. An agent contact with which both agents have a high physical distancing compliance will be much less likely to result in infection.",
                  defaultValue: 1,
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1"
                 }
                ],
                title: "Characteristics of students"
               },
               {
                type: "panel",
                name: "faculty_and_staff_characteristics_panel",
                elements: [
                 {
                  type: "text",
                  name: "facultyStaffAgentAgeStart",
                  title: "Minimum age",
                  inputType: "number",
                  min: "0",
                  max: "100",
                  step: 1,
                  defaultValue: "18"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentAgeEnd",
                  startWithNewLine: false,
                  title: "Maximum Age",
                  defaultValue: "80",
                  inputType: "number",
                  min: "0",
                  max: "100",
                  step: 1,
                  defaultValue: "80"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentAgeMean",
                  startWithNewLine: false,
                  title: "Center age",
                  defaultValue: "45",
                  inputType: "number",
                  min: "0",
                  max: "98",
                  step: 1,
                  defaultValue: "45"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentAgeSD",
                  startWithNewLine: false,
                  title: "Age stretch",
                  defaultValue: "20",
                  inputType: "number",
                  min: "0",
                  max: "50",
                  step: 1,
                  defaultValue: "20"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentReportSymptomsComplianceStart",
                  title: "Minimum likelihood to report developing symptoms",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentReportSymptomsComplianceEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood to report developing symptoms",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentQuarantineWhenSymptomaticComplianceStart",
                  title: "Minimum likelihood to isolate when developing symptoms",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentQuarantineWhenSymptomaticComplianceEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood to isolate when developing symptoms",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  step: 0,
                  defaultValue: "1"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentComplianceIsolateWhenContactNotifiedStart",
                  title: "Minimum likelihood of faculty or staff agent to isolate when contact notified",
                  description: "An agent may choose to self-isolate when notified that they have been in contact with someone who is a) symptomatic or b) testing positive. ",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentComplianceIsolateWhenContactNotifiedEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood of faculty or staff agent to isolate when contact notified",
                  description: "An agent may choose to self-isolate when notified that they have been in contact with someone who is a) symptomatic or b) testing positive. ",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1",
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentIsolationComplianceStart",
                  title: "Minimum likelihood to properly isolate",
                  description: "Once an agent has chosen to isolate, they may do so properly or not. When properly isolating, the agent will stay home. When improperly isolating, the agent will go about their day as usual.",
                  defaultValue: 0,
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentIsolationComplianceEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood to properly isolate",
                  description: "Once an agent has chosen to isolate, they may do so properly or not. When properly isolating, the agent will stay home. When improperly isolating, the agent will go about their day as usual.",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentMaskComplianceStart",
                  title: "Minimum likelihood to wear a mask",
                  description: "This only applies if the mandate mask intervention is enabled",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  step: 0,
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentMaskComplianceEnd",
                  startWithNewLine: false,
                  title: "Maximum likelihood to wear a mask",
                  description: "This only applies if the mandate mask intervention is enabled",
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentCompliancePhysicalDistancingStart",
                  title: "Minimum compliance with physical distancing precaution",
                  description: "An agent will have a compliance level with physically distancing six feet from others. A low compliance represents that the agent less effective at distancing six feet when making contact with another agent. An agent contact with which both agents have a high physical distancing compliance will be much less likely to result in infection.",
                  defaultValue: 0,
                  correctAnswer: 0,
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "0"
                 },
                 {
                  type: "text",
                  name: "facultyStaffAgentCompliancePhysicalDistancingtEnd",
                  startWithNewLine: false,
                  title: "Maximum compliance with physical distancing precaution",
                  description: "An agent will have a compliance level with physically distancing six feet from others. A low compliance represents that the agent less effective at distancing six feet when making contact with another agent. An agent contact with which both agents have a high physical distancing compliance will be much less likely to result in infection.",
                  defaultValue: 1,
                  inputType: "number",
                  min: "0",
                  max: "1",
                  defaultValue: "1"
                 }
                ],
                title: "Characteristics of faculty and staff"
               }
              ],
              title: "People configuration",
              description: "Describe the people in your university"
             },
             {
              name: "npi_page",
              navigationTitle: "Interventions",
              elements: [
               {
                type: "panel",
                name: "non_testing_intervention_panel",
                elements: [
                 {
                  type: "boolean",
                  name: "closeFitnessCenter",
                  title: "Close fitness centers?",
                  defaultValue: "true",
                  description: "All types of agents may go to fitness centers a set number of times per week"
                 },
                 {
                  type: "boolean",
                  name: "hybridClassesEnabled",
                  title: "Hybrid classes?",
                  defaultValue: "true",
                  description: "When enabled, classes will be split into alternating platoons of students."
                 },
                 {
                  type: "boolean",
                  name: "forceAllAgentsToIsolate",
                  title: "Force all agents to isolate?",
                  defaultValue: "false",
                  description: "All agents stay home at all times. This is not a realistic scenario."
                 }
                ],
                title: "Non-Pharmaceutical Interventions"
               },
               {
                type: "boolean",
                name: "mandateMask",
                title: "Mandate wearing masks?",
                defaultValue: "true"
               },
               {
                type: "panel",
                name: "contact_tracing_panel",
                elements: [
                 {
                  type: "text",
                  name: "contactTracingNumberOfDaysTraceback",
                  title: "Traceback duration",
                  description: "When contact tracing an agent, this is the number of days to traceback contacts. Contacts that occurred within the traceback duration will have the contacted agents be contact notified.",
                  inputType: "number",
                  min: "0",
                  max: "14",
                  step: 1,
                  defaultValue: "14"
                 },
                 {
                  type: "text",
                  name: "contactNotifiedNumberOfDaysToIsolate",
                  title: "Number of days to isolate when contact notified",
                  description: "When contact notified (notified that an agent made contact with a presumed infectious person), the agent may choose to self-isolate. If they choose to self-isolate, they will self-isolate for this duration of time (days).",
                  inputType: "number",
                  min: "0",
                  max: "14",
                  step: 1,
                  defaultValue: "14"
                 }
                ],
                title: "Contact tracing"
               },
               {
                type: "panel",
                name: "testing_panel",
                elements: [
                 {
                  type: "boolean",
                  name: "testing_regime_not_a_model_input",
                  title: "Is your university applying a testing regime?"
                 },
                 {
                  type: "text",
                  name: "testDelayTStep",
                  visibleIf: "{testing_regime_not_a_model_input} = true",
                  title: "Delay of test results (days)",
                  inputType: "number",
                  defaultValue: "2",
                  min: "0",
                  max: "14",
                  step: 1,
                  defaultValue: "2"
                 },
                 {
                  type: "text",
                  name: "testsPerDay",
                  visibleIf: "{testing_regime_not_a_model_input} = true",
                  title: "Number of tests per day"
                 },
                 {
                  type: "boolean",
                  name: "student_testing_bool_not_a_model_input",
                  visibleIf: "{testing_regime_not_a_model_input} = true",
                  defaultValue: "true",
                  title: "Do you plan to test student-facing staff members more often than others?"
                 },
                 {
                  type: "text",
                  name: "studentFacingStaffTestMultiplier",
                  visibleIf: "{testing_regime_not_a_model_input} = true and {student_testing_bool_not_a_model_input} = true",
                  title: "How much more often than others?",
                  inputType: "number",
                  min: "0",
                  max: "20",
                  defaultValue: "1"
                 }
                ],
                title: "Testing"
               }
              ],
              title: "Interventions",
              description: "These are the interventions the university is taking to minimize infection spread"
             },
             {
              name: "analysis_parameters",
              navigationTitle: "Meta parameters",
              elements: [
               {
                type: "panel",
                name: "exogenous_analysis",
                elements: [
                 {
                        type: "text",
                        name: "percInfectedBreakPoint",
                        title: "What percentage of the population getting infected over a semester would be a concern?",
                        inputType: "number",
                        min: "0",
                        max: "1",
                        defaultValue: "0.25"
                 },
                 {
                  type: "text",
                  name: "exogenousInfectivityStep",
                  title: "Exogenous infection rate step",
                  description: "The step over which we perform our analysis. Lower steps will have finer results, but the simulations will take longer to run.",
                  inputType: "number",
                  min: "0.00001",
                  max: "0.01",
                  step: 0.00001,
                  defaultValue: "0.0001"
                 },
                 {
                    type: "boolean",
                    name: "numRuns",
                    title: "Analysis run type",
                    description: "It's suggested to perform initial analysis with a quick run, then perform a slow run for greater confidence with output.",
                    labelTrue: "Quick (faster results, lower confidence)",
                    labelFalse: "Slow (slower results, greater confidence)",
                    defaultValue: "true",
                    valueTrue: "3",
                    valueFalse: "30"
                   }
                ],
                title: "Exogenous infection rate vulnerability analysis"
               }
              ],
              title: "Analysis parameters"
             }
            ]
            }
           ;

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});

var navTopEl = document.querySelector("#surveyNavigationTop");
navTopEl.className = "navigationContainer";
var navProgBarDiv = document.createElement("div");
navProgBarDiv.className = "navigationProgressbarDiv";
navTopEl.appendChild(navProgBarDiv);
var navProgBar = document.createElement("ul");
navProgBar.className = "navigationProgressbar";
navProgBarDiv.appendChild(navProgBar);
var liEls = [];
for (var i = 0; i < survey.visiblePageCount; i++) {
    var liEl = document.createElement("li");
    if (survey.currentPageNo == i) {
        liEl
            .classList
            .add("current");
    }
    liEl.onclick = function (index) {
        return function () {
            if (survey['isCompleted'])
                return;
            liEls[survey.currentPageNo]
                .classList
                .remove("current");
            if (index < survey.currentPageNo) {
                survey.currentPageNo = index;
            } else if (index > survey.currentPageNo) {
                var j = survey.currentPageNo;
                for (; j < index; j++) {
                    if (survey.visiblePages[j].hasErrors(true, true))
                        break;
                    if (!liEls[j].classList.contains("completed")) {
                        liEls[j]
                            .classList
                            .add("completed");
                    }
                }
                survey.currentPageNo = j;
            }
            liEls[survey.currentPageNo]
                .classList
                .add("current");
        };
    }(i);
    var pageTitle = document.createElement("span");
    if (!survey.visiblePages[i].navigationTitle) {
        pageTitle.innerText = survey
            .visiblePages[i]
            .name;
    } else
        pageTitle.innerText = survey
            .visiblePages[i]
            .navigationTitle;
    pageTitle.className = "pageTitle";
    liEl.appendChild(pageTitle);
    var br = document.createElement("br");
    liEl.appendChild(br);
    var pageDescription = document.createElement("span");
    if (!!survey.visiblePages[i].navigationDescription) {
        pageDescription.innerText = survey
            .visiblePages[i]
            .navigationDescription;
    }
    pageDescription.className = "pageDescription";
    liEl.appendChild(pageDescription);
    liEls.push(liEl);
    navProgBar.appendChild(liEl);
}
survey
    .onCurrentPageChanged
    .add(function (sender, options) {
        var oldIndex = options.oldCurrentPage.visibleIndex;
        var newIndex = options.newCurrentPage.visibleIndex;
        liEls[oldIndex]
            .classList
            .remove("current");
        if (newIndex > oldIndex) {
            for (var i = oldIndex; i < newIndex; i++) {
                if (sender.visiblePages[i].hasErrors(true, true))
                    break;
                if (!liEls[i].classList.contains("completed")) {
                    liEls[i]
                        .classList
                        .add("completed");
                }
            }
        }
        liEls[newIndex]
            .classList
            .add("current");
    });
survey
    .onComplete
    .add(function (sender, options) {
        liEls[sender.currentPageNo]
            .classList
            .remove("current");
        for (var i = 0; i < sender.visiblePageCount; i++) {
            if (survey.visiblePages[i].hasErrors(true, true))
                break;
            if (!liEls[i].classList.contains("completed")) {
                liEls[i]
                    .classList
                    .add("completed");
            }
        }
    });
