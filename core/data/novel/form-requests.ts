import { FormRequest } from "@nano-forms/core";

export const NOVEL_SIGN_UP: FormRequest = {
  actions: {
    previous: null,
  },
  brand: {
    color: "#000000",
    logo: "https://assets.website-files.com/60425402fee4250aed708db0/60f9d46f08c918299f20bddc_Combination%20mark%20color%20logo%20black%20text.svg",
  },
  buttons_text: {
    submit: "Apply Now",
  },
  dataReference: null,
  fields: [
    {
      disabled: false,
      fieldType: "email_address",
      hint: "Please use a work email address if available",
      id: "emailAddress",
      label: "Email Address",
      options: null,
      placeholder: null,
      type: "short_text",
      validationMessages: {
        emailAddress: "Please enter a valid email address",
        patterns: null,
        required: "Please enter your email address",
      },
      validations: {
        patterns: null,
        required: true,
      },
      value: null,
    },
  ],
  metadata: {},
  status: "enabled",
  subtitle:
    "Novel is all your business financial apps in one place: banking, payouts, invoicing, cards & more",
  thankYouPage: null,
  title: "Simplify your business finances",
  webhook: "https://novel-project.azurewebsites.net/api/v1/webhooks/sign-up",
};

export const NOVEL_COMPANY_INFORMATION: FormRequest = {
  actions: {
    previous: null,
  },
  brand: {
    color: "#000000",
    logo: "https://assets.website-files.com/60425402fee4250aed708db0/60f9d46f08c918299f20bddc_Combination%20mark%20color%20logo%20black%20text.svg",
  },
  buttons_text: {
    submit: "Continue",
  },
  dataReference: null,
  fields: [
    {
      disabled: false,
      fieldType: null,
      hint: "Please include your business designator (Inc./LLC etc.)",
      id: "legalBusinessName",
      label: "Legal Business Name",
      options: null,
      placeholder: null,
      type: "short_text",
      validationMessages: {
        emailAddress: null,
        patterns: null,
        required: "Please enter your legal business name",
      },
      validations: {
        patterns: null,
        required: true,
      },
      value: "Apple Inc.",
    },
    {
      disabled: false,
      fieldType: null,
      hint: null,
      id: "companyType",
      label: "Company Type",
      options: [
        {
          label: "Corporation",
        },
        {
          label: "LLC",
        },
        {
          label: "Partnership",
        },
      ],
      placeholder: null,
      type: "dropdown",
      validationMessages: {
        emailAddress: null,
        patterns: null,
        required: "Please select your company type",
      },
      validations: {
        patterns: null,
        required: true,
      },
      value: "Corporation",
    },
    {
      disabled: false,
      fieldType: null,
      hint: null,
      id: "employerIdNumber",
      label: "Employer ID Number (EIN)",
      options: null,
      placeholder: null,
      type: "short_text",
      validationMessages: {
        emailAddress: null,
        patterns: null,
        required: "Please enter your employer ID number (EIN)",
      },
      validations: {
        patterns: null,
        required: true,
      },
      value: "94-2404110",
    },
    // {
    //   disabled: false,
    //   fieldType: "url",
    //   hint: null,
    //   id: "companyWebsite",
    //   label: "Company Website",
    //   options: null,
    //   type: "short_text",
    //   validations: {
    //     pattern: null,
    //     required: true,
    //   },
    //   value: "https://apple.com",
    // },
    {
      disabled: false,
      fieldType: null,
      hint: null,
      id: "companyIndustry",
      label: "Company Industry",
      options: [
        {
          label: "Accommodation",
        },
        {
          label: "Accommodation and Food Services",
        },
        {
          label: "Administrative and Support Services",
        },
        {
          label:
            "Administrative and Support and Waste Management and Remediation Services",
        },
        {
          label: "Agriculture, Forestry, Fishing and Hunting",
        },
        {
          label: "Air Transportation",
        },
        {
          label: "Ambulatory Health Care Services",
        },
        {
          label: "Amusement, Gambling, and Recreation Industries",
        },
        {
          label: "Animal Production",
        },
        {
          label: "Apparel Manufacturing",
        },
        {
          label: "Arts, Entertainment, and Recreation",
        },
        {
          label: "Beverage and Tobacco Product Manufacturing",
        },
        {
          label: "Broadcasting (except Internet)",
        },
        {
          label: "Building Material and Garden Equipment and Supplies Dealers",
        },
        {
          label: "Chemical Manufacturing",
        },
        {
          label: "Clothing and Clothing Accessories Stores",
        },
        {
          label: "Computer and Electronic Product Manufacturing",
        },
        {
          label: "Construction",
        },
        {
          label: "Construction of Buildings",
        },
        {
          label: "Couriers and Messengers",
        },
        {
          label: "Credit Intermediation and Related Activities",
        },
        {
          label: "Crop Production",
        },
        {
          label: "Data Processing, Hosting, and Related Services",
        },
        {
          label: "Education and Health Services",
        },
        {
          label: "Educational Services",
        },
        {
          label: "Electrical Equipment, Appliance, and Component Manufacturing",
        },
        {
          label: "Electronics and Appliance Stores",
        },
        {
          label: "Fabricated Metal Product Manufacturing",
        },
        {
          label: "Finance and Insurance",
        },
        {
          label: "Financial Activities",
        },
        {
          label: "Fishing, Hunting and Trapping",
        },
        {
          label: "Food Manufacturing",
        },
        {
          label: "Food Services and Drinking Places",
        },
        {
          label: "Food and Beverage Stores",
        },
        {
          label: "Forestry and Logging",
        },
        {
          label: "Funds, Trusts, and Other Financial Vehicles",
        },
        {
          label: "Furniture and Home Furnishings Stores",
        },
        {
          label: "Furniture and Related Product Manufacturing",
        },
        {
          label: "Gasoline Stations",
        },
        {
          label: "General Merchandise Stores",
        },
        {
          label: "Goods-Producing Industries",
        },
        {
          label: "Health Care and Social Assistance",
        },
        {
          label: "Health and Personal Care Stores",
        },
        {
          label: "Heavy and Civil Engineering Construction",
        },
        {
          label: "Hospitals",
        },
        {
          label: "Information",
        },
        {
          label: "Insurance Carriers and Related Activities",
        },
        {
          label: "Internet Publishing and Broadcasting",
        },
        {
          label: "Leather and Allied Product Manufacturing",
        },
        {
          label: "Leisure and Hospitality",
        },
        {
          label:
            "Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)",
        },
        {
          label: "Machinery Manufacturing",
        },
        {
          label: "Management of Companies and Enterprises",
        },
        {
          label: "Manufacturing",
        },
        {
          label: "Merchant Wholesalers, Durable Goods",
        },
        {
          label: "Merchant Wholesalers, Nondurable Goods",
        },
        {
          label: "Mining (except Oil and Gas)",
        },
        {
          label: "Mining, Quarrying, and Oil and Gas Extraction",
        },
        {
          label: "Miscellaneous Manufacturing",
        },
        {
          label: "Miscellaneous Store Retailers",
        },
        {
          label: "Monetary Authorities - Central Bank",
        },
        {
          label: "Motion Picture and Sound Recording Industries",
        },
        {
          label: "Motor Vehicle and Parts Dealers",
        },
        {
          label: "Museums, Historical Sites, and Similar Institutions",
        },
        {
          label: "Natural Resources and Mining",
        },
        {
          label: "Nonmetallic Mineral Product Manufacturing",
        },
        {
          label: "Nonstore Retailers",
        },
        {
          label: "Nursing and Residential Care Facilities",
        },
        {
          label: "Oil and Gas Extraction",
        },
        {
          label: "Other Information Services",
        },
        {
          label: "Other Services (except Public Administration)",
        },
        {
          label: "Paper Manufacturing",
        },
        {
          label: "Performing Arts, Spectator Sports, and Related Industries",
        },
        {
          label: "Personal and Laundry Services",
        },
        {
          label: "Petroleum and Coal Products Manufacturing",
        },
        {
          label: "Pipeline Transportation",
        },
        {
          label: "Plastics and Rubber Products Manufacturing",
        },
        {
          label: "Postal Service",
        },
        {
          label: "Primary Metal Manufacturing",
        },
        {
          label: "Printing and Related Support Activities",
        },
        {
          label: "Private Households",
        },
        {
          label: "Professional and Business Services",
        },
        {
          label: "Professional, Scientific, and Technical Services",
        },
        {
          label: "Publishing Industries (except Internet)",
        },
        {
          label: "Rail Transportation",
        },
        {
          label: "Real Estate",
        },
        {
          label: "Real Estate and Rental and Leasing",
        },
        {
          label:
            "Religious, Grantmaking, Civic, Professional, and Similar Organizations",
        },
        {
          label: "Rental and Leasing Services",
        },
        {
          label: "Repair and Maintenance",
        },
        {
          label: "Retail Trade",
        },
        {
          label: "Scenic and Sightseeing Transportation",
        },
        {
          label:
            "Securities, Commodity Contracts, and Other Financial Investments and Related Activities",
        },
        {
          label: "Service-Providing Industries",
        },
        {
          label: "Social Assistance",
        },
        {
          label: "Specialty Trade Contractors",
        },
        {
          label: "Sporting Goods, Hobby, Book, and Music Stores",
        },
        {
          label: "Support Activities for Agriculture and Forestry",
        },
        {
          label: "Support Activities for Mining",
        },
        {
          label: "Support Activities for Transportation",
        },
        {
          label: "Telecommunications",
        },
        {
          label: "Textile Mills",
        },
        {
          label: "Textile Product Mills",
        },
        {
          label: "Trade, Transportation, and Utilities",
        },
        {
          label: "Transit and Ground Passenger Transportation",
        },
        {
          label: "Transportation Equipment Manufacturing",
        },
        {
          label: "Transportation and Warehousing",
        },
        {
          label: "Truck Transportation",
        },
        {
          label: "Utilities",
        },
        {
          label: "Warehousing and Storage",
        },
        {
          label: "Waste Management and Remediation Services",
        },
        {
          label: "Water Transportation",
        },
        {
          label: "Wholesale Electronic Markets and Agents and Brokers",
        },
        {
          label: "Wholesale Trade",
        },
        {
          label: "Wood Product Manufacturing",
        },
      ],
      placeholder: null,
      type: "dropdown",
      validationMessages: {
        emailAddress: null,
        patterns: null,
        required: "Please select your company industry",
      },
      validations: {
        patterns: null,
        required: true,
      },
      value: "Computer and Electronic Product Manufacturing",
    },
    {
      disabled: false,
      fieldType: null,
      hint: "Please enter your U.S. business street address. Registered agent or virtual addresses are supported.",
      id: "businessAddress",
      label: "Business Address",
      options: null,
      placeholder: null,
      type: "short_text",
      validationMessages: {
        emailAddress: null,
        patterns: null,
        required: "Please enter your business address",
      },
      validations: {
        patterns: null,
        required: true,
      },
      value: "One Apple Park Way, Cupertino, CA 95014, United States",
    },
  ],
  metadata: {},
  status: "enabled",
  subtitle:
    "This information will not be displayed publicly. Novel currently only supports U.S. entities",
  thankYouPage: null,
  title: "Company Information",
  webhook:
    "https://novel-project.azurewebsites.net/api/v1/webhooks/company-information",
};

export const NOVEL_COMPANY_DOCUMENTS: FormRequest = {
  actions: {
    previous: null,
  },
  brand: {
    color: "#000000",
    logo: "https://assets.website-files.com/60425402fee4250aed708db0/60f9d46f08c918299f20bddc_Combination%20mark%20color%20logo%20black%20text.svg",
  },
  buttons_text: {
    submit: "Submit",
  },
  dataReference: null,
  fields: [
    {
      disabled: false,
      fieldType: null,
      hint: "Certificate of Incorporation, or Articles of Incorporation, Articles of Formation or Articles of Organization",
      id: "companyFormationDocuments",
      label: "Upload Company Formation Documents",
      options: null,
      placeholder: null,
      type: "file_upload",
      validationMessages: {
        emailAddress: null,
        patterns: null,
        required: "Please upload your company formation documents",
      },
      validations: {
        patterns: null,
        required: true,
      },
      value: null,
    },
  ],
  metadata: {},
  status: "enabled",
  subtitle: "",
  thankYouPage: {
    subtitle:
      "We've received your application and our team is currently reviewing it.",
    title: "Thank you for submitting your application.",
  },
  title: "Company Documents",
  webhook: null,
};
