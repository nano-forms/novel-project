import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Datum, Form, FormRequest } from "@nano-forms/core";
import axios from "axios";

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
        location: `https://trustlink.africa?token=${response.data.token}`,
        ...body,
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
