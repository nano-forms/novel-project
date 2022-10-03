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

    if (req.params.reference === "first") {
      const formTemplate: Form = await formClient.find("80sgk4");

      const form: Form = await formClient.createFromTemplate(
        formTemplate,
        (formRequest: FormRequest) => {
          return {
            ...formRequest,
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

      return;
    }

    if (req.params.reference === "second") {
      const formTemplate: Form = await formClient.find("u07m25");

      const form: Form = await formClient.createFromTemplate(
        formTemplate,
        (formRequest: FormRequest) => {
          return {
            ...formRequest,
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

      return;
    }

    if (req.params.reference === "third") {
      const formTemplate: Form = await formClient.find("02aq68");

      const form: Form = await formClient.createFromTemplate(
        formTemplate,
        (formRequest: FormRequest) => {
          return {
            ...formRequest,
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

      return;
    }

    if (req.params.reference === "fourth") {
      // const response = await axios.post(
      //   "https://api.trustlink.africa/accounts/billing",
      //   {
      //     fullName: body.datum.data.fullName,
      //     emailAddress: body.datum.data.emailAddress,
      //     mobileNumber: body.datum.data.mobileNumber,
      //     companyName: body.datum.data.companyName,
      //     industry: body.datum.data.industry,
      //     provinceName: body.datum.data.province,
      //     password: body.datum.data.password,
      //     businessGoal: body.datum.data.goals,
      //     referralCodeUsedToRegister: "",
      //   }
      // );

      const response = {
        data: {
          token:
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJMb2dpblRva2VuIiwiYXVkIjoie1wiaWRcIjoxNDI0LFwiZGF0ZVJlZ2lzdGVyZWRcIjoxNjY0Nzg4OTgwNDI3LFwiYWNjb3VudEFjdGl2ZVwiOnRydWV9IiwiaWF0IjoxNjY0Nzg4OTgwLCJleHAiOjE2Njc0NjczODAsImlzcyI6ImlmY2JfcG9ydGFsIn0._zyODSM2yaltpG2sOGcpGjikgFlXpi0M1BQGWbZN0K_ZRD3k4ZKV4I-oCOrqtVD4GTDFNtqYiXDeWBdsnZqNmA",
        },
      };

      context.res = {
        body: {
          errorMessages: [],
          location: `https://trustlink.africa?token=${response.data.token}`,
          status: "ok",
        },
        status: 200,
      };

      return;
    }
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
