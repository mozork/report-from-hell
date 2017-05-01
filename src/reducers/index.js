import {
    SHOW_PROJECT_ISSUES,
    ERROR_TO_GET_PROJECT_ISSUES,
    SHOW_PROJECTS,
    ERROR_TO_GET_PROJECTS,
    REQUIRE_AUTHENTICATION,
    AUTHENTICATE,
    LOG_TIME_ENTRY_OK,
    LOG_TIME_ENTRY_DONE
} from '../actions'

export const authentication = (state = {}, action) => {
    switch (action.type) {
        case REQUIRE_AUTHENTICATION:
            return {
                ...state,
                apiKey: null
            };
        case AUTHENTICATE:
            return {
                ...state,
                apiKey: action.apiKey
            };
        default:
            return state;
    }
};

export const projectIssues = (state = {}, action) => {
    switch (action.type) {
        case SHOW_PROJECT_ISSUES:
            return {
                ...state,
                issues: action.issues.issues,
                error: {}

            };
        case ERROR_TO_GET_PROJECT_ISSUES:
            return {
                ...state,
                error: action.error,
            };
        case LOG_TIME_ENTRY_OK:
            return {
                ...state,
                loggedIssueId: action.payload.loggedIssueId
            };
        case LOG_TIME_ENTRY_DONE:
            return {
                ...state,
                loggedIssueId: ''
            };
        default:
            return state;
    }
};

export const projects = (state = {}, action) => {
    switch (action.type) {
        case SHOW_PROJECTS:
            return {
                ...state,
                projects: action.projects.projects,
                error: {}

            };
        case ERROR_TO_GET_PROJECTS:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};