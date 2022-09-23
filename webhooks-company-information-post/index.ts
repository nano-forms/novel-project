import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import axios from "axios";
import { Datum, Form, FormRequest } from "@nano-forms/core";
import { formClient, NOVEL_COMPANY_DOCUMENTS } from "../core";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const body: {
      datum: Datum;
      form: Form;
    } = req.body;

    const companyDocumentsForm: Form = await formClient.createFromTemplate(
      NOVEL_COMPANY_DOCUMENTS,
      (formRequest: FormRequest) => {
        return {
          ...formRequest,
          // actions: {
          //   previous: {
          //     uri: `/${signUpForm.reference}`,
          //   },
          // },
          dataReference: body.datum.reference,
        };
      },
      body.datum.data
    );

    context.log(
      JSON.stringify({ location: `/${companyDocumentsForm.reference}` })
    );

    context.res = {
      body: { location: `/${companyDocumentsForm.reference}` },
      status: 200,
    };
  } catch (error) {
    context.log(error.message);

    context.res = {
      body: {
        message: error.message,
      },
      status: 500,
    };
  }
};

export default httpTrigger;
