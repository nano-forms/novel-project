import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Datum, Form, FormRequest } from "@nano-forms/core";
import { airtableUpsert, formClient } from "../core";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const body: {
      datum: Datum;
      form: Form;
    } = req.body;

    console.log(JSON.stringify(body));

    try {
      await airtableUpsert(
        "Email Address",
        body.datum.data.emailAddress as string,
        {
          "Email Address": body.datum.data.emailAddress,
          "Legal Business Name": body.datum.data.legalBusinessName,
          "Company Type": body.datum.data.companyType,
          "Company Industry": body.datum.data.companyIndustry,
        }
      );
    } catch (error) {
      context.log(error.message);
    }

    const previousForm: Form = await formClient.createFromTemplate(
      body.form,
      (formRequest: FormRequest) => {
        return {
          ...formRequest,
          dataReference: body.datum.reference,
        };
      },
      body.datum.data
    );

    const formTemplate: Form = await formClient.find("b132e7");

    const form: Form = await formClient.createFromTemplate(
      formTemplate,
      (formRequest: FormRequest) => {
        return {
          ...formRequest,
          actions: {
            ...formRequest.actions,
            previous: {
              ...formRequest.actions.previous,
              uri: `/${previousForm.reference}`,
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
        location: `/${form.reference}`,
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
