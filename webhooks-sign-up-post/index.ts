import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Datum, Form, FormRequest } from "@nano-forms/core";
import { airtableUpsert, formClient, NOVEL_COMPANY_INFORMATION } from "../core";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const body: {
      datum: Datum;
      form: Form;
    } = req.body;

    try {
      await airtableUpsert(
        "Email Address",
        body.datum.data.emailAddress as string,
        {
          "Email Address": body.datum.data.emailAddress,
        }
      );
    } catch (error) {
      context.log(error.message);
    }

    const signUpForm: Form = await formClient.createFromTemplate(
      body.form,
      (formRequest: FormRequest) => {
        return {
          ...formRequest,
          dataReference: body.datum.reference,
        };
      },
      body.datum.data
    );

    const companyInformationForm: Form = await formClient.createFromTemplate(
      NOVEL_COMPANY_INFORMATION,
      (formRequest: FormRequest) => {
        return {
          ...formRequest,
          actions: {
            previous: {
              uri: `/${signUpForm.reference}`,
            },
          },
          dataReference: body.datum.reference,
        };
      },
      null
    );

    context.res = {
      body: {
        errorMessages: [],
        location: `/${companyInformationForm.reference}`,
        status: "ok",
      },
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
