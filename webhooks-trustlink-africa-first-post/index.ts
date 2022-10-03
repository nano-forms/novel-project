import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Datum, Form, FormRequest } from "@nano-forms/core";
import { formClient } from "../core";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const body: {
      datum: Datum;
      form: Form;
    } = req.body;

    console.log(JSON.stringify(body.datum));

    const secondFormTemplate: Form = await formClient.find("eieuld");

    const secondForm: Form = await formClient.createFromTemplate(
      secondFormTemplate,
      (formRequest: FormRequest) => {
        return {
          ...formRequest,
          dataReference: body.datum.reference,
        };
      },
      null
    );

    context.res = {
      body: { location: `/${secondForm.reference}`, ...body },
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
