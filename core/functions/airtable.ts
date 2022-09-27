import axios from "axios";

export async function airtableUpsert(
  key: string,
  value: string,
  fields: { [key: string]: any }
): Promise<void> {
  const id: string | null = await airtableFindId(key, value);

  if (id) {
    await axios.patch(
      "https://api.airtable.com/v0/appSP7O2Jls9I87FA/Novel%20Project",
      {
        records: [{ id, fields }],
      },
      {
        headers: {
          Authorization: "Bearer keywUEWZniOrHqDgC",
        },
      }
    );

    return;
  }

  await axios.post(
    "https://api.airtable.com/v0/appSP7O2Jls9I87FA/Novel%20Project",
    {
      records: [
        {
          fields,
        },
      ],
    },
    {
      headers: {
        Authorization: "Bearer keywUEWZniOrHqDgC",
      },
    }
  );
}

export async function airtableFindId(
  key: string,
  value: string
): Promise<string | null> {
  const response = await axios.get<{
    records: Array<{
      id: string;
    }>;
  }>(`https://api.airtable.com/v0/appSP7O2Jls9I87FA/Novel%20Project`, {
    headers: {
      Authorization: "Bearer keywUEWZniOrHqDgC",
    },
    params: {
      filterByFormula: `{${key}} = '${value}'`,
    },
  });

  if (response.data.records.length) {
    return response.data.records[0].id;
  }

  return null;
}
