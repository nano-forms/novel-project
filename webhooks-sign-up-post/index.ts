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

    const formTemplate: Form = await formClient.find("00shm5");

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
    context.log(error.stack);

    if (error.response) {
      context.log(JSON.stringify(error.response.data));
    }

    context.res = {
      body: {
        message: error.message,
        stack: error.stack,
      },
      status: 500,
    };
  }
};

export default httpTrigger;
