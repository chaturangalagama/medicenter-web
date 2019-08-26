// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'dev',
  apiPath: {
    API_LOGIN_URL: 'http://localhost:8089',
    API_PATIENT_INFO_URL: 'http://localhost:9090',
    API_PATIENT_VISIT_URL: 'http://localhost:9090/patient-visit',
    API_CMS_MANAGEMENT_URL: 'http://localhost:9090',
    API_URL: 'http://localhost:9090',
    API_DOMAIN: 'http://localhost:9090',
    API_AA_URL: 'http://localhost:9090/aacore',
    API_DOCUMENT_URL: 'http://localhost:9090/document-management',
    API_INVENTORY_SYSTEM_URL: 'http://localhost:9090',
    API_VITAL_URL: 'http://localhost:9090/vital',
    API_CASE_INFO_URL: 'http://localhost:9090/case',
    API_PAYMENT_URL: 'http://localhost:9090/charging',
    REPORT_URL: 'http://reports.healthwaymedical.com.sg/reporting-ui/',
    API_PACKAGE_ITEM_INFO_URL: 'http://localhost:9090/item',
    SHOW_COPY_PRESCRIPTION_AFTER: '26-07-2018T00:00:00'
  }
};
